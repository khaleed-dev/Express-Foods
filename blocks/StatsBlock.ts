import type { Block } from "payload";

export const StatsBlock: Block = {
  slug: "statsBlock",
  interfaceName: "StatsBlock",
  labels: { singular: "Stats Section", plural: "Stats Sections" },
  fields: [
    { name: "tagline", type: "text" },
    { name: "heading", type: "text", required: true },
    { name: "description", type: "textarea" },
    {
      name: "stats",
      type: "array",
      minRows: 1,
      maxRows: 6,
      fields: [
        { name: "value", type: "text", required: true },
        { name: "label", type: "text", required: true },
      ],
    },
    {
      name: "images",
      type: "array",
      maxRows: 4,
      fields: [
        { name: "image", type: "upload", relationTo: "media", required: true },
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
