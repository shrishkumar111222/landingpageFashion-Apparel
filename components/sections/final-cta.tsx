import * as React from "react";

import { CtaButtons } from "@/components/shared/cta-buttons";
import { Reveal } from "@/components/shared/reveal";
import { WHATSAPP_DISPLAY } from "@/lib/site-config";

export function FinalCta() {
  return (
    <section className="relative overflow-hidden bg-ink py-20 text-white sm:py-24 lg:py-28">
      <div aria-hidden="true" className="pointer-events-none absolute inset-0">
        <div className="absolute left-1/2 top-0 size-[560px] -translate-x-1/2 rounded-full bg-gold-500/14 blur-3xl" />
        <div className="absolute bottom-0 right-0 size-[320px] rounded-full bg-[#9C4668]/14 blur-3xl" />
      </div>

      <div className="container relative">
        <div className="mx-auto max-w-3xl text-center">
          <Reveal>
            <span className="eyebrow text-gold-300">
              <span className="h-px w-6 bg-current" aria-hidden="true" />
              Let&apos;s Begin
            </span>
          </Reveal>

          <Reveal delay={0.06}>
            <h2 className="mt-5 font-display text-3xl font-semibold leading-[1.12] tracking-tight sm:text-4xl lg:text-[3rem]">
              Ready To Elevate Your Fashion Brand Online?
            </h2>
          </Reveal>

          <Reveal delay={0.12}>
            <p className="mx-auto mt-6 max-w-2xl text-base leading-relaxed text-white/70 sm:text-lg">
              Showcase your collections, attract more customers and build a
              professional online presence with a custom fashion website.
            </p>
          </Reveal>

          <Reveal delay={0.18}>
            <CtaButtons
              className="mt-9 justify-center"
              primaryVariant="light"
              whatsappMessage="Hi! I'm ready to build a website for my fashion business. Please share the details."
            />
          </Reveal>

          <Reveal delay={0.24}>
            <p className="mt-8 text-sm text-white/50">
              Or call us directly at{" "}
              <span className="font-semibold text-white/80">{WHATSAPP_DISPLAY}</span>
            </p>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
