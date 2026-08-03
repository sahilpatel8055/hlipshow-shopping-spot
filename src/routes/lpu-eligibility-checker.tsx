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
  EligibilityChecker,
  AdmissionTimeline,
  SmartCTA,
  PlacementDetails,
  StudentsAlsoViewed,
  RelatedBlogsBlock,
  QuickLinksRow,
} from "@/components/topical";

const CANONICAL = "https://lpuonline.avedu.in/lpu-eligibility-checker";

const faqs = [
  { q: "Is a study gap accepted?", a: "Yes, a study gap does not affect eligibility for LPU Online UG or PG programmes." },
  { q: "What is the minimum percentage required?", a: "50% aggregate in the qualifying examination, with a 5% relaxation for reserved categories." },
  { q: "Is work experience mandatory?", a: "No. Work experience is optional and only strengthens your profile." },
];

export const Route = createFileRoute("/lpu-eligibility-checker")({
  head: () => ({
    meta: [
      { title: "LPU Online Eligibility Checker 2026 — Check Instantly" },
      { name: "description", content: "Check your eligibility for LPU Online UG and PG programmes instantly — enter your marks and get status, documents and next admission steps." },
      { property: "og:title", content: "LPU Online Eligibility Checker 2026" },
      { property: "og:description", content: "Instantly check whether you qualify for any LPU Online degree programme." },
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
      <Breadcrumb items={[{ label: "Eligibility", to: "/lpu-online-eligibility" }, { label: "Eligibility Checker" }]} />
      <main>
        <section className="py-10 sm:py-14" style={{ backgroundImage: "linear-gradient(135deg, color-mix(in oklab, var(--primary) 10%, transparent), transparent 60%)" }}>
          <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
            <h1 className="text-3xl font-bold text-foreground sm:text-4xl">LPU Online Eligibility Checker</h1>
            <p className="mt-3 max-w-3xl text-base text-muted-foreground">
              Enter your academic details to instantly check eligibility for any LPU Online programme, along with the documents you need and your next admission steps.
            </p>
            <div className="mt-8">
              <EligibilityChecker />
            </div>
          </div>
        </section>
        <SmartCTA title="Not sure which programme fits your profile? Talk to a counsellor" />
        <AdmissionTimeline />
        <PlacementDetails />
        <StudentsAlsoViewed />
        <RelatedBlogsBlock keyword="eligibility" />
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
