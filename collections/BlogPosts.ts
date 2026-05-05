import type { CollectionConfig } from "payload";
import { revalidatePath } from "next/cache";

export const BlogPosts: CollectionConfig = {
  slug: "blog-posts",
  admin: {
    useAsTitle: "title",
    defaultColumns: ["title", "category", "status", "publishedAt"],
    group: "Content",
    description: "Create and publish blog articles",
  },
  access: {
    read: () => true,
  },
  hooks: {
    afterChange: [
      ({ doc }) => {
        revalidatePath("/blog", "page");
        if (doc.slug) revalidatePath(`/blog/${doc.slug}`, "page");
      },
    ],
  },
  fields: [
    {
      name: "title",
      type: "text",
      required: true,
    },
    {
      name: "slug",
      type: "text",
      required: true,
      unique: true,
      admin: {
        position: "sidebar",
      },
    },
    {
      name: "status",
      type: "select",
      required: true,
      defaultValue: "draft",
      options: [
        { label: "Draft", value: "draft" },
        { label: "Published", value: "published" },
      ],
      admin: {
        position: "sidebar",
      },
    },
    {
      name: "excerpt",
      type: "textarea",
    },
    {
      name: "category",
      type: "select",
      options: [
        { label: "Markets", value: "Markets" },
        { label: "Quality", value: "Quality" },
        { label: "Products", value: "Products" },
        { label: "Industry", value: "Industry" },
        { label: "Company", value: "Company" },
      ],
    },
    {
      name: "readTime",
      type: "text",
    },
    {
      name: "publishedAt",
      type: "date",
      admin: {
        position: "sidebar",
        date: {
          pickerAppearance: "dayOnly",
          displayFormat: "d MMM yyy",
        },
      },
    },
    {
      name: "image",
      type: "upload",
      relationTo: "media",
    },
    {
      name: "author",
      type: "group",
      fields: [
        {
          name: "name",
          type: "text",
          required: true,
        },
        {
          name: "role",
          type: "text",
        },
      ],
    },
    {
      name: "content",
      type: "richText",
    },
  ],
};
