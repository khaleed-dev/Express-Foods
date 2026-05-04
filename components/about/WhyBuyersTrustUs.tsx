"use client";

import Image from "next/image";
import {
  useScroll,
  useTransform,
  motion,
  type MotionValue,
} from "framer-motion";
import { useRef } from "react";
import { useMediaQuery } from "@relume_io/relume-ui";
import { AnimatedButton } from "@/components/ui/animated-button";

interface TrustItem {
  heading: string;
  description: string;
  image: string;
  imageAlt: string;
}

const trustItems: TrustItem[] = [
  {
    heading: "Certified quality",
    description:
      "GLOBALG.A.P., HACCP, ISO 22000, and BRCGS certified across every operation. Third-party audited, buyer verified.",
    image: "/images/sections/about-trust-01.webp",
    imageAlt: "Quality certification and inspection at Express Foods facility",
  },
  {
    heading: "Unbroken cold chain",
    description:
      "Temperature-controlled from packhouse to your dock, every shipment monitored in real time.",
    image: "/images/sections/about-trust-02.webp",
    imageAlt: "Cold chain logistics and refrigerated transport",
  },
  {
    heading: "Full traceability",
    description:
      "Every carton traced back to the farm, the field, and the harvest date. Complete documentation on demand.",
    image: "/images/sections/about-trust-03.webp",
    imageAlt: "Produce traceability and documentation system",
  },
  {
    heading: "Responsive team",
    description:
      "Multilingual commercial staff ready to solve problems and close deals fast. 24-hour response guaranteed.",
    image: "/images/sections/about-trust-04.webp",
    imageAlt: "Express Foods commercial team at work",
  },
];

function useParallaxStyles(
  scrollYProgress: MotionValue<number>,
  index: number,
  total: number
) {
  const startProgress = index / total;
  const endProgress = (index + 1) / total;

  const opacity = useTransform(
    scrollYProgress,
    [
      Math.max(0, startProgress - 0.07),
      startProgress,
      endProgress - 0.07,
      Math.min(1, endProgress),
    ],
    [0, 1, 1, 0]
  );

  const y = useTransform(
    scrollYProgress,
    [
      Math.max(0, startProgress - 0.1),
      startProgress,
      endProgress - 0.1,
      Math.min(1, endProgress),
    ],
    [100, 0, 0, -100]
  );

  return { opacity, y };
}

function TrustItemDesktop({
  item,
  index,
  scrollYProgress,
}: {
  item: TrustItem;
  index: number;
  scrollYProgress: MotionValue<number>;
}) {
  const styles = useParallaxStyles(
    scrollYProgress,
    index,
    trustItems.length
  );

  return (
    <motion.div
      style={{ opacity: styles.opacity, y: styles.y }}
      className={index === 0 ? "" : "md:absolute first:md:relative"}
    >
      <h5 className="font-bold md:mb-4 md:text-2xl">{item.heading}</h5>
      <p className="md:text-md">{item.description}</p>
    </motion.div>
  );
}

function TrustItemMobile({ item }: { item: TrustItem }) {
  return (
    <div>
      <h5 className="mb-3 text-xl font-bold">{item.heading}</h5>
      <p>{item.description}</p>
      <div className="relative mt-4 aspect-[4/3]">
        <Image
          src={item.image}
          alt={item.imageAlt}
          fill
          className="object-cover"
          sizes="100vw"
        />
      </div>
    </div>
  );
}

export function WhyBuyersTrustUs() {
  const containerRef = useRef<HTMLElement>(null);
  const isMobile = useMediaQuery("(max-width: 767px)");
  const isTablet = useMediaQuery("(min-width: 768px)");

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start center", "end center"],
  });

  return (
    <section
      ref={containerRef}
      id="why-buyers-trust-us"
      className="px-[5%] py-16 md:py-24 lg:py-28"
    >
      <div className="container">
        <div className="grid grid-cols-1 gap-4 md:grid-cols-2 md:items-start md:gap-20">
          {/* Left column: text + trust items */}
          <div className="flex flex-col gap-y-16 md:sticky md:top-20 md:mt-20 md:h-[calc(100vh_-10rem)] md:justify-center">
            <div className="flex flex-col">
              <p className="mb-3 font-semibold md:mb-4">Partnership</p>
              <h2 className="mb-5 text-5xl font-bold md:mb-6 md:text-4xl lg:text-5xl">
                Why buyers trust us
              </h2>
              <p className="md:text-md">
                We don&apos;t just supply produce. We build supply chains that
                work. Reliability, traceability, and a team that responds within
                twenty-four hours.
              </p>
              <div className="mt-6 flex flex-wrap items-center gap-4 md:mt-8">
                <AnimatedButton href="/products" variant="secondary">
                  Explore products
                </AnimatedButton>
                <AnimatedButton href="/contact?intent=quote" variant="link" withArrow>
                  Request a quote
                </AnimatedButton>
              </div>
            </div>

            {/* Trust items with parallax on desktop, static on mobile */}
            <div className="flex flex-col justify-start gap-y-8">
              {trustItems.map((item, index) => (
                <div key={item.heading}>
                  {isMobile && <TrustItemMobile item={item} />}
                  {isTablet && (
                    <TrustItemDesktop
                      item={item}
                      index={index}
                      scrollYProgress={scrollYProgress}
                    />
                  )}
                </div>
              ))}
            </div>
          </div>

          {/* Right column: parallax images (desktop only) */}
          <div className="hidden md:grid md:grid-cols-1 md:gap-4">
            {trustItems.map((item) => (
              <div key={item.heading} className="relative h-screen overflow-hidden">
                <Image
                  src={item.image}
                  alt={item.imageAlt}
                  fill
                  className="object-cover"
                  sizes="50vw"
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export default WhyBuyersTrustUs;
