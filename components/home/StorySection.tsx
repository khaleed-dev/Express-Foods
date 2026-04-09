"use client";

import { Button } from "@relume_io/relume-ui";
import Image from "next/image";
import Link from "next/link";
import { RxChevronRight } from "react-icons/rx";

export function StorySection() {
  return (
    <section id="story" className="px-[5%] py-16 md:py-24 lg:py-28">
      <div className="container">
        <div className="mb-12 grid grid-cols-1 items-start justify-between gap-x-12 gap-y-5 md:mb-18 md:grid-cols-2 md:gap-x-12 md:gap-y-8 lg:mb-20 lg:gap-x-20">
          <div>
            <p className="mb-3 font-semibold md:mb-4">Story</p>
            <h3 className="text-5xl font-bold leading-[1.2] md:text-4xl lg:text-5xl">
              A promise that starts in the soil
            </h3>
          </div>
          <div>
            <p className="md:text-md">
              Every shipment begins in the Nile Delta and ends on global
              shelves. Egypt&apos;s agricultural richness deserves to be delivered
              with care, precision, and certification. We control every step,
              test every batch, monitor every container.
            </p>
            <div className="mt-6 flex flex-wrap items-center gap-4 md:mt-8">
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
        <div className="relative aspect-[16/9] w-full overflow-hidden">
          <Image
            src="/images/sections/home-usp-01.webp"
            alt="Express Foods Nile Delta farming operations"
            fill
            className="object-cover"
            sizes="(max-width: 768px) 100vw, 1200px"
          />
        </div>
      </div>
    </section>
  );
}
