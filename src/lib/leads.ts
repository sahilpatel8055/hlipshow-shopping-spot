/**
 * Google Apps Script lead capture (zero backend).
 * The Apps Script web app reads JSON from e.postData.contents and appends a row
 * to the sheet named by `sheetName`.
 */

export const LEAD_ENDPOINT =
  "https://script.google.com/macros/s/AKfycbxDCGIr01-dyHzlxSGfWjz9cH0oL9Gqv-V7jODdrgLkJbR3MJY7oH8W5C1XwALG_lF8nQ/exec";

/** Tab inside the spreadsheet that receives LPU leads. */
export const LEAD_SHEET_NAME = "LPU_ADS";

export type LeadPayload = {
  fullName: string;
  email: string;
  phoneNumber: string;
  interestedCourse: string;
  state?: string;
  leadSource?: string;
  /** honeypot — must stay empty */
  company?: string;
};

const RATE_KEY = "lpu_lead_last_submit";
const RATE_MS = 20_000;

function rateLimited() {
  try {
    const last = Number(localStorage.getItem(RATE_KEY) || 0);
    return last > 0 && Date.now() - last < RATE_MS;
  } catch {
    return false;
  }
}

function markSubmitted() {
  try {
    localStorage.setItem(RATE_KEY, String(Date.now()));
  } catch {}
}

export function validateLead(p: LeadPayload): string | null {
  const name = p.fullName.trim();
  if (name.length < 2 || name.length > 100) return "Please enter your full name.";
  const phone = p.phoneNumber.replace(/\D/g, "");
  if (!/^[6-9]\d{9}$/.test(phone)) return "Please enter a valid 10-digit mobile number.";
  if (!/^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/.test(p.email.trim()) || p.email.length > 255)
    return "Please enter a valid email address.";
  if (!p.interestedCourse.trim()) return "Please select a program.";
  return null;
}

export async function submitLead(p: LeadPayload): Promise<{ ok: boolean; error?: string }> {
  if (p.company) return { ok: true }; // honeypot: silently drop bots
  const error = validateLead(p);
  if (error) return { ok: false, error };
  if (rateLimited()) return { ok: false, error: "Please wait a moment before submitting again." };

  const body = {
    sheetName: LEAD_SHEET_NAME,
    fullName: p.fullName.trim(),
    email: p.email.trim(),
    phoneNumber: p.phoneNumber.replace(/\D/g, ""),
    interestedCourse: p.interestedCourse.trim(),
    state: (p.state || "").trim(),
    timestamp: new Date().toISOString(),
    leadSource:
      p.leadSource ||
      (typeof window !== "undefined"
        ? `lpuonline.avedu.in${window.location.pathname}`
        : "lpuonline.avedu.in"),
  };

  try {
    // text/plain avoids a CORS preflight; Apps Script still gets the raw JSON body.
    await fetch(LEAD_ENDPOINT, {
      method: "POST",
      mode: "no-cors",
      headers: { "Content-Type": "text/plain;charset=utf-8" },
      body: JSON.stringify(body),
    });
    markSubmitted();
    return { ok: true };
  } catch {
    return { ok: false, error: "Could not submit right now. Please call +91 87700 12496." };
  }
}
