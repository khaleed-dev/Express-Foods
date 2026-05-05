import type { GlobalConfig } from "payload";

export const SiteSettings: GlobalConfig = {
  slug: "site-settings",
  admin: {
    group: "Settings",
    description: "Global site settings — company info, navigation, footer, social links",
  },
  access: {
    read: () => true,
  },
  fields: [
    // ── Company Info ──
    {
      name: "company",
      type: "group",
      fields: [
        {
          name: "name",
          type: "text",
          defaultValue: "Express Foods",
        },
        {
          name: "email",
          type: "email",
          defaultValue: "info@express-foods.com",
        },
        {
          name: "phone",
          type: "text",
        },
        {
          name: "address",
          type: "textarea",
        },
        {
          name: "whatsapp",
          type: "text",
          admin: {
            description: "Full WhatsApp link, e.g. https://wa.me/20200000000",
          },
        },
      ],
    },

    // ── Social Media ──
    {
      name: "social",
      type: "group",
      fields: [
        { name: "facebook", type: "text" },
        { name: "instagram", type: "text" },
        { name: "twitter", type: "text" },
        { name: "linkedin", type: "text" },
        { name: "youtube", type: "text" },
      ],
    },

    // ── Navigation ──
    {
      name: "navigation",
      type: "group",
      fields: [
        {
          name: "mainLinks",
          type: "array",
          admin: { description: "Top-level navigation links" },
          fields: [
            { name: "label", type: "text", required: true },
            { name: "href", type: "text", required: true },
          ],
        },
        {
          name: "ctaButtons",
          type: "array",
          maxRows: 2,
          admin: { description: "Header call-to-action buttons" },
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
              ],
            },
          ],
        },
        {
          name: "dropdownSections",
          type: "array",
          admin: { description: "Dropdown menu sections (e.g. Products mega menu)" },
          fields: [
            { name: "title", type: "text", required: true },
            {
              name: "links",
              type: "array",
              fields: [
                { name: "icon", type: "text", admin: { description: "Emoji or icon name" } },
                { name: "label", type: "text", required: true },
                { name: "description", type: "text" },
                { name: "href", type: "text", required: true },
              ],
            },
          ],
        },
      ],
    },

    // ── Footer ──
    {
      name: "footer",
      type: "group",
      fields: [
        {
          name: "columns",
          type: "array",
          maxRows: 4,
          admin: { description: "Footer link columns" },
          fields: [
            { name: "heading", type: "text" },
            {
              name: "links",
              type: "array",
              fields: [
                { name: "label", type: "text", required: true },
                { name: "href", type: "text", required: true },
              ],
            },
          ],
        },
        {
          name: "legalLinks",
          type: "array",
          admin: { description: "Bottom legal links (Privacy, Terms, etc.)" },
          fields: [
            { name: "label", type: "text", required: true },
            { name: "href", type: "text", required: true },
          ],
        },
        {
          name: "copyrightText",
          type: "text",
          defaultValue: "Express Foods. All rights reserved.",
        },
      ],
    },

    // ── Default CTA ──
    {
      name: "defaultCta",
      type: "group",
      admin: { description: "Default call-to-action used across pages" },
      fields: [
        { name: "heading", type: "text" },
        { name: "description", type: "textarea" },
        { name: "primaryLabel", type: "text" },
        { name: "primaryHref", type: "text" },
        { name: "secondaryLabel", type: "text" },
        { name: "secondaryHref", type: "text" },
        { name: "image", type: "upload", relationTo: "media" },
      ],
    },
  ],
};
