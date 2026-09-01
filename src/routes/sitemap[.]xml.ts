import { createFileRoute } from "@tanstack/react-router";
import type {} from "@tanstack/react-start";
import { allCourses } from "@/lib/lpu";
import { blogs } from "@/lib/blogs";
import { infoPages } from "@/lib/topics";
import { comparisonPaths } from "@/lib/comparisons";

const BASE_URL = "https://lpuonline.avedu.in";

export const Route = createFileRoute("/sitemap.xml")({
  server: {
    handlers: {
      GET: async () => {
        // Canonical, indexable URLs only. Excluded on purpose:
        // - /fees, /lpu-online-fee-structure, /lpu-online-admission-process (301s)
        // - /best-online/* (templated, noindex,follow)
        // - /lpu-online-{program}-{topic} spokes (301 to course pillar anchors)
        const CONSOLIDATED_OUT = new Set([
          "lpu-online-fee-structure",
          "lpu-online-admission-process",
        ]);
        const staticPaths = [
          "/",
          "/lpu-online-admission",
          "/lpu-online-admission-last-date",
          "/lpu-online-courses",
          "/lpu-online-eligibility",
          "/lpu-online-fees",
          "/lpu-online-placement",
          "/lpu-online-review",
          "/lpu-online-scholarship",
          "/compare-universities",
          "/blog",
          "/disclaimer",
          "/privacy-policy",
          "/terms-conditions",
          "/lpu-fee-calculator",
          "/lpu-eligibility-checker",
          ...infoPages.filter((i) => !CONSOLIDATED_OUT.has(i.slug)).map((i) => `/${i.slug}`),
        ];
        const coursePaths = allCourses.map((c) => `/courses/${c.slug}`);
        const blogPaths = blogs.map((b) => `/blog/${b.slug}`);
        const all = Array.from(
          new Set([...staticPaths, ...coursePaths, ...blogPaths, ...comparisonPaths]),
        );

        const urls = all
          .map((p) => `  <url><loc>${BASE_URL}${p}</loc><changefreq>weekly</changefreq></url>`)
          .join("\n");
        const xml = `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n${urls}\n</urlset>`;
        return new Response(xml, {
          headers: { "Content-Type": "application/xml", "Cache-Control": "public, max-age=3600" },
        });
      },
    },
  },
});

