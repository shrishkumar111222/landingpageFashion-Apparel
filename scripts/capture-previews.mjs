/**
 * Regenerates the demo screenshots shown in the "Choose Your Website Style"
 * cards. Run this whenever one of the demo sites is redesigned.
 *
 * Playwright is intentionally NOT a project dependency — it and its browser
 * are ~300 MB, and this script runs rarely. Install it on demand:
 *
 *   npm install --no-save playwright
 *   npx playwright install chromium
 *   node scripts/capture-previews.mjs
 *
 * Captures are 1440×2000. The card shows a 16:11 window of the top and pans
 * down on hover, so the geometry in components/sections/website-styles.tsx
 * assumes this exact size — change both together.
 */
import { mkdir } from "node:fs/promises";
import { dirname, resolve } from "node:path";
import { fileURLToPath } from "node:url";

import { chromium } from "playwright";

const ROOT = resolve(dirname(fileURLToPath(import.meta.url)), "..");
const OUT_DIR = resolve(ROOT, "public/previews");

const VIEWPORT = { width: 1440, height: 900 };
const CAPTURE_HEIGHT = 2000;

/** Keep these slugs in sync with `preview` paths in lib/site-config.ts. */
const targets = [
  {
    slug: "family-garments",
    url: "https://shrishkumar111222.github.io/Family-Garments-Multi-Brand-Fashion-Store/",
  },
  {
    slug: "luxury-boutique",
    url: "https://shrishkumar111222.github.io/Luxury-Boutique-Bridal-Fashion/",
  },
  {
    slug: "modern-fashion",
    url: "https://shrishkumar111222.github.io/Modern-Fashion-Store-Gen-Z-Trendy-/",
  },
];

await mkdir(OUT_DIR, { recursive: true });

const browser = await chromium.launch();

for (const { slug, url } of targets) {
  const page = await browser.newPage({
    viewport: VIEWPORT,
    deviceScaleFactor: 1,
    // Settle entrance animations so nothing is captured mid-fade.
    reducedMotion: "reduce",
  });

  await page.goto(url, { waitUntil: "networkidle" });

  // Scroll through once so lazy/scroll-revealed sections paint.
  await page.evaluate(async (height) => {
    for (let y = 0; y <= height + 200; y += 400) {
      window.scrollTo(0, y);
      await new Promise((r) => setTimeout(r, 180));
    }
    window.scrollTo(0, 0);
    await new Promise((r) => setTimeout(r, 900));
  }, CAPTURE_HEIGHT);

  await page.screenshot({
    path: resolve(OUT_DIR, `${slug}.jpg`),
    type: "jpeg",
    quality: 78,
    // `clip` only reaches past the viewport when fullPage is set.
    fullPage: true,
    clip: { x: 0, y: 0, width: VIEWPORT.width, height: CAPTURE_HEIGHT },
  });

  console.log(`captured ${slug}.jpg  <-  ${url}`);
  await page.close();
}

await browser.close();
console.log(`\nDone. Wrote ${targets.length} previews to public/previews/`);
console.log("Note: run `rm -rf out` before rebuilding — stale copies persist.");
