"use client";

import React from "react";

interface LogoPartnersProps {
  heading?: string;
}

const certifications = [
  "ISO 22000",
  "HACCP",
  "GLOBALG.A.P.",
  "BRCGS",
  "IFS",
  "FDA",
];

export function LogoPartners({
  heading = "Trusted by importers and retailers worldwide",
}: LogoPartnersProps) {
  return (
    <section className="px-[5%] py-12 md:py-16 lg:py-20">
      <div className="container">
        <h2 className="mx-auto mb-8 w-full max-w-lg text-center font-serif text-base font-bold leading-[1.2] md:mb-10 md:text-md md:leading-[1.2] lg:mb-12">
          {heading}
        </h2>
        <div className="grid grid-cols-2 gap-2 md:grid-cols-3">
          {certifications.map((name) => (
            <div
              key={name}
              className="flex w-full items-center justify-center justify-self-center bg-neutral-lightest px-4 py-5 md:py-6"
            >
              <span className="text-sm font-semibold tracking-wide text-text-primary md:text-base">
                {name}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default LogoPartners;
