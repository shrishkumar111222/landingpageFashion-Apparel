import type { Metadata, Viewport } from "next";
import { Inter, Playfair_Display } from "next/font/google";

import "./globals.css";
import { site } from "@/lib/site-config";

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-sans",
});

const playfair = Playfair_Display({
  subsets: ["latin"],
  display: "swap",
  weight: ["500", "600", "700"],
  variable: "--font-display",
});

const keywords = [
  "fashion website design",
  "boutique website development",
  "garment store website",
  "bridal boutique website",
  "saree store website",
  "clothing brand website",
  "ethnic wear website design",
  "kids wear store website",
  "multi-brand fashion store website",
  "fashion web design India",
];

export const metadata: Metadata = {
  metadataBase: new URL(site.url),
  title: {
    // Leads with the offer rather than a brand name, which does not exist yet.
    default: `${site.tagline} | Custom Design For Stores, Boutiques & Brands`,
    template: `%s | ${site.name}`,
  },
  description: site.description,
  keywords,
  applicationName: site.name,
  // `authors` / `creator` intentionally omitted until a business name exists.
  openGraph: {
    type: "website",
    locale: "en_IN",
    url: site.url,
    siteName: site.name,
    title: "Fashion Sells On First Impressions. Make Yours Unforgettable.",
    description: site.description,
  },
  twitter: {
    card: "summary_large_image",
    title: "Fashion Sells On First Impressions. Make Yours Unforgettable.",
    description: site.description,
  },
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true, "max-image-preview": "large" },
  },
};

export const viewport: Viewport = {
  themeColor: "#ffffff",
  width: "device-width",
  initialScale: 1,
};

const structuredData = {
  "@context": "https://schema.org",
  "@type": "ProfessionalService",
  name: site.name,
  description: site.description,
  url: site.url,
  serviceType: "Website Design & Development For Fashion And Apparel Businesses",
  areaServed: "IN",
  telephone: "+91-9905429650",
  email: site.email,
  priceRange: "Custom",
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className={`${inter.variable} ${playfair.variable}`}>
      <body className="font-sans">
        {children}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
        />
      </body>
    </html>
  );
}
