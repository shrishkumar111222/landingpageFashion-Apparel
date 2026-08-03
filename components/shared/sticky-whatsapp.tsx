"use client";

import * as React from "react";
import { AnimatePresence, motion } from "framer-motion";

import { WhatsAppIcon } from "@/components/shared/whatsapp-icon";
import { DEFAULT_WHATSAPP_MESSAGE, whatsappLink } from "@/lib/site-config";

/**
 * Floating WhatsApp entry point. Appears after the visitor scrolls past the
 * hero so it never competes with the primary hero call to action.
 */
export function StickyWhatsApp() {
  const [visible, setVisible] = React.useState(false);
  const [tooltipOpen, setTooltipOpen] = React.useState(false);

  React.useEffect(() => {
    const onScroll = () => setVisible(window.scrollY > 420);

    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <AnimatePresence>
      {visible ? (
        <motion.div
          initial={{ opacity: 0, scale: 0.6, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.6, y: 20 }}
          transition={{ type: "spring", stiffness: 260, damping: 20 }}
          className="fixed bottom-5 right-5 z-50 sm:bottom-7 sm:right-7"
        >
          <div className="relative flex items-center justify-end">
            <AnimatePresence>
              {tooltipOpen ? (
                <motion.span
                  initial={{ opacity: 0, x: 8 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: 8 }}
                  className="pointer-events-none absolute right-full mr-3 hidden whitespace-nowrap rounded-full bg-ink px-4 py-2 text-xs font-semibold text-white shadow-lift sm:block"
                >
                  Chat On WhatsApp
                </motion.span>
              ) : null}
            </AnimatePresence>

            <a
              href={whatsappLink(DEFAULT_WHATSAPP_MESSAGE)}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Chat On WhatsApp"
              title="Chat On WhatsApp"
              onMouseEnter={() => setTooltipOpen(true)}
              onMouseLeave={() => setTooltipOpen(false)}
              onFocus={() => setTooltipOpen(true)}
              onBlur={() => setTooltipOpen(false)}
              className="relative flex size-14 items-center justify-center rounded-full bg-whatsapp text-white shadow-lift transition-transform duration-300 hover:scale-110 focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-whatsapp/30 sm:size-16"
            >
              <span
                className="absolute inset-0 rounded-full bg-whatsapp/60 animate-pulse-ring"
                aria-hidden="true"
              />
              <WhatsAppIcon className="relative size-7 sm:size-8" />
            </a>
          </div>
        </motion.div>
      ) : null}
    </AnimatePresence>
  );
}
