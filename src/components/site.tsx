import { useEffect, useState, type ReactNode } from "react";
import { Link } from "@tanstack/react-router";
import { lpu, allCourses } from "@/lib/lpu";
import { getCourseSeo } from "@/lib/course-seo";
import { submitLead } from "@/lib/leads";
import {
  Flame,
  X,
  Phone,
  MessageCircle,
  PhoneCall,
  Download,
  ChevronRight,
  ChevronLeft,
  Briefcase,
  Star,
  Home,
} from "lucide-react";

// Logo lives in /public — reference directly.
const LOGO_SRC = "/lpu-logo.png";
const AVEDU_LOGO_SRC = "/avedu-logo.jpg";

/* ---------------- Modal singleton ---------------- */

type ModalCtx = { open: () => void };
const modalCtx: { current: ModalCtx | null } = { current: null };
import { SectionNav as SectionNavImpl } from "@/components/section-nav";
export { SectionNav } from "@/components/section-nav";

export const openModal = () => modalCtx.current?.open();

const FILLED_KEY = "lpu_lead_filled";
const COOLDOWN_KEY = "lpu_popup_cooldown_until";
const SHOWN_KEY = "lpu_popup_shown_session";

export function markLeadFilled() {
  try {
    localStorage.setItem(FILLED_KEY, "1");
  } catch {}
}

function isFilled() {
  try {
    return localStorage.getItem(FILLED_KEY) === "1";
  } catch {
    return false;
  }
}

function inCooldown() {
  try {
    const until = Number(localStorage.getItem(COOLDOWN_KEY) || 0);
    return until && Date.now() < until;
  } catch {
    return false;
  }
}

export function useModalTrigger() {
  const [open, setOpen] = useState(false);
  useEffect(() => {
    modalCtx.current = { open: () => setOpen(true) };
    return () => {
      modalCtx.current = null;
    };
  }, []);

  // Auto-popup: 15s time delay, 25% scroll, exit-intent, session/cooldown persistence.
  useEffect(() => {
    if (typeof window === "undefined") return;
    if (isFilled() || inCooldown()) return;
    if (sessionStorage.getItem(SHOWN_KEY) === "1") return;

    let done = false;
    const trigger = () => {
      if (done) return;
      done = true;
      sessionStorage.setItem(SHOWN_KEY, "1");
      setOpen(true);
      cleanup();
    };

    const onScroll = () => {
      const h = document.documentElement;
      const scrolled = (h.scrollTop + window.innerHeight) / h.scrollHeight;
      if (scrolled >= 0.25) trigger();
    };
    const onExit = (e: MouseEvent) => {
      if (e.clientY <= 0) trigger();
    };
    const timer = window.setTimeout(trigger, 15000);
    window.addEventListener("scroll", onScroll, { passive: true });
    document.addEventListener("mouseleave", onExit);

    function cleanup() {
      window.clearTimeout(timer);
      window.removeEventListener("scroll", onScroll);
      document.removeEventListener("mouseleave", onExit);
    }
    return cleanup;
  }, []);

  // On close, set 5-minute cooldown so it doesn't reopen immediately on next page.
  const setOpenWrapped = (v: boolean) => {
    if (!v && open) {
      try {
        localStorage.setItem(COOLDOWN_KEY, String(Date.now() + 5 * 60 * 1000));
      } catch {}
    }
    setOpen(v);
  };

  return { open, setOpen: setOpenWrapped };
}


/* ---------------- Inputs ---------------- */

export function LabeledInput({
  label,
  ...rest
}: React.InputHTMLAttributes<HTMLInputElement> & { label: string }) {
  return (
    <label className="block">
      <span className="mb-1.5 block text-xs font-bold uppercase tracking-wide text-foreground/90">
        {label}
      </span>
      <input
        {...rest}
        className="w-full rounded-md border-2 border-border bg-background px-4 py-2.5 text-sm font-medium text-foreground placeholder:text-muted-foreground/80 outline-none transition focus:border-primary focus:ring-2 focus:ring-primary/25"
      />
    </label>
  );
}

export function LabeledSelect({
  label,
  children,
  ...rest
}: React.SelectHTMLAttributes<HTMLSelectElement> & { label: string }) {
  return (
    <label className="block">
      <span className="mb-1.5 block text-xs font-bold uppercase tracking-wide text-foreground/90">
        {label}
      </span>
      <select
        {...rest}
        className="w-full rounded-md border-2 border-border bg-background px-4 py-2.5 text-sm font-medium text-foreground outline-none transition focus:border-primary focus:ring-2 focus:ring-primary/25"
      >
        {children}
      </select>
    </label>
  );
}

/* ---------------- Modal ---------------- */

export function CounselingModal({
  open,
  onClose,
}: {
  open: boolean;
  onClose: () => void;
}) {
  if (!open) return null;
  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center bg-black/60 p-3 backdrop-blur-sm sm:p-4">
      <div className="relative w-full max-w-[380px] overflow-hidden rounded-2xl bg-card shadow-2xl">
        <button
          onClick={onClose}
          aria-label="Close"
          className="absolute right-2.5 top-2.5 z-10 grid h-8 w-8 place-items-center rounded-full bg-background/90 text-foreground shadow hover:bg-background"
        >
          <X className="h-4 w-4" />
        </button>
        <div
          className="px-4 pt-4 pb-3 text-primary-foreground"
          style={{ background: "var(--gradient-brand)" }}
        >
          <div className="flex items-center gap-2.5">
            <div className="grid h-10 w-10 shrink-0 place-items-center rounded-lg bg-white/95 p-1">
              <img src={LOGO_SRC} alt="LPU Online" className="h-full w-full object-contain" />
            </div>
            <div className="min-w-0">
              <p className="text-sm font-extrabold leading-tight">Admission Open · Batch 2026</p>
              <p className="text-[11px] opacity-95">Free counseling with LPU Online advisor</p>
            </div>
          </div>
        </div>

        <div className="px-4 pt-3">
          <div className="flex items-center justify-between text-[11px] font-semibold text-foreground/80">
            <span className="inline-flex items-center gap-1.5">
              <Flame className="h-3.5 w-3.5 text-primary" /> Seats filling fast
            </span>
            <span className="text-primary">85% filled</span>
          </div>
          <div className="mt-1.5 h-1.5 w-full overflow-hidden rounded-full bg-accent">
            <div
              className="h-full w-[85%] rounded-full"
              style={{ background: "var(--gradient-brand)" }}
            />
          </div>
        </div>

        <LeadFields
          className="grid gap-2.5 p-4"
          submitLabel="Get Free Counseling Now"
          source="counseling-modal"
          onDone={onClose}
          grouped
          footer={
            <p className="text-center text-[10px] text-muted-foreground">
              By submitting you agree to be contacted about LPU Online programs.
            </p>
          }
        />
      </div>
    </div>
  );
}

/* ---------------- Shared lead fields (Google Sheet wired) ---------------- */

function LeadFields({
  className,
  submitLabel,
  source,
  onDone,
  grouped,
  footer,
}: {
  className: string;
  submitLabel: string;
  source: string;
  onDone?: () => void;
  grouped?: boolean;
  footer?: ReactNode;
}) {
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [program, setProgram] = useState("");
  const [company, setCompany] = useState(""); // honeypot
  const [busy, setBusy] = useState(false);
  const [err, setErr] = useState<string | null>(null);
  const [done, setDone] = useState(false);

  if (done) {
    return (
      <div className="p-4 text-center">
        <p className="text-base font-bold text-foreground">Thank you! 🎉</p>
        <p className="mt-1 text-sm text-muted-foreground">
          Our LPU Online counselor will call you shortly on {phone || "your number"}.
        </p>
        <a
          href="tel:+918770012496"
          className="mt-3 inline-flex items-center gap-2 rounded-md bg-primary px-4 py-2 text-sm font-bold text-primary-foreground"
        >
          <Phone className="h-4 w-4" /> Call now instead
        </a>
      </div>
    );
  }

  return (
    <form
      className={className}
      onSubmit={async (e) => {
        e.preventDefault();
        if (busy) return;
        setBusy(true);
        setErr(null);
        const res = await submitLead({
          fullName: name,
          email,
          phoneNumber: phone,
          interestedCourse: program,
          company,
          leadSource: `${source} · ${typeof window !== "undefined" ? window.location.pathname : "/"}`,
        });
        setBusy(false);
        if (!res.ok) {
          setErr(res.error || "Something went wrong.");
          return;
        }
        markLeadFilled();
        setDone(true);
        if (onDone) setTimeout(onDone, 2200);
      }}
    >
      <LabeledInput
        label="Full Name"
        placeholder="e.g. Rahul Sharma"
        value={name}
        onChange={(e) => setName(e.target.value)}
        maxLength={100}
        required
      />
      <LabeledInput
        label="Mobile Number"
        type="tel"
        inputMode="numeric"
        placeholder="10-digit mobile"
        value={phone}
        onChange={(e) => setPhone(e.target.value.replace(/\D/g, "").slice(0, 10))}
        required
      />
      <LabeledInput
        label="Email"
        type="email"
        placeholder="name@example.com"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        maxLength={255}
        required
      />
      <LabeledSelect
        label="Select Program"
        value={program}
        onChange={(e) => setProgram(e.target.value)}
        required
      >
        <option value="">Choose a program</option>
        {grouped ? (
          <>
            <optgroup label="PG Programs">
              {lpu.courses.pg.map((c) => (
                <option key={c.name}>{c.name}</option>
              ))}
            </optgroup>
            <optgroup label="UG Programs">
              {lpu.courses.ug.map((c) => (
                <option key={c.name}>{c.name}</option>
              ))}
            </optgroup>
          </>
        ) : (
          [...lpu.courses.pg, ...lpu.courses.ug].map((c) => <option key={c.name}>{c.name}</option>)
        )}
      </LabeledSelect>

      {/* honeypot — hidden from humans */}
      <input
        type="text"
        name="company"
        tabIndex={-1}
        autoComplete="off"
        aria-hidden="true"
        value={company}
        onChange={(e) => setCompany(e.target.value)}
        className="absolute left-[-9999px] h-0 w-0 opacity-0"
      />

      {err && <p className="text-xs font-semibold text-destructive">{err}</p>}

      <button
        type="submit"
        disabled={busy}
        className="mt-1 w-full rounded-md bg-primary px-6 py-2.5 text-sm font-bold text-primary-foreground shadow-[var(--shadow-brand)] transition hover:opacity-90 disabled:opacity-60"
      >
        {busy ? "Submitting…" : submitLabel}
      </button>
      {footer}
    </form>
  );
}

/* ---------------- Compact lead form ---------------- */

export function LeadFormCompact() {
  return (
    <div
      id="lead-compact"
      className="rounded-2xl border-2 border-primary/30 bg-card p-5 shadow-[var(--shadow-brand)] sm:p-6"
    >
      <div className="flex items-center gap-3 border-b border-border pb-4">
        <div className="grid h-10 w-10 shrink-0 place-items-center rounded-lg bg-white p-1 ring-1 ring-border">
          <img src={LOGO_SRC} alt="LPU Online" className="h-full w-full object-contain" />
        </div>
        <div className="min-w-0">
          <p className="text-sm font-extrabold text-foreground">Admission Open</p>
          <p className="text-xs text-muted-foreground">Batch 2026 · 85% seats filled</p>
        </div>
      </div>
      <LeadFields className="mt-4 grid gap-3" submitLabel="Get Free Counseling" source="embedded-form" />
    </div>
  );
}


/* ---------------- Header ---------------- */

export function SiteHeader() {
  return (
    <header className="sticky top-0 z-40 w-full border-b border-border/70 bg-background/95 backdrop-blur">
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-4 sm:h-20 sm:px-6 lg:px-8">
        <Link to="/" className="flex items-center gap-3">
          <img
            src={LOGO_SRC}
            alt="LPU Online — Same Degree, Now Online"
            className="h-10 w-auto sm:h-14"
          />
        </Link>
        <button
          type="button"
          onClick={openModal}
          className="inline-flex items-center rounded-md bg-primary px-4 py-2 text-sm font-semibold text-primary-foreground shadow-[var(--shadow-brand)] transition hover:opacity-90 sm:px-7 sm:py-3 sm:text-base"
        >
          Enroll Now
        </button>
      </div>
    </header>
  );
}

/* ---------------- Sticky Action Bar (desktop right rail + mobile bottom bar) ---------------- */

const CALL_TEL = "tel:+918770012496";
const WA_TEXT = "Hi, I want free counseling and more information about LPU Online programs.";
const WA_LINK = `https://wa.me/918770012496?text=${encodeURIComponent(WA_TEXT)}`;

function WhatsAppTeaser() {
  const [open, setOpen] = useState(false);
  useEffect(() => {
    if (typeof window === "undefined") return;
    if (sessionStorage.getItem("wa_teaser_seen")) return;
    const t = setTimeout(() => {
      setOpen(true);
      sessionStorage.setItem("wa_teaser_seen", "1");
      setTimeout(() => setOpen(false), 20000);
    }, 30000);
    return () => clearTimeout(t);
  }, []);
  if (!open) return null;
  return (
    <div className="fixed bottom-24 right-3 z-50 w-[240px] rounded-2xl border border-border bg-card p-3 shadow-xl md:bottom-32 md:right-4 md:w-[280px]">
      <button
        type="button"
        aria-label="Close WhatsApp message"
        onClick={() => setOpen(false)}
        className="absolute right-2 top-2 text-muted-foreground hover:text-foreground"
      >
        <X className="h-4 w-4" />
      </button>
      <div className="flex items-start gap-2 pr-4">
        <MessageCircle className="mt-0.5 h-5 w-5 shrink-0 text-[#16a34a]" />
        <p className="text-xs font-medium leading-snug text-foreground">
          Still deciding? Chat with an LPU Online counselor on WhatsApp — free guidance in 2 minutes.
        </p>
      </div>
      <a
        href={WA_LINK}
        target="_blank"
        rel="noopener"
        onClick={() => setOpen(false)}
        className="mt-2 flex w-full items-center justify-center gap-1.5 rounded-full bg-[#22c55e] px-3 py-2 text-xs font-semibold text-white"
      >
        <MessageCircle className="h-4 w-4" /> Chat on WhatsApp
      </a>
    </div>
  );
}

/* ---------------- Social Proof Notifications (compact, low-footprint) ---------------- */

const SOCIAL_PROOF: { name: string; city: string; action: string }[] = [
  { name: "Rahul S.", city: "Delhi", action: "applied for Online MBA" },
  { name: "Priya M.", city: "Pune", action: "downloaded the BCA brochure" },
  { name: "Aman K.", city: "Lucknow", action: "booked free counseling" },
  { name: "Sneha R.", city: "Hyderabad", action: "enquired about MCA fees" },
  { name: "Vikas T.", city: "Jaipur", action: "checked BBA eligibility" },
  { name: "Neha G.", city: "Kolkata", action: "started an M.Com application" },
  { name: "Arjun P.", city: "Bengaluru", action: "requested a callback" },
  { name: "Divya N.", city: "Indore", action: "applied for Online BA" },
];

function SocialProofToasts() {
  const [item, setItem] = useState<(typeof SOCIAL_PROOF)[number] | null>(null);

  useEffect(() => {
    if (typeof window === "undefined") return;
    let i = Math.floor(Math.random() * SOCIAL_PROOF.length);
    let hide: ReturnType<typeof setTimeout>;
    const show = () => {
      setItem(SOCIAL_PROOF[i % SOCIAL_PROOF.length]);
      i += 1;
      hide = setTimeout(() => setItem(null), 5000);
    };
    const first = setTimeout(show, 12000);
    const loop = setInterval(show, 22000);
    return () => {
      clearTimeout(first);
      clearTimeout(hide);
      clearInterval(loop);
    };
  }, []);

  if (!item) return null;
  return (
    <div
      role="status"
      aria-live="polite"
      className="fixed bottom-20 left-3 z-40 max-w-[240px] animate-in fade-in slide-in-from-bottom-2 rounded-full border border-border bg-card/95 py-1.5 pl-2 pr-3 shadow-lg backdrop-blur md:bottom-20 md:left-4 md:max-w-[280px]"
    >
      <div className="flex items-center gap-2">
        <span className="grid h-6 w-6 shrink-0 place-items-center rounded-full bg-primary/10 text-[10px] font-bold text-primary">
          {item.name.charAt(0)}
        </span>
        <p className="truncate text-[11px] leading-tight text-foreground">
          <span className="font-semibold">{item.name}</span>
          <span className="text-muted-foreground"> from {item.city} {item.action}</span>
        </p>
        <button
          type="button"
          aria-label="Dismiss notification"
          onClick={() => setItem(null)}
          className="ml-0.5 shrink-0 text-muted-foreground hover:text-foreground"
        >
          <X className="h-3 w-3" />
        </button>
      </div>
    </div>
  );
}


export function StickyActionBar() {
  return (
    <>
      {/* Desktop / tablet: Call Now bottom-left; Callback + WhatsApp bottom-right */}
      <a
        href={CALL_TEL}
        className="fixed bottom-5 left-4 z-40 hidden items-center gap-2 rounded-full bg-primary px-4 py-2.5 text-sm font-semibold text-primary-foreground shadow-[var(--shadow-brand)] transition hover:opacity-90 md:inline-flex"
      >
        <Phone className="h-4 w-4" /> Call Now
      </a>
      <div className="fixed bottom-5 right-4 z-40 hidden flex-col gap-2 md:flex">
        <button
          type="button"
          onClick={openModal}
          className="inline-flex items-center gap-2 rounded-full bg-[#f97316] px-4 py-2.5 text-sm font-semibold text-white shadow-lg transition hover:opacity-90"
        >
          <PhoneCall className="h-4 w-4" /> Request Callback
        </button>
        <a
          href={WA_LINK}
          target="_blank"
          rel="noopener"
          className="inline-flex items-center gap-2 rounded-full bg-[#22c55e] px-4 py-2.5 text-sm font-semibold text-white shadow-lg transition hover:opacity-90"
        >
          <MessageCircle className="h-4 w-4" /> WhatsApp
        </a>
      </div>

      {/* Mobile: bottom fixed action bar */}
      <div className="fixed inset-x-0 bottom-0 z-40 grid grid-cols-3 border-t border-border bg-card shadow-[0_-6px_18px_rgba(0,0,0,0.08)] md:hidden">
        <a
          href={CALL_TEL}
          className="flex flex-col items-center justify-center gap-0.5 py-2.5 text-xs font-semibold text-primary"
        >
          <Phone className="h-5 w-5" />
          Call Now
        </a>
        <a
          href={WA_LINK}
          target="_blank"
          rel="noopener"
          className="flex flex-col items-center justify-center gap-0.5 border-x border-border py-2.5 text-xs font-semibold text-[#16a34a]"
        >
          <MessageCircle className="h-5 w-5" />
          WhatsApp
        </a>
        <button
          type="button"
          onClick={openModal}
          className="flex flex-col items-center justify-center gap-0.5 py-2.5 text-xs font-semibold text-[#ea580c]"
        >
          <PhoneCall className="h-5 w-5" />
          Callback
        </button>
      </div>

      <WhatsAppTeaser />
      <SocialProofToasts />


      {/* Reserve space for mobile bar so page content isn't hidden */}
      <div aria-hidden className="h-14 md:hidden" />
    </>
  );
}


/* ---------------- Footer ---------------- */

const footerLinks: { label: string; to: string }[] = [
  { label: "LPU Online Admission", to: "/lpu-online-admission" },
  { label: "Courses", to: "/lpu-online-courses" },
  { label: "Fees", to: "/lpu-online-fees" },
  { label: "Eligibility", to: "/lpu-online-eligibility" },
  { label: "Placement", to: "/lpu-online-placement" },
  { label: "LPU Online Reviews", to: "/lpu-online-review" },
  { label: "Scholarship", to: "/lpu-online-scholarship" },
  { label: "Admission Last Date", to: "/lpu-online-admission-last-date" },
];

export function SiteFooter() {
  return (
    <footer className="border-t border-border bg-background pt-10 pb-16 md:pb-10">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid gap-8 md:grid-cols-3">
          <div>
            <div className="flex items-center gap-3">
              <img src={LOGO_SRC} alt="LPU Online" className="h-10 w-auto" />
              <img src={AVEDU_LOGO_SRC} alt="avedu" className="h-10 w-auto rounded" />
            </div>
            <p className="mt-3 text-sm text-muted-foreground">
              UGC-entitled online degrees from Lovely Professional University — NAAC A++,
              flexible learning, dedicated placement support.
            </p>
          </div>
          <div>
            <p className="text-sm font-bold text-foreground">Quick Links</p>
            <ul className="mt-3 grid grid-cols-2 gap-2 text-sm">
              {footerLinks.map((l) => (
                <li key={l.to}>
                  <Link
                    to={l.to}
                    className="text-muted-foreground hover:text-primary hover:underline"
                  >
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <p className="text-sm font-bold text-foreground">Talk to us</p>
            <ul className="mt-3 space-y-2 text-sm text-muted-foreground">
              <li className="inline-flex items-center gap-2">
                <a href={CALL_TEL} className="inline-flex items-center gap-2 hover:text-primary"><Phone className="h-4 w-4 text-primary" /> +91 87700 12496</a>
              </li>
              <li className="inline-flex items-center gap-2">
                <a href={WA_LINK} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 hover:text-primary"><MessageCircle className="h-4 w-4 text-primary" /> WhatsApp counselling — 87700 12496</a>
              </li>
            </ul>
          </div>
        </div>
        <div className="mt-8 rounded-lg border border-border bg-secondary/40 p-4 text-xs text-muted-foreground">
          <p className="font-semibold text-foreground">Disclaimer</p>
          <p className="mt-1">
            This website lpuonline.avedu.in is operated under the brand name www.avedu.in. We are an independent education guidance platform and are not affiliated with Lovely Professional University (LPU) or any other university. LPU holds full rights to request change or removal of any non-relevant content. Images used are for illustrative purposes and do not directly represent the respective colleges or universities. We do not act as a university or an admission authority.
          </p>
        </div>

        <div className="mt-6 flex flex-wrap items-center justify-center gap-x-6 gap-y-2 border-t border-border pt-6">
          <Link to="/disclaimer" className="text-sm font-semibold text-primary hover:underline">Disclaimer</Link>
          <span className="text-muted-foreground/40">|</span>
          <Link to="/terms-conditions" className="text-sm font-semibold text-primary hover:underline">Terms &amp; Conditions</Link>
          <span className="text-muted-foreground/40">|</span>
          <Link to="/privacy-policy" className="text-sm font-semibold text-primary hover:underline">Privacy Policy</Link>
        </div>
        <p className="mt-4 text-center text-xs text-muted-foreground">
          © {new Date().getFullYear()} LPU Online · avedu. All rights reserved.
        </p>
      </div>
    </footer>
  );
}

/* ---------------- Career Assistance ---------------- */

import placementImage from "@/assets/placement.jpg";

const careerItems = [
  {
    title: "AI-Powered Resume Builder",
    desc: "Instantly create professional resumes tailored to your profile using AI.",
  },
  {
    title: "Mock Video Interview",
    desc: "Practice real-time interview scenarios to boost your confidence.",
  },
  {
    title: "Personality Test",
    desc: "Understand your strengths and traits with an insightful personality assessment.",
  },
  {
    title: "Aptitude Test Training",
    desc: "Sharpen your reasoning and problem-solving skills with expert-guided prep.",
  },
  {
    title: "Skills Enhancement",
    desc: "Improve industry-relevant skills through targeted training programs.",
  },
  {
    title: "Job Openings",
    desc: "Explore curated job opportunities across top companies and sectors.",
  },
];

export function CareerAssistance() {
  return (
    <section className="bg-background py-16 sm:py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-foreground sm:text-4xl lg:text-5xl">
          Career Assistance
        </h2>
        <p className="mt-4 max-w-3xl text-base text-muted-foreground sm:text-lg">
          Get end-to-end career support including resume building, mock interviews, skill
          training, and job placement assistance to boost your employability after completing
          your online UG or PG course.
        </p>
        <div className="mt-10 grid items-center gap-8 lg:grid-cols-2">
          <div className="flex justify-center">
            <img
              src={placementImage}
              alt="A working professional"
              loading="lazy"
              className="w-full max-w-sm rounded-2xl shadow-2xl"
            />
          </div>
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
            {careerItems.map((it) => (
              <div
                key={it.title}
                className="group rounded-2xl border border-border bg-card p-5 transition-colors duration-300 hover:bg-primary hover:text-primary-foreground"
              >
                <div className="flex items-center gap-3">
                  <Star className="h-6 w-6 text-primary transition-colors group-hover:text-primary-foreground" />
                  <h3 className="text-lg font-semibold">{it.title}</h3>
                </div>
                <p className="mt-2 text-sm text-muted-foreground transition-colors group-hover:text-primary-foreground/90">
                  {it.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

/* ---------------- Specializations (2 per row grid + arrow slider on mobile) ---------------- */

export function SpecializationsSection({
  title = "Specializations Offered",
  specializations,
}: {
  title?: string;
  specializations: string[];
}) {
  const pageSize = 4; // 2 columns × 2 rows
  const [page, setPage] = useState(0);
  const totalPages = Math.max(1, Math.ceil(specializations.length / pageSize));
  const current = specializations.slice(page * pageSize, page * pageSize + pageSize);

  return (
    <section
      className="py-14 sm:py-16"
      style={{
        backgroundImage:
          "linear-gradient(180deg, color-mix(in oklab, var(--primary) 6%, transparent), transparent)",
      }}
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex items-end justify-between gap-4">
          <h2 className="text-2xl font-bold text-foreground sm:text-3xl lg:text-4xl">{title}</h2>
          <div className="flex gap-2">
            <button
              type="button"
              aria-label="Previous specializations"
              onClick={() => setPage((p) => (p - 1 + totalPages) % totalPages)}
              className="grid h-10 w-10 place-items-center rounded-full border border-border bg-background text-foreground hover:bg-accent"
            >
              <ChevronLeft className="h-5 w-5" />
            </button>
            <button
              type="button"
              aria-label="Next specializations"
              onClick={() => setPage((p) => (p + 1) % totalPages)}
              className="grid h-10 w-10 place-items-center rounded-full border border-border bg-background text-foreground hover:bg-accent"
            >
              <ChevronRight className="h-5 w-5" />
            </button>
          </div>
        </div>

        <div className="mt-8 grid grid-cols-2 gap-4 sm:gap-5">
          {current.map((spec) => (
            <div
              key={spec}
              className="flex items-center gap-3 rounded-2xl border border-border bg-card px-4 py-4 shadow-sm sm:gap-4 sm:px-5 sm:py-5"
            >
              <span className="grid h-10 w-10 shrink-0 place-items-center rounded-full bg-background ring-1 ring-border text-primary sm:h-12 sm:w-12">
                <Briefcase className="h-5 w-5" />
              </span>
              <h3 className="text-sm font-semibold leading-snug text-foreground sm:text-base lg:text-lg">
                {spec}
              </h3>
            </div>
          ))}
        </div>

        {totalPages > 1 && (
          <div className="mt-6 flex justify-center gap-2">
            {Array.from({ length: totalPages }).map((_, i) => (
              <button
                key={i}
                type="button"
                aria-label={`Go to page ${i + 1}`}
                onClick={() => setPage(i)}
                className={`h-2.5 rounded-full transition-all ${
                  page === i ? "w-6 bg-primary" : "w-2.5 bg-border"
                }`}
              />
            ))}
          </div>
        )}
      </div>
    </section>
  );
}

/* ---------------- Breadcrumb ---------------- */

export type Crumb = { label: string; to?: string };

export function Breadcrumb({ items }: { items: Crumb[] }) {
  const ldItems = items.map((c, i) => ({
    "@type": "ListItem",
    position: i + 1,
    name: c.label,
    ...(c.to ? { item: `https://lpuonline.avedu.in${c.to}` } : {}),
  }));
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: ldItems,
  };
  return (
    <nav
      aria-label="Breadcrumb"
      className="border-b border-border/60 bg-secondary/40"
    >
      <div className="mx-auto flex max-w-7xl items-center gap-1.5 overflow-x-auto px-4 py-2.5 text-xs text-muted-foreground sm:px-6 sm:text-sm lg:px-8">
        <Link to="/" className="inline-flex items-center gap-1 hover:text-primary">
          <Home className="h-3.5 w-3.5" /> Home
        </Link>
        {items.map((c) => (
          <span key={c.label} className="inline-flex items-center gap-1.5">
            <ChevronRight className="h-3.5 w-3.5 opacity-60" />
            {c.to ? (
              <Link to={c.to} className="hover:text-primary">
                {c.label}
              </Link>
            ) : (
              <span className="font-semibold text-foreground">{c.label}</span>
            )}
          </span>
        ))}
      </div>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
    </nav>
  );
}

/* ---------------- SEO FAQ block with JSON-LD ---------------- */

export function SeoFaq({ items }: { items: { q: string; a: string }[] }) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: items.map((f) => ({
      "@type": "Question",
      name: f.q,
      acceptedAnswer: { "@type": "Answer", text: f.a },
    })),
  };
  return (
    <section className="bg-secondary/40 py-16">
      <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
        <h2 className="text-center text-3xl font-bold text-foreground sm:text-4xl">
          Frequently Asked Questions
        </h2>
        <div className="mt-10 space-y-4">
          {items.map((f) => (
            <details
              key={f.q}
              className="group rounded-xl border border-border bg-card p-5 open:shadow-[var(--shadow-brand)]"
            >
              <summary className="flex cursor-pointer items-center justify-between text-base font-semibold text-foreground">
                {f.q}
                <ChevronRight className="h-5 w-5 text-primary transition group-open:rotate-90" />
              </summary>
              <p className="mt-3 text-sm text-muted-foreground">{f.a}</p>
            </details>
          ))}
        </div>
      </div>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
    </section>
  );
}

/* ---------------- Popular Searches (SEO internal links) ---------------- */

const popularSearches: { label: string; to: string }[] = [
  { label: "LPU Online Admission", to: "/lpu-online-admission" },
  { label: "LPU Online MBA", to: "/courses/mba" },
  { label: "LPU Online MCA", to: "/courses/mca" },
  { label: "LPU Online BCA", to: "/courses/bca" },
  { label: "LPU Online BBA", to: "/courses/bba" },
  { label: "LPU Online BA", to: "/courses/ba" },
  { label: "LPU Online B.Com", to: "/courses/bcom" },
  { label: "LPU Online M.Com", to: "/courses/mcom" },
  { label: "LPU Online MA", to: "/courses/ma" },
  { label: "LPU Online Courses", to: "/lpu-online-courses" },
  { label: "LPU Online Fees", to: "/lpu-online-fees" },
  { label: "LPU Online Eligibility", to: "/lpu-online-eligibility" },
  { label: "LPU Online Review", to: "/lpu-online-review" },
  { label: "LPU Online Placement", to: "/lpu-online-placement" },
  { label: "LPU Online Scholarship", to: "/lpu-online-scholarship" },
  { label: "LPU Admission Last Date", to: "/lpu-online-admission-last-date" },
  { label: "LPU Online MBA Review 2026", to: "/blog/lpu-online-mba-review-2026" },
  { label: "LPU Online Fees 2026 Guide", to: "/blog/lpu-online-fees-2026" },
  { label: "LPU Online Degree Validity", to: "/blog/lpu-online-degree-validity" },
  { label: "LPU Online Exam Pattern", to: "/blog/lpu-online-exam-pattern-2026" },
  { label: "LPU Online Courses List 2026", to: "/blog/lpu-online-courses-list-2026" },
  { label: "LPU Online BBA Fees 2026", to: "/blog/lpu-online-bba-fees-2026" },
  { label: "LPU Online BCA Guide", to: "/blog/lpu-online-bca-guide-2026" },
  { label: "LPU Online MBA Guide", to: "/blog/lpu-online-mba-complete-guide-2026" },
  { label: "LPU Online BA Guide", to: "/blog/lpu-online-ba-guide-2026" },
  { label: "LPU Online B.Com Guide", to: "/blog/lpu-online-bcom-guide-2026" },
  { label: "Online BBA Admission 2026", to: "/blog/online-bba-admission-guide-2026" },
  { label: "LPU Online Placement Guide", to: "/blog/lpu-online-placement-guide-2026" },
  { label: "LPU vs Manipal", to: "/compare/lpu-vs-manipal" },
  { label: "LPU vs Amity", to: "/compare/lpu-vs-amity" },
  { label: "LPU vs Chandigarh University", to: "/compare/lpu-vs-chandigarh" },
  { label: "LPU vs Jain", to: "/compare/lpu-vs-jain" },
  { label: "LPU vs DY Patil", to: "/compare/lpu-vs-dy-patil" },
  { label: "LPU vs NMIMS", to: "/compare/lpu-vs-nmims" },
];

export function PopularSearches() {
  return (
    <section className="bg-background py-12 sm:py-14">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <h2 className="text-2xl font-bold text-foreground sm:text-3xl">Popular Searches</h2>
        <p className="mt-2 text-sm text-muted-foreground">
          High-intent LPU Online pages other students explored.
        </p>
        <ul className="mt-6 flex flex-wrap gap-2">
          {popularSearches.map((p) => (
            <li key={p.to}>
              <Link
                to={p.to}
                className="inline-flex items-center rounded-full border border-border bg-card px-3.5 py-1.5 text-xs font-semibold text-foreground transition hover:border-primary hover:text-primary sm:text-sm"
              >
                {p.label}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}

/* ---------------- SEO Page Layout (used by /lpu-online-* pages) ---------------- */

export type SeoSection = {
  heading: string;
  body?: ReactNode;
  bullets?: string[];
};

export function SeoPageLayout({
  title,
  intro,
  breadcrumb,
  sections,
  faqs,
  cta = "Talk to an LPU Online Counselor",
  courseLinks,
}: {
  title: string;
  intro: string;
  breadcrumb: Crumb[];
  sections: SeoSection[];
  faqs: { q: string; a: string }[];
  cta?: string;
  /** Heading for a hub-to-pillar internal link block (hub-and-spoke). */
  courseLinks?: { heading: string; suffix: string };
}) {
  const { open, setOpen } = useModalTrigger();
  return (
    <div className="min-h-screen bg-background">
      <SiteHeader />
      <Breadcrumb items={breadcrumb} />
      <main>
        {/* Hero + lead form */}
        <section
          className="bg-background py-12 sm:py-16"
          style={{
            backgroundImage:
              "linear-gradient(135deg, color-mix(in oklab, var(--primary) 10%, transparent), transparent 60%)",
          }}
        >
          <div className="mx-auto grid max-w-7xl items-start gap-10 px-4 sm:px-6 lg:grid-cols-[1fr_380px] lg:px-8">
            <div>
              <div className="mb-4 flex items-center gap-3">
                <img src={LOGO_SRC} alt="LPU Online" className="h-12 w-auto" />
                <img src={AVEDU_LOGO_SRC} alt="avedu" className="h-12 w-auto rounded" />
              </div>
              <h1 className="text-3xl font-bold leading-tight text-foreground sm:text-4xl lg:text-5xl">
                {title}
              </h1>
              <p className="mt-4 max-w-2xl text-base text-muted-foreground sm:text-lg">{intro}</p>
              <div className="mt-6 flex flex-wrap gap-3">
                <button
                  type="button"
                  onClick={openModal}
                  className="inline-flex items-center gap-2 rounded-md bg-primary px-6 py-3 text-sm font-semibold text-primary-foreground shadow-[var(--shadow-brand)] transition hover:opacity-90"
                >
                  Apply Now <ChevronRight className="h-4 w-4" />
                </button>
                <a
                  href={CALL_TEL}
                  className="inline-flex items-center gap-2 rounded-md border border-border bg-background px-6 py-3 text-sm font-semibold text-foreground transition hover:bg-accent"
                >
                  <Phone className="h-4 w-4" /> Call Now
                </a>
              </div>
            </div>
            <div className="lg:sticky lg:top-24">
              <LeadFormCompact />
            </div>
          </div>
        </section>

        <SectionNavImpl />

        {/* Sections with CTAs every 2 sections */}
        {sections.map((s, i) => (
          <div key={s.heading}>
            <section
              className={i % 2 === 0 ? "bg-background py-14" : "bg-secondary/40 py-14"}
            >
              <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
                <h2 className="text-2xl font-bold text-foreground sm:text-3xl">{s.heading}</h2>
                {s.body && (
                  <div className="prose prose-sm mt-4 max-w-none text-muted-foreground sm:prose-base">
                    {s.body}
                  </div>
                )}
                {s.bullets && (
                  <ul className="mt-5 grid gap-3 sm:grid-cols-2">
                    {s.bullets.map((b) => (
                      <li
                        key={b}
                        className="flex items-start gap-2 rounded-lg border border-border bg-card p-4 text-sm text-foreground"
                      >
                        <ChevronRight className="mt-0.5 h-4 w-4 shrink-0 text-primary" />
                        <span>{b}</span>
                      </li>
                    ))}
                  </ul>
                )}
              </div>
            </section>

            {i > 0 && i % 2 === 1 && i < sections.length - 1 && (
              <section className="relative overflow-hidden py-10">
                <div
                  className="absolute inset-0 -z-10"
                  style={{ background: "var(--gradient-brand)" }}
                />
                <div className="mx-auto flex max-w-5xl flex-col items-center justify-between gap-4 px-4 text-center text-primary-foreground sm:flex-row sm:text-left sm:px-6 lg:px-8">
                  <p className="text-lg font-bold sm:text-xl">{cta}</p>
                  <button
                    type="button"
                    onClick={openModal}
                    className="inline-flex items-center gap-2 rounded-md bg-background px-5 py-2.5 text-sm font-bold text-primary shadow-lg"
                  >
                    Request Callback <ChevronRight className="h-4 w-4" />
                  </button>
                </div>
              </section>
            )}
          </div>
        ))}

        {courseLinks && (
          <section className="bg-background py-14">
            <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
              <h2 className="text-2xl font-bold text-foreground sm:text-3xl">{courseLinks.heading}</h2>
              <ul className="mt-5 grid gap-3 sm:grid-cols-2">
                {allCourses.map((c) => {
                  const seo = getCourseSeo(c.slug, c.name);
                  return (
                    <li key={c.slug}>
                      <Link
                        to="/courses/$slug"
                        params={{ slug: c.slug }}
                        className="flex items-start gap-2 rounded-lg border border-border bg-card p-4 text-sm font-semibold text-foreground transition hover:border-primary hover:text-primary"
                      >
                        <ChevronRight className="mt-0.5 h-4 w-4 shrink-0 text-primary" />
                        <span>{seo.seoName} {courseLinks.suffix}</span>
                      </Link>
                    </li>
                  );
                })}
              </ul>
            </div>
          </section>
        )}

        <SeoFaq items={faqs} />
        <PopularSearches />
      </main>
      <SiteFooter />
      <StickyActionBar />
      <CounselingModal open={open} onClose={() => setOpen(false)} />
    </div>
  );
}
