"use client";

import * as React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { ArrowUpRight, Check, Lock } from "lucide-react";

import { RevealChild, RevealGroup } from "@/components/shared/reveal";
import { SectionHeading } from "@/components/shared/section-heading";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { demoStyles, type DemoStyle } from "@/lib/site-config";
import { assetPath } from "@/lib/utils";

/**
 * Real screenshot of the live demo inside a browser frame. The capture is
 * taller than the window, so hovering pans down the page to reveal more of the
 * design — skipped entirely when the visitor prefers reduced motion.
 */
function DemoPreview({ style }: { style: DemoStyle }) {
  return (
    <div className="relative overflow-hidden rounded-xl border border-ink/[0.07] bg-white shadow-sm">
      <div className="flex items-center gap-2 border-b border-ink/[0.07] bg-[#F7F5F2] px-3 py-2">
        <div className="flex gap-1" aria-hidden="true">
          <span className="size-1.5 rounded-full bg-[#FF5F57]" />
          <span className="size-1.5 rounded-full bg-[#FEBC2E]" />
          <span className="size-1.5 rounded-full bg-[#28C840]" />
        </div>
        <div className="flex flex-1 items-center gap-1.5 rounded bg-white px-2 py-1 text-[0.5rem] text-ink-muted shadow-sm">
          <Lock className="size-2 text-emerald-600" />
          <span className="truncate">{style.previewHost}</span>
        </div>
      </div>

      <div className="relative aspect-[16/11] overflow-hidden bg-[#F6F4F1]">
        <Image
          src={assetPath(style.preview)}
          alt={`Live website demo — ${style.title}`}
          width={1440}
          height={2000}
          sizes="(max-width: 767px) 100vw, (max-width: 1023px) 50vw, 400px"
          className="absolute inset-x-0 top-0 w-full transition-transform [transition-duration:2200ms] ease-out motion-safe:group-hover:-translate-y-[50.5%]"
        />
      </div>
    </div>
  );
}

function DemoCard({ style, index }: { style: DemoStyle; index: number }) {
  return (
    <RevealChild as="article" className="h-full">
      <motion.div
        whileHover={{ y: -10 }}
        transition={{ type: "spring", stiffness: 280, damping: 22 }}
        className="group relative flex h-full flex-col overflow-hidden rounded-3xl border border-border bg-white p-5 shadow-soft transition-shadow duration-500 hover:shadow-lift sm:p-6"
      >
        {/* Gradient rim that lights up on hover */}
        <span
          aria-hidden="true"
          className="pointer-events-none absolute inset-0 rounded-3xl opacity-0 transition-opacity duration-500 group-hover:opacity-100"
          style={{
            background: `linear-gradient(140deg, ${style.palette.from}14, transparent 45%, ${style.palette.to}1F)`,
          }}
        />

        {style.badge ? (
          <Badge variant="trending" className="absolute right-5 top-5 z-10 shadow-gold">
            {style.badge}
          </Badge>
        ) : null}

        <div className="relative">
          <DemoPreview style={style} />
        </div>

        <div className="relative mt-6 flex flex-1 flex-col">
          <p className="text-[0.65rem] font-semibold uppercase tracking-[0.2em] text-gold-600">
            Style 0{index + 1}
          </p>
          <h3 className="mt-2 font-display text-xl font-semibold leading-snug tracking-tight text-ink sm:text-[1.35rem]">
            {style.title}
          </h3>
          <p className="mt-3 text-sm leading-relaxed text-ink-muted">
            {style.summary}
          </p>

          <div className="mt-5">
            <p className="text-[0.65rem] font-semibold uppercase tracking-[0.16em] text-ink-muted">
              Best For
            </p>
            <ul className="mt-3 space-y-2">
              {style.bestFor.map((item) => (
                <li
                  key={item}
                  className="flex items-start gap-2.5 text-sm text-ink-soft"
                >
                  <span className="mt-0.5 flex size-4 shrink-0 items-center justify-center rounded-full bg-gold-100 text-gold-700">
                    <Check className="size-2.5" strokeWidth={3.5} />
                  </span>
                  {item}
                </li>
              ))}
            </ul>
          </div>

          {/* `mt-auto` keeps the demo buttons aligned across cards of unequal height */}
          <div className="mt-auto pt-7">
            <Button asChild className="w-full group/btn">
              <a href={style.href} target="_blank" rel="noopener noreferrer">
                View Live Demo
                <ArrowUpRight className="transition-transform duration-300 group-hover/btn:translate-x-0.5 group-hover/btn:-translate-y-0.5" />
              </a>
            </Button>
            <p className="mt-2.5 text-center text-[0.7rem] text-ink-muted">
              Opens in a new tab
            </p>
          </div>
        </div>
      </motion.div>
    </RevealChild>
  );
}

export function WebsiteStyles() {
  return (
    <section id="demos" className="relative bg-white py-20 sm:py-24 lg:py-28">
      <div className="container">
        <SectionHeading
          eyebrow="Choose Your Website Style"
          title="Choose A Design That Matches Your Brand"
          subtitle="Most fashion businesses choose one of these website styles. Every website is fully customized according to your brand identity, collections and business goals."
        />

        <RevealGroup
          className="mt-14 grid gap-6 md:grid-cols-2 lg:grid-cols-3 lg:gap-7"
          stagger={0.12}
        >
          {demoStyles.map((style, index) => (
            <DemoCard key={style.id} style={style} index={index} />
          ))}
        </RevealGroup>
      </div>
    </section>
  );
}
