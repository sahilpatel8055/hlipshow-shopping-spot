import { createFileRoute } from "@tanstack/react-router";
import { SeoPageLayout } from "@/components/site";
import { lpu } from "@/lib/lpu";

const CANONICAL = "https://lpuonline.avedu.in/lpu-online-review";

export const Route = createFileRoute("/lpu-online-review")({
  head: () => ({
    meta: [
      { title: "LPU Online Review 2026 — Is LPU Online Degree Worth It?" },
      { name: "description", content: "LPU Online review 2026 — accreditation, degree validity, learning experience, placements and student feedback." },
      { property: "og:title", content: "LPU Online Review 2026" },
      { property: "og:description", content: "Honest overview of LPU Online — recognition, learning, placements." },
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
      title="LPU Online Review 2026"
      intro="A closer look at LPU Online — recognition, learning experience, placement support and student outcomes."
      breadcrumb={[{ label: "Review" }]}
      sections={[
        { heading: "Recognition & Accreditation", bullets: lpu.approvals.map((a) => `${a.name} — ${a.note}`) },
        { heading: "Why Learners Choose LPU Online", bullets: lpu.highlights.map((h) => `${h.label}: ${h.value}`) },
      ]}
      faqs={lpu.faqs}
    />
  );
}
