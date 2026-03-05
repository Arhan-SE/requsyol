
Goal

Refine the header/menu to match the reference more closely:
- make the logo noticeably bigger and more visible
- make the slide-out menu more compact, bold, and condensed like the reference
- remove the divider lines between menu items
- add social icons in the top-right area and footer
- keep the hero video behavior, but stop the header from feeling visually weak over it

What I’ll update

1. Navbar/logo visibility
- Increase the logo size in both desktop and mobile navbar
- Slightly rebalance header spacing so the larger logo still fits cleanly
- Make the header a bit more readable over the hero by strengthening its filled/scrolled state and open-menu state

2. Slide-out menu redesign
- Keep the right-side drawer, but restyle it to feel closer to the screenshot:
  - use the condensed display font already in the project (`font-barlow`)
  - tighter leading and reduced tracking
  - larger stacked text
  - more compact vertical spacing
- Remove the borders/lines between menu items
- Remove the small line element beside each menu item and rely on typography/motion instead
- Keep hover motion, but make it cleaner:
  - subtle x-shift
  - opacity/brightness change
  - active item gets stronger contrast

3. Social icons
- Add Instagram, LinkedIn, Facebook, and X/Twitter icons in:
  - the top-right navbar area
  - the footer
- Use placeholder links for now so the structure is ready for real URLs later
- Keep the icons visually minimal and consistent with the site’s monochrome style

4. Footer polish
- Add a social-links row without disturbing the existing editorial layout
- Keep the large background “REQUSYOL” branding
- If needed, align footer link styling more closely with the new navigation tone

Files to update
- `src/components/layout/Navbar.tsx`
- `src/components/layout/Footer.tsx`
- `src/components/home/HeroSection.tsx` (only if a minor header/hero contrast adjustment is needed)
- possibly `src/index.css` only if a tiny typography utility tweak is needed, though the needed font is already available

Design approach

```text
Desktop header
[ Home | About | Our Services ]   [ larger logo ]   [ social icons | Let's Talk | Menu ]

Open menu
------------------------------------------------
| dimmed page | compact black panel            |
|             | HOME                           |
|             | ABOUT                          |
|             | OUR SERVICES                   |
|             | POLICIES                       |
|             | CONTACT US                     |
|             | social icons                   |
------------------------------------------------
```

Key implementation notes
- Reuse existing `framer-motion` structure rather than rebuilding the menu from scratch
- Keep route-close behavior and body scroll lock
- Use placeholder href values or a small social-links config object so URLs can be swapped in later
- Preserve responsive behavior while making desktop and mobile menus feel visually consistent

Expected result
- Bigger, clearer logo
- Cleaner menu without divider lines
- Menu typography that feels much closer to your reference image
- Social icons ready in both header and footer
- A stronger overall first impression without changing the core site structure
