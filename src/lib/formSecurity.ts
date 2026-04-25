// ─────────────────────────────────────────────────────────────────────────────
// formSecurity.ts — Client-side form security utilities
// All protections that are meaningful in a pure-frontend React context.
// ─────────────────────────────────────────────────────────────────────────────

// ── 1. Disposable / throwaway email domain blocklist ─────────────────────────
export const DISPOSABLE_EMAIL_DOMAINS = new Set([
  "mailinator.com", "guerrillamail.com", "guerrillamail.net", "guerrillamail.org",
  "guerrillamail.biz", "guerrillamail.de", "guerrillamail.info",
  "tempmail.com", "temp-mail.org", "temp-mail.io", "10minutemail.com",
  "10minutemail.net", "10minemail.net", "throwam.com", "yopmail.com",
  "yopmail.fr", "yopmail.net", "cool.fr.nf", "jetable.fr.nf",
  "nospam.ze.tc", "nomail.xl.cx", "mega.zik.dj", "speed.1s.fr",
  "courriel.fr.nf", "moncourrier.fr.nf", "monemail.fr.nf", "monmail.fr.nf",
  "trashmail.com", "trashmail.at", "trashmail.io", "trashmail.me",
  "trashmail.net", "trashmail.org", "dispostable.com", "mailnull.com",
  "spamgourmet.com", "spamgourmet.net", "spamgourmet.org",
  "spam4.me", "spamfree24.org", "spamfree24.de", "spamfree24.eu",
  "spamfree24.info", "spamfree24.biz", "spamfree24.net",
  "sharklasers.com", "guerrillamailblock.com", "grr.la", "guerrillamail.info",
  "spam.la", "deadaddress.com", "mailnesia.com", "mailnull.com",
  "maildrop.cc", "spamhole.com", "fakeinbox.com", "throwam.com",
  "getnada.com", "filzmail.com", "discard.email", "spamgrap.de",
  "bccto.me", "chacuo.net", "despam.it", "dispostable.com",
  "dodgit.com", "dump-email.info", "e4ward.com", "emailondeck.com",
  "fakemail.net", "getonemail.com", "gishpuppy.com", "hmamail.com",
  "incognitomail.com", "inoutmail.de", "jetable.com", "jetable.net",
  "kasmail.com", "keepmymail.com", "kurzepost.de", "lovemeleaveme.com",
  "mailexpire.com", "mailfreeonline.com", "mailin8r.com", "mailincubator.com",
  "mailismagic.com", "mailme.lv", "mailme24.com", "mailmetrash.com",
  "mailmoat.com", "mailnew.com", "mailscrap.com", "mailsiphon.com",
  "mailzilla.com", "meltmail.com", "momentics.ru", "mt2009.com",
  "mytrashmail.com", "netzidiot.de", "nobulk.com", "noclickemail.com",
  "nogmailspam.info", "nomail.pw", "nomail.xl.cx", "nospamfor.us",
  "nowmymail.com", "objectmail.com", "odaymail.com", "oneoffmail.com",
  "ordinaryamerican.net", "ovpn.to", "pecinan.com", "pecinan.net",
  "pecinan.org", "pepbot.com", "pookmail.com", "privacy.net",
  "proxymail.eu", "punkass.com", "putthisinyourspamdatabase.com",
  "quickinbox.com", "recursor.net", "regbypass.com", "rejectmail.com",
  "rklips.com", "rmqkr.net", "s0ny.net", "safetypost.de",
  "sandelf.de", "shiftmail.com", "sibmail.com", "sofort-mail.de",
  "spam.su", "spamavert.com", "spambob.com", "spambob.net",
  "spambob.org", "spambox.info", "spambox.us", "spamcannon.com",
  "spamcannon.net", "spamcon.org", "spamcorpse.com", "spamevader.net",
]);

// ── 2. Injection pattern detector ────────────────────────────────────────────
// Catches SQL operators, script tags, encoded injection, shell chars.
const INJECTION_PATTERNS = [
  /(<script[\s\S]*?>[\s\S]*?<\/script>)/gi,
  /(javascript\s*:)/gi,
  /(on\w+\s*=)/gi,                        // onerror=, onclick=, etc.
  /(<\s*iframe)/gi,
  /(<\s*img[^>]+src\s*=)/gi,
  /(union\s+select)/gi,
  /(select\s+[\w\*]+\s+from)/gi,
  /(insert\s+into)/gi,
  /(drop\s+(table|database))/gi,
  /(delete\s+from)/gi,
  /(update\s+\w+\s+set)/gi,
  /(alter\s+table)/gi,
  /(exec\s*\()/gi,
  /(xp_\w+)/gi,
  /(-{2,})/,                              // SQL comment --
  /(\/\*[\s\S]*?\*\/)/,                   // SQL block comment
  /(%27|%22|%3c|%3e|%0a|%0d)/gi,         // URL-encoded injection chars
  /(\x00|\x1a)/,                          // Null byte / substitution char
];

export function containsInjectionPattern(value: string): boolean {
  return INJECTION_PATTERNS.some((re) => re.test(value));
}

// ── 3. Time-based bot guard ───────────────────────────────────────────────────
// Call `recordPageLoadTime()` once when the form component mounts.
// Call `isSubmissionTooFast()` inside the submit handler.
const PAGE_LOAD_KEY = "__form_load_ts__";

export function recordPageLoadTime(): void {
  if (!sessionStorage.getItem(PAGE_LOAD_KEY)) {
    sessionStorage.setItem(PAGE_LOAD_KEY, String(Date.now()));
  }
}

export function isSubmissionTooFast(minMs = 3000): boolean {
  const ts = sessionStorage.getItem(PAGE_LOAD_KEY);
  if (!ts) return false;
  return Date.now() - Number(ts) < minMs;
}

// ── 4. Duplicate submission hash guard ───────────────────────────────────────
const LAST_HASH_KEY = "__last_submit_hash__";

function simpleHash(data: string): string {
  let hash = 0;
  for (let i = 0; i < data.length; i++) {
    const char = data.charCodeAt(i);
    hash = ((hash << 5) - hash) + char;
    hash = hash & hash;
  }
  return hash.toString(16);
}

// ── 5. File upload hardening ──────────────────────────────────────────────────

const MAX_FILE_SIZE_BYTES = 5 * 1024 * 1024; // 5 MB

// Magic byte signatures
const MAGIC_BYTES: Record<string, number[][]> = {
  pdf:  [[0x25, 0x50, 0x44, 0x46]],                                 // %PDF
  docx: [[0x50, 0x4b, 0x03, 0x04], [0x50, 0x4b, 0x05, 0x06]],     // PK (ZIP)
  doc:  [[0xd0, 0xcf, 0x11, 0xe0]],                                  // D0CF
};

function readFileBytes(file: File, count: number): Promise<Uint8Array> {
  return new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.onload = () => resolve(new Uint8Array(reader.result as ArrayBuffer));
    reader.onerror = reject;
    reader.readAsArrayBuffer(file.slice(0, count));
  });
}

function matchesMagic(bytes: Uint8Array, magic: number[][]): boolean {
  return magic.some((sig) => sig.every((b, i) => bytes[i] === b));
}

export type FileValidationResult =
  | { ok: true; sanitizedName: string }
  | { ok: false; error: string };

export async function validateUploadedFile(file: File): Promise<FileValidationResult> {
  // Size check
  if (file.size > MAX_FILE_SIZE_BYTES) {
    return { ok: false, error: "File exceeds the 5 MB size limit." };
  }

  // Double-extension check — e.g. resume.pdf.exe
  const doubleExt = /\.(pdf|doc|docx)\.\w+$/i;
  if (doubleExt.test(file.name)) {
    return { ok: false, error: "Invalid filename. Double extensions are not allowed." };
  }

  // Extension whitelist
  const ext = file.name.split(".").pop()?.toLowerCase() ?? "";
  if (!["pdf", "doc", "docx"].includes(ext)) {
    return { ok: false, error: "Only PDF, DOC, and DOCX files are accepted." };
  }

  // MIME magic byte check
  const bytes = await readFileBytes(file, 8);
  const allowed = MAGIC_BYTES[ext];
  if (allowed && !matchesMagic(bytes, allowed)) {
    return { ok: false, error: "File content does not match the declared type." };
  }

  // Sanitise filename for display
  const sanitizedName = file.name.replace(/[^\w.\-]/g, "_");

  return { ok: true, sanitizedName };
}

// ── 6. Zod helpers ─────────────────────────────────────────────────────────────

import * as z from "zod";

export const safeNameSchema = z
  .string()
  .trim()
  .min(2, "Required")
  .max(100, "Too long")
  .regex(/^[a-zA-Z\s\-'.]+$/, "Name contains invalid characters");

export const safeEmailSchema = z
  .string()
  .trim()
  .email("Valid email required")
  .max(255, "Too long")
  .refine(
    (v) => !DISPOSABLE_EMAIL_DOMAINS.has(v.split("@")[1]?.toLowerCase() ?? ""),
    "Disposable email addresses are not accepted"
  );

export const safePhoneSchema = z
  .string()
  .trim()
  .min(7, "Valid phone required")
  .max(20, "Too long")
  .regex(/^[\d\s\+\-\(\)]+$/, "Phone number contains invalid characters");

export const safeTextSchema = (min = 10, max = 2000) =>
  z
    .string()
    .trim()
    .min(min, `Must be at least ${min} characters`)
    .max(max, `Must be under ${max} characters`)
    .refine((v) => !containsInjectionPattern(v), "Input contains disallowed content");

export const safeShortTextSchema = (label = "Field") =>
  z
    .string()
    .trim()
    .min(2, `${label} is required`)
    .max(200, `${label} is too long`)
    .refine((v) => !containsInjectionPattern(v), "Input contains disallowed content");
