import { createFileRoute } from "@tanstack/react-router";
import { SeoPageLayout } from "@/components/site";
import { lpu, allCourses } from "@/lib/lpu";

const CANONICAL = "https://lpuonline.avedu.in/lpu-online-fees";

export const Route = createFileRoute("/lpu-online-fees")({
  head: () => ({
    meta: [
      { title: "LPU Online Fees Structure 2026 — Course Fee & EMI Options" },
      { name: "description", content: "LPU Online fee structure 2026 — full fee, per-semester fee and 0% EMI plans for every UG and PG program." },
      { property: "og:title", content: "LPU Online Fees 2026" },
      { property: "og:description", content: "Program-wise fees and EMI options for LPU Online." },
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
      title="LPU Online Fees Structure 2026"
      intro="Transparent, program-wise fees for LPU Online. Pay in full or opt for 0% interest EMI plans with dedicated counselor support."
      breadcrumb={[{ label: "Fees" }]}
      sections={[
        { heading: "Program-wise Fees (with 20% discount applied)", bullets: allCourses.map((c) => `${c.name}: ${c.feesBreakdown.appliedFee} (was ${c.feesBreakdown.fullFees}) · Semester ${c.feesBreakdown.perSemester} · EMI ${c.feesBreakdown.emi}`) },
        { heading: "Scholarships Available", bullets: lpu.scholarships },
      ]}
      faqs={lpu.faqs}
    />
  );
}
