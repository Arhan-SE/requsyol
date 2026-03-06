

## Plan: Redesign Services Page with 1820-style Layout + Client Logos

### Overview

Replace the current Services page with a completely new design inspired by the 1820productions.com reference screenshots. The page will feature:

1. A hero section with massive Barlow Condensed typography
2. A "SERVICES" section divider (reusing the existing pattern)
3. Five numbered service blocks (`01` through `05`) with large titles and right-aligned body text/bullet points, separated by horizontal rules
4. A "Requsyol Promise" closing statement
5. A client logos section with an infinite horizontal scroll animation
6. A final CTA linking to contact

### Design Pattern (from screenshots)

```text
┌─────────────────────────────────────────────┐
│  OUR SERVICES.   (massive Barlow headline)  │
│  subtitle paragraph                         │
├─────── + ─── SERVICES ─── + ────────────────┤
│ 01        SECTOR-SPECIFIC STAFFING          │
│                                              │
│                    body text right-aligned    │
│                    • bullet points            │
├──────────────────────────────────────────────┤
│ 02        RIGOROUS VETTING PROCESS          │
│                    ...                       │
├──────────────────────────────────────────────┤
│ 03        CUSTOM INDUCTION & TRAINING       │
│ 04        WORKFORCE MANAGEMENT              │
│ 05        TECHNOLOGY-DRIVEN TRANSPARENCY    │
├──────────────────────────────────────────────┤
│  THE REQUSYOL PROMISE                       │
├─────── + ─── OUR CLIENTS ─── + ─────────────┤
│  ← logo  logo  logo  logo  logo  logo →     │
│     (infinite marquee scroll)                │
├──────────────────────────────────────────────┤
│  CTA: Contact Us                            │
└─────────────────────────────────────────────┘
```

### Files to change

**1. Copy client logo images to `src/assets/clients/`**
- `user-uploads://image-7.png` → `src/assets/clients/club-cultured.png`
- `user-uploads://image-8.png` → `src/assets/clients/cbk-freight.png`
- `user-uploads://image-9.png` → `src/assets/clients/urban-legend.png`
- `user-uploads://image-10.png` → `src/assets/clients/bakery-client.png`
- `user-uploads://image-11.png` → `src/assets/clients/ding-dong.png`

**2. Rewrite `src/pages/Services.tsx`**
- Hero: massive Barlow Condensed "OUR SERVICES." headline with the intro paragraph below
- SectionDivider with "SERVICES" label
- Five service blocks, each with:
  - Number (`01`-`05`) in large Barlow font on the left
  - Service title in massive uppercase Barlow on the right
  - Body description + bullet points right-aligned in a grid below, matching the reference layout
  - Horizontal rule separator between blocks
- "The Requsyol Promise" section
- SectionDivider with "OUR CLIENTS" label
- Client logos marquee with CSS animation (infinite horizontal scroll, duplicated logos for seamless loop)
- Final CTA to `/contact`

**3. Add marquee keyframes to `src/index.css`**
- A `@keyframes marquee` for the infinite scroll animation

### Key styling details

- Service numbers: `font-barlow font-black text-6xl md:text-8xl`
- Service titles: `font-barlow font-black uppercase text-5xl md:text-7xl lg:text-8xl`
- Body text: right-aligned on desktop in `max-w-md`, using DM Sans
- Bullet items styled with bold label + description format
- Client logos: grayscale filter, white background circular/card container, marquee animation
- All scroll reveal animations using existing `ScrollReveal` component

