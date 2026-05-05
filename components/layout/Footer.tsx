"use client";

import React from "react";
import { BiLogoLinkedinSquare } from "react-icons/bi";
import { FaWhatsapp } from "react-icons/fa";
import Link from "next/link";
import Image from "next/image";
import { company } from "@/lib/data/company";

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
                  alt={company.name}
                  width={140}
                  height={40}
                  className="inline-block"
                />
              </Link>
            </div>
            <div className="mb-6 md:mb-8">
              <p className="mb-1 text-sm font-semibold">Address</p>
              <p className="mb-5 text-sm md:mb-6">{company.address.full}</p>
              <p className="mb-1 text-sm font-semibold">Contact</p>
              <a
                href={company.phone.tel}
                className="block text-sm underline decoration-black underline-offset-1"
              >
                {company.phone.display}
              </a>
              <a
                href={company.phone.whatsapp}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-1 inline-flex items-center gap-1.5 text-sm underline decoration-black underline-offset-1"
              >
                <FaWhatsapp className="size-4" />
                WhatsApp
              </a>
              <a
                href={`mailto:${company.publicEmail}`}
                className="mt-1 block text-sm underline decoration-black underline-offset-1"
              >
                {company.publicEmail}
              </a>
            </div>
            <div className="grid grid-flow-col grid-cols-[max-content] items-start justify-start gap-x-3">
              <a
                href={company.socials.linkedin}
                aria-label="LinkedIn"
                rel="noopener noreferrer"
                target="_blank"
              >
                <BiLogoLinkedinSquare className="size-6" />
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
        <div className="flex flex-col gap-3 pb-4 pt-6 text-sm md:pb-0 md:pt-8">
          <div className="flex flex-col-reverse items-start justify-between gap-3 md:flex-row md:items-center">
            <p className="mt-2 md:mt-0">
              &copy; 2026 {company.name}. All rights reserved.
            </p>
            <ul className="grid grid-flow-row grid-cols-[max-content] gap-y-3 text-sm md:grid-flow-col md:gap-x-6 md:gap-y-0">
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
          <p className="text-xs text-neutral-light">
            Tax registration: {company.legal.taxRegistration}
            <span className="mx-2">&middot;</span>
            Established {company.legal.establishedDate}
          </p>
        </div>
      </div>
    </footer>
  );
}
