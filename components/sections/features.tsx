import * as React from "react";
import {
  BookOpen,
  Images,
  Instagram,
  Mail,
  Map,
  MapPin,
  MessageCircle,
  RefreshCw,
  Search,
  Share2,
  Smartphone,
  Star,
  Zap,
  type LucideIcon,
} from "lucide-react";

import { RevealChild, RevealGroup } from "@/components/shared/reveal";
import { SectionHeading } from "@/components/shared/section-heading";
import { features } from "@/lib/site-config";
import { cn } from "@/lib/utils";

const iconMap: Record<string, LucideIcon> = {
  smartphone: Smartphone,
  message: MessageCircle,
  pin: MapPin,
  map: Map,
  gallery: Images,
  star: Star,
  book: BookOpen,
  instagram: Instagram,
  search: Search,
  mail: Mail,
  zap: Zap,
  refresh: RefreshCw,
  share: Share2,
};

export function Features() {
  return (
    <section
      id="features"
      className="relative overflow-hidden bg-ink py-20 text-white sm:py-24 lg:py-28"
    >
      <div aria-hidden="true" className="pointer-events-none absolute inset-0">
        <div className="absolute -left-32 top-10 size-[420px] rounded-full bg-gold-500/12 blur-3xl" />
        <div className="absolute -right-24 bottom-0 size-[380px] rounded-full bg-[#9C4668]/12 blur-3xl" />
      </div>

      <div className="container relative">
        <SectionHeading
          tone="light"
          eyebrow="Features"
          title="Everything Your Fashion Website Includes"
          subtitle="Built-in from day one — no add-ons, no surprises. Each feature exists for one reason: to turn online interest into real customers at your store."
        />

        <RevealGroup
          as="ul"
          className="mt-14 grid gap-4 sm:grid-cols-2 lg:grid-cols-3"
          stagger={0.05}
        >
          {features.map((feature, index) => {
            const Icon = iconMap[feature.icon] ?? Zap;
            // 13 features leave a gap in the final row — centre the last card.
            const isOrphan = index === features.length - 1;

            return (
              <RevealChild
                as="li"
                key={feature.title}
                className={cn(
                  "group relative overflow-hidden rounded-2xl border border-white/10 bg-white/[0.04] p-6 backdrop-blur-sm transition-all duration-500 hover:-translate-y-1.5 hover:border-gold-400/40 hover:bg-white/[0.07]",
                  isOrphan && "sm:col-span-2 lg:col-span-1 lg:col-start-2",
                )}
              >
                <div className="flex items-start gap-4">
                  <span className="flex size-11 shrink-0 items-center justify-center rounded-xl bg-white/[0.07] text-gold-300 ring-1 ring-white/10 transition-all duration-500 group-hover:bg-gold-sheen group-hover:text-white group-hover:ring-transparent">
                    <Icon className="size-5" strokeWidth={1.7} />
                  </span>
                  <div>
                    <h3 className="font-display text-base font-semibold tracking-tight text-white">
                      {feature.title}
                    </h3>
                    <p className="mt-1.5 text-sm leading-relaxed text-white/60">
                      {feature.description}
                    </p>
                  </div>
                </div>
              </RevealChild>
            );
          })}
        </RevealGroup>
      </div>
    </section>
  );
}
