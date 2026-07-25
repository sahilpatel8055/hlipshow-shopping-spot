import { createFileRoute, notFound, Link } from "@tanstack/react-router";
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
import { findCourse, lpu } from "@/lib/lpu";
import { Star } from "lucide-react";

const CANONICAL = (slug: string) => `https://lpuonline.avedu.in/best-online-${slug}`;

const providers = [
  { name: "LPU Online", rating: 4.8, note: "NAAC A++, UGC-entitled, dedicated placement cell", featured: true },
  { name: "Manipal Online", rating: 4.5, note: "NAAC A+, well-known online brand" },
  { name: "Amity Online", rating: 4.3, note: "NAAC A+, wide alumni network" },
  { name: "Jain Online", rating: 4.2, note: "NAAC A++, career support" },
];

export const Route = createFileRoute("/best-online-$program")({
  loader: ({ params }) => {
    const course = findCourse(params.program);
    if (!course) throw notFound();
    return { course };
  },
  head: ({ loaderData, params }) => {
    const c = loaderData?.course;
    const title = c ? `Best Online ${c.name} 2026 — Top Universities Ranked` : "Best Online Program";
    const desc = c ? `Ranked list of the best online ${c.name} programs in India 2026 — accreditation, fees, placements and student ratings.` : "";
    return {
      meta: [
        { title },
        { name: "description", content: desc },
        { property: "og:title", content: title },
        { property: "og:description", content: desc },
        { property: "og:url", content: CANONICAL(params.program) },
        { property: "og:type", content: "article" },
      ],
      links: [{ rel: "canonical", href: CANONICAL(params.program) }],
      scripts: c ? [{
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "ItemList",
          name: `Best Online ${c.name} 2026`,
          itemListElement: providers.map((p, i) => ({ "@type": "ListItem", position: i + 1, name: p.name })),
        }),
      }] : [],
    };
  },
  component: Page,
});

function Page() {
  const { course } = Route.useLoaderData();
  const { open, setOpen } = useModalTrigger();
  return (
    <div className="min-h-screen bg-background">
      <SiteHeader />
      <Breadcrumb items={[{ label: `Best Online ${course.name}` }]} />
      <main>
        <section
          className="py-12 sm:py-16"
          style={{ backgroundImage: "linear-gradient(135deg, color-mix(in oklab, var(--primary) 10%, transparent), transparent 60%)" }}
        >
          <div className="mx-auto grid max-w-7xl items-start gap-10 px-4 sm:px-6 lg:grid-cols-[1fr_380px] lg:px-8">
            <div>
              <h1 className="text-3xl font-bold text-foreground sm:text-4xl lg:text-5xl">Best Online {course.name} 2026</h1>
              <p className="mt-4 text-base text-muted-foreground sm:text-lg">Compare the top online {course.name} programs in India ranked by accreditation, fees, placements and student ratings.</p>
            </div>
            <div className="lg:sticky lg:top-24"><LeadFormCompact /></div>
          </div>
        </section>
        <section className="bg-background py-12">
          <div className="mx-auto max-w-5xl space-y-4 px-4 sm:px-6 lg:px-8">
            {providers.map((p, i) => (
              <div key={p.name} className={`flex flex-col gap-3 rounded-2xl border p-5 sm:flex-row sm:items-center sm:justify-between ${p.featured ? "border-primary bg-primary/5" : "border-border bg-card"}`}>
                <div className="flex items-center gap-4">
                  <span className="grid h-10 w-10 place-items-center rounded-full bg-primary text-primary-foreground font-bold">{i + 1}</span>
                  <div>
                    <p className="text-lg font-bold text-foreground">{p.name}{p.featured && <span className="ml-2 rounded-full bg-primary px-2 py-0.5 text-xs text-primary-foreground">Recommended</span>}</p>
                    <p className="text-sm text-muted-foreground">{p.note}</p>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <span className="inline-flex items-center gap-1 font-bold text-primary"><Star className="h-4 w-4 fill-current" />{p.rating}</span>
                  {p.featured && (
                    <Link to="/courses/$slug" params={{ slug: course.slug }} className="rounded-md bg-primary px-4 py-2 text-sm font-semibold text-primary-foreground">Explore</Link>
                  )}
                </div>
              </div>
            ))}
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
