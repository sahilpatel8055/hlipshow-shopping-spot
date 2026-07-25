import { createFileRoute } from "@tanstack/react-router";
import type {} from "@tanstack/react-start";
import { allCourses } from "@/lib/lpu";

const BASE_URL = "https://lpuonline.avedu.in";

export const Route = createFileRoute("/sitemap.xml")({
  server: {
    handlers: {
      GET: async () => {
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
          "/fees",
          "/compare-universities",
          "/disclaimer",
          "/privacy-policy",
          "/terms-conditions",
        ];
        const coursePaths = allCourses.map((c) => `/courses/${c.slug}`);
        const bestPaths = allCourses.map((c) => `/best-online-${c.slug}`);
        const all = [...staticPaths, ...coursePaths, ...bestPaths];
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
