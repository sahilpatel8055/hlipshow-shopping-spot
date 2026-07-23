import { createFileRoute, notFound, Link } from "@tanstack/react-router";
import { findCourse, allCourses, lpu } from "@/lib/lpu";
import lpuLogo from "@/assets/lpu-logo.png.asset.json";
import lpuCertificate from "@/assets/lpu-certificate.jpeg.asset.json";
import hiringPartners from "@/assets/hiring-partners.png";
import lpuLms from "@/assets/lpu_lms.png";
import { useState } from "react";
import {
  SiteHeader,
  SiteFooter,
  CounselingModal,
  useModalTrigger,
  openModal,
  LeadFormCompact,
  CareerAssistance,
} from "@/components/site";
import {
  Award,
  BadgeCheck,
  BookOpen,
  Briefcase,
  ChevronRight,
  Clock,
  Download,
  GraduationCap,
  IndianRupee,
  Star,
  MonitorPlay,
  Users,
  CheckCircle2,
} from "lucide-react";

export const Route = createFileRoute("/courses/$slug")({
  loader: ({ params }) => {
    const course = findCourse(params.slug);
    if (!course) throw notFound();
    return { course };
  },
  head: ({ loaderData }) => {
    const c = loaderData?.course;
    const title = c
      ? `${c.name} — LPU Online | UGC Entitled Degree`
      : "Course — LPU Online";
    const desc = c
      ? `${c.tagline} 100% online, UGC-entitled, NAAC A++ university. Fee ${c.fee}, EMI ${c.feesBreakdown.emi}.`
      : "Explore online degree programs from LPU Online.";
    return {
      meta: [
        { title },
        { name: "description", content: desc },
        { property: "og:title", content: title },
        { property: "og:description", content: desc },
        { property: "og:type", content: "article" },
        { name: "twitter:card", content: "summary_large_image" },
      ],
    };
  },
  notFoundComponent: () => (
    <div className="min-h-screen bg-background">
      <SiteHeader />
      <main className="mx-auto max-w-3xl px-4 py-24 text-center">
        <h1 className="text-3xl font-bold text-foreground">Course not found</h1>
        <p className="mt-3 text-muted-foreground">
          The course you are looking for does not exist.
        </p>
        <Link
          to="/"
          className="mt-6 inline-flex items-center gap-1 rounded-md bg-primary px-5 py-2.5 text-sm font-semibold text-primary-foreground"
        >
          Back to home <ChevronRight className="h-4 w-4" />
        </Link>
      </main>
      <SiteFooter />
    </div>
  ),
  errorComponent: ({ reset }) => (
    <div className="min-h-screen bg-background">
      <SiteHeader />
      <main className="mx-auto max-w-3xl px-4 py-24 text-center">
        <h1 className="text-3xl font-bold text-foreground">Something went wrong</h1>
        <button
          onClick={reset}
          className="mt-6 rounded-md bg-primary px-5 py-2.5 text-sm font-semibold text-primary-foreground"
        >
          Try again
        </button>
      </main>
      <SiteFooter />
    </div>
  ),
  component: CoursePage,
});

function CoursePage() {
  const { course } = Route.useLoaderData();
  const { open, setOpen } = useModalTrigger();
  const [curriculumTab, setCurriculumTab] = useState(course.curriculum[0]?.year ?? "");
  const activeCurriculum =
    course.curriculum.find((y) => y.year === curriculumTab) ?? course.curriculum[0];

  return (
    <div className="min-h-screen bg-background">
      <SiteHeader />
      <main>
        {/* Hero */}
        <section
          className="relative overflow-hidden bg-background py-12 sm:py-16"
          style={{
            backgroundImage:
              "linear-gradient(135deg, color-mix(in oklab, var(--primary) 10%, transparent), transparent 60%)",
          }}
        >
          <div className="mx-auto grid max-w-7xl items-start gap-10 px-4 sm:px-6 lg:grid-cols-2 lg:px-8">
            <div>
              <div className="flex items-center gap-4">
                <img
                  src={lpuLogo.url}
                  alt="LPU Online"
                  className="h-14 w-14 rounded-lg bg-white object-contain p-1 ring-1 ring-border sm:h-16 sm:w-16"
                />
                <div className="min-w-0">
                  <h1 className="truncate text-3xl font-bold text-foreground sm:text-4xl">
                    {course.name}
                  </h1>
                  <p className="mt-1 text-sm text-muted-foreground sm:text-base">
                    Lovely Professional University Online
                  </p>
                </div>
              </div>
              <p className="mt-4 max-w-xl text-base text-muted-foreground sm:text-lg">
                {course.tagline}
              </p>
              <div className="mt-5 flex flex-wrap items-center gap-4 text-sm text-muted-foreground">
                <span className="inline-flex items-center gap-1.5">
                  <Clock className="h-4 w-4 text-primary" /> {course.duration}
                </span>
                <span className="inline-flex items-center gap-1.5">
                  <Award className="h-4 w-4 text-primary" />{" "}
                  {course.level.toUpperCase()} Program
                </span>
                <span className="inline-flex items-center gap-1.5">
                  <Star className="h-4 w-4 fill-primary text-primary" />
                  {course.rating} ({course.reviews.toLocaleString()} Reviews)
                </span>
              </div>
              <div className="mt-6 flex flex-wrap gap-3">
                <button
                  type="button"
                  onClick={openModal}
                  className="inline-flex items-center gap-2 rounded-md bg-primary px-6 py-3 text-sm font-semibold text-primary-foreground shadow-[var(--shadow-brand)] transition hover:opacity-90"
                >
                  Apply Now <ChevronRight className="h-4 w-4" />
                </button>
                <button
                  type="button"
                  onClick={openModal}
                  className="inline-flex items-center gap-2 rounded-md border border-border bg-background px-6 py-3 text-sm font-semibold text-foreground transition hover:bg-accent"
                >
                  <Download className="h-4 w-4" /> Download Brochure
                </button>
              </div>
            </div>
            <div>
              <LeadFormCompact />
            </div>
          </div>
        </section>

        {/* Fees */}
        <section className="bg-background py-16">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <h2 className="flex items-center gap-2 text-2xl font-bold text-foreground sm:text-3xl">
              <IndianRupee className="h-7 w-7 text-primary" /> Online {course.name} Fee
            </h2>
            <div className="mt-6 grid grid-cols-1 gap-6 rounded-2xl border border-primary/20 bg-accent p-6 md:grid-cols-3">
              <FeeStat
                label={`Full Course Fee (${course.level === "ug" ? "Six" : "Four"} semesters)`}
                value={course.feesBreakdown.fullFees}
                note="Inclusive of all taxes"
              />
              <FeeStat
                label="Each Semester Fee"
                value={course.feesBreakdown.perSemester}
                note="Inclusive of all taxes"
              />
              <FeeStat
                label="EMI Starting at"
                value={course.feesBreakdown.emi}
                note="Terms & conditions apply"
              />
            </div>
          </div>
        </section>

        {/* Curriculum */}
        <section className="bg-secondary/40 py-16">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <h2 className="flex items-center gap-2 text-2xl font-bold text-foreground sm:text-3xl">
              <BookOpen className="h-7 w-7 text-primary" /> {course.name} Curriculum
            </h2>
            <p className="mt-2 max-w-2xl text-sm text-muted-foreground sm:text-base">
              Explore the subjects covered year-wise in our {course.level.toUpperCase()} program.
            </p>
            <div className="mt-6 rounded-2xl border border-border bg-card p-4 sm:p-6">
              <div className="flex flex-wrap gap-2">
                {course.curriculum.map((y) => (
                  <button
                    key={y.year}
                    type="button"
                    onClick={() => setCurriculumTab(y.year)}
                    className={`rounded-md px-4 py-2 text-sm font-semibold transition ${
                      curriculumTab === y.year
                        ? "bg-primary text-primary-foreground"
                        : "bg-secondary text-muted-foreground hover:bg-accent"
                    }`}
                  >
                    {y.year}
                  </button>
                ))}
              </div>
              <div className="mt-5 grid grid-cols-1 gap-3 md:grid-cols-2">
                {activeCurriculum?.subjects.map((s) => (
                  <div
                    key={s}
                    className="flex items-start gap-3 rounded-lg border border-border bg-background p-4"
                  >
                    <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-primary" />
                    <span className="text-sm font-medium text-foreground">{s}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Specializations */}
        {course.specializations && course.specializations.length > 0 && (
          <section className="bg-background py-16">
            <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
              <h2 className="flex items-center gap-2 text-2xl font-bold text-foreground sm:text-3xl">
                <Briefcase className="h-7 w-7 text-primary" /> {course.name} Specializations
                Offered
              </h2>
              <div className="mt-6 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
                {course.specializations.map((spec) => (
                  <div
                    key={spec}
                    className="flex items-center gap-3 rounded-2xl border border-border bg-card p-5 transition hover:border-primary/60 hover:shadow-[var(--shadow-brand)]"
                  >
                    <span className="grid h-10 w-10 shrink-0 place-items-center rounded-full bg-accent">
                      <Award className="h-5 w-5 text-primary" />
                    </span>
                    <span className="font-semibold text-foreground">{spec}</span>
                  </div>
                ))}
              </div>
            </div>
          </section>
        )}

        {/* Why Online (LMS) */}
        <section className="bg-secondary/40 py-16">
          <div className="mx-auto grid max-w-7xl items-center gap-10 px-4 sm:px-6 lg:grid-cols-2 lg:px-8">
            <div>
              <h2 className="flex items-center gap-2 text-2xl font-bold text-foreground sm:text-3xl">
                <MonitorPlay className="h-7 w-7 text-primary" /> Why LPU Online Programs
              </h2>
              <p className="mt-4 text-muted-foreground">
                Learn at your own pace on a modern LMS with recorded lectures, live sessions,
                mentor support and proctored online exams — all recognized as a full campus
                degree.
              </p>
              <ul className="mt-6 space-y-3 text-sm">
                {[
                  "Interactive LMS with 24/7 access to recorded lectures",
                  "Live sessions with expert industry faculty",
                  "AI-powered mentor and doubt-solving support",
                  "Fully remote proctored online examinations",
                  "Same UGC-entitled degree as the campus program",
                ].map((line) => (
                  <li key={line} className="flex items-start gap-2 text-foreground">
                    <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-primary" /> {line}
                  </li>
                ))}
              </ul>
            </div>
            <div className="relative">
              <img
                src={lpuLms}
                alt="LPU Online LMS preview"
                loading="lazy"
                className="w-full rounded-2xl border border-border bg-white shadow-2xl"
              />
            </div>
          </div>
        </section>

        {/* Sample Degree */}
        <section className="bg-background py-16">
          <div className="mx-auto grid max-w-7xl items-center gap-12 px-4 sm:px-6 lg:grid-cols-2 lg:px-8">
            <div>
              <h2 className="text-2xl font-bold text-foreground sm:text-3xl">
                Sample {course.name} Degree
              </h2>
              <p className="mt-4 text-muted-foreground">
                On successful completion of your {course.name}, you receive a UGC-entitled degree
                from Lovely Professional University — treated at par with the on-campus program
                and recognized internationally.
              </p>
              <div className="mt-6 flex flex-wrap items-center gap-3">
                <span className="inline-flex items-center gap-1.5 rounded-full bg-accent px-3 py-1 text-xs font-semibold text-accent-foreground">
                  <BadgeCheck className="h-4 w-4 text-primary" /> UGC Entitled
                </span>
                <span className="inline-flex items-center gap-1.5 rounded-full bg-accent px-3 py-1 text-xs font-semibold text-accent-foreground">
                  <BadgeCheck className="h-4 w-4 text-primary" /> NAAC A++
                </span>
                <span className="inline-flex items-center gap-1.5 rounded-full bg-accent px-3 py-1 text-xs font-semibold text-accent-foreground">
                  <BadgeCheck className="h-4 w-4 text-primary" /> WES Recognized
                </span>
              </div>
            </div>
            <img
              src={lpuCertificate.url}
              alt="LPU sample degree certificate"
              loading="lazy"
              className="mx-auto w-full max-w-md rounded-xl border border-border bg-white shadow-2xl"
            />
          </div>
        </section>

        {/* Career Assistance */}
        <CareerAssistance />

        {/* Placement Support */}
        <section className="bg-primary/10 py-16">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="text-center">
              <h2 className="text-3xl font-bold text-foreground sm:text-4xl">
                Experience 100% Placement Support
              </h2>
              <p className="mx-auto mt-3 max-w-2xl text-muted-foreground">
                Our dedicated placement team works to connect you with top employers across
                industries for guaranteed career advancement.
              </p>
            </div>
            <div className="mt-10 grid grid-cols-2 gap-4 md:grid-cols-4">
              {[
                { v: "100%", l: "Placement Assistance" },
                { v: "400+", l: "Hiring Partners" },
                { v: "₹10L", l: "Highest Package" },
                { v: "₹5L", l: "Average Package" },
              ].map((s) => (
                <div
                  key={s.l}
                  className="rounded-2xl border border-border bg-card p-6 text-center shadow-sm"
                >
                  <div className="text-3xl font-extrabold text-primary sm:text-4xl">{s.v}</div>
                  <div className="mt-1 text-sm text-muted-foreground">{s.l}</div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Career Scope & Recruiters */}
        <section className="bg-background py-16">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <h2 className="text-center text-3xl font-bold text-foreground sm:text-4xl">
              Career Scope & Top Recruiters
            </h2>
            <div className="mt-10 grid gap-10 lg:grid-cols-2">
              <div>
                <h3 className="flex items-center gap-2 text-xl font-semibold text-primary">
                  <GraduationCap className="h-5 w-5" /> Career Opportunities
                </h3>
                <div className="mt-4 grid grid-cols-1 gap-3 sm:grid-cols-2">
                  {course.careers.map((c) => (
                    <div
                      key={c.role}
                      className="flex items-center justify-between gap-3 rounded-lg border border-border bg-card p-4"
                    >
                      <span className="font-medium text-foreground">{c.role}</span>
                      <span className="text-sm font-semibold text-primary">{c.salary}</span>
                    </div>
                  ))}
                </div>
              </div>
              <div>
                <h3 className="flex items-center gap-2 text-xl font-semibold text-primary">
                  <Users className="h-5 w-5" /> Top Recruiters
                </h3>
                <div className="mt-4 rounded-2xl border border-border bg-card p-4 sm:p-6">
                  <img
                    src={hiringPartners}
                    alt="Top Hiring Partners"
                    loading="lazy"
                    className="mx-auto h-auto w-full max-w-lg object-contain"
                  />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Related courses */}
        <section className="bg-secondary/40 py-16">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <h2 className="text-center text-2xl font-bold text-foreground sm:text-3xl">
              Explore Other LPU Online Programs
            </h2>
            <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
              {allCourses
                .filter((c) => c.slug !== course.slug)
                .slice(0, 4)
                .map((c) => (
                  <Link
                    key={c.slug}
                    to="/courses/$slug"
                    params={{ slug: c.slug }}
                    className="group overflow-hidden rounded-2xl border border-border bg-card transition hover:-translate-y-1 hover:border-primary/60 hover:shadow-[var(--shadow-brand)]"
                  >
                    <img
                      src={c.image}
                      alt={c.name}
                      loading="lazy"
                      className="aspect-[4/3] w-full object-cover transition group-hover:scale-105"
                    />
                    <div className="p-4">
                      <p className="font-semibold text-foreground">{c.name}</p>
                      <p className="mt-1 text-xs text-muted-foreground">{c.duration} · {c.fee}</p>
                    </div>
                  </Link>
                ))}
            </div>
          </div>
        </section>

        {/* Final CTA */}
        <section className="relative overflow-hidden py-16">
          <div className="absolute inset-0 -z-10" style={{ background: "var(--gradient-brand)" }} />
          <div className="mx-auto max-w-4xl px-4 text-center text-primary-foreground sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold sm:text-4xl">
              Ready to enroll in {course.name}?
            </h2>
            <p className="mx-auto mt-3 max-w-xl opacity-95">
              Talk to an LPU Online counselor for fees, EMI options, scholarships and the
              step-by-step admission plan.
            </p>
            <button
              type="button"
              onClick={openModal}
              className="mt-6 inline-flex items-center gap-2 rounded-md bg-background px-6 py-3 text-sm font-bold text-primary shadow-2xl transition hover:opacity-95"
            >
              Get Free Counseling <ChevronRight className="h-4 w-4" />
            </button>
          </div>
        </section>
      </main>
      <SiteFooter />
      <CounselingModal open={open} onClose={() => setOpen(false)} />
    </div>
  );
}

function FeeStat({ label, value, note }: { label: string; value: string; note: string }) {
  return (
    <div>
      <p className="text-sm font-semibold text-muted-foreground">{label}</p>
      <p className="mt-2 text-3xl font-extrabold text-primary sm:text-4xl">{value}</p>
      <p className="mt-1 text-xs text-muted-foreground">{note}</p>
    </div>
  );
}

// Silence unused lint if any
void lpu;
