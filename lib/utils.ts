import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

/**
 * Prefixes a `public/` asset with the deployment base path.
 *
 * GitHub Pages serves this project from `/<repo-name>/`, and `next/image` does
 * not prepend `basePath` when images are unoptimized — so a bare "/foo.jpg"
 * would 404 in production. Always wrap static asset paths with this.
 */
export function assetPath(path: string): string {
  const base = process.env.NEXT_PUBLIC_BASE_PATH ?? "";
  return `${base}${path}`;
}
