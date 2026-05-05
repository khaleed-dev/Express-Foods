"use client";

import Image from "next/image";
import { AnimatedButton } from "@/components/ui/animated-button";

const defaultStats = [
  { value: "31+", label: "Products exported year-round" },
  { value: "5", label: "Global certifications held" },
];

interface StorySectionProps {
  tagline?: string;
  heading?: string;
  description?: string;
  image?: string;
  stats?: { value: string; label: string }[];
  primaryCta?: { label: string; href: string };
  secondaryCta?: { label: string; href: string };
}

export function StorySection({
  tagline = "Story",
  heading = "A promise that starts in the soil",
  description = "Every shipment begins in the Nile Delta and ends on global shelves. Egypt\u2019s agricultural richness deserves to be delivered with care, precision, and certification. We control every step, test every batch, monitor every container.",
  image = "/images/sections/A promise that stars in the soil section/two-lakes-with-forest-green-field-dividing-them-country-road-passing-through-nearby.webp",
  stats = defaultStats,
  primaryCta = { label: "Learn our story", href: "/about" },
  secondaryCta = { label: "About us", href: "/about" },
}: StorySectionProps = {}) {
  return (
    <section id="story" className="px-[5%] py-16 md:py-24 lg:py-28">
      <div className="container">
        <div className="grid grid-cols-1 items-center gap-12 md:grid-cols-2 lg:gap-x-20">

          {/* Image */}
          <div className="group/img relative w-full overflow-hidden">
            <div className="relative aspect-4/3 w-full">
              <Image
                src={image}
                alt={heading}
                fill
                className="object-cover transition-transform duration-700 ease-out group-hover/img:scale-105"
                sizes="(max-width: 768px) 100vw, 50vw"
              />
            </div>
          </div>

          {/* Content */}
          <div>
            <p className="mb-3 font-semibold md:mb-4">{tagline}</p>
            <h2 className="mb-5 text-5xl font-bold leading-[1.2] md:mb-6 md:text-4xl lg:text-5xl">
              {heading}
            </h2>
            <p className="mb-6 md:mb-8 md:text-md">
              {description}
            </p>

            {/* Stats */}
            <div className="mb-6 grid grid-cols-2 gap-6 border-t border-border-primary pt-6 md:mb-8 md:pt-8">
              {stats.map((stat) => (
                <div
                  key={stat.value}
                  className="group/stat cursor-default"
                >
                  <p className="mb-1 text-4xl font-bold transition-colors duration-200 group-hover/stat:text-primary md:text-5xl">
                    {stat.value}
                  </p>
                  <p className="text-sm text-neutral-light">{stat.label}</p>
                </div>
              ))}
            </div>

            <div className="flex flex-wrap items-center gap-4">
              <AnimatedButton href={primaryCta.href} variant="secondary">
                {primaryCta.label}
              </AnimatedButton>
              <AnimatedButton href={secondaryCta.href} variant="link" withArrow>
                {secondaryCta.label}
              </AnimatedButton>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
