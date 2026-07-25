import { createFileRoute, Link } from "@tanstack/react-router";
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
import { allCourses, lpu } from "@/lib/lpu";

const CANONICAL = "https://lpuonline.avedu.in/fees";

export const Route = createFileRoute("/fees")({
  head: () => ({
    meta: [
      { title: "LPU Online Fees 2026 — Full Fee Comparison Table (UG & PG)" },
      { name: "description", content: "Compare LPU Online course fees at a glance — full fee, per-semester and EMI options for BBA, BCA, B.Com, BA, MBA, MCA, M.Com and MA." },
      { property: "og:title", content: "LPU Online Fees 2026" },
      { property: "og:description", content: "Program-wise fee comparison for LPU Online." },
      { property: "og:url", content: CANONICAL },
      { property: "og:type", content: "article" },
    ],
    links: [{ rel: "canonical", href: CANONICAL }],
  }),
  component: Page,
});

function Page() {
  const { open, setOpen } = useModalTrigger();
  return (
    <div className="min-h-screen bg-background">
      <SiteHeader />
      <Breadcrumb items={[{ label: "Fees" }]} />
      <main>
        <section
          className="py-12 sm:py-16"
          style={{ backgroundImage: "linear-gradient(135deg, color-mix(in oklab, var(--primary) 10%, transparent), transparent 60%)" }}
        >
          <div className="mx-auto grid max-w-7xl items-start gap-10 px-4 sm:px-6 lg:grid-cols-[1fr_380px] lg:px-8">
            <div>
              <h1 className="text-3xl font-bold text-foreground sm:text-4xl lg:text-5xl">LPU Online Fees Comparison 2026</h1>
              <p className="mt-4 text-base text-muted-foreground sm:text-lg">Compare full fee, per-semester fee and EMI plans for all UG and PG online programs from LPU Online.</p>
            </div>
            <div className="lg:sticky lg:top-24"><LeadFormCompact /></div>
          </div>
        </section>
        <section className="bg-background py-12">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="overflow-x-auto rounded-2xl border border-border bg-card">
              <table className="w-full min-w-[720px] text-sm">
                <thead className="bg-secondary/60 text-foreground">
                  <tr>
                    <th className="p-4 text-left font-bold">Program</th>
                    <th className="p-4 text-left font-bold">Duration</th>
                    <th className="p-4 text-left font-bold">Full Fee</th>
                    <th className="p-4 text-left font-bold">Per Semester</th>
                    <th className="p-4 text-left font-bold">EMI</th>
                    <th className="p-4 text-left font-bold">Action</th>
                  </tr>
                </thead>
                <tbody>
                  {allCourses.map((c) => (
                    <tr key={c.slug} className="border-t border-border">
                      <td className="p-4 font-semibold text-foreground">{c.name}</td>
                      <td className="p-4 text-muted-foreground">{c.duration}</td>
                      <td className="p-4 font-bold text-primary">{c.feesBreakdown.fullFees}</td>
                      <td className="p-4 text-muted-foreground">{c.feesBreakdown.perSemester}</td>
                      <td className="p-4 text-muted-foreground">{c.feesBreakdown.emi}</td>
                      <td className="p-4">
                        <Link to="/courses/$slug" params={{ slug: c.slug }} className="font-semibold text-primary hover:underline">View</Link>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
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
