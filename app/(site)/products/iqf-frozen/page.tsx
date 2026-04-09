import type { Metadata } from "next";
import { PageHero } from "@/components/shared/PageHero";
import { CtaSection } from "@/components/shared/CtaSection";
import { ProductGrid } from "@/components/products/ProductGrid";
import { getProductsByCategory } from "@/lib/data/products";
import { getCategoryBySlug } from "@/lib/data/categories";

const category = getCategoryBySlug("iqf-frozen")!;
const products = getProductsByCategory("iqf-frozen");

export const metadata: Metadata = {
  title: "IQF Frozen",
  description:
    "Individually Quick Frozen Egyptian fruits and vegetables — year-round supply with locked-in freshness.",
};

export default function IqfFrozenPage() {
  return (
    <>
      <PageHero
        tagline="IQF Frozen"
        heading="IQF for food manufacturers"
        description="Individually Quick Frozen fruits and vegetables — 18-month shelf life, year-round supply, and locked-in freshness."
        backgroundImage={category.heroImage}
        primaryCta={{ label: "Request a quote", href: "/contact?intent=quote" }}
      />
      <ProductGrid products={products} />
      <CtaSection />
    </>
  );
}
