import { createFileRoute } from "@tanstack/react-router";
import { SeoPageLayout } from "@/components/site";
import { lpu } from "@/lib/lpu";

const CANONICAL = "https://lpuonline.avedu.in/privacy-policy";

export const Route = createFileRoute("/privacy-policy")({
  head: () => ({
    meta: [
      { title: "Privacy Policy — LPU Online · avedu" },
      { name: "description", content: "How lpuonline.avedu.in (operated by avedu.in) collects, uses and safeguards information submitted through counselling forms." },
      { property: "og:title", content: "Privacy Policy — LPU Online · avedu" },
      { property: "og:description", content: "Privacy policy for lpuonline.avedu.in." },
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
      intro="lpuonline.avedu.in is managed by avedu.in, a dedicated educational platform offering counselling services to help students explore online and distance education options. We are not affiliated with LPU or any university and solely provide guidance to assist your academic journey. We do not act as a university or an admission authority. By using our website, including our mobile applications, you legally accept all our Terms and Conditions listed under all headers on this platform. We recognize the importance of maintaining your privacy and the confidentiality of the information you share with us. We do not sell or rent any personal data. 'Personal Information' includes details that identify an individual such as name, address, telephone number, or email address. This Privacy Policy explains how lpuonline.avedu.in collects and uses information through www.lpuonline.avedu.in. We are committed to protecting your personal data and using it transparently."
      breadcrumb={[{ label: "Privacy Policy" }]}
      sections={[
        {
          heading: "1. No Personal Data Collected by Default",
          bullets: ["You can freely browse our platform without providing any personal details.", "We only collect information when you choose to submit forms or contact us directly."],
        },
        {
          heading: "2. Use of Submitted Information",
          bullets: [
            "Assist you with educational counselling",
            "Help you explore relevant universities or courses",
            "Send you admission updates via WhatsApp or email",
            "You may opt out of our communication anytime by contacting us at support@lpuonline.avedu.in.",
          ],
        },
        {
          heading: "3. Scope of Policy",
          bullets: ["This policy applies only to users accessing www.lpuonline.avedu.in.", "It does not cover other domains or third-party sites we may link to."],
        },
        {
          heading: "4. Data Sharing",
          bullets: ["We do not sell or share your personal data with advertisers.", "Your information is strictly used to deliver counselling and educational services."],
        },
        {
          heading: "5. External Links",
          bullets: ["Our platform may link to official university portals for your convenience.", "We are not responsible for the content or privacy practices of those websites."],
        },
        {
          heading: "6. Cookies and Analytics",
          bullets: ["We use cookies to analyze website performance and enhance your experience.", "These do not collect personally identifiable information."],
        },
      ]}
      faqs={lpu.faqs.slice(0, 4)}
    />
  );
}
