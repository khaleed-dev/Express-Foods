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
import { getOrganizationJsonLd } from "@/lib/json-ld";

export default function HomePage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(getOrganizationJsonLd()),
        }}
      />
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
  );
}
