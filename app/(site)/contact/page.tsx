import type { Metadata } from "next";
import { Suspense } from "react";
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
    <div className="bg-white text-neutral-900">
      <div className="bg-white px-[5%] pt-16 md:pt-20 lg:pt-24">
        <div className="container max-w-3xl text-center">
          <h1 className="mb-3 font-serif text-4xl font-bold text-neutral-900 md:text-5xl">
            Contact Us
          </h1>
          <p className="text-neutral-600 md:text-lg">
            Please fill the info below and we will contact you as soon as
            possible
            <br />
            <span dir="rtl" className="text-neutral-700">
              الرجاء تعبئة المعلومات في الأسفل وسنتواصل معكم بأسرع وقت ممكن
            </span>
          </p>
        </div>
      </div>

      <Suspense
        fallback={
          <div className="bg-white px-[5%] py-16 md:py-24 lg:py-28">
            <div className="container">
              <p className="text-center text-neutral-500">Loading form...</p>
            </div>
          </div>
        }
      >
        <ContactForm />
      </Suspense>

      <div className="bg-white">
        <FaqSection />
      </div>

      <div className="bg-white">
        <CtaSection image="/images/sections/contact-cta.webp" />
      </div>
    </div>
  );
}
