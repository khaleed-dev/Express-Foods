import type { Block } from "payload";

export const RichContentBlock: Block = {
  slug: "richContentBlock",
  interfaceName: "RichContentBlock",
  labels: { singular: "Rich Content", plural: "Rich Content Sections" },
  fields: [
    { name: "tagline", type: "text" },
    { name: "heading", type: "text" },
    { name: "content", type: "richText" },
    { name: "image", type: "upload", relationTo: "media" },
    {
      name: "imagePosition",
      type: "select",
      defaultValue: "right",
      options: [
        { label: "Left", value: "left" },
        { label: "Right", value: "right" },
      ],
    },
    {
      name: "highlights",
      type: "array",
      maxRows: 6,
      fields: [
        { name: "heading", type: "text", required: true },
        { name: "description", type: "text" },
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
