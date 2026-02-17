
# Requsyol – Staffing & Recruiting Website

A fully animated, cinematic staffing and recruiting website for Requsyol with bold scroll-triggered animations, parallax effects, and polished micro-interactions inspired by 1820productions.com.

---

## Page 1: Homepage (Single Page with Animated Sections)

### Hero Section
- **Dual split hero** with cinematic Framer Motion reveal animations
- Headline: "Find the right job or talent — quickly & reliably"
- Subtext about matching verified candidates with top employers
- **Dual CTA buttons**: "Find Work" → scrolls/navigates to candidate form, "Hire Talent" → scrolls/navigates to employer form
- Parallax background with subtle morphing shapes/gradients

### Value Proposition Section
- Two-column layout: **For Employers** and **For Workers**
- Scroll-triggered staggered reveal animations
- Icon-driven cards with hover micro-animations
- Employer benefits: verified professionals, compliance handling, fast placements
- Worker benefits: thousands of opportunities, competitive pay, dedicated support

### Industry Carousel
- Smooth auto-scrolling horizontal carousel showcasing industries served
- Pause on hover, drag to scroll
- Industry icons/cards with entrance animations

### Stats & Trust Signals
- Animated number counters (workforce matches, placements, client satisfaction)
- Count-up animation triggered on scroll into view
- Trust badges and partner logos

### Testimonials
- Animated testimonial cards with smooth transitions
- Auto-rotating carousel with manual navigation
- Quote marks, names, roles with subtle fade/slide animations

### Final CTA Section
- Bold call-to-action with parallax background
- Dual buttons repeating "Find Work" / "Hire Talent"
- Cinematic fade-in reveal

---

## Page 2: Candidate Registration

### Multi-Step Registration Form
- Clean multi-step form with progress indicator
- **Step 1**: Personal details (first name, last name, phone, email)
- **Step 2**: Address & details (full address, postcode, birth date, referral source)
- **Step 3**: Resume upload with drag-and-drop zone
- Client-side validation with clear error messages
- Smooth step transition animations
- Success confirmation screen with animation

---

## Page 3: Employer Inquiry Form

### Employer Lead Form
- Single-page form with animated field reveals
- Fields: company name, contact person, email, phone, role required, urgency/timeline
- Optional job description file upload
- Honeypot field for basic spam prevention
- Success confirmation with next-steps messaging

---

## Page 4: About Page
- Company story, mission, and values
- Team section with animated card reveals
- Why Requsyol differentiators

## Page 5: Contact Page
- Contact form with validation
- Office location/details
- Map placeholder or address block

## Page 6: FAQ Page
- Accordion-style FAQ sections for candidates and employers
- Smooth expand/collapse animations

## Page 7: Policies
- Privacy Policy, GDPR information, Terms & Conditions
- Clean, readable layout with anchor navigation

---

## Global Components

### Navigation
- Sticky header with transparent-to-solid scroll transition
- Mobile hamburger menu with slide-in animation
- Logo + nav links (Home, For Candidates, For Employers, About, Contact, Jobs)

### Footer
- Multi-column footer with company info, quick links, social media icons
- Newsletter signup field

### Animation System
- Scroll-triggered section reveals using Framer Motion
- Parallax depth layers on hero and CTA sections
- Button hover animations (scale, glow, color shift)
- Page transition animations between routes
- `prefers-reduced-motion` support to disable animations for accessibility

---

## Design Direction
- **Dark, cinematic palette** with bold accent colors (deep navy/charcoal base, vibrant accent for CTAs)
- Modern sans-serif typography with large, impactful headings
- Generous whitespace and full-width sections
- Glassmorphism or gradient overlays for depth
- WCAG 2.1 AA accessible contrast ratios

---

## Backend (Added Later if Needed)
- Form submissions will be stored locally in state for now, with toast confirmations
- Backend integration with Supabase (database + file storage for resumes) can be connected as a next step after the frontend is complete
