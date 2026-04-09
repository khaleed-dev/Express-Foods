import { BlogPost } from "@/lib/types";

export const blogPosts: BlogPost[] = [
  {
    slug: "european-demand-egyptian-citrus",
    title: "European demand for Egyptian citrus climbs",
    excerpt:
      "Climate, soil, and timing create a competitive edge that European buyers increasingly recognize.",
    category: "Markets",
    readTime: "4 min read",
    publishedAt: "2026-03-15",
    image: "/images/sections/home-slider-01.webp",
    author: { name: "Express Foods", role: "Market Intelligence" },
    content: `Egypt has steadily cemented its position as one of the leading citrus exporters to the European Union, and the trajectory shows no signs of slowing. According to recent trade data, Egyptian orange and mandarin shipments to the EU grew by over twelve percent in the 2025-2026 season compared to the prior year. Buyers in the United Kingdom, the Netherlands, and Germany are locking in contracts earlier, signalling a structural shift in procurement strategy rather than a short-term spike.

Several factors underpin this growth. The Nile Delta and Upper Egypt benefit from a combination of fertile alluvial soil, abundant sunlight, and a temperate winter climate that produces citrus with high sugar content and excellent external colour. These agronomic advantages translate directly into shelf appeal and consumer preference at European retail. Additionally, Egypt's harvest window — running roughly from November through May — fills a critical supply gap between the Southern Hemisphere and Mediterranean seasons, giving importers continuity they struggle to find elsewhere.

Logistics have also improved. Modern packhouses now operate with automated sorting, waxing, and cold storage that meet GlobalG.A.P. and GRASP standards as a baseline. Transit times from Alexandria to Rotterdam average three to five days by reefer vessel, which is competitive with shipments from South Africa or Argentina and dramatically cheaper than air freight alternatives. The result is fruit that arrives in better condition at a lower landed cost.

For European buyers evaluating their citrus supply chains, the message is clear: Egyptian citrus is no longer a secondary option. It is a primary source, backed by quality infrastructure, certified food safety, and a season window that aligns precisely with peak European demand. Early engagement with reliable Egyptian exporters is the most effective way to secure volume and pricing in a market that is becoming more competitive each year.`,
  },
  {
    slug: "cold-chain-integrity-farm-to-shelf",
    title: "Cold chain integrity from farm to shelf",
    excerpt:
      "How temperature monitoring and logistics precision protect your margins and your reputation.",
    category: "Quality",
    readTime: "5 min read",
    publishedAt: "2026-03-01",
    image: "/images/sections/home-usp-02.webp",
    author: { name: "Express Foods", role: "Quality Assurance" },
    content: `In fresh produce export, the cold chain is not merely a logistics function — it is the single most important variable determining whether a shipment arrives as a profitable asset or a costly liability. For importers sourcing from Egypt, understanding how temperature is managed from the moment of harvest through to the destination warehouse is essential to protecting both margins and brand reputation.

The cold chain begins at the farm gate. After harvest, produce is transported in refrigerated trucks to the packhouse, where it enters pre-cooling chambers within hours. Citrus, for example, is cooled to between six and eight degrees Celsius before sorting and packing. Strawberries and leafy vegetables require even lower temperatures, often reaching two to four degrees within the first sixty minutes of arrival. This rapid pull-down is critical: every hour of delay at ambient temperature can reduce shelf life by a full day at the retail end.

Once packed and palletised, goods move to cold storage facilities maintained at the product-specific set point until loading. At the port, reefer containers are pre-cooled and continuously monitored via GPS-enabled data loggers that record temperature, humidity, and door-opening events in real time. These logs are shared with the buyer upon arrival, providing full traceability and an auditable chain of custody. Transit from Egyptian ports to major European hubs — Rotterdam, Felixstowe, Hamburg — typically takes three to five days, during which the container atmosphere is controlled to extend freshness without chemical intervention.

The final link is equally important. Coordination with the destination logistics partner ensures containers are stripped and transferred to cold storage without breaks in the chain. At Express Foods, we treat the cold chain as a promise to our buyers: the product you receive will match the product we packed. That commitment is backed by investment in infrastructure, training, and technology at every stage of the journey.`,
  },
  {
    slug: "iqf-strawberries-north-america",
    title: "IQF strawberries gain ground in North America",
    excerpt:
      "Individually quick frozen Egyptian strawberries are meeting rising demand for year-round berry supply.",
    category: "Products",
    readTime: "3 min read",
    publishedAt: "2026-02-15",
    image: "/images/sections/home-products-range.webp",
    author: { name: "Express Foods", role: "Product Development" },
    content: `The North American market for individually quick frozen strawberries has expanded significantly over the past three years, driven by growth in smoothie manufacturing, ready-to-eat breakfast products, and retail frozen fruit bags. Egypt has emerged as a key supplier in this category, offering a combination of competitive pricing, consistent quality, and production scale that few origins can match.

Egyptian strawberries are harvested primarily between December and April, when the Nile Delta's mild winter climate produces berries with a deep red colour, firm texture, and balanced sweetness. After harvest, the fruit is washed, inspected, and flash-frozen at minus thirty-five degrees Celsius within hours. The IQF process freezes each berry individually, preventing clumping and preserving the cellular structure so that the fruit retains its shape, colour, and nutritional profile after thawing. This is a critical advantage for food manufacturers who require consistent piece integrity for automated production lines.

Quality certifications play an equally important role in market access. Egyptian IQF facilities serving the North American market typically hold BRC or FSSC 22000 certification, along with FDA registration and compliance with USDA import requirements. Residue testing is conducted at accredited laboratories before shipment, and certificates of analysis accompany every container. For buyers navigating an increasingly complex regulatory landscape, working with a certified Egyptian supplier simplifies compliance and reduces the risk of border rejections.

As demand for frozen berries continues to climb across the United States and Canada, Egyptian IQF strawberries represent a reliable, cost-effective, and quality-assured supply option. Buyers who establish sourcing relationships now will be well positioned to secure capacity as the market tightens in the seasons ahead.`,
  },
];

export function getAllBlogPosts(): BlogPost[] {
  return blogPosts.sort(
    (a, b) =>
      new Date(b.publishedAt).getTime() - new Date(a.publishedAt).getTime()
  );
}

export function getBlogPostBySlug(slug: string): BlogPost | undefined {
  return blogPosts.find((post) => post.slug === slug);
}
