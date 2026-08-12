import { createFileRoute, notFound, Link } from "@tanstack/react-router";
import { findCourse, allCourses, lpu, type Course } from "@/lib/lpu";
const lpuCertificate = { url: "/sample-degree.webp" };
import hiringPartners from "@/assets/hiring-partners.png";
import advantageImg from "@/assets/advantage.jpg";
import { useState } from "react";
import {
  SiteHeader,
  SiteFooter,
  CounselingModal,
  useModalTrigger,
  openModal,
  LeadFormCompact,
  CareerAssistance,
  SpecializationsSection,
  StickyActionBar,
  Breadcrumb,
  SeoFaq,
  PopularSearches,
} from "@/components/site";
import {
  SmartCTA,
  FeeEmiCalculator,
  EligibilityChecker,
  AdmissionTimeline,
  PlacementDetails,
  TopicLinkGrid,
  StudentsAlsoViewed,
  RelatedBlogsBlock,
  QuickLinksRow,
  StudentToolsSection,
  StudentToolsHost,
} from "@/components/topical";
import {
  Award,
  BadgeCheck,
  BookOpen,
  Briefcase,
  ChevronLeft,
  ChevronRight,
  Clock,
  Download,
  GraduationCap,
  IndianRupee,
  Star,
  Users,
  CheckCircle2,
  Sparkles,
} from "lucide-react";

const LOGO_SRC = "/lpu-logo.png";

const PILLAR_SECTIONS: { id: string; label: string }[] = [
  { id: "specializations", label: "Specializations" },
  { id: "curriculum", label: "Syllabus" },
  { id: "fees", label: "Fees & EMI" },
  { id: "eligibility", label: "Eligibility" },
  { id: "admission", label: "Admission" },
  { id: "exam-pattern", label: "Exam Pattern" },
  { id: "scholarship", label: "Scholarships" },
  { id: "placements", label: "Placements" },
  { id: "careers", label: "Careers & Salary" },
  { id: "sample-degree", label: "Sample Degree" },
  { id: "reviews", label: "Reviews" },
  { id: "faqs", label: "FAQs" },
];



export const Route = createFileRoute("/courses/$slug")({
  loader: ({ params }) => {
    const course = findCourse(params.slug);
    if (!course) throw notFound();
    return { course };
  },
  head: ({ loaderData, params }) => {
    const c = loaderData?.course;
    const title = c
      ? `${c.name} — LPU Online | UGC Entitled Degree, Fees & Admission 2026`
      : "Course — LPU Online";
    const desc = c
      ? `${c.tagline} 100% online, UGC-entitled, NAAC A++ university. Fee ${c.fee}, EMI ${c.feesBreakdown.emi}. Apply for LPU Online admission 2026.`
      : "Explore online degree programs from LPU Online.";
    const canonical = `https://lpuonline.avedu.in/courses/${params.slug}`;
    const courseSchema = c
      ? {
          "@context": "https://schema.org",
          "@type": "Course",
          name: c.name,
          description: c.tagline,
          provider: {
            "@type": "CollegeOrUniversity",
            name: "Lovely Professional University",
            sameAs: "https://www.lpu.in/",
          },
          hasCourseInstance: {
            "@type": "CourseInstance",
            courseMode: "online",
            courseWorkload: c.duration,
          },
          offers: {
            "@type": "Offer",
            price: c.feesBreakdown.fullFees.replace(/[^0-9]/g, ""),
            priceCurrency: "INR",
          },
        }
      : null;
    const breadcrumbSchema = {
      "@context": "https://schema.org",
      "@type": "BreadcrumbList",
      itemListElement: [
        { "@type": "ListItem", position: 1, name: "Home", item: "https://lpuonline.avedu.in/" },
        { "@type": "ListItem", position: 2, name: "Courses", item: "https://lpuonline.avedu.in/lpu-online-courses" },
        { "@type": "ListItem", position: 3, name: c ? c.name : "Course", item: canonical },
      ],
    };
    const faqSchema = {
      "@context": "https://schema.org",
      "@type": "FAQPage",
      mainEntity: lpu.faqs.slice(0, 8).map((f) => ({
        "@type": "Question",
        name: f.q,
        acceptedAnswer: { "@type": "Answer", text: f.a },
      })),
    };
    return {
      meta: [
        { title },
        { name: "description", content: desc },
        { property: "og:title", content: title },
        { property: "og:description", content: desc },
        { property: "og:url", content: canonical },
        { property: "og:type", content: "article" },
        { name: "twitter:card", content: "summary_large_image" },
      ],
      links: [{ rel: "canonical", href: canonical }],
      scripts: [
        ...(courseSchema
          ? [{ type: "application/ld+json", children: JSON.stringify(courseSchema) }]
          : []),
        { type: "application/ld+json", children: JSON.stringify(breadcrumbSchema) },
        { type: "application/ld+json", children: JSON.stringify(faqSchema) },
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

const advantages = [
  { number: "1", title: "Flexibility:", desc: "LPU Online offers a flexible learning environment suitable for working professionals." },
  { number: "2", title: "Quality Education:", desc: "The program maintains high academic standards with a curriculum updated to reflect industry trends." },
  { number: "3", title: "24*7 LMS Access:", desc: "Get unlimited 24×7 access to our Learning Management System so you can study anytime, anywhere. All your course materials, lectures, and assignments are just a click away." },
  { number: "4", title: "1 on 1 mentor:", desc: "Receive personalized guidance with 1-on-1 mentorship tailored to your learning needs. Get expert support to clarify doubts, plan studies, and achieve your goals faster." },
  { number: "5", title: "Placement Support:", desc: "Get dedicated placement support with active job promotion to top recruiters. From resume building to interview preparation, we help you secure and showcase your profile for the best opportunities." },
];

function CoursePage() {

  const { course } = Route.useLoaderData() as { course: Course };
  const { open, setOpen } = useModalTrigger();

  const semesters = course.curriculum.map((y, i) => ({
    label: `Semester ${i + 1}`,
    subjects: y.subjects,
  }));
  const [semIdx, setSemIdx] = useState(0);
  const activeSem = semesters[semIdx] ?? semesters[0];

  const discountedFull = course.feesBreakdown.appliedFee;


  return (
    <div className="min-h-screen bg-background">
      <SiteHeader />
      <Breadcrumb items={[{ label: "Courses", to: "/lpu-online-courses" }, { label: course.name }]} />
      <main>

        {/* Hero (with sticky form column) */}
        <section
          className="relative overflow-hidden bg-background py-12 sm:py-16"
          style={{
            backgroundImage:
              "linear-gradient(135deg, color-mix(in oklab, var(--primary) 10%, transparent), transparent 60%)",
          }}
        >
          <div className="mx-auto grid max-w-7xl items-start gap-10 px-4 sm:px-6 lg:grid-cols-[1fr_380px] lg:px-8">
            <div>
              <div className="flex items-center gap-4">
                <img
                  src={LOGO_SRC}
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
            <div className="lg:sticky lg:top-24">
              <LeadFormCompact />
            </div>
          </div>
        </section>

        {/* On-page navigation — one pillar page, every intent anchored */}
        <nav aria-label="On this page" className="sticky top-0 z-30 border-y border-border bg-background/95 backdrop-blur">
          <div className="mx-auto flex max-w-7xl gap-2 overflow-x-auto px-4 py-3 sm:px-6 lg:px-8">
            {PILLAR_SECTIONS.map((s) => (
              <a
                key={s.id}
                href={`#${s.id}`}
                className="whitespace-nowrap rounded-full border border-border bg-card px-3.5 py-1.5 text-xs font-semibold text-foreground transition hover:border-primary hover:text-primary sm:text-sm"
              >
                {s.label}
              </a>
            ))}
          </div>
        </nav>

        {/* Specializations — 2-per-row grid with arrow navigation */}
        {course.specializations && course.specializations.length > 0 && (
          <div id="specializations" className="scroll-mt-24">
            <SpecializationsSection specializations={course.specializations} />
          </div>
        )}


        {/* Curriculum — semester-wise, mobile-friendly nav */}
        <section id="curriculum" className="scroll-mt-24 bg-secondary/40 py-16">

          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <h2 className="flex items-center gap-2 text-2xl font-bold text-foreground sm:text-3xl">
              <BookOpen className="h-7 w-7 text-primary" /> {course.name} Curriculum
            </h2>
            <p className="mt-2 max-w-2xl text-sm text-muted-foreground sm:text-base">
              Semester-wise breakdown of the {course.level.toUpperCase()} program curriculum.
            </p>

            <div className="mt-6 rounded-2xl border border-border bg-card p-4 sm:p-6">
              {/* Desktop / tablet tabs */}
              <div className="hidden flex-wrap gap-2 sm:flex">
                {semesters.map((s, i) => (
                  <button
                    key={s.label}
                    type="button"
                    onClick={() => setSemIdx(i)}
                    className={`rounded-md px-4 py-2 text-sm font-semibold transition ${
                      semIdx === i
                        ? "bg-primary text-primary-foreground"
                        : "bg-secondary text-muted-foreground hover:bg-accent"
                    }`}
                  >
                    {s.label}
                  </button>
                ))}
              </div>

              {/* Mobile pager */}
              <div className="flex items-center justify-between gap-3 sm:hidden">
                <button
                  type="button"
                  aria-label="Previous semester"
                  onClick={() => setSemIdx((i) => Math.max(0, i - 1))}
                  disabled={semIdx === 0}
                  className="grid h-10 w-10 place-items-center rounded-full border border-border bg-background text-foreground disabled:opacity-40"
                >
                  <ChevronLeft className="h-5 w-5" />
                </button>
                <div className="flex-1 text-center">
                  <p className="text-xs font-semibold uppercase tracking-wide text-muted-foreground">
                    {semIdx + 1} of {semesters.length}
                  </p>
                  <p className="text-base font-bold text-foreground">{activeSem?.label}</p>
                </div>
                <button
                  type="button"
                  aria-label="Next semester"
                  onClick={() =>
                    setSemIdx((i) => Math.min(semesters.length - 1, i + 1))
                  }
                  disabled={semIdx === semesters.length - 1}
                  className="grid h-10 w-10 place-items-center rounded-full border border-border bg-background text-foreground disabled:opacity-40"
                >
                  <ChevronRight className="h-5 w-5" />
                </button>
              </div>

              <div className="mt-5 grid grid-cols-1 gap-3 md:grid-cols-2">
                {activeSem?.subjects.map((s) => (
                  <div
                    key={s}
                    className="flex items-start gap-3 rounded-lg border border-border bg-background p-4"
                  >
                    <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-primary" />
                    <span className="text-sm font-medium text-foreground">{s}</span>
                  </div>
                ))}
              </div>

              {/* Mobile dots */}
              <div className="mt-5 flex justify-center gap-2 sm:hidden">
                {semesters.map((s, i) => (
                  <button
                    key={s.label}
                    type="button"
                    aria-label={`Go to ${s.label}`}
                    onClick={() => setSemIdx(i)}
                    className={`h-2.5 rounded-full transition-all ${
                      semIdx === i ? "w-6 bg-primary" : "w-2.5 bg-border"
                    }`}
                  />
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Fees — moved BELOW curriculum, with discount UI */}
        <section id="fees" className="scroll-mt-24 bg-background py-16">

          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <h2 className="flex items-center gap-2 text-2xl font-bold text-foreground sm:text-3xl">
              <IndianRupee className="h-7 w-7 text-primary" /> Online {course.name} Fee
            </h2>
            <div className="mt-6 grid grid-cols-1 gap-6 rounded-2xl border border-primary/20 bg-accent p-6 md:grid-cols-3">
              {/* Full fee card with discount */}
              <div>
                <p className="text-sm font-semibold text-muted-foreground">
                  Full Fee Payment
                </p>
                <p className="mt-2 text-lg font-semibold text-muted-foreground line-through">
                  {course.feesBreakdown.fullFees}
                </p>
                <p className="text-3xl font-extrabold text-primary sm:text-4xl">
                  {discountedFull}
                </p>
                <p className="mt-2 inline-flex items-center gap-1.5 rounded-full bg-primary/10 px-3 py-1 text-xs font-bold text-primary">
                  <Sparkles className="h-3.5 w-3.5" /> 20% discount
                </p>
              </div>
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

        {/* Eligibility + Admission + Exam pattern + Scholarships — consolidated spokes */}
        <section className="bg-secondary/40 py-16">
          <div className="mx-auto grid max-w-7xl gap-6 px-4 sm:px-6 lg:grid-cols-2 lg:px-8">
            <InfoBlock
              id="eligibility"
              icon={<BadgeCheck className="h-6 w-6 text-primary" />}
              title={`${course.name} Eligibility`}
              intro={`Minimum eligibility for the LPU ${course.name} programme in 2026.`}
              items={[
                ...lpu.eligibility
                  .filter((e) => e.level.toLowerCase().includes(course.level === "pg" ? "pg" : "ug"))
                  .map((e) => e.criteria),
                "Marksheets of all qualifying examinations",
                "Government photo ID and passport-size photograph",
              ]}
            />
            <InfoBlock
              id="admission"
              icon={<GraduationCap className="h-6 w-6 text-primary" />}
              title={`${course.name} Admission Process`}
              intro="Merit-based admission — no entrance exam. Most admissions confirm within 48 hours."
              items={lpu.process}
            />
            <InfoBlock
              id="exam-pattern"
              icon={<BookOpen className="h-6 w-6 text-primary" />}
              title={`${course.name} Exam Pattern`}
              intro="Remote proctored examinations you can take from home."
              items={[
                "30% continuous internal assessment (assignments and quizzes)",
                "70% end-term remote proctored examination",
                "Objective and descriptive question types",
                "Laptop with webcam, stable internet and photo ID needed on exam day",
                "Re-appear allowed in the next examination cycle",
              ]}
            />
            <InfoBlock
              id="scholarship"
              icon={<Award className="h-6 w-6 text-primary" />}
              title={`${course.name} Scholarships`}
              intro="Scholarships that reduce your programme fee — one award applies per learner."
              items={lpu.scholarships}
            />
          </div>
        </section>



        {/* LPU Online Advantages — numbered list + image (matches reference) */}
        <section className="relative overflow-hidden bg-background py-16">
          <div className="container mx-auto px-4">
            <div className="mx-auto flex max-w-7xl flex-col items-center gap-8 lg:flex-row">
              {/* Left content */}
              <div className="flex-1 lg:pr-8">
                <h2 className="mb-8 text-3xl font-bold leading-tight lg:text-4xl">
                  <span className="text-primary">LPU Online</span> Advantages
                </h2>
                <div className="space-y-6">
                  {advantages.map((point) => (
                    <div key={point.number} className="flex items-start gap-4">
                      <div className="flex-shrink-0">
                        <span className="text-5xl font-bold leading-none text-primary">
                          {point.number}
                        </span>
                      </div>
                      <div className="pt-2">
                        <h3 className="mb-1 text-lg font-bold text-foreground">
                          {point.title}
                        </h3>
                        <p className="leading-relaxed text-muted-foreground">
                          {point.desc}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
              {/* Right image */}
              <div className="relative flex-1">
                <img
                  src={advantageImg}
                  alt="LPU Online Advantages"
                  loading="lazy"
                  className="mx-auto h-auto w-full max-w-lg rounded-lg"
                />
              </div>
            </div>
          </div>
        </section>

        {/* Sample Degree */}
        <section id="sample-degree" className="scroll-mt-24 bg-background py-16">

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
        <section id="placements" className="scroll-mt-24 bg-primary/10 py-16">

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
        <section id="careers" className="scroll-mt-24 bg-background py-16">

          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold text-foreground sm:text-4xl">
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

        {/* Reviews */}
        <section id="reviews" className="scroll-mt-24 bg-secondary/40 py-16">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <h2 className="flex items-center gap-2 text-2xl font-bold text-foreground sm:text-3xl">
              <Star className="h-7 w-7 fill-primary text-primary" /> {course.name} Reviews
            </h2>
            <p className="mt-3 max-w-3xl text-muted-foreground">
              Learners rate the LPU {course.name} {course.rating}/5 across{" "}
              {course.reviews.toLocaleString()} reviews — with the strongest feedback on
              flexibility, faculty support and the recognised degree.
            </p>
            <div className="mt-6 grid gap-4 sm:grid-cols-3">
              {lpu.approvals.slice(0, 3).map((a) => (
                <div key={a.name} className="rounded-2xl border border-border bg-card p-5">
                  <p className="text-sm font-bold text-primary">{a.name}</p>
                  <p className="mt-1 text-sm text-muted-foreground">{a.note}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Internal links — hub-and-spoke: sitewide hubs + in-page anchors */}
        <section className="bg-background pt-10">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="rounded-2xl border border-border bg-secondary/40 p-6">
              <h2 className="text-lg font-bold text-foreground">More about {course.name} at LPU Online</h2>
              <div className="mt-4 flex flex-wrap gap-2">
                <a href="#fees" className="rounded-full border border-border bg-background px-4 py-2 text-sm font-semibold text-foreground hover:border-primary hover:text-primary">Fees & EMI</a>
                <a href="#eligibility" className="rounded-full border border-border bg-background px-4 py-2 text-sm font-semibold text-foreground hover:border-primary hover:text-primary">Eligibility</a>
                <a href="#admission" className="rounded-full border border-border bg-background px-4 py-2 text-sm font-semibold text-foreground hover:border-primary hover:text-primary">Admission process</a>
                <a href="#placements" className="rounded-full border border-border bg-background px-4 py-2 text-sm font-semibold text-foreground hover:border-primary hover:text-primary">Placements</a>
                <a href="#scholarship" className="rounded-full border border-border bg-background px-4 py-2 text-sm font-semibold text-foreground hover:border-primary hover:text-primary">Scholarships</a>
                <a href="#reviews" className="rounded-full border border-border bg-background px-4 py-2 text-sm font-semibold text-foreground hover:border-primary hover:text-primary">Reviews</a>
                <Link to="/lpu-online-courses" className="rounded-full border border-border bg-background px-4 py-2 text-sm font-semibold text-foreground hover:border-primary hover:text-primary">All courses</Link>
                <Link to="/compare-universities" className="rounded-full border border-border bg-background px-4 py-2 text-sm font-semibold text-foreground hover:border-primary hover:text-primary">Compare universities</Link>
                <Link to="/best-online-$program" params={{ program: course.slug }} className="rounded-full border border-border bg-background px-4 py-2 text-sm font-semibold text-foreground hover:border-primary hover:text-primary">Best online {course.name}</Link>
                <Link to="/blog" className="rounded-full border border-border bg-background px-4 py-2 text-sm font-semibold text-foreground hover:border-primary hover:text-primary">Blog & guides</Link>
              </div>
            </div>

          </div>
        </section>

        {/* Related courses */}

        <section className="bg-secondary/40 py-16">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <h2 className="text-2xl font-bold text-foreground sm:text-3xl">
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



        {/* Phase 3/7 — topical authority, tools and conversion blocks */}
        <SmartCTA title={`Talk to a counsellor about ${course.name} admission 2026`} />
        <section className="bg-background py-12">
          <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
            <FeeEmiCalculator defaultSlug={course.slug} />
            <div className="mt-6">
              <EligibilityChecker defaultSlug={course.slug} />
            </div>
          </div>
        </section>
        <AdmissionTimeline />
        <PlacementDetails course={course} />
        <TopicLinkGrid program={course.slug.replace("online-", "")} courseName={course.name} />
        <StudentsAlsoViewed currentSlug={course.slug} />
        <RelatedBlogsBlock keyword={course.name.replace("Online ", "")} />

        {/* SEO FAQ + Popular Searches */}
        <div id="faqs" className="scroll-mt-24">
          <SeoFaq items={lpu.faqs} />
        </div>

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


function FeeStat({ label, value, note }: { label: string; value: string; note: string }) {
  return (
    <div>
      <p className="text-sm font-semibold text-muted-foreground">{label}</p>
      <p className="mt-2 text-3xl font-extrabold text-primary sm:text-4xl">{value}</p>
      <p className="mt-1 text-xs text-muted-foreground">{note}</p>
    </div>
  );
}

function InfoBlock({
  id,
  icon,
  title,
  intro,
  items,
}: {
  id: string;
  icon: React.ReactNode;
  title: string;
  intro: string;
  items: string[];
}) {
  return (
    <section id={id} className="scroll-mt-24 rounded-2xl border border-border bg-card p-6 sm:p-8">
      <h2 className="flex items-center gap-2 text-xl font-bold text-foreground sm:text-2xl">
        {icon} {title}
      </h2>
      <p className="mt-2 text-sm text-muted-foreground">{intro}</p>
      <ul className="mt-5 space-y-3">
        {items.map((item) => (
          <li key={item} className="flex items-start gap-3">
            <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-primary" />
            <span className="text-sm text-foreground">{item}</span>
          </li>
        ))}
      </ul>
    </section>
  );
}


// Silence unused lint if any
void lpu;
