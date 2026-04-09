"use client";

import { Button } from "@relume_io/relume-ui";
import Image from "next/image";
import Link from "next/link";

interface CtaSectionProps {
  heading?: string;
  description?: string;
  primaryCta?: {
    label: string;
    href: string;
  };
  secondaryCta?: {
    label: string;
    href: string;
  };
  image?: string;
}

const defaults = {
  heading: "Ready to source certified produce",
  description:
    "Send us your requirements. We respond within 24 hours with pricing, samples, and a proposal built for your business.",
  primaryCta: {
    label: "Request a quote",
    href: "/contact?intent=quote",
  },
  secondaryCta: {
    label: "Contact sales",
    href: "/contact",
  },
  image: "/images/sections/shared-cta-01.webp",
};

export function CtaSection({
  heading = defaults.heading,
  description = defaults.description,
  primaryCta = defaults.primaryCta,
  secondaryCta = defaults.secondaryCta,
  image = defaults.image,
}: CtaSectionProps) {
  return (
    <section id="cta-section" className="px-[5%] py-16 md:py-24 lg:py-28">
      <div className="container flex flex-col items-center">
        <div className="mb-12 max-w-lg text-center md:mb-18 lg:mb-20">
          <h2 className="rb-5 mb-5 text-5xl font-bold md:mb-6 md:text-7xl lg:text-8xl">
            {heading}
          </h2>
          {description && <p className="md:text-md">{description}</p>}
          {(primaryCta || secondaryCta) && (
            <div className="mt-6 flex flex-wrap items-center justify-center gap-4 md:mt-8">
              {primaryCta && (
                <Link href={primaryCta.href}>
                  <Button title={primaryCta.label}>{primaryCta.label}</Button>
                </Link>
              )}
              {secondaryCta && (
                <Link href={secondaryCta.href}>
                  <Button title={secondaryCta.label} variant="secondary">
                    {secondaryCta.label}
                  </Button>
                </Link>
              )}
            </div>
          )}
        </div>
        <Image
          src={image}
          alt={heading}
          width={1200}
          height={800}
          className="size-full object-cover"
        />
      </div>
    </section>
  );
}

export default CtaSection;
