import type { CollectionConfig } from "payload";

export const Products: CollectionConfig = {
  slug: "products",
  admin: {
    useAsTitle: "name",
    defaultColumns: ["name", "category", "season", "updatedAt"],
  },
  access: {
    read: () => true,
  },
  fields: [
    {
      name: "name",
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
      name: "category",
      type: "select",
      required: true,
      options: [
        { label: "Citrus", value: "citrus" },
        { label: "Fresh Fruits", value: "fresh-fruits" },
        { label: "Vegetables", value: "vegetables" },
        { label: "IQF Frozen", value: "iqf-frozen" },
      ],
    },
    {
      name: "tagline",
      type: "text",
    },
    {
      name: "description",
      type: "textarea",
    },
    {
      name: "image",
      type: "upload",
      relationTo: "media",
    },
    {
      name: "heroImage",
      type: "upload",
      relationTo: "media",
    },
    {
      name: "season",
      type: "text",
    },
    {
      name: "packTypes",
      type: "array",
      fields: [
        {
          name: "value",
          type: "text",
          required: true,
        },
      ],
    },
    {
      name: "packagingOptions",
      type: "array",
      fields: [
        {
          name: "value",
          type: "text",
          required: true,
        },
      ],
    },
    {
      name: "calibers",
      type: "array",
      fields: [
        {
          name: "value",
          type: "text",
          required: true,
        },
      ],
    },
    {
      name: "shelfLife",
      type: "text",
    },
    {
      name: "storageTemp",
      type: "text",
    },
    {
      name: "certifications",
      type: "array",
      fields: [
        {
          name: "value",
          type: "text",
          required: true,
        },
      ],
    },
    {
      name: "targetMarkets",
      type: "array",
      fields: [
        {
          name: "value",
          type: "text",
          required: true,
        },
      ],
    },
    {
      name: "specs",
      type: "array",
      fields: [
        {
          name: "label",
          type: "text",
          required: true,
        },
        {
          name: "value",
          type: "text",
          required: true,
        },
      ],
    },
    {
      name: "faq",
      type: "array",
      fields: [
        {
          name: "question",
          type: "text",
          required: true,
        },
        {
          name: "answer",
          type: "textarea",
          required: true,
        },
      ],
    },
    {
      name: "alsoAvailableFrozen",
      type: "checkbox",
      defaultValue: false,
    },
  ],
};
