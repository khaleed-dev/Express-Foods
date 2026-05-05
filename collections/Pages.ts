import type { CollectionConfig } from "payload";
import { revalidatePath } from "next/cache";
import {
  HeroBlock,
  HeroTabsBlock,
  StoryBlock,
  PillarsBlock,
  ProductRangeBlock,
  FeaturedLayoutBlock,
  ProcessBlock,
  GlobalReachBlock,
  TestimonialsBlock,
  FaqBlock,
  CtaBlock,
  BlogPreviewBlock,
  LogoPartnersBlock,
  RichContentBlock,
  StatsBlock,
} from "../blocks";

export const Pages: CollectionConfig = {
  slug: "pages",
  admin: {
    useAsTitle: "title",
    defaultColumns: ["title", "slug", "status", "updatedAt"],
    group: "Content",
    description: "Edit page content and layouts",
  },
  access: {
    read: () => true,
  },
  hooks: {
    afterChange: [
      ({ doc }) => {
        const slug = doc.slug as string;
        revalidatePath(slug === "home" ? "/" : `/${slug}`, "page");
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
      name: "meta",
      type: "group",
      fields: [
        {
          name: "metaTitle",
          type: "text",
          admin: {
            description: "Overrides the page title for SEO",
          },
        },
        {
          name: "metaDescription",
          type: "textarea",
          admin: {
            description: "Page description for search engines",
          },
        },
        {
          name: "ogImage",
          type: "upload",
          relationTo: "media",
          admin: {
            description: "Social sharing image",
          },
        },
      ],
    },
    {
      name: "layout",
      type: "blocks",
      blocks: [
        HeroBlock,
        HeroTabsBlock,
        StoryBlock,
        PillarsBlock,
        ProductRangeBlock,
        FeaturedLayoutBlock,
        ProcessBlock,
        GlobalReachBlock,
        TestimonialsBlock,
        FaqBlock,
        CtaBlock,
        BlogPreviewBlock,
        LogoPartnersBlock,
        RichContentBlock,
        StatsBlock,
      ],
    },
  ],
};
