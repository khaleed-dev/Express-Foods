import type { Block } from "payload";

export const ProcessBlock: Block = {
  slug: "processBlock",
  interfaceName: "ProcessBlock",
  labels: { singular: "Process Section", plural: "Process Sections" },
  fields: [
    { name: "tagline", type: "text" },
    { name: "heading", type: "text", required: true },
    { name: "description", type: "textarea" },
    {
      name: "steps",
      type: "array",
      minRows: 1,
      maxRows: 8,
      fields: [
        { name: "heading", type: "text", required: true },
        { name: "description", type: "textarea", required: true },
      ],
    },
    { name: "featuredImage", type: "upload", relationTo: "media" },
    { name: "featuredHeading", type: "text" },
    { name: "featuredDescription", type: "textarea" },
  ],
};
