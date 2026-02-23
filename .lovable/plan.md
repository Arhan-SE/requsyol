

## Careers Page and Footer Link

### What We're Building
A new **Careers** page that displays available job postings and includes a "Submit CV" button that opens the user's default email client (mailto link). A link to this page will be added to the footer's Quick Links section.

### Page Details

**Careers Page (`/careers`)**
- Page header with title and brief description
- Job listings displayed as cards, each showing:
  - Job title
  - Location
  - Employment type (Full-time, Part-time, Temporary)
  - Brief description
  - "Apply Now" or "Submit CV" button
- The "Submit CV" button will open the user's email app via a `mailto:` link (e.g., `mailto:hr@requsyol.co.uk?subject=CV Submission - [Job Title]`)
- A general "Submit Your CV" CTA at the bottom for open/speculative applications
- Job data will be hardcoded for now (no backend) -- can be moved to Supabase later
- Page will use the existing Layout component (Navbar + Footer) and match the site's dark, editorial design

**Footer Update**
- Add "Careers" link to the Quick Links section, between "For Employers" and "About Us"

**Router Update**
- Register the new `/careers` route in `App.tsx`

### Technical Details

**New file:** `src/pages/Careers.tsx`
- Uses the existing `Layout`, `ScrollReveal`, and design patterns from other pages
- Job listings stored as a typed array of objects
- Each job card has a mailto link: `mailto:hr@requsyol.co.uk?subject=CV Submission - {jobTitle}`
- Styled consistently with the site's uppercase tracking, border-based cards, and muted color palette

**Modified files:**
- `src/components/layout/Footer.tsx` -- add `{ label: "Careers", path: "/careers" }` to Quick Links
- `src/App.tsx` -- add `<Route path="/careers" element={<Careers />} />`
- `src/components/layout/Navbar.tsx` -- optionally add "Careers" to the nav links

