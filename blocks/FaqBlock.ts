import type { Block } from "payload";

export const FaqBlock: Block = {
  slug: "faqBlock",
  interfaceName: "FaqBlock",
  labels: { singular: "FAQ Section", plural: "FAQ Sections" },
  fields: [
    { name: "heading", type: "text" },
    { name: "description", type: "text" },
    {
      name: "faqs",
      type: "array",
      minRows: 1,
      fields: [
        { name: "question", type: "text", required: true },
        { name: "answer", type: "textarea", required: true },
      ],
    },
    {
      name: "showContactCta",
      type: "checkbox",
      defaultValue: true,
    },
  ],
};
