import type { Block } from "payload";

export const FeaturedLayoutBlock: Block = {
  slug: "featuredLayoutBlock",
  interfaceName: "FeaturedLayoutBlock",
  labels: { singular: "Featured Layout", plural: "Featured Layouts" },
  fields: [
    { name: "tagline", type: "text" },
    { name: "heading", type: "text", required: true },
    { name: "description", type: "textarea" },
    {
      name: "tabs",
      type: "array",
      minRows: 1,
      maxRows: 6,
      fields: [
        { name: "heading", type: "text", required: true },
        { name: "description", type: "textarea" },
        { name: "image", type: "upload", relationTo: "media" },
      ],
    },
    {
      name: "primaryCta",
      type: "group",
      fields: [
        { name: "label", type: "text" },
        { name: "href", type: "text" },
      ],
    },
    {
      name: "secondaryCta",
      type: "group",
      fields: [
        { name: "label", type: "text" },
        { name: "href", type: "text" },
      ],
    },
  ],
};
