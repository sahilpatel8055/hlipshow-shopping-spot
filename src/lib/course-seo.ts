/**
 * Search-intent ownership layer for the course pillars.
 *
 * Each pillar owns the primary "LPU Online <course>" query; review intent is
 * owned by a separate review article (see `reviewSlug`). Titles, H1s, intros
 * and section headings are derived from here so they stay unique and never
 * produce duplicated wording such as "Online Online BCA".
 */

export const SITE_URL = "https://lpuonline.avedu.in";

export type CourseSeo = {
  /** Short programme name, e.g. "BCA". */
  short: string;
  /** Entity name used in headings and schema, e.g. "LPU Online BCA". */
  seoName: string;
  /** Single H1 for the pillar. */
  h1: string;
  /** Unique <title>. */
  title: string;
  /** Unique meta description. */
  description: string;
  /** First 100–150 words establishing the entity and intent. */
  intro: string;
  /** Slug of the dedicated review article that owns review intent. */
  reviewSlug?: string;
};

const review = (p: string) => `lpu-online-${p}-review-2026`;

export const courseSeo: Record<string, CourseSeo> = {
  bca: {
    short: "BCA",
    seoName: "LPU Online BCA",
    h1: "LPU Online BCA 2026",
    title: "LPU Online BCA 2026: Fees, Admission, Eligibility, Syllabus & Reviews",
    description:
      "Explore LPU Online BCA 2026 fees, eligibility, admission process, syllabus, examination pattern, scholarships, career opportunities and placement support.",
    intro:
      "LPU Online BCA is a 3-year online Bachelor of Computer Applications programme offered by Lovely Professional University. This guide covers the LPU Online BCA fees, eligibility, admission process, syllabus, examination pattern, scholarships, career opportunities, placement support and other important details for 2026.",
    reviewSlug: review("bca"),
  },
  bba: {
    short: "BBA",
    seoName: "LPU Online BBA",
    h1: "LPU Online BBA 2026",
    title: "LPU Online BBA 2026: Fees, Admission, Eligibility & Career Scope",
    description:
      "Complete guide to LPU Online BBA 2026 — fee structure, eligibility, admission steps, semester-wise syllabus, scholarships, career scope and placement support.",
    intro:
      "LPU Online BBA is a 3-year online Bachelor of Business Administration programme offered by Lovely Professional University. This guide covers the LPU Online BBA fees, eligibility, admission process, syllabus, examination pattern, scholarships, career scope and placement support for the 2026 academic session.",
    reviewSlug: review("bba"),
  },
  bcom: {
    short: "B.Com",
    seoName: "LPU Online BCom",
    h1: "LPU Online BCom 2026",
    title: "LPU Online BCom 2026: Fees, Admission, Eligibility & Syllabus",
    description:
      "LPU Online BCom 2026 guide — fees and EMI plans, eligibility, admission process, semester-wise syllabus, exam pattern, scholarships and career options.",
    intro:
      "LPU Online BCom is a 3-year online Bachelor of Commerce programme offered by Lovely Professional University. This guide explains the LPU Online BCom fees, eligibility, admission process, syllabus, examination pattern, scholarships and the accounting, taxation and finance careers the degree supports in 2026.",
  },
  ba: {
    short: "BA",
    seoName: "LPU Online BA",
    h1: "LPU Online BA 2026",
    title: "LPU Online BA 2026: Fees, Admission, Eligibility & Career Scope",
    description:
      "LPU Online BA 2026 details — programme fees, eligibility, admission process, syllabus, examination pattern, scholarships and career scope after graduation.",
    intro:
      "LPU Online BA is a 3-year online Bachelor of Arts programme offered by Lovely Professional University. This guide covers the LPU Online BA fees, eligibility, admission process, syllabus, examination pattern, scholarships and the higher-study and career paths open to graduates in 2026.",
  },
  mba: {
    short: "MBA",
    seoName: "LPU Online MBA",
    h1: "LPU Online MBA 2026",
    title: "LPU Online MBA 2026: Fees, Admission, Specializations & Placements",
    description:
      "LPU Online MBA 2026 guide — fees and EMI, eligibility, admission process, specializations, semester-wise syllabus, exam pattern and placement support.",
    intro:
      "LPU Online MBA is a 2-year online Master of Business Administration programme offered by Lovely Professional University. This guide covers the LPU Online MBA fees, eligibility, admission process, available specializations, syllabus, examination pattern, scholarships, career outcomes and placement support for 2026.",
    reviewSlug: review("mba"),
  },
  mca: {
    short: "MCA",
    seoName: "LPU Online MCA",
    h1: "LPU Online MCA 2026",
    title: "LPU Online MCA 2026: Fees, Eligibility, Syllabus & Placements",
    description:
      "LPU Online MCA 2026 guide — fee structure and EMI, eligibility, admission process, specializations, syllabus, examination pattern and placement support.",
    intro:
      "LPU Online MCA is a 2-year online Master of Computer Applications programme offered by Lovely Professional University. This guide covers the LPU Online MCA fees, eligibility, admission process, specializations, syllabus, examination pattern, scholarships and the software, data and cloud careers it supports in 2026.",
    reviewSlug: review("mca"),
  },
  mcom: {
    short: "M.Com",
    seoName: "LPU Online MCom",
    h1: "LPU Online MCom 2026",
    title: "LPU Online MCom 2026: Fees, Admission, Eligibility & Career Scope",
    description:
      "LPU Online MCom 2026 guide — fees, eligibility, admission process, syllabus, examination pattern, scholarships and finance and accounting career scope.",
    intro:
      "LPU Online MCom is a 2-year online Master of Commerce programme offered by Lovely Professional University. This guide covers the LPU Online MCom fees, eligibility, admission process, syllabus, examination pattern, scholarships and the accounting, audit and finance roles graduates typically target in 2026.",
  },
  ma: {
    short: "MA",
    seoName: "LPU Online MA",
    h1: "LPU Online MA 2026",
    title: "LPU Online MA 2026: Fees, Admission, Eligibility & Career Options",
    description:
      "LPU Online MA 2026 guide — programme fees, eligibility, admission process, syllabus, examination pattern, scholarships and career options after the degree.",
    intro:
      "LPU Online MA is a 2-year online Master of Arts programme offered by Lovely Professional University. This guide covers the LPU Online MA fees, eligibility, admission process, syllabus, examination pattern, scholarships and the teaching, content, research and public-service careers it supports in 2026.",
  },
  msc: {
    short: "M.Sc",
    seoName: "LPU Online MSc",
    h1: "LPU Online MSc 2026",
    title: "LPU Online MSc 2026: Fees, Admission, Eligibility & Career Scope",
    description:
      "LPU Online MSc 2026 guide — fees and EMI options, eligibility, admission process, syllabus, examination pattern, scholarships and career scope.",
    intro:
      "LPU Online MSc is a 2-year online Master of Science programme offered by Lovely Professional University. This guide covers the LPU Online MSc fees, eligibility, admission process, syllabus, examination pattern, scholarships and the analytics, research and applied-science careers graduates pursue in 2026.",
  },
};

const fallback = (name: string): CourseSeo => {
  const short = name.replace(/^Online\s+/i, "");
  return {
    short,
    seoName: `LPU Online ${short}`,
    h1: `LPU Online ${short} 2026`,
    title: `LPU Online ${short} 2026: Fees, Admission, Eligibility & Syllabus`,
    description: `LPU Online ${short} 2026 guide — fees, eligibility, admission process, syllabus, examination pattern, scholarships and career support.`,
    intro: `LPU Online ${short} is an online programme offered by Lovely Professional University. This guide covers the LPU Online ${short} fees, eligibility, admission process, syllabus, examination pattern, scholarships and career support for 2026.`,
  };
};

export const getCourseSeo = (slug: string, name: string): CourseSeo =>
  courseSeo[slug] ?? fallback(name);

/** Canonical pillar URL for a course slug. */
export const coursePillarUrl = (slug: string) => `${SITE_URL}/courses/${slug}`;
