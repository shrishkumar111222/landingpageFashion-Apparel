"use client";

import * as React from "react";
import { motion } from "framer-motion";
import {
  BookOpen,
  Building2,
  Grid2x2,
  Instagram,
  Quote,
  ScrollText,
  Sparkles,
  Star,
  type LucideIcon,
} from "lucide-react";

import { RevealChild, RevealGroup } from "@/components/shared/reveal";
import { SectionHeading } from "@/components/shared/section-heading";
import { trustCards } from "@/lib/site-config";

const cardIcons: LucideIcon[] = [
  Building2,
  Grid2x2,
  BookOpen,
  Quote,
  Instagram,
  Star,
  ScrollText,
  Sparkles,
];

export function TrustBuilding() {
  return (
    <section className="relative bg-[#FBFAF8] py-20 sm:py-24 lg:py-28">
      <div className="container">
        <SectionHeading
          eyebrow="Trust & Brand Building"
          title="Build Trust Before Customers Visit Your Store"
          subtitle="Trust is what turns a search result into a shopper standing at your counter. These sections do that work for you, quietly, around the clock."
        />

        <RevealGroup
          as="ul"
          className="mt-14 grid gap-4 sm:grid-cols-2 lg:grid-cols-4"
          stagger={0.06}
        >
          {trustCards.map((card, index) => {
            const Icon = cardIcons[index % cardIcons.length];

            return (
              <RevealChild as="li" key={card.title}>
                <motion.div
                  whileHover={{ y: -8 }}
                  transition={{ type: "spring", stiffness: 300, damping: 22 }}
                  className="group relative flex h-full flex-col overflow-hidden rounded-2xl border border-border bg-white p-6 shadow-soft transition-shadow duration-500 hover:shadow-lift"
                >
                  <span
                    aria-hidden="true"
                    className="absolute right-4 top-4 font-display text-4xl font-semibold text-ink/[0.045] transition-colors duration-500 group-hover:text-gold-400/25"
                  >
                    {String(index + 1).padStart(2, "0")}
                  </span>

                  <span className="flex size-11 items-center justify-center rounded-xl bg-gold-50 text-gold-600 ring-1 ring-gold-100 transition-all duration-500 group-hover:bg-gold-sheen group-hover:text-white group-hover:ring-transparent">
                    <Icon className="size-5" strokeWidth={1.7} />
                  </span>

                  <h3 className="mt-5 font-display text-lg font-semibold tracking-tight text-ink">
                    {card.title}
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed text-ink-muted">
                    {card.description}
                  </p>
                </motion.div>
              </RevealChild>
            );
          })}
        </RevealGroup>
      </div>
    </section>
  );
}
