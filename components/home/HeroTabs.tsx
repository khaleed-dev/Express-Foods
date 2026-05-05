"use client";

import { useState, useEffect, useCallback, useRef } from "react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@relume_io/relume-ui";
import { AnimatePresence, motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { RxChevronRight } from "react-icons/rx";

const SLIDE_DURATION = 6; // seconds per slide

interface TabTrigger {
  value: string;
  text: string;
}

interface TabContentData {
  value: string;
  heading: string;
  description: string;
  buttons: { title: string; href: string; variant?: string }[];
  image: { src: string; alt: string };
}

interface HeroTabsProps {
  tabs?: { trigger: TabTrigger[]; content: TabContentData[] };
}

const defaultTabs: { trigger: TabTrigger[]; content: TabContentData[] } = {
  trigger: [
    { value: "tab-one", text: "Fresh citrus" },
    { value: "tab-two", text: "Year-round" },
    { value: "tab-three", text: "Certified quality" },
    { value: "tab-four", text: "Global reach" },
  ],
  content: [
    {
      value: "tab-one",
      heading: "From the banks of the Nile to the world\u2019s best supermarkets",
      description:
        "Premium certified Egyptian fruits and vegetables, shipped fresh or frozen under complete cold-chain control to Europe, the Gulf, Africa, and beyond. Every harvest tested. Every container tracked. Every promise kept.",
      buttons: [
        { title: "Request a quote", href: "/contact?intent=quote" },
        { title: "Explore products", href: "/products", variant: "secondary-alt" },
      ],
      image: { src: "/images/sections/home-slider-01.webp", alt: "Fresh Egyptian citrus fruits ready for export" },
    },
    {
      value: "tab-two",
      heading: "From the banks of the Nile to the world\u2019s best supermarkets",
      description:
        "Premium certified Egyptian fruits and vegetables, shipped fresh or frozen under complete cold-chain control to Europe, the Gulf, Africa, and beyond. Every harvest tested. Every container tracked. Every promise kept.",
      buttons: [
        { title: "Request a quote", href: "/contact?intent=quote" },
        { title: "Explore products", href: "/products", variant: "secondary-alt" },
      ],
      image: { src: "/images/sections/home-slider-02.webp", alt: "Year-round harvest from the Nile Delta" },
    },
    {
      value: "tab-three",
      heading: "Year-round harvest meets global demand",
      description:
        "The Nile Delta grows what the world needs, when it needs it. Three to five days to European ports means fresher produce on your shelves, faster margins in your business.",
      buttons: [
        { title: "Request a quote", href: "/contact?intent=quote" },
        { title: "Explore products", href: "/products", variant: "secondary-alt" },
      ],
      image: { src: "/images/sections/home-slider-03.webp", alt: "Certified quality produce inspection" },
    },
    {
      value: "tab-four",
      heading: "Certified quality built on trust and science",
      description:
        "ISO 22000, HACCP, GLOBALG.A.P., BRCGS, IFS. Every batch tested. Every step controlled. Every shipment guaranteed.",
      buttons: [
        { title: "Request a quote", href: "/contact?intent=quote" },
        { title: "Explore products", href: "/products", variant: "secondary-alt" },
      ],
      image: { src: "/images/sections/home-global-reach.webp", alt: "Global shipping and logistics network" },
    },
  ],
};

function TabContent({ content }: { content: TabContentData }) {
  return (
    <div className="flex h-screen flex-col items-center justify-center">
      <div className="px-[5%] py-16 md:py-24 lg:py-28">
        <motion.div
          className="relative z-10 mx-auto max-w-3xl text-center"
          initial={{ y: "15%", opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: "-15%", opacity: 0 }}
          transition={{ duration: 0.5, ease: "easeOut" }}
        >
          <h1 className="mb-5 font-serif text-4xl font-bold leading-[1.1] text-text-alternative md:mb-6 md:text-5xl lg:text-6xl">
            {content.heading}
          </h1>
          <p className="mx-auto max-w-2xl text-base leading-relaxed text-white/85 md:text-lg">
            {content.description}
          </p>
          <div className="mt-8 flex items-center justify-center gap-x-5 md:mt-10">
            {content.buttons.map((button, index) => {
              const isSecondary = button.variant === "secondary-alt";
              return (
                <Link
                  key={index}
                  href={button.href}
                  className={
                    "group/hero-btn inline-flex items-center justify-center gap-2 rounded-md px-8 py-3.5 text-sm font-semibold transition-all duration-200 ease-out hover:-translate-y-0.5 active:translate-y-0 " +
                    (isSecondary
                      ? "border-2 border-white/80 text-white hover:bg-white hover:text-black"
                      : "bg-primary text-primary-foreground shadow-lg hover:shadow-xl hover:shadow-primary/40 hover:bg-primary/95")
                  }
                >
                  <span>{button.title}</span>
                  <RxChevronRight className="size-4 transition-transform duration-200 ease-out group-hover/hero-btn:translate-x-1" />
                </Link>
              );
            })}
          </div>
        </motion.div>
      </div>
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 z-10 bg-black/40" />
        <Image
          src={content.image.src}
          alt={content.image.alt}
          fill
          className="object-cover"
          priority
          sizes="100vw"
        />
      </div>
    </div>
  );
}

export function HeroTabs({ tabs = defaultTabs }: HeroTabsProps = {}) {
  const [activeTab, setActiveTab] = useState("tab-one");
  const [isPaused, setIsPaused] = useState(false);
  // Key that increments each time a new slide activates — used to restart the indicator CSS animation
  const [indicatorKey, setIndicatorKey] = useState(0);
  const intervalRef = useRef<ReturnType<typeof setInterval> | null>(null);

  const tabValues = tabs.trigger.map((t) => t.value);

  const advanceTab = useCallback(() => {
    setActiveTab((prev) => {
      const currentIndex = tabValues.indexOf(prev);
      const nextIndex = (currentIndex + 1) % tabValues.length;
      return tabValues[nextIndex];
    });
    setIndicatorKey((k) => k + 1);
  }, [tabValues]);

  useEffect(() => {
    if (isPaused) return;
    intervalRef.current = setInterval(advanceTab, SLIDE_DURATION * 1000);
    return () => {
      if (intervalRef.current) clearInterval(intervalRef.current);
    };
  }, [activeTab, isPaused, advanceTab]);

  const handleManualSelect = (value: string) => {
    setActiveTab(value);
    setIndicatorKey((k) => k + 1);
  };

  return (
    <section
      id="hero"
      className="relative min-h-screen"
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
    >
      <Tabs value={activeTab} onValueChange={handleManualSelect}>
        <AnimatePresence initial={false}>
          {tabs.content.map(
            (content) =>
              content.value === activeTab && (
                <TabsContent
                  key={content.value}
                  value={content.value}
                  className="relative max-h-[60rem] min-h-screen overflow-visible"
                >
                  <TabContent content={content} />
                </TabsContent>
              ),
          )}
        </AnimatePresence>

        {/* Tab navigation bar */}
        <div className="absolute bottom-0 left-0 right-0 z-20 pb-8 md:pb-12 lg:pb-16">
          <TabsList className="mx-auto flex max-w-2xl justify-center">
            <div className="flex w-full items-stretch gap-0 rounded-xl bg-black/30 px-2 py-3 backdrop-blur-md sm:px-4 md:gap-1 md:px-6 md:py-4">
              {tabs.trigger.map((trigger) => {
                const isActive = activeTab === trigger.value;
                return (
                  <TabsTrigger
                    key={trigger.value}
                    value={trigger.value}
                    onClick={() => handleManualSelect(trigger.value)}
                    className="relative flex-1 border-0 bg-transparent px-3 py-3 text-center text-xs font-medium text-white/50 transition-colors duration-200 data-[state=active]:bg-transparent data-[state=active]:text-white sm:px-5 sm:text-sm md:px-6"
                  >
                    <span className="relative z-10">{trigger.text}</span>
                    {/* Progress indicator bar */}
                    <div className="absolute inset-x-2 bottom-0 h-[3px] overflow-hidden rounded-full bg-white/15 sm:inset-x-3">
                      <div
                        key={`indicator-${trigger.value}-${indicatorKey}`}
                        className="h-full rounded-full bg-white"
                        style={
                          isActive
                            ? {
                                animation: `indicatorFill ${SLIDE_DURATION}s linear forwards`,
                              }
                            : { width: "0%" }
                        }
                      />
                    </div>
                  </TabsTrigger>
                );
              })}
            </div>
          </TabsList>
        </div>
      </Tabs>

    </section>
  );
}
