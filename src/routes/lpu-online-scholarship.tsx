import { createFileRoute } from "@tanstack/react-router";
import { SeoPageLayout } from "@/components/site";
import { lpu } from "@/lib/lpu";

const CANONICAL = "https://onlinevgu.avedu.in/lpu-online-scholarship";

export const Route = createFileRoute("/lpu-online-scholarship")({
  head: () => ({
    meta: [
      { title: "LPU Online Scholarship 2026 — Merit, Defence & Divyaang" },
      { name: "description", content: "LPU Online scholarships 2026 — merit, defence, divyaang and sports scholarships with eligibility and how to apply." },
      { name: "robots", content: "noindex, nofollow" },
      { property: "og:title", content: "LPU Online Scholarship 2026" },
      { property: "og:description", content: "Scholarships available for LPU Online learners." },
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
      title="LPU Online Scholarship 2026"
      intro="Scholarships that make LPU Online more affordable — merit-based, category-based and skill-based awards."
      breadcrumb={[{ label: "Scholarship" }]}
      sections={[
        { heading: "Scholarships Available", bullets: lpu.scholarships },
        { heading: "How to Apply", bullets: ["Speak to an LPU Online counselor", "Share required proof documents", "Get scholarship applied to your fee", "Complete admission with reduced fee"] },
      ]}
      faqs={lpu.faqs}
    />
  );
}
