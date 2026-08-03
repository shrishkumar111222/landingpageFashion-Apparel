import * as React from "react";
import {
  BadgeCheck,
  Megaphone,
  MessageSquareText,
  Search,
  Store,
  Trophy,
} from "lucide-react";

import { Reveal, RevealChild, RevealGroup } from "@/components/shared/reveal";
import { CtaButtons } from "@/components/shared/cta-buttons";
import { whyBenefits } from "@/lib/site-config";

const benefitIcons = [Store, BadgeCheck, MessageSquareText, Search, Megaphone, Trophy];

export function WhyWebsite() {
  return (
    <section id="why" className="relative overflow-hidden bg-[#FBFAF8] py-20 sm:py-24 lg:py-28">
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 bg-grid opacity-40 [mask-image:radial-gradient(60%_60%_at_50%_50%,black,transparent)]"
      />

      <div className="container relative">
        <div className="grid gap-14 lg:grid-cols-[0.95fr_1.05fr] lg:gap-16">
          <div className="lg:sticky lg:top-28 lg:self-start">
            <Reveal>
              <span className="eyebrow">
                <span className="h-px w-6 bg-current" aria-hidden="true" />
                Why Your Business Needs A Website
              </span>
            </Reveal>

            <Reveal delay={0.06}>
              <h2 className="mt-4 font-display text-3xl font-semibold leading-[1.14] tracking-tight text-ink sm:text-4xl lg:text-[2.75rem]">
                Your Competitors Are Being Discovered Online.
                <span className="block text-gradient-gold">Are You?</span>
              </h2>
            </Reveal>

            <Reveal delay={0.12}>
              <div className="mt-6 space-y-4 text-base leading-relaxed text-ink-muted">
                <p>
                  Today customers search online before visiting a fashion store. They
                  want to see your collections, latest arrivals and store credibility
                  before making a purchase decision.
                </p>
                <p className="border-l-2 border-gold-300 pl-5 font-medium text-ink-soft">
                  If your business isn&apos;t visible online, customers may never
                  discover your store.
                </p>
              </div>
            </Reveal>

            <Reveal delay={0.18}>
              <CtaButtons className="mt-8" size="default" />
            </Reveal>
          </div>

          <RevealGroup className="grid gap-4 sm:grid-cols-2" stagger={0.07}>
            {whyBenefits.map((benefit, index) => {
              const Icon = benefitIcons[index % benefitIcons.length];

              return (
                <RevealChild
                  key={benefit.title}
                  className="group rounded-2xl border border-border bg-white p-6 shadow-soft transition-all duration-500 hover:-translate-y-1.5 hover:border-gold-200 hover:shadow-lift"
                >
                  <span className="flex size-11 items-center justify-center rounded-xl bg-gold-50 text-gold-600 transition-colors duration-500 group-hover:bg-gold-sheen group-hover:text-white">
                    <Icon className="size-5" />
                  </span>
                  <h3 className="mt-5 font-display text-lg font-semibold tracking-tight text-ink">
                    {benefit.title}
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed text-ink-muted">
                    {benefit.description}
                  </p>
                </RevealChild>
              );
            })}
          </RevealGroup>
        </div>
      </div>
    </section>
  );
}
