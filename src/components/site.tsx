import { useEffect, useState } from "react";
import lpuLogo from "@/assets/lpu-logo.png.asset.json";
import { lpu } from "@/lib/lpu";
import { Flame, X } from "lucide-react";

/* ---------------- Modal singleton ---------------- */

type ModalCtx = { open: () => void };
const modalCtx: { current: ModalCtx | null } = { current: null };
export const openModal = () => modalCtx.current?.open();

export function useModalTrigger() {
  const [open, setOpen] = useState(false);
  useEffect(() => {
    modalCtx.current = { open: () => setOpen(true) };
    return () => {
      modalCtx.current = null;
    };
  }, []);
  return { open, setOpen };
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
              <img src={lpuLogo.url} alt="LPU" className="h-full w-full object-contain" />
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

        <form
          onSubmit={(e) => {
            e.preventDefault();
            onClose();
          }}
          className="grid gap-2.5 p-4"
        >
          <LabeledInput label="Full Name" placeholder="e.g. Rahul Sharma" required />
          <LabeledInput
            label="Mobile Number"
            type="tel"
            placeholder="10-digit mobile"
            required
          />
          <LabeledInput label="Email" type="email" placeholder="name@example.com" required />
          <LabeledSelect label="Select Program">
            <option value="">Choose a program</option>
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
          </LabeledSelect>
          <button
            type="submit"
            className="mt-1 w-full rounded-md bg-primary px-6 py-2.5 text-sm font-bold text-primary-foreground shadow-[var(--shadow-brand)] transition hover:opacity-90"
          >
            Get Free Counseling Now
          </button>
          <p className="text-center text-[10px] text-muted-foreground">
            By submitting you agree to be contacted about LPU Online programs.
          </p>
        </form>
      </div>
    </div>
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
          <img src={lpuLogo.url} alt="LPU" className="h-full w-full object-contain" />
        </div>
        <div className="min-w-0">
          <p className="text-sm font-extrabold text-foreground">Admission Open</p>
          <p className="text-xs text-muted-foreground">Batch 2026 · 85% seats filled</p>
        </div>
      </div>
      <form onSubmit={(e) => e.preventDefault()} className="mt-4 grid gap-3">
        <LabeledInput label="Full Name" placeholder="e.g. Rahul Sharma" required />
        <LabeledInput label="Mobile Number" type="tel" placeholder="10-digit mobile" required />
        <LabeledInput label="Email" type="email" placeholder="name@example.com" required />
        <LabeledSelect label="Select Program">
          <option value="">Choose a program</option>
          {[...lpu.courses.pg, ...lpu.courses.ug].map((c) => (
            <option key={c.name}>{c.name}</option>
          ))}
        </LabeledSelect>
        <button
          type="submit"
          className="mt-1 w-full rounded-md bg-primary px-6 py-2.5 text-sm font-bold text-primary-foreground shadow-[var(--shadow-brand)] transition hover:opacity-90"
        >
          Get Free Counseling
        </button>
      </form>
    </div>
  );
}

/* ---------------- Header ---------------- */

export function SiteHeader() {
  return (
    <header className="sticky top-0 z-40 w-full border-b border-border/70 bg-background/95 backdrop-blur">
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-4 sm:h-20 sm:px-6 lg:px-8">
        <a href="/" className="flex items-center gap-3">
          <img
            src={lpuLogo.url}
            alt="LPU Online — Same Degree, Now Online"
            className="h-10 w-auto sm:h-14"
          />
        </a>
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

/* ---------------- Footer ---------------- */

export function SiteFooter() {
  return (
    <footer className="border-t border-border bg-background py-10">
      <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-4 px-4 sm:px-6 lg:flex-row lg:px-8">
        <div className="flex items-center gap-3">
          <img src={lpuLogo.url} alt="LPU Online" className="h-10 w-auto" />
        </div>
        <p className="text-xs text-muted-foreground">
          © {new Date().getFullYear()} LPU Online. All rights reserved. UGC-Entitled Programs.
        </p>
      </div>
    </footer>
  );
}

/* ---------------- Career Assistance ---------------- */

import placementImage from "@/assets/placement.jpg";
import { Star } from "lucide-react";

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
        <h2 className="text-center text-3xl font-bold text-foreground sm:text-4xl lg:text-5xl">
          Career Assistance
        </h2>
        <p className="mx-auto mt-4 max-w-3xl text-center text-base text-muted-foreground sm:text-lg">
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
