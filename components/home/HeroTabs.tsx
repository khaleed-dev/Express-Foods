"use client";

import { useState } from "react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@relume_io/relume-ui";
import { AnimatePresence, motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";

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

const tabs: { trigger: TabTrigger[]; content: TabContentData[] } = {
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
          className="relative z-10 mx-auto max-w-lg text-center"
          initial={{ y: "20%", opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: "-20%", opacity: 0 }}
          transition={{ duration: 0.4, ease: "easeOut" }}
        >
          <h1 className="mb-5 text-6xl font-bold text-text-alternative md:mb-6 md:text-9xl lg:text-10xl">
            {content.heading}
          </h1>
          <p className="text-text-alternative md:text-md">{content.description}</p>
          <div className="mt-6 flex items-center justify-center gap-x-4 md:mt-8">
            {content.buttons.map((button, index) => (
              <Link
                key={index}
                href={button.href}
                className={
                  button.variant === "secondary-alt"
                    ? "inline-flex items-center justify-center border border-white px-6 py-3 text-sm font-semibold text-white transition hover:bg-white hover:text-black"
                    : "inline-flex items-center justify-center bg-white px-6 py-3 text-sm font-semibold text-black transition hover:bg-white/90"
                }
              >
                {button.title}
              </Link>
            ))}
          </div>
        </motion.div>
      </div>
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 z-10 bg-black/50" />
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

export function HeroTabs() {
  const [activeTab, setActiveTab] = useState("tab-one");

  return (
    <section id="hero" className="relative min-h-screen">
      <Tabs value={activeTab} onValueChange={setActiveTab}>
        <AnimatePresence initial={false}>
          {tabs.content.map(
            (content, index) =>
              content.value === activeTab && (
                <TabsContent
                  key={index}
                  value={content.value}
                  className="relative max-h-[60rem] min-h-screen overflow-visible"
                >
                  <TabContent content={content} />
                </TabsContent>
              ),
          )}
        </AnimatePresence>
        <TabsList className="absolute bottom-12 left-0 right-0 top-auto z-20 mx-auto flex justify-center gap-4 px-[5vw] md:bottom-16 lg:bottom-20 lg:max-w-xl">
          {tabs.trigger.map((trigger, index) => (
            <TabsTrigger
              key={index}
              value={trigger.value}
              onClick={() => setActiveTab(trigger.value)}
              className="relative flex-1 whitespace-normal border-0 bg-transparent px-4 py-4 text-center text-neutral-light duration-0 data-[state=active]:bg-transparent data-[state=active]:text-neutral-white sm:px-8 md:min-w-32"
            >
              <span>{trigger.text}</span>
              <div className="absolute inset-0 top-auto h-1 w-full bg-white/20">
                <motion.div
                  className="h-full bg-white"
                  initial={{ width: "0%" }}
                  animate={{ width: activeTab === trigger.value ? "100%" : "0%" }}
                  transition={{
                    duration: activeTab === trigger.value ? 1.5 : 0.3,
                    ...(activeTab === trigger.value
                      ? {
                          type: "spring",
                          stiffness: 25,
                          damping: 30,
                        }
                      : { ease: "easeInOut" }),
                  }}
                />
              </div>
            </TabsTrigger>
          ))}
        </TabsList>
      </Tabs>
    </section>
  );
}
