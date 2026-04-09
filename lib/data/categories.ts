import type { Category } from "@/lib/types";

export const categories: Category[] = [
  {
    slug: "citrus",
    name: "Citrus",
    description:
      "Premium Nile Delta citrus — navels, mandarins, lemons, and grapefruit harvested at peak sweetness and shipped cold worldwide.",
    heroImage: "/images/products/Hero-Citrus-Mix.webp",
  },
  {
    slug: "fresh-fruits",
    name: "Fresh Fruits",
    description:
      "Sun-ripened Egyptian fruits — mangoes, strawberries, grapes, pomegranates, dates, and melons for every import season.",
    heroImage: "/images/products/Hero-Mixed-Fruits.webp",
  },
  {
    slug: "vegetables",
    name: "Vegetables",
    description:
      "Year-round supply of export-grade vegetables — peppers, potatoes, onions, beans, and leafy greens from certified Egyptian farms.",
    heroImage: "/images/products/Hero-Mixed-Vegetables.webp",
  },
  {
    slug: "iqf-frozen",
    name: "IQF Frozen",
    description:
      "Individually Quick Frozen fruits and vegetables — locked-in freshness, 18-month shelf life, ready for food service and manufacturing.",
    heroImage: "/images/products/Hero-Mixed-Fruits.webp",
  },
];

export function getCategories(): Category[] {
  return categories;
}

export function getCategoryBySlug(slug: string): Category | undefined {
  return categories.find((c) => c.slug === slug);
}
