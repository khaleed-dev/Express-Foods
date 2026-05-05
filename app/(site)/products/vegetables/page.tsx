import type { Metadata } from "next";
import { PageHero } from "@/components/shared/PageHero";
import { CtaSection } from "@/components/shared/CtaSection";
import { ProductGrid } from "@/components/products/ProductGrid";
import { getProductsByCategory, getCategoryBySlug } from "@/lib/payload";

export const revalidate = 3600;

export const metadata: Metadata = {
  title: "Vegetables",
  description:
    "Premium Egyptian vegetables — peppers, potatoes, onions, okra, and more exported globally.",
};

export default async function VegetablesPage() {
  const [category, products] = await Promise.all([
    getCategoryBySlug("vegetables"),
    getProductsByCategory("vegetables"),
  ]);

  return (
    <>
      <PageHero
        tagline="Vegetables"
        heading="Vegetables for every market"
        description="Potatoes, onions, peppers, green beans, and more — year-round supply from certified Egyptian farms."
        backgroundImage={category?.heroImage || "/images/products/Hero-Vegetables.webp"}
        primaryCta={{ label: "Request a quote", href: "/contact?intent=quote" }}
      />
      <ProductGrid products={products} />
      <CtaSection />
    </>
  );
}
