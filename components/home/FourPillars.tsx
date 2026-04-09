"use client";

import { Button } from "@relume_io/relume-ui";
import Image from "next/image";
import Link from "next/link";
import { RxChevronRight } from "react-icons/rx";

const pillars = [
  {
    label: "One",
    heading: "Certified quality from farm to port",
    description: "ISO 22000, HACCP, GLOBALG.A.P., BRCGS, IFS certified.",
    image: { src: "/images/sections/home-usp-01.webp", alt: "Certified quality farming" },
    href: "/about",
  },
  {
    label: "Two",
    heading: "Fresh and frozen, one trusted partner",
    description: "Dual capability means single sourcing, consistent supply.",
    image: { src: "/images/sections/home-usp-02.webp", alt: "Fresh and frozen produce capabilities" },
    href: "/products",
  },
  {
    label: "Three",
    heading: "Unbroken cold chain, every mile",
    description: "Temperature monitored from harvest through delivery.",
    image: { src: "/images/sections/home-process.webp", alt: "Cold chain logistics monitoring" },
    href: "/about",
  },
  {
    label: "Four",
    heading: "A partner, not a vendor",
    description: "24-hour response, multilingual team, long-term commitment.",
    image: { src: "/images/sections/home-global-reach.webp", alt: "Global partnership and support" },
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
            <div key={index} className="flex flex-col border border-border-primary">
              <div className="flex flex-1 flex-col justify-center p-6">
                <div>
                  <p className="mb-2 text-sm font-semibold">{pillar.label}</p>
                  <h3 className="mb-2 text-lg font-bold leading-[1.4] md:text-2xl">
                    {pillar.heading}
                  </h3>
                  <p>{pillar.description}</p>
                </div>
                <div className="mt-5 md:mt-6">
                  <Button
                    asChild
                    variant="link"
                    size="link"
                    iconRight={<RxChevronRight />}
                  >
                    <Link href={pillar.href}>Learn more</Link>
                  </Button>
                </div>
              </div>
              <div className="relative flex w-full flex-col items-center justify-center self-start aspect-[4/3]">
                <Image
                  src={pillar.image.src}
                  alt={pillar.image.alt}
                  fill
                  className="object-cover"
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
