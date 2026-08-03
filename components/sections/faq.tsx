"use client";

import * as React from "react";

import { Reveal } from "@/components/shared/reveal";
import { SectionHeading } from "@/components/shared/section-heading";
import { WhatsAppIcon } from "@/components/shared/whatsapp-icon";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Button } from "@/components/ui/button";
import { faqs, whatsappLink } from "@/lib/site-config";

export function Faq() {
  return (
    <section id="faq" className="relative bg-[#FBFAF8] py-20 sm:py-24 lg:py-28">
      <div className="container">
        <SectionHeading
          eyebrow="FAQ"
          title="Questions Fashion Owners Ask Us"
          subtitle="Straight answers, before you spend a rupee."
        />

        <div className="mx-auto mt-14 max-w-3xl">
          <Reveal>
            <Accordion type="single" collapsible className="space-y-3">
              {faqs.map((faq, index) => (
                <AccordionItem key={faq.question} value={`item-${index}`}>
                  <AccordionTrigger>{faq.question}</AccordionTrigger>
                  <AccordionContent>{faq.answer}</AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </Reveal>

          <Reveal delay={0.12}>
            <div className="mt-10 flex flex-col items-center gap-4 rounded-2xl border border-border bg-white px-6 py-8 text-center shadow-soft">
              <p className="font-display text-lg font-semibold text-ink">
                Still have a question?
              </p>
              <p className="max-w-md text-sm leading-relaxed text-ink-muted">
                Message us on WhatsApp — you&apos;ll usually get a reply within a few
                minutes during business hours.
              </p>
              <Button asChild variant="whatsapp">
                <a
                  href={whatsappLink(
                    "Hi! I have a question about building a website for my fashion business.",
                  )}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <WhatsAppIcon className="size-[1.15rem]" />
                  Ask On WhatsApp
                </a>
              </Button>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
