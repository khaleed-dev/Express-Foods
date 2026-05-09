import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { BlogPostLive } from "@/components/live-preview/BlogPostLive";
import {
  getAllBlogPosts,
  getBlogPostBySlug,
  getRawBlogPostBySlug,
} from "@/lib/payload";
import { mapBlogPost } from "@/lib/payload-mappers";
import { getArticleJsonLd } from "@/lib/json-ld";

export const revalidate = 3600;

const SERVER_URL =
  process.env.NEXT_PUBLIC_SERVER_URL || "http://localhost:3000";

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
  const doc = await getRawBlogPostBySlug(slug);

  if (!doc) {
    notFound();
  }

  const post = mapBlogPost(doc);
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
      <BlogPostLive
        initialDoc={doc as Record<string, unknown>}
        relatedPosts={relatedPosts}
        serverURL={SERVER_URL}
      />
    </>
  );
}
