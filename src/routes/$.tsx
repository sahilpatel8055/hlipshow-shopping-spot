import { createFileRoute, notFound, redirect } from "@tanstack/react-router";
import { TopicalPageLayout } from "@/components/topical";
import { allCourses } from "@/lib/lpu";
import {
  SITE,
  LAST_UPDATED,
  TOPIC_ANCHORS,
  findInfoPage,
  parseTopicPath,
  type Section,
} from "@/lib/topics";

export const Route = createFileRoute("/$")({
  loader: ({ params }) => {
    const raw = (params._splat ?? "").replace(/^\/+|\/+$/g, "");
    const topicPage = parseTopicPath(raw);
    if (topicPage) {
      // Hub-and-spoke consolidation: every /lpu-online-{program}-{topic} spoke
      // is permanently merged into the course pillar page.
      throw redirect({
        href: `/courses/${topicPage.program}#${TOPIC_ANCHORS[topicPage.topic]}`,
        statusCode: 301,
        throw: true,
      });
    }

    // Duplicate-intent consolidation: near-identical pages 301 into one preferred URL.
    const CONSOLIDATED: Record<string, string> = {
      "lpu-online-fee-structure": "/lpu-online-fees",
      "lpu-online-admission-process": "/lpu-online-admission",
      fees: "/lpu-online-fees",
    };
    if (CONSOLIDATED[raw]) {
      throw redirect({ href: CONSOLIDATED[raw], statusCode: 301, throw: true });
    }

    const bestMatch = /^best-online-(.+)$/.exec(raw);
    if (bestMatch) {
      const target = canonicalCourseSlug(bestMatch[1]) ?? bestMatch[1];
      if (allCourses.some((c) => c.slug === target)) {
        throw redirect({ href: `/best-online/${target}`, statusCode: 301, throw: true });
      }
    }

    const info = findInfoPage(raw);
    if (info) {
      const sections: Section[] =
        info.slug === "lpu-online-fee-structure"
          ? info.sections.map((s) =>
              s.heading === "Programme-wise Fees"
                ? {
                    ...s,
                    bullets: allCourses.map(
                      (c) =>
                        `${c.name}: ${c.feesBreakdown.appliedFee} (was ${c.feesBreakdown.fullFees}) · ${c.feesBreakdown.perSemester}/semester · EMI ${c.feesBreakdown.emi}`,
                    ),
                  }
                : s,
            )
          : info.sections;
      return {
        kind: "info" as const,
        path: `/${info.slug}`,
        h1: info.h1,
        title: info.title,
        description: info.description,
        intro: info.intro,
        sections,
        faqs: info.faqs,
        program: undefined,
        topic: undefined,
        courseName: undefined,
        duration: undefined,
        keyword: "LPU Online",
      };
    }
    throw notFound();
  },
  head: ({ loaderData }) => {
    if (!loaderData) {
      return { meta: [{ title: "Page not found — LPU Online" }, { name: "robots", content: "noindex" }] };
    }
    const url = `${SITE}${loaderData.path}`;
    const schemas: Record<string, unknown>[] = [
      {
        "@context": "https://schema.org",
        "@type": "WebPage",
        name: loaderData.h1,
        description: loaderData.description,
        url,
        dateModified: LAST_UPDATED,
      },
    ];
    schemas.push({
      "@context": "https://schema.org",
      "@type": "BreadcrumbList",
      itemListElement: [
        { "@type": "ListItem", position: 1, name: "Home", item: `${SITE}/` },
        { "@type": "ListItem", position: 2, name: loaderData.h1, item: url },
      ],
    });

    return {
      meta: [
        { title: loaderData.title },
        { name: "description", content: loaderData.description },
        { property: "og:title", content: loaderData.title },
        { property: "og:description", content: loaderData.description },
        { property: "og:url", content: url },
        { property: "og:type", content: "article" },
        { name: "twitter:card", content: "summary_large_image" },
      ],
      links: [{ rel: "canonical", href: url }],
      scripts: schemas.map((s) => ({
        type: "application/ld+json",
        children: JSON.stringify(s),
      })),
    };
  },
  component: TopicalPage,
  notFoundComponent: NotFound,
});

function TopicalPage() {
  const d = Route.useLoaderData();
  const crumbs = [
    { label: "LPU Online", to: "/lpu-online-courses" },
    { label: d.h1 },
  ];


  return (
    <TopicalPageLayout
      h1={d.h1}
      intro={d.intro}
      breadcrumb={crumbs}
      sections={d.sections}
      faqs={d.faqs}
      program={d.program}
      courseName={d.courseName}
      currentTopic={d.topic}
      keyword={d.keyword}
    />
  );
}

function NotFound() {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center gap-4 px-6 text-center">
      <h1 className="text-2xl font-bold text-foreground">Page not found</h1>
      <p className="text-sm text-muted-foreground">The page you are looking for does not exist.</p>
      <a href="/" className="rounded-md bg-primary px-5 py-2.5 text-sm font-semibold text-primary-foreground">
        Back to home
      </a>
    </div>
  );
}
