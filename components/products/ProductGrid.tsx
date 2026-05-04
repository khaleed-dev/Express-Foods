import Image from "next/image";
import Link from "next/link";
import { RxChevronRight } from "react-icons/rx";
import type { Product } from "@/lib/types";

interface ProductGridProps {
  products: Product[];
}

const categoryLabels: Record<string, string> = {
  citrus: "Citrus",
  "fresh-fruits": "Fresh Fruits",
  vegetables: "Vegetables",
  "iqf-frozen": "IQF Frozen",
};

export function ProductGrid({ products }: ProductGridProps) {
  return (
    <section className="px-[5%] py-16 md:py-24 lg:py-28">
      <div className="container">
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 md:gap-8 lg:grid-cols-3 xl:grid-cols-4">
          {products.map((product) => (
            <Link
              key={product.slug}
              href={`/products/${product.slug}`}
              className="group/card flex flex-col overflow-hidden border border-border-primary bg-background transition-all duration-300 ease-out hover:-translate-y-1 hover:border-primary/60 hover:shadow-xl hover:shadow-primary/10"
            >
              <div className="relative aspect-square w-full overflow-hidden bg-neutral-lightest">
                <Image
                  src={product.image}
                  alt={product.name}
                  fill
                  className="object-contain p-4 transition-transform duration-500 ease-out group-hover/card:scale-105"
                  sizes="(max-width: 640px) 100vw, (max-width: 768px) 50vw, (max-width: 1280px) 33vw, 25vw"
                />
              </div>
              <div className="flex flex-1 flex-col p-5">
                <span className="mb-2 inline-block w-fit rounded-sm bg-background-secondary px-2 py-0.5 text-xs font-semibold text-text-primary transition-colors duration-200 group-hover/card:bg-primary group-hover/card:text-primary-foreground">
                  {categoryLabels[product.category] || product.category}
                </span>
                <h3 className="mb-1 text-lg font-bold leading-tight transition-colors duration-200 group-hover/card:text-primary">
                  {product.name}
                </h3>
                <p className="mb-4 line-clamp-2 text-sm text-text-primary/70">
                  {product.tagline}
                </p>
                {product.alsoAvailableFrozen && (
                  <p className="mb-3 text-xs font-medium text-background-alternative">
                    Also available IQF frozen
                  </p>
                )}
                <div className="mt-auto">
                  <span className="inline-flex items-center gap-1 text-sm font-semibold transition-colors duration-200 group-hover/card:text-primary">
                    <span className="relative">
                      View details
                      <span className="absolute -bottom-0.5 left-0 h-[1.5px] w-full origin-left scale-x-0 bg-current transition-transform duration-300 ease-out group-hover/card:scale-x-100" />
                    </span>
                    <RxChevronRight className="size-4 transition-transform duration-200 ease-out group-hover/card:translate-x-1" />
                  </span>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
