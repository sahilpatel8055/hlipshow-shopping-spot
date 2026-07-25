import { createFileRoute, Link } from "@tanstack/react-router";
import { useEffect, useRef, useState } from "react";
import { lpu } from "@/lib/lpu";
import lpuCertificate from "@/assets/sample-degree.webp.asset.json";
import hiringPartners from "@/assets/hiring-partners.png";
import logoNaac from "@/assets/logo/naac.jpeg";
import logoNirf from "@/assets/logo/nirf.png";
import logoThe from "@/assets/logo/the.png";
import logoUgc from "@/assets/logo/ugc.jpg";
import heroSlide1 from "@/assets/lpu-hero.jpg";
import heroSlide2 from "@/assets/mba-slider.webp";
import heroSlide3 from "@/assets/mca-slider.webp";
import {
  GraduationCap,
  Award,
  BadgeCheck,
  IndianRupee,
  Users,
  Briefcase,
  CheckCircle2,
  ChevronRight,
  ChevronLeft,
  Phone,
  Flame,
} from "lucide-react";
import {
  SiteHeader,
  SiteFooter,
  CounselingModal,
  useModalTrigger,
  openModal,
  LeadFormCompact,

  CareerAssistance,
  StickyActionBar,
  PopularSearches,
} from "@/components/site";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "LPU Online — UGC-Entitled Online Degrees | Same Degree, Now Online" },
      {
        name: "description",
        content:
          "Apply for LPU Online admission 2026. UGC-entitled BBA, BCA, MBA, MCA and more from NAAC A++ Lovely Professional University. 100% online, EMI options, placement support.",
      },
      { property: "og:title", content: "LPU Online — Same Degree, Now Online" },
      {
        property: "og:description",
        content:
          "UGC-entitled online degrees from India's largest private university. Flexible learning, dedicated placement cell, EMI options.",
      },
      { property: "og:url", content: "https://lpuonline.avedu.in/" },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [{ rel: "canonical", href: "https://lpuonline.avedu.in/" }],
  }),
  component: LpuPage,
});


/* ---------------- Hero ---------------- */

function Hero() {
  return (
    <section id="top" className="relative overflow-hidden bg-background">
      <div
        className="absolute inset-0 -z-10 opacity-[0.08]"
        style={{ background: "var(--gradient-brand)" }}
      />
      <div className="mx-auto grid max-w-7xl items-start gap-8 px-4 pt-6 pb-14 sm:px-6 sm:pt-8 lg:grid-cols-2 lg:gap-16 lg:px-8 lg:pt-10 lg:pb-20">
        <div>
          <span className="inline-flex items-center gap-2 rounded-full border border-primary/30 bg-accent px-3 py-1 text-xs font-semibold uppercase tracking-wider text-accent-foreground">
            <BadgeCheck className="h-3.5 w-3.5" /> UGC ENTITLED · NAAC A++
          </span>
          <h1 className="mt-4 text-4xl font-bold leading-tight tracking-tight text-foreground sm:text-5xl lg:text-6xl">
            {lpu.name}
            <span className="mt-2 block text-primary">Same Degree, Now Online.</span>
          </h1>
          <p className="mt-4 max-w-xl text-base leading-relaxed text-muted-foreground sm:text-lg">
            {lpu.tagline}. Study 100% online with recorded lectures, live sessions, mentor
            support and proctored exams — from anywhere in India.
          </p>
          <div className="mt-6 flex flex-wrap gap-3">
            <button
              type="button"
              onClick={openModal}
              className="inline-flex items-center gap-2 rounded-md bg-primary px-6 py-3 text-sm font-semibold text-primary-foreground shadow-[var(--shadow-brand)] transition hover:opacity-90"
            >
              Get Free Counseling <ChevronRight className="h-4 w-4" />
            </button>
            <a
              href="#courses"
              className="inline-flex items-center gap-2 rounded-md border border-border bg-background px-6 py-3 text-sm font-semibold text-foreground transition hover:bg-accent"
            >
              View Programs
            </a>
          </div>
          <dl className="mt-8 grid grid-cols-2 gap-3 sm:grid-cols-4">
            {lpu.highlights.map((h) => (
              <div key={h.label} className="rounded-xl border border-border bg-card p-3 sm:p-4">
                <dt className="text-xs font-medium uppercase tracking-wide text-muted-foreground">
                  {h.label}
                </dt>
                <dd className="mt-1 text-sm font-semibold text-foreground">{h.value}</dd>
              </div>
            ))}
          </dl>
        </div>
        <div className="space-y-6">
          <HeroSlider />
          <LeadFormCompact />
        </div>
      </div>
    </section>
  );
}

/* ---------------- Hero auto-slider ---------------- */

const heroSlides = [
  { src: heroSlide1, alt: "LPU Online campus" },
  { src: heroSlide2, alt: "Online MBA at LPU" },
  { src: heroSlide3, alt: "Online MCA at LPU" },
];

function HeroSlider() {
  const [idx, setIdx] = useState(0);
  useEffect(() => {
    const t = setInterval(() => setIdx((i) => (i + 1) % heroSlides.length), 3000);
    return () => clearInterval(t);
  }, []);
  return (
    <div className="relative">
      <div
        className="absolute -inset-6 -z-10 rounded-[2rem] opacity-30 blur-2xl"
        style={{ background: "var(--gradient-brand)" }}
      />
      <div className="relative aspect-[4/3] w-full overflow-hidden rounded-2xl shadow-2xl bg-muted">
        {heroSlides.map((s, i) => (
          <img
            key={s.src}
            src={s.src}
            alt={s.alt}
            className={`absolute inset-0 h-full w-full object-cover transition-opacity duration-700 ${i === idx ? "opacity-100" : "opacity-0"}`}
            loading={i === 0 ? "eager" : "lazy"}
          />
        ))}
        <div className="absolute bottom-3 left-1/2 z-10 flex -translate-x-1/2 gap-1.5">
          {heroSlides.map((_, i) => (
            <button
              key={i}
              type="button"
              aria-label={`Slide ${i + 1}`}
              onClick={() => setIdx(i)}
              className={`h-1.5 rounded-full transition-all ${i === idx ? "w-6 bg-white" : "w-1.5 bg-white/60"}`}
            />
          ))}
        </div>
      </div>
    </div>
  );
}

/* ---------------- Rankings & Accreditations ---------------- */

type RankingLogo = { title: string; subtitle: string; badge?: string; logo?: string };

const rankingsWithLogos: RankingLogo[] = [
  { title: "NAAC A++", subtitle: "Accredited University", badge: "A++", logo: logoNaac },
  { title: "UGC Entitled", subtitle: "Online Degrees = Campus Degree", badge: "UGC", logo: logoUgc },
  { title: "NIRF Ranked", subtitle: "Top Indian University 2025", badge: "NIRF", logo: logoNirf },
  { title: "Times Higher Education", subtitle: "World's Top 400 Universities 2025", badge: "THE", logo: logoThe },
  { title: "QS World University Rankings", subtitle: "South Asia's Top Universities 2026", badge: "Top 195" },
  { title: "AICTE Norms Compliant", subtitle: "Approved Technical Programs", badge: "AICTE" },
  { title: "WES Recognized", subtitle: "For study in Canada & USA", badge: "WES" },
  { title: "The Week", subtitle: "Private & Deemed Multidisciplinary Universities", badge: "Rank 6" },
];

function RankingsCarousel() {
  const trackRef = useRef<HTMLDivElement>(null);

  const scrollByCards = (dir: 1 | -1) => {
    const el = trackRef.current;
    if (!el) return;
    const card = el.querySelector<HTMLDivElement>("[data-card]");
    const gap = 16;
    const step = card ? card.offsetWidth + gap : el.clientWidth * 0.8;
    el.scrollBy({ left: dir * step, behavior: "smooth" });
  };

  return (
    <section className="border-b border-border bg-background py-14 sm:py-16">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex items-end justify-between gap-4">
          <div className="min-w-0">
            <h2 className="text-3xl font-bold text-foreground sm:text-4xl">
              Rankings & Accreditations
            </h2>
            <p className="mt-2 max-w-xl text-sm text-muted-foreground sm:text-base">
              Recognized by leading national and international bodies.
            </p>
          </div>
          <div className="flex shrink-0 gap-2">
            <button
              type="button"
              aria-label="Previous"
              onClick={() => scrollByCards(-1)}
              className="grid h-10 w-10 place-items-center rounded-full border border-border bg-background text-foreground shadow-sm transition hover:border-primary hover:text-primary"
            >
              <ChevronLeft className="h-5 w-5" />
            </button>
            <button
              type="button"
              aria-label="Next"
              onClick={() => scrollByCards(1)}
              className="grid h-10 w-10 place-items-center rounded-full border border-border bg-background text-foreground shadow-sm transition hover:border-primary hover:text-primary"
            >
              <ChevronRight className="h-5 w-5" />
            </button>
          </div>
        </div>

        <div
          ref={trackRef}
          className="mt-8 flex snap-x snap-mandatory gap-4 overflow-x-auto scroll-smooth px-1 pt-4 pb-3 [-ms-overflow-style:none] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
        >
          {rankingsWithLogos.map((r) => (
            <div
              key={r.title}
              data-card
              className="relative flex w-[calc((100%-1rem)/2)] shrink-0 snap-start flex-col items-center rounded-2xl border border-border bg-card p-4 pt-5 text-center shadow-sm sm:w-[calc((100%-2rem)/3)] lg:w-[calc((100%-3rem)/4)]"
            >
              {r.badge && (
                <span className="absolute -top-3 right-3 z-10 rounded-md bg-primary px-2 py-0.5 text-[10px] font-bold text-primary-foreground shadow">
                  {r.badge}
                </span>
              )}
              <div className="grid h-24 w-full place-items-center rounded-xl bg-white p-3">
                {r.logo ? (
                  <img
                    src={r.logo}
                    alt={r.title}
                    className="max-h-full max-w-full object-contain"
                    loading="lazy"
                  />
                ) : (
                  <Award className="h-10 w-10 text-primary" />
                )}
              </div>
              <p className="mt-4 text-sm font-bold text-foreground">{r.title}</p>
              <p className="mt-1 text-xs leading-snug text-muted-foreground">{r.subtitle}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ---------------- Courses ---------------- */

function CourseCard({ c }: { c: (typeof lpu.courses.ug)[number] }) {
  return (
    <div className="group flex h-full flex-col overflow-hidden rounded-2xl border border-border bg-card transition hover:-translate-y-1 hover:border-primary/60 hover:shadow-[var(--shadow-brand)]">
      <div className="aspect-[4/3] overflow-hidden bg-secondary">
        <img
          src={c.image}
          alt={c.name}
          loading="lazy"
          width={800}
          height={600}
          className="h-full w-full object-cover transition group-hover:scale-105"
        />
      </div>
      <div className="flex flex-1 flex-col p-5">
        <div className="flex items-start justify-between">
          <h4 className="text-lg font-semibold text-foreground">{c.name}</h4>
          <GraduationCap className="h-5 w-5 text-primary" />
        </div>
        <div className="mt-3 flex flex-wrap gap-4 text-sm text-muted-foreground">
          <span className="inline-flex items-center gap-1">
            <BadgeCheck className="h-4 w-4 text-primary" /> {c.duration}
          </span>
          <span className="inline-flex items-center gap-1">
            <IndianRupee className="h-4 w-4 text-primary" /> {c.fee}
          </span>
        </div>
        {c.specializations && (
          <div className="mt-3">
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
        <div className="mt-5 flex items-center gap-3">
          <Link
            to="/courses/$slug"
            params={{ slug: c.slug }}
            className="inline-flex items-center gap-1 text-sm font-semibold text-primary hover:underline"
          >
            View Details <ChevronRight className="h-4 w-4" />
          </Link>
          <button
            type="button"
            onClick={openModal}
            className="ml-auto rounded-md bg-primary px-3 py-1.5 text-xs font-bold text-primary-foreground shadow-[var(--shadow-brand)] transition hover:opacity-90"
          >
            Apply Now
          </button>
        </div>
      </div>
    </div>
  );
}

function Courses() {
  const [tab, setTab] = useState<"ug" | "pg">("pg");
  const list = tab === "ug" ? lpu.courses.ug : lpu.courses.pg;
  return (
    <section id="courses" className="py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="text-3xl font-bold text-foreground sm:text-4xl lg:text-5xl">
            Explore Best Online Degree Programs In India
          </h2>
        </div>

        <div className="mx-auto mt-8 grid max-w-xl grid-cols-2 gap-0 overflow-hidden rounded-lg border-2 border-primary">
          <button
            type="button"
            onClick={() => setTab("pg")}
            className={`px-4 py-4 text-center text-sm font-bold transition sm:text-base ${
              tab === "pg"
                ? "bg-primary text-primary-foreground"
                : "bg-background text-muted-foreground hover:bg-accent"
            }`}
          >
            PG Programs
            <span className="mt-1 block text-xs font-medium opacity-90">(After Graduation)</span>
          </button>
          <button
            type="button"
            onClick={() => setTab("ug")}
            className={`px-4 py-4 text-center text-sm font-bold transition sm:text-base ${
              tab === "ug"
                ? "bg-primary text-primary-foreground"
                : "bg-background text-muted-foreground hover:bg-accent"
            }`}
          >
            UG Programs
            <span className="mt-1 block text-xs font-medium opacity-90">(After 12th)</span>
          </button>
        </div>

        <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {list.map((c) => (
            <CourseCard key={c.name} c={c} />
          ))}
        </div>
      </div>
    </section>
  );
}

/* ---------------- Degree Showcase ---------------- */

function DegreeShowcase() {
  const points = [
    {
      title: "Degree from Top Ranked University",
      desc: "Get high-stature degree on completion of your Online course from India's top most University.",
    },
    {
      title: "Universally Accepted & Recognized",
      desc: "The Degree is duly Entitled by UGC - Distance Education Bureau and is also recognized by World Education Services (WES) for study in Canada and USA.",
    },
    {
      title: "No Difference From Campus Program Degree",
      desc: "The degree is recognized by regulatory bodies and treated at par with regular degrees.",
    },
  ];
  return (
    <section className="relative overflow-hidden bg-background py-20">
      <div
        aria-hidden
        className="absolute inset-y-0 right-0 -z-10 hidden w-1/3 lg:block"
        style={{ background: "var(--gradient-brand)" }}
      />
      <div className="mx-auto grid max-w-7xl items-center gap-12 px-4 sm:px-6 lg:grid-cols-2 lg:px-8">
        <div>
          <h2 className="text-3xl font-bold leading-tight text-foreground sm:text-4xl">
            <span className="underline decoration-primary decoration-2 underline-offset-4">
              Get a UGC Entitled
            </span>{" "}
            Online Degree from NAAC A++ University
          </h2>
          <div className="mt-8 space-y-6">
            {points.map((p) => (
              <div key={p.title} className="flex items-start gap-4">
                <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-primary text-primary-foreground">
                  <GraduationCap className="h-5 w-5" />
                </span>
                <div>
                  <h3 className="text-base font-bold text-foreground">{p.title}</h3>
                  <p className="mt-1 text-sm leading-relaxed text-muted-foreground">{p.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
        <div className="relative">
          <div
            aria-hidden
            className="absolute inset-0 -z-10 translate-x-6 translate-y-6 rounded-2xl lg:hidden"
            style={{ background: "var(--gradient-brand)" }}
          />
          <img
            src={lpuCertificate.url}
            alt="LPU sample degree certificate"
            loading="lazy"
            className="relative mx-auto w-full max-w-md rounded-xl border border-border bg-white shadow-2xl"
          />
        </div>
      </div>
    </section>
  );
}

/* ---------------- Eligibility ---------------- */

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

/* ---------------- Placements ---------------- */

function Placements() {
  return (
    <section className="py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid gap-10 lg:grid-cols-2">
          <div className="rounded-2xl border border-border bg-card p-6 sm:p-8">
            <div className="flex items-center gap-3">
              <Briefcase className="h-6 w-6 text-primary" />
              <h2 className="text-2xl font-bold text-foreground">Placements</h2>
            </div>
            <p className="mt-4 text-muted-foreground">{lpu.placements.highlight}</p>
          </div>
          <div className="rounded-2xl border border-border bg-card p-6 sm:p-8">
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

        <div className="mt-10">
          <h3 className="text-center text-2xl font-bold text-foreground sm:text-3xl">
            Our Hiring Partners
          </h3>
          <p className="mt-2 text-center text-sm text-muted-foreground sm:text-base">
            Top companies that trust and hire from LPU Online.
          </p>
          <div className="mt-6 overflow-hidden rounded-2xl border border-border bg-card p-4 sm:p-6">
            <img
              src={hiringPartners}
              alt="LPU Online hiring partners"
              loading="lazy"
              className="mx-auto h-auto w-full max-w-5xl object-contain"
            />
          </div>
        </div>
      </div>
    </section>
  );
}

/* ---------------- FAQs ---------------- */

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

/* ---------------- Bottom Lead Form ---------------- */

function LeadForm() {
  return (
    <section id="lead" className="relative overflow-hidden py-16">
      <div className="absolute inset-0 -z-10" style={{ background: "var(--gradient-brand)" }} />
      <div className="mx-auto grid max-w-6xl items-center gap-8 px-4 sm:px-6 lg:grid-cols-[1fr_380px] lg:px-8">
        <div className="text-primary-foreground">
          <h2 className="text-3xl font-bold sm:text-4xl">Talk to an LPU Online Counselor</h2>
          <p className="mt-4 text-base opacity-95">
            Get free personalized program guidance, fee & EMI details, scholarship eligibility
            and a step-by-step admission plan.
          </p>
          <div className="mt-4 inline-flex items-center gap-2 rounded-lg bg-black/25 px-3 py-2 text-sm font-semibold">
            <Flame className="h-4 w-4 text-yellow-300" /> 85% seats already filled
          </div>
          <div className="mt-6 flex items-center gap-3 text-sm opacity-95">
            <Phone className="h-5 w-5" /> 1800-000-000 · Mon – Sat, 9am – 8pm
          </div>
        </div>
        <div><LeadFormCompact /></div>
      </div>
    </section>
  );
}


/* ---------------- Page ---------------- */

function LpuPage() {
  const { open, setOpen } = useModalTrigger();
  return (
    <div className="min-h-screen bg-background">
      <SiteHeader />
      <main>
        <Hero />
        <RankingsCarousel />
        <Courses />
        <DegreeShowcase />
        <CareerAssistance />
        <Eligibility />
        <Placements />
        <Faqs />
        <LeadForm />
        <PopularSearches />
      </main>
      <SiteFooter />
      <StickyActionBar />
      <CounselingModal open={open} onClose={() => setOpen(false)} />
    </div>
  );
}

