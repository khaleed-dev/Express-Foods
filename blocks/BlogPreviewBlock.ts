import type { Block } from "payload";

export const BlogPreviewBlock: Block = {
  slug: "blogPreviewBlock",
  interfaceName: "BlogPreviewBlock",
  labels: { singular: "Blog Preview", plural: "Blog Previews" },
  fields: [
    { name: "tagline", type: "text" },
    { name: "heading", type: "text" },
    { name: "description", type: "text" },
    {
      name: "postsToShow",
      type: "number",
      defaultValue: 3,
      min: 1,
      max: 9,
      admin: {
        description: "Number of latest blog posts to display",
      },
    },
  ],
};
