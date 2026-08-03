"use client";

import * as React from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Menu, X } from "lucide-react";

import { Button } from "@/components/ui/button";
import { BrandMark } from "@/components/shared/brand-mark";
import { WhatsAppIcon } from "@/components/shared/whatsapp-icon";
import {
  DEFAULT_WHATSAPP_MESSAGE,
  navLinks,
  site,
  whatsappLink,
} from "@/lib/site-config";
import { cn } from "@/lib/utils";

export function SiteHeader() {
  const [scrolled, setScrolled] = React.useState(false);
  const [menuOpen, setMenuOpen] = React.useState(false);

  React.useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 16);

    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Prevent the page behind the mobile sheet from scrolling.
  React.useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [menuOpen]);

  return (
    <header
      className={cn(
        "fixed inset-x-0 top-0 z-50 transition-all duration-300",
        scrolled
          ? "border-b border-border/70 bg-white/85 backdrop-blur-xl shadow-soft"
          : "border-b border-transparent bg-transparent",
      )}
    >
      <div className="container flex h-[72px] items-center justify-between gap-4">
        <a href="#top" className="group flex items-center gap-3">
          <BrandMark />
          <span className="flex flex-col leading-none">
            <span className="font-display text-base font-semibold tracking-tight text-ink">
              {site.name}
            </span>
            <span className="mt-1 hidden text-[0.65rem] font-medium uppercase tracking-[0.18em] text-ink-muted sm:block">
              For Fashion &amp; Apparel Businesses
            </span>
          </span>
        </a>

        <nav className="hidden items-center gap-1 lg:flex" aria-label="Primary">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="relative rounded-full px-4 py-2 text-sm font-medium text-ink-muted transition-colors hover:text-ink"
            >
              {link.label}
            </a>
          ))}
        </nav>

        <div className="hidden items-center gap-2 md:flex">
          <Button asChild variant="outline" size="sm">
            <a
              href={whatsappLink(DEFAULT_WHATSAPP_MESSAGE)}
              target="_blank"
              rel="noopener noreferrer"
            >
              <WhatsAppIcon className="size-4" />
              WhatsApp
            </a>
          </Button>
          <Button asChild variant="gold" size="sm">
            <a href="#demo-form">Request Free Demo</a>
          </Button>
        </div>

        <button
          type="button"
          onClick={() => setMenuOpen((open) => !open)}
          aria-label={menuOpen ? "Close menu" : "Open menu"}
          aria-expanded={menuOpen}
          className="flex size-11 items-center justify-center rounded-xl border border-border bg-white text-ink shadow-soft transition-colors hover:bg-muted md:hidden"
        >
          {menuOpen ? <X className="size-5" /> : <Menu className="size-5" />}
        </button>
      </div>

      <AnimatePresence>
        {menuOpen ? (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.28, ease: [0.22, 1, 0.36, 1] }}
            className="overflow-hidden border-t border-border bg-white md:hidden"
          >
            <nav className="container flex flex-col gap-1 py-4" aria-label="Mobile">
              {navLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={() => setMenuOpen(false)}
                  className="rounded-xl px-4 py-3 text-sm font-medium text-ink-soft transition-colors hover:bg-muted"
                >
                  {link.label}
                </a>
              ))}

              <div className="mt-3 flex flex-col gap-2">
                <Button asChild variant="gold" onClick={() => setMenuOpen(false)}>
                  <a href="#demo-form">Request Free Demo</a>
                </Button>
                <Button asChild variant="whatsapp">
                  <a
                    href={whatsappLink(DEFAULT_WHATSAPP_MESSAGE)}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <WhatsAppIcon className="size-[1.15rem]" />
                    Chat On WhatsApp
                  </a>
                </Button>
              </div>
            </nav>
          </motion.div>
        ) : null}
      </AnimatePresence>
    </header>
  );
}
