import type { Metadata } from "next";
import { PageHero } from "@/components/shared/PageHero";
import { CtaSection } from "@/components/shared/CtaSection";
import { ProductGrid } from "@/components/products/ProductGrid";
import { getProductsByCategory } from "@/lib/data/products";
import { getCategoryBySlug } from "@/lib/data/categories";

const category = getCategoryBySlug("citrus")!;
const products = getProductsByCategory("citrus");

export const metadata: Metadata = {
  title: "Citrus",
  description:
    "Premium Egyptian citrus — oranges, mandarins, lemons, and grapefruit exported worldwide.",
};

export default function CitrusPage() {
  return (
    <>
      <PageHero
        tagline="Citrus"
        heading="Citrus from the Nile Delta"
        description="Oranges, mandarins, lemons, and grapefruit — harvested at peak sweetness and shipped cold to your market."
        backgroundImage={category.heroImage}
        primaryCta={{ label: "Request a quote", href: "/contact?intent=quote" }}
      />
      <ProductGrid products={products} />
      <CtaSection />
    </>
  );
}
