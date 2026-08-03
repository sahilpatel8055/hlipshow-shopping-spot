import { createFileRoute, notFound } from "@tanstack/react-router";
import { TopicalPageLayout } from "@/components/topical";
import { allCourses } from "@/lib/lpu";
import type { TopicSlug } from "@/lib/topics";
import {
  SITE,
  LAST_UPDATED,
  TOPIC_LABELS,
  findInfoPage,
  parseTopicPath,
  type Section,
} from "@/lib/topics";

export const Route = createFileRoute("/$")({
  loader: ({ params }) => {
    const raw = (params._splat ?? "").replace(/^\/+|\/+$/g, "");
    const topicPage = parseTopicPath(raw);
    if (topicPage) {
      return {
        kind: "topic" as const,
        path: topicPage.path,
        h1: topicPage.h1,
        title: topicPage.title,
        description: topicPage.description,
        intro: topicPage.intro,
        sections: topicPage.sections,
        faqs: topicPage.faqs,
        program: topicPage.program,
        topic: topicPage.topic,
        courseName: topicPage.course.name,
        duration: topicPage.course.duration,
        keyword: topicPage.course.name.replace("Online ", ""),
      };
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
    if (loaderData.kind === "topic") {
      schemas.push({
        "@context": "https://schema.org",
        "@type": "Course",
        name: `LPU ${loaderData.courseName}`,
        description: loaderData.description,
        url,
        provider: {
          "@type": "CollegeOrUniversity",
          name: "Lovely Professional University (LPU Online)",
          sameAs: "https://www.lpuonline.com/",
        },
        hasCourseInstance: {
          "@type": "CourseInstance",
          courseMode: "online",
          courseWorkload: loaderData.duration,
        },
      });
    }
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
  const crumbs =
    d.kind === "topic" && d.program && d.topic && d.courseName
      ? [
          { label: "Courses", to: "/lpu-online-courses" },
          { label: d.courseName, to: `/courses/${d.program}` },
          { label: TOPIC_LABELS[d.topic as TopicSlug] },
        ]
      : [{ label: "LPU Online", to: "/lpu-online-courses" }, { label: d.h1 }];

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
