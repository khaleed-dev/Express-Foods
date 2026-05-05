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

/* eslint-disable @typescript-eslint/no-explicit-any */

/** Extract URL from a Payload Media object */
function mediaUrl(media: any): string {
  if (!media) return "";
  if (typeof media === "string") return media;
  return media.url || "";
}

/** Map a block's data to the props its component expects */
function mapBlockToProps(block: any): any {
  switch (block.blockType) {
    case "heroBlock":
      return {
        tagline: block.tagline,
        heading: block.heading,
        description: block.description,
        backgroundImage: mediaUrl(block.backgroundImage),
        primaryCta: block.primaryCta?.label ? block.primaryCta : undefined,
        secondaryCta: block.secondaryCta?.label ? block.secondaryCta : undefined,
      };

    case "storyBlock":
      return {
        tagline: block.tagline,
        heading: block.heading,
        description: block.description,
        image: mediaUrl(block.image),
        stats: block.stats,
        primaryCta: block.primaryCta?.label ? block.primaryCta : undefined,
        secondaryCta: block.secondaryCta?.label ? block.secondaryCta : undefined,
      };

    case "pillarsBlock":
      return {
        tagline: block.tagline,
        heading: block.heading,
        description: block.description,
        pillars: block.pillars?.map((p: any) => ({
          ...p,
          image: { src: mediaUrl(p.image), alt: p.heading || "" },
        })),
      };

    case "productRangeBlock":
      return {
        tagline: block.tagline,
        heading: block.heading,
        description: block.description,
        categories: block.categories?.map((c: any) => ({
          ...c,
          image: { src: mediaUrl(c.image), alt: c.heading || "" },
        })),
      };

    case "featuredLayoutBlock":
      return {
        tagline: block.tagline,
        heading: block.heading,
        description: block.description,
        tabs: block.tabs?.map((t: any) => ({
          ...t,
          image: { src: mediaUrl(t.image), alt: t.heading || "" },
        })),
      };

    case "processBlock":
      return {
        tagline: block.tagline,
        heading: block.heading,
        description: block.description,
        steps: block.steps,
        featuredImage: mediaUrl(block.featuredImage),
        featuredHeading: block.featuredHeading,
        featuredDescription: block.featuredDescription,
      };

    case "globalReachBlock":
      return {
        tagline: block.tagline,
        heading: block.heading,
        description: block.description,
        image: mediaUrl(block.image),
        regions: block.regions,
      };

    case "testimonialsBlock":
      return {
        heading: block.heading,
        description: block.description,
        testimonials: block.testimonials?.map((t: any) => ({
          ...t,
          avatar: mediaUrl(t.avatar),
        })),
      };

    case "faqBlock":
      return {
        heading: block.heading,
        description: block.description,
        faqs: block.faqs,
        showContactCta: block.showContactCta,
      };

    case "ctaBlock":
      return {
        heading: block.heading,
        description: block.description,
        image: mediaUrl(block.image),
        primaryCta: block.primaryCta?.label ? block.primaryCta : undefined,
        secondaryCta: block.secondaryCta?.label ? block.secondaryCta : undefined,
      };

    case "logoPartnersBlock":
      return {
        heading: block.heading,
      };

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
