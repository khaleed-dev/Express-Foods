"use client";

import Image from "next/image";
import { AnimatedButton } from "@/components/ui/animated-button";

interface GlobalReachProps {
  tagline?: string;
  heading?: string;
  description?: string;
  image?: string;
  regions?: { heading: string; description: string }[];
}

const defaultRegions = [
  { heading: "Europe", description: "UK, Netherlands, Germany, France, and beyond. Three to five days." },
  { heading: "Gulf states", description: "UAE, Saudi Arabia, Kuwait, Qatar. Strategic proximity. Fast turnaround." },
];

export function GlobalReach({
  tagline = "Reach",
  heading = "We ship to where you are",
  description = "Weekly containers leave Egypt for Europe, the Gulf, Africa, and Asia. Consistent supply. Reliable partners. Global scale.",
  image = "/images/sections/home-global-reach.webp",
  regions = defaultRegions,
}: GlobalReachProps = {}) {
  return (
    <section id="global-reach" className="px-[5%] py-16 md:py-24 lg:py-28">
      <div className="container">
        <div className="grid grid-cols-1 items-center gap-12 md:grid-cols-2 lg:gap-x-20">
          <div className="order-2 md:order-1">
            <div className="group/img relative aspect-square w-full overflow-hidden">
              <Image
                src={image}
                alt={heading}
                fill
                className="object-cover transition-transform duration-700 ease-out group-hover/img:scale-105"
                sizes="(max-width: 768px) 100vw, 50vw"
              />
            </div>
          </div>
          <div className="order-1 md:order-2">
            <p className="mb-3 font-semibold md:mb-4">{tagline}</p>
            <h2 className="mb-5 text-5xl font-bold md:mb-6 md:text-4xl lg:text-5xl">
              {heading}
            </h2>
            <p className="mb-6 md:mb-8 md:text-md">
              {description}
            </p>
            <div className="grid grid-cols-1 gap-6 py-2 sm:grid-cols-2">
              {regions.map((region, i) => (
                <div
                  key={i}
                  className="group/region cursor-default border-l-2 border-border-primary pl-4 transition-all duration-200 hover:border-primary"
                >
                  <h6 className="mb-3 text-md font-bold leading-[1.4] transition-colors duration-200 group-hover/region:text-primary md:mb-4 md:text-xl">
                    {region.heading}
                  </h6>
                  <p>{region.description}</p>
                </div>
              ))}
            </div>
            <div className="mt-6 flex flex-wrap gap-4 md:mt-8">
              <AnimatedButton href="/about" variant="secondary">
                Explore markets
              </AnimatedButton>
              <AnimatedButton href="/contact?intent=quote" variant="link" withArrow>
                Get a quote
              </AnimatedButton>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
