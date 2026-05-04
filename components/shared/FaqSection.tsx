"use client";

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@relume_io/relume-ui";
import React from "react";
import { RxPlus } from "react-icons/rx";
import { AnimatedButton } from "@/components/ui/animated-button";

interface FaqItem {
  question: string;
  answer: string;
}

interface FaqSectionProps {
  heading?: string;
  description?: string;
  faqs?: FaqItem[];
  showContactCta?: boolean;
}

const defaultFaqs: FaqItem[] = [
  {
    question: "What are minimum orders?",
    answer:
      "We work with importers and distributors of all sizes. Minimum orders depend on product and destination, but we're flexible with growing partners. Contact our sales team for specifics on your needs.",
  },
  {
    question: "How fast do you respond?",
    answer:
      "All inquiries receive a reply within 24 hours with pricing, availability, and logistics details. Our commercial team speaks multiple languages and understands your market.",
  },
  {
    question: "Are your products certified?",
    answer:
      "Yes. We hold ISO 22000, ISO 9001, HACCP, GLOBALG.A.P., BRCGS, IFS, HALAL, and FDA certifications. Every batch is tested and traceable from farm to port.",
  },
  {
    question: "What's the cold chain like?",
    answer:
      "Temperature-controlled from harvest through packing, storage, and shipping. We monitor every container and provide documentation. Europe receives shipments in 3\u20135 days.",
  },
  {
    question: "Can you handle private label?",
    answer:
      "Absolutely. We pack and label to your specifications. Our packing solutions page details options, or discuss custom requirements directly with our team.",
  },
];

export function FaqSection({
  heading = "Questions",
  description = "Find answers to the most common questions about sourcing, certifications, and shipping.",
  faqs = defaultFaqs,
  showContactCta = true,
}: FaqSectionProps) {
  return (
    <section className="px-[5%] py-16 md:py-24 lg:py-28">
      <div className="container max-w-lg">
        <div className="rb-12 mb-12 text-center md:mb-18 lg:mb-20">
          <h2 className="rb-5 mb-5 font-serif text-5xl font-bold md:mb-6 md:text-4xl lg:text-5xl">
            {heading}
          </h2>
          <p className="md:text-md">{description}</p>
        </div>
        <Accordion
          type="multiple"
          className="grid items-start justify-stretch gap-4"
        >
          {faqs.map((faq, index) => (
            <AccordionItem
              key={index}
              value={`item-${index}`}
              className="border border-border-primary px-5 md:px-6"
            >
              <AccordionTrigger
                icon={
                  <RxPlus className="size-7 shrink-0 text-text-primary transition-transform duration-300 md:size-8" />
                }
                className="md:py-5 md:text-md [&[data-state=open]>svg]:rotate-45"
              >
                {faq.question}
              </AccordionTrigger>
              <AccordionContent className="md:pb-6">
                {faq.answer}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
        {showContactCta && (
          <div className="mx-auto mt-12 max-w-md text-center md:mt-18 lg:mt-20">
            <h4 className="mb-3 text-2xl font-bold md:mb-4 md:text-3xl md:leading-[1.3] lg:text-4xl">
              Still have questions
            </h4>
            <p className="md:text-md">
              Reach out directly and we&apos;ll answer within hours.
            </p>
            <div className="mt-6 md:mt-8">
              <AnimatedButton href="/contact" variant="secondary">
                Contact
              </AnimatedButton>
            </div>
          </div>
        )}
      </div>
    </section>
  );
}

export default FaqSection;
