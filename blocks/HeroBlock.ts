import type { Block } from "payload";

export const HeroBlock: Block = {
  slug: "heroBlock",
  interfaceName: "HeroBlock",
  labels: { singular: "Page Hero", plural: "Page Heroes" },
  fields: [
    { name: "tagline", type: "text" },
    { name: "heading", type: "text", required: true },
    { name: "description", type: "textarea" },
    { name: "backgroundImage", type: "upload", relationTo: "media" },
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
