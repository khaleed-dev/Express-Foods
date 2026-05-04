"use client";

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbSeparator,
} from "@relume_io/relume-ui";
import { AnimatedButton } from "@/components/ui/animated-button";
import Image from "next/image";
import Link from "next/link";
import { Fragment } from "react";
import { RxPlus } from "react-icons/rx";
import type { Product } from "@/lib/types";

const categoryLabels: Record<string, string> = {
  citrus: "Citrus",
  "fresh-fruits": "Fresh Fruits",
  vegetables: "Vegetables",
  "iqf-frozen": "IQF Frozen",
};

interface ProductHeaderProps {
  product: Product;
}

export function ProductHeader({ product }: ProductHeaderProps) {
  return (
    <header className="px-[5%] py-12 md:py-16 lg:py-20">
      <div className="container">
        <div className="grid grid-cols-1 gap-y-8 md:gap-y-10 lg:grid-cols-[1fr_1.25fr] lg:gap-x-20">
          {/* Product info */}
          <div>
            <Breadcrumb className="mb-6 flex flex-wrap items-center text-sm">
              <BreadcrumbList>
                <Fragment>
                  <BreadcrumbItem>
                    <BreadcrumbLink asChild>
                      <Link href="/products">Products</Link>
                    </BreadcrumbLink>
                  </BreadcrumbItem>
                  <BreadcrumbSeparator />
                </Fragment>
                <Fragment>
                  <BreadcrumbItem>
                    <BreadcrumbLink asChild>
                      <Link href={`/products/${product.category}`}>
                        {categoryLabels[product.category]}
                      </Link>
                    </BreadcrumbLink>
                  </BreadcrumbItem>
                  <BreadcrumbSeparator />
                </Fragment>
                <Fragment>
                  <BreadcrumbItem>
                    <BreadcrumbLink>{product.name}</BreadcrumbLink>
                  </BreadcrumbItem>
                </Fragment>
              </BreadcrumbList>
            </Breadcrumb>

            <h1 className="mb-5 text-4xl font-bold leading-[1.2] md:mb-6 md:text-5xl lg:text-6xl">
              {product.name}
            </h1>

            <div className="mb-5 flex flex-col flex-wrap sm:flex-row sm:items-center md:mb-6">
              <p className="text-xl font-bold md:text-2xl">
                Contact for pricing
              </p>
              <div className="mx-4 hidden w-px self-stretch bg-background-alternative sm:block" />
              <div className="flex flex-wrap items-center gap-3">
                <p className="text-sm">Certified and traceable</p>
              </div>
            </div>

            <p className="mb-3 font-semibold text-text-primary/70">
              {product.tagline}
            </p>
            <p className="mb-5 md:mb-6">{product.description}</p>

            {product.alsoAvailableFrozen && (
              <p className="mb-5 rounded-sm bg-background-secondary px-3 py-2 text-sm font-medium text-text-primary md:mb-6">
                This product is also available as IQF frozen. Contact us for
                frozen pricing and specifications.
              </p>
            )}

            <div className="mb-8 flex flex-col gap-y-4">
              <AnimatedButton
                href={`/contact?product=${product.slug}`}
                variant="primary"
                withArrow
                className="w-full"
              >
                Request a quote
              </AnimatedButton>
              <AnimatedButton
                href="/contact"
                variant="secondary"
                className="w-full"
              >
                Contact sales
              </AnimatedButton>
            </div>
            <p className="mb-8 text-center text-xs text-text-primary/60">
              Cold chain guaranteed &middot;{" "}
              {product.certifications.slice(0, 3).join(" / ")}
            </p>

            {/* Specs accordion */}
            <Accordion type="multiple">
              <AccordionItem value="specs">
                <AccordionTrigger
                  className="py-4 font-semibold md:text-md"
                  icon={
                    <RxPlus className="size-6 shrink-0 text-text-primary transition-transform duration-300" />
                  }
                >
                  Specifications
                </AccordionTrigger>
                <AccordionContent className="md:pb-6">
                  <table className="w-full text-sm">
                    <tbody>
                      {product.specs.map((spec, i) => (
                        <tr
                          key={i}
                          className="border-b border-border-primary last:border-0"
                        >
                          <td className="py-2 pr-4 font-medium text-text-primary/70">
                            {spec.label}
                          </td>
                          <td className="py-2">{spec.value}</td>
                        </tr>
                      ))}
                      {!product.specs.some((s) => s.label === "Season") && (
                        <tr className="border-b border-border-primary last:border-0">
                          <td className="py-2 pr-4 font-medium text-text-primary/70">
                            Season
                          </td>
                          <td className="py-2">{product.season}</td>
                        </tr>
                      )}
                      {!product.specs.some((s) => s.label === "Shelf life") && (
                        <tr className="border-b border-border-primary last:border-0">
                          <td className="py-2 pr-4 font-medium text-text-primary/70">
                            Shelf Life
                          </td>
                          <td className="py-2">{product.shelfLife}</td>
                        </tr>
                      )}
                      {!product.specs.some((s) => s.label === "Storage temp") && (
                        <tr className="border-b border-border-primary last:border-0">
                          <td className="py-2 pr-4 font-medium text-text-primary/70">
                            Storage Temperature
                          </td>
                          <td className="py-2">{product.storageTemp}</td>
                        </tr>
                      )}
                    </tbody>
                  </table>
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="packaging">
                <AccordionTrigger
                  className="py-4 font-semibold md:text-md"
                  icon={
                    <RxPlus className="size-6 shrink-0 text-text-primary transition-transform duration-300" />
                  }
                >
                  Packaging
                </AccordionTrigger>
                <AccordionContent className="md:pb-6">
                  <ul className="list-inside list-disc space-y-1 text-sm">
                    {product.packagingOptions.map((opt, i) => (
                      <li key={i}>{opt}</li>
                    ))}
                  </ul>
                  <p className="mt-3 text-sm text-text-primary/70">
                    Pack types: {product.packTypes.join(", ")}
                  </p>
                  {product.calibers && product.calibers.length > 0 && (
                    <p className="mt-2 text-sm text-text-primary/70">
                      Calibers: {product.calibers.join(", ")}
                    </p>
                  )}
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="certifications">
                <AccordionTrigger
                  className="py-4 font-semibold md:text-md"
                  icon={
                    <RxPlus className="size-6 shrink-0 text-text-primary transition-transform duration-300" />
                  }
                >
                  Certifications &amp; Markets
                </AccordionTrigger>
                <AccordionContent className="md:pb-6">
                  <div className="space-y-4 text-sm">
                    <div>
                      <p className="mb-2 font-medium text-text-primary/70">
                        Certifications
                      </p>
                      <div className="flex flex-wrap gap-2">
                        {product.certifications.map((cert, i) => (
                          <span
                            key={i}
                            className="inline-block rounded-full bg-background-secondary px-3 py-1 text-xs font-medium"
                          >
                            {cert}
                          </span>
                        ))}
                      </div>
                    </div>
                    <div>
                      <p className="font-medium text-text-primary/70">
                        Target Markets
                      </p>
                      <p>{product.targetMarkets.join(", ")}</p>
                    </div>
                  </div>
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          </div>

          {/* Product image */}
          <div className="order-first lg:order-none">
            <div className="relative aspect-[5/4] w-full overflow-hidden bg-neutral-lightest">
              <Image
                src={product.image}
                alt={product.name}
                fill
                className="object-contain p-8"
                priority
                sizes="(max-width: 1024px) 100vw, 55vw"
              />
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}
