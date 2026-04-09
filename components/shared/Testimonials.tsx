"use client";

import React from "react";
import Image from "next/image";
import { BiSolidStar } from "react-icons/bi";

interface Testimonial {
  quote: string;
  name: string;
  role: string;
  avatar?: string;
  rating?: number;
}

interface TestimonialsProps {
  heading?: string;
  description?: string;
  testimonials?: Testimonial[];
}

const defaultTestimonials: Testimonial[] = [
  {
    quote:
      "Express Foods does not just ship produce. They ship reliability. We know what we are getting, when we are getting it, and it arrives in perfect condition.",
    name: "Marco Rossi",
    role: "Sourcing director, European supermarket chain",
    rating: 5,
  },
  {
    quote:
      "Their multilingual team responds in hours, not days. That matters when you are managing supply chains across continents.",
    name: "Fatima Al-Mansouri",
    role: "Procurement manager, Gulf distributor",
    rating: 5,
  },
  {
    quote:
      "Certified quality, consistent supply, and a partner who actually cares about the relationship. That is rare.",
    name: "James Chen",
    role: "Operations manager, Asian importer",
    rating: 5,
  },
];

function getInitials(name: string): string {
  return name
    .split(" ")
    .map((part) => part[0])
    .join("")
    .toUpperCase();
}

function StarRating({ count = 5 }: { count?: number }) {
  return (
    <div className="mb-5 flex md:mb-6">
      {Array.from({ length: count }, (_, i) => (
        <BiSolidStar key={i} className="mr-1 size-6" />
      ))}
    </div>
  );
}

export function Testimonials({
  heading = "What buyers say",
  description = "Real partnerships. Real results.",
  testimonials = defaultTestimonials,
}: TestimonialsProps) {
  return (
    <section className="px-[5%] py-16 md:py-24 lg:py-28">
      <div className="container">
        <div className="mx-auto mb-12 w-full max-w-lg text-center md:mb-18 lg:mb-20">
          <h2 className="mb-5 text-5xl font-bold md:mb-6 md:text-7xl lg:text-8xl">
            {heading}
          </h2>
          <p className="md:text-md">{description}</p>
        </div>
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
          {testimonials.map((testimonial) => (
            <div
              key={testimonial.name}
              className="flex w-full flex-col items-start justify-between border border-border-primary p-6 md:p-8"
            >
              <div className="rb-5 mb-5 md:mb-6">
                <StarRating count={testimonial.rating ?? 5} />
                <blockquote className="md:text-md">
                  &ldquo;{testimonial.quote}&rdquo;
                </blockquote>
              </div>
              <div className="mt-5 flex w-full flex-col items-start md:mt-6 md:w-fit md:flex-row md:items-center">
                {testimonial.avatar ? (
                  <Image
                    src={testimonial.avatar}
                    alt={testimonial.name}
                    width={48}
                    height={48}
                    className="mb-4 size-12 min-h-12 min-w-12 rounded-full object-cover md:mb-0 md:mr-4"
                  />
                ) : (
                  <div className="mb-4 flex size-12 min-h-12 min-w-12 items-center justify-center rounded-full bg-background-alternative text-text-alternative md:mb-0 md:mr-4">
                    <span className="text-sm font-semibold">
                      {getInitials(testimonial.name)}
                    </span>
                  </div>
                )}
                <div>
                  <p className="font-semibold">{testimonial.name}</p>
                  <p>{testimonial.role}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Testimonials;
