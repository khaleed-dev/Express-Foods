import type { Block } from "payload";

export const LogoPartnersBlock: Block = {
  slug: "logoPartnersBlock",
  interfaceName: "LogoPartnersBlock",
  labels: { singular: "Logo Partners", plural: "Logo Partners" },
  fields: [
    { name: "heading", type: "text" },
    {
      name: "certifications",
      type: "array",
      fields: [
        { name: "name", type: "text", required: true },
        { name: "logo", type: "upload", relationTo: "media" },
      ],
    },
  ],
};
