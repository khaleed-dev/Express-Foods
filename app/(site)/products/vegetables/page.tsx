import type { Metadata } from "next";
import { PageHero } from "@/components/shared/PageHero";
import { CtaSection } from "@/components/shared/CtaSection";
import { ProductGrid } from "@/components/products/ProductGrid";
import { getProductsByCategory } from "@/lib/data/products";
import { getCategoryBySlug } from "@/lib/data/categories";

const category = getCategoryBySlug("vegetables")!;
const products = getProductsByCategory("vegetables");

export const metadata: Metadata = {
  title: "Vegetables",
  description:
    "Premium Egyptian vegetables — peppers, potatoes, onions, okra, and more exported globally.",
};

export default function VegetablesPage() {
  return (
    <>
      <PageHero
        tagline="Vegetables"
        heading="Vegetables for every market"
        description="Potatoes, onions, peppers, green beans, and more — year-round supply from certified Egyptian farms."
        backgroundImage={category.heroImage}
        primaryCta={{ label: "Request a quote", href: "/contact?intent=quote" }}
      />
      <ProductGrid products={products} />
      <CtaSection />
    </>
  );
}
