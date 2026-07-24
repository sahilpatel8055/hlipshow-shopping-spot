import { createFileRoute } from "@tanstack/react-router";
import { SeoPageLayout } from "@/components/site";
import { lpu } from "@/lib/lpu";

const CANONICAL = "https://onlinevgu.avedu.in/lpu-online-admission-last-date";

export const Route = createFileRoute("/lpu-online-admission-last-date")({
  head: () => ({
    meta: [
      { title: "LPU Online Admission Last Date 2026 — Apply Before Deadline" },
      { name: "description", content: "LPU Online admission last date 2026 — apply before the cycle closes to secure early-bird discounts and preferred specializations." },
      { name: "robots", content: "noindex, nofollow" },
      { property: "og:title", content: "LPU Online Admission Last Date 2026" },
      { property: "og:description", content: "Don't miss the LPU Online admission deadline." },
      { property: "og:url", content: CANONICAL },
      { property: "og:type", content: "article" },
    ],
    links: [{ rel: "canonical", href: CANONICAL }],
  }),
  component: Page,
});

function Page() {
  return (
    <SeoPageLayout
      title="LPU Online Admission Last Date 2026"
      intro="Admissions run in cycles — apply early to lock in your preferred specialization, avail early-bird fee discounts and get sufficient time for onboarding."
      breadcrumb={[{ label: "Admission Last Date" }]}
      sections={[
        { heading: "Why Apply Early?", bullets: ["Early-bird fee discount", "Preferred specialization availability", "Enough time for document verification", "Smooth LMS onboarding"] },
        { heading: "Application Process", bullets: lpu.process },
      ]}
      faqs={lpu.faqs}
    />
  );
}
