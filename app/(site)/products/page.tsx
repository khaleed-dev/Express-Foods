import type { Metadata } from "next";
import { PageHero } from "@/components/shared/PageHero";
import { CtaSection } from "@/components/shared/CtaSection";
import { CategoryCard } from "@/components/products/CategoryCard";
import { getCategories } from "@/lib/payload";

export const revalidate = 3600;

export const metadata: Metadata = {
  title: "Our Products",
  description:
    "Explore Express Foods' range of premium fresh and frozen Egyptian fruits and vegetables.",
};

export default async function ProductsPage() {
  const categories = await getCategories();

  return (
    <>
      <PageHero
        tagline="Our range"
        heading="Fresh and frozen, one trusted partner"
        description="From Nile Delta citrus to IQF frozen vegetables — every product certified, traceable, and export-ready."
        backgroundImage="/images/sections/home-products-range.webp"
        primaryCta={{ label: "Request a quote", href: "/contact?intent=quote" }}
      />

      <section className="px-[5%] py-16 md:py-24 lg:py-28">
        <div className="container">
          <div className="mb-12 md:mb-18 lg:mb-20">
            <div className="mx-auto max-w-lg text-center">
              <p className="mb-3 font-semibold md:mb-4">Four</p>
              <h2 className="mb-5 text-5xl font-bold md:mb-6 md:text-4xl lg:text-5xl">
                Our product lines
              </h2>
              <p className="md:text-md">
                Each certified, each shipped cold, each ready to sell.
              </p>
            </div>
          </div>
          <div className="grid auto-cols-fr grid-cols-1 gap-6 sm:grid-cols-2 md:gap-8 lg:grid-cols-4">
            {categories.map((category) => (
              <CategoryCard key={category.slug} category={category} />
            ))}
          </div>
        </div>
      </section>

      <CtaSection />
    </>
  );
}
