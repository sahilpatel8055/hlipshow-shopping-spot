import { createFileRoute } from "@tanstack/react-router";
import { SeoPageLayout } from "@/components/site";
import { lpu } from "@/lib/lpu";

const CANONICAL = "https://onlinevgu.avedu.in/lpu-online-eligibility";

export const Route = createFileRoute("/lpu-online-eligibility")({
  head: () => ({
    meta: [
      { title: "LPU Online Eligibility Criteria 2026 — UG & PG Requirements" },
      { name: "description", content: "LPU Online eligibility criteria for UG and PG programs — minimum marks, qualifying exams and required documents." },
      { name: "robots", content: "noindex, nofollow" },
      { property: "og:title", content: "LPU Online Eligibility 2026" },
      { property: "og:description", content: "Check eligibility for LPU Online UG and PG programs." },
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
      title="LPU Online Eligibility Criteria 2026"
      intro="Check the minimum eligibility criteria for LPU Online UG and PG programs before you apply."
      breadcrumb={[{ label: "Eligibility" }]}
      sections={[
        { heading: "Eligibility by Program Level", bullets: lpu.eligibility.map((e) => `${e.level}: ${e.criteria}`) },
        { heading: "Documents You'll Need", bullets: ["Class 10 & 12 marksheets", "Graduation marksheet (for PG)", "Government-issued photo ID", "Passport-size photo", "Category certificate (if applicable)"] },
      ]}
      faqs={lpu.faqs}
    />
  );
}
