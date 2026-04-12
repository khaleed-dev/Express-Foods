"use client";

import { Button } from "@relume_io/relume-ui";
import Image from "next/image";
import Link from "next/link";
import { RxChevronRight } from "react-icons/rx";

const stats = [
  { value: "31+", label: "Products exported year-round" },
  { value: "5", label: "Global certifications held" },
];

export function StorySection() {
  return (
    <section id="story" className="px-[5%] py-16 md:py-24 lg:py-28">
      <div className="container">
        <div className="grid grid-cols-1 items-center gap-12 md:grid-cols-2 lg:gap-x-20">

          {/* Image */}
          <div className="relative w-full overflow-hidden">
            <div className="relative aspect-4/3 w-full">
              <Image
                src="/images/sections/A promise that stars in the soil section/two-lakes-with-forest-green-field-dividing-them-country-road-passing-through-nearby.webp"
                alt="The Nile Delta — where every Express Foods shipment begins"
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, 50vw"
              />
            </div>
          </div>

          {/* Content */}
          <div>
            <p className="mb-3 font-semibold md:mb-4">Story</p>
            <h2 className="mb-5 text-5xl font-bold leading-[1.2] md:mb-6 md:text-4xl lg:text-5xl">
              A promise that starts in the soil
            </h2>
            <p className="mb-6 md:mb-8 md:text-md">
              Every shipment begins in the Nile Delta and ends on global
              shelves. Egypt&apos;s agricultural richness deserves to be
              delivered with care, precision, and certification. We control
              every step, test every batch, monitor every container.
            </p>

            {/* Stats */}
            <div className="mb-6 grid grid-cols-2 gap-6 border-t border-border-primary pt-6 md:mb-8 md:pt-8">
              {stats.map((stat) => (
                <div key={stat.value}>
                  <p className="mb-1 text-4xl font-bold md:text-5xl">
                    {stat.value}
                  </p>
                  <p className="text-sm text-neutral-light">{stat.label}</p>
                </div>
              ))}
            </div>

            <div className="flex flex-wrap items-center gap-4">
              <Button asChild variant="secondary">
                <Link href="/about">Learn our story</Link>
              </Button>
              <Button
                asChild
                variant="link"
                size="link"
                iconRight={<RxChevronRight />}
              >
                <Link href="/about">About us</Link>
              </Button>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
