import { getPayload } from "payload";
import config from "@payload-config";
import { mapProduct, mapBlogPost, mapCategory } from "./payload-mappers";
import type { Product, BlogPost, Category } from "./types";

async function getPayloadClient() {
  return getPayload({ config });
}

// ── Products ──

export async function getAllProducts(): Promise<Product[]> {
  const payload = await getPayloadClient();
  const result = await payload.find({
    collection: "products",
    depth: 2,
    limit: 100,
    sort: "name",
  });
  return result.docs.map(mapProduct);
}

export async function getProductBySlug(slug: string): Promise<Product | null> {
  const doc = await getRawProductBySlug(slug);
  return doc ? mapProduct(doc) : null;
}

export async function getRawProductBySlug(slug: string) {
  const payload = await getPayloadClient();
  const result = await payload.find({
    collection: "products",
    where: { slug: { equals: slug } },
    depth: 2,
    limit: 1,
  });
  return result.docs[0] ?? null;
}

export async function getProductsByCategory(
  categorySlug: string,
): Promise<Product[]> {
  const payload = await getPayloadClient();

  // First find the category by slug
  const categoryResult = await payload.find({
    collection: "categories",
    where: { slug: { equals: categorySlug } },
    limit: 1,
  });
  const category = categoryResult.docs[0];
  if (!category) return [];

  const result = await payload.find({
    collection: "products",
    where: { category: { equals: category.id } },
    depth: 2,
    limit: 100,
    sort: "name",
  });
  return result.docs.map(mapProduct);
}

// ── Categories ──

export async function getCategories(): Promise<Category[]> {
  const payload = await getPayloadClient();
  const result = await payload.find({
    collection: "categories",
    depth: 1,
    limit: 20,
    sort: "sortOrder",
  });
  // Also get product counts per category
  const categories = await Promise.all(
    result.docs.map(async (doc) => {
      const productCount = await payload.count({
        collection: "products",
        where: { category: { equals: doc.id } },
      });
      return mapCategory(doc, productCount.totalDocs);
    }),
  );
  return categories;
}

export async function getCategoryBySlug(
  slug: string,
): Promise<Category | null> {
  const payload = await getPayloadClient();
  const result = await payload.find({
    collection: "categories",
    where: { slug: { equals: slug } },
    depth: 1,
    limit: 1,
  });
  const doc = result.docs[0];
  if (!doc) return null;
  const productCount = await payload.count({
    collection: "products",
    where: { category: { equals: doc.id } },
  });
  return mapCategory(doc, productCount.totalDocs);
}

// ── Blog Posts ──

export async function getAllBlogPosts(): Promise<BlogPost[]> {
  const payload = await getPayloadClient();
  const result = await payload.find({
    collection: "blog-posts",
    where: { status: { equals: "published" } },
    depth: 1,
    limit: 100,
    sort: "-publishedAt",
  });
  return result.docs.map(mapBlogPost);
}

export async function getBlogPostBySlug(
  slug: string,
): Promise<BlogPost | null> {
  const doc = await getRawBlogPostBySlug(slug);
  return doc ? mapBlogPost(doc) : null;
}

export async function getRawBlogPostBySlug(slug: string) {
  const payload = await getPayloadClient();
  const result = await payload.find({
    collection: "blog-posts",
    where: { slug: { equals: slug } },
    depth: 1,
    limit: 1,
  });
  return result.docs[0] ?? null;
}

// ── Site Settings ──

export async function getSiteSettings() {
  const payload = await getPayloadClient();
  return payload.findGlobal({ slug: "site-settings", depth: 1 });
}

// ── Pages ──

export async function getPageBySlug(slug: string) {
  const payload = await getPayloadClient();
  const result = await payload.find({
    collection: "pages",
    where: {
      slug: { equals: slug },
      status: { equals: "published" },
    },
    depth: 3,
    limit: 1,
  });
  return result.docs[0] || null;
}
