"use client";

import { Button } from "@relume_io/relume-ui";
import Image from "next/image";
import Link from "next/link";
import { RxChevronRight } from "react-icons/rx";

const productCategories = [
  {
    heading: "Fresh citrus",
    description: "Oranges, mandarins, lemons. Peak season November through May.",
    href: "/products/citrus",
    image: { src: "/images/sections/what we grow and ship section images/Fresh citrus.webp", alt: "Fresh citrus — oranges, mandarins and lemons from Egypt" },
  },
  {
    heading: "Fresh fruits",
    description: "Strawberries, mangoes, pomegranates, grapes, melons, guava.",
    href: "/products/fresh-fruits",
    image: { src: "/images/sections/what we grow and ship section images/Fresh fruits.webp", alt: "Fresh fruits — strawberries, mangoes and pomegranates from Egypt" },
  },
  {
    heading: "Fresh vegetables",
    description: "Potatoes, onions, garlic, green beans, okra, peppers, lettuce.",
    href: "/products/vegetables",
    image: { src: "/images/sections/what we grow and ship section images/Fresh vegetables.webp", alt: "Fresh vegetables — potatoes, onions and peppers from Egypt" },
  },
  {
    heading: "IQF frozen",
    description: "Okra, molokhia, green beans, spinach, artichoke, strawberries, mango.",
    href: "/products/iqf-frozen",
    image: { src: "/images/sections/what we grow and ship section images/IQF frozen.png", alt: "IQF frozen produce — okra, green beans and strawberries from Egypt" },
  },
];

export function ProductRange() {
  return (
    <section id="product-range" className="px-[5%] py-16 md:py-24 lg:py-28">
      <div className="container">
        <div className="flex flex-col items-start">
          <div className="mx-auto mb-12 w-full max-w-lg items-start justify-between gap-5 md:mb-18 lg:mb-20">
            <p className="mb-3 text-center font-semibold md:mb-4">Range</p>
            <h2 className="mb-5 text-center text-5xl font-bold md:mb-6 md:text-4xl lg:text-5xl">
              What we grow and ship
            </h2>
            <p className="text-center md:text-md">
              Four product lines, year-round availability, certified quality.
              From the Nile Delta to your shelves.
            </p>
          </div>
          <div className="grid grid-cols-1 items-start gap-y-12 md:grid-cols-2 md:gap-x-8 md:gap-y-16 lg:grid-cols-4">
            {productCategories.map((category, index) => (
              <div key={index} className="w-full">
                <div className="relative mb-5 aspect-4/3 overflow-hidden bg-muted md:mb-6">
                  <Image
                    src={category.image.src}
                    alt={category.image.alt}
                    fill
                    className="object-contain"
                    sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 25vw"
                  />
                </div>
                <h3 className="mb-3 text-center text-xl font-bold md:mb-4 md:text-2xl">
                  {category.heading}
                </h3>
                <p className="text-center">{category.description}</p>
              </div>
            ))}
          </div>
          <div className="mt-12 flex w-full flex-wrap items-center justify-center gap-4 md:mt-18 lg:mt-20">
            <Button asChild variant="secondary">
              <Link href="/products">View all products</Link>
            </Button>
            <Button
              asChild
              variant="link"
              size="link"
              iconRight={<RxChevronRight />}
            >
              <Link href="/contact?intent=quote">Request a quote</Link>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
