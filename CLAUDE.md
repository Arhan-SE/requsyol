# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Commands

```bash
npm run dev        # Start dev server at http://localhost:8080
npm run build      # Production build
npm run lint       # ESLint
npm run test       # Run tests once (Vitest)
npm run test:watch # Run tests in watch mode
```

Run a single test file:
```bash
npx vitest run src/path/to/file.test.ts
```

## About Requsyol

**Requsyol** is a UK-based recruitment and staffing agency headquartered in London. It serves two audiences: **candidates** looking for work and **employers** needing staff.


**Mission**: "Make Creative Simple" — let businesses focus on their bottom line by offloading HR compliance and workforce management to Requsyol.


**Key stats** (used on the site): 5,000+ candidates placed · 4-hour average time to place · 98% client satisfaction · 15+ industries served

### Services offered
1. **Sector-Specific Staffing** — Hospitality & Hotels, Airports & Airlines (CAA-compliant), Logistics & Industrial, Events & Ad-hoc
2. **Rigorous Vetting** — face-to-face interviews, Right-to-Work (RTW) checks, DBS/CRC, aviation-specific (GSAT, IDC, Blue ID)
3. **Custom Induction & Training** — client-specific onboarding, health & safety, process integration
4. **End-to-End Workforce Management** — payroll, HR admin, timesheet/rota management
5. **Technology-Driven Transparency** — client portal (RTW docs, holiday data), live staffing pulse reports, predictive capacity

### Industries served
Manufacturing · Hospitality · Logistics · Retail · Maintenance & Facility Solutions · Healthcare · Warehousing · Aviation

### Current clients (logo marquee on /services)
Club Cultured · CBK Freight · Urban Legend · Bakery Client · Ding Dong

### Form submission model
There is **no backend**. All forms construct a `mailto:` link to `hr@requsyol.co.uk` and open the user's email client. There is no API call, no server, and no database.

---

## Architecture

**React SPA** — Vite + React 18 + TypeScript, deployed to Vercel. No backend; forms submit client-side only.

### Routing (`src/App.tsx`)
React Router v6. Routes: `/`, `/candidates`, `/employers`, `/about`, `/services`, `/contact`, `/faq`, `/policies`, `/careers`.

### Page structure
Every page wraps its content in `<Layout>` (`src/components/layout/Layout.tsx`), which provides the Navbar and Footer. Animations use `<ScrollReveal>` and `<CountUp>` from `src/components/animations/`.

### Path alias
`@/` resolves to `src/`. Use it for all internal imports.

### UI components
shadcn/ui components live in `src/components/ui/` — these are vendored and should not be modified directly. Add new shadcn components via the CLI.

### Form security (`src/lib/formSecurity.ts`)
All forms must use the utilities here instead of rolling their own validation:
- **Zod schemas**: `safeNameSchema`, `safeEmailSchema`, `safePhoneSchema`, `safeTextSchema`, `safeShortTextSchema` — include injection detection and disposable email blocking.
- **Bot guards**: call `recordPageLoadTime()` on mount, `isSubmissionTooFast()` in the submit handler.
- **Duplicate submission**: `isDuplicateSubmission(formData)` — hashes form data via `crypto.subtle`.
- **File uploads**: `validateUploadedFile(file)` — enforces 5 MB limit, extension whitelist (pdf/doc/docx), and magic-byte verification.
- Forms also use a honeypot field (`z.string().max(0)`) to catch bots.

### Testing
Tests live in `src/**/*.{test,spec}.{ts,tsx}` and run in jsdom. Setup file: `src/test/setup.ts`.
