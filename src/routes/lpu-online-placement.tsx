import { createFileRoute } from "@tanstack/react-router";
import { SeoPageLayout } from "@/components/site";
import { lpu } from "@/lib/lpu";

const CANONICAL = "https://onlinevgu.avedu.in/lpu-online-placement";

export const Route = createFileRoute("/lpu-online-placement")({
  head: () => ({
    meta: [
      { title: "LPU Online Placement 2026 — Recruiters, Roles & Support" },
      { name: "description", content: "LPU Online placement 2026 — dedicated placement cell, top recruiters, resume building and interview prep for online learners." },
      { name: "robots", content: "noindex, nofollow" },
      { property: "og:title", content: "LPU Online Placement 2026" },
      { property: "og:description", content: "Placement support for LPU Online learners." },
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
      title="LPU Online Placement Support 2026"
      intro={lpu.placements.highlight}
      breadcrumb={[{ label: "Placement" }]}
      sections={[
        { heading: "Top Recruiting Partners", bullets: lpu.placements.partners },
        { heading: "Placement Services", bullets: ["Resume building", "Mock interviews", "Career counseling", "Industry connect sessions", "Job promotion to recruiters"] },
      ]}
      faqs={lpu.faqs}
    />
  );
}
