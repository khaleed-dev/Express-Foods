import type { Block } from "payload";

export const StoryBlock: Block = {
  slug: "storyBlock",
  interfaceName: "StoryBlock",
  labels: { singular: "Story Section", plural: "Story Sections" },
  fields: [
    { name: "tagline", type: "text" },
    { name: "heading", type: "text", required: true },
    { name: "description", type: "textarea" },
    { name: "image", type: "upload", relationTo: "media" },
    {
      name: "stats",
      type: "array",
      maxRows: 4,
      fields: [
        { name: "value", type: "text", required: true },
        { name: "label", type: "text", required: true },
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
