import { useEffect, useMemo, useState } from "react";
import {
  SiteHeader,
  SiteFooter,
  CounselingModal,
  useModalTrigger,
  openModal,
  LeadFormCompact,
  StickyActionBar,
  Breadcrumb,
  SeoFaq,
  PopularSearches,
  type Crumb,
} from "@/components/site";
import { allCourses, findCourse, lpu, type Course } from "@/lib/lpu";
import { blogs } from "@/lib/blogs";
import {
  LAST_UPDATED,
  OFFICIAL_REFERENCES,
  TOPIC_LABELS,
  TOPIC_SLUGS,
  parseINR,
  pillarHref,

  relatedBlogs,
  type Section,
} from "@/lib/topics";
import {
  CalendarCheck,
  CheckCircle2,
  ChevronRight,
  Download,
  FileCheck2,
  GraduationCap,
  IndianRupee,
  MessageCircle,
  Phone,
  PlayCircle,
  Rocket,
} from "lucide-react";

const CALL_TEL = "tel:+918770012496";
const WA_TEXT = "Hi, I want free counseling and more information about LPU Online programs.";
const WA_LINK = `https://wa.me/918770012496?text=${encodeURIComponent(WA_TEXT)}`;

/* ---------------- Smart CTA ---------------- */

import { SectionNav } from "@/components/section-nav";
export function SmartCTA({ title = "Get free counselling for LPU Online admission 2026" }: { title?: string }) {
  return (
    <section className="relative overflow-hidden py-8">
      <div className="absolute inset-0 -z-10" style={{ background: "var(--gradient-brand)" }} />
      <div className="mx-auto flex max-w-6xl flex-col gap-4 px-4 text-primary-foreground sm:px-6 lg:px-8">
        <p className="text-lg font-bold sm:text-xl">{title}</p>
        <div className="flex flex-wrap gap-2.5">
          <button type="button" onClick={openModal} className="inline-flex items-center gap-1.5 rounded-md bg-background px-4 py-2.5 text-sm font-bold text-primary shadow-lg">
            Apply Now <ChevronRight className="h-4 w-4" />
          </button>
          <button type="button" onClick={openModal} className="inline-flex items-center gap-1.5 rounded-md border border-primary-foreground/60 px-4 py-2.5 text-sm font-semibold">
            <CalendarCheck className="h-4 w-4" /> Book Free Counselling
          </button>
          <button type="button" onClick={openModal} className="inline-flex items-center gap-1.5 rounded-md border border-primary-foreground/60 px-4 py-2.5 text-sm font-semibold">
            <Download className="h-4 w-4" /> Download Brochure
          </button>
          <a href={CALL_TEL} className="inline-flex items-center gap-1.5 rounded-md border border-primary-foreground/60 px-4 py-2.5 text-sm font-semibold">
            <Phone className="h-4 w-4" /> Call Counsellor
          </a>
          <a href={WA_LINK} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-1.5 rounded-md border border-primary-foreground/60 px-4 py-2.5 text-sm font-semibold">
            <MessageCircle className="h-4 w-4" /> WhatsApp Counsellor
          </a>
        </div>
      </div>
    </section>
  );
}

/* ---------------- Admission Timeline ---------------- */

const timelineSteps = [
  { title: "Application Submission", note: "Fill the online form with basic details.", icon: FileCheck2 },
  { title: "Document Verification", note: "Marksheets and ID verified in 24–48 hours.", icon: CheckCircle2 },
  { title: "Fee Payment", note: "Pay in full, semester-wise or on 0% EMI.", icon: IndianRupee },
  { title: "LMS Activation", note: "e-Connect credentials on your email.", icon: PlayCircle },
  { title: "Orientation", note: "Induction session with faculty and mentors.", icon: GraduationCap },
  { title: "Classes Start", note: "Live and recorded classes as per calendar.", icon: Rocket },
];

export function AdmissionTimeline() {
  return (
    <section className="bg-secondary/40 py-12">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <h2 className="text-2xl font-bold text-foreground sm:text-3xl">LPU Online Admission Timeline</h2>
        <p className="mt-2 text-sm text-muted-foreground">Six simple steps from application to your first class.</p>
        <ol className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {timelineSteps.map((s, i) => (
            <li key={s.title} className="relative rounded-xl border border-border bg-card p-5">
              <span className="absolute right-4 top-4 text-3xl font-black text-primary/15">{i + 1}</span>
              <s.icon className="h-6 w-6 text-primary" aria-hidden />
              <h3 className="mt-3 text-base font-semibold text-foreground">{s.title}</h3>
              <p className="mt-1 text-sm text-muted-foreground">{s.note}</p>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}

/* ---------------- Placement details ---------------- */

export function PlacementDetails({ course }: { course?: Course }) {
  const roles = course?.careers ?? lpu.courses.pg[0].careers;
  return (
    <section className="bg-background py-12">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <h2 className="text-2xl font-bold text-foreground sm:text-3xl">Placement & Career Support</h2>
        <div className="mt-6 grid gap-4 lg:grid-cols-3">
          <div className="rounded-xl border border-border bg-card p-5">
            <h3 className="text-base font-semibold text-foreground">Top Recruiters</h3>
            <ul className="mt-3 space-y-1.5 text-sm text-muted-foreground">
              {lpu.placements.partners.map((p) => (
                <li key={p}>• {p}</li>
              ))}
            </ul>
          </div>
          <div className="rounded-xl border border-border bg-card p-5">
            <h3 className="text-base font-semibold text-foreground">Career Support</h3>
            <ul className="mt-3 space-y-1.5 text-sm text-muted-foreground">
              <li>• Resume assistance and LinkedIn review</li>
              <li>• Interview preparation and mock rounds</li>
              <li>• Aptitude and domain assessments</li>
              <li>• Recruiter connect and job alerts</li>
            </ul>
          </div>
          <div className="rounded-xl border border-border bg-card p-5">
            <h3 className="text-base font-semibold text-foreground">Placement Process</h3>
            <ol className="mt-3 space-y-1.5 text-sm text-muted-foreground">
              <li>1. Profile registration with career services</li>
              <li>2. Skill assessment and training</li>
              <li>3. Resume shortlisting by recruiters</li>
              <li>4. Interviews and offer roll-out</li>
            </ol>
          </div>
        </div>
        <h3 className="mt-8 text-base font-semibold text-foreground">Typical Career Roles</h3>
        <ul className="mt-3 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
          {roles.map((r) => (
            <li key={r.role} className="rounded-lg border border-border bg-card p-4 text-sm">
              <span className="font-semibold text-foreground">{r.role}</span>
              <span className="mt-1 block text-muted-foreground">{r.salary}</span>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}

/* ---------------- Students Also Viewed ---------------- */

export function StudentsAlsoViewed({ currentSlug }: { currentSlug?: string }) {
  const related = allCourses.filter((c) => c.slug !== currentSlug).slice(0, 6);
  const posts = blogs.slice(0, 4);
  return (
    <section className="bg-secondary/40 py-12">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <h2 className="text-2xl font-bold text-foreground sm:text-3xl">Students Also Viewed</h2>
        <div className="mt-6 grid gap-6 lg:grid-cols-2">
          <div>
            <h3 className="text-sm font-bold uppercase tracking-wide text-primary">Related & Popular Courses</h3>
            <ul className="mt-3 flex flex-wrap gap-2">
              {related.map((c) => (
                <li key={c.slug}>
                  <a href={`/courses/${c.slug}`} className="inline-flex rounded-full border border-border bg-card px-3.5 py-1.5 text-xs font-semibold text-foreground transition hover:border-primary hover:text-primary sm:text-sm">
                    {c.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h3 className="text-sm font-bold uppercase tracking-wide text-primary">Latest Blogs & Admission Updates</h3>
            <ul className="mt-3 space-y-2">
              {posts.map((b) => (
                <li key={b.slug}>
                  <a href={`/blog/${b.slug}`} className="text-sm font-medium text-foreground underline-offset-4 hover:text-primary hover:underline">
                    {b.title}
                  </a>
                </li>
              ))}
              <li>
                <a href="/lpu-online-admission-last-date" className="text-sm font-medium text-foreground underline-offset-4 hover:text-primary hover:underline">
                  LPU Online Admission Last Date 2026
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ---------------- Related links block ---------------- */

export function TopicLinkGrid({ program, courseName, current }: { program: string; courseName: string; current?: string }) {
  return (
    <section className="bg-background py-12">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <h2 className="text-2xl font-bold text-foreground sm:text-3xl">Explore Everything About {courseName}</h2>
        <ul className="mt-5 flex flex-wrap gap-2">
          <li>
            <a href={`/courses/${program}`} className="inline-flex rounded-full bg-primary px-3.5 py-1.5 text-xs font-semibold text-primary-foreground sm:text-sm">
              {courseName} Main Page
            </a>
          </li>
          {TOPIC_SLUGS.filter((t) => t !== current).map((t) => (
            <li key={t}>
              <a href={pillarHref(program, t)} className="inline-flex rounded-full border border-border bg-card px-3.5 py-1.5 text-xs font-semibold text-foreground transition hover:border-primary hover:text-primary sm:text-sm">
                LPU Online {courseName.replace("Online ", "")} {TOPIC_LABELS[t]}
              </a>
            </li>
          ))}

        </ul>
      </div>
    </section>
  );
}

export function RelatedBlogsBlock({ keyword }: { keyword: string }) {
  const posts = relatedBlogs(keyword);
  return (
    <section className="bg-secondary/40 py-12">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <h2 className="text-2xl font-bold text-foreground sm:text-3xl">Related Blogs</h2>
        <div className="mt-5 grid gap-4 sm:grid-cols-3">
          {posts.map((b) => (
            <a key={b.slug} href={`/blog/${b.slug}`} className="rounded-xl border border-border bg-card p-5 transition hover:border-primary">
              <span className="text-xs font-bold uppercase tracking-wide text-primary">{b.category}</span>
              <h3 className="mt-2 text-sm font-semibold text-foreground">{b.title}</h3>
              <p className="mt-2 line-clamp-3 text-xs text-muted-foreground">{b.description}</p>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}

export function OfficialReferences() {
  return (
    <section className="bg-background py-10">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <h2 className="text-lg font-bold text-foreground">Official Reference Links</h2>
        <ul className="mt-3 flex flex-wrap gap-4 text-sm">
          {OFFICIAL_REFERENCES.map((r) => (
            <li key={r.href}>
              <a href={r.href} target="_blank" rel="nofollow noopener noreferrer" className="text-primary underline underline-offset-4">
                {r.label}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}

export function QuickLinksRow() {
  return (
    <section className="bg-secondary/40 py-8">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <h2 className="text-lg font-bold text-foreground">Quick Links</h2>
        <ul className="mt-3 flex flex-wrap gap-2 text-xs sm:text-sm">
          {[
            ["Home", "/"],
            ["All Courses", "/lpu-online-courses"],
            ["Admission Guide", "/lpu-online-admission-process"],
            ["Fee Structure", "/lpu-online-fee-structure"],
            ["Fee & EMI Calculator", "/lpu-fee-calculator"],
            ["Eligibility Checker", "/lpu-eligibility-checker"],
            ["Scholarship", "/lpu-online-scholarship"],
            ["Placements", "/lpu-online-placement"],
            ["Degree Validity", "/lpu-online-degree-validity"],
            ["Blogs", "/blog"],
            ["FAQs", "/lpu-online-review"],
            ["Contact", "/lpu-online-admission"],
          ].map(([label, href]) => (
            <li key={href}>
              <a href={href} className="inline-flex rounded-full border border-border bg-card px-3 py-1.5 font-semibold text-foreground transition hover:border-primary hover:text-primary">
                {label}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}

/* ---------------- Fee & EMI calculator ---------------- */

export function FeeEmiCalculator({ defaultSlug }: { defaultSlug?: string }) {
  const [slug, setSlug] = useState(defaultSlug ?? allCourses[0].slug);
  const [scholarship, setScholarship] = useState(0);
  const [months, setMonths] = useState(12);
  const course = findCourse(slug) ?? allCourses[0];
  const result = useMemo(() => {
    const full = parseINR(course.feesBreakdown.fullFees);
    const applied = parseINR(course.feesBreakdown.appliedFee) || full;
    const afterScholarship = Math.max(0, Math.round(applied * (1 - scholarship / 100)));
    const sems = course.level === "ug" ? 6 : 4;
    return {
      full,
      total: afterScholarship,
      perSem: Math.round(afterScholarship / sems),
      emi: Math.round(afterScholarship / months),
      sems,
    };
  }, [course, scholarship, months]);
  const inr = (n: number) => `Rs. ${n.toLocaleString("en-IN")}`;

  return (
    <div className="rounded-2xl border border-border bg-card p-6 shadow-sm">
      <h2 className="text-xl font-bold text-foreground">LPU Fee & EMI Calculator</h2>
      <div className="mt-5 grid gap-4 sm:grid-cols-3">
        <label className="text-sm font-medium text-foreground">
          Select course
          <select value={slug} onChange={(e) => setSlug(e.target.value)} className="mt-1 w-full rounded-md border border-border bg-background px-3 py-2 text-sm">
            {allCourses.map((c) => (
              <option key={c.slug} value={c.slug}>
                {c.name}
              </option>
            ))}
          </select>
        </label>
        <label className="text-sm font-medium text-foreground">
          Scholarship ({scholarship}%)
          <input type="range" min={0} max={30} step={5} value={scholarship} onChange={(e) => setScholarship(Number(e.target.value))} className="mt-3 w-full accent-[var(--primary)]" />
        </label>
        <label className="text-sm font-medium text-foreground">
          EMI duration
          <select value={months} onChange={(e) => setMonths(Number(e.target.value))} className="mt-1 w-full rounded-md border border-border bg-background px-3 py-2 text-sm">
            {[6, 12, 18, 24, 36].map((m) => (
              <option key={m} value={m}>
                {m} months
              </option>
            ))}
          </select>
        </label>
      </div>
      <div className="mt-6 grid gap-3 sm:grid-cols-3">
        <div className="rounded-xl border border-border bg-secondary/40 p-4">
          <p className="text-xs font-semibold uppercase text-muted-foreground">Semester Fee</p>
          <p className="mt-1 text-xl font-bold text-foreground">{inr(result.perSem)}</p>
          <p className="text-xs text-muted-foreground">× {result.sems} semesters</p>
        </div>
        <div className="rounded-xl border border-border bg-secondary/40 p-4">
          <p className="text-xs font-semibold uppercase text-muted-foreground">Total Programme Fee</p>
          <p className="mt-1 text-xl font-bold text-primary">{inr(result.total)}</p>
          <p className="text-xs text-muted-foreground line-through">{inr(result.full)}</p>
        </div>
        <div className="rounded-xl border border-border bg-secondary/40 p-4">
          <p className="text-xs font-semibold uppercase text-muted-foreground">Estimated Monthly EMI</p>
          <p className="mt-1 text-xl font-bold text-foreground">{inr(result.emi)}</p>
          <p className="text-xs text-muted-foreground">0% interest, {months} months</p>
        </div>
      </div>
      <button type="button" onClick={openModal} className="mt-5 inline-flex items-center gap-2 rounded-md bg-primary px-5 py-2.5 text-sm font-semibold text-primary-foreground">
        Get exact fee quotation <ChevronRight className="h-4 w-4" />
      </button>
    </div>
  );
}

/* ---------------- Eligibility checker ---------------- */

export function EligibilityChecker({ defaultSlug }: { defaultSlug?: string }) {
  const [tenth, setTenth] = useState("");
  const [twelfth, setTwelfth] = useState("");
  const [grad, setGrad] = useState("");
  const [exp, setExp] = useState("");
  const [slug, setSlug] = useState(defaultSlug ?? allCourses[0].slug);
  const [checked, setChecked] = useState(false);
  const course = findCourse(slug) ?? allCourses[0];

  const verdict = useMemo(() => {
    const t12 = Number(twelfth);
    const g = Number(grad);
    if (course.level === "ug") {
      if (!twelfth) return { ok: false, msg: "Enter your Class 12 percentage to check eligibility." };
      return t12 >= 45
        ? { ok: true, msg: `You are eligible for ${course.name}. Class 12 aggregate of ${t12}% meets the requirement.` }
        : { ok: false, msg: "Class 12 aggregate below 45% — speak to a counsellor about bridge options." };
    }
    if (!grad) return { ok: false, msg: "Enter your graduation percentage to check eligibility." };
    return g >= 45
      ? { ok: true, msg: `You are eligible for ${course.name}. Graduation aggregate of ${g}% meets the requirement.` }
      : { ok: false, msg: "Graduation aggregate below 45% — speak to a counsellor about alternate programmes." };
  }, [twelfth, grad, course]);

  const field = (label: string, value: string, set: (v: string) => void, optional = false) => (
    <label className="text-sm font-medium text-foreground">
      {label}
      {optional && <span className="text-muted-foreground"> (optional)</span>}
      <input
        type="number"
        value={value}
        onChange={(e) => set(e.target.value)}
        className="mt-1 w-full rounded-md border border-border bg-background px-3 py-2 text-sm"
        placeholder="e.g. 65"
      />
    </label>
  );

  return (
    <div className="rounded-2xl border border-border bg-card p-6 shadow-sm">
      <h2 className="text-xl font-bold text-foreground">LPU Online Eligibility Checker</h2>
      <div className="mt-5 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {field("10th percentage", tenth, setTenth)}
        {field("12th percentage", twelfth, setTwelfth)}
        {field("Graduation percentage", grad, setGrad, course.level === "ug")}
        {field("Work experience (years)", exp, setExp, true)}
        <label className="text-sm font-medium text-foreground">
          Desired course
          <select value={slug} onChange={(e) => setSlug(e.target.value)} className="mt-1 w-full rounded-md border border-border bg-background px-3 py-2 text-sm">
            {allCourses.map((c) => (
              <option key={c.slug} value={c.slug}>
                {c.name}
              </option>
            ))}
          </select>
        </label>
        <div className="flex items-end">
          <button type="button" onClick={() => setChecked(true)} className="w-full rounded-md bg-primary px-5 py-2.5 text-sm font-semibold text-primary-foreground">
            Check Eligibility
          </button>
        </div>
      </div>

      {checked && (
        <div className="mt-6 grid gap-4 lg:grid-cols-3">
          <div className={`rounded-xl border p-4 ${verdict.ok ? "border-primary bg-primary/5" : "border-border bg-secondary/40"}`}>
            <p className="text-xs font-semibold uppercase text-muted-foreground">Eligibility Status</p>
            <p className="mt-1 text-sm font-semibold text-foreground">{verdict.ok ? "Eligible" : "Needs review"}</p>
            <p className="mt-1 text-sm text-muted-foreground">{verdict.msg}</p>
          </div>
          <div className="rounded-xl border border-border bg-secondary/40 p-4">
            <p className="text-xs font-semibold uppercase text-muted-foreground">Required Documents</p>
            <ul className="mt-2 space-y-1 text-sm text-muted-foreground">
              <li>• Class 10 & 12 marksheets</li>
              {course.level === "pg" && <li>• Graduation degree & marksheet</li>}
              <li>• Photo ID proof</li>
              <li>• Passport-size photograph</li>
            </ul>
          </div>
          <div className="rounded-xl border border-border bg-secondary/40 p-4">
            <p className="text-xs font-semibold uppercase text-muted-foreground">Next Admission Steps</p>
            <ol className="mt-2 space-y-1 text-sm text-muted-foreground">
              <li>1. Free counselling call</li>
              <li>2. Application & document upload</li>
              <li>3. Fee payment / EMI setup</li>
              <li>4. LMS activation & orientation</li>
            </ol>
            <button type="button" onClick={openModal} className="mt-3 inline-flex items-center gap-1.5 rounded-md bg-primary px-4 py-2 text-xs font-semibold text-primary-foreground">
              Start admission <ChevronRight className="h-3.5 w-3.5" />
            </button>
          </div>
        </div>
      )}
    </div>
  );
}

/* ---------------- Topical page layout ---------------- */

export function TopicalPageLayout({
  h1,
  intro,
  breadcrumb,
  sections,
  faqs,
  program,
  courseName,
  currentTopic,
  keyword,
  extras,
}: {
  h1: string;
  intro: string;
  breadcrumb: Crumb[];
  sections: Section[];
  faqs: { q: string; a: string }[];
  program?: string;
  courseName?: string;
  currentTopic?: string;
  keyword: string;
  extras?: React.ReactNode;
}) {
  const { open, setOpen } = useModalTrigger();
  return (
    <div className="min-h-screen bg-background">
      <SiteHeader />
      <Breadcrumb items={breadcrumb} />
      <main>
        <section
          className="py-10 sm:py-14"
          style={{
            backgroundImage:
              "linear-gradient(135deg, color-mix(in oklab, var(--primary) 10%, transparent), transparent 60%)",
          }}
        >
          <div className="mx-auto grid max-w-7xl items-start gap-10 px-4 sm:px-6 lg:grid-cols-[1fr_380px] lg:px-8">
            <div>
              <h1 className="text-3xl font-bold leading-tight text-foreground sm:text-4xl lg:text-5xl">{h1}</h1>
              <p className="mt-4 max-w-2xl text-base text-muted-foreground sm:text-lg">{intro}</p>
              <p className="mt-3 text-xs text-muted-foreground">Last updated: {LAST_UPDATED}</p>
              <div className="mt-6 flex flex-wrap gap-3">
                <button type="button" onClick={openModal} className="inline-flex items-center gap-2 rounded-md bg-primary px-6 py-3 text-sm font-semibold text-primary-foreground shadow-[var(--shadow-brand)]">
                  Apply Now <ChevronRight className="h-4 w-4" />
                </button>
                <a href={CALL_TEL} className="inline-flex items-center gap-2 rounded-md border border-border bg-background px-6 py-3 text-sm font-semibold text-foreground">
                  <Phone className="h-4 w-4" /> Call Counsellor
                </a>
              </div>
            </div>
            <div className="lg:sticky lg:top-24">
              <LeadFormCompact />
            </div>
          </div>
        </section>

        <SectionNav />

        {sections.map((s, i) => (
          <div key={s.heading}>
            <section className={i % 2 === 0 ? "bg-background py-12" : "bg-secondary/40 py-12"}>
              <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
                <h2 className="text-2xl font-bold text-foreground sm:text-3xl">{s.heading}</h2>
                {s.body && <p className="mt-4 max-w-4xl text-sm text-muted-foreground sm:text-base">{s.body}</p>}
                {s.bullets && s.bullets.length > 0 && (
                  <ul className="mt-5 grid gap-3 sm:grid-cols-2">
                    {s.bullets.map((b) => (
                      <li key={b} className="flex items-start gap-2 rounded-lg border border-border bg-card p-4 text-sm text-foreground">
                        <ChevronRight className="mt-0.5 h-4 w-4 shrink-0 text-primary" />
                        <span>{b}</span>
                      </li>
                    ))}
                  </ul>
                )}
              </div>
            </section>
            <SmartCTA />
          </div>
        ))}

        {extras}

        <AdmissionTimeline />
        {program && courseName && (
          <TopicLinkGrid program={program} courseName={courseName} current={currentTopic} />
        )}
        <StudentsAlsoViewed />
        <RelatedBlogsBlock keyword={keyword} />
        <SeoFaq items={faqs} />
        <OfficialReferences />
        <StudentToolsSection />
        <QuickLinksRow />
        <PopularSearches />
      </main>
      <SiteFooter />
      <StickyActionBar />
      <StudentToolsHost />
      <CounselingModal open={open} onClose={() => setOpen(false)} />
    </div>
  );
}

/* ---------------- Student tools: promo band, modal & floating launcher ---------------- */

type ToolTab = "fees" | "eligibility";
const toolsCtx: { open?: (tab: ToolTab) => void } = {};
export const openTools = (tab: ToolTab = "fees") => toolsCtx.open?.(tab);

export function StudentToolsSection() {
  const cards = [
    {
      tab: "fees" as ToolTab,
      icon: IndianRupee,
      title: "Fee & EMI Calculator",
      text: "Pick your programme, apply a scholarship and see your semester fee, total fee and monthly EMI in seconds.",
      cta: "Calculate my fee",
      href: "/lpu-fee-calculator",
    },
    {
      tab: "eligibility" as ToolTab,
      icon: FileCheck2,
      title: "Instant Eligibility Checker",
      text: "Enter your 10th, 12th or graduation marks and instantly know if you qualify — plus the documents you need.",
      cta: "Check my eligibility",
      href: "/lpu-eligibility-checker",
    },
  ];
  return (
    <section className="bg-secondary/40 py-12">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <span className="inline-flex items-center gap-2 rounded-full border border-primary/30 bg-accent px-3 py-1 text-xs font-semibold uppercase tracking-wider text-accent-foreground">
          <Rocket className="h-3.5 w-3.5" /> Free student tools
        </span>
        <h2 className="mt-3 text-2xl font-bold text-foreground sm:text-3xl">
          Plan your admission in under a minute
        </h2>
        <p className="mt-2 max-w-3xl text-sm text-muted-foreground sm:text-base">
          Two free tools used by thousands of LPU Online applicants — no sign-up needed.
        </p>
        <div className="mt-6 grid gap-4 sm:grid-cols-2">
          {cards.map((c) => (
            <div key={c.tab} className="rounded-2xl border border-border bg-card p-5 shadow-sm transition hover:border-primary hover:shadow-md">
              <div className="flex items-center gap-3">
                <span className="grid h-11 w-11 place-items-center rounded-xl bg-primary/10 text-primary">
                  <c.icon className="h-5 w-5" />
                </span>
                <h3 className="text-lg font-bold text-foreground">{c.title}</h3>
              </div>
              <p className="mt-3 text-sm text-muted-foreground">{c.text}</p>
              <div className="mt-4 flex flex-wrap items-center gap-3">
                <button
                  type="button"
                  onClick={() => openTools(c.tab)}
                  className="inline-flex items-center gap-2 rounded-md bg-primary px-5 py-2.5 text-sm font-semibold text-primary-foreground shadow-[var(--shadow-brand)]"
                >
                  {c.cta} <ChevronRight className="h-4 w-4" />
                </button>
                <a href={c.href} className="text-sm font-semibold text-primary underline underline-offset-4">
                  Open full page
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export function StudentToolsHost() {
  const [tab, setTab] = useState<ToolTab | null>(null);
  const [pulse, setPulse] = useState(true);

  useEffect(() => {
    toolsCtx.open = (t) => {
      setTab(t);
      setPulse(false);
    };
    return () => {
      toolsCtx.open = undefined;
    };
  }, []);

  useEffect(() => {
    const t = setTimeout(() => setPulse(false), 12000);
    return () => clearTimeout(t);
  }, []);

  return (
    <>
      <button
        type="button"
        onClick={() => openTools("fees")}
        aria-label="Open free student tools: fee calculator and eligibility checker"
        className="fixed bottom-20 left-3 z-40 inline-flex items-center gap-2 rounded-full border border-primary/40 bg-card px-3.5 py-2.5 text-xs font-bold text-primary shadow-xl transition hover:bg-primary hover:text-primary-foreground md:bottom-20 md:left-4 md:text-sm"
      >
        <span className={`grid h-5 w-5 place-items-center rounded-full bg-primary/15 ${pulse ? "animate-pulse" : ""}`}>
          <IndianRupee className="h-3.5 w-3.5" />
        </span>
        Fee &amp; Eligibility Tools
      </button>

      {tab && (
        <div
          className="fixed inset-0 z-[95] flex items-start justify-center overflow-y-auto bg-black/60 p-3 backdrop-blur-sm sm:p-6"
          onClick={() => setTab(null)}
        >
          <div
            className="my-6 w-full max-w-3xl rounded-2xl border border-border bg-background p-4 shadow-2xl sm:p-6"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex items-center justify-between gap-3">
              <div className="flex gap-2">
                {(
                  [
                    ["fees", "Fee & EMI"],
                    ["eligibility", "Eligibility"],
                  ] as [ToolTab, string][]
                ).map(([id, label]) => (
                  <button
                    key={id}
                    type="button"
                    onClick={() => setTab(id)}
                    className={`rounded-full px-4 py-2 text-xs font-bold transition sm:text-sm ${
                      tab === id
                        ? "bg-primary text-primary-foreground"
                        : "border border-border bg-card text-foreground"
                    }`}
                  >
                    {label}
                  </button>
                ))}
              </div>
              <button
                type="button"
                onClick={() => setTab(null)}
                aria-label="Close tools"
                className="grid h-8 w-8 place-items-center rounded-full border border-border bg-card text-foreground"
              >
                ✕
              </button>
            </div>
            <div className="mt-4">
              {tab === "fees" ? <FeeEmiCalculator /> : <EligibilityChecker />}
            </div>
            <button
              type="button"
              onClick={() => {
                setTab(null);
                openModal();
              }}
              className="mt-4 w-full rounded-md bg-primary px-5 py-3 text-sm font-semibold text-primary-foreground"
            >
              Get an exact quote from a counsellor
            </button>
          </div>
        </div>
      )}
    </>
  );
}
