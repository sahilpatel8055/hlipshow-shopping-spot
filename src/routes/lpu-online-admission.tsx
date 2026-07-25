import { createFileRoute } from "@tanstack/react-router";
import { SeoPageLayout } from "@/components/site";
import { lpu } from "@/lib/lpu";

const CANONICAL = "https://lpuonline.avedu.in/lpu-online-admission";

export const Route = createFileRoute("/lpu-online-admission")({
  head: () => ({
    meta: [
      { title: "LPU Online Admission 2026 — Process, Dates & Apply Online" },
      { name: "description", content: "LPU Online admission 2026 — step-by-step application process, required documents, key dates and eligibility for UGC-entitled online degrees." },
      { property: "og:title", content: "LPU Online Admission 2026" },
      { property: "og:description", content: "Apply to LPU Online — UGC-entitled online BBA, BCA, MBA, MCA and more." },
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
      title="LPU Online Admission 2026"
      intro="Apply for LPU Online admission in a few simple steps. UGC-entitled online degrees from NAAC A++ Lovely Professional University — flexible learning with EMI options and dedicated placement support."
      breadcrumb={[{ label: "Admission" }]}
      sections={[
        { heading: "LPU Online Admission Process", bullets: lpu.process },
        { heading: "Eligibility", bullets: lpu.eligibility.map((e) => `${e.level}: ${e.criteria}`) },
        { heading: "Documents Required", bullets: ["Class 10 & 12 marksheets", "Graduation marksheet (for PG)", "Government-issued photo ID", "Passport-size photograph", "Category certificate (if applicable)"] },
      ]}
      faqs={lpu.faqs}
    />
  );
}
