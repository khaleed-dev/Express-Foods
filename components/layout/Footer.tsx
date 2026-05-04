"use client";

import React from "react";
import {
  BiLogoFacebookCircle,
  BiLogoInstagram,
  BiLogoLinkedinSquare,
  BiLogoYoutube,
} from "react-icons/bi";
import { FaXTwitter } from "react-icons/fa6";
import Link from "next/link";
import Image from "next/image";

export function Footer() {
  return (
    <footer id="footer" className="px-[5%] py-12 md:py-18 lg:py-20">
      <div className="container">
        <div className="grid grid-cols-1 gap-x-[4vw] gap-y-12 pb-12 md:gap-y-16 md:pb-18 lg:grid-cols-[1fr_0.5fr] lg:gap-y-4 lg:pb-20">
          <div>
            <div className="mb-6 md:mb-8">
              <Link href="/">
                <Image
                  src="/images/logos/logo-dark.svg"
                  alt="Express Foods"
                  width={140}
                  height={40}
                  className="inline-block"
                />
              </Link>
            </div>
            <div className="mb-6 md:mb-8">
              <p className="mb-1 text-sm font-semibold">Cairo</p>
              <p className="mb-5 text-sm md:mb-6">
                Nile Delta Agricultural Zone, Egypt
              </p>
              <p className="mb-1 text-sm font-semibold">Contact</p>
              <a
                href="tel:+20222456789"
                className="block text-sm underline decoration-black underline-offset-1"
              >
                +20 2 2345 6789
              </a>
              <a
                href="mailto:info@expressfoods.com"
                className="block text-sm underline decoration-black underline-offset-1"
              >
                info@expressfoods.com
              </a>
            </div>
            <div className="grid grid-flow-col grid-cols-[max-content] items-start justify-start gap-x-3">
              <a href="#" aria-label="Facebook" rel="noopener noreferrer" target="_blank">
                <BiLogoFacebookCircle className="size-6" />
              </a>
              <a href="#" aria-label="Instagram" rel="noopener noreferrer" target="_blank">
                <BiLogoInstagram className="size-6" />
              </a>
              <a href="#" aria-label="X (Twitter)" rel="noopener noreferrer" target="_blank">
                <FaXTwitter className="size-6 p-0.5" />
              </a>
              <a href="#" aria-label="LinkedIn" rel="noopener noreferrer" target="_blank">
                <BiLogoLinkedinSquare className="size-6" />
              </a>
              <a href="#" aria-label="YouTube" rel="noopener noreferrer" target="_blank">
                <BiLogoYoutube className="size-6" />
              </a>
            </div>
          </div>
          <div className="grid grid-cols-1 items-start gap-x-6 gap-y-10 md:grid-cols-2 md:gap-x-8 md:gap-y-4">
            <ul>
              <li className="py-2 text-sm font-semibold">
                <Link href="/about">About us</Link>
              </li>
              <li className="py-2 text-sm font-semibold">
                <Link href="/products">Products</Link>
              </li>
              <li className="py-2 text-sm font-semibold">
                <Link href="/about">Export process</Link>
              </li>
              <li className="py-2 text-sm font-semibold">
                <Link href="/about">Why Egypt</Link>
              </li>
            </ul>
            <ul>
              <li className="py-2 text-sm font-semibold">
                <Link href="/about">Markets served</Link>
              </li>
              <li className="py-2 text-sm font-semibold">
                <Link href="/about">Sustainability</Link>
              </li>
              <li className="py-2 text-sm font-semibold">
                <Link href="/blog">News</Link>
              </li>
              <li className="py-2 text-sm font-semibold">
                <Link href="/contact">Contact</Link>
              </li>
            </ul>
          </div>
        </div>
        <div className="h-px w-full bg-black" />
        <div className="flex flex-col-reverse items-start justify-between pb-4 pt-6 text-sm md:flex-row md:items-center md:pb-0 md:pt-8">
          <p className="mt-8 md:mt-0">
            &copy; 2026 Express Foods. All rights reserved.
          </p>
          <ul className="grid grid-flow-row grid-cols-[max-content] justify-center gap-y-4 text-sm md:grid-flow-col md:gap-x-6 md:gap-y-0">
            <li className="underline">
              <a href="#">Privacy policy</a>
            </li>
            <li className="underline">
              <a href="#">Terms of service</a>
            </li>
            <li className="underline">
              <a href="#">Cookie settings</a>
            </li>
          </ul>
        </div>
      </div>
    </footer>
  );
}
