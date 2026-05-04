"use client";

import Image from "next/image";
import { AnimatedButton } from "@/components/ui/animated-button";

const processSteps = [
  {
    heading: "We source from certified farms",
    description: "Only growers who meet our standards make the cut.",
  },
  {
    heading: "We inspect and grade on site",
    description: "Every batch is tested before it leaves the farm.",
  },
  {
    heading: "We pack to specification",
    description: "Retail-ready or bulk, configured to your market.",
  },
  {
    heading: "We cool immediately",
    description: "Pre-cooling starts within hours of harvest.",
  },
];

export function ProcessSection() {
  return (
    <section id="process" className="px-[5%] py-16 md:py-24 lg:py-28">
      <div className="container">
        <div className="rb-12 mb-12 md:mb-18 lg:mb-20">
          <div className="mx-auto max-w-lg text-center">
            <p className="mb-3 font-semibold md:mb-4">Process</p>
            <h2 className="mb-5 text-5xl font-bold md:mb-6 md:text-4xl lg:text-5xl">
              From soil to ship
            </h2>
            <p className="md:text-md">Six steps. One standard. Every time.</p>
          </div>
        </div>
        <div className="grid grid-cols-1 gap-6 md:gap-8">
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 md:gap-8 lg:grid-cols-4">
            {processSteps.map((step, index) => (
              <div
                key={index}
                className="group/step flex flex-col border border-border-primary bg-background transition-all duration-300 ease-out hover:-translate-y-1 hover:border-primary/60 hover:shadow-xl hover:shadow-primary/10"
              >
                <div className="flex h-full flex-col justify-between p-6 md:p-8 lg:p-6">
                  <div>
                    <div className="mb-3 flex size-12 items-center justify-center rounded-full bg-background-alternative font-bold text-text-alternative transition-all duration-300 ease-out group-hover/step:scale-110 group-hover/step:bg-primary group-hover/step:text-primary-foreground md:mb-4">
                      {index + 1}
                    </div>
                    <h3 className="mb-2 text-xl font-bold transition-colors duration-200 group-hover/step:text-primary md:text-2xl">
                      {step.heading}
                    </h3>
                    <p>{step.description}</p>
                  </div>
                  <div className="mt-5 flex items-center gap-4 md:mt-6">
                    <AnimatedButton href="/about" variant="link" withArrow>
                      Learn more
                    </AnimatedButton>
                  </div>
                </div>
              </div>
            ))}
            <div className="group/feature flex flex-col overflow-hidden border border-border-primary bg-background transition-all duration-300 ease-out hover:border-primary/60 hover:shadow-2xl hover:shadow-primary/10 sm:col-span-2 sm:col-start-1 sm:row-span-2 sm:row-start-3 lg:col-span-2 lg:col-start-3 lg:row-span-2 lg:row-start-1">
              <div className="relative flex aspect-[16/9] items-center justify-center overflow-hidden">
                <Image
                  src="/images/sections/From soil to ship/From soil to ship section image.webp"
                  alt="Expert hands hand-picking fresh produce from the orchard"
                  fill
                  className="object-cover transition-transform duration-700 ease-out group-hover/feature:scale-105"
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 100vw, 50vw"
                />
              </div>
              <div className="flex flex-1 flex-col justify-center p-6 md:p-8 lg:p-12">
                <div>
                  <p className="mb-2 text-sm font-semibold text-primary/80">Five</p>
                  <h3 className="mb-5 text-4xl font-bold leading-[1.2] transition-colors duration-200 group-hover/feature:text-primary md:mb-6 md:text-5xl lg:text-6xl">
                    Hand-picked at the source
                  </h3>
                  <p>
                    Only produce selected by skilled hands at peak ripeness
                    leaves our certified farms.
                  </p>
                </div>
                <div className="mt-6 flex flex-wrap items-center gap-4 md:mt-8">
                  <AnimatedButton href="/about" variant="secondary">
                    Explore
                  </AnimatedButton>
                  <AnimatedButton href="/contact?intent=quote" variant="link" withArrow>
                    Request a quote
                  </AnimatedButton>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
