import type { GlobalConfig } from "payload";

export const SiteSettings: GlobalConfig = {
  slug: "site-settings",
  access: {
    read: () => true,
  },
  fields: [
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
      ],
    },
    {
      name: "social",
      type: "group",
      fields: [
        {
          name: "facebook",
          type: "text",
        },
        {
          name: "instagram",
          type: "text",
        },
        {
          name: "twitter",
          type: "text",
        },
        {
          name: "linkedin",
          type: "text",
        },
        {
          name: "youtube",
          type: "text",
        },
      ],
    },
  ],
};
