import { SiteFooter } from "@/components/layout/site-footer";
import { SiteHeader } from "@/components/layout/site-header";
import { Faq } from "@/components/sections/faq";
import { FeaturedCollections } from "@/components/sections/featured-collections";
import { Features } from "@/components/sections/features";
import { FinalCta } from "@/components/sections/final-cta";
import { Hero } from "@/components/sections/hero";
import { LeadForm } from "@/components/sections/lead-form";
import { Pricing } from "@/components/sections/pricing";
import { TrustBuilding } from "@/components/sections/trust-building";
import { WebsiteStyles } from "@/components/sections/website-styles";
import { WhyWebsite } from "@/components/sections/why-website";
import { StickyWhatsApp } from "@/components/shared/sticky-whatsapp";

export default function HomePage() {
  return (
    <>
      <SiteHeader />

      <main>
        <Hero />
        <WebsiteStyles />
        <WhyWebsite />
        <FeaturedCollections />
        <Features />
        <TrustBuilding />
        <Pricing />
        <Faq />
        <LeadForm />
        <FinalCta />
      </main>

      <SiteFooter />
      <StickyWhatsApp />
    </>
  );
}
