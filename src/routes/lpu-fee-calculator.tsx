import { createFileRoute } from "@tanstack/react-router";
import {
  SiteHeader,
  SiteFooter,
  CounselingModal,
  useModalTrigger,
  Breadcrumb,
  SeoFaq,
  StickyActionBar,
  PopularSearches,
} from "@/components/site";
import {
  FeeEmiCalculator,
  AdmissionTimeline,
  SmartCTA,
  StudentsAlsoViewed,
  RelatedBlogsBlock,
  QuickLinksRow,
} from "@/components/topical";

const CANONICAL = "https://lpuonline.avedu.in/lpu-fee-calculator";

const faqs = [
  { q: "Is the calculated EMI final?", a: "It is an indicative 0% interest estimate. Your final EMI depends on the tenure and financing partner selected at admission." },
  { q: "Can scholarships be combined?", a: "Usually one scholarship applies per learner. A counsellor will confirm the maximum discount you qualify for." },
  { q: "Is the semester fee fixed?", a: "The per-semester fee is locked for your batch at the time of admission." },
];

export const Route = createFileRoute("/lpu-fee-calculator")({
  head: () => ({
    meta: [
      { title: "LPU Online Fee & EMI Calculator 2026 — Estimate Your Fee" },
      { name: "description", content: "Calculate LPU Online course fees, scholarship discount, semester fee and monthly EMI instantly for every UG and PG programme." },
      { property: "og:title", content: "LPU Online Fee & EMI Calculator 2026" },
      { property: "og:description", content: "Estimate semester fee, total programme fee and monthly EMI for any LPU Online course." },
      { property: "og:url", content: CANONICAL },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [{ rel: "canonical", href: CANONICAL }],
  }),
  component: Page,
});

function Page() {
  const { open, setOpen } = useModalTrigger();
  return (
    <div className="min-h-screen bg-background">
      <SiteHeader />
      <Breadcrumb items={[{ label: "Fees", to: "/lpu-online-fees" }, { label: "Fee & EMI Calculator" }]} />
      <main>
        <section className="py-10 sm:py-14" style={{ backgroundImage: "linear-gradient(135deg, color-mix(in oklab, var(--primary) 10%, transparent), transparent 60%)" }}>
          <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
            <h1 className="text-3xl font-bold text-foreground sm:text-4xl">LPU Online Fee & EMI Calculator</h1>
            <p className="mt-3 max-w-3xl text-base text-muted-foreground">
              Choose your programme, apply a scholarship and pick an EMI tenure to see your semester fee, total programme fee and estimated monthly EMI.
            </p>
            <div className="mt-8">
              <FeeEmiCalculator />
            </div>
          </div>
        </section>
        <SmartCTA title="Get an exact fee quotation with scholarship applied" />
        <AdmissionTimeline />
        <StudentsAlsoViewed />
        <RelatedBlogsBlock keyword="fees" />
        <SeoFaq items={faqs} />
        <QuickLinksRow />
        <PopularSearches />
      </main>
      <SiteFooter />
      <StickyActionBar />
      <CounselingModal open={open} onClose={() => setOpen(false)} />
    </div>
  );
}
