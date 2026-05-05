import type { Metadata } from "next";
import { PageHero } from "@/components/shared/PageHero";
import { CtaSection } from "@/components/shared/CtaSection";
import { ProductGrid } from "@/components/products/ProductGrid";
import { getProductsByCategory, getCategoryBySlug } from "@/lib/payload";

export const revalidate = 3600;

export const metadata: Metadata = {
  title: "Citrus",
  description:
    "Premium Egyptian citrus — oranges, mandarins, lemons, and grapefruit exported worldwide.",
};

export default async function CitrusPage() {
  const [category, products] = await Promise.all([
    getCategoryBySlug("citrus"),
    getProductsByCategory("citrus"),
  ]);

  return (
    <>
      <PageHero
        tagline="Citrus"
        heading="Citrus from the Nile Delta"
        description="Oranges, mandarins, lemons, and grapefruit — harvested at peak sweetness and shipped cold to your market."
        backgroundImage={category?.heroImage || "/images/products/Hero-Citrus.webp"}
        primaryCta={{ label: "Request a quote", href: "/contact?intent=quote" }}
      />
      <ProductGrid products={products} />
      <CtaSection />
    </>
  );
}
