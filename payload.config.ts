import { buildConfig } from "payload";
import { postgresAdapter } from "@payloadcms/db-postgres";
import { lexicalEditor } from "@payloadcms/richtext-lexical";
import sharp from "sharp";
import path from "path";
import { fileURLToPath } from "url";

import { Users } from "./collections/Users";
import { Products } from "./collections/Products";
import { BlogPosts } from "./collections/BlogPosts";
import { Media } from "./collections/Media";
import { Categories } from "./collections/Categories";
import { Pages } from "./collections/Pages";
import { SiteSettings } from "./globals/SiteSettings";

const filename = fileURLToPath(import.meta.url);
const dirname = path.dirname(filename);

export default buildConfig({
  editor: lexicalEditor(),
  collections: [Users, Media, Categories, Products, BlogPosts, Pages],
  globals: [SiteSettings],
  secret: process.env.PAYLOAD_SECRET || "express-foods-dev-secret-change-me",
  typescript: {
    outputFile: path.resolve(dirname, "payload-types.ts"),
  },
  db: postgresAdapter({
    pool: {
      connectionString: process.env.DATABASE_URI || "",
    },
  }),
  admin: {
    user: "users",
    importMap: {
      baseDir: path.resolve(dirname),
    },
    components: {
      graphics: {
        Logo: "/components/admin/Logo",
        Icon: "/components/admin/Icon",
      },
      beforeDashboard: ["/components/admin/DashboardWelcome"],
    },
    meta: {
      titleSuffix: " — Express Foods Admin",
      icons: [
        {
          rel: "icon",
          type: "image/svg+xml",
          url: "/images/logos/logo-mark-colored.svg",
        },
      ],
    },
    livePreview: {
      url: ({ data, collectionConfig }) => {
        const baseUrl = process.env.NEXT_PUBLIC_SERVER_URL || "http://localhost:3000";
        if (collectionConfig?.slug === "pages") {
          const slug = data?.slug as string;
          return `${baseUrl}/${slug === "home" ? "" : slug}`;
        }
        if (collectionConfig?.slug === "products") return `${baseUrl}/products/${data?.slug}`;
        if (collectionConfig?.slug === "blog-posts") return `${baseUrl}/blog/${data?.slug}`;
        return baseUrl;
      },
      collections: ["pages", "products", "blog-posts"],
      globals: ["site-settings"],
    },
  },
  sharp,
});
