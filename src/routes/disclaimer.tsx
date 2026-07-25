import { createFileRoute } from "@tanstack/react-router";
import { SeoPageLayout } from "@/components/site";
import { lpu } from "@/lib/lpu";

const CANONICAL = "https://lpuonline.avedu.in/disclaimer";

export const Route = createFileRoute("/disclaimer")({
  head: () => ({
    meta: [
      { title: "Disclaimer — LPU Online · avedu" },
      { name: "description", content: "Disclaimer for LPU Online marketing partner website by avedu — content usage, image rights and official source references." },
      { property: "og:title", content: "Disclaimer — LPU Online · avedu" },
      { property: "og:description", content: "Marketing partner disclaimer for LPU Online." },
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
      title="Disclaimer"
      intro="We act as a marketing service partner only. LPU Online hold full rights to request change or removal of any non-relevant content. Images used are for illustrative purposes and do not directly represent the respective colleges or universities. For official and updated information, visitors should always refer directly to the official LPU Online website: https://www.lpuonline.com"
      breadcrumb={[{ label: "Disclaimer" }]}
      sections={[
        { heading: "Marketing Partner Statement", bullets: ["We are an independent marketing service partner and not the official LPU Online website.", "All course information is indicative and may change without notice.", "For fee, eligibility and admission confirmation, always verify on the official LPU Online portal."] },
        { heading: "Content & Image Usage", bullets: ["Images are illustrative and not necessarily of LPU campus, faculty or students.", "LPU Online reserves the right to request modification or removal of any content."] },
      ]}
      faqs={lpu.faqs.slice(0, 4)}
    />
  );
}
