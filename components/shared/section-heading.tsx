import * as React from "react";

import { Reveal } from "@/components/shared/reveal";
import { cn } from "@/lib/utils";

interface SectionHeadingProps {
  eyebrow?: string;
  title: React.ReactNode;
  subtitle?: React.ReactNode;
  align?: "center" | "left";
  className?: string;
  tone?: "dark" | "light";
}

export function SectionHeading({
  eyebrow,
  title,
  subtitle,
  align = "center",
  className,
  tone = "dark",
}: SectionHeadingProps) {
  const isCentered = align === "center";

  return (
    <div
      className={cn(
        "flex flex-col gap-4",
        isCentered ? "items-center text-center" : "items-start text-left",
        className,
      )}
    >
      {eyebrow ? (
        <Reveal>
          <span className={cn("eyebrow", tone === "light" && "text-gold-300")}>
            <span className="h-px w-6 bg-current" aria-hidden="true" />
            {eyebrow}
          </span>
        </Reveal>
      ) : null}

      <Reveal delay={0.06}>
        <h2
          className={cn(
            "font-display text-3xl font-semibold leading-[1.15] tracking-tight sm:text-4xl lg:text-[2.75rem]",
            tone === "light" ? "text-white" : "text-ink",
            isCentered && "mx-auto max-w-3xl text-balance",
          )}
        >
          {title}
        </h2>
      </Reveal>

      {subtitle ? (
        <Reveal delay={0.12}>
          <p
            className={cn(
              "text-base leading-relaxed sm:text-lg",
              tone === "light" ? "text-white/70" : "text-ink-muted",
              isCentered ? "mx-auto max-w-2xl text-pretty" : "max-w-2xl",
            )}
          >
            {subtitle}
          </p>
        </Reveal>
      ) : null}
    </div>
  );
}
