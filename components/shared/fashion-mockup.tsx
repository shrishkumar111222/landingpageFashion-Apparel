"use client";

import * as React from "react";
import { motion, useReducedMotion } from "framer-motion";
import { Heart, Lock, MapPin, Star } from "lucide-react";

import { GarmentArt, type GarmentKind } from "@/components/shared/garment-art";
import { WhatsAppIcon } from "@/components/shared/whatsapp-icon";

const previewCards: {
  kind: GarmentKind;
  label: string;
  meta: string;
  tint: string;
  art: string;
}[] = [
  {
    kind: "lehenga",
    label: "Bridal Lehenga",
    meta: "Wedding Edit",
    tint: "from-[#F7E7EC] to-[#EFD3DC]",
    art: "text-[#9C4668]",
  },
  {
    kind: "saree",
    label: "Silk Saree",
    meta: "Festive Drop",
    tint: "from-[#F6EEDF] to-[#EBD9BC]",
    art: "text-[#B0864A]",
  },
  {
    kind: "shirt",
    label: "Men's Formal",
    meta: "New Arrival",
    tint: "from-[#E8EEF6] to-[#D3DFEE]",
    art: "text-[#3A5A80]",
  },
  {
    kind: "dress",
    label: "Party Wear",
    meta: "Trending",
    tint: "from-[#EDE9F7] to-[#DCD4EE]",
    art: "text-[#5B4B9C]",
  },
  {
    kind: "kurta",
    label: "Ethnic Kurta",
    meta: "Best Seller",
    tint: "from-[#E7F1EC] to-[#CFE3D8]",
    art: "text-[#2F6B52]",
  },
  {
    kind: "tee",
    label: "Kids Casual",
    meta: "Season Pick",
    tint: "from-[#FBEDE3] to-[#F4D9C5]",
    art: "text-[#C4703A]",
  },
];

/**
 * Hero visual: a browser-framed fashion storefront mockup with a companion
 * phone view and floating proof elements. Entirely CSS/SVG — no image assets.
 */
export function FashionMockup() {
  const shouldReduceMotion = useReducedMotion();

  const float = (offset: number, delay = 0) =>
    shouldReduceMotion
      ? {}
      : {
          animate: { y: [0, -offset, 0] },
          transition: {
            duration: 5 + delay,
            repeat: Infinity,
            ease: "easeInOut" as const,
            delay,
          },
        };

  return (
    <div className="relative mx-auto w-full max-w-[620px]">
      {/* Ambient glow behind the composition */}
      <div
        className="absolute -inset-8 -z-10 rounded-[3rem] bg-[radial-gradient(60%_60%_at_50%_40%,rgba(176,134,74,0.20),transparent_70%)] blur-2xl"
        aria-hidden="true"
      />

      <motion.div
        initial={{ opacity: 0, y: 40, rotateX: 8 }}
        animate={{ opacity: 1, y: 0, rotateX: 0 }}
        transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1], delay: 0.15 }}
        className="overflow-hidden rounded-2xl border border-ink/10 bg-white shadow-lift"
      >
        {/* Browser chrome */}
        <div className="flex items-center gap-3 border-b border-ink/10 bg-[#F7F5F2] px-4 py-3">
          <div className="flex gap-1.5" aria-hidden="true">
            <span className="size-2.5 rounded-full bg-[#FF5F57]" />
            <span className="size-2.5 rounded-full bg-[#FEBC2E]" />
            <span className="size-2.5 rounded-full bg-[#28C840]" />
          </div>
          <div className="flex flex-1 items-center gap-2 rounded-md bg-white px-3 py-1.5 text-[0.6rem] text-ink-muted shadow-sm">
            <Lock className="size-2.5 text-emerald-600" />
            <span className="truncate">www.yourfashionstore.com</span>
          </div>
        </div>

        {/* Store header */}
        <div className="flex items-center justify-between border-b border-ink/[0.07] px-5 py-3">
          <span className="font-display text-sm font-semibold tracking-tight text-ink">
            YOUR STORE
          </span>
          <div className="hidden gap-4 text-[0.6rem] font-medium uppercase tracking-[0.12em] text-ink-muted sm:flex">
            <span>Women</span>
            <span>Men</span>
            <span>Kids</span>
            <span>Bridal</span>
          </div>
          <span className="rounded-full bg-ink px-3 py-1 text-[0.55rem] font-semibold uppercase tracking-wider text-white">
            Visit Store
          </span>
        </div>

        {/* Editorial banner */}
        <div className="relative overflow-hidden bg-gradient-to-br from-[#1B1B22] via-[#2E2A33] to-[#5B4436] px-5 py-7 sm:px-7 sm:py-9">
          <div
            className="absolute -right-10 -top-10 size-40 rounded-full bg-gold-400/25 blur-2xl"
            aria-hidden="true"
          />
          <p className="text-[0.55rem] font-semibold uppercase tracking-[0.3em] text-gold-300">
            Festive Collection 2026
          </p>
          <h3 className="mt-2 max-w-[16rem] font-display text-xl leading-tight text-white sm:text-2xl">
            New Arrivals In Store Now
          </h3>
          <div className="mt-4 flex flex-wrap items-center gap-2">
            <span className="rounded-full bg-white px-3.5 py-1.5 text-[0.6rem] font-semibold text-ink">
              View Collection
            </span>
            <span className="flex items-center gap-1.5 rounded-full bg-whatsapp px-3.5 py-1.5 text-[0.6rem] font-semibold text-white">
              <WhatsAppIcon className="size-2.5" />
              Enquire Now
            </span>
          </div>
        </div>

        {/* Collection grid */}
        <div className="grid grid-cols-3 gap-2.5 p-4 sm:gap-3 sm:p-5">
          {previewCards.map((card, index) => (
            <motion.div
              key={card.label}
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.45 + index * 0.07, duration: 0.5 }}
              className="group overflow-hidden rounded-xl border border-ink/[0.06] bg-white"
            >
              <div
                className={`relative flex aspect-[3/4] items-center justify-center bg-gradient-to-br ${card.tint}`}
              >
                <GarmentArt
                  kind={card.kind}
                  className={`h-[62%] ${card.art} opacity-90 transition-transform duration-500 group-hover:scale-105`}
                />
                <span className="absolute right-1.5 top-1.5 flex size-5 items-center justify-center rounded-full bg-white/80 text-ink-muted">
                  <Heart className="size-2.5" />
                </span>
              </div>
              <div className="px-2 py-2">
                <p className="truncate text-[0.6rem] font-semibold text-ink">
                  {card.label}
                </p>
                <p className="truncate text-[0.5rem] uppercase tracking-wider text-gold-600">
                  {card.meta}
                </p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Store footer strip */}
        <div className="flex items-center justify-between gap-2 border-t border-ink/[0.07] bg-[#FBFAF8] px-5 py-3 text-[0.55rem] text-ink-muted">
          <span className="flex items-center gap-1.5">
            <MapPin className="size-2.5 text-gold-600" />
            Store Location &amp; Timings
          </span>
          <span className="flex items-center gap-1">
            {Array.from({ length: 5 }).map((_, i) => (
              <Star key={i} className="size-2.5 fill-gold-400 text-gold-400" />
            ))}
            <span className="ml-1 font-semibold text-ink">4.9</span>
          </span>
        </div>
      </motion.div>

      {/* Floating phone — mobile responsive proof */}
      <motion.div
        initial={{ opacity: 0, x: -30, y: 20 }}
        animate={{ opacity: 1, x: 0, y: 0 }}
        transition={{ duration: 0.8, delay: 0.5, ease: [0.22, 1, 0.36, 1] }}
        className="absolute -bottom-10 -left-4 hidden w-[130px] sm:block lg:-left-10 lg:w-[150px]"
      >
        <motion.div
          {...float(10, 0.4)}
          className="overflow-hidden rounded-[1.6rem] border-[5px] border-ink bg-white shadow-lift"
        >
          <div className="flex justify-center bg-ink pb-1.5 pt-1">
            <span className="h-1 w-8 rounded-full bg-white/40" aria-hidden="true" />
          </div>
          <div className="bg-gradient-to-br from-[#2E2A33] to-[#5B4436] px-2.5 py-3">
            <p className="text-[0.4rem] font-semibold uppercase tracking-[0.2em] text-gold-300">
              Boutique
            </p>
            <p className="font-display text-[0.65rem] leading-tight text-white">
              Shop The Look
            </p>
          </div>
          <div className="grid grid-cols-2 gap-1 p-1.5">
            {previewCards.slice(0, 4).map((card) => (
              <div
                key={`m-${card.label}`}
                className={`flex aspect-square items-center justify-center rounded-md bg-gradient-to-br ${card.tint}`}
              >
                <GarmentArt kind={card.kind} className={`h-[58%] ${card.art}`} />
              </div>
            ))}
          </div>
          <div className="flex items-center justify-center gap-1 bg-whatsapp py-1.5 text-[0.4rem] font-bold text-white">
            <WhatsAppIcon className="size-2" />
            CHAT NOW
          </div>
        </motion.div>
      </motion.div>

      {/* Floating lead notification */}
      <motion.div
        initial={{ opacity: 0, x: 30, y: -10 }}
        animate={{ opacity: 1, x: 0, y: 0 }}
        transition={{ duration: 0.8, delay: 0.7, ease: [0.22, 1, 0.36, 1] }}
        className="absolute -right-3 top-24 hidden lg:block"
      >
        <motion.div
          {...float(12, 0.9)}
          className="flex items-center gap-3 rounded-2xl border border-ink/10 bg-white/95 px-4 py-3 shadow-lift backdrop-blur"
        >
          <span className="flex size-9 items-center justify-center rounded-full bg-whatsapp/12 text-whatsapp">
            <WhatsAppIcon className="size-4" />
          </span>
          <div>
            <p className="text-[0.7rem] font-semibold text-ink">New Enquiry</p>
            <p className="text-[0.6rem] text-ink-muted">Bridal lehenga · Just now</p>
          </div>
        </motion.div>
      </motion.div>

      {/* Floating rating chip */}
      <motion.div
        initial={{ opacity: 0, scale: 0.85 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.6, delay: 0.9 }}
        className="absolute -right-5 bottom-20 hidden lg:block"
      >
        <motion.div
          {...float(9, 1.4)}
          className="rounded-2xl border border-ink/10 bg-white/95 px-4 py-3 text-center shadow-lift backdrop-blur"
        >
          <p className="font-display text-lg font-semibold text-ink">100%</p>
          <p className="text-[0.55rem] uppercase tracking-[0.14em] text-ink-muted">
            Custom Design
          </p>
        </motion.div>
      </motion.div>
    </div>
  );
}
