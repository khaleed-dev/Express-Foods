import type { Metadata } from "next";
import { PageHero } from "@/components/shared/PageHero";
import { OriginStory } from "@/components/about/OriginStory";
import { WhatSetsUsApart } from "@/components/about/WhatSetsUsApart";
import { WhyBuyersTrustUs } from "@/components/about/WhyBuyersTrustUs";
import { LogoPartners } from "@/components/shared/LogoPartners";
import { Stats } from "@/components/about/Stats";
import { Testimonials } from "@/components/shared/Testimonials";
import { CtaSection } from "@/components/shared/CtaSection";

export const metadata: Metadata = {
  title: "About Us",
  description:
    "Learn about Express Foods — our story, standards, and commitment to premium Egyptian produce.",
};

export default function AboutPage() {
  return (
    <>
      <PageHero
        tagline="Our story"
        heading="Premium produce, proven partner"
        description="Express Foods sources, certifies, and ships the finest fresh and frozen produce from Egypt to the world's most demanding buyers."
        backgroundImage="/images/sections/about-hero.webp"
        primaryCta={{ label: "Explore products", href: "/products" }}
        secondaryCta={{
          label: "Request a quote",
          href: "/contact?intent=quote",
        }}
      />
      <OriginStory />
      <WhatSetsUsApart />
      <WhyBuyersTrustUs />
      <LogoPartners />
      <Stats />
      <Testimonials />
      <CtaSection />
    </>
  );
}
