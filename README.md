# Fashion & Apparel Landing Page

A premium, conversion-focused landing page that sells website development
services to fashion and apparel businesses — family garments stores, men's /
women's / kids wear, saree stores, boutiques, bridal boutiques, designer
studios, ethnic wear stores, multi-brand retailers, fashion brands and clothing
manufacturers.

**Live demo styles showcased on the page**

| Style | Best for | Demo |
| --- | --- | --- |
| Family Garments & Multi-Brand Fashion | Family garments, multi-brand, men's / women's / kids wear | [View](https://shrishkumar111222.github.io/Family-Garments-Multi-Brand-Fashion-Store/) |
| Luxury Boutique & Bridal Fashion | Boutiques, bridal, designer studios, ethnic wear | [View](https://shrishkumar111222.github.io/Luxury-Boutique-Bridal-Fashion/) |
| Modern Fashion Store | Trend-led brands, Gen-Z fashion, online retailers | [View](https://shrishkumar111222.github.io/Modern-Fashion-Store-Gen-Z-Trendy-/) |

---

## Tech stack

- **Next.js 15** (App Router, static export)
- **TypeScript** (strict)
- **Tailwind CSS 3.4** with a custom fashion-retail design system
- **ShadCN UI** primitives (Button, Card, Badge, Input, Textarea, Label,
  Accordion, Select) built on Radix
- **Framer Motion** for scroll reveals, staggered grids, hover physics and
  floating hero elements
- **Firebase Firestore** for lead collection
- **GitHub Actions → GitHub Pages** for deployment

---

## Getting started

```bash
npm install
npm run dev        # http://localhost:3000
```

Other scripts:

```bash
npm run build      # static export to ./out
npm run typecheck  # tsc --noEmit
npm run lint       # eslint
```

---

## Lead collection (Firebase)

The form writes directly to a Firestore collection named `leads`.

### 1. Create the Firebase project

1. Create a project at [console.firebase.google.com](https://console.firebase.google.com).
2. Add a **Web app** and copy the config values.
3. Enable **Firestore Database** (production mode).

### 2. Add the environment variables

Copy `.env.example` to `.env.local` and fill in the values:

```bash
cp .env.example .env.local
```

For deployment, add the same six keys as **repository secrets**
(*Settings → Secrets and variables → Actions*). The deploy workflow injects them
at build time.

### 3. Publish the security rules

`firestore.rules` in this repo makes the collection append-only — anyone can
submit a lead, nobody can read or modify one from the browser:

```bash
firebase deploy --only firestore:rules
```

You read incoming leads in the Firebase console under **Firestore → leads**.

### Graceful fallback

Firebase is **optional**. When the environment variables are missing — or if
Firestore is unreachable — the form does not fail silently or lose the enquiry.
It switches to a WhatsApp handoff: the visitor sees a "One Last Step" panel with
a button that opens WhatsApp pre-filled with every detail they entered. Once
Firebase is configured, submissions save straight to Firestore and the visitor
sees the standard *"Thank You. We Will Contact You Shortly."* confirmation.

The form also validates on the client and includes a hidden honeypot field that
silently discards bot submissions.

---

## Deployment (GitHub Pages)

Pushing to `main` triggers `.github/workflows/deploy.yml`, which builds the
static export and publishes it.

One-time setup: **Settings → Pages → Build and deployment → Source →
GitHub Actions**.

The site is served from `/<repo-name>/`, so the workflow passes `BASE_PATH` into
the build. Local development runs from the root and needs no configuration.

---

## Project structure

```
app/
  layout.tsx              Fonts, SEO metadata, JSON-LD structured data
  page.tsx                Section composition
  globals.css             Design tokens and base styles
components/
  layout/                 Site header (sticky, mobile sheet) and footer
  sections/               One file per landing page section
  shared/                 Reveal animations, CTA pair, sticky WhatsApp,
                          SVG garment art, hero mockup
  ui/                     ShadCN primitives
lib/
  site-config.ts          All copy, links and lists — single source of truth
  firebase.ts             Lazily loaded, optional Firebase client
  leads.ts                Lead type, validation and submission
  utils.ts                cn() helper
```

### Editing content

Nearly all copy lives in `lib/site-config.ts` — headings, trust badges, demo
cards, benefits, collections, features, FAQs, business types and the WhatsApp
number. Changing a phone number or adding an FAQ never requires touching
component markup.

To change the WhatsApp number, update `WHATSAPP_NUMBER` and `WHATSAPP_DISPLAY`
in that file.

---

## Page sections

1. **Hero** — headline, subheading, six trust badges, dual CTA, animated
   browser + phone mockup, scrolling audience marquee
2. **Choose Your Website Style** — three demo cards with live links
3. **Why Your Business Needs A Website** — six benefits, sticky narrative column
4. **Featured Collections** — twelve icon cards
5. **Features** — thirteen capabilities on a dark premium panel
6. **Trust & Brand Building** — eight trust-building cards
7. **Custom Pricing** — what's included, plus a four-step process
8. **FAQ** — six accordion questions
9. **Lead Form** — nine fields, validation, Firestore submission
10. **Final CTA** — closing conversion panel

Plus a sticky WhatsApp button with pulse animation and tooltip.

---

## Accessibility & performance

- Static export, ~197 kB first load JS, zero image requests (all visuals are
  inline SVG/CSS)
- Full `prefers-reduced-motion` support — every animation collapses to a
  static state
- Semantic landmarks, labelled form fields, `aria-invalid` on errors, visible
  focus rings, keyboard-navigable Radix primitives
- No horizontal overflow at 390 px or 1440 px
