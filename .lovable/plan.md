
# Hover Background Image Effect — Sectors Carousel

## What's Being Built

When a user hovers over any sector card in the scrolling carousel, a relevant background image fades in behind that card only. Hovering away fades it back out. The icon and label remain visible on top with a slight brightness boost for contrast.

## How It Works

Each sector card becomes `position: relative` with an absolutely-positioned `<img>` layer inside it. On hover, that image fades from `opacity-0` to `opacity-100` with a smooth transition. A dark overlay (semi-transparent black) sits between the image and the text so the icon/label stay legible.

The approach uses React `useState` to track which card index is hovered, and Framer Motion `AnimatePresence` + `motion.img` for a clean crossfade.

## Images to Use (Unsplash — free, no attribution required at runtime)

Each industry gets a curated Unsplash image URL via the CDN with `?auto=format&fit=crop&w=400&q=80` for fast loading at the small card size (192×160px):

| Sector | Image theme |
|---|---|
| Manufacturing | Factory floor / machinery |
| Hospitality | Restaurant / chef / dining |
| Construction | Building site / scaffolding |
| Logistics | Trucks / warehouse loading |
| Retail | Shop floor / storefront |
| Trades | Electrician / plumber tools |
| Healthcare | Hospital / medical staff |
| Warehousing | Large warehouse interior |

## Technical Implementation

**State tracking:** A single `hoveredIndex` state (or `null`) in `IndustryCarousel`. Each card receives an `onMouseEnter` setting the index and `onMouseLeave` clearing it.

**The card structure after change:**
```text
<div> (relative, overflow-hidden)
  ├── <motion.img> (absolute inset-0, object-cover, opacity animated 0→1 on hover)
  ├── <div> (absolute inset-0, bg-black/50 overlay, opacity animated 0→1 on hover)
  ├── <Icon> (relative z-10, transitions white on hover)
  └── <span> (relative z-10, transitions white on hover)
</div>
```

**Animation:** Framer Motion `animate={{ opacity: isHovered ? 1 : 0 }}` with `transition={{ duration: 0.35 }}` — snappy enough to feel responsive, smooth enough to look polished.

**No layout change:** Card dimensions (w-48 h-40), border, gap, and scrolling speed stay exactly the same.

**Performance:** Images are tiny (400px wide CDN-served JPEGs). They are loaded lazily via `loading="lazy"` on the `<img>` tag. Since the carousel duplicates each card (`doubled` array), the browser will cache each image after the first load.

## File to Change

| File | Change |
|---|---|
| `src/components/home/IndustryCarousel.tsx` | Add `image` URL to each industry object, add `hoveredIndex` state, wrap card contents with image + overlay layers using Framer Motion opacity animation |

No other files touched. No new dependencies needed.
