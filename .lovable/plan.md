
# Redesign: "Why Choose Requsyol?" Section

## What's Changing

The current `ValueProposition` section uses a two-column card grid with icons. The reference image shows a much bolder, premium layout with:

1. A large featured testimonial quote at the top with stacked avatar circles
2. Big, colorful stat cards below with giant numbers and a watermark number in the background

We'll adapt this layout to the dark cinematic theme — replacing the pastel colors from the reference with rich, jewel-toned accent panels using our color system.

---

## New Layout Structure

```text
┌─────────────────────────────────────────────────────────────┐
│                     WHY CHOOSE REQUSYOL                     │
│                                                             │
│  [ Avatar ] [ Avatar ] [ Avatar ]  ← stacked circles       │
│                                                             │
│  "Requsyol placed our entire warehouse team in 48 hours,   │
│   helping us hit our deadline and keep projects on track."  │
│                                                             │
│      — Sarah Mitchell, Operations Director, Swift Logistics  │
│                                                             │
├──────────┬──────────┬──────────┬──────────────────────────┤
│  5,000+  │   48hrs  │   98%    │   15+                    │
│ Candidates│ Avg. Time│ Satisfac.│ Industries               │
│  Placed  │ to Place │  Rate    │   Served                 │
└──────────┴──────────┴──────────┴──────────────────────────┘
```

---

## Design Details

### Top Section — Featured Quote
- Stacked avatar circles (3 overlapping gradient circles with initials) centered at top
- Large, cinematic quote in serif italic font, with **key phrases bolded**
- Attribution line below in muted text
- Scroll-triggered fade-up reveal

### Bottom Section — 4 Stat Cards
Each card has:
- **Giant number** in top-left (bold, large, e.g. "5,000+")
- **Watermark digit** — oversized semi-transparent number in background (like the reference)
- **Label** at the bottom
- Each card gets a unique dark jewel-tone background:
  - Card 1: Deep teal/emerald (`bg-emerald-900/60` with emerald tint)
  - Card 2: Deep indigo/violet (`bg-violet-900/60`)
  - Card 3: Deep slate-blue (`bg-blue-900/60`)
  - Card 4: Deep amber/gold (`bg-amber-900/60`)
- Rounded corners, hover scale micro-animation
- Staggered scroll-triggered entrance animation (slide up + fade)

### Employer / Worker Benefits
The current 6-benefit card grid will be moved **below** the stat cards as a secondary section, redesigned as a cleaner horizontal strip or compact 3-col grid.

---

## Files to Change

- **`src/components/home/ValueProposition.tsx`** — Full rebuild of the component with the new layout: featured quote block + 4 jewel-tone stat cards + benefits below

---

## Animation Plan

- Quote block: `ScrollReveal` fade up with 0.3s delay
- Avatar circles: staggered pop-in (scale 0 → 1) with spring physics
- Stat cards: staggered slide-up with `delay={i * 0.12}` per card
- Hover on stat cards: `whileHover={{ scale: 1.03, y: -4 }}` lift effect
- Watermark number: subtle slow rotate animation on loop

No new dependencies required — all uses existing Framer Motion.
