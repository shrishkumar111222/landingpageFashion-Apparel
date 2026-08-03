"use client";

import * as React from "react";
import { motion } from "framer-motion";
import { ArrowRight, Check, Sparkles } from "lucide-react";

import { FashionMockup } from "@/components/shared/fashion-mockup";
import { WhatsAppIcon } from "@/components/shared/whatsapp-icon";
import { Button } from "@/components/ui/button";
import {
  DEFAULT_WHATSAPP_MESSAGE,
  audienceTypes,
  heroTrustBadges,
  stats,
  whatsappLink,
} from "@/lib/site-config";

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.65, delay: i * 0.09, ease: [0.22, 1, 0.36, 1] },
  }),
};

export function Hero() {
  return (
    <section
      id="top"
      className="relative overflow-hidden bg-white pt-28 sm:pt-32 lg:pt-36"
    >
      {/* Soft brand wash */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 -z-10"
      >
        <div className="absolute inset-x-0 top-0 h-[560px] bg-[radial-gradient(80%_60%_at_70%_0%,rgba(176,134,74,0.12),transparent_65%)]" />
        <div className="absolute inset-x-0 top-0 h-[420px] bg-[radial-gradient(60%_50%_at_10%_10%,rgba(156,70,104,0.08),transparent_70%)]" />
        <div className="absolute inset-0 bg-grid opacity-[0.55] [mask-image:radial-gradient(70%_50%_at_50%_0%,black,transparent)]" />
      </div>

      <div className="container">
        <div className="grid items-center gap-14 lg:grid-cols-[1.05fr_1fr] lg:gap-10">
          <div>
            <motion.div
              custom={0}
              initial="hidden"
              animate="visible"
              variants={fadeUp}
            >
              <span className="inline-flex items-center gap-2 rounded-full border border-gold-200 bg-gold-50 px-4 py-1.5 text-[0.7rem] font-semibold uppercase tracking-[0.18em] text-gold-700">
                <Sparkles className="size-3.5" />
                Websites For Fashion &amp; Apparel Businesses
              </span>
            </motion.div>

            <motion.h1
              custom={1}
              initial="hidden"
              animate="visible"
              variants={fadeUp}
              className="mt-6 font-display text-4xl font-semibold leading-[1.08] tracking-tight text-ink sm:text-5xl lg:text-[3.65rem]"
            >
              Fashion Sells On First Impressions.
              <span className="mt-2 block text-gradient-gold">
                Make Yours Unforgettable.
              </span>
            </motion.h1>

            <motion.p
              custom={2}
              initial="hidden"
              animate="visible"
              variants={fadeUp}
              className="mt-6 max-w-xl text-base leading-relaxed text-ink-muted sm:text-lg"
            >
              Your customers decide whether to visit your store in seconds. A
              professional website helps showcase your collections, build trust and
              attract more customers before they ever walk through your door.
            </motion.p>

            <motion.ul
              custom={3}
              initial="hidden"
              animate="visible"
              variants={fadeUp}
              className="mt-8 grid max-w-xl grid-cols-1 gap-x-6 gap-y-3 sm:grid-cols-2"
            >
              {heroTrustBadges.map((badge) => (
                <li
                  key={badge}
                  className="flex items-center gap-2.5 text-sm font-medium text-ink-soft"
                >
                  <span className="flex size-5 shrink-0 items-center justify-center rounded-full bg-gold-100 text-gold-700">
                    <Check className="size-3" strokeWidth={3} />
                  </span>
                  {badge}
                </li>
              ))}
            </motion.ul>

            <motion.div
              custom={4}
              initial="hidden"
              animate="visible"
              variants={fadeUp}
              className="mt-9 flex flex-col gap-3 sm:flex-row sm:items-center"
            >
              <Button asChild size="lg" variant="gold" className="group">
                <a href="#demo-form">
                  Request Free Demo
                  <ArrowRight className="transition-transform duration-300 group-hover:translate-x-1" />
                </a>
              </Button>
              <Button asChild size="lg" variant="whatsapp">
                <a
                  href={whatsappLink(DEFAULT_WHATSAPP_MESSAGE)}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <WhatsAppIcon className="size-[1.15rem]" />
                  Chat On WhatsApp
                </a>
              </Button>
            </motion.div>

            <motion.dl
              custom={5}
              initial="hidden"
              animate="visible"
              variants={fadeUp}
              className="mt-11 grid max-w-lg grid-cols-2 gap-6 border-t border-border pt-7 sm:grid-cols-4 sm:gap-4"
            >
              {stats.map((stat) => (
                <div key={stat.label}>
                  <dt className="font-display text-xl font-semibold text-ink sm:text-2xl">
                    {stat.value}
                  </dt>
                  <dd className="mt-1 text-[0.7rem] uppercase tracking-[0.12em] text-ink-muted">
                    {stat.label}
                  </dd>
                </div>
              ))}
            </motion.dl>
          </div>

          <div className="lg:pl-4">
            <FashionMockup />
          </div>
        </div>
      </div>

      {/* Audience marquee */}
      <div className="relative mt-20 border-y border-border bg-[#FBFAF8] py-4 lg:mt-24">
        <div className="flex overflow-hidden [mask-image:linear-gradient(to_right,transparent,black_12%,black_88%,transparent)]">
          <div className="flex shrink-0 animate-marquee gap-10 pr-10">
            {[...audienceTypes, ...audienceTypes].map((type, index) => (
              <span
                key={`${type}-${index}`}
                className="flex shrink-0 items-center gap-3 whitespace-nowrap text-xs font-semibold uppercase tracking-[0.18em] text-ink-muted"
              >
                <span className="size-1 rounded-full bg-gold-400" aria-hidden="true" />
                {type}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
