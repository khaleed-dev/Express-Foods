import type { Metadata } from "next";
import { PageHero } from "@/components/shared/PageHero";
import { BlogGrid } from "@/components/blog/BlogGrid";
import { CtaSection } from "@/components/shared/CtaSection";
import { getAllBlogPosts } from "@/lib/payload";

export const revalidate = 3600;

export const metadata: Metadata = {
  title: "Insights",
  description:
    "Export trends, market intelligence, and industry insights from Express Foods.",
};

export default async function BlogPage() {
  const posts = await getAllBlogPosts();

  return (
    <>
      <PageHero
        tagline="Insights"
        heading="What is happening in produce"
        description="Industry trends, harvest updates, and sourcing strategy from the field."
        backgroundImage="/images/sections/home-slider-03.webp"
      />
      <BlogGrid posts={posts} />
      <CtaSection />
    </>
  );
}
