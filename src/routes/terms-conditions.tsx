import { createFileRoute } from "@tanstack/react-router";
import { SeoPageLayout } from "@/components/site";
import { lpu } from "@/lib/lpu";

const CANONICAL = "https://lpuonline.avedu.in/terms-conditions";

export const Route = createFileRoute("/terms-conditions")({
  head: () => ({
    meta: [
      { title: "Terms & Conditions — LPU Online · avedu" },
      { name: "description", content: "Terms and conditions for using the LPU Online counseling website operated by avedu as a marketing partner." },
      { property: "og:title", content: "Terms & Conditions — LPU Online · avedu" },
      { property: "og:description", content: "Terms of use for LPU Online counseling website." },
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
      title="Terms & Conditions"
      intro="By using this website you agree to the following terms of use. Please read them carefully before submitting any form."
      breadcrumb={[{ label: "Terms & Conditions" }]}
      sections={[
        { heading: "Use of Website", bullets: ["Content is for informational purposes only and may change without notice.", "Verify all details on the official LPU Online website before enrolment.", "We reserve the right to update these terms at any time."] },
        { heading: "Consent to Contact", bullets: ["Submitting a form authorizes us to contact you via call, SMS, email or WhatsApp regarding LPU Online programs.", "This overrides any DND registration for the purpose of counseling."] },
        { heading: "Limitation of Liability", bullets: ["We are not liable for admission decisions taken by the university.", "Program pricing and terms are governed by LPU Online."] },
      ]}
      faqs={lpu.faqs.slice(0, 4)}
    />
  );
}
