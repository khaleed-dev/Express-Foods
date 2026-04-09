import Image from "next/image";
import Link from "next/link";
import { RxChevronRight } from "react-icons/rx";
import type { Category } from "@/lib/types";
import { getProductsByCategory } from "@/lib/data/products";

interface CategoryCardProps {
  category: Category;
}

export function CategoryCard({ category }: CategoryCardProps) {
  const productCount = getProductsByCategory(category.slug).length;
  const typeLabel = category.slug === "iqf-frozen" ? "Frozen" : "Fresh";

  return (
    <Link
      href={`/products/${category.slug}`}
      className="group flex flex-col overflow-hidden border border-border-primary transition-shadow hover:shadow-lg"
    >
      <div className="relative aspect-[4/3] w-full overflow-hidden">
        <Image
          src={category.heroImage}
          alt={category.name}
          fill
          className="object-cover transition-transform duration-500 group-hover:scale-105"
          sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
        />
      </div>
      <div className="flex flex-1 flex-col justify-center p-6">
        <div>
          <p className="mb-2 text-sm font-semibold text-text-primary">
            {typeLabel} &middot; {productCount} products
          </p>
          <h3 className="mb-2 text-lg font-bold leading-[1.4] md:text-2xl">
            {category.name}
          </h3>
          <p className="text-sm text-text-primary/80 md:text-base">
            {category.description}
          </p>
        </div>
        <div className="mt-5 md:mt-6">
          <span className="inline-flex items-center gap-1 text-sm font-semibold underline-offset-4 group-hover:underline">
            Explore
            <RxChevronRight className="transition-transform group-hover:translate-x-1" />
          </span>
        </div>
      </div>
    </Link>
  );
}
