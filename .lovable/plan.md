
Goal

Update the navigation to match your reference more closely:
- Top-left desktop nav shows only 3 links: Home, About, Our Services
- Clicking the menu button opens a right-side slide-out menu
- The slide-out menu contains: Home, About, Our Services, Policies, Contact Us
- Add stronger hover/motion effects so the menu feels more interactive
- Create a new dedicated Our Services page and wire it into routing

What I’ll build

1. Replace the current dropdown menu with a right-side overlay panel
- Keep the existing centered logo and right-side action area
- Change the current expanding dropdown into a fixed right drawer/panel
- Use a dark full-height panel with large stacked menu typography inspired by the uploaded reference
- Add a dimmed backdrop over the rest of the page
- Keep close behavior on route change and on menu toggle

2. Simplify the desktop left navigation
- In `src/components/layout/Navbar.tsx`, reduce the left-side links to:
  - Home
  - About
  - Our Services
- Remove the other links from that visible top-left list

3. Create the new Services page
- Add a new page component, likely `src/pages/Services.tsx`
- Use the site’s existing editorial style:
  - large uppercase heading
  - thin borders/dividers
  - monochrome layout
  - scroll reveal motion
- Structure it as a simple branded services overview page so the new nav item has a real destination

4. Add the new route
- In `src/App.tsx`, register `/services`
- Point both desktop nav and slide-out menu “Our Services” to this page

5. Add interactive hover animations
- For slide-out menu items:
  - subtle x-shift on hover
  - opacity/brightness change
  - optional underline/bar growth or small arrow indicator
  - staggered entrance animation when the panel opens
- For active route:
  - stronger contrast so users know where they are

Technical details

Files to update
- `src/components/layout/Navbar.tsx`
- `src/App.tsx`
- `src/pages/Services.tsx` (new)

Likely implementation approach
- Continue using `framer-motion` + `AnimatePresence`
- Convert the open menu into:
  - backdrop layer
  - fixed right panel (`fixed top-0 right-0 h-screen`)
  - large vertically stacked links
- Preserve current behavior that closes the menu when route changes
- Add body scroll lock while the menu is open so the experience feels polished

Menu structure after changes

```text
Desktop header
[ Home | About | Our Services ]   [ logo ]   [ Let's Talk | Menu ]

When Menu is clicked
-----------------------------------------
| main page dimmed          | PANEL      |
|                           | Home       |
|                           | About      |
|                           | Our        |
|                           | Services   |
|                           | Policies   |
|                           | Contact Us |
-----------------------------------------
```

Design fit

This approach matches your current visual system better than the existing dropdown because it:
- keeps the editorial, cinematic feel
- uses the large uppercase menu style from your reference
- avoids overcrowding the top nav
- makes the menu interaction feel intentional and premium

Small extras I’d include during implementation
- highlight the active page in both nav areas
- ensure hover effects respect reduced-motion settings
- keep mobile behavior aligned with the new right-side drawer so desktop/mobile feel consistent
