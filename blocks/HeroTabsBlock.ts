import type { Block } from "payload";

export const HeroTabsBlock: Block = {
  slug: "heroTabsBlock",
  interfaceName: "HeroTabsBlock",
  labels: { singular: "Hero Tabs", plural: "Hero Tabs" },
  fields: [
    {
      name: "tabs",
      type: "array",
      minRows: 1,
      maxRows: 6,
      fields: [
        { name: "tabLabel", type: "text", required: true },
        { name: "heading", type: "text", required: true },
        { name: "description", type: "textarea" },
        { name: "image", type: "upload", relationTo: "media" },
        {
          name: "buttons",
          type: "array",
          maxRows: 3,
          fields: [
            { name: "label", type: "text", required: true },
            { name: "href", type: "text", required: true },
            {
              name: "variant",
              type: "select",
              defaultValue: "primary",
              options: [
                { label: "Primary", value: "primary" },
                { label: "Secondary", value: "secondary" },
                { label: "Link", value: "link" },
              ],
            },
          ],
        },
      ],
    },
  ],
};
