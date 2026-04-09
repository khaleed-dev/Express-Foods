"use client";

import { Button } from "@relume_io/relume-ui";
import Image from "next/image";
import Link from "next/link";
import { BiCheck } from "react-icons/bi";

const highlights = [
  "Ethical sourcing from certified farms",
  "Full traceability from harvest to port",
  "Compliance with global food safety standards",
];

export function OriginStory() {
  return (
    <section id="origin-story" className="px-[5%] py-16 md:py-24 lg:py-28">
      <div className="container">
        <div className="grid grid-cols-1 gap-y-12 md:grid-cols-2 md:items-center md:gap-x-12 lg:gap-x-20">
          <div>
            <p className="mb-3 font-semibold md:mb-4">Origins</p>
            <h2 className="mb-5 text-5xl font-bold md:mb-6 md:text-4xl lg:text-5xl">
              Rooted in the Nile Delta, growing for the world
            </h2>
            <p className="mb-5 text-base md:mb-6 md:text-md">
              Express Foods began with a simple conviction: Egyptian produce
              deserves to reach the world&apos;s best tables with the same care
              it receives in the soil. We built this company on certified farms,
              rigorous testing, and the discipline of a cold chain that never
              breaks.
            </p>
            <ul className="grid grid-cols-1 gap-4 py-2">
              {highlights.map((item) => (
                <li key={item} className="flex self-start">
                  <div className="mr-4 flex-none self-start">
                    <BiCheck className="size-6 text-background-alternative" />
                  </div>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
            <div className="mt-6 flex flex-wrap items-center gap-4 md:mt-8">
              <Link href="/products">
                <Button title="Explore products" variant="secondary">
                  Explore products
                </Button>
              </Link>
              <Link href="/contact?intent=quote">
                <Button
                  title="Request a quote"
                  variant="link"
                  size="link"
                  iconRight={
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <path d="m9 18 6-6-6-6" />
                    </svg>
                  }
                >
                  Request a quote
                </Button>
              </Link>
            </div>
          </div>
          <div>
            <Image
              src="/images/sections/about-origins.webp"
              alt="Egyptian farmland in the Nile Delta where Express Foods sources its produce"
              width={616}
              height={640}
              className="w-full object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  );
}

export default OriginStory;
