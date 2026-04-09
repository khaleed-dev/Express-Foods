import type { Metadata } from "next";
import { Suspense } from "react";
import { PageHero } from "@/components/shared/PageHero";
import { ContactChannels } from "@/components/contact/ContactChannels";
import { ContactForm } from "@/components/contact/ContactForm";
import { FaqSection } from "@/components/shared/FaqSection";
import { CtaSection } from "@/components/shared/CtaSection";

export const metadata: Metadata = {
  title: "Contact Us",
  description:
    "Get in touch with Express Foods — request a quote, samples, or partnership inquiry.",
};

export default function ContactPage() {
  return (
    <>
      <PageHero
        tagline="Get in touch"
        heading="Let's talk produce"
        description="Request a quote, ask about samples, or discuss a long-term supply partnership. We respond within 24 hours."
        backgroundImage="/images/sections/contact-hero.webp"
      />
      <ContactChannels />
      <Suspense
        fallback={
          <div className="px-[5%] py-16 md:py-24 lg:py-28">
            <div className="container">
              <p className="text-center text-muted-foreground">
                Loading form...
              </p>
            </div>
          </div>
        }
      >
        <ContactForm />
      </Suspense>
      <FaqSection />
      <CtaSection image="/images/sections/contact-cta.webp" />
    </>
  );
}
