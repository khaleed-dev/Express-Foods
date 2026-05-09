"use client";

import { useLivePreview } from "@payloadcms/live-preview-react";
import { mapProduct } from "@/lib/payload-mappers";
import { ProductHeader } from "@/components/product-detail/ProductHeader";
import { FaqSection } from "@/components/shared/FaqSection";
import { CtaSection } from "@/components/shared/CtaSection";
import type { Product } from "@/lib/types";

type Props = {
  initialDoc: Record<string, unknown>;
  serverURL: string;
};

export function ProductLive({ initialDoc, serverURL }: Props) {
  const { data } = useLivePreview<Record<string, unknown>>({
    initialData: initialDoc,
    serverURL,
    depth: 2,
  });

  const product: Product = mapProduct(data);

  return (
    <>
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
