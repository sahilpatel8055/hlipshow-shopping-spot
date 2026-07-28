import { createFileRoute, Link } from "@tanstack/react-router";
import { SiteHeader, SiteFooter, Breadcrumb, StickyActionBar } from "@/components/site";
import { blogs } from "@/lib/blogs";

const CANONICAL = "https://lpuonline.avedu.in/blog";

export const Route = createFileRoute("/blog")({
  head: () => ({
    meta: [
      { title: "LPU Online Blog — Admission, Fees, Careers & Guides 2026" },
      { name: "description", content: "Expert guides on LPU Online admission, fees, specializations, placements and career growth. Fresh articles for 2026." },
      { property: "og:title", content: "LPU Online Blog 2026" },
      { property: "og:description", content: "Guides, comparisons and how-tos for LPU Online programs." },
      { property: "og:url", content: CANONICAL },
      { property: "og:type", content: "website" },
    ],
    links: [{ rel: "canonical", href: CANONICAL }],
  }),
  component: BlogIndex,
});

function BlogIndex() {
  return (
    <div className="min-h-screen bg-background">
      <SiteHeader />
      <Breadcrumb items={[{ label: "Blog" }]} />
      <main
        className="py-12 sm:py-16"
        style={{ backgroundImage: "linear-gradient(135deg, color-mix(in oklab, var(--primary) 8%, transparent), transparent 60%)" }}
      >
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h1 className="text-3xl font-bold text-foreground sm:text-4xl lg:text-5xl">LPU Online Blog</h1>
          <p className="mt-3 max-w-2xl text-muted-foreground">
            Guides, comparisons and how-tos on LPU Online admission, fees, specializations, placements and careers.
          </p>
          <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {blogs.map((b) => (
              <Link
                key={b.slug}
                to="/blog/$slug"
                params={{ slug: b.slug }}
                className="group flex flex-col rounded-2xl border border-border bg-card p-6 transition hover:-translate-y-1 hover:border-primary/60 hover:shadow-[var(--shadow-brand)]"
              >
                <span className="inline-flex w-fit rounded-full bg-primary/10 px-3 py-1 text-xs font-semibold text-primary">
                  {b.category}
                </span>
                <h2 className="mt-4 text-lg font-bold text-foreground group-hover:text-primary">{b.title}</h2>
                <p className="mt-2 flex-1 text-sm text-muted-foreground">{b.description}</p>
                <p className="mt-4 text-xs text-muted-foreground">{b.readTime} · {new Date(b.date).toLocaleDateString("en-IN", { day: "numeric", month: "short", year: "numeric" })}</p>
              </Link>
            ))}
          </div>
        </div>
      </main>
      <SiteFooter />
      <StickyActionBar />
    </div>
  );
}
