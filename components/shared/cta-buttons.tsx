import * as React from "react";
import { ArrowRight } from "lucide-react";

import { Button } from "@/components/ui/button";
import { WhatsAppIcon } from "@/components/shared/whatsapp-icon";
import { DEFAULT_WHATSAPP_MESSAGE, whatsappLink } from "@/lib/site-config";
import { cn } from "@/lib/utils";

interface CtaButtonsProps {
  className?: string;
  size?: "default" | "lg";
  /** `gold` reads better on white, `light` on the dark CTA panels. */
  primaryVariant?: "default" | "gold" | "light";
  whatsappMessage?: string;
}

/**
 * The "Request Free Demo" + "Chat On WhatsApp" pair repeated across the page.
 */
export function CtaButtons({
  className,
  size = "lg",
  primaryVariant = "gold",
  whatsappMessage = DEFAULT_WHATSAPP_MESSAGE,
}: CtaButtonsProps) {
  return (
    <div className={cn("flex flex-col gap-3 sm:flex-row sm:items-center", className)}>
      <Button
        asChild
        size={size}
        variant={primaryVariant === "light" ? "outline" : primaryVariant}
        className={cn(
          "group",
          primaryVariant === "light" && "border-white/0 bg-white text-ink hover:bg-gold-100 hover:text-ink",
        )}
      >
        <a href="#demo-form">
          Request Free Demo
          <ArrowRight className="transition-transform duration-300 group-hover:translate-x-1" />
        </a>
      </Button>

      <Button asChild size={size} variant="whatsapp">
        <a
          href={whatsappLink(whatsappMessage)}
          target="_blank"
          rel="noopener noreferrer"
        >
          <WhatsAppIcon className="size-[1.15rem]" />
          Chat On WhatsApp
        </a>
      </Button>
    </div>
  );
}
