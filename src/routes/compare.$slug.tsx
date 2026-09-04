import { createFileRoute, notFound, Link } from "@tanstack/react-router";
import {
  SiteHeader,
  SiteFooter,
  Breadcrumb,
  StickyActionBar,
  LeadFormCompact,
  CounselingModal,
  useModalTrigger,
  PopularSearches,
  openModal,
  MiniLeadForm,
} from "@/components/site";
import { comparisons, findComparison } from "@/lib/comparisons";
import type { Comparison } from "@/lib/comparisons";
import { CheckCircle2 } from "lucide-react";

const CANONICAL = (slug: string) => `https://lpuonline.avedu.in/compare/${slug}`;

export const Route = createFileRoute("/compare/$slug")({
  loader: ({ params }) => {
    const item = findComparison(params.slug);
    if (!item) throw notFound();
    return { item };
  },
  head: ({ loaderData, params }) => {
    const c = loaderData?.item;
    const url = CANONICAL(params.slug);
    if (!c) {
      return { meta: [{ title: "Comparison not found" }, { name: "robots", content: "noindex" }] };
    }
    return {
      meta: [
        { title: c.title },
        { name: "description", content: c.description },
        { property: "og:title", content: c.title },
        { property: "og:description", content: c.description },
        { property: "og:url", content: url },
        { property: "og:type", content: "article" },
        { name: "twitter:card", content: "summary_large_image" },
      ],
      links: [{ rel: "canonical", href: url }],
      scripts: [
        {
          type: "application/ld+json",
          children: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Article",
            headline: c.title,
            description: c.description,
            author: { "@type": "Organization", name: "LPU Online" },
            publisher: { "@type": "Organization", name: "LPU Online" },
            mainEntityOfPage: url,
          }),
        },
        {
          type: "application/ld+json",
          children: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "FAQPage",
            mainEntity: c.faqs.map((f) => ({
              "@type": "Question",
              name: f.q,
              acceptedAnswer: { "@type": "Answer", text: f.a },
            })),
          }),
        },
      ],
    };
  },
  notFoundComponent: () => (
    <div className="min-h-screen bg-background">
      <SiteHeader />
      <main className="mx-auto max-w-3xl px-4 py-24 text-center">
        <h1 className="text-3xl font-bold text-foreground">Comparison not found</h1>
        <Link to="/compare-universities" className="mt-6 inline-block rounded-md bg-primary px-5 py-2.5 text-sm font-semibold text-primary-foreground">
          All comparisons
        </Link>
      </main>
      <SiteFooter />
    </div>
  ),
  component: ComparePage,
});

function ComparePage() {
  const { item } = Route.useLoaderData() as { item: Comparison };
  const { open, setOpen } = useModalTrigger();
  const others = comparisons.filter((c) => c.slug !== item.slug);

  return (
    <div className="min-h-screen bg-background">
      <SiteHeader />
      <Breadcrumb items={[{ label: "Compare Universities", to: "/compare-universities" }, { label: `LPU vs ${item.shortRival}` }]} />
      <main>
        <section
          className="py-10 sm:py-14"
          style={{ backgroundImage: "linear-gradient(135deg, color-mix(in oklab, var(--primary) 10%, transparent), transparent 60%)" }}
        >
          <div className="mx-auto grid max-w-7xl items-start gap-10 px-4 sm:px-6 lg:grid-cols-[1fr_360px] lg:px-8">
            <div>
              <h1 className="text-3xl font-bold text-foreground sm:text-4xl">{item.title}</h1>
              <p className="mt-4 text-base leading-relaxed text-muted-foreground">{item.intro}</p>

              <div className="mt-8 overflow-x-auto rounded-2xl border border-border bg-card">
                <table className="w-full min-w-[640px] text-sm">
                  <thead className="bg-secondary/60">
                    <tr>
                      <th className="p-4 text-left font-bold text-foreground">Parameter</th>
                      <th className="p-4 text-left font-bold text-primary">LPU Online</th>
                      <th className="p-4 text-left font-bold text-foreground">{item.shortRival}</th>
                    </tr>
                  </thead>
                  <tbody>
                    {item.rows.map((r) => (
                      <tr key={r.label} className="border-t border-border align-top">
                        <td className="p-4 font-semibold text-foreground">{r.label}</td>
                        <td className="p-4 font-semibold text-primary">
                          <CheckCircle2 className="mr-1 inline h-4 w-4" />
                          {r.lpu}
                        </td>
                        <td className="p-4 text-muted-foreground">{r.rival}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>

              <div className="mt-8 grid gap-6 sm:grid-cols-2">
                <div className="rounded-2xl border border-primary/30 bg-accent p-6">
                  <h2 className="text-lg font-bold text-foreground">Where LPU Online wins</h2>
                  <ul className="mt-3 space-y-2 text-sm text-muted-foreground">
                    {item.lpuWins.map((w) => (
                      <li key={w} className="flex gap-2">
                        <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-primary" />
                        <span>{w}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="rounded-2xl border border-border bg-card p-6">
                  <h2 className="text-lg font-bold text-foreground">Where {item.shortRival} wins</h2>
                  <ul className="mt-3 space-y-2 text-sm text-muted-foreground">
                    {item.rivalWins.map((w) => (
                      <li key={w}>• {w}</li>
                    ))}
                  </ul>
                </div>
              </div>

              <div className="mt-8 rounded-2xl border border-border bg-card p-6">
                <h2 className="text-xl font-bold text-foreground">Verdict</h2>
                <p className="mt-2 leading-relaxed text-muted-foreground">{item.verdict}</p>
                <div className="mt-5 flex flex-wrap gap-3">
                  <button
                    type="button"
                    onClick={openModal}
                    className="rounded-md bg-primary px-5 py-2.5 text-sm font-semibold text-primary-foreground"
                  >
                    Get free counseling
                  </button>
                  <Link to="/lpu-online-fees" className="rounded-md border border-border bg-background px-5 py-2.5 text-sm font-semibold text-foreground">
                    Check LPU fees
                  </Link>
                  <Link to="/lpu-fee-calculator" className="rounded-md border border-border bg-background px-5 py-2.5 text-sm font-semibold text-foreground">
                    Fee & EMI calculator
                  </Link>
                </div>
              </div>

              <MiniLeadForm
                heading="Talk to a counselor before you decide"
                subtext="One free call to compare fees, EMI, approvals and placement support side by side."
                source="comparison-page"
              />

              <div className="mt-10">
                <h2 className="text-xl font-bold text-foreground">Frequently asked questions</h2>
                <div className="mt-4 space-y-4">
                  {item.faqs.map((f) => (
                    <div key={f.q} className="rounded-xl border border-border bg-card p-5">
                      <h3 className="font-semibold text-foreground">{f.q}</h3>
                      <p className="mt-2 text-sm text-muted-foreground">{f.a}</p>
                    </div>
                  ))}
                </div>
              </div>

              <div className="mt-10">
                <h2 className="text-xl font-bold text-foreground">More LPU Online comparisons</h2>
                <ul className="mt-4 flex flex-wrap gap-2">
                  {others.map((o) => (
                    <li key={o.slug}>
                      <Link
                        to="/compare/$slug"
                        params={{ slug: o.slug }}
                        className="inline-flex rounded-full border border-border bg-card px-3.5 py-1.5 text-xs font-semibold text-foreground transition hover:border-primary hover:text-primary sm:text-sm"
                      >
                        LPU vs {o.shortRival}
                      </Link>
                    </li>
                  ))}
                </ul>
                <ul className="mt-6 space-y-2 text-sm">
                  <li><Link to="/blog/$slug" params={{ slug: "lpu-online-mba-review-2026" }} className="text-primary hover:underline">LPU Online MBA Review 2026</Link></li>
                  <li><Link to="/blog/$slug" params={{ slug: "lpu-online-fees-2026" }} className="text-primary hover:underline">LPU Online Fees 2026 — full structure</Link></li>
                  <li><Link to="/blog/$slug" params={{ slug: "lpu-online-degree-validity" }} className="text-primary hover:underline">Is an LPU Online degree valid?</Link></li>
                </ul>
              </div>
            </div>

            <aside className="lg:sticky lg:top-24">
              <LeadFormCompact />
            </aside>
          </div>
        </section>
        <PopularSearches />
      </main>
      <SiteFooter />
      <StickyActionBar />
      <CounselingModal open={open} onClose={() => setOpen(false)} />
    </div>
  );
}
