import type { Metadata } from "next";
import { PageHero } from "@/components/shared/PageHero";
import { CtaSection } from "@/components/shared/CtaSection";
import { ProductGrid } from "@/components/products/ProductGrid";
import { getProductsByCategory, getCategoryBySlug } from "@/lib/payload";

export const revalidate = 3600;

export const metadata: Metadata = {
  title: "Fresh Fruits",
  description:
    "Premium Egyptian fresh fruits — mangoes, strawberries, grapes, pomegranates, and more.",
};

export default async function FreshFruitsPage() {
  const [category, products] = await Promise.all([
    getCategoryBySlug("fresh-fruits"),
    getProductsByCategory("fresh-fruits"),
  ]);

  return (
    <>
      <PageHero
        tagline="Fresh Fruits"
        heading="Fruits that travel well"
        description="Strawberries, mangoes, pomegranates, grapes, dates, and melons — sun-ripened in Egypt and export-ready."
        backgroundImage={category?.heroImage || "/images/products/Hero-Fresh-Fruits.webp"}
        primaryCta={{ label: "Request a quote", href: "/contact?intent=quote" }}
      />
      <ProductGrid products={products} />
      <CtaSection />
    </>
  );
}
