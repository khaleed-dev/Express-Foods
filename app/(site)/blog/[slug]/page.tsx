import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { BlogPostHeader } from "@/components/blog/BlogPostHeader";
import { BlogContent } from "@/components/blog/BlogContent";
import { BlogPreview } from "@/components/shared/BlogPreview";
import { CtaSection } from "@/components/shared/CtaSection";
import { getAllBlogPosts, getBlogPostBySlug } from "@/lib/payload";
import { getArticleJsonLd } from "@/lib/json-ld";

export const revalidate = 3600;

type Props = {
  params: Promise<{ slug: string }>;
};

export async function generateStaticParams() {
  const posts = await getAllBlogPosts();
  return posts.map((post) => ({ slug: post.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const post = await getBlogPostBySlug(slug);

  if (!post) {
    return { title: "Post not found" };
  }

  return {
    title: post.title,
    description: post.excerpt,
  };
}

export default async function BlogPostPage({ params }: Props) {
  const { slug } = await params;
  const post = await getBlogPostBySlug(slug);

  if (!post) {
    notFound();
  }

  const allPosts = await getAllBlogPosts();
  const relatedPosts = allPosts
    .filter((p) => p.slug !== post.slug)
    .slice(0, 3)
    .map((p) => ({
      slug: p.slug,
      title: p.title,
      excerpt: p.excerpt,
      category: p.category,
      readTime: p.readTime,
      image: p.image,
    }));

  return (
    <>
      <script
        type="application/ld+json"
        suppressHydrationWarning
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(getArticleJsonLd(post)),
        }}
      />
      <BlogPostHeader post={post} />
      <BlogContent post={post} />
      <BlogPreview
        tagline="Related"
        heading="More from the field"
        description="Continue reading insights on sourcing, quality, and market trends."
        posts={relatedPosts}
      />
      <CtaSection />
    </>
  );
}
