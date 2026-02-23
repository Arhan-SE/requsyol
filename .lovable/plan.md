

## Background Videos and Logo Update

### What We're Building
Adding looping background videos to key page sections and replacing the text-based logo with the uploaded Requsyol logo image across the Navbar and Footer.

### 1. Logo Replacement

The uploaded logo (Requsyol_png.png) will replace the current text-only logo in:

- **Navbar (desktop)** -- Replace the boxed "REQUSYOL / Staffing & Recruitment" text with the logo image (approx. 140px wide)
- **Navbar (mobile)** -- Replace the boxed "REQUSYOL" text with a smaller version of the logo (approx. 100px wide)
- **Footer** -- Replace the "REQUSYOL / Staffing & Recruitment" text block with the logo image

The logo has a white/light background in the PNG -- it will be displayed on the dark site background, so we may need to ensure it renders cleanly (the uploaded image appears to have a transparent or white background).

### 2. Background Videos on Sections

The 3 uploaded videos will be placed as looping, muted background videos behind key sections:

| Video File | Placement |
|---|---|
| `5930372-uhd_3840_2160_30fps.mp4` | **Value Proposition** section (Why Companies Trust Requsyol) |
| `13422071-uhd_3840_2160_30fps.mp4` | **Careers** page hero section |
| `istockphoto-2211055978-640_adpp_is.mp4` | **About** page header section |

Each video will use the same pattern as the existing Hero section: full-bleed video with a dark overlay (`bg-background/75`) to maintain text readability.

### Files Changed

**New assets (copied to project):**
- `src/assets/Requsyol_png.png`
- `src/assets/value-prop-bg.mp4`
- `src/assets/careers-bg.mp4`
- `src/assets/about-bg.mp4`

**Modified files:**
- `src/components/layout/Navbar.tsx` -- Import logo image, replace text logo with `<img>` tag in both desktop and mobile views
- `src/components/layout/Footer.tsx` -- Import logo image, replace text block with `<img>` tag
- `src/components/home/ValueProposition.tsx` -- Add background video layer with dark overlay behind the section
- `src/pages/Careers.tsx` -- Add background video to the hero section
- `src/pages/About.tsx` -- Add background video to the header section

### Technical Details

- All videos: `autoPlay`, `loop`, `muted`, `playsInline`, `aria-hidden="true"` (same as existing hero video)
- Dark overlay: `bg-background/75` with gradient fade at bottom for smooth transition
- Logo `<img>` tags will have proper `alt="Requsyol"` text and explicit width/height to prevent layout shift
- Videos positioned with `absolute inset-0` + `object-cover`, sections set to `relative overflow-hidden`
