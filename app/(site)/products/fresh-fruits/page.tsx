import type { Metadata } from "next";
import { PageHero } from "@/components/shared/PageHero";
import { CtaSection } from "@/components/shared/CtaSection";
import { ProductGrid } from "@/components/products/ProductGrid";
import { getProductsByCategory } from "@/lib/data/products";
import { getCategoryBySlug } from "@/lib/data/categories";

const category = getCategoryBySlug("fresh-fruits")!;
const products = getProductsByCategory("fresh-fruits");

export const metadata: Metadata = {
  title: "Fresh Fruits",
  description:
    "Premium Egyptian fresh fruits — mangoes, strawberries, grapes, pomegranates, and more.",
};

export default function FreshFruitsPage() {
  return (
    <>
      <PageHero
        tagline="Fresh Fruits"
        heading="Fruits that travel well"
        description="Strawberries, mangoes, pomegranates, grapes, dates, and melons — sun-ripened in Egypt and export-ready."
        backgroundImage={category.heroImage}
        primaryCta={{ label: "Request a quote", href: "/contact?intent=quote" }}
      />
      <ProductGrid products={products} />
      <CtaSection />
    </>
  );
}
