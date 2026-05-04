"use client";

import Image from "next/image";
import { BiCheck } from "react-icons/bi";
import { AnimatedButton } from "@/components/ui/animated-button";

const highlights = [
  "Ethical sourcing from certified farms",
  "Full traceability from harvest to port",
  "Compliance with global food safety standards",
];

export function OriginStory() {
  return (
    <section id="origin-story" className="px-[5%] py-16 md:py-24 lg:py-28">
      <div className="container">
        <div className="grid grid-cols-1 gap-y-12 md:grid-cols-2 md:items-center md:gap-x-12 lg:gap-x-20">
          <div>
            <p className="mb-3 font-semibold md:mb-4">Origins</p>
            <h2 className="mb-5 text-5xl font-bold md:mb-6 md:text-4xl lg:text-5xl">
              Rooted in the Nile Delta, growing for the world
            </h2>
            <p className="mb-5 text-base md:mb-6 md:text-md">
              Express Foods began with a simple conviction: Egyptian produce
              deserves to reach the world&apos;s best tables with the same care
              it receives in the soil. We built this company on certified farms,
              rigorous testing, and the discipline of a cold chain that never
              breaks.
            </p>
            <ul className="grid grid-cols-1 gap-4 py-2">
              {highlights.map((item) => (
                <li key={item} className="group/item flex self-start">
                  <div className="mr-4 flex size-6 flex-none items-center justify-center self-start rounded-full bg-background-alternative/10 transition-all duration-200 group-hover/item:scale-110 group-hover/item:bg-primary/15">
                    <BiCheck className="size-5 text-background-alternative transition-colors duration-200 group-hover/item:text-primary" />
                  </div>
                  <span className="transition-colors duration-200 group-hover/item:text-foreground">
                    {item}
                  </span>
                </li>
              ))}
            </ul>
            <div className="mt-6 flex flex-wrap items-center gap-4 md:mt-8">
              <AnimatedButton href="/products" variant="secondary">
                Explore products
              </AnimatedButton>
              <AnimatedButton href="/contact?intent=quote" variant="link" withArrow>
                Request a quote
              </AnimatedButton>
            </div>
          </div>
          <div className="group/img w-full overflow-hidden">
            <Image
              src="/images/sections/about-origins.webp"
              alt="Egyptian farmland in the Nile Delta where Express Foods sources its produce"
              width={616}
              height={640}
              className="w-full object-cover transition-transform duration-700 ease-out group-hover/img:scale-105"
            />
          </div>
        </div>
      </div>
    </section>
  );
}

export default OriginStory;
