"use client";

import Image from "next/image";
import { AnimatedButton } from "@/components/ui/animated-button";

interface Stat {
  value: string;
  label: string;
}

const stats: Stat[] = [
  { value: "15+", label: "Years in operation" },
  { value: "40+", label: "Countries served" },
  { value: "31", label: "Products exported" },
  { value: "24h", label: "Response guarantee" },
];

const statCardClasses =
  "group/stat flex cursor-default flex-col justify-center border border-border-primary p-8 text-center transition-all duration-300 ease-out hover:-translate-y-1 hover:border-primary/60 hover:shadow-xl hover:shadow-primary/10";

export function Stats() {
  return (
    <section id="stats" className="px-[5%] py-16 md:py-24 lg:py-28">
      <div className="container">
        <div className="mb-12 grid grid-cols-1 gap-y-5 md:mb-18 md:grid-cols-2 md:gap-x-12 lg:mb-20 lg:gap-x-20">
          <div>
            <p className="mb-3 font-semibold md:mb-4">Scale</p>
            <h2 className="text-5xl font-bold md:text-4xl lg:text-5xl">
              By the numbers
            </h2>
          </div>
          <div>
            <p className="md:text-md">
              Express Foods ships certified Egyptian produce to Europe, the
              Gulf, Africa, Asia, and North America. Every week, containers
              leave port. Every shipment arrives on time, in perfect condition,
              with full documentation.
            </p>
            <div className="mt-6 flex flex-wrap items-center gap-4 md:mt-8">
              <AnimatedButton href="/products" variant="secondary">
                Explore products
              </AnimatedButton>
              <AnimatedButton href="/contact?intent=quote" variant="link" withArrow>
                Request a quote
              </AnimatedButton>
            </div>
          </div>
        </div>
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
          {/* First stat (spans 2 rows on large screens) */}
          <div
            className={`${statCardClasses} md:col-span-2 md:row-span-1 lg:col-span-1 lg:row-span-2`}
          >
            <p className="mb-2 text-5xl font-bold leading-[1.3] transition-colors duration-200 group-hover/stat:text-primary md:text-[4rem] lg:text-[5rem]">
              {stats[0].value}
            </p>
            <h3 className="text-md font-bold leading-[1.4] md:text-xl">
              {stats[0].label}
            </h3>
          </div>

          {/* Background image */}
          <div className="group/img relative aspect-[3/2] overflow-hidden">
            <Image
              src="/images/sections/about-stats.webp"
              alt="Express Foods export operations and global shipping"
              fill
              className="object-cover transition-transform duration-700 ease-out group-hover/img:scale-105"
              sizes="(max-width: 768px) 100vw, 33vw"
            />
          </div>

          {/* Second stat */}
          <div className={statCardClasses}>
            <p className="mb-2 text-5xl font-bold leading-[1.3] transition-colors duration-200 group-hover/stat:text-primary md:text-[4rem] lg:text-[5rem]">
              {stats[1].value}
            </p>
            <h3 className="text-md font-bold leading-[1.4] md:text-xl">
              {stats[1].label}
            </h3>
          </div>

          {/* Third stat */}
          <div className={statCardClasses}>
            <p className="mb-2 text-5xl font-bold leading-[1.3] transition-colors duration-200 group-hover/stat:text-primary md:text-[4rem] lg:text-[5rem]">
              {stats[2].value}
            </p>
            <h3 className="text-md font-bold leading-[1.4] md:text-xl">
              {stats[2].label}
            </h3>
          </div>

          {/* Second background image slot */}
          <div className="group/img relative aspect-[3/2] overflow-hidden">
            <Image
              src="/images/sections/about-stats.webp"
              alt="Express Foods certified produce ready for export"
              fill
              className="object-cover transition-transform duration-700 ease-out group-hover/img:scale-105"
              sizes="(max-width: 768px) 100vw, 33vw"
            />
          </div>

          {/* Fourth stat */}
          <div className={statCardClasses}>
            <p className="mb-2 text-5xl font-bold leading-[1.3] transition-colors duration-200 group-hover/stat:text-primary md:text-[4rem] lg:text-[5rem]">
              {stats[3].value}
            </p>
            <h3 className="text-md font-bold leading-[1.4] md:text-xl">
              {stats[3].label}
            </h3>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Stats;
