import { createFileRoute } from "@tanstack/react-router";
import { SeoPageLayout } from "@/components/site";
import { lpu, allCourses } from "@/lib/lpu";

const CANONICAL = "https://onlinevgu.avedu.in/lpu-online-courses";

export const Route = createFileRoute("/lpu-online-courses")({
  head: () => ({
    meta: [
      { title: "LPU Online Courses — UG & PG Degree Programs List 2026" },
      { name: "description", content: "Full list of LPU Online UG and PG courses — BBA, BCA, B.Com, BA, MBA, MCA, M.Com, MA with duration, fees and specializations." },
      { name: "robots", content: "noindex, nofollow" },
      { property: "og:title", content: "LPU Online Courses List" },
      { property: "og:description", content: "Explore UGC-entitled online UG and PG programs from LPU." },
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
      title="LPU Online Courses 2026"
      intro="Explore UGC-entitled online UG and PG programs from Lovely Professional University. Learn 100% online with flexible schedules, mentor support and dedicated placement assistance."
      breadcrumb={[{ label: "Courses" }]}
      sections={[
        { heading: "Undergraduate (UG) Programs", bullets: lpu.courses.ug.map((c) => `${c.name} — ${c.duration}, ${c.fee}`) },
        { heading: "Postgraduate (PG) Programs", bullets: lpu.courses.pg.map((c) => `${c.name} — ${c.duration}, ${c.fee}`) },
        { heading: "Specializations Available", bullets: Array.from(new Set(allCourses.flatMap((c) => c.specializations ?? []))) },
      ]}
      faqs={lpu.faqs}
    />
  );
}
