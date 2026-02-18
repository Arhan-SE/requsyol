
# Security Hardening — Honest Scope Assessment

## Critical Reality Check First

The request lists many server-side security measures. This is a **pure frontend React app** with no backend — there is no server, no database, no API layer, and no Supabase connected. Here is an honest breakdown of what each measure means in this context:

| Requested Feature | Reality |
|---|---|
| reCAPTCHA v3 with server-side verification | **Requires a backend** to verify the token. Without one, reCAPTCHA is cosmetic only. The verification call needs a secret key on a server. |
| Rate limiting per IP | **Impossible client-side.** A browser cannot enforce IP-based rate limits. This requires a server or edge function. |
| Bot detection / 3-second timing | **Can be done client-side** — track page load time and block if under 3 seconds. |
| Honeypot fields | **Already exists** on EmployerInquiry. Can be added to Contact and CandidateRegistration. |
| Duplicate submission hash detection | **Partially possible** — hash last submission in localStorage and block repeats within a session. |
| Email verification | **Requires a backend** to send and verify codes. |
| Disposable email domain blocking | **Can be done client-side** — maintain a blocklist of known disposable domains. |
| SQL injection prevention | **Not applicable** — there is no database connected. The forms currently go nowhere (they just show a toast). No SQL exists anywhere. |
| HTTP Security Headers (CSP, HSTS, X-Frame-Options) | **Requires a server or hosting config** (e.g., Vercel `vercel.json`, Netlify `_headers` file, or nginx). Cannot be set from React code. |
| HttpOnly / Secure / SameSite cookies | **Not applicable** — there are no sessions, no auth, no cookies in this app. |
| CORS strict origin allowlist | **Not applicable** — no API server exists. |
| XSS output escaping | **React handles this automatically** by design. No `dangerouslySetInnerHTML` is used anywhere. React escapes all rendered values. |
| Admin dashboard protection | **No admin routes exist** in this app. |
| Sentry error tracking | **Can be added** — Sentry has a frontend-only SDK. |

---

## What Can Actually Be Implemented Right Now

### Client-Side Security (Real, Meaningful Protection)

**1. Strengthened Input Validation — all 3 forms**
The current Zod schemas are minimal. We can significantly harden them:
- `name`: strip leading/trailing whitespace, block characters outside `[a-zA-Z\s\-']`, max 100 chars
- `email`: stricter email regex + **disposable domain blocklist** (mailinator, guerrillamail, tempmail, 10minutemail, throwam, yopmail, etc. — ~50 known domains)
- `phone`: validate UK phone format
- `message` / `roleRequired`: max length 2000 chars, **reject payloads containing SQL-like patterns** (`SELECT`, `DROP`, `--`, `<script>`, `javascript:`, `onerror=`, etc.) with a regex guard
- `companyName`: same injection pattern guard

**2. Honeypot Fields — all 3 forms**
Currently only EmployerInquiry has a honeypot. Add identical hidden fields to Contact and CandidateRegistration with the same bot detection logic.

**3. Time-Based Bot Detection — all 3 forms**
Record `Date.now()` when the page loads. On submit, check elapsed time. If under 3,000ms, silently reject and show a generic "Something went wrong" message. Bots fill forms in milliseconds.

**4. Duplicate Submission Guard — all 3 forms**
On successful submission, store a SHA-256 hash (via `crypto.subtle`) of the form data in `sessionStorage`. On next submit, compare hashes — if identical, block with "This appears to be a duplicate submission."

**5. File Upload Hardening — CandidateRegistration & EmployerInquiry**
Current uploads only check file extension via the `accept` attribute (trivially bypassed). Add:
- **Client-side MIME type check**: Read first 4–8 bytes of the file and verify magic bytes match the declared type (PDF starts with `%PDF`, DOCX is a ZIP PK header, DOC starts with `D0CF`)
- **File size enforcement**: Hard-block files over 5MB client-side before any processing
- **Double extension rejection**: Reject filenames matching `/\.(pdf|doc|docx)\.\w+$/i` (e.g. `resume.pdf.exe`)
- **Filename sanitisation**: Strip special characters from displayed filename

**6. Disposable Email Blocklist**
A curated list of ~60 known disposable/temporary email domains applied at Zod validation level. This is the most impactful single spam reduction measure possible without a backend.

**7. Sentry Frontend Error Tracking (optional hook)**
Add a `src/lib/monitoring.ts` file with a Sentry-compatible error capture stub that logs security events (rejected submissions, failed validation, bot detections) to the console in development and can be wired to Sentry with just a DSN later. No SDK needed yet.

---

## Files to Change

| File | Changes |
|---|---|
| `src/lib/formSecurity.ts` | **New** — central security utilities: disposable email blocklist, injection pattern regex, time guard hook, duplicate hash check, file magic byte validator |
| `src/pages/Contact.tsx` | Add honeypot field, timing guard, duplicate hash check, hardened Zod schema, disposable email check |
| `src/pages/CandidateRegistration.tsx` | Add honeypot field to step 1, timing guard, file MIME/size/extension validation in step 3, hardened schemas |
| `src/pages/EmployerInquiry.tsx` | Harden existing honeypot, add timing guard, file MIME/size/extension validation, hardened schema |

---

## What Requires a Backend (Future Step)

To implement the remaining items from the request, the app needs to be connected to Supabase or a backend service. These would then become possible:

- reCAPTCHA v3 server-side token verification
- True IP-based rate limiting (5 per 10 min)
- Email domain verification via API
- Auto-blocking repeated captcha failures
- HTTP security headers (via Supabase Edge Function or hosting config)
- Submission fingerprinting stored server-side
- Actual form data persistence

---

## Verification Checklist (After Implementation)

| Protection Layer | Status After This Plan |
|---|---|
| Honeypot trap on all forms | Added to Contact + CandidateRegistration; already on EmployerInquiry |
| Timing-based bot rejection (<3s) | Added to all 3 forms |
| Duplicate submission blocking | Added to all 3 forms (session-scoped hash) |
| Disposable email domain blocking | Added to all 3 forms via Zod |
| Input injection pattern rejection | Added to all 3 forms via Zod (SQL, script tags, encoded patterns) |
| File MIME magic byte verification | Added to both upload forms |
| File size enforcement client-side | Added (5MB hard limit) |
| Double extension rejection | Added to both upload forms |
| XSS output escaping | Already handled by React's default rendering |
| SQL injection prevention | Not applicable — no database connected |
| HTTP security headers | Requires hosting config — not possible from React |
| IP rate limiting | Requires backend — not possible client-side |
| Session/cookie security | Not applicable — no auth system |

This plan implements every security measure that is genuinely possible in a pure frontend React app. The items listed as "requires backend" are architecturally impossible without one — implementing them would only be cosmetic (a reCAPTCHA widget with no server verification, for example, stops zero bots).
