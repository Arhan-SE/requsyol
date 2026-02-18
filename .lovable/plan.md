
# 1820Productions-Style Complete Redesign

## What the Reference Design Is

The 1820productions.com site has a very specific, instantly recognizable design language:

- **Pure black background, pure white text** — no dark blue, no grey tones, just #000 and #fff
- **Massive all-caps condensed ultra-bold font** — the typography IS the design element, filling nearly the full viewport width
- **Navbar layout**: nav links stacked vertically on the LEFT side, logo centered (in a bracketed/boxed treatment), and two rectangular outlined CTA buttons on the RIGHT ("LET'S TALK" and "MENU")
- **Section dividers**: full-width horizontal ruled lines with `+` symbols at each end and a label text centered — e.g., `+ ——————— CLIENTS AND PARTNERS ——————— +`
- **Bracketed CTAs**: Instead of buttons, links styled as `[ FIND WORK ]` with underline — minimal, editorial
- **No cards, no glassmorphism** — full bleed sections, content directly over background images or pure black

---

## Typography Changes

The key to matching this look is the font. The reference uses a very heavy, condensed sans-serif. We'll add **"Barlow Condensed"** (ExtraBold/Black weight) from Google Fonts — this is the closest match to what 1820productions uses.

- Headlines: `font-barlow` uppercase, `font-black`, massive sizes (`text-8xl` to `text-[12vw]`)
- Body & nav: existing DM Sans remains for readability
- CTAs: uppercase, tracked, bracketed style

---

## Files to Change

| File | Change |
|---|---|
| `src/index.css` | Add Barlow Condensed Google Font import, set CSS custom font variable, flip color tokens to true black/white |
| `tailwind.config.ts` | Add `barlow` to `fontFamily` extend |
| `src/components/layout/Navbar.tsx` | Full rebuild — left stacked nav, center boxed logo, right LET'S TALK + MENU |
| `src/components/home/HeroSection.tsx` | Giant all-caps stacked headline, bracketed CTA link, near-full overlay |
| `src/components/home/ValueProposition.tsx` | Section divider lines + huge centered headline + clean content, no cards |
| `src/components/home/IndustryCarousel.tsx` | Section divider + simpler bold treatment |
| `src/components/home/TestimonialsSection.tsx` | Section divider + editorial quote treatment |
| `src/components/home/FinalCTA.tsx` | Pure black panel, massive all-caps headline, bracketed links |
| `src/components/layout/Footer.tsx` | Black footer, stacked links, bracketed contact info |

---

## Detailed Design Breakdown

### Global Color Palette Change
The current site uses dark navy blues. The reference uses strict pure black/white. We update `index.css`:

```text
--background: 0 0% 4%         (near-black #0a0a0a)
--foreground: 0 0% 97%         (near-white #f7f7f7)
--primary: 0 0% 97%            (white — accents will be white)
--muted-foreground: 0 0% 60%   (neutral grey for subtext)
--border: 0 0% 18%             (dark grey lines)
--card: 0 0% 8%                (slightly lighter black for panels)
```

### Navbar Redesign
```text
[WORK        ]  [  R E Q U S Y O L  ]  [ LET'S TALK ] [ MENU ]
[SERVICES    ]  [  STAFFING & REC.  ]
[ABOUT       ]
[CONTACT     ]
```
- Left: nav links stacked vertically, uppercase, small tracking, white
- Center: logo in a thin-bordered box (like 1820's bracketed logo mark)
- Right: "LET'S TALK" and "MENU" as outlined rectangular buttons
- On mobile: collapses to center logo + hamburger

### HeroSection Redesign
```text
[FULL BLEED BACKGROUND IMAGE]

        WE FIND. WE MATCH.
        WE DELIVER.

        [ FIND WORK ]   [ HIRE TALENT ]
```
- Headline font: Barlow Condensed Black, ~10–12vw, ALL CAPS, centered
- Two stacked or side-by-side lines
- CTA as bracketed text links, underlined, small caps — no button components
- Minimal overlay (just enough for text legibility)

### Section Dividers (every section boundary)
A full-width thin line with `+` on each end and centered label:
```text
+ ─────────────────── WHY CHOOSE US ─────────────────── +
```
Implemented as a reusable `SectionDivider` component.

### ValueProposition Redesign
- Section divider at top
- Giant centered headline: `WHY COMPANIES TRUST REQUSYOL.`
- Stat row: four large numbers in a horizontal strip (no jewel cards — just huge white numbers with grey labels below, full-width separated by thin vertical lines)
- Benefits: simple list format, each item as a row with a `+` bullet

### TestimonialsSection Redesign
- Section divider
- Giant centered italic quote: editorial, full-width serif
- Attribution in small caps beneath
- No carousel controls visible — minimal auto-advance

### FinalCTA Redesign
- Pure black panel
- Massive headline: `READY TO GET STARTED.`
- Two bracketed links side by side: `[ FIND WORK ]` and `[ HIRE TALENT ]`

### Footer Redesign
- Pure black
- Top: section divider line
- Brand name left, nav links center, contact right — all white text, no borders or cards

---

## New Component: SectionDivider

A reusable inline component to be used between every section:
```tsx
const SectionDivider = ({ label }: { label: string }) => (
  <div className="flex items-center gap-0 w-full px-4 py-6">
    <span className="text-white/40 text-sm">+</span>
    <div className="flex-1 h-px bg-white/15 mx-3" />
    <span className="text-xs tracking-[0.3em] uppercase text-white/40 font-mono">{label}</span>
    <div className="flex-1 h-px bg-white/15 mx-3" />
    <span className="text-white/40 text-sm">+</span>
  </div>
);
```

---

## Animation Approach

- Headlines: single-word or single-line staggered letter/word reveal (slide up from below, fade in)
- Section dividers: expand from center outward on scroll entry
- Stats: CountUp numbers remain, but displayed as giant white numbers in a horizontal strip
- No glassmorphism, no card hover animations — just clean, minimal motion

No new npm packages required. Barlow Condensed is added via Google Fonts CSS import.
