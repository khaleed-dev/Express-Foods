import type { MetadataRoute } from "next";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "Express Foods",
    short_name: "Express Foods",
    description: "Premium Egyptian Fruits & Vegetables",
    start_url: "/",
    display: "browser",
    background_color: "#f8f5ee",
    theme_color: "#307b34",
    icons: [
      {
        src: "/images/logos/logo-mark-colored.svg",
        sizes: "any",
        type: "image/svg+xml",
      },
    ],
  };
}
