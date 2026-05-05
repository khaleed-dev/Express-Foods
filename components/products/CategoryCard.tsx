import Image from "next/image";
import Link from "next/link";
import { RxChevronRight } from "react-icons/rx";
import type { Category } from "@/lib/types";

interface CategoryCardProps {
  category: Category;
}

export function CategoryCard({ category }: CategoryCardProps) {
  const productCount = category.productCount ?? 0;
  const typeLabel = category.slug === "iqf-frozen" ? "Frozen" : "Fresh";

  return (
    <Link
      href={`/products/${category.slug}`}
      className="group/card flex flex-col overflow-hidden border border-border-primary bg-background transition-all duration-300 ease-out hover:-translate-y-1 hover:border-primary/60 hover:shadow-2xl hover:shadow-primary/10"
    >
      <div className="relative aspect-[4/3] w-full overflow-hidden">
        <Image
          src={category.heroImage}
          alt={category.name}
          fill
          className="object-cover transition-transform duration-700 ease-out group-hover/card:scale-105"
          sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
        />
        <div className="absolute inset-0 bg-foreground/0 transition-colors duration-300 group-hover/card:bg-foreground/5" />
      </div>
      <div className="flex flex-1 flex-col justify-center p-6">
        <div>
          <p className="mb-2 text-sm font-semibold text-primary/80">
            {typeLabel} &middot; {productCount} products
          </p>
          <h3 className="mb-2 text-lg font-bold leading-[1.4] transition-colors duration-200 group-hover/card:text-primary md:text-2xl">
            {category.name}
          </h3>
          <p className="text-sm text-text-primary/80 md:text-base">
            {category.description}
          </p>
        </div>
        <div className="mt-5 md:mt-6">
          <span className="inline-flex items-center gap-1 text-sm font-semibold transition-colors duration-200 group-hover/card:text-primary">
            <span className="relative">
              Explore
              <span className="absolute -bottom-0.5 left-0 h-[1.5px] w-full origin-left scale-x-0 bg-current transition-transform duration-300 ease-out group-hover/card:scale-x-100" />
            </span>
            <RxChevronRight className="size-4 transition-transform duration-200 ease-out group-hover/card:translate-x-1" />
          </span>
        </div>
      </div>
    </Link>
  );
}
