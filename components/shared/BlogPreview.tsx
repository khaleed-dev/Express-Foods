"use client";

import { Button } from "@relume_io/relume-ui";
import React from "react";
import { RxChevronRight } from "react-icons/rx";
import Image from "next/image";
import Link from "next/link";

interface BlogPreviewPost {
  slug: string;
  title: string;
  excerpt: string;
  category: string;
  readTime: string;
  image: string;
}

interface BlogPreviewProps {
  tagline?: string;
  heading?: string;
  description?: string;
  posts?: BlogPreviewPost[];
}

const defaultPosts: BlogPreviewPost[] = [
  {
    slug: "why-egyptian-strawberries-lead-europe",
    title: "Why Egyptian strawberries lead Europe",
    excerpt:
      "Climate, soil, and timing create a competitive edge that buyers recognize.",
    category: "Sourcing",
    readTime: "4 min read",
    image: "/images/sections/home-slider-01.webp",
  },
  {
    slug: "cold-chain-control-from-farm-to-port",
    title: "Cold chain control from farm to port",
    excerpt:
      "How temperature monitoring and logistics precision protect your margins.",
    category: "Quality",
    readTime: "5 min read",
    image: "/images/sections/home-slider-02.webp",
  },
  {
    slug: "citrus-season-peaks-in-spring",
    title: "Citrus season peaks in spring",
    excerpt:
      "Valencia oranges, mandarins, and lemons at their best. Plan your orders now.",
    category: "Markets",
    readTime: "3 min read",
    image: "/images/sections/home-slider-03.webp",
  },
];

export function BlogPreview({
  tagline = "Insights",
  heading = "What is happening in produce",
  description = "Industry trends, harvest updates, and sourcing strategy.",
  posts = defaultPosts,
}: BlogPreviewProps) {
  return (
    <section className="px-[5%] py-16 md:py-24 lg:py-28">
      <div className="container">
        {/* Section header */}
        <div className="mb-12 md:mb-18 lg:mb-20">
          <div className="w-full max-w-lg">
            <p className="mb-3 font-semibold md:mb-4">{tagline}</p>
            <h2 className="mb-5 font-serif text-3xl font-bold md:mb-6 md:text-6xl lg:text-7xl">
              {heading}
            </h2>
            <p className="md:text-md">{description}</p>
          </div>
        </div>

        {/* Blog post cards grid */}
        <div className="grid grid-cols-1 gap-x-8 gap-y-12 md:grid-cols-2 lg:grid-cols-3">
          {posts.map((post) => (
            <div key={post.slug} className="flex flex-col">
              <Link
                href={`/blog/${post.slug}`}
                className="mb-6 inline-block w-full"
              >
                <div className="w-full overflow-hidden">
                  <Image
                    src={post.image}
                    alt={post.title}
                    width={800}
                    height={450}
                    className="aspect-video size-full object-cover"
                  />
                </div>
              </Link>
              <div className="rb-4 mb-4 flex w-full items-center justify-start">
                <p className="mr-4 bg-background-secondary px-2 py-1 text-sm font-semibold">
                  {post.category}
                </p>
                <p className="inline text-sm font-semibold">{post.readTime}</p>
              </div>
              <Link
                href={`/blog/${post.slug}`}
                className="mb-2 block text-xl font-bold md:text-2xl"
              >
                {post.title}
              </Link>
              <p>{post.excerpt}</p>
              <Link href={`/blog/${post.slug}`}>
                <Button
                  variant="link"
                  size="link"
                  className="mt-6 flex items-center justify-center gap-x-2"
                  iconRight={<RxChevronRight />}
                >
                  Read more
                </Button>
              </Link>
            </div>
          ))}
        </div>

        {/* View all link */}
        <div className="mt-12 flex justify-center md:mt-16">
          <Link href="/blog">
            <Button
              variant="link"
              size="link"
              className="flex items-center justify-center gap-x-2"
              iconRight={<RxChevronRight />}
            >
              View all articles
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
}

export default BlogPreview;
