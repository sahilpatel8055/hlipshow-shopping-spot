import { createFileRoute } from "@tanstack/react-router";
import { SeoPageLayout } from "@/components/site";
import { lpu } from "@/lib/lpu";

const CANONICAL = "https://lpuonline.avedu.in/disclaimer";

export const Route = createFileRoute("/disclaimer")({
  head: () => ({
    meta: [
      { title: "Disclaimer — LPU Online · avedu" },
      { name: "description", content: "Disclaimer for lpuonline.avedu.in — an independent education guidance platform operated under the avedu brand." },
      { property: "og:title", content: "Disclaimer — LPU Online · avedu" },
      { property: "og:description", content: "Independent education guidance platform disclaimer." },
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
      intro="This website lpuonline.avedu.in is operated under the brand name www.avedu.in. We are an independent education guidance platform and are not affiliated with Lovely Professional University (LPU) or any other university. LPU holds full rights to request change or removal of any non-relevant content. Images used are for illustrative purposes and do not directly represent the respective colleges or universities. We do not act as a university or an admission authority."
      breadcrumb={[{ label: "Disclaimer" }]}
      sections={[
        {
          heading: "Important Notices",
          bullets: [
            "All university names, logos, and trademarks are used only for reference and informational purposes.",
            "We do not act as an admission cell or issue degrees, certificates, or mark sheets.",
            "We offer free counselling to help students make informed educational decisions.",
            "No fees are charged by us for providing university-related information or guidance.",
            "Students are advised to verify all details directly from the respective official university portals.",
            "We fully respect the autonomy and credibility of all educational institutions mentioned on this platform.",
          ],
        },
      ]}
      faqs={lpu.faqs.slice(0, 4)}
    />
  );
}
