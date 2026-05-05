import type { Product, BlogPost, Category, ProductCategory } from "./types";

/* eslint-disable @typescript-eslint/no-explicit-any */

const PLACEHOLDER_IMAGE = "/images/logos/logo-mark-colored.svg";

/** Extract a URL string from a Payload Media object or return the raw string */
function getMediaUrl(media: any, fallback: string = PLACEHOLDER_IMAGE): string {
  if (!media) return fallback;
  if (typeof media === "string") return media;
  return media.url || fallback;
}

/** Convert Payload array fields ({value, id}[]) to string[] */
function toStringArray(arr: any[] | undefined): string[] {
  if (!arr) return [];
  return arr.map((item) => (typeof item === "string" ? item : item.value || ""));
}

/** Convert Payload specs array to {label, value}[] */
function toSpecsArray(arr: any[] | undefined): { label: string; value: string }[] {
  if (!arr) return [];
  return arr.map((item) => ({
    label: item.label || "",
    value: item.value || "",
  }));
}

/** Convert Payload FAQ array to {question, answer}[] */
function toFaqArray(arr: any[] | undefined): { question: string; answer: string }[] {
  if (!arr) return [];
  return arr.map((item) => ({
    question: item.question || "",
    answer: item.answer || "",
  }));
}

/** Get category slug from a Payload relationship field */
function getCategorySlug(category: any): ProductCategory {
  if (!category) return "citrus";
  if (typeof category === "string") return category as ProductCategory;
  return (category.slug || "citrus") as ProductCategory;
}

/** Map a Payload Product document to the frontend Product interface */
export function mapProduct(doc: any): Product {
  return {
    slug: doc.slug || "",
    name: doc.name || "",
    category: getCategorySlug(doc.category),
    tagline: doc.tagline || "",
    description: doc.description || "",
    image: getMediaUrl(doc.image),
    heroImage: getMediaUrl(doc.heroImage) || undefined,
    season: doc.season || "",
    packTypes: toStringArray(doc.packTypes),
    packagingOptions: toStringArray(doc.packagingOptions),
    calibers: toStringArray(doc.calibers) || undefined,
    shelfLife: doc.shelfLife || "",
    storageTemp: doc.storageTemp || "",
    certifications: toStringArray(doc.certifications),
    targetMarkets: toStringArray(doc.targetMarkets),
    specs: toSpecsArray(doc.specs),
    faq: toFaqArray(doc.faq),
    alsoAvailableFrozen: doc.alsoAvailableFrozen || false,
  };
}

/** Map a Payload BlogPost document to the frontend BlogPost interface */
export function mapBlogPost(doc: any): BlogPost {
  return {
    slug: doc.slug || "",
    title: doc.title || "",
    excerpt: doc.excerpt || "",
    category: doc.category || "",
    readTime: doc.readTime || "",
    publishedAt: doc.publishedAt || "",
    image: getMediaUrl(doc.image),
    author: {
      name: doc.author?.name || "Express Foods",
      role: doc.author?.role || "",
      avatar: undefined,
    },
    // Pass raw Lexical JSON — BlogContent handles both string and object formats
    content: doc.content || "",
  };
}

/** Map a Payload Category document to the frontend Category interface */
export function mapCategory(doc: any, productCount?: number): Category {
  return {
    slug: (doc.slug || "") as ProductCategory,
    name: doc.name || "",
    description: doc.description || "",
    heroImage: getMediaUrl(doc.heroImage),
    productCount,
  };
}
