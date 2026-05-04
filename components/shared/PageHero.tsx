"use client";

import Image from "next/image";
import { AnimatedButton } from "@/components/ui/animated-button";

interface PageHeroProps {
  tagline?: string;
  heading: string;
  description?: string;
  backgroundImage: string;
  primaryCta?: {
    label: string;
    href: string;
  };
  secondaryCta?: {
    label: string;
    href: string;
  };
}

export function PageHero({
  tagline,
  heading,
  description,
  backgroundImage,
  primaryCta,
  secondaryCta,
}: PageHeroProps) {
  return (
    <section id="page-hero" className="relative px-[5%] py-16 md:py-24 lg:py-28">
      <div className="container relative z-10 max-w-lg text-center">
        {tagline && (
          <p className="mb-3 font-semibold text-text-alternative md:mb-4">
            {tagline}
          </p>
        )}
        <h1 className="mb-5 font-serif text-4xl font-bold text-text-alternative md:mb-6 md:text-5xl lg:text-6xl">
          {heading}
        </h1>
        {description && (
          <p className="text-text-alternative md:text-md">{description}</p>
        )}
        {(primaryCta || secondaryCta) && (
          <div className="mt-6 flex flex-wrap items-center justify-center gap-4 md:mt-8">
            {primaryCta && (
              <AnimatedButton href={primaryCta.href} variant="primary" withArrow>
                {primaryCta.label}
              </AnimatedButton>
            )}
            {secondaryCta && (
              <AnimatedButton href={secondaryCta.href} variant="ghost-light">
                {secondaryCta.label}
              </AnimatedButton>
            )}
          </div>
        )}
      </div>
      <div className="absolute inset-0 z-0">
        <Image
          src={backgroundImage}
          alt={heading}
          fill
          sizes="100vw"
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-black/50" />
      </div>
    </section>
  );
}

export default PageHero;
