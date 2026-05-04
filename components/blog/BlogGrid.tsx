"use client";

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
            <Link
              key={post.slug}
              href={`/blog/${post.slug}`}
              className="group/card flex size-full flex-col items-stretch overflow-hidden border border-border-primary bg-background transition-all duration-300 ease-out hover:-translate-y-1 hover:border-primary/60 hover:shadow-xl hover:shadow-primary/10"
            >
              <div className="relative w-full overflow-hidden pt-[66%]">
                <Image
                  src={post.image}
                  alt={post.title}
                  fill
                  sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  className="absolute inset-0 size-full object-cover transition-transform duration-700 ease-out group-hover/card:scale-105"
                />
              </div>
              <div className="flex flex-1 flex-col px-5 py-6 md:p-6">
                <div className="rb-4 mb-4 flex w-full items-center justify-start">
                  <p className="mr-4 bg-background-secondary px-2 py-1 text-sm font-semibold transition-colors duration-200 group-hover/card:bg-primary group-hover/card:text-primary-foreground">
                    {post.category}
                  </p>
                  <p className="inline text-sm font-semibold">
                    {post.readTime}
                  </p>
                </div>
                <h2 className="mb-2 text-xl font-bold transition-colors duration-200 group-hover/card:text-primary md:text-2xl">
                  {post.title}
                </h2>
                <p>{post.excerpt}</p>
                <span className="mt-6 inline-flex items-center gap-2 text-sm font-semibold transition-colors duration-200 group-hover/card:text-primary">
                  <span className="relative">
                    Read more
                    <span className="absolute -bottom-0.5 left-0 h-[1.5px] w-full origin-left scale-x-0 bg-current transition-transform duration-300 ease-out group-hover/card:scale-x-100" />
                  </span>
                  <RxChevronRight className="size-4 transition-transform duration-200 ease-out group-hover/card:translate-x-1" />
                </span>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}

export default BlogGrid;
