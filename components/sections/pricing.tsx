import * as React from "react";
import { Check } from "lucide-react";

import { CtaButtons } from "@/components/shared/cta-buttons";
import { Reveal, RevealChild, RevealGroup } from "@/components/shared/reveal";
import { SectionHeading } from "@/components/shared/section-heading";
import { pricingIncludes, processSteps } from "@/lib/site-config";

export function Pricing() {
  return (
    <section id="pricing" className="relative bg-white py-20 sm:py-24 lg:py-28">
      <div className="container">
        <SectionHeading
          eyebrow="Custom Pricing"
          title="Custom Websites For Every Fashion Business"
          subtitle="Every fashion brand has a unique identity. We create custom websites tailored to your collections, audience and business goals."
        />

        <Reveal delay={0.1} className="mt-14">
          <div className="relative overflow-hidden rounded-[2rem] border border-border bg-[#FBFAF8] p-1 shadow-soft">
            <div
              aria-hidden="true"
              className="pointer-events-none absolute inset-0 bg-[radial-gradient(70%_60%_at_85%_0%,rgba(176,134,74,0.16),transparent_60%)]"
            />

            <div className="relative grid gap-10 rounded-[1.75rem] bg-white p-7 sm:p-10 lg:grid-cols-[1fr_1.1fr] lg:gap-14 lg:p-12">
              <div className="flex flex-col justify-center">
                <span className="eyebrow">
                  <span className="h-px w-6 bg-current" aria-hidden="true" />
                  Tailored, Not Templated
                </span>
                <h3 className="mt-4 font-display text-2xl font-semibold leading-tight tracking-tight text-ink sm:text-3xl">
                  Pricing shaped around your store — not a fixed package.
                </h3>
                <p className="mt-4 text-base leading-relaxed text-ink-muted">
                  A single-location boutique and a multi-brand family store need very
                  different websites. Tell us about your collections and goals, and
                  you&apos;ll get a clear, honest quote with no hidden charges — plus a
                  free demo built around your brand before you commit.
                </p>

                <CtaButtons className="mt-8" size="default" />

                <p className="mt-5 text-xs text-ink-muted">
                  No obligation. No advance payment to see your demo.
                </p>
              </div>

              <div className="rounded-2xl border border-border bg-[#FBFAF8] p-6 sm:p-8">
                <p className="text-[0.7rem] font-semibold uppercase tracking-[0.18em] text-ink-muted">
                  Every Website Includes
                </p>
                <ul className="mt-6 grid gap-4 sm:grid-cols-2">
                  {pricingIncludes.map((item) => (
                    <li key={item} className="flex items-start gap-3 text-sm text-ink-soft">
                      <span className="mt-0.5 flex size-5 shrink-0 items-center justify-center rounded-full bg-gold-sheen text-white">
                        <Check className="size-3" strokeWidth={3.5} />
                      </span>
                      <span className="leading-relaxed">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </Reveal>

        <div className="mt-20">
          <Reveal>
            <h3 className="text-center font-display text-2xl font-semibold tracking-tight text-ink sm:text-3xl">
              How We Work
            </h3>
          </Reveal>

          <RevealGroup
            as="ol"
            className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-4"
            stagger={0.08}
          >
            {processSteps.map((step) => (
              <RevealChild
                as="li"
                key={step.step}
                className="group relative rounded-2xl border border-border bg-white p-6 shadow-soft transition-all duration-500 hover:-translate-y-1.5 hover:border-gold-200 hover:shadow-lift"
              >
                <span className="font-display text-3xl font-semibold text-gold-200 transition-colors duration-500 group-hover:text-gold-400">
                  {step.step}
                </span>
                <h4 className="mt-3 font-display text-lg font-semibold tracking-tight text-ink">
                  {step.title}
                </h4>
                <p className="mt-2 text-sm leading-relaxed text-ink-muted">
                  {step.description}
                </p>
              </RevealChild>
            ))}
          </RevealGroup>
        </div>
      </div>
    </section>
  );
}
