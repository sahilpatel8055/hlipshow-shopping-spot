import { createFileRoute } from "@tanstack/react-router";
import { SeoPageLayout } from "@/components/site";
import { lpu } from "@/lib/lpu";

const CANONICAL = "https://lpuonline.avedu.in/privacy-policy";

export const Route = createFileRoute("/privacy-policy")({
  head: () => ({
    meta: [
      { title: "Privacy Policy — LPU Online · avedu" },
      { name: "description", content: "How avedu collects, uses and protects personal information submitted through LPU Online counseling forms." },
      { property: "og:title", content: "Privacy Policy — LPU Online · avedu" },
      { property: "og:description", content: "Privacy policy for LPU Online counseling website." },
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
      title="Privacy Policy"
      intro="This privacy policy describes how we collect, use and safeguard the information you share while requesting LPU Online counseling."
      breadcrumb={[{ label: "Privacy Policy" }]}
      sections={[
        { heading: "Information We Collect", bullets: ["Full name, email and mobile number submitted via forms", "Program interest and preferred contact time", "Basic analytics like page views and referring source"] },
        { heading: "How We Use It", bullets: ["To contact you with LPU Online program information", "To share fee, eligibility and scholarship details", "To improve counseling and website experience"] },
        { heading: "Your Choices", bullets: ["You can opt out of communication anytime", "You can request deletion of your personal data", "We do not sell your data to third parties"] },
      ]}
      faqs={lpu.faqs.slice(0, 4)}
    />
  );
}
