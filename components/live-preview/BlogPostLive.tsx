"use client";

import { useLivePreview } from "@payloadcms/live-preview-react";
import { mapBlogPost } from "@/lib/payload-mappers";
import { BlogPostHeader } from "@/components/blog/BlogPostHeader";
import { BlogContent } from "@/components/blog/BlogContent";
import { BlogPreview } from "@/components/shared/BlogPreview";
import { CtaSection } from "@/components/shared/CtaSection";
import type { BlogPost } from "@/lib/types";

type Props = {
  initialDoc: Record<string, unknown>;
  relatedPosts: Array<{
    slug: string;
    title: string;
    excerpt: string;
    category: string;
    readTime: string;
    image: string;
  }>;
  serverURL: string;
};

export function BlogPostLive({ initialDoc, relatedPosts, serverURL }: Props) {
  const { data } = useLivePreview<Record<string, unknown>>({
    initialData: initialDoc,
    serverURL,
    depth: 1,
  });

  const post: BlogPost = mapBlogPost(data);

  return (
    <>
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
