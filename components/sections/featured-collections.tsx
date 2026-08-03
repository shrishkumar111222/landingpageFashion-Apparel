"use client";

import * as React from "react";
import { motion } from "framer-motion";
import {
  Crown,
  Gem,
  Heart,
  PartyPopper,
  Sparkles,
  Star,
  Sun,
  Venus,
  Wind,
  type LucideIcon,
  Baby,
  Flower2,
  Shirt,
} from "lucide-react";

import { RevealChild, RevealGroup } from "@/components/shared/reveal";
import { SectionHeading } from "@/components/shared/section-heading";
import { featuredCollections } from "@/lib/site-config";

const iconMap: Record<string, LucideIcon> = {
  shirt: Shirt,
  venus: Venus,
  baby: Baby,
  heart: Heart,
  wind: Wind,
  flower: Flower2,
  sparkle: Sparkles,
  party: PartyPopper,
  sun: Sun,
  crown: Crown,
  gem: Gem,
  star: Star,
};

export function FeaturedCollections() {
  return (
    <section id="collections" className="relative bg-white py-20 sm:py-24 lg:py-28">
      <div className="container">
        <SectionHeading
          eyebrow="Featured Collections"
          title="Every Collection, Beautifully Presented"
          subtitle="Whatever you stock, your website organises it into clear, browsable collections that help customers find exactly what they came looking for."
        />

        <RevealGroup
          as="ul"
          className="mt-14 grid grid-cols-2 gap-3 sm:grid-cols-3 sm:gap-4 lg:grid-cols-4"
          stagger={0.05}
        >
          {featuredCollections.map((collection) => {
            const Icon = iconMap[collection.icon] ?? Sparkles;

            return (
              <RevealChild as="li" key={collection.label}>
                <motion.div
                  whileHover={{ scale: 1.04 }}
                  transition={{ type: "spring", stiffness: 320, damping: 20 }}
                  className="group relative flex h-full flex-col items-center justify-center gap-4 overflow-hidden rounded-2xl border border-border bg-white px-4 py-8 text-center shadow-soft transition-shadow duration-500 hover:border-gold-200 hover:shadow-lift sm:px-5 sm:py-9"
                >
                  <span
                    aria-hidden="true"
                    className="pointer-events-none absolute inset-x-0 bottom-0 h-0 bg-gradient-to-t from-gold-50 to-transparent transition-all duration-500 group-hover:h-full"
                  />
                  <span className="relative flex size-14 items-center justify-center rounded-2xl bg-[#FBF7F0] text-gold-600 ring-1 ring-gold-100 transition-all duration-500 group-hover:bg-gold-sheen group-hover:text-white group-hover:ring-transparent">
                    <Icon className="size-6" strokeWidth={1.6} />
                  </span>
                  <span className="relative text-sm font-semibold leading-snug text-ink">
                    {collection.label}
                  </span>
                </motion.div>
              </RevealChild>
            );
          })}
        </RevealGroup>
      </div>
    </section>
  );
}
