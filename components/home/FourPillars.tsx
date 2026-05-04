"use client";

import Image from "next/image";
import Link from "next/link";
import { RxChevronRight } from "react-icons/rx";

const pillars = [
  {
    label: "One",
    heading: "Certified quality from farm to port",
    description: "ISO 22000, HACCP, GLOBALG.A.P., BRCGS, IFS certified.",
    image: { src: "/images/sections/what sets up apart section/Certified quality from farm to port.webp", alt: "Certified quality farming" },
    href: "/about",
  },
  {
    label: "Two",
    heading: "Fresh and frozen, one trusted partner",
    description: "Dual capability means single sourcing, consistent supply.",
    image: { src: "/images/sections/what sets up apart section/Fresh and frozen, one trusted partner.webp", alt: "Fresh and frozen produce capabilities" },
    href: "/products",
  },
  {
    label: "Three",
    heading: "Unbroken cold chain, every mile",
    description: "Temperature monitored from harvest through delivery.",
    image: { src: "/images/sections/what sets up apart section/Unbroken cold chain, every mile.webp", alt: "Cold chain logistics monitoring" },
    href: "/about",
  },
  {
    label: "Four",
    heading: "A partner, not a vendor",
    description: "24-hour response, multilingual team, long-term commitment.",
    image: { src: "/images/sections/what sets up apart section/A partner, not a vendor.webp", alt: "Global partnership and support" },
    href: "/contact",
  },
];

export function FourPillars() {
  return (
    <section id="pillars" className="px-[5%] py-16 md:py-24 lg:py-28">
      <div className="container">
        <div className="mb-12 md:mb-18 lg:mb-20">
          <div className="mx-auto max-w-lg text-center">
            <p className="mb-3 font-semibold md:mb-4">Why</p>
            <h2 className="mb-5 text-5xl font-bold md:mb-6 md:text-4xl lg:text-5xl">
              What sets us apart
            </h2>
            <p className="md:text-md">
              Four pillars built on trust, science, and global standards.
            </p>
          </div>
        </div>
        <div className="grid auto-cols-fr grid-cols-1 gap-6 sm:grid-cols-2 md:gap-8 lg:grid-cols-4">
          {pillars.map((pillar, index) => (
            <Link
              key={index}
              href={pillar.href}
              className="group/card relative flex flex-col overflow-hidden border border-border-primary bg-background transition-all duration-300 ease-out hover:-translate-y-1 hover:border-primary/60 hover:shadow-2xl hover:shadow-primary/10"
            >
              <div className="flex flex-1 flex-col justify-center p-6">
                <div>
                  <p className="mb-2 text-sm font-semibold text-primary/80">{pillar.label}</p>
                  <h3 className="mb-2 text-lg font-bold leading-[1.4] transition-colors duration-200 group-hover/card:text-primary md:text-2xl">
                    {pillar.heading}
                  </h3>
                  <p>{pillar.description}</p>
                </div>
                <div className="mt-5 md:mt-6">
                  <span className="inline-flex items-center gap-1 text-sm font-semibold transition-colors duration-200 group-hover/card:text-primary">
                    <span className="relative">
                      Learn more
                      <span className="absolute -bottom-0.5 left-0 h-[1.5px] w-full origin-left scale-x-0 bg-current transition-transform duration-300 ease-out group-hover/card:scale-x-100" />
                    </span>
                    <RxChevronRight className="size-4 transition-transform duration-200 ease-out group-hover/card:translate-x-1" />
                  </span>
                </div>
              </div>
              <div className="relative flex aspect-[4/3] w-full flex-col items-center justify-center self-start overflow-hidden">
                <Image
                  src={pillar.image.src}
                  alt={pillar.image.alt}
                  fill
                  className="object-cover transition-transform duration-700 ease-out group-hover/card:scale-105"
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                />
                <div className="absolute inset-0 bg-foreground/0 transition-colors duration-300 group-hover/card:bg-foreground/5" />
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
