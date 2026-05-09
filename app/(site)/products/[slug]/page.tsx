import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { ProductLive } from "@/components/live-preview/ProductLive";
import {
  getAllProducts,
  getProductBySlug,
  getRawProductBySlug,
} from "@/lib/payload";
import { mapProduct } from "@/lib/payload-mappers";
import { getProductJsonLd, getBreadcrumbJsonLd } from "@/lib/json-ld";
import { company } from "@/lib/data/company";

export const revalidate = 3600;

const SERVER_URL =
  process.env.NEXT_PUBLIC_SERVER_URL || "http://localhost:3000";

type Props = {
  params: Promise<{ slug: string }>;
};

export async function generateStaticParams() {
  const products = await getAllProducts();
  return products.map((product) => ({
    slug: product.slug,
  }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const product = await getProductBySlug(slug);

  if (!product) {
    return {
      title: "Product Not Found",
    };
  }

  return {
    title: product.name,
    description: product.description,
    openGraph: {
      title: `${product.name} — Premium Egyptian Produce`,
      description: product.tagline,
      images: [{ url: product.image }],
    },
  };
}

export default async function ProductDetailPage({ params }: Props) {
  const { slug } = await params;
  const doc = await getRawProductBySlug(slug);

  if (!doc) {
    notFound();
  }

  const product = mapProduct(doc);
  const breadcrumbItems = [
    { name: "Home", url: company.url },
    { name: "Products", url: `${company.url}/products` },
    { name: product.name, url: `${company.url}/products/${product.slug}` },
  ];

  return (
    <>
      <script
        type="application/ld+json"
        suppressHydrationWarning
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(getProductJsonLd(product)),
        }}
      />
      <script
        type="application/ld+json"
        suppressHydrationWarning
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(getBreadcrumbJsonLd(breadcrumbItems)),
        }}
      />
      <ProductLive
        initialDoc={doc as Record<string, unknown>}
        serverURL={SERVER_URL}
      />
    </>
  );
}
