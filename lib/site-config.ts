/**
 * Single source of truth for every piece of copy, link and list rendered on the
 * landing page. Sections read from here so content edits never require touching
 * component markup.
 */

export const WHATSAPP_NUMBER = "919905429650";
export const WHATSAPP_DISPLAY = "+91 99054 29650";
export const WHATSAPP_LINK = `https://wa.me/${WHATSAPP_NUMBER}`;

/** Pre-fills the WhatsApp composer so an inbound chat already has context. */
export function whatsappLink(message?: string) {
  if (!message) return WHATSAPP_LINK;
  return `${WHATSAPP_LINK}?text=${encodeURIComponent(message)}`;
}

export const DEFAULT_WHATSAPP_MESSAGE =
  "Hi! I run a fashion / apparel business and I'd like a free website demo.";

export const site = {
  /**
   * No company name yet — this generic descriptor stands in wherever a brand
   * name would appear (header, footer, page title, structured data). Replace
   * this single value with the real business name when it is decided.
   */
  name: "Fashion Web Design",
  tagline: "Websites For Fashion & Apparel Businesses",
  email: "shrishkumar18032004@gmail.com",
  url: "https://shrishkumar111222.github.io/landingpageFashion-Apparel/",
  description:
    "Premium, mobile-first websites for garment stores, boutiques, bridal studios and fashion brands. Showcase your collections, build trust and turn online searches into store visits.",
} as const;

export const navLinks = [
  { label: "Demos", href: "#demos" },
  { label: "Why A Website", href: "#why" },
  { label: "Collections", href: "#collections" },
  { label: "Features", href: "#features" },
  { label: "Pricing", href: "#pricing" },
  { label: "FAQ", href: "#faq" },
] as const;

export const heroTrustBadges = [
  "Mobile Responsive",
  "WhatsApp Integration",
  "Collection Showcase",
  "Custom Design",
  "SEO Friendly",
  "Lead Generation",
] as const;

/** Audience strip shown under the hero — mirrors the businesses we build for. */
export const audienceTypes = [
  "Family Garments Stores",
  "Men's Wear Stores",
  "Women's Wear Stores",
  "Kids Wear Stores",
  "Saree Stores",
  "Boutiques",
  "Bridal Boutiques",
  "Designer Studios",
  "Ethnic Wear Stores",
  "Multi-Brand Fashion Stores",
  "Fashion Brands",
  "Clothing Manufacturers",
] as const;

export type DemoStyle = {
  id: string;
  title: string;
  summary: string;
  bestFor: readonly string[];
  href: string;
  badge?: string;
  palette: { from: string; via: string; to: string };
};

export const demoStyles: readonly DemoStyle[] = [
  {
    id: "family-garments",
    title: "Family Garments & Multi-Brand Fashion",
    summary:
      "A wide, welcoming layout built to present every department clearly — men, women and kids — with offers and store details up front.",
    bestFor: [
      "Family Garments Stores",
      "Multi-Brand Retailers",
      "Men's Wear",
      "Women's Wear",
      "Kids Wear",
    ],
    href: "https://shrishkumar111222.github.io/Family-Garments-Multi-Brand-Fashion-Store/",
    palette: { from: "#1F3A5F", via: "#4B7BA8", to: "#B0864A" },
  },
  {
    id: "luxury-boutique",
    title: "Luxury Boutique & Bridal Fashion",
    summary:
      "An editorial, gallery-led design with generous spacing and refined typography that makes couture and bridal collections feel exclusive.",
    bestFor: [
      "Boutiques",
      "Bridal Stores",
      "Designer Studios",
      "Premium Fashion Brands",
      "Ethnic Wear Stores",
    ],
    href: "https://shrishkumar111222.github.io/Luxury-Boutique-Bridal-Fashion/",
    palette: { from: "#5B1F3B", via: "#9C4668", to: "#D9BC8B" },
  },
  {
    id: "modern-fashion",
    title: "Modern Fashion Store",
    summary:
      "A bold, high-contrast layout with punchy visuals and quick browsing — tuned for trend-led brands and a younger audience.",
    bestFor: [
      "Modern Fashion Brands",
      "Trendy Clothing Stores",
      "Gen-Z Fashion",
      "Online Fashion Retailers",
      "Contemporary Apparel Stores",
    ],
    href: "https://shrishkumar111222.github.io/Modern-Fashion-Store-Gen-Z-Trendy-/",
    badge: "Trending Design",
    palette: { from: "#111827", via: "#4338CA", to: "#F97316" },
  },
] as const;

export const whyBenefits = [
  {
    title: "Showcase Collections",
    description:
      "Put every category, fabric and new design in front of customers before they visit.",
  },
  {
    title: "Build Brand Trust",
    description:
      "A professional presence signals a serious, established store worth travelling to.",
  },
  {
    title: "Generate More Inquiries",
    description:
      "Contact forms and one-tap WhatsApp turn quiet browsers into real conversations.",
  },
  {
    title: "Increase Store Visits",
    description:
      "Maps, timings and directions make it effortless for nearby shoppers to reach you.",
  },
  {
    title: "Promote New Arrivals",
    description:
      "Announce festive drops and fresh stock the moment they land on your shelves.",
  },
  {
    title: "Stand Out From Competitors",
    description:
      "Look sharper than the stores nearby that still have no online presence at all.",
  },
] as const;

/** Icon keys map to the lucide icons wired up inside the collections section. */
export const featuredCollections = [
  { label: "Men's Collection", icon: "shirt" },
  { label: "Women's Collection", icon: "venus" },
  { label: "Kids Collection", icon: "baby" },
  { label: "Bridal Collection", icon: "heart" },
  { label: "Sarees", icon: "wind" },
  { label: "Ethnic Wear", icon: "flower" },
  { label: "Western Wear", icon: "sparkle" },
  { label: "Festival Collection", icon: "party" },
  { label: "Seasonal Collection", icon: "sun" },
  { label: "Designer Wear", icon: "crown" },
  { label: "Fashion Accessories", icon: "gem" },
  { label: "Premium Collections", icon: "star" },
] as const;

export const features = [
  {
    title: "Mobile Responsive Design",
    description: "Flawless on every phone, tablet and desktop screen.",
    icon: "smartphone",
  },
  {
    title: "WhatsApp Integration",
    description: "One tap and the customer is already chatting with you.",
    icon: "message",
  },
  {
    title: "Store Location",
    description: "Address, landmarks and timings that are easy to find.",
    icon: "pin",
  },
  {
    title: "Google Maps",
    description: "Embedded directions that guide shoppers to your door.",
    icon: "map",
  },
  {
    title: "Collection Gallery",
    description: "Organised, fast-loading galleries for every category.",
    icon: "gallery",
  },
  {
    title: "Customer Reviews",
    description: "Real feedback displayed where it builds the most trust.",
    icon: "star",
  },
  {
    title: "Fashion Lookbook",
    description: "Editorial style pages that present complete looks.",
    icon: "book",
  },
  {
    title: "Instagram Integration",
    description: "Your latest posts, live on the website automatically.",
    icon: "instagram",
  },
  {
    title: "SEO Optimization",
    description: "Structured to be found when people search near you.",
    icon: "search",
  },
  {
    title: "Contact Forms",
    description: "Enquiries delivered straight to you, never missed.",
    icon: "mail",
  },
  {
    title: "Fast Loading",
    description: "Optimised builds that open instantly on mobile data.",
    icon: "zap",
  },
  {
    title: "Easy Updates",
    description: "Change products, prices and offers without a developer.",
    icon: "refresh",
  },
  {
    title: "Social Media Integration",
    description: "Every profile connected and growing from one place.",
    icon: "share",
  },
] as const;

export const trustCards = [
  {
    title: "Store Gallery",
    description: "Show the space, the shelves and the experience waiting inside.",
  },
  {
    title: "Collection Showcase",
    description: "Category-wise displays that make browsing effortless.",
  },
  {
    title: "Fashion Lookbook",
    description: "Styled sets that help customers picture the complete outfit.",
  },
  {
    title: "Customer Reviews",
    description: "Genuine words from happy buyers, front and centre.",
  },
  {
    title: "Instagram Feed",
    description: "A live window into your newest drops and daily activity.",
  },
  {
    title: "Featured Products",
    description: "Spotlight your best sellers and highest-margin pieces.",
  },
  {
    title: "Brand Story",
    description: "The years, the craft and the family behind the label.",
  },
  {
    title: "Latest Arrivals",
    description: "Fresh stock announced the day it reaches your store.",
  },
] as const;

export const pricingIncludes = [
  "Fully custom design matched to your brand",
  "Mobile-first, responsive on every device",
  "WhatsApp and enquiry form integration",
  "Collection gallery and lookbook pages",
  "Google Maps, timings and store details",
  "On-page SEO and fast loading setup",
  "Social media and Instagram integration",
  "Training so your team can update it",
] as const;

export const processSteps = [
  {
    step: "01",
    title: "Discovery Call",
    description:
      "We understand your store, collections, customers and what you want the website to achieve.",
  },
  {
    step: "02",
    title: "Design Direction",
    description:
      "You pick a style, we tailor the layout, colours and typography to your brand identity.",
  },
  {
    step: "03",
    title: "Build & Review",
    description:
      "We develop the site, add your collections and refine it with your feedback.",
  },
  {
    step: "04",
    title: "Launch & Support",
    description:
      "We publish, connect your domain and stay available for updates as you grow.",
  },
] as const;

export const faqs = [
  {
    question: "How long does website development take?",
    answer:
      "Most fashion and apparel websites go live in 5 to 10 working days. A single-page store presence can be ready sooner, while a large multi-brand catalogue with many collections takes a little longer. You get a clear timeline before we begin, and regular previews as the build progresses.",
  },
  {
    question: "Can I update products and collections later?",
    answer:
      "Yes. Your website is built so new arrivals, festive collections, prices and offers can be updated easily. We walk you through it after launch, and you can always send us the photos and details if you would rather we handle the updates for you.",
  },
  {
    question: "Will customers be able to contact me through WhatsApp?",
    answer:
      "Absolutely. WhatsApp is built into the design — a floating chat button, buttons on every section, and product-level enquiry links that open a chat with the item already mentioned. Customers reach you in one tap, from any device.",
  },
  {
    question: "Will the website work on mobile devices?",
    answer:
      "Every website is designed mobile-first, because the vast majority of fashion shoppers browse on their phones. Layouts, galleries and menus are tested across Android and iPhone screen sizes so the experience stays fast and elegant everywhere.",
  },
  {
    question: "Can you redesign my existing website?",
    answer:
      "Yes. We regularly modernise dated websites — improving the design, speed, mobile experience and search visibility while keeping the content and links you already rank for. Share your current site and we will show you exactly what can be improved.",
  },
  {
    question: "Can you create a website matching my brand style?",
    answer:
      "That is the whole point. The demos are starting directions, not templates. Your colours, logo, typography, photography and tone are applied throughout so the finished website looks unmistakably like your brand and no one else's.",
  },
] as const;

export const businessTypes = [
  "Family Garments Store",
  "Men's Wear Store",
  "Women's Wear Store",
  "Kids Wear Store",
  "Saree Store",
  "Boutique",
  "Bridal Boutique",
  "Designer Studio",
  "Ethnic Wear Store",
  "Multi-Brand Fashion Store",
  "Fashion Brand",
  "Clothing Manufacturer",
  "Other",
] as const;

export const stats = [
  { value: "5–10", label: "Days To Launch" },
  { value: "100%", label: "Custom Design" },
  { value: "Mobile", label: "First Approach" },
  { value: "1 Tap", label: "WhatsApp Enquiries" },
] as const;
