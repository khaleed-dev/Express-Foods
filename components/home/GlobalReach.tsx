"use client";

import { Button } from "@relume_io/relume-ui";
import Image from "next/image";
import Link from "next/link";
import { RxChevronRight } from "react-icons/rx";

export function GlobalReach() {
  return (
    <section id="global-reach" className="px-[5%] py-16 md:py-24 lg:py-28">
      <div className="container">
        <div className="grid grid-cols-1 items-center gap-12 md:grid-cols-2 lg:gap-x-20">
          <div className="order-2 md:order-1">
            <div className="relative aspect-square w-full overflow-hidden">
              <Image
                src="/images/sections/home-global-reach.webp"
                alt="Express Foods global shipping routes and destinations"
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, 50vw"
              />
            </div>
          </div>
          <div className="order-1 md:order-2">
            <p className="mb-3 font-semibold md:mb-4">Reach</p>
            <h2 className="mb-5 text-5xl font-bold md:mb-6 md:text-7xl lg:text-8xl">
              We ship to where you are
            </h2>
            <p className="mb-6 md:mb-8 md:text-md">
              Weekly containers leave Egypt for Europe, the Gulf, Africa, and
              Asia. Consistent supply. Reliable partners. Global scale.
            </p>
            <div className="grid grid-cols-1 gap-6 py-2 sm:grid-cols-2">
              <div>
                <h6 className="mb-3 text-md font-bold leading-[1.4] md:mb-4 md:text-xl">
                  Europe
                </h6>
                <p>
                  UK, Netherlands, Germany, France, and beyond. Three to five
                  days.
                </p>
              </div>
              <div>
                <h6 className="mb-3 text-md font-bold leading-[1.4] md:mb-4 md:text-xl">
                  Gulf states
                </h6>
                <p>
                  UAE, Saudi Arabia, Kuwait, Qatar. Strategic proximity. Fast
                  turnaround.
                </p>
              </div>
            </div>
            <div className="mt-6 flex flex-wrap gap-4 md:mt-8">
              <Button asChild variant="secondary">
                <Link href="/about">Explore markets</Link>
              </Button>
              <Button
                asChild
                iconRight={<RxChevronRight />}
                variant="link"
                size="link"
              >
                <Link href="/contact?intent=quote">Get a quote</Link>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
