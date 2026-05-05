import type { CollectionConfig } from "payload";

export const Users: CollectionConfig = {
  slug: "users",
  auth: true,
  admin: {
    useAsTitle: "email",
    group: "System",
    description: "Manage admin users",
  },
  access: {
    read: () => true,
    create: ({ req }) => req.user?.role === "admin",
    delete: ({ req }) => req.user?.role === "admin",
  },
  fields: [
    {
      name: "name",
      type: "text",
    },
    {
      name: "role",
      type: "select",
      required: true,
      defaultValue: "editor",
      options: [
        { label: "Admin", value: "admin" },
        { label: "Editor", value: "editor" },
      ],
      access: {
        update: ({ req }) => req.user?.role === "admin",
      },
      admin: {
        position: "sidebar",
        description: "Admins can manage users and delete content. Editors can create and edit.",
      },
    },
  ],
};
