"use client";

import { Button } from "@relume_io/relume-ui";
import Image from "next/image";
import Link from "next/link";
import { RxChevronRight } from "react-icons/rx";
import type { BlogPost } from "@/lib/types";

interface BlogGridProps {
  posts: BlogPost[];
}

export function BlogGrid({ posts }: BlogGridProps) {
  return (
    <section className="px-[5%] py-16 md:py-24 lg:py-28">
      <div className="container">
        <div className="grid grid-cols-1 gap-x-8 gap-y-12 md:grid-cols-2 md:gap-y-16 lg:grid-cols-3">
          {posts.map((post) => (
            <article
              key={post.slug}
              className="flex size-full flex-col items-center justify-start border border-border-primary"
            >
              <Link
                href={`/blog/${post.slug}`}
                className="relative w-full overflow-hidden pt-[66%]"
              >
                <Image
                  src={post.image}
                  alt={post.title}
                  fill
                  className="absolute inset-0 size-full object-cover transition-transform duration-300 hover:scale-105"
                />
              </Link>
              <div className="px-5 py-6 md:p-6">
                <div className="rb-4 mb-4 flex w-full items-center justify-start">
                  <p className="mr-4 bg-background-secondary px-2 py-1 text-sm font-semibold">
                    {post.category}
                  </p>
                  <p className="inline text-sm font-semibold">
                    {post.readTime}
                  </p>
                </div>
                <Link href={`/blog/${post.slug}`} className="mb-2 block">
                  <h2 className="mb-2 text-xl font-bold md:text-2xl">
                    {post.title}
                  </h2>
                </Link>
                <p>{post.excerpt}</p>
                <Link href={`/blog/${post.slug}`}>
                  <Button
                    title="Read more"
                    variant="link"
                    size="link"
                    iconRight={<RxChevronRight />}
                    className="mt-6 flex items-center gap-x-1"
                  >
                    Read more
                  </Button>
                </Link>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

export default BlogGrid;
