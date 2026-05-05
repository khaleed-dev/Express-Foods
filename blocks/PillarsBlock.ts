import type { Block } from "payload";

export const PillarsBlock: Block = {
  slug: "pillarsBlock",
  interfaceName: "PillarsBlock",
  labels: { singular: "Pillars Section", plural: "Pillars Sections" },
  fields: [
    { name: "tagline", type: "text" },
    { name: "heading", type: "text", required: true },
    { name: "description", type: "textarea" },
    {
      name: "pillars",
      type: "array",
      minRows: 1,
      maxRows: 6,
      fields: [
        { name: "label", type: "text" },
        { name: "heading", type: "text", required: true },
        { name: "description", type: "textarea", required: true },
        { name: "image", type: "upload", relationTo: "media" },
        { name: "href", type: "text" },
      ],
    },
  ],
};
