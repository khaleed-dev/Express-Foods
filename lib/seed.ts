import type { Payload } from "payload";
import { products } from "./data/products";
import { blogPosts } from "./data/blog";

/**
 * Seed Payload CMS with the static product and blog data.
 * Can be called from a script or API route.
 *
 * Usage from an API route or server action:
 *   import { getPayload } from 'payload'
 *   import config from '@payload-config'
 *   import { seed } from '@/lib/seed'
 *   const payload = await getPayload({ config })
 *   await seed(payload)
 */
export async function seed(payload: Payload): Promise<void> {
  payload.logger.info("--- Starting seed ---");

  // Clear existing data (optional — comment out to append instead)
  payload.logger.info("Clearing existing products...");
  const existingProducts = await payload.find({
    collection: "products",
    limit: 1000,
  });
  for (const doc of existingProducts.docs) {
    await payload.delete({ collection: "products", id: doc.id });
  }

  payload.logger.info("Clearing existing blog posts...");
  const existingPosts = await payload.find({
    collection: "blog-posts",
    limit: 1000,
  });
  for (const doc of existingPosts.docs) {
    await payload.delete({ collection: "blog-posts", id: doc.id });
  }

  // Seed products
  payload.logger.info(`Seeding ${products.length} products...`);
  for (const product of products) {
    await payload.create({
      collection: "products",
      data: {
        name: product.name,
        slug: product.slug,
        category: product.category,
        tagline: product.tagline,
        description: product.description,
        // image is a string path in static data — skip upload relation for seed
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

  // Seed blog posts
  payload.logger.info(`Seeding ${blogPosts.length} blog posts...`);
  for (const post of blogPosts) {
    await payload.create({
      collection: "blog-posts",
      data: {
        title: post.title,
        slug: post.slug,
        excerpt: post.excerpt,
        category: post.category,
        readTime: post.readTime,
        publishedAt: new Date(post.publishedAt).toISOString(),
        author: {
          name: post.author.name,
          role: post.author.role,
        },
        // Content is stored as plain text in static data.
        // For richText, we convert to a minimal Lexical root node.
        content: {
          root: {
            type: "root",
            children: post.content.split("\n\n").map((paragraph) => ({
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

  payload.logger.info("--- Seed complete ---");
}
