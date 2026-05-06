import { HeroTabs } from "@/components/home/HeroTabs";
import { StorySection } from "@/components/home/StorySection";
import { FourPillars } from "@/components/home/FourPillars";
import { ProductRange } from "@/components/home/ProductRange";
import { FeaturedLayout } from "@/components/home/FeaturedLayout";
import { ProcessSection } from "@/components/home/ProcessSection";
import { GlobalReach } from "@/components/home/GlobalReach";
import { PageHero } from "@/components/shared/PageHero";
import { Testimonials } from "@/components/shared/Testimonials";
import { FaqSection } from "@/components/shared/FaqSection";
import { CtaSection } from "@/components/shared/CtaSection";
import { LogoPartners } from "@/components/shared/LogoPartners";
import { BlogPreview } from "@/components/shared/BlogPreview";

/* eslint-disable @typescript-eslint/no-explicit-any */

/** Extract URL from a Payload Media object. Returns undefined when missing
 *  so the receiving component's default prop value can take over. */
function mediaUrl(media: any): string | undefined {
  if (!media) return undefined;
  if (typeof media === "string") return media || undefined;
  return media.url || undefined;
}

/** Drop keys whose value is undefined so component prop defaults apply. */
function compact<T extends Record<string, unknown>>(obj: T): Partial<T> {
  const out: Record<string, unknown> = {};
  for (const [k, v] of Object.entries(obj)) {
    if (v !== undefined) out[k] = v;
  }
  return out as Partial<T>;
}

/** Map nested array of items with images. Returns undefined if any item is
 *  missing media — caller drops the field so the component's default applies. */
function mapItemsWithImages<T extends Record<string, unknown>>(
  items: any[] | undefined,
  imageKey: string = "image",
  altKey: string = "heading",
): T[] | undefined {
  if (!items || items.length === 0) return undefined;
  const mapped = items.map((item) => {
    const url = mediaUrl(item[imageKey]);
    if (!url) return null;
    return { ...item, [imageKey]: { src: url, alt: item[altKey] || "" } } as T;
  });
  if (mapped.some((m) => m === null)) return undefined;
  return mapped as T[];
}

/** Map a block's data to the props its component expects.
 *  Returns only fields with real values so component prop defaults apply
 *  whenever payload hasn't supplied data. */
function mapBlockToProps(block: any): Record<string, unknown> {
  switch (block.blockType) {
    case "heroBlock":
      return compact({
        tagline: block.tagline,
        heading: block.heading,
        description: block.description,
        backgroundImage: mediaUrl(block.backgroundImage),
        primaryCta: block.primaryCta?.label ? block.primaryCta : undefined,
        secondaryCta: block.secondaryCta?.label ? block.secondaryCta : undefined,
      });

    case "heroTabsBlock":
      return compact({
        tabs: block.tabs,
      });

    case "storyBlock":
      return compact({
        tagline: block.tagline,
        heading: block.heading,
        description: block.description,
        image: mediaUrl(block.image),
        stats: block.stats?.length ? block.stats : undefined,
        primaryCta: block.primaryCta?.label ? block.primaryCta : undefined,
        secondaryCta: block.secondaryCta?.label ? block.secondaryCta : undefined,
      });

    case "pillarsBlock":
      return compact({
        tagline: block.tagline,
        heading: block.heading,
        description: block.description,
        pillars: mapItemsWithImages(block.pillars),
      });

    case "productRangeBlock":
      return compact({
        tagline: block.tagline,
        heading: block.heading,
        description: block.description,
        categories: mapItemsWithImages(block.categories),
      });

    case "featuredLayoutBlock":
      return compact({
        tagline: block.tagline,
        heading: block.heading,
        description: block.description,
        tabs: mapItemsWithImages(block.tabs),
      });

    case "processBlock":
      return compact({
        tagline: block.tagline,
        heading: block.heading,
        description: block.description,
        steps: block.steps?.length ? block.steps : undefined,
        featuredImage: mediaUrl(block.featuredImage),
        featuredHeading: block.featuredHeading,
        featuredDescription: block.featuredDescription,
      });

    case "globalReachBlock":
      return compact({
        tagline: block.tagline,
        heading: block.heading,
        description: block.description,
        image: mediaUrl(block.image),
        regions: block.regions?.length ? block.regions : undefined,
      });

    case "testimonialsBlock":
      return compact({
        heading: block.heading,
        description: block.description,
        testimonials: block.testimonials?.length
          ? block.testimonials.map((t: any) => {
              const avatar = mediaUrl(t.avatar);
              return avatar ? { ...t, avatar } : { ...t, avatar: undefined };
            })
          : undefined,
      });

    case "faqBlock":
      return compact({
        heading: block.heading,
        description: block.description,
        faqs: block.faqs?.length ? block.faqs : undefined,
        showContactCta: block.showContactCta,
      });

    case "ctaBlock":
      return compact({
        heading: block.heading,
        description: block.description,
        image: mediaUrl(block.image),
        primaryCta: block.primaryCta?.label ? block.primaryCta : undefined,
        secondaryCta: block.secondaryCta?.label ? block.secondaryCta : undefined,
      });

    case "logoPartnersBlock":
      return compact({
        heading: block.heading,
      });

    case "blogPreviewBlock":
      return compact({
        tagline: block.tagline,
        heading: block.heading,
        description: block.description,
      });

    default:
      return {};
  }
}

const blockComponents: Record<string, React.ComponentType<any>> = {
  heroBlock: PageHero,
  heroTabsBlock: HeroTabs,
  storyBlock: StorySection,
  pillarsBlock: FourPillars,
  productRangeBlock: ProductRange,
  featuredLayoutBlock: FeaturedLayout,
  processBlock: ProcessSection,
  globalReachBlock: GlobalReach,
  testimonialsBlock: Testimonials,
  faqBlock: FaqSection,
  ctaBlock: CtaSection,
  logoPartnersBlock: LogoPartners,
  blogPreviewBlock: BlogPreview,
};

interface RenderBlocksProps {
  blocks: any[] | undefined | null;
}

export function RenderBlocks({ blocks }: RenderBlocksProps) {
  if (!blocks || blocks.length === 0) return null;

  return (
    <>
      {blocks.map((block, index) => {
        const Component = blockComponents[block.blockType];
        if (!Component) return null;
        const props = mapBlockToProps(block);
        return <Component key={block.id || index} {...props} />;
      })}
    </>
  );
}
