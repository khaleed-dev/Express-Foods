"use client";

import { Button } from "@relume_io/relume-ui";
import Image from "next/image";
import Link from "next/link";

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
        <h1 className="mb-5 text-6xl font-bold text-text-alternative md:mb-6 md:text-9xl lg:text-10xl">
          {heading}
        </h1>
        {description && (
          <p className="text-text-alternative md:text-md">{description}</p>
        )}
        {(primaryCta || secondaryCta) && (
          <div className="mt-6 flex flex-wrap items-center justify-center gap-4 md:mt-8">
            {primaryCta && (
              <Link href={primaryCta.href}>
                <Button title={primaryCta.label}>{primaryCta.label}</Button>
              </Link>
            )}
            {secondaryCta && (
              <Link href={secondaryCta.href}>
                <Button title={secondaryCta.label} variant="secondary-alt">
                  {secondaryCta.label}
                </Button>
              </Link>
            )}
          </div>
        )}
      </div>
      <div className="absolute inset-0 z-0">
        <Image
          src={backgroundImage}
          alt={heading}
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-black/50" />
      </div>
    </section>
  );
}

export default PageHero;
