import { createFileRoute } from "@tanstack/react-router";
import { lpu } from "@/lib/lpu";
import lpuLogo from "@/assets/lpu-logo.png.asset.json";
import {
  GraduationCap,
  Award,
  BadgeCheck,
  IndianRupee,
  Users,
  Briefcase,
  CheckCircle2,
  ChevronRight,
  Phone,
} from "lucide-react";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "LPU Online — UGC-Entitled Online Degrees | Same Degree, Now Online" },
      {
        name: "description",
        content:
          "Enroll in LPU Online UGC-entitled BBA, BCA, MBA, MCA and more. NAAC A++ accredited, 100% online with EMI options, mentor support and placement assistance.",
      },
      { property: "og:title", content: "LPU Online — Same Degree, Now Online" },
      {
        property: "og:description",
        content:
          "UGC-entitled online degrees from India's largest private university. Flexible learning, dedicated placement cell, EMI options.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: LpuPage,
});

function Header() {
  return (
    <header className="sticky top-0 z-40 w-full border-b border-border/70 bg-background/95 backdrop-blur">
      <div className="mx-auto flex h-20 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
        <a href="#top" className="flex items-center gap-3">
          <img
            src={lpuLogo.url}
            alt="LPU Online — Same Degree, Now Online"
            className="h-12 w-auto sm:h-14"
          />
        </a>
        <a
          href="#lead"
          className="inline-flex items-center rounded-md bg-primary px-5 py-2.5 text-sm font-semibold text-primary-foreground shadow-[var(--shadow-brand)] transition hover:opacity-90 sm:px-7 sm:py-3 sm:text-base"
        >
          Enroll Now
        </a>
      </div>
    </header>
  );
}

function Hero() {
  return (
    <section id="top" className="relative overflow-hidden bg-background">
      <div
        className="absolute inset-0 -z-10 opacity-[0.08]"
        style={{ background: "var(--gradient-brand)" }}
      />
      <div className="mx-auto grid max-w-7xl items-center gap-10 px-4 py-14 sm:px-6 lg:grid-cols-2 lg:gap-16 lg:px-8 lg:py-24">
        <div>
          <span className="inline-flex items-center gap-2 rounded-full border border-primary/30 bg-accent px-3 py-1 text-xs font-semibold uppercase tracking-wider text-accent-foreground">
            <BadgeCheck className="h-3.5 w-3.5" /> UGC Entitled · NAAC A++
          </span>
          <h1 className="mt-5 text-4xl font-bold leading-tight tracking-tight text-foreground sm:text-5xl lg:text-6xl">
            {lpu.name}
            <span className="mt-2 block text-primary">Same Degree, Now Online.</span>
          </h1>
          <p className="mt-5 max-w-xl text-base leading-relaxed text-muted-foreground sm:text-lg">
            {lpu.tagline}. Study 100% online with recorded lectures, live sessions, mentor
            support and proctored exams — from anywhere in India.
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <a
              href="#lead"
              className="inline-flex items-center gap-2 rounded-md bg-primary px-6 py-3 text-sm font-semibold text-primary-foreground shadow-[var(--shadow-brand)] transition hover:opacity-90"
            >
              Get Free Counseling <ChevronRight className="h-4 w-4" />
            </a>
            <a
              href="#courses"
              className="inline-flex items-center gap-2 rounded-md border border-border bg-background px-6 py-3 text-sm font-semibold text-foreground transition hover:bg-accent"
            >
              View Programs
            </a>
          </div>
          <dl className="mt-10 grid grid-cols-2 gap-4 sm:grid-cols-4">
            {lpu.highlights.map((h) => (
              <div key={h.label} className="rounded-xl border border-border bg-card p-4">
                <dt className="text-xs font-medium uppercase tracking-wide text-muted-foreground">
                  {h.label}
                </dt>
                <dd className="mt-1 text-sm font-semibold text-foreground">{h.value}</dd>
              </div>
            ))}
          </dl>
        </div>
        <div className="relative">
          <div
            className="absolute -inset-6 -z-10 rounded-[2rem] opacity-30 blur-2xl"
            style={{ background: "var(--gradient-brand)" }}
          />
          <img
            src={lpu.image}
            alt="LPU Online campus"
            width={1024}
            height={1024}
            className="aspect-[4/3] w-full rounded-2xl object-cover shadow-2xl"
          />
        </div>
      </div>
    </section>
  );
}

function Overview() {
  return (
    <section className="border-y border-border bg-secondary/40 py-16">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid gap-10 lg:grid-cols-3">
          <div className="lg:col-span-2">
            <h2 className="text-3xl font-bold text-foreground sm:text-4xl">About {lpu.name}</h2>
            <p className="mt-4 text-base leading-relaxed text-muted-foreground">{lpu.overview}</p>
            <p className="mt-3 text-sm text-muted-foreground">
              <span className="font-semibold text-foreground">Established:</span> {lpu.established}
              {" · "}
              <span className="font-semibold text-foreground">Ranking:</span> {lpu.ranking}
            </p>
          </div>
          <div className="rounded-2xl border border-border bg-card p-6">
            <h3 className="flex items-center gap-2 text-lg font-semibold text-foreground">
              <Award className="h-5 w-5 text-primary" /> Approvals & Accreditations
            </h3>
            <ul className="mt-4 space-y-4">
              {lpu.approvals.map((a) => (
                <li key={a.name}>
                  <p className="text-sm font-semibold text-foreground">{a.name}</p>
                  <p className="text-sm text-muted-foreground">{a.note}</p>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}

function CourseCard({ c }: { c: (typeof lpu.courses.ug)[number] }) {
  return (
    <div className="group flex h-full flex-col rounded-2xl border border-border bg-card p-6 transition hover:-translate-y-1 hover:border-primary/60 hover:shadow-[var(--shadow-brand)]">
      <div className="flex items-start justify-between">
        <h4 className="text-lg font-semibold text-foreground">{c.name}</h4>
        <GraduationCap className="h-5 w-5 text-primary" />
      </div>
      <div className="mt-4 flex flex-wrap gap-4 text-sm text-muted-foreground">
        <span className="inline-flex items-center gap-1">
          <BadgeCheck className="h-4 w-4 text-primary" /> {c.duration}
        </span>
        <span className="inline-flex items-center gap-1">
          <IndianRupee className="h-4 w-4 text-primary" /> {c.fee}
        </span>
      </div>
      {c.specializations && (
        <div className="mt-4">
          <p className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">
            Specializations
          </p>
          <div className="mt-2 flex flex-wrap gap-1.5">
            {c.specializations.map((s) => (
              <span
                key={s}
                className="rounded-full bg-accent px-2.5 py-1 text-xs font-medium text-accent-foreground"
              >
                {s}
              </span>
            ))}
          </div>
        </div>
      )}
      <a
        href="#lead"
        className="mt-6 inline-flex items-center gap-1 text-sm font-semibold text-primary hover:underline"
      >
        Apply Now <ChevronRight className="h-4 w-4" />
      </a>
    </div>
  );
}

function Courses() {
  return (
    <section id="courses" className="py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl font-bold text-foreground sm:text-4xl">Programs Offered</h2>
          <p className="mt-3 text-muted-foreground">
            UGC-entitled UG & PG online degrees with flexible fees and dedicated mentor support.
          </p>
        </div>

        <div className="mt-12">
          <h3 className="text-xl font-semibold text-foreground">Undergraduate (UG)</h3>
          <div className="mt-5 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {lpu.courses.ug.map((c) => (
              <CourseCard key={c.name} c={c} />
            ))}
          </div>
        </div>

        <div className="mt-14">
          <h3 className="text-xl font-semibold text-foreground">Postgraduate (PG)</h3>
          <div className="mt-5 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {lpu.courses.pg.map((c) => (
              <CourseCard key={c.name} c={c} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

function Eligibility() {
  return (
    <section className="bg-secondary/40 py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid gap-10 lg:grid-cols-2">
          <div>
            <h2 className="text-3xl font-bold text-foreground sm:text-4xl">Eligibility</h2>
            <div className="mt-6 space-y-4">
              {lpu.eligibility.map((e) => (
                <div key={e.level} className="rounded-xl border border-border bg-card p-5">
                  <p className="font-semibold text-foreground">{e.level}</p>
                  <p className="mt-1 text-sm text-muted-foreground">{e.criteria}</p>
                </div>
              ))}
            </div>
          </div>
          <div>
            <h2 className="text-3xl font-bold text-foreground sm:text-4xl">Admission Process</h2>
            <ol className="mt-6 space-y-4">
              {lpu.process.map((step, i) => (
                <li
                  key={step}
                  className="flex items-start gap-4 rounded-xl border border-border bg-card p-4"
                >
                  <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-primary text-sm font-bold text-primary-foreground">
                    {i + 1}
                  </span>
                  <span className="pt-1 text-sm font-medium text-foreground">{step}</span>
                </li>
              ))}
            </ol>
          </div>
        </div>
      </div>
    </section>
  );
}

function Placements() {
  return (
    <section className="py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid gap-10 lg:grid-cols-2">
          <div className="rounded-2xl border border-border bg-card p-8">
            <div className="flex items-center gap-3">
              <Briefcase className="h-6 w-6 text-primary" />
              <h2 className="text-2xl font-bold text-foreground">Placements</h2>
            </div>
            <p className="mt-4 text-muted-foreground">{lpu.placements.highlight}</p>
            <p className="mt-6 text-xs font-semibold uppercase tracking-wider text-muted-foreground">
              Top Recruiters
            </p>
            <div className="mt-3 flex flex-wrap gap-2">
              {lpu.placements.partners.map((p) => (
                <span
                  key={p}
                  className="rounded-lg border border-border bg-secondary px-3 py-1.5 text-sm font-semibold text-secondary-foreground"
                >
                  {p}
                </span>
              ))}
            </div>
          </div>
          <div className="rounded-2xl border border-border bg-card p-8">
            <div className="flex items-center gap-3">
              <Users className="h-6 w-6 text-primary" />
              <h2 className="text-2xl font-bold text-foreground">Scholarships</h2>
            </div>
            <ul className="mt-4 space-y-3">
              {lpu.scholarships.map((s) => (
                <li key={s} className="flex items-start gap-2 text-sm text-foreground">
                  <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-primary" />
                  <span>{s}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}

function Faqs() {
  return (
    <section className="bg-secondary/40 py-20">
      <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
        <h2 className="text-center text-3xl font-bold text-foreground sm:text-4xl">
          Frequently Asked Questions
        </h2>
        <div className="mt-10 space-y-4">
          {lpu.faqs.map((f) => (
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
    </section>
  );
}

function LeadForm() {
  return (
    <section id="lead" className="relative overflow-hidden py-20">
      <div className="absolute inset-0 -z-10" style={{ background: "var(--gradient-brand)" }} />
      <div className="mx-auto grid max-w-7xl items-center gap-10 px-4 sm:px-6 lg:grid-cols-2 lg:px-8">
        <div className="text-primary-foreground">
          <h2 className="text-3xl font-bold sm:text-4xl">Talk to an LPU Online Counselor</h2>
          <p className="mt-4 text-base opacity-95">
            Get free personalized program guidance, fee & EMI details, scholarship eligibility
            and a step-by-step admission plan.
          </p>
          <div className="mt-6 flex items-center gap-3 text-sm opacity-95">
            <Phone className="h-5 w-5" /> 1800-000-000 · Mon – Sat, 9am – 8pm
          </div>
        </div>
        <form
          onSubmit={(e) => e.preventDefault()}
          className="rounded-2xl bg-card p-6 shadow-2xl sm:p-8"
        >
          <div className="grid gap-4 sm:grid-cols-2">
            <input
              required
              placeholder="Full Name"
              className="col-span-2 rounded-md border border-input bg-background px-4 py-3 text-sm outline-none focus:border-primary"
            />
            <input
              required
              type="tel"
              placeholder="Mobile Number"
              className="rounded-md border border-input bg-background px-4 py-3 text-sm outline-none focus:border-primary"
            />
            <input
              required
              type="email"
              placeholder="Email"
              className="rounded-md border border-input bg-background px-4 py-3 text-sm outline-none focus:border-primary"
            />
            <select className="col-span-2 rounded-md border border-input bg-background px-4 py-3 text-sm outline-none focus:border-primary">
              <option>Select Program</option>
              {[...lpu.courses.ug, ...lpu.courses.pg].map((c) => (
                <option key={c.name}>{c.name}</option>
              ))}
            </select>
          </div>
          <button
            type="submit"
            className="mt-5 w-full rounded-md bg-primary px-6 py-3 text-sm font-semibold text-primary-foreground shadow-[var(--shadow-brand)] transition hover:opacity-90"
          >
            Request Free Callback
          </button>
          <p className="mt-3 text-center text-xs text-muted-foreground">
            By submitting you agree to be contacted about LPU Online programs.
          </p>
        </form>
      </div>
    </section>
  );
}

function Footer() {
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

function LpuPage() {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main>
        <Hero />
        <Overview />
        <Courses />
        <Eligibility />
        <Placements />
        <Faqs />
        <LeadForm />
      </main>
      <Footer />
    </div>
  );
}
