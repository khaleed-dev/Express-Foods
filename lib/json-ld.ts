import type { Product, BlogPost } from "@/lib/types";
import { company } from "@/lib/data/company";

export function getOrganizationJsonLd() {
  return {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: company.name,
    url: company.url,
    logo: `${company.url}/images/logos/logo-colored.svg`,
    description:
      "Egypt-based B2B exporter of premium fresh and frozen fruits and vegetables",
    address: {
      "@type": "PostalAddress",
      streetAddress: company.address.line1,
      addressLocality: "Cairo",
      addressCountry: "EG",
    },
    contactPoint: {
      "@type": "ContactPoint",
      contactType: "sales",
      email: company.publicEmail,
      telephone: company.phone.raw,
    },
    sameAs: [company.socials.linkedin],
  };
}

export function getProductJsonLd(product: Product) {
  return {
    "@context": "https://schema.org",
    "@type": "Product",
    name: product.name,
    description: product.description,
    image: `${company.url}${product.image}`,
    brand: {
      "@type": "Brand",
      name: company.name,
    },
    category: product.category,
    offers: {
      "@type": "Offer",
      availability: "https://schema.org/InStock",
      priceCurrency: "USD",
      seller: {
        "@type": "Organization",
        name: company.name,
      },
    },
  };
}

export function getArticleJsonLd(post: BlogPost) {
  return {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: post.title,
    description: post.excerpt,
    image: `${company.url}${post.image}`,
    datePublished: post.publishedAt,
    author: {
      "@type": "Organization",
      name: post.author.name,
    },
    publisher: {
      "@type": "Organization",
      name: company.name,
      logo: {
        "@type": "ImageObject",
        url: `${company.url}/images/logos/logo-colored.svg`,
      },
    },
  };
}

export function getBreadcrumbJsonLd(
  items: { name: string; url: string }[],
) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: item.name,
      item: item.url,
    })),
  };
}
