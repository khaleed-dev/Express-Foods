import type { Payload } from "payload";
import { products } from "./data/products";
import { blogPosts } from "./data/blog";
import { categories } from "./data/categories";
import fs from "fs";
import path from "path";

const PUBLIC_DIR = path.resolve(process.cwd(), "public");

/**
 * Upload a local file from public/ to the Payload media collection.
 * Returns the created Media document ID, or null if the file doesn't exist.
 */
async function uploadMedia(
  payload: Payload,
  filePath: string,
  alt: string,
): Promise<string | number | null> {
  // filePath is like "/images/products/Oranges.png"
  const absolutePath = path.join(PUBLIC_DIR, filePath);
  if (!fs.existsSync(absolutePath)) {
    payload.logger.warn(`Image not found: ${absolutePath}`);
    return null;
  }

  const buffer = fs.readFileSync(absolutePath);
  const filename = path.basename(filePath);
  const ext = path.extname(filename).toLowerCase();
  const mimeTypes: Record<string, string> = {
    ".png": "image/png",
    ".jpg": "image/jpeg",
    ".jpeg": "image/jpeg",
    ".webp": "image/webp",
    ".svg": "image/svg+xml",
  };

  const doc = await payload.create({
    collection: "media",
    data: { alt },
    file: {
      data: buffer,
      name: filename,
      mimetype: mimeTypes[ext] || "image/png",
      size: buffer.length,
    },
  });

  return doc.id;
}

/**
 * Seed Payload CMS with the static product, blog, and category data.
 */
export async function seed(payload: Payload): Promise<void> {
  payload.logger.info("--- Starting seed ---");

  // ── Clear existing data ──
  for (const collection of [
    "pages",
    "products",
    "blog-posts",
    "categories",
    "media",
  ] as const) {
    payload.logger.info(`Clearing existing ${collection}...`);
    const existing = await payload.find({ collection, limit: 1000 });
    for (const doc of existing.docs) {
      await payload.delete({ collection, id: doc.id });
    }
  }

  // ── Upload category hero images ──
  payload.logger.info("Uploading category hero images...");
  const categoryHeroMap = new Map<string, string | number>();
  for (const cat of categories) {
    if (cat.heroImage) {
      const mediaId = await uploadMedia(payload, cat.heroImage, `${cat.name} hero`);
      if (mediaId) categoryHeroMap.set(cat.slug, mediaId);
    }
  }

  // ── Seed categories ──
  payload.logger.info(`Seeding ${categories.length} categories...`);
  const categoryMap = new Map<string, number | string>();

  for (let i = 0; i < categories.length; i++) {
    const cat = categories[i];
    const created = await payload.create({
      collection: "categories",
      data: {
        name: cat.name,
        slug: cat.slug,
        description: cat.description,
        sortOrder: i,
        heroImage: categoryHeroMap.get(cat.slug) || undefined,
      },
    });
    categoryMap.set(cat.slug, created.id);
  }
  payload.logger.info(`Seeded ${categories.length} categories.`);

  // ── Upload product images and seed products ──
  payload.logger.info(`Seeding ${products.length} products with images...`);
  for (const product of products) {
    const categoryId = categoryMap.get(product.category);
    if (!categoryId) {
      payload.logger.warn(
        `Category "${product.category}" not found for product "${product.name}", skipping.`,
      );
      continue;
    }

    // Upload product image
    let imageId: string | number | null = null;
    if (product.image) {
      imageId = await uploadMedia(payload, product.image, product.name);
    }

    // Upload hero image if different
    let heroImageId: string | number | null = null;
    if (product.heroImage && product.heroImage !== product.image) {
      heroImageId = await uploadMedia(
        payload,
        product.heroImage,
        `${product.name} hero`,
      );
    }

    await payload.create({
      collection: "products",
      data: {
        name: product.name,
        slug: product.slug,
        category: categoryId,
        tagline: product.tagline,
        description: product.description,
        image: imageId || undefined,
        heroImage: heroImageId || undefined,
        season: product.season,
        packTypes: product.packTypes.map((value) => ({ value })),
        packagingOptions: product.packagingOptions.map((value) => ({ value })),
        calibers: product.calibers?.map((value) => ({ value })) ?? [],
        shelfLife: product.shelfLife,
        storageTemp: product.storageTemp,
        certifications: product.certifications.map((value) => ({ value })),
        targetMarkets: product.targetMarkets.map((value) => ({ value })),
        specs: product.specs.map((spec) => ({
          label: spec.label,
          value: spec.value,
        })),
        faq: product.faq.map((item) => ({
          question: item.question,
          answer: item.answer,
        })),
        alsoAvailableFrozen: product.alsoAvailableFrozen ?? false,
      },
    });
  }
  payload.logger.info(`Seeded ${products.length} products.`);

  // ── Upload blog images and seed blog posts ──
  payload.logger.info(`Seeding ${blogPosts.length} blog posts with images...`);
  for (const post of blogPosts) {
    let imageId: string | number | null = null;
    if (post.image) {
      imageId = await uploadMedia(payload, post.image, post.title);
    }

    await payload.create({
      collection: "blog-posts",
      data: {
        title: post.title,
        slug: post.slug,
        excerpt: post.excerpt,
        category: post.category,
        readTime: post.readTime,
        publishedAt: new Date(post.publishedAt).toISOString(),
        image: imageId || undefined,
        author: {
          name: post.author.name,
          role: post.author.role,
        },
        content: {
          root: {
            type: "root",
            children: (typeof post.content === "string" ? post.content : "")
              .split("\n\n")
              .map((paragraph) => ({
              type: "paragraph",
              children: [
                {
                  type: "text",
                  detail: 0,
                  format: 0,
                  mode: "normal",
                  style: "",
                  text: paragraph.trim(),
                  version: 1,
                },
              ],
              direction: "ltr",
              format: "",
              indent: 0,
              textFormat: 0,
              version: 1,
            })),
            direction: "ltr",
            format: "",
            indent: 0,
            version: 1,
          },
        },
        status: "published",
      },
    });
  }
  payload.logger.info(`Seeded ${blogPosts.length} blog posts.`);

  // ── Seed site settings ──
  payload.logger.info("Seeding site settings...");
  await payload.updateGlobal({
    slug: "site-settings",
    data: {
      company: {
        name: "Express Foods",
        email: "info@express-foods.com",
        phone: "+20 2 2345 6789",
        address: "Cairo, Nile Delta Agricultural Zone, Egypt",
        whatsapp: "https://wa.me/20200000000",
      },
      social: {
        facebook: "#",
        instagram: "#",
        twitter: "#",
        linkedin: "#",
        youtube: "#",
      },
      navigation: {
        mainLinks: [
          { label: "About", href: "/about" },
          { label: "Products", href: "/products" },
          { label: "Blog", href: "/blog" },
          { label: "Contact", href: "/contact" },
        ],
        ctaButtons: [
          { label: "Get a Quote", href: "/contact", variant: "primary" },
        ],
        dropdownSections: [
          {
            title: "Our Products",
            links: [
              { icon: "🍊", label: "Citrus", description: "Oranges, mandarins, lemons, grapefruit", href: "/products/citrus" },
              { icon: "🍓", label: "Fresh Fruits", description: "Mangoes, strawberries, grapes, dates", href: "/products/fresh-fruits" },
              { icon: "🥦", label: "Vegetables", description: "Peppers, potatoes, onions, beans", href: "/products/vegetables" },
              { icon: "❄️", label: "IQF Frozen", description: "Flash-frozen fruits and vegetables", href: "/products/iqf-frozen" },
            ],
          },
        ],
      },
      footer: {
        columns: [
          {
            heading: "Company",
            links: [
              { label: "About Us", href: "/about" },
              { label: "Products", href: "/products" },
              { label: "Blog", href: "/blog" },
              { label: "Contact", href: "/contact" },
            ],
          },
          {
            heading: "Products",
            links: [
              { label: "Citrus", href: "/products/citrus" },
              { label: "Fresh Fruits", href: "/products/fresh-fruits" },
              { label: "Vegetables", href: "/products/vegetables" },
              { label: "IQF Frozen", href: "/products/iqf-frozen" },
            ],
          },
        ],
        legalLinks: [
          { label: "Privacy Policy", href: "/privacy" },
          { label: "Terms of Service", href: "/terms" },
        ],
        copyrightText: "Express Foods. All rights reserved.",
      },
      defaultCta: {
        heading: "Ready to source premium Egyptian produce?",
        description:
          "Get in touch with our team to discuss your requirements, request samples, or get a competitive quote.",
        primaryLabel: "Get a Quote",
        primaryHref: "/contact",
        secondaryLabel: "View Products",
        secondaryHref: "/products",
      },
    },
  });
  payload.logger.info("Seeded site settings.");

  // ── Upload section images for pages ──
  payload.logger.info("Uploading section images for pages...");
  const sectionImages: Record<string, string | number | null> = {};
  const sectionImagePaths: Record<string, string> = {
    "home-slider-01": "/images/sections/home-slider-01.webp",
    "home-slider-02": "/images/sections/home-slider-02.webp",
    "home-slider-03": "/images/sections/home-slider-03.webp",
    "home-global-reach": "/images/sections/home-global-reach.webp",
    "story": "/images/sections/A promise that stars in the soil section/two-lakes-with-forest-green-field-dividing-them-country-road-passing-through-nearby.webp",
    "process": "/images/sections/From soil to ship/From soil to ship section image.webp",
    "about-origins": "/images/sections/about-origins.webp",
    "about-stats": "/images/sections/about-stats.webp",
    "contact-hero": "/images/sections/contact-hero.webp",
  };
  for (const [key, filePath] of Object.entries(sectionImagePaths)) {
    sectionImages[key] = await uploadMedia(payload, filePath, key);
  }

  // Upload pillar images
  const pillarPaths = [
    "/images/sections/what sets up apart section/Certified quality from farm to port.webp",
    "/images/sections/what sets up apart section/Fresh and frozen, one trusted partner.webp",
    "/images/sections/what sets up apart section/Unbroken cold chain, every mile.webp",
    "/images/sections/what sets up apart section/A partner, not a vendor.webp",
  ];
  const pillarIds: (string | number | null)[] = [];
  for (const p of pillarPaths) {
    pillarIds.push(await uploadMedia(payload, p, path.basename(p, ".webp")));
  }

  // Upload product range images
  const rangePaths = [
    "/images/sections/what we grow and ship section images/Fresh citrus.webp",
    "/images/sections/what we grow and ship section images/Fresh fruits.webp",
    "/images/sections/what we grow and ship section images/Fresh vegetables.webp",
    "/images/sections/what we grow and ship section images/IQF frozen.png",
  ];
  const rangeIds: (string | number | null)[] = [];
  for (const p of rangePaths) {
    rangeIds.push(await uploadMedia(payload, p, path.basename(p).replace(/\.\w+$/, "")));
  }

  // Upload featured layout images
  const featuredPaths = [
    "/images/sections/Egypt's climate works for you section/Year-round harvest.webp",
    "/images/sections/Egypt's climate works for you section/Three to five day delivery.webp",
    "/images/sections/Egypt's climate works for you section/Dual fresh and frozen.webp",
  ];
  const featuredIds: (string | number | null)[] = [];
  for (const p of featuredPaths) {
    featuredIds.push(await uploadMedia(payload, p, path.basename(p, ".webp")));
  }

  // ── Seed pages ──
  payload.logger.info("Seeding pages...");

  // HOME PAGE
  await payload.create({
    collection: "pages",
    data: {
      title: "Home",
      slug: "home",
      status: "published",
      meta: {
        metaTitle: "Express Foods — Premium Egyptian Fruits & Vegetables for Global Markets",
        metaDescription: "Express Foods sources, certifies, and ships the finest fresh and frozen produce from Egypt to the world's most demanding buyers.",
      },
      layout: [
        {
          blockType: "storyBlock",
          tagline: "Story",
          heading: "A promise that starts in the soil",
          description: "Every shipment begins in the Nile Delta and ends on global shelves. Egypt\u2019s agricultural richness deserves to be delivered with care, precision, and certification. We control every step, test every batch, monitor every container.",
          image: sectionImages["story"] || undefined,
          stats: [
            { value: "31+", label: "Products exported year-round" },
            { value: "5", label: "Global certifications held" },
          ],
          primaryCta: { label: "Learn our story", href: "/about" },
          secondaryCta: { label: "About us", href: "/about" },
        },
        {
          blockType: "pillarsBlock",
          tagline: "Why",
          heading: "What sets us apart",
          description: "Four pillars built on trust, science, and global standards.",
          pillars: [
            { label: "One", heading: "Certified quality from farm to port", description: "ISO 22000, HACCP, GLOBALG.A.P., BRCGS, IFS certified.", image: pillarIds[0] || undefined, href: "/about" },
            { label: "Two", heading: "Fresh and frozen, one trusted partner", description: "Dual capability means single sourcing, consistent supply.", image: pillarIds[1] || undefined, href: "/products" },
            { label: "Three", heading: "Unbroken cold chain, every mile", description: "Temperature monitored from harvest through delivery.", image: pillarIds[2] || undefined, href: "/about" },
            { label: "Four", heading: "A partner, not a vendor", description: "24-hour response, multilingual team, long-term commitment.", image: pillarIds[3] || undefined, href: "/contact" },
          ],
        },
        {
          blockType: "productRangeBlock",
          tagline: "Range",
          heading: "What we grow and ship",
          description: "Four product lines, year-round availability, certified quality. From the Nile Delta to your shelves.",
          categories: [
            { heading: "Fresh citrus", description: "Oranges, mandarins, lemons. Peak season November through May.", href: "/products/citrus", image: rangeIds[0] || undefined },
            { heading: "Fresh fruits", description: "Strawberries, mangoes, pomegranates, grapes, melons, guava.", href: "/products/fresh-fruits", image: rangeIds[1] || undefined },
            { heading: "Fresh vegetables", description: "Potatoes, onions, garlic, green beans, okra, peppers, lettuce.", href: "/products/vegetables", image: rangeIds[2] || undefined },
            { heading: "IQF frozen", description: "Okra, molokhia, green beans, spinach, artichoke, strawberries, mango.", href: "/products/iqf-frozen", image: rangeIds[3] || undefined },
          ],
        },
        {
          blockType: "featuredLayoutBlock",
          tagline: "Origin",
          heading: "Egypt\u2019s climate works for you",
          description: "Year-round harvest from the Nile Delta means consistent supply when you need it. Three to five days to European ports gives you fresher product, faster.",
          tabs: [
            { heading: "Year-round harvest", description: "No seasonal gaps. The Nile Delta grows what the world needs, when it needs it.", image: featuredIds[0] || undefined },
            { heading: "Three to five day delivery", description: "Strategic proximity to Europe means fresher produce on your shelves, faster margins in your business.", image: featuredIds[1] || undefined },
            { heading: "Dual fresh and frozen", description: "One partner for both product lines. Consistent quality, simplified procurement.", image: featuredIds[2] || undefined },
          ],
        },
        {
          blockType: "processBlock",
          tagline: "Process",
          heading: "From soil to ship",
          description: "Six steps. One standard. Every time.",
          steps: [
            { heading: "We source from certified farms", description: "Only growers who meet our standards make the cut." },
            { heading: "We inspect and grade on site", description: "Every batch is tested before it leaves the farm." },
            { heading: "We pack to specification", description: "Retail-ready or bulk, configured to your market." },
            { heading: "We cool immediately", description: "Pre-cooling starts within hours of harvest." },
          ],
          featuredImage: sectionImages["process"] || undefined,
          featuredHeading: "Hand-picked at the source",
          featuredDescription: "Only produce selected by skilled hands at peak ripeness leaves our certified farms.",
        },
        {
          blockType: "globalReachBlock",
          tagline: "Reach",
          heading: "We ship to where you are",
          description: "Weekly containers leave Egypt for Europe, the Gulf, Africa, and Asia. Consistent supply. Reliable partners. Global scale.",
          image: sectionImages["home-global-reach"] || undefined,
          regions: [
            { heading: "Europe", description: "UK, Netherlands, Germany, France, and beyond. Three to five days." },
            { heading: "Gulf states", description: "UAE, Saudi Arabia, Kuwait, Qatar. Strategic proximity. Fast turnaround." },
          ],
        },
        {
          blockType: "testimonialsBlock",
          heading: "What our partners say",
          description: "Trusted by importers and retailers across Europe, the Gulf, and Asia.",
          testimonials: [
            { quote: "Express Foods has been our most reliable Egyptian supplier for three seasons running. Consistent quality, on-time delivery, every single shipment.", name: "Marco Rossi", role: "Procurement Director", company: "Mediterranean Fresh, Italy", rating: 5 },
            { quote: "Their team responds within hours, not days. When we had a last-minute order change, they adjusted the spec and still hit our delivery window.", name: "Fatima Al-Mansouri", role: "Import Manager", company: "Gulf Fresh Trading, UAE", rating: 5 },
            { quote: "We switched from three separate Egyptian suppliers to Express Foods alone. One partner for fresh and frozen — it simplified our entire supply chain.", name: "James Chen", role: "Head of Sourcing", company: "Pacific Produce Group, Singapore", rating: 5 },
          ],
        },
        {
          blockType: "blogPreviewBlock",
          tagline: "Insights",
          heading: "From the field",
          description: "Market intelligence, sourcing tips, and industry trends.",
          postsToShow: 3,
        },
        {
          blockType: "ctaBlock",
          heading: "Ready to source premium Egyptian produce?",
          description: "Get in touch with our team to discuss your requirements, request samples, or get a competitive quote.",
          primaryCta: { label: "Get a Quote", href: "/contact" },
          secondaryCta: { label: "View Products", href: "/products" },
        },
      ],
    },
  });

  // ABOUT PAGE
  await payload.create({
    collection: "pages",
    data: {
      title: "About Us",
      slug: "about",
      status: "published",
      meta: {
        metaTitle: "About Express Foods — Our Story",
        metaDescription: "Learn about Express Foods, Egypt's trusted exporter of premium fresh and frozen produce.",
      },
      layout: [
        {
          blockType: "heroBlock",
          tagline: "About",
          heading: "The people behind every shipment",
          description: "Express Foods was founded on a simple belief: Egypt\u2019s agricultural richness deserves to be delivered with care, precision, and certification.",
          backgroundImage: sectionImages["about-origins"] || undefined,
        },
        {
          blockType: "storyBlock",
          tagline: "Origins",
          heading: "Rooted in the Nile Delta",
          description: "Our story begins in the fertile lands of the Nile Delta, where generations of farming expertise meet modern export infrastructure. We built Express Foods to bridge the gap between Egyptian farms and global markets.",
          image: sectionImages["about-origins"] || undefined,
          stats: [
            { value: "4", label: "Product categories" },
            { value: "31+", label: "Products exported" },
          ],
          primaryCta: { label: "View products", href: "/products" },
          secondaryCta: { label: "Contact us", href: "/contact" },
        },
        {
          blockType: "statsBlock",
          tagline: "Scale",
          heading: "By the numbers",
          description: "Every metric reflects a commitment to quality, consistency, and partnership.",
          stats: [
            { value: "31+", label: "Products exported" },
            { value: "5", label: "Global certifications" },
            { value: "4", label: "Product categories" },
            { value: "24h", label: "Response time" },
          ],
        },
        {
          blockType: "testimonialsBlock",
          heading: "Why buyers trust us",
          testimonials: [
            { quote: "Express Foods has been our most reliable Egyptian supplier for three seasons running.", name: "Marco Rossi", role: "Procurement Director", company: "Mediterranean Fresh, Italy", rating: 5 },
            { quote: "Their team responds within hours, not days.", name: "Fatima Al-Mansouri", role: "Import Manager", company: "Gulf Fresh Trading, UAE", rating: 5 },
          ],
        },
        {
          blockType: "ctaBlock",
          heading: "Partner with us",
          description: "Join importers across Europe, the Gulf, and Asia who trust Express Foods for consistent quality and reliable supply.",
          primaryCta: { label: "Get in touch", href: "/contact" },
          secondaryCta: { label: "View products", href: "/products" },
        },
      ],
    },
  });

  // CONTACT PAGE
  await payload.create({
    collection: "pages",
    data: {
      title: "Contact",
      slug: "contact",
      status: "published",
      meta: {
        metaTitle: "Contact Express Foods",
        metaDescription: "Get in touch with Express Foods for quotes, samples, and partnership inquiries.",
      },
      layout: [
        {
          blockType: "heroBlock",
          tagline: "Contact",
          heading: "Let\u2019s talk produce",
          description: "Whether you need a quote, samples, or want to discuss a long-term supply agreement \u2014 our team is ready.",
          backgroundImage: sectionImages["contact-hero"] || undefined,
        },
        {
          blockType: "faqBlock",
          heading: "Frequently asked questions",
          description: "Quick answers to common buyer questions.",
          faqs: [
            { question: "What is the minimum order quantity?", answer: "Our standard MOQ is one 20-foot container (approximately 20 tonnes), but we can accommodate smaller trial shipments for new partners." },
            { question: "How quickly do you respond to inquiries?", answer: "We aim to respond to all inquiries within 24 hours during business days. Urgent requests can be handled via WhatsApp." },
            { question: "What certifications do you hold?", answer: "We hold ISO 22000, HACCP, GLOBALG.A.P., BRCGS, and IFS certifications. FDA registration is available for US-bound shipments." },
            { question: "How do you ensure cold chain integrity?", answer: "Temperature monitoring begins at pre-cooling and continues through cold storage, reefer transport, and port loading. We provide temperature logs with every shipment." },
            { question: "Do you offer private label packaging?", answer: "Yes. We can pack under your brand with custom labels, box printing, and retail-ready formats to your specification." },
          ],
          showContactCta: false,
        },
      ],
    },
  });
  payload.logger.info("Seeded 3 pages (home, about, contact).");

  payload.logger.info("--- Seed complete ---");
}
