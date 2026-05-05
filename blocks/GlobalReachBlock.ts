import type { Block } from "payload";

export const GlobalReachBlock: Block = {
  slug: "globalReachBlock",
  interfaceName: "GlobalReachBlock",
  labels: { singular: "Global Reach", plural: "Global Reach Sections" },
  fields: [
    { name: "tagline", type: "text" },
    { name: "heading", type: "text", required: true },
    { name: "description", type: "textarea" },
    { name: "image", type: "upload", relationTo: "media" },
    {
      name: "regions",
      type: "array",
      maxRows: 6,
      fields: [
        { name: "heading", type: "text", required: true },
        { name: "description", type: "textarea" },
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
