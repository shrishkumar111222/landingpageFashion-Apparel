import * as React from "react";

export type GarmentKind = "dress" | "shirt" | "saree" | "kurta" | "lehenga" | "tee";

/**
 * Abstract garment silhouettes drawn inline so the page ships with zero image
 * requests and stays crisp at any size.
 */
export function GarmentArt({
  kind,
  className,
}: {
  kind: GarmentKind;
  className?: string;
}) {
  const paths: Record<GarmentKind, React.ReactNode> = {
    dress: (
      <>
        <path d="M38 12h24l10 10-8 9 6 45c-13 5-27 5-40 0l6-45-8-9 10-10Z" />
        <path
          d="M38 12c0 7 5 12 12 12s12-5 12-12"
          fill="none"
          strokeWidth="2.5"
          stroke="currentColor"
          opacity="0.35"
        />
      </>
    ),
    shirt: (
      <>
        <path d="M36 12 22 20l-6 16 11 5 2-8v41h42V33l2 8 11-5-6-16-14-8-14 8-14-8Z" />
        <path
          d="M50 20v54"
          stroke="currentColor"
          strokeWidth="2"
          fill="none"
          opacity="0.3"
        />
      </>
    ),
    saree: (
      <>
        <path d="M30 10c14 8 26 8 40 0l6 14c-10 6-10 16-4 26l8 26c-16 8-34 8-50 0l8-26c6-10 6-20-4-26l-4-14Z" />
        <path
          d="M34 30c8 14 8 30 0 46"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          opacity="0.3"
        />
      </>
    ),
    kurta: (
      <>
        <path d="M38 12 24 19l-5 18 10 4 2-7v43h38V34l2 7 10-4-5-18-14-7-12 7-12-7Z" />
        <path
          d="M50 19v58M44 26h12"
          stroke="currentColor"
          strokeWidth="2"
          fill="none"
          opacity="0.3"
        />
      </>
    ),
    lehenga: (
      <>
        <path d="M40 10h20l4 12H36l4-12Z" />
        <path d="M36 28h28l14 48c-18 8-38 8-56 0l14-48Z" />
        <path
          d="M50 28v48"
          stroke="currentColor"
          strokeWidth="2"
          fill="none"
          opacity="0.3"
        />
      </>
    ),
    tee: (
      <>
        <path d="M36 14 20 22l6 14 8-3v45h32V33l8 3 6-14-16-8-6 6h-16l-6-6Z" />
      </>
    ),
  };

  return (
    <svg
      viewBox="0 0 100 90"
      fill="currentColor"
      aria-hidden="true"
      className={className}
    >
      {paths[kind]}
    </svg>
  );
}
