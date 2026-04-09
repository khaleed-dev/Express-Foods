import type { Product, BlogPost } from "@/lib/types";

export function getOrganizationJsonLd() {
  return {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: "Express Foods",
    url: "https://expressfoods.com",
    logo: "https://expressfoods.com/images/logos/logo-colored.svg",
    description:
      "Egypt-based B2B exporter of premium fresh and frozen fruits and vegetables",
    address: {
      "@type": "PostalAddress",
      addressLocality: "Cairo",
      addressRegion: "Nile Delta",
      addressCountry: "EG",
    },
    contactPoint: {
      "@type": "ContactPoint",
      contactType: "sales",
      email: "info@expressfoods.com",
    },
    sameAs: [],
  };
}

export function getProductJsonLd(product: Product) {
  return {
    "@context": "https://schema.org",
    "@type": "Product",
    name: product.name,
    description: product.description,
    image: `https://expressfoods.com${product.image}`,
    brand: {
      "@type": "Brand",
      name: "Express Foods",
    },
    category: product.category,
    offers: {
      "@type": "Offer",
      availability: "https://schema.org/InStock",
      priceCurrency: "USD",
      seller: {
        "@type": "Organization",
        name: "Express Foods",
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
    image: `https://expressfoods.com${post.image}`,
    datePublished: post.publishedAt,
    author: {
      "@type": "Organization",
      name: post.author.name,
    },
    publisher: {
      "@type": "Organization",
      name: "Express Foods",
      logo: {
        "@type": "ImageObject",
        url: "https://expressfoods.com/images/logos/logo-colored.svg",
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
