export type ProductCategory = "citrus" | "fresh-fruits" | "vegetables" | "iqf-frozen";

export interface Product {
  slug: string;
  name: string;
  category: ProductCategory;
  tagline: string;
  description: string;
  image: string;
  heroImage?: string;
  season: string;
  packTypes: string[];
  packagingOptions: string[];
  calibers?: string[];
  shelfLife: string;
  storageTemp: string;
  certifications: string[];
  targetMarkets: string[];
  specs: { label: string; value: string }[];
  faq: { question: string; answer: string }[];
  alsoAvailableFrozen?: boolean;
}

export interface BlogPost {
  slug: string;
  title: string;
  excerpt: string;
  category: string;
  readTime: string;
  publishedAt: string;
  image: string;
  author: {
    name: string;
    role: string;
    avatar?: string;
  };
  content: string | Record<string, unknown>;
}

export interface Category {
  slug: ProductCategory;
  name: string;
  description: string;
  heroImage: string;
  productCount?: number;
}
