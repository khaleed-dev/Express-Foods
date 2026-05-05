import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { ProductHeader } from "@/components/product-detail/ProductHeader";
import { FaqSection } from "@/components/shared/FaqSection";
import { CtaSection } from "@/components/shared/CtaSection";
import { getAllProducts, getProductBySlug } from "@/lib/payload";
import { getProductJsonLd, getBreadcrumbJsonLd } from "@/lib/json-ld";
import { company } from "@/lib/data/company";

export const revalidate = 3600;

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
  const product = await getProductBySlug(slug);

  if (!product) {
    notFound();
  }

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
      <ProductHeader product={product} />

      {product.faq.length > 0 && (
        <FaqSection
          heading={`${product.name} FAQ`}
          description={`Common questions about sourcing ${product.name.toLowerCase()} from Express Foods.`}
          faqs={product.faq}
          showContactCta={true}
        />
      )}

      <CtaSection
        heading={`Source ${product.name} from Egypt`}
        description={`Get pricing, samples, and logistics for ${product.name.toLowerCase()}. We respond within 24 hours.`}
        primaryCta={{
          label: "Request a quote",
          href: `/contact?product=${product.slug}`,
        }}
      />
    </>
  );
}
