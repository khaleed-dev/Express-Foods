import type { CollectionConfig } from "payload";

/* eslint-disable @typescript-eslint/no-explicit-any */

const R2_PUBLIC_URL = process.env.R2_PUBLIC_URL?.replace(/\/$/, "");

/** Build a direct R2 URL for a stored filename. Returns the original
 *  Payload-served URL when R2_PUBLIC_URL isn't configured. */
function r2Url(filename: string | undefined | null): string | undefined {
  if (!filename) return undefined;
  return R2_PUBLIC_URL
    ? `${R2_PUBLIC_URL}/${encodeURIComponent(filename)}`
    : undefined;
}

export const Media: CollectionConfig = {
  slug: "media",
  admin: {
    group: "Media",
    description: "Upload and manage images",
  },
  access: {
    read: () => true,
  },
  upload: {
    staticDir: "media",
    imageSizes: [
      {
        name: "thumbnail",
        width: 400,
        height: 300,
        position: "centre",
      },
      {
        name: "card",
        width: 768,
        height: 512,
        position: "centre",
      },
      {
        name: "hero",
        width: 1920,
        height: 1080,
        position: "centre",
      },
    ],
    adminThumbnail: "thumbnail",
    mimeTypes: ["image/*"],
  },
  fields: [
    {
      name: "alt",
      type: "text",
      required: true,
    },
  ],
  hooks: {
    afterRead: [
      ({ doc }: { doc: any }) => {
        if (!R2_PUBLIC_URL || !doc) return doc;
        const mainUrl = r2Url(doc.filename);
        if (mainUrl) doc.url = mainUrl;
        if (doc.sizes && typeof doc.sizes === "object") {
          for (const size of Object.values(doc.sizes) as any[]) {
            if (size?.filename) {
              const sizedUrl = r2Url(size.filename);
              if (sizedUrl) size.url = sizedUrl;
            }
          }
        }
        return doc;
      },
    ],
  },
};
