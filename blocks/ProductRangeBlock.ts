import type { Block } from "payload";

export const ProductRangeBlock: Block = {
  slug: "productRangeBlock",
  interfaceName: "ProductRangeBlock",
  labels: { singular: "Product Range", plural: "Product Ranges" },
  fields: [
    { name: "tagline", type: "text" },
    { name: "heading", type: "text", required: true },
    { name: "description", type: "textarea" },
    {
      name: "categories",
      type: "array",
      minRows: 1,
      maxRows: 8,
      fields: [
        { name: "heading", type: "text", required: true },
        { name: "description", type: "text" },
        { name: "href", type: "text", required: true },
        { name: "image", type: "upload", relationTo: "media" },
      ],
    },
  ],
};
