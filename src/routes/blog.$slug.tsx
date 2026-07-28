import { createFileRoute, notFound, Link } from "@tanstack/react-router";
import { SiteHeader, SiteFooter, Breadcrumb, StickyActionBar, LeadFormCompact, CounselingModal, useModalTrigger, SeoFaq, PopularSearches } from "@/components/site";
import { blogs, findBlog } from "@/lib/blogs";
import { lpu } from "@/lib/lpu";

const CANONICAL = (slug: string) => `https://lpuonline.avedu.in/blog/${slug}`;

export const Route = createFileRoute("/blog/$slug")({
  loader: ({ params }) => {
    const post = findBlog(params.slug);
    if (!post) throw notFound();
    return { post };
  },
  head: ({ loaderData, params }) => {
    const p = loaderData?.post;
    const title = p ? `${p.title}` : "Blog — LPU Online";
    const desc = p?.description ?? "";
    const url = CANONICAL(params.slug);
    const schemas = p
      ? [
          {
            "@context": "https://schema.org",
            "@type": "Article",
            headline: p.title,
            description: p.description,
            datePublished: p.date,
            dateModified: p.date,
            author: { "@type": "Organization", name: "AVEDU" },
            publisher: {
              "@type": "Organization",
              name: "AVEDU · LPU Online",
              logo: { "@type": "ImageObject", url: "https://lpuonline.avedu.in/lpu-logo.png" },
            },
            mainEntityOfPage: url,
          },
          {
            "@context": "https://schema.org",
            "@type": "BreadcrumbList",
            itemListElement: [
              { "@type": "ListItem", position: 1, name: "Home", item: "https://lpuonline.avedu.in/" },
              { "@type": "ListItem", position: 2, name: "Blog", item: "https://lpuonline.avedu.in/blog" },
              { "@type": "ListItem", position: 3, name: p.title, item: url },
            ],
          },
        ]
      : [];
    return {
      meta: [
        { title },
        { name: "description", content: desc },
        { property: "og:title", content: title },
        { property: "og:description", content: desc },
        { property: "og:url", content: url },
        { property: "og:type", content: "article" },
        { name: "twitter:card", content: "summary_large_image" },
      ],
      links: [{ rel: "canonical", href: url }],
      scripts: schemas.map((s) => ({ type: "application/ld+json", children: JSON.stringify(s) })),
    };
  },
  notFoundComponent: () => (
    <div className="min-h-screen bg-background">
      <SiteHeader />
      <main className="mx-auto max-w-3xl px-4 py-24 text-center">
        <h1 className="text-3xl font-bold text-foreground">Article not found</h1>
        <Link to="/blog" className="mt-6 inline-block rounded-md bg-primary px-5 py-2.5 text-sm font-semibold text-primary-foreground">Back to blog</Link>
      </main>
      <SiteFooter />
    </div>
  ),
  component: BlogPost,
});

function BlogPost() {
  const { post } = Route.useLoaderData();
  const { open, setOpen } = useModalTrigger();
  const related = blogs.filter((b) => b.slug !== post.slug).slice(0, 3);
  return (
    <div className="min-h-screen bg-background">
      <SiteHeader />
      <Breadcrumb items={[{ label: "Blog", to: "/blog" }, { label: post.title }]} />
      <main>
        <section
          className="py-12 sm:py-16"
          style={{ backgroundImage: "linear-gradient(135deg, color-mix(in oklab, var(--primary) 8%, transparent), transparent 60%)" }}
        >
          <div className="mx-auto grid max-w-7xl items-start gap-10 px-4 sm:px-6 lg:grid-cols-[1fr_360px] lg:px-8">
            <article>
              <span className="inline-flex rounded-full bg-primary/10 px-3 py-1 text-xs font-semibold text-primary">{post.category}</span>
              <h1 className="mt-4 text-3xl font-bold text-foreground sm:text-4xl">{post.title}</h1>
              <p className="mt-3 text-sm text-muted-foreground">{post.readTime} · {new Date(post.date).toLocaleDateString("en-IN", { day: "numeric", month: "short", year: "numeric" })}</p>
              <div className="prose prose-slate mt-8 max-w-none">
                {post.content.map((s: { heading?: string; body: string }, i: number) => (
                  <div key={i} className="mb-6">
                    {s.heading && <h2 className="text-xl font-bold text-foreground sm:text-2xl">{s.heading}</h2>}
                    <p className="mt-2 leading-relaxed text-muted-foreground">{s.body}</p>
                  </div>
                ))}
              </div>
              <div className="mt-10 rounded-2xl border border-primary/20 bg-accent p-6">
                <h3 className="text-lg font-bold text-foreground">Talk to an LPU Online counselor</h3>
                <p className="mt-1 text-sm text-muted-foreground">Get a personalized plan for fees, EMI options and admission dates.</p>
                <div className="mt-4 flex flex-wrap gap-3">
                  <Link to="/lpu-online-admission" className="rounded-md bg-primary px-5 py-2.5 text-sm font-semibold text-primary-foreground">Admission process</Link>
                  <Link to="/lpu-online-fees" className="rounded-md border border-border bg-background px-5 py-2.5 text-sm font-semibold text-foreground">Fees & EMI</Link>
                  <Link to="/lpu-online-placement" className="rounded-md border border-border bg-background px-5 py-2.5 text-sm font-semibold text-foreground">Placements</Link>
                </div>
              </div>
              {related.length > 0 && (
                <div className="mt-12">
                  <h3 className="text-xl font-bold text-foreground">Related reading</h3>
                  <ul className="mt-4 space-y-3">
                    {related.map((r) => (
                      <li key={r.slug}>
                        <Link to="/blog/$slug" params={{ slug: r.slug }} className="text-primary underline-offset-2 hover:underline">
                          {r.title}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>
              )}
            </article>
            <aside className="lg:sticky lg:top-24">
              <LeadFormCompact />
            </aside>
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
