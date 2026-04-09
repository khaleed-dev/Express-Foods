"use client";

import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbSeparator,
} from "@relume_io/relume-ui";
import Image from "next/image";
import Link from "next/link";
import type { BlogPost } from "@/lib/types";

interface BlogPostHeaderProps {
  post: BlogPost;
}

function formatDate(dateString: string): string {
  const date = new Date(dateString);
  return date.toLocaleDateString("en-GB", {
    day: "numeric",
    month: "short",
    year: "numeric",
  });
}

export function BlogPostHeader({ post }: BlogPostHeaderProps) {
  return (
    <section className="px-[5%] py-16 md:py-24 lg:py-28">
      <div className="container">
        <div className="mx-auto mb-12 flex w-full max-w-lg flex-col items-start justify-start md:mb-16 lg:mb-20">
          <Breadcrumb className="mb-6 flex w-full items-center">
            <BreadcrumbList>
              <BreadcrumbItem>
                <BreadcrumbLink asChild>
                  <Link href="/blog">Blog</Link>
                </BreadcrumbLink>
              </BreadcrumbItem>
              <BreadcrumbSeparator />
              <BreadcrumbItem>
                <BreadcrumbLink asChild>
                  <span>{post.category}</span>
                </BreadcrumbLink>
              </BreadcrumbItem>
            </BreadcrumbList>
          </Breadcrumb>
          <h1 className="mb-8 text-5xl font-bold md:mb-10 md:text-4xl lg:mb-12 lg:text-5xl">
            {post.title}
          </h1>
          <div className="flex w-full flex-col items-start justify-between sm:flex-row sm:items-end">
            <div className="rb-4 mb-4 flex items-center sm:mb-0">
              <div className="mr-4 flex size-14 min-h-14 min-w-14 items-center justify-center rounded-full bg-background-secondary">
                <Image
                  src="/images/logos/logo-mark-colored.svg"
                  alt="Express Foods"
                  width={32}
                  height={32}
                />
              </div>
              <div>
                <h6 className="font-semibold">{post.author.name}</h6>
                <div className="mt-1 flex">
                  <p className="text-sm">{formatDate(post.publishedAt)}</p>
                  <span className="mx-2">&#8226;</span>
                  <p className="text-sm">{post.readTime}</p>
                </div>
              </div>
            </div>
            <p className="bg-background-secondary px-2 py-1 text-sm font-semibold">
              {post.category}
            </p>
          </div>
        </div>
        <div className="mx-auto w-full overflow-hidden">
          <Image
            src={post.image}
            alt={post.title}
            width={1440}
            height={720}
            className="aspect-[2] size-full object-cover"
            priority
          />
        </div>
      </div>
    </section>
  );
}

export default BlogPostHeader;
