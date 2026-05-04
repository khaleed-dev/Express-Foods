"use client";

import Image from "next/image";
import Link from "next/link";
import { BiLeaf, BiShield, BiWorld, BiTime } from "react-icons/bi";
import { RxChevronRight } from "react-icons/rx";
import type { ReactNode } from "react";

interface AdvantageCard {
  number: string;
  title: string;
  description: string;
  icon?: ReactNode;
  href: string;
}

const advantages: AdvantageCard[] = [
  {
    number: "01",
    title: "Fresh and frozen, one partner",
    description:
      "Dual capability means single sourcing, simplified logistics, consistent quality",
    href: "/products",
  },
  {
    number: "02",
    title: "End-to-end farm control",
    description:
      "We source, harvest, test, pack, and ship. No middlemen, no surprises",
    icon: <BiLeaf className="size-12" />,
    href: "/contact",
  },
  {
    number: "03",
    title: "Certified to global standards",
    description:
      "GLOBALG.A.P., HACCP, ISO 22000, BRCGS, and IFS certifications across all operations",
    icon: <BiShield className="size-12" />,
    href: "/contact",
  },
  {
    number: "04",
    title: "Global reach, local expertise",
    description:
      "Multilingual team shipping to Europe, Gulf, Africa, Asia, and North America weekly",
    icon: <BiWorld className="size-12" />,
    href: "/contact",
  },
  {
    number: "05",
    title: "24-hour response guarantee",
    description:
      "Dedicated account managers who respond to every inquiry within one business day",
    icon: <BiTime className="size-12" />,
    href: "/contact",
  },
];

function CardLearnMore({ label = "Learn more" }: { label?: string }) {
  return (
    <span className="inline-flex items-center gap-1 text-sm font-semibold transition-colors duration-200 group-hover/card:text-primary">
      <span className="relative">
        {label}
        <span className="absolute -bottom-0.5 left-0 h-[1.5px] w-full origin-left scale-x-0 bg-current transition-transform duration-300 ease-out group-hover/card:scale-x-100" />
      </span>
      <RxChevronRight className="size-4 transition-transform duration-200 ease-out group-hover/card:translate-x-1" />
    </span>
  );
}

export function WhatSetsUsApart() {
  return (
    <section id="what-sets-us-apart" className="px-[5%] py-16 md:py-24 lg:py-28">
      <div className="container">
        <div className="mb-12 md:mb-18 lg:mb-20">
          <div className="mx-auto max-w-lg text-center">
            <p className="mb-3 font-semibold md:mb-4">Advantage</p>
            <h2 className="mb-5 text-5xl font-bold md:mb-6 md:text-4xl lg:text-5xl">
              What sets us apart
            </h2>
            <p className="md:text-md">
              Five reasons buyers choose Express Foods
            </p>
          </div>
        </div>
        <div className="grid grid-cols-1 gap-6 md:gap-8">
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 md:gap-8 lg:grid-cols-4">
            {/* Featured card with image */}
            <Link
              href={advantages[0].href}
              className="group/card grid grid-cols-1 overflow-hidden border border-border-primary bg-background transition-all duration-300 ease-out hover:-translate-y-1 hover:border-primary/60 hover:shadow-2xl hover:shadow-primary/10 sm:col-span-2 sm:row-span-1 sm:grid-cols-2"
            >
              <div className="flex flex-1 flex-col justify-center p-6">
                <div>
                  <p className="mb-2 text-sm font-semibold text-primary/80">
                    {advantages[0].number}
                  </p>
                  <h3 className="mb-2 text-xl font-bold transition-colors duration-200 group-hover/card:text-primary md:text-2xl">
                    {advantages[0].title}
                  </h3>
                  <p>{advantages[0].description}</p>
                </div>
                <div className="mt-5 flex flex-wrap items-center gap-4 md:mt-6">
                  <CardLearnMore label="Explore products" />
                </div>
              </div>
              <div className="relative flex aspect-[4/3] items-center justify-center overflow-hidden sm:aspect-auto">
                <Image
                  src="/images/sections/about-apart.webp"
                  alt="Fresh and frozen produce capability at Express Foods"
                  width={400}
                  height={500}
                  className="size-full object-cover transition-transform duration-700 ease-out group-hover/card:scale-105"
                />
              </div>
            </Link>

            {/* Remaining advantage cards */}
            {advantages.slice(1).map((advantage) => (
              <Link
                key={advantage.number}
                href={advantage.href}
                className="group/card flex flex-col border border-border-primary bg-background transition-all duration-300 ease-out hover:-translate-y-1 hover:border-primary/60 hover:shadow-xl hover:shadow-primary/10"
              >
                <div className="flex h-full flex-col justify-between p-6 md:p-8 lg:p-6">
                  <div>
                    {advantage.icon && (
                      <div className="mb-3 text-foreground transition-all duration-300 ease-out group-hover/card:scale-110 group-hover/card:text-primary md:mb-4">
                        {advantage.icon}
                      </div>
                    )}
                    <p className="mb-2 text-sm font-semibold text-primary/80">
                      {advantage.number}
                    </p>
                    <h3 className="mb-2 text-xl font-bold transition-colors duration-200 group-hover/card:text-primary md:text-2xl">
                      {advantage.title}
                    </h3>
                    <p>{advantage.description}</p>
                  </div>
                  <div className="mt-5 flex items-center gap-4 md:mt-6">
                    <CardLearnMore />
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export default WhatSetsUsApart;
