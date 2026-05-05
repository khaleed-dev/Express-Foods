import type { Block } from "payload";

export const TestimonialsBlock: Block = {
  slug: "testimonialsBlock",
  interfaceName: "TestimonialsBlock",
  labels: { singular: "Testimonials", plural: "Testimonials" },
  fields: [
    { name: "heading", type: "text" },
    { name: "description", type: "text" },
    {
      name: "testimonials",
      type: "array",
      minRows: 1,
      maxRows: 10,
      fields: [
        { name: "quote", type: "textarea", required: true },
        { name: "name", type: "text", required: true },
        { name: "role", type: "text" },
        { name: "company", type: "text" },
        { name: "avatar", type: "upload", relationTo: "media" },
        {
          name: "rating",
          type: "number",
          min: 1,
          max: 5,
          defaultValue: 5,
        },
      ],
    },
  ],
};
