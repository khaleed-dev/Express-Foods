"use client";

import { Button, useMediaQuery } from "@relume_io/relume-ui";
import { motion, AnimatePresence } from "framer-motion";
import React, { useState } from "react";
import { RxChevronDown, RxChevronRight } from "react-icons/rx";
import Link from "next/link";
import Image from "next/image";

interface NavbarHook {
  toggleMobileMenu: () => void;
  openOnDesktopDropdownMenu: () => void;
  closeOnDesktopDropdownMenu: () => void;
  openOnMobileDropdownMenu: () => void;
  closeMobileMenu: () => void;
  isMobileMenuOpen: boolean;
  isDropdownOpen: boolean;
  animateMobileMenu: "open" | "close";
  animateMobileMenuButtonSpan: ["open", "rotatePhase"] | "closed";
  animateDropdownMenu: "open" | "close";
  animateDropdownMenuIcon: "rotated" | "initial";
}

const useNavbar = (): NavbarHook => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const isMobile = useMediaQuery("(max-width: 991px)");

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen((prev) => !prev);
    if (isMobileMenuOpen) {
      setIsDropdownOpen(false);
    }
  };
  const closeMobileMenu = () => {
    setIsMobileMenuOpen(false);
    setIsDropdownOpen(false);
  };
  const openOnMobileDropdownMenu = () => {
    setIsDropdownOpen((prev) => !prev);
  };
  const openOnDesktopDropdownMenu = () => {
    if (!isMobile) setIsDropdownOpen(true);
  };
  const closeOnDesktopDropdownMenu = () => {
    if (!isMobile) setIsDropdownOpen(false);
  };

  const animateMobileMenu = isMobileMenuOpen ? "open" : "close";
  const animateMobileMenuButtonSpan: ["open", "rotatePhase"] | "closed" =
    isMobileMenuOpen ? ["open", "rotatePhase"] : "closed";
  const animateDropdownMenu = isDropdownOpen ? "open" : "close";
  const animateDropdownMenuIcon = isDropdownOpen ? "rotated" : "initial";

  return {
    toggleMobileMenu,
    openOnDesktopDropdownMenu,
    closeOnDesktopDropdownMenu,
    openOnMobileDropdownMenu,
    closeMobileMenu,
    isMobileMenuOpen,
    isDropdownOpen,
    animateMobileMenu,
    animateMobileMenuButtonSpan,
    animateDropdownMenu,
    animateDropdownMenuIcon,
  } as const;
};

function DropdownContent({ onLinkClick }: { onLinkClick: () => void }) {
  return (
    <div className="mx-auto flex size-full max-w-full items-center justify-between">
      <div className="w-full lg:flex">
        <div className="grid flex-1 gap-x-8 gap-y-6 py-4 pr-8 md:grid-cols-2 md:px-0 md:py-8 lg:py-8 lg:pr-8">
          {/* Sourcing Column */}
          <div className="grid auto-rows-max grid-cols-1 grid-rows-[max-content] gap-y-2 md:gap-y-4">
            <h4 className="text-sm font-semibold leading-[1.3]">
              Sourcing
            </h4>
            <Link
              href="/products/fresh-fruits"
              className="grid w-full grid-cols-[max-content_1fr] items-start gap-x-3 py-2"
              onClick={onLinkClick}
            >
              <div className="flex size-6 flex-col items-center justify-center text-lg">
                <span aria-hidden="true">🍊</span>
              </div>
              <div className="flex flex-col items-start justify-center">
                <h5 className="font-semibold">Fresh Fruits</h5>
                <p className="hidden text-sm md:block">
                  Citrus, strawberries, mangoes, and more from Egypt
                </p>
              </div>
            </Link>
            <Link
              href="/products/citrus"
              className="grid w-full grid-cols-[max-content_1fr] items-start gap-x-3 py-2"
              onClick={onLinkClick}
            >
              <div className="flex size-6 flex-col items-center justify-center text-lg">
                <span aria-hidden="true">🍋</span>
              </div>
              <div className="flex flex-col items-start justify-center">
                <h5 className="font-semibold">Citrus</h5>
                <p className="hidden text-sm md:block">
                  Oranges, mandarins, and lemons year-round
                </p>
              </div>
            </Link>
            <Link
              href="/products/vegetables"
              className="grid w-full grid-cols-[max-content_1fr] items-start gap-x-3 py-2"
              onClick={onLinkClick}
            >
              <div className="flex size-6 flex-col items-center justify-center text-lg">
                <span aria-hidden="true">🥬</span>
              </div>
              <div className="flex flex-col items-start justify-center">
                <h5 className="font-semibold">Vegetables</h5>
                <p className="hidden text-sm md:block">
                  Potatoes, onions, peppers, and certified greens
                </p>
              </div>
            </Link>
            <Link
              href="/products/iqf-frozen"
              className="grid w-full grid-cols-[max-content_1fr] items-start gap-x-3 py-2"
              onClick={onLinkClick}
            >
              <div className="flex size-6 flex-col items-center justify-center text-lg">
                <span aria-hidden="true">❄️</span>
              </div>
              <div className="flex flex-col items-start justify-center">
                <h5 className="font-semibold">IQF Frozen</h5>
                <p className="hidden text-sm md:block">
                  Premium frozen okra, molokhia, and berries
                </p>
              </div>
            </Link>
          </div>

          {/* Learn Column */}
          <div className="grid auto-rows-max grid-cols-1 grid-rows-[max-content] gap-y-2 md:gap-y-4">
            <h4 className="text-sm font-semibold leading-[1.3]">
              Learn
            </h4>
            <Link
              href="/about"
              className="grid w-full grid-cols-[max-content_1fr] items-start gap-x-3 py-2"
              onClick={onLinkClick}
            >
              <div className="flex size-6 flex-col items-center justify-center text-lg">
                <span aria-hidden="true">🌍</span>
              </div>
              <div className="flex flex-col items-start justify-center">
                <h5 className="font-semibold">Why Egypt</h5>
                <p className="hidden text-sm md:block">
                  Strategic origin, year-round harvest, fast transit
                </p>
              </div>
            </Link>
            <Link
              href="/about"
              className="grid w-full grid-cols-[max-content_1fr] items-start gap-x-3 py-2"
              onClick={onLinkClick}
            >
              <div className="flex size-6 flex-col items-center justify-center text-lg">
                <span aria-hidden="true">📦</span>
              </div>
              <div className="flex flex-col items-start justify-center">
                <h5 className="font-semibold">Export Process</h5>
                <p className="hidden text-sm md:block">
                  Farm to port, certified cold chain control
                </p>
              </div>
            </Link>
            <Link
              href="/about"
              className="grid w-full grid-cols-[max-content_1fr] items-start gap-x-3 py-2"
              onClick={onLinkClick}
            >
              <div className="flex size-6 flex-col items-center justify-center text-lg">
                <span aria-hidden="true">🗺️</span>
              </div>
              <div className="flex flex-col items-start justify-center">
                <h5 className="font-semibold">Markets We Serve</h5>
                <p className="hidden text-sm md:block">
                  Europe, Gulf, Africa, Asia, and North America
                </p>
              </div>
            </Link>
            <Link
              href="/about"
              className="grid w-full grid-cols-[max-content_1fr] items-start gap-x-3 py-2"
              onClick={onLinkClick}
            >
              <div className="flex size-6 flex-col items-center justify-center text-lg">
                <span aria-hidden="true">🌱</span>
              </div>
              <div className="flex flex-col items-start justify-center">
                <h5 className="font-semibold">Sustainability</h5>
                <p className="hidden text-sm md:block">
                  Ethical sourcing and environmental stewardship
                </p>
              </div>
            </Link>
          </div>
        </div>

        {/* Latest Insights Sidebar */}
        <div className="max-w-none relative flex flex-1 p-6 md:py-8 md:pl-8 md:pr-0 lg:max-w-md">
          <div className="relative z-10 grid w-full auto-cols-fr auto-rows-max grid-cols-1 grid-rows-[max-content_max-content] gap-4">
            <h4 className="text-sm font-semibold leading-[1.3]">
              Latest insights
            </h4>
            <div className="grid auto-cols-fr grid-cols-1 grid-rows-[auto_auto] items-start gap-y-2 lg:grid-rows-[auto]">
              <Link
                href="/blog"
                className="flex auto-cols-fr grid-cols-[0.6fr_1fr] flex-col gap-x-6 py-2 md:grid"
                onClick={onLinkClick}
              >
                <div className="relative w-full pt-[66.66%]">
                  <Image
                    src="/images/sections/home-slider-01.webp"
                    alt="Cold chain logistics"
                    className="absolute inset-0 size-full object-cover"
                    fill
                    sizes="(max-width: 768px) 100vw, 300px"
                  />
                </div>
                <div className="rt-4 mt-4 flex flex-col justify-start md:mt-0">
                  <h5 className="mb-1 font-semibold">
                    Cold chain logistics
                  </h5>
                  <p className="text-sm">
                    How temperature control ensures quality
                  </p>
                  <div className="mt-1.5">
                    <Button
                      title="Read more"
                      variant="link"
                      size="link"
                      className="text-sm underline"
                    >
                      Read more
                    </Button>
                  </div>
                </div>
              </Link>
              <Link
                href="/blog"
                className="flex auto-cols-fr grid-cols-[0.6fr_1fr] flex-col gap-x-6 py-2 md:grid"
                onClick={onLinkClick}
              >
                <div className="relative w-full pt-[66.66%]">
                  <Image
                    src="/images/sections/home-slider-02.webp"
                    alt="Egyptian agriculture"
                    className="absolute inset-0 size-full object-cover"
                    fill
                    sizes="(max-width: 768px) 100vw, 300px"
                  />
                </div>
                <div className="rt-4 mt-4 flex flex-col justify-start md:mt-0">
                  <h5 className="mb-1 font-semibold">
                    Egyptian agriculture
                  </h5>
                  <p className="text-sm">
                    Why the Nile Delta leads global production
                  </p>
                  <div className="mt-1.5">
                    <Button
                      title="Read more"
                      variant="link"
                      size="link"
                      className="text-sm underline"
                    >
                      Read more
                    </Button>
                  </div>
                </div>
              </Link>
            </div>
            <div className="flex items-center">
              <Link href="/blog" onClick={onLinkClick}>
                <Button
                  title="View all articles"
                  variant="link"
                  size="link"
                  iconRight={<RxChevronRight />}
                >
                  View all articles
                </Button>
              </Link>
            </div>
          </div>
          <div className="absolute bottom-0 left-0 right-auto top-0 min-w-full bg-background-secondary lg:min-w-[100vw]" />
        </div>
      </div>
    </div>
  );
}

export function Navbar() {
  const nav = useNavbar();

  return (
    <section
      id="navbar"
      className="relative z-50 flex w-full items-center justify-between border-b border-border-primary bg-background-primary lg:min-h-18 lg:px-[5%]"
    >
      <div className="size-full lg:flex lg:items-center lg:justify-between overflow-hidden">
        <div className="lg:flex lg:items-center lg:min-w-0 lg:flex-1">
          <div className="flex min-h-16 items-center justify-between px-[5%] md:min-h-18 lg:min-h-full lg:px-0">
            <Link href="/">
              <Image
                src="/images/logos/logo-dark.svg"
                alt="Express Foods"
                width={140}
                height={40}
              />
            </Link>
            <button
              className="-mr-2 flex size-12 flex-col items-center justify-center lg:hidden"
              onClick={nav.toggleMobileMenu}
              aria-label={nav.isMobileMenuOpen ? "Close menu" : "Open menu"}
              aria-expanded={nav.isMobileMenuOpen}
            >
              <motion.span
                className="my-[3px] h-0.5 w-6 bg-black"
                animate={nav.animateMobileMenuButtonSpan}
                variants={{
                  open: { translateY: 8, transition: { delay: 0.1 } },
                  rotatePhase: { rotate: -45, transition: { delay: 0.2 } },
                  closed: {
                    translateY: 0,
                    rotate: 0,
                    transition: { duration: 0.2 },
                  },
                }}
              />
              <motion.span
                className="my-[3px] h-0.5 w-6 bg-black"
                animate={nav.animateMobileMenu}
                variants={{
                  open: { width: 0, transition: { duration: 0.1 } },
                  close: {
                    width: "1.5rem",
                    transition: { delay: 0.3, duration: 0.2 },
                  },
                }}
              />
              <motion.span
                className="my-[3px] h-0.5 w-6 bg-black"
                animate={nav.animateMobileMenuButtonSpan}
                variants={{
                  open: { translateY: -8, transition: { delay: 0.1 } },
                  rotatePhase: { rotate: 45, transition: { delay: 0.2 } },
                  closed: {
                    translateY: 0,
                    rotate: 0,
                    transition: { duration: 0.2 },
                  },
                }}
              />
            </button>
          </div>

          {/* Desktop Nav — always visible, no motion */}
          <div className="hidden lg:ml-6 lg:flex lg:items-center">
            <Link
              href="/about"
              className="block px-3 py-6 text-base"
            >
              About us
            </Link>
            <Link
              href="/products"
              className="block px-3 py-6 text-base"
            >
              Products
            </Link>
            <Link
              href="/blog"
              className="block px-3 py-6 text-base"
            >
              Blog
            </Link>
            <div
              onMouseEnter={nav.openOnDesktopDropdownMenu}
              onMouseLeave={nav.closeOnDesktopDropdownMenu}
            >
              <button
                className="flex w-auto flex-none items-center justify-start gap-x-2 px-3 py-6 text-center text-base"
              >
                <span>Resources</span>
                <motion.span
                  variants={{
                    rotated: { rotate: 180 },
                    initial: { rotate: 0 },
                  }}
                  animate={nav.animateDropdownMenuIcon}
                  transition={{ duration: 0.3 }}
                >
                  <RxChevronDown />
                </motion.span>
              </button>
              <AnimatePresence>
                {nav.isDropdownOpen && (
                  <motion.div
                    initial={{ visibility: "hidden", opacity: 0, height: 0 }}
                    animate={{ visibility: "visible", opacity: 1, height: "auto" }}
                    exit={{ visibility: "hidden", opacity: 0, height: 0 }}
                    transition={{ duration: 0.3 }}
                    className="absolute bottom-auto left-0 top-full z-50 w-[100vw] overflow-hidden border-b border-border-primary bg-background-primary px-[5%]"
                  >
                    <DropdownContent onLinkClick={nav.closeMobileMenu} />
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          </div>

          {/* Mobile Nav — animated with framer-motion */}
          <motion.div
            variants={{
              open: {
                height: "100dvh",
                visibility: "visible" as const,
              },
              close: {
                height: 0,
                visibility: "hidden" as const,
                transition: {
                  height: { duration: 0.4 },
                  visibility: { delay: 0.4 },
                },
              },
            }}
            initial="close"
            exit="close"
            animate={nav.animateMobileMenu}
            transition={{ duration: 0.4 }}
            className="z-50 overflow-auto bg-background-primary px-[5%] lg:hidden"
          >
            <Link
              href="/about"
              className="block py-3 text-md first:pt-7"
              onClick={nav.closeMobileMenu}
            >
              About us
            </Link>
            <Link
              href="/products"
              className="block py-3 text-md"
              onClick={nav.closeMobileMenu}
            >
              Products
            </Link>
            <Link
              href="/blog"
              className="block py-3 text-md"
              onClick={nav.closeMobileMenu}
            >
              Blog
            </Link>
            <div>
              <button
                className="flex w-full items-center justify-between gap-x-2 py-3 text-center text-md"
                onClick={nav.openOnMobileDropdownMenu}
              >
                <span>Resources</span>
                <motion.span
                  variants={{
                    rotated: { rotate: 180 },
                    initial: { rotate: 0 },
                  }}
                  animate={nav.animateDropdownMenuIcon}
                  transition={{ duration: 0.3 }}
                >
                  <RxChevronDown />
                </motion.span>
              </button>
              <AnimatePresence>
                <motion.div
                  variants={{
                    open: {
                      visibility: "visible" as const,
                      opacity: 1,
                      height: "auto",
                    },
                    close: {
                      visibility: "hidden" as const,
                      opacity: 0,
                      height: 0,
                    },
                  }}
                  initial="close"
                  exit="close"
                  animate={nav.animateDropdownMenu}
                  transition={{ duration: 0.3 }}
                  className={`overflow-hidden bg-background-primary ${
                    !nav.isDropdownOpen ? "pointer-events-none" : ""
                  }`}
                >
                  <DropdownContent onLinkClick={nav.closeMobileMenu} />
                </motion.div>
              </AnimatePresence>
            </div>

            {/* Mobile CTA Buttons */}
            <div className="mt-6 flex w-full flex-col gap-y-4 pb-24">
              <Link href="/contact" className="w-full" onClick={nav.closeMobileMenu}>
                <Button
                  className="w-full"
                  title="Contact"
                  variant="secondary"
                  size="sm"
                >
                  Contact
                </Button>
              </Link>
              <Link href="/contact?intent=quote" className="w-full" onClick={nav.closeMobileMenu}>
                <Button className="w-full" title="Get a Quote" size="sm">
                  Get a Quote
                </Button>
              </Link>
            </div>
          </motion.div>
        </div>

        {/* Desktop CTA Buttons */}
        <div className="hidden lg:flex lg:flex-shrink-0 lg:gap-3">
          <Link href="/contact">
            <Button title="Contact" variant="secondary" size="sm" className="lg:text-sm">
              Contact
            </Button>
          </Link>
          <Link href="/contact?intent=quote">
            <Button title="Get a Quote" size="sm" className="lg:text-sm">
              Get a Quote
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
}
