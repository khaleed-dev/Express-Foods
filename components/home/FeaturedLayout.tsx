"use client";

import { Button } from "@relume_io/relume-ui";
import { AnimatePresence, motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { RxChevronRight } from "react-icons/rx";

interface TabItem {
  heading: string;
  description: string;
  image: { src: string; alt: string };
}

const tabItems: TabItem[] = [
  {
    heading: "Year-round harvest",
    description:
      "No seasonal gaps. The Nile Delta grows what the world needs, when it needs it.",
    image: {
      src: "/images/sections/Egypt's climate works for you section/Year-round harvest.webp",
      alt: "Year-round harvest operations in the Nile Delta",
    },
  },
  {
    heading: "Three to five day delivery",
    description:
      "Strategic proximity to Europe means fresher produce on your shelves, faster margins in your business.",
    image: {
      src: "/images/sections/Egypt's climate works for you section/Three to five day delivery.webp",
      alt: "Express shipping and logistics for fast delivery",
    },
  },
  {
    heading: "Dual fresh and frozen",
    description:
      "One partner for both product lines. Consistent quality, simplified procurement.",
    image: {
      src: "/images/sections/Egypt's climate works for you section/Dual fresh and frozen.webp",
      alt: "Fresh and IQF frozen processing facilities",
    },
  },
];

function useRelume() {
  const [activeTab, setActiveTab] = useState(0);

  const setActiveTabSetter = (index: number) => () => setActiveTab(index);

  const getActiveTabButtonStyles = (index: number): string => {
    return `cursor-pointer border-b border-border-primary py-4 ${
      activeTab === index ? "opacity-100" : "opacity-25"
    }`;
  };

  const getActiveTabButtonContentStyles = (index: number) => ({
    height: activeTab === index ? "auto" : 0,
    opacity: activeTab === index ? 1 : 0,
  });

  return {
    setActiveTabSetter,
    getActiveTabButtonStyles,
    getActiveTabButtonContentStyles,
    activeTab,
  };
}

function TabItemComponent({
  tabItem,
  index,
  activeTab,
}: {
  tabItem: TabItem;
  index: number;
  activeTab: number;
}) {
  if (index !== activeTab) {
    return null;
  }
  return (
    <motion.div
      initial={{ opacity: 0 }}
      exit={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.2 }}
      className="relative flex size-full items-center justify-center"
    >
      <div className="relative aspect-square w-full md:aspect-4/3">
        <Image
          src={tabItem.image.src}
          alt={tabItem.image.alt}
          fill
          className="object-cover"
          sizes="(max-width: 768px) 100vw, 50vw"
        />
      </div>
    </motion.div>
  );
}

export function FeaturedLayout() {
  const useActive = useRelume();

  return (
    <section id="featured" className="px-[5%] py-16 md:py-24 lg:py-28">
      <div className="container">
        <div className="relative flex flex-col md:flex-row">
          <div className="w-full md:w-1/2 md:pr-6 lg:pr-10">
            <div className="mb-8 md:hidden">
              <p className="mb-3 font-semibold md:mb-4">Origin</p>
              <h2 className="mb-5 text-5xl font-bold md:mb-6 md:text-4xl lg:text-5xl">
                Egypt&apos;s climate works for you
              </h2>
              <p className="md:text-md">
                Year-round harvest from the Nile Delta means consistent supply
                when you need it. Three to five days to European ports gives you
                fresher product, faster.
              </p>
            </div>
            <AnimatePresence initial={false}>
              {tabItems.map((item, index) => (
                <TabItemComponent
                  key={index}
                  tabItem={item}
                  index={index}
                  activeTab={useActive.activeTab}
                />
              ))}
            </AnimatePresence>
          </div>
          <div className="w-full md:w-1/2 md:pl-6 lg:pl-10">
            <div className="mb-8 hidden md:block">
              <p className="mb-3 font-semibold md:mb-4">Origin</p>
              <h2 className="mb-5 text-5xl font-bold md:mb-6 md:text-4xl lg:text-5xl">
                Egypt&apos;s climate works for you
              </h2>
              <p className="md:text-md">
                Year-round harvest from the Nile Delta means consistent supply
                when you need it. Three to five days to European ports gives you
                fresher product, faster.
              </p>
            </div>
            <div className="static flex flex-col flex-wrap justify-stretch md:block">
              <div className="relative grid auto-cols-fr grid-cols-1 grid-rows-[auto_auto] items-start md:mb-0 md:items-stretch">
                {tabItems.map((item, index) => (
                  <div
                    key={index}
                    onClick={useActive.setActiveTabSetter(index)}
                    className={useActive.getActiveTabButtonStyles(index)}
                  >
                    <h3 className="text-xl font-bold md:text-2xl">
                      {item.heading}
                    </h3>
                    <motion.div
                      initial={false}
                      animate={useActive.getActiveTabButtonContentStyles(index)}
                      transition={{ duration: 0.3, ease: "easeInOut" }}
                      className="overflow-hidden"
                    >
                      <p className="mt-2">{item.description}</p>
                    </motion.div>
                  </div>
                ))}
              </div>
            </div>
            <div className="mt-6 flex flex-wrap items-center gap-4 md:mt-8">
              <Button asChild variant="secondary">
                <Link href="/about">Learn more</Link>
              </Button>
              <Button
                asChild
                variant="link"
                size="link"
                iconRight={<RxChevronRight />}
              >
                <Link href="/contact?intent=quote">Get a quote</Link>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
