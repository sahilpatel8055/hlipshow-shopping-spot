import { createFileRoute } from "@tanstack/react-router";
import {
  SiteHeader,
  SiteFooter,
  Breadcrumb,
  CounselingModal,
  useModalTrigger,
  StickyActionBar,
  PopularSearches,
  SeoFaq,
  LeadFormCompact,
} from "@/components/site";
import { lpu } from "@/lib/lpu";
import { CheckCircle2 } from "lucide-react";
import { Link } from "@tanstack/react-router";
import { comparisons } from "@/lib/comparisons";

const CANONICAL = "https://lpuonline.avedu.in/compare-universities";

const rows: { label: string; lpu: string; manipal: string; amity: string }[] = [
  { label: "NAAC Grade", lpu: "A++", manipal: "A+", amity: "A+" },
  { label: "UGC Entitlement", lpu: "Yes", manipal: "Yes", amity: "Yes" },
  { label: "NIRF Rank Band", lpu: "Top 50", manipal: "Top 100", amity: "Top 100" },
  { label: "Online MBA Fee (Total)", lpu: "₹1,50,000", manipal: "₹1,66,000", amity: "₹2,00,000" },
  { label: "EMI Available", lpu: "0% EMI", manipal: "EMI", amity: "EMI" },
  { label: "Placement Cell", lpu: "Yes · Dedicated", manipal: "Yes", amity: "Yes" },
  { label: "LMS Access", lpu: "24×7", manipal: "24×7", amity: "24×7" },
];

export const Route = createFileRoute("/compare-universities")({
  head: () => ({
    meta: [
      { title: "Compare Online Universities 2026 — LPU vs Manipal vs Amity" },
      { name: "description", content: "Compare LPU Online with Manipal Online and Amity Online — accreditation, NIRF, fees, EMI, placements and LMS side by side." },
      { property: "og:title", content: "Compare Online Universities 2026" },
      { property: "og:description", content: "LPU vs Manipal vs Amity — side-by-side comparison." },
      { property: "og:url", content: CANONICAL },
      { property: "og:type", content: "article" },
    ],
    links: [{ rel: "canonical", href: CANONICAL }],
    scripts: [{
      type: "application/ld+json",
      children: JSON.stringify({
        "@context": "https://schema.org",
        "@type": "ItemList",
        itemListElement: [
          { "@type": "ListItem", position: 1, name: "LPU Online" },
          { "@type": "ListItem", position: 2, name: "Manipal Online" },
          { "@type": "ListItem", position: 3, name: "Amity Online" },
        ],
      }),
    }],
  }),
  component: Page,
});

function Page() {
  const { open, setOpen } = useModalTrigger();
  return (
    <div className="min-h-screen bg-background">
      <SiteHeader />
      <Breadcrumb items={[{ label: "Compare Universities" }]} />
      <main>
        <section
          className="py-12 sm:py-16"
          style={{ backgroundImage: "linear-gradient(135deg, color-mix(in oklab, var(--primary) 10%, transparent), transparent 60%)" }}
        >
          <div className="mx-auto grid max-w-7xl items-start gap-10 px-4 sm:px-6 lg:grid-cols-[1fr_380px] lg:px-8">
            <div>
              <h1 className="text-3xl font-bold text-foreground sm:text-4xl lg:text-5xl">Compare Online Universities 2026</h1>
              <p className="mt-4 text-base text-muted-foreground sm:text-lg">Side-by-side comparison of LPU Online, Manipal Online and Amity Online across accreditation, fees, placements and learning experience.</p>
            </div>
            <div className="lg:sticky lg:top-24"><LeadFormCompact /></div>
          </div>
        </section>
        <section className="bg-background py-12">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="overflow-x-auto rounded-2xl border border-border bg-card">
              <table className="w-full min-w-[720px] text-sm">
                <thead className="bg-secondary/60">
                  <tr>
                    <th className="p-4 text-left font-bold text-foreground">Parameter</th>
                    <th className="p-4 text-left font-bold text-primary">LPU Online</th>
                    <th className="p-4 text-left font-bold text-foreground">Manipal Online</th>
                    <th className="p-4 text-left font-bold text-foreground">Amity Online</th>
                  </tr>
                </thead>
                <tbody>
                  {rows.map((r) => (
                    <tr key={r.label} className="border-t border-border">
                      <td className="p-4 font-semibold text-foreground">{r.label}</td>
                      <td className="p-4 font-bold text-primary"><CheckCircle2 className="mr-1 inline h-4 w-4" />{r.lpu}</td>
                      <td className="p-4 text-muted-foreground">{r.manipal}</td>
                      <td className="p-4 text-muted-foreground">{r.amity}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </section>
        <section className="bg-background pb-12">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <h2 className="text-2xl font-bold text-foreground sm:text-3xl">Detailed 1-on-1 comparisons</h2>
            <p className="mt-2 text-sm text-muted-foreground">In-depth breakdowns of fees, accreditation, specializations and placement support.</p>
            <div className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
              {comparisons.map((c) => (
                <Link
                  key={c.slug}
                  to="/compare/$slug"
                  params={{ slug: c.slug }}
                  className="rounded-2xl border border-border bg-card p-5 transition hover:-translate-y-1 hover:border-primary/60 hover:shadow-[var(--shadow-brand)]"
                >
                  <h3 className="text-base font-bold text-foreground">LPU Online vs {c.shortRival}</h3>
                  <p className="mt-2 text-sm text-muted-foreground">{c.description}</p>
                  <span className="mt-3 inline-block text-sm font-semibold text-primary">Read comparison →</span>
                </Link>
              ))}
            </div>
          </div>
        </section>
        <SeoFaq items={lpu.faqs} />
        <PopularSearches />
      </main>
      <SiteFooter />
      <StickyActionBar />
      <CounselingModal open={open} onClose={() => setOpen(false)} />
    </div>
  );
}
