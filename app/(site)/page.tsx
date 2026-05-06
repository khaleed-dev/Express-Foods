import { HeroTabs } from "@/components/home/HeroTabs";
import { StorySection } from "@/components/home/StorySection";
import { FourPillars } from "@/components/home/FourPillars";
import { ProductRange } from "@/components/home/ProductRange";
import { FeaturedLayout } from "@/components/home/FeaturedLayout";
import { LogoPartners } from "@/components/shared/LogoPartners";
import { ProcessSection } from "@/components/home/ProcessSection";
import { GlobalReach } from "@/components/home/GlobalReach";
import { Testimonials } from "@/components/shared/Testimonials";
import { BlogPreview } from "@/components/shared/BlogPreview";
import { CtaSection } from "@/components/shared/CtaSection";
import { RenderBlocks } from "@/components/blocks/RenderBlocks";
import { getOrganizationJsonLd } from "@/lib/json-ld";
import { getPageBySlug } from "@/lib/payload";

export const revalidate = 3600;

export default async function HomePage() {
  const page = await getPageBySlug("home");
  const hasPayloadLayout = !!(page?.layout && page.layout.length > 0);
  const layoutHasHero = hasPayloadLayout
    ? page!.layout!.some(
        (b: { blockType?: string }) =>
          b.blockType === "heroTabsBlock" || b.blockType === "heroBlock",
      )
    : false;

  return (
    <>
      <script
        type="application/ld+json"
        suppressHydrationWarning
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(getOrganizationJsonLd()),
        }}
      />
      {hasPayloadLayout ? (
        <>
          {!layoutHasHero && <HeroTabs />}
          <RenderBlocks blocks={page!.layout!} />
        </>
      ) : (
        <>
          <HeroTabs />
          <StorySection />
          <FourPillars />
          <ProductRange />
          <FeaturedLayout />
          <LogoPartners />
          <ProcessSection />
          <GlobalReach />
          <Testimonials />
          <BlogPreview />
          <CtaSection />
        </>
      )}
    </>
  );
}
