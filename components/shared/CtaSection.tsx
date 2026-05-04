"use client";

import Image from "next/image";
import { AnimatedButton } from "@/components/ui/animated-button";

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
          <h2 className="rb-5 mb-5 font-serif text-5xl font-bold md:mb-6 md:text-4xl lg:text-5xl">
            {heading}
          </h2>
          {description && <p className="md:text-md">{description}</p>}
          {(primaryCta || secondaryCta) && (
            <div className="mt-6 flex flex-wrap items-center justify-center gap-4 md:mt-8">
              {primaryCta && (
                <AnimatedButton href={primaryCta.href} variant="primary" withArrow>
                  {primaryCta.label}
                </AnimatedButton>
              )}
              {secondaryCta && (
                <AnimatedButton href={secondaryCta.href} variant="secondary">
                  {secondaryCta.label}
                </AnimatedButton>
              )}
            </div>
          )}
        </div>
        <div className="group/img w-full overflow-hidden">
          <Image
            src={image}
            alt={heading}
            width={1200}
            height={800}
            className="size-full object-cover transition-transform duration-700 ease-out group-hover/img:scale-[1.02]"
          />
        </div>
      </div>
    </section>
  );
}

export default CtaSection;
