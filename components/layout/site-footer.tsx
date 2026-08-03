import * as React from "react";
import { Mail, Phone } from "lucide-react";

import { BrandMark } from "@/components/shared/brand-mark";
import { WhatsAppIcon } from "@/components/shared/whatsapp-icon";
import {
  DEFAULT_WHATSAPP_MESSAGE,
  WHATSAPP_DISPLAY,
  WHATSAPP_NUMBER,
  navLinks,
  site,
  whatsappLink,
} from "@/lib/site-config";

const services = [
  "Family Garments Websites",
  "Boutique & Bridal Websites",
  "Men's & Women's Wear Websites",
  "Saree & Ethnic Wear Websites",
  "Designer Studio Websites",
  "Fashion Brand Websites",
];

export function SiteFooter() {
  return (
    <footer className="border-t border-white/10 bg-ink text-white">
      <div className="container grid gap-12 py-16 md:grid-cols-2 lg:grid-cols-4">
        <div className="space-y-4">
          <div className="flex items-center gap-3">
            <BrandMark className="shadow-none" />
            <span className="font-display text-lg font-semibold">{site.name}</span>
          </div>
          <p className="max-w-xs text-sm leading-relaxed text-white/60">
            {site.description}
          </p>
        </div>

        <div>
          <h3 className="font-display text-sm font-semibold uppercase tracking-[0.18em] text-gold-300">
            Explore
          </h3>
          <ul className="mt-5 space-y-3 text-sm">
            {navLinks.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  className="text-white/65 transition-colors hover:text-white"
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h3 className="font-display text-sm font-semibold uppercase tracking-[0.18em] text-gold-300">
            We Build For
          </h3>
          <ul className="mt-5 space-y-3 text-sm text-white/65">
            {services.map((service) => (
              <li key={service}>{service}</li>
            ))}
          </ul>
        </div>

        <div>
          <h3 className="font-display text-sm font-semibold uppercase tracking-[0.18em] text-gold-300">
            Get In Touch
          </h3>
          <ul className="mt-5 space-y-4 text-sm">
            <li>
              <a
                href={whatsappLink(DEFAULT_WHATSAPP_MESSAGE)}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 text-white/65 transition-colors hover:text-white"
              >
                <WhatsAppIcon className="size-4 text-whatsapp" />
                {WHATSAPP_DISPLAY}
              </a>
            </li>
            <li>
              <a
                href={`tel:+${WHATSAPP_NUMBER}`}
                className="flex items-center gap-3 text-white/65 transition-colors hover:text-white"
              >
                <Phone className="size-4 text-gold-300" />
                Call Us
              </a>
            </li>
            <li>
              <a
                href={`mailto:${site.email}`}
                className="flex items-center gap-3 break-all text-white/65 transition-colors hover:text-white"
              >
                <Mail className="size-4 text-gold-300" />
                {site.email}
              </a>
            </li>
          </ul>
        </div>
      </div>

      <div className="border-t border-white/10">
        <div className="container flex flex-col items-center justify-between gap-3 py-6 text-xs text-white/50 sm:flex-row">
          <p>
            © {new Date().getFullYear()} · {site.tagline}
          </p>
          <p>Designed &amp; developed for fashion businesses across India.</p>
        </div>
      </div>
    </footer>
  );
}
