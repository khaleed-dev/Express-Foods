"use client";

import { Button } from "@relume_io/relume-ui";
import Image from "next/image";
import Link from "next/link";
import { BiLeaf, BiShield, BiWorld, BiTime } from "react-icons/bi";
import type { ReactNode } from "react";

interface AdvantageCard {
  number: string;
  title: string;
  description: string;
  icon?: ReactNode;
}

const advantages: AdvantageCard[] = [
  {
    number: "01",
    title: "Fresh and frozen, one partner",
    description:
      "Dual capability means single sourcing, simplified logistics, consistent quality",
  },
  {
    number: "02",
    title: "End-to-end farm control",
    description:
      "We source, harvest, test, pack, and ship. No middlemen, no surprises",
    icon: <BiLeaf className="size-12" />,
  },
  {
    number: "03",
    title: "Certified to global standards",
    description:
      "GLOBALG.A.P., HACCP, ISO 22000, BRCGS, and IFS certifications across all operations",
    icon: <BiShield className="size-12" />,
  },
  {
    number: "04",
    title: "Global reach, local expertise",
    description:
      "Multilingual team shipping to Europe, Gulf, Africa, Asia, and North America weekly",
    icon: <BiWorld className="size-12" />,
  },
  {
    number: "05",
    title: "24-hour response guarantee",
    description:
      "Dedicated account managers who respond to every inquiry within one business day",
    icon: <BiTime className="size-12" />,
  },
];

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
            <div className="grid grid-cols-1 border border-border-primary sm:col-span-2 sm:row-span-1 sm:grid-cols-2">
              <div className="flex flex-1 flex-col justify-center p-6">
                <div>
                  <p className="mb-2 text-sm font-semibold">
                    {advantages[0].number}
                  </p>
                  <h3 className="mb-2 text-xl font-bold md:text-2xl">
                    {advantages[0].title}
                  </h3>
                  <p>{advantages[0].description}</p>
                </div>
                <div className="mt-5 flex flex-wrap items-center gap-4 md:mt-6">
                  <Link href="/products">
                    <Button
                      title="Explore products"
                      variant="link"
                      size="link"
                      iconRight={
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="24"
                          height="24"
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        >
                          <path d="m9 18 6-6-6-6" />
                        </svg>
                      }
                    >
                      Explore products
                    </Button>
                  </Link>
                </div>
              </div>
              <div className="flex items-center justify-center">
                <Image
                  src="/images/sections/about-apart.webp"
                  alt="Fresh and frozen produce capability at Express Foods"
                  width={400}
                  height={500}
                  className="w-full object-cover"
                />
              </div>
            </div>

            {/* Remaining advantage cards */}
            {advantages.slice(1).map((advantage) => (
              <div
                key={advantage.number}
                className="flex flex-col border border-border-primary"
              >
                <div className="flex h-full flex-col justify-between p-6 md:p-8 lg:p-6">
                  <div>
                    {advantage.icon && (
                      <div className="mb-3 md:mb-4">{advantage.icon}</div>
                    )}
                    <h3 className="mb-2 text-xl font-bold md:text-2xl">
                      {advantage.title}
                    </h3>
                    <p>{advantage.description}</p>
                  </div>
                  <div className="mt-5 flex items-center gap-4 md:mt-6">
                    <Link href="/contact">
                      <Button
                        title="Learn more"
                        variant="link"
                        size="link"
                        iconRight={
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="24"
                            height="24"
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth="2"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          >
                            <path d="m9 18 6-6-6-6" />
                          </svg>
                        }
                      >
                        Learn more
                      </Button>
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export default WhatSetsUsApart;
