import * as React from "react";

import { cn } from "@/lib/utils";

/**
 * Logo tile used in the header and footer. Deliberately name-free: a garment
 * silhouette stands in until a real brand mark exists, so nothing here needs
 * changing when the business name is decided.
 */
export function BrandMark({ className }: { className?: string }) {
  return (
    <span
      className={cn(
        "flex size-10 shrink-0 items-center justify-center rounded-xl bg-gold-sheen text-white shadow-gold",
        className,
      )}
    >
      <svg
        viewBox="0 0 100 90"
        fill="currentColor"
        aria-hidden="true"
        className="h-[55%]"
      >
        <path d="M38 12h24l10 10-8 9 6 45c-13 5-27 5-40 0l6-45-8-9 10-10Z" />
      </svg>
    </span>
  );
}
