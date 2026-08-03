import { findCourse, lpu, type Course } from "@/lib/lpu";
import { blogs, type BlogPost } from "@/lib/blogs";

export const SITE = "https://lpuonline.avedu.in";
export const LAST_UPDATED = "2026-08-01";

export const PROGRAM_SLUGS = [
  "mba",
  "mca",
  "mcom",
  "ma",
  "msc",
  "bba",
  "bca",
  "bcom",
  "ba",
] as const;

export type ProgramSlug = (typeof PROGRAM_SLUGS)[number];

export const TOPIC_SLUGS = [
  "fees",
  "admission",
  "eligibility",
  "placements",
  "reviews",
  "curriculum",
  "syllabus",
  "specializations",
  "career-opportunities",
  "salary",
  "scholarship",
  "exam-pattern",
  "sample-degree",
] as const;

export type TopicSlug = (typeof TOPIC_SLUGS)[number];

export const TOPIC_LABELS: Record<TopicSlug, string> = {
  fees: "Fees",
  admission: "Admission",
  eligibility: "Eligibility",
  placements: "Placements",
  reviews: "Reviews",
  curriculum: "Curriculum",
  syllabus: "Syllabus",
  specializations: "Specializations",
  "career-opportunities": "Career Opportunities",
  salary: "Salary",
  scholarship: "Scholarship",
  "exam-pattern": "Exam Pattern",
  "sample-degree": "Sample Degree",
};

export type Section = { heading: string; body?: string; bullets?: string[] };

export type TopicPage = {
  path: string;
  program: ProgramSlug;
  topic: TopicSlug;
  course: Course;
  h1: string;
  title: string;
  description: string;
  intro: string;
  sections: Section[];
  faqs: { q: string; a: string }[];
};

const officialRefs = [
  { label: "LPU Online official website", href: "https://www.lpuonline.com/" },
  { label: "UGC-DEB entitled universities list", href: "https://deb.ugc.ac.in/" },
  { label: "NAAC accreditation status", href: "http://naac.gov.in/" },
];

export const OFFICIAL_REFERENCES = officialRefs;

export const parseINR = (value: string): number =>
  Number(value.replace(/[^0-9]/g, "")) || 0;

const semCount = (course: Course) => (course.level === "ug" ? 6 : 4);

function topicSections(course: Course, topic: TopicSlug): Section[] {
  const f = course.feesBreakdown;
  const sems = semCount(course);
  switch (topic) {
    case "fees":
      return [
        {
          heading: `${course.name} Fee Structure 2026`,
          body: `The total programme fee for ${course.name} is ${f.fullFees}. With the current AVEDU counselling discount the applied fee works out to ${f.appliedFee}, payable as ${f.perSemester} per semester across ${sems} semesters. There is no hidden cost for LMS access, recorded lectures or online examinations.`,
          bullets: [
            `Full fee: ${f.fullFees}`,
            `Fee after discount: ${f.appliedFee}`,
            `Per semester: ${f.perSemester}`,
            `Number of semesters: ${sems}`,
          ],
        },
        {
          heading: "EMI and Payment Options",
          body: `You can pay semester-wise or convert the fee into a 0% interest EMI starting at approximately ${f.emi}. Net banking, UPI, debit/credit card and no-cost EMI through partner NBFCs are accepted.`,
          bullets: [
            `Starting EMI: ${f.emi}`,
            "0% interest EMI on select tenures",
            "Semester-wise payment allowed",
            "Instant fee receipt and enrolment number",
          ],
        },
        {
          heading: "What the Fee Includes",
          bullets: [
            "Live and recorded classes on the LPU e-Connect LMS",
            "Digital courseware and e-library access",
            "Online proctored examinations",
            "Placement and career support services",
            "Degree issuance and digital verification",
          ],
        },
      ];
    case "admission":
      return [
        {
          heading: `${course.name} Admission Process 2026`,
          body: `Admission to ${course.name} is merit-based — there is no entrance exam. Applications for the 2026 session are open and processed on a rolling basis until seats for the cycle are filled.`,
          bullets: lpu.process,
        },
        {
          heading: "Documents Required",
          bullets: [
            "Class 10 and Class 12 marksheets",
            ...(course.level === "pg" ? ["Graduation degree and consolidated marksheet"] : []),
            "Government photo ID (Aadhaar / Passport / Voter ID)",
            "Passport-size photograph and signature",
            "Category or reservation certificate, if applicable",
          ],
        },
        {
          heading: "Admission Timeline",
          bullets: [
            "Application submission — same day",
            "Document verification — 24 to 48 hours",
            "Fee payment — immediately after verification",
            "LMS activation — within 48 hours of payment",
            "Orientation and classes begin — as per session calendar",
          ],
        },
      ];
    case "eligibility":
      return [
        {
          heading: `${course.name} Eligibility Criteria`,
          body:
            course.level === "ug"
              ? "You need to have passed 10+2 (or an equivalent qualification) from a recognised board with a minimum of 50% aggregate marks. Reserved category candidates get a 5% relaxation."
              : "You need a bachelor's degree of minimum three years' duration from a UGC-recognised university with at least 50% aggregate marks. Reserved category candidates get a 5% relaxation.",
          bullets: lpu.eligibility.map((e) => `${e.level}: ${e.criteria}`),
        },
        {
          heading: "Who Should Apply",
          bullets: [
            "Working professionals who need weekend and recorded classes",
            "Students who want a UGC-entitled degree without relocating",
            "Candidates with a study gap — gaps are accepted",
            "International and NRI learners in any time zone",
          ],
        },
        {
          heading: "Documents for Eligibility Verification",
          bullets: [
            "Qualifying marksheet and passing certificate",
            "Migration or transfer certificate, where issued",
            "Photo ID proof",
            "Work experience letter (optional, strengthens the profile)",
          ],
        },
      ];
    case "placements":
      return [
        {
          heading: `${course.name} Placement Support`,
          body: lpu.placements.highlight,
          bullets: lpu.placements.partners.map((p) => `Hiring partner: ${p}`),
        },
        {
          heading: "Career Services You Get",
          bullets: [
            "Resume and LinkedIn profile building",
            "Mock interviews with industry mentors",
            "Aptitude and domain assessment prep",
            "Job alerts through the Division of Career Services",
            "Industry connect webinars and alumni mentoring",
          ],
        },
        {
          heading: "Common Roles After the Programme",
          bullets: course.careers.map((c) => `${c.role} — ${c.salary}`),
        },
      ];
    case "reviews":
      return [
        {
          heading: `${course.name} Review 2026`,
          body: `${course.name} is rated ${course.rating}/5 by ${course.reviews}+ learners. Students most often highlight the flexibility of recorded lectures, the UGC-DEB entitlement of the degree and the affordability of the fee compared with campus programmes.`,
          bullets: lpu.approvals.map((a) => `${a.name} — ${a.note}`),
        },
        {
          heading: "What Learners Like",
          bullets: lpu.highlights.map((h) => `${h.label}: ${h.value}`),
        },
        {
          heading: "Points to Consider",
          bullets: [
            "Self-discipline is essential — the format is asynchronous",
            "Online proctored exams need a stable internet connection",
            "Placement assistance is support-based, not a job guarantee",
          ],
        },
      ];
    case "curriculum":
    case "syllabus":
      return [
        ...course.curriculum.map((y, i) => ({
          heading: `${y.year} — ${course.name} ${topic === "syllabus" ? "Syllabus" : "Curriculum"}`,
          body: `Core subjects covered in ${y.year.toLowerCase()} of the programme.`,
          bullets: y.subjects,
        })),
        {
          heading: "Assessment Pattern",
          bullets: [
            "Continuous assessment through online assignments (30%)",
            "End-term online proctored examination (70%)",
            "Project or dissertation in the final term",
          ],
        },
      ];
    case "specializations":
      return [
        {
          heading: `${course.name} Specializations Available`,
          body: course.specializations?.length
            ? `${course.name} offers ${course.specializations.length} specializations. You choose your specialization during admission and it is printed on the final degree.`
            : `${course.name} follows a broad-based curriculum with elective baskets instead of named specializations, so you can shape the degree around your career goal.`,
          bullets:
            course.specializations && course.specializations.length
              ? course.specializations
              : course.curriculum.flatMap((y) => y.subjects).slice(0, 8),
        },
        {
          heading: "How to Choose the Right Specialization",
          bullets: [
            "Match the specialization to your current or target job role",
            "Check the hiring demand and salary band for that role",
            "Speak to an AVEDU counsellor for a profile-based recommendation",
            "Specialization can usually be changed before the second semester",
          ],
        },
      ];
    case "career-opportunities":
      return [
        {
          heading: `Career Opportunities After ${course.name}`,
          body: `${course.name} graduates work across industry roles that value the skills built in this programme. Below are the most common career paths with indicative Indian salary bands.`,
          bullets: course.careers.map((c) => `${c.role} — ${c.salary}`),
        },
        {
          heading: "Industries That Hire",
          bullets: [
            "IT and technology services",
            "Banking, financial services and insurance",
            "E-commerce and retail",
            "Consulting and analytics",
            "Education and public sector",
          ],
        },
        {
          heading: "Higher Study Options",
          bullets: [
            "Doctoral and PhD programmes in Indian universities",
            "Foreign master's programmes (degree is WES recognised)",
            "Professional certifications in your specialization",
          ],
        },
      ];
    case "salary":
      return [
        {
          heading: `${course.name} Salary in India 2026`,
          body: `Salaries after ${course.name} depend on your specialization, prior experience and city. Freshers typically start in the entry band below, with a steep increase after two to three years of experience.`,
          bullets: course.careers.map((c) => `${c.role} — ${c.salary}`),
        },
        {
          heading: "What Increases Your Salary",
          bullets: [
            "A high-demand specialization",
            "Relevant internships or live projects",
            "Industry certifications alongside the degree",
            "Metro-city roles and product-based companies",
          ],
        },
      ];
    case "scholarship":
      return [
        {
          heading: `${course.name} Scholarships 2026`,
          body: `Scholarships reduce the ${course.name} fee from ${f.fullFees} to as low as ${f.appliedFee} for eligible candidates. Scholarships are applied at the time of admission and adjusted in the semester fee.`,
          bullets: lpu.scholarships,
        },
        {
          heading: "How to Claim the Scholarship",
          bullets: [
            "Speak to an AVEDU counsellor before paying the fee",
            "Submit the supporting proof document",
            "Scholarship is applied to your fee quotation",
            "Complete admission at the reduced fee",
          ],
        },
      ];
    case "exam-pattern":
      return [
        {
          heading: `${course.name} Examination Pattern`,
          body: "Examinations are conducted online through a remote-proctored system. You can appear from home using a laptop or desktop with a webcam and stable internet.",
          bullets: [
            "Continuous assessment: online assignments per subject",
            "End-term examination: remote proctored, objective and descriptive",
            "Weightage: 30% internal, 70% end-term",
            "Passing criteria: as per LPU academic regulations",
            "Re-appear option available in the next examination cycle",
          ],
        },
        {
          heading: "Exam Day Requirements",
          bullets: [
            "Laptop or desktop with working webcam and microphone",
            "Stable internet connection (minimum 2 Mbps)",
            "Government photo ID for identity verification",
            "Quiet, well-lit room with no other person present",
          ],
        },
      ];
    case "sample-degree":
      return [
        {
          heading: `${course.name} Sample Degree`,
          body: `The degree awarded for ${course.name} is issued by Lovely Professional University and carries the same value as the on-campus degree. It does not mention "online" as a mode restriction and is UGC-DEB entitled.`,
          bullets: [
            "Issued by Lovely Professional University",
            "UGC-DEB entitled and NAAC A++ accredited",
            "Digitally verifiable degree with QR validation",
            "Accepted for government jobs, PSUs and higher education",
            "WES recognised for study or work abroad",
          ],
        },
        {
          heading: "Degree Verification",
          bullets: [
            "Verify through the university's official verification portal",
            "Digital copy available on the student LMS after convocation",
            "Physical degree dispatched to your registered address",
          ],
        },
      ];
  }
}

function topicFaqs(course: Course, topic: TopicSlug): { q: string; a: string }[] {
  const f = course.feesBreakdown;
  const base = [
    {
      q: `Is the ${course.name} degree valid?`,
      a: "Yes. LPU's online programmes are entitled by UGC-DEB and the university is NAAC A++ accredited, so the degree is valid for jobs, government exams and higher education.",
    },
    {
      q: `What is the total fee for ${course.name}?`,
      a: `The full fee is ${f.fullFees} and the fee after the current discount is ${f.appliedFee}, which can be paid as ${f.perSemester} per semester or on EMI from ${f.emi}.`,
    },
    {
      q: `How long is ${course.name}?`,
      a: `${course.name} is a ${course.duration} programme delivered 100% online, with flexible live and recorded classes.`,
    },
  ];
  const extra: Record<TopicSlug, { q: string; a: string }> = {
    fees: { q: "Can I pay the fee in instalments?", a: `Yes, semester-wise payment and 0% interest EMI from ${f.emi} are both available.` },
    admission: { q: "Is there an entrance exam?", a: "No. Admission is merit-based on your qualifying examination marks." },
    eligibility: { q: "Is a study gap accepted?", a: "Yes, a study gap does not affect eligibility for LPU Online programmes." },
    placements: { q: "Is placement guaranteed?", a: "Placement assistance is provided through the career services division, but a job is not guaranteed." },
    reviews: { q: `How is ${course.name} rated by students?`, a: `${course.name} holds an average rating of ${course.rating}/5 from ${course.reviews}+ learner reviews.` },
    curriculum: { q: "Is the curriculum the same as the campus programme?", a: "Yes, the syllabus mirrors the on-campus programme and is delivered through the online LMS." },
    syllabus: { q: "Can I download the syllabus?", a: "Yes, request the detailed syllabus and brochure from any form on this page." },
    specializations: { q: "Can I change my specialization later?", a: "Specialization changes are usually permitted before the second semester, subject to university approval." },
    "career-opportunities": { q: "Do employers accept online degrees?", a: "Yes. A UGC-entitled online degree is treated at par with a regular degree by employers and government bodies." },
    salary: { q: "What is the average starting salary?", a: `Entry-level roles after ${course.name} typically start in the bands listed above and grow quickly with experience.` },
    scholarship: { q: "Who is eligible for a scholarship?", a: "Merit, defence, divyaang and sports scholarships are available. A counsellor will confirm your eligibility." },
    "exam-pattern": { q: "Do I need to visit a centre for exams?", a: "No. All examinations are remote proctored and can be taken from home." },
    "sample-degree": { q: "Does the degree mention 'online'?", a: "The degree is issued by LPU and is equivalent to the on-campus degree in value and recognition." },
  };
  return [...base, extra[topic]];
}

export function buildTopicPage(program: ProgramSlug, topic: TopicSlug): TopicPage | null {
  const course = findCourse(program);
  if (!course) return null;
  const label = TOPIC_LABELS[topic];
  const name = `LPU ${course.name}`;
  const h1 = `${name} ${label} 2026`;
  const descMap: Record<TopicSlug, string> = {
    fees: `${name} fees 2026 — full fee ${course.feesBreakdown.fullFees}, discounted fee ${course.feesBreakdown.appliedFee}, semester fee and 0% EMI plans.`,
    admission: `${name} admission 2026 — step-by-step process, documents, last date and how to apply online.`,
    eligibility: `${name} eligibility 2026 — minimum marks, qualifying degree, age criteria and documents required.`,
    placements: `${name} placements — top recruiters, career services, typical roles and salary bands.`,
    reviews: `${name} review 2026 — student ratings, accreditation, learning experience and honest pros and cons.`,
    curriculum: `${name} curriculum 2026 — year-wise subjects, credits and assessment pattern.`,
    syllabus: `${name} syllabus 2026 — complete semester-wise subject list and exam weightage.`,
    specializations: `${name} specializations 2026 — full list of electives and how to choose the right one.`,
    "career-opportunities": `Career opportunities after ${name} — job roles, hiring industries and higher study paths.`,
    salary: `${name} salary in India 2026 — role-wise pay bands for freshers and experienced professionals.`,
    scholarship: `${name} scholarship 2026 — merit, defence, divyaang and sports scholarships with how to apply.`,
    "exam-pattern": `${name} exam pattern — remote proctored exams, internal weightage and passing criteria.`,
    "sample-degree": `${name} sample degree — what the LPU online degree looks like, validity and verification.`,
  };
  return {
    path: `/lpu-online-${program}-${topic}`,
    program,
    topic,
    course,
    h1,
    title: `${h1} — Fees, Details & Apply | LPU Online`.slice(0, 70),
    description: descMap[topic].slice(0, 158),
    intro: descMap[topic],
    sections: topicSections(course, topic),
    faqs: topicFaqs(course, topic),
  };
}

export const allTopicPaths: string[] = PROGRAM_SLUGS.flatMap((p) =>
  TOPIC_SLUGS.map((t) => `/lpu-online-${p}-${t}`),
);

/* ---------------- Informational support pages ---------------- */

export type InfoPage = {
  slug: string;
  h1: string;
  title: string;
  description: string;
  intro: string;
  sections: Section[];
  faqs: { q: string; a: string }[];
};

export const infoPages: InfoPage[] = [
  {
    slug: "lpu-online-admission-process",
    h1: "LPU Online Admission Process 2026",
    title: "LPU Online Admission Process 2026 — Steps, Documents & Dates",
    description: "Complete LPU Online admission process 2026 — application steps, document checklist, verification, fee payment and LMS activation.",
    intro: "A step-by-step walkthrough of how LPU Online admission works in 2026, from counselling to your first live class.",
    sections: [
      { heading: "Step-by-Step Admission", bullets: lpu.process },
      { heading: "Documents Checklist", bullets: ["Class 10 and 12 marksheets", "Graduation marksheet for PG programmes", "Photo ID proof", "Passport-size photograph", "Category certificate if applicable"] },
      { heading: "After Admission", bullets: ["LMS credentials within 48 hours", "Orientation session", "Access to live and recorded classes", "Assignment calendar and exam schedule"] },
    ],
    faqs: [
      { q: "Is there an entrance exam for LPU Online?", a: "No, admission is merit-based on your qualifying examination." },
      { q: "How long does admission take?", a: "Most admissions are confirmed within 48 hours of document verification and fee payment." },
    ],
  },
  {
    slug: "lpu-online-fee-structure",
    h1: "LPU Online Fee Structure 2026",
    title: "LPU Online Fee Structure 2026 — Programme-wise Fees & EMI",
    description: "LPU Online fee structure 2026 for every UG and PG programme — full fee, discounted fee, semester fee and EMI options.",
    intro: "Transparent programme-wise fees for every LPU Online degree, with discount and EMI options explained.",
    sections: [
      { heading: "Programme-wise Fees", bullets: [] },
      { heading: "Payment Options", bullets: ["Full payment with maximum discount", "Semester-wise payment", "0% interest EMI on select tenures", "UPI, net banking, card and NBFC financing"] },
    ],
    faqs: [
      { q: "Are there hidden charges?", a: "No. The fee covers LMS access, courseware, examinations and degree issuance." },
      { q: "Can the fee change mid-programme?", a: "The per-semester fee is locked at the time of admission for your batch." },
    ],
  },
  {
    slug: "lpu-online-degree-validity",
    h1: "LPU Online Degree Validity & Recognition",
    title: "LPU Online Degree Validity 2026 — UGC, NAAC & WES Recognition",
    description: "Is the LPU Online degree valid? UGC-DEB entitlement, NAAC A++ accreditation, WES recognition and acceptance for jobs and higher study.",
    intro: "Everything you need to know about the validity and recognition of an LPU Online degree in India and abroad.",
    sections: [
      { heading: "Approvals and Accreditations", bullets: lpu.approvals.map((a) => `${a.name} — ${a.note}`) },
      { heading: "Where the Degree Is Accepted", bullets: ["Government jobs and PSU recruitment", "UPSC and state service examinations", "Private sector hiring", "PhD and higher-study admissions", "Foreign universities via WES evaluation"] },
    ],
    faqs: [
      { q: "Is an LPU Online degree valid for government jobs?", a: "Yes, UGC-entitled online degrees are accepted for government recruitment." },
      { q: "Is it valid abroad?", a: "Yes, LPU degrees are WES recognised for study and work in Canada and the USA." },
    ],
  },
  {
    slug: "lpu-online-lms",
    h1: "LPU Online Learning Management System (LMS)",
    title: "LPU Online LMS Guide 2026 — e-Connect Features & Access",
    description: "Guide to the LPU Online learning management system — live classes, recorded lectures, e-library, assignments and mobile access.",
    intro: "How the LPU Online LMS works and what you get inside your student dashboard.",
    sections: [
      { heading: "LMS Features", bullets: ["Live interactive classes with faculty", "Recorded lectures available 24x7", "Digital courseware and e-library", "Assignment submission and tracking", "Discussion forums and doubt support", "Mobile app access"] },
      { heading: "Getting Access", bullets: ["Credentials are emailed within 48 hours of fee payment", "Login via the official LPU e-Connect portal", "Reset password from the login page", "Contact student support for access issues"] },
    ],
    faqs: [
      { q: "Can I watch classes later?", a: "Yes, every live session is recorded and available on the LMS." },
      { q: "Is there a mobile app?", a: "Yes, the LMS is accessible via browser and a mobile app." },
    ],
  },
  {
    slug: "lpu-online-examination-pattern",
    h1: "LPU Online Examination Pattern 2026",
    title: "LPU Online Exam Pattern 2026 — Proctored Exams & Weightage",
    description: "LPU Online examination pattern — remote proctored exams, internal assessment weightage, passing criteria and re-appear rules.",
    intro: "How LPU Online examinations are conducted and what you need to prepare for exam day.",
    sections: [
      { heading: "Examination Structure", bullets: ["30% continuous internal assessment", "70% end-term proctored examination", "Objective and descriptive question types", "Project or dissertation in the final term"] },
      { heading: "Exam Day Requirements", bullets: ["Laptop or desktop with webcam", "Stable internet connection", "Government photo ID", "Quiet, well-lit environment"] },
    ],
    faqs: [
      { q: "Do I have to travel for exams?", a: "No, exams are remote proctored and taken from home." },
      { q: "What if I fail a subject?", a: "You can re-appear in the next examination cycle as per university rules." },
    ],
  },
  {
    slug: "lpu-online-assignment-process",
    h1: "LPU Online Assignment Process",
    title: "LPU Online Assignment Process 2026 — Submission & Marks",
    description: "How LPU Online assignments work — submission deadlines, format, plagiarism rules, marks weightage and resubmission.",
    intro: "Assignments carry the internal assessment weightage in every LPU Online programme. Here is how they work.",
    sections: [
      { heading: "How Assignments Work", bullets: ["One or more assignments per subject per semester", "Submitted online through the LMS", "Counts toward the 30% internal assessment", "Deadlines published in the academic calendar"] },
      { heading: "Best Practices", bullets: ["Submit before the deadline to avoid penalty", "Keep content original — plagiarism checks apply", "Follow the prescribed format and word limit", "Save a copy of the submission receipt"] },
    ],
    faqs: [
      { q: "What happens if I miss a deadline?", a: "Late submission windows are sometimes allowed with a penalty; contact student support immediately." },
      { q: "Are assignments graded?", a: "Yes, assignment marks form part of your internal assessment." },
    ],
  },
  {
    slug: "lpu-online-student-login-guide",
    h1: "LPU Online Student Login Guide",
    title: "LPU Online Student Login Guide 2026 — Portal Access Help",
    description: "Step-by-step LPU Online student login guide — portal access, password reset, common login errors and support contacts.",
    intro: "How to log in to your LPU Online student portal and fix the most common access problems.",
    sections: [
      { heading: "How to Log In", bullets: ["Open the official LPU e-Connect portal", "Enter your registration number and password", "Complete the OTP verification if prompted", "Bookmark the dashboard for quick access"] },
      { heading: "Common Login Issues", bullets: ["Password reset via 'Forgot Password'", "Credentials not received — check spam or contact support", "Browser cache issues — try an incognito window", "Account locked after repeated failed attempts"] },
    ],
    faqs: [
      { q: "When do I receive my login details?", a: "Within 48 hours of fee confirmation, on your registered email." },
      { q: "Can I log in on mobile?", a: "Yes, through the mobile browser or the official app." },
    ],
  },
  {
    slug: "lpu-online-student-support",
    h1: "LPU Online Student Support",
    title: "LPU Online Student Support 2026 — Help, Contacts & Services",
    description: "LPU Online student support services — academic help, technical assistance, exam queries, grievance redressal and contact channels.",
    intro: "The support channels available to you as an LPU Online learner, from academics to technical help.",
    sections: [
      { heading: "Support Services", bullets: ["Academic doubt-clearing sessions", "Technical LMS support", "Examination and result queries", "Fee and finance assistance", "Grievance redressal cell"] },
      { heading: "How to Reach Support", bullets: ["Raise a ticket from the student dashboard", "Email the student relationship team", "Call your assigned academic counsellor", "AVEDU counsellor support throughout the programme"] },
    ],
    faqs: [
      { q: "Do I get a dedicated counsellor?", a: "Yes, AVEDU assigns a counsellor who supports you from admission through the programme." },
      { q: "How fast is support response?", a: "Most tickets are addressed within 24 to 48 working hours." },
    ],
  },
  {
    slug: "lpu-online-career-services",
    h1: "LPU Online Career Services",
    title: "LPU Online Career Services 2026 — Placement & Career Support",
    description: "LPU Online career services — resume building, mock interviews, job alerts, industry connects and placement assistance for online learners.",
    intro: "Career services available to every LPU Online learner through the university's dedicated career division.",
    sections: [
      { heading: "What You Get", bullets: ["Resume and LinkedIn profile building", "Mock interviews with industry mentors", "Aptitude and domain assessments", "Job alerts and recruiter connects", "Industry webinars and alumni mentoring"] },
      { heading: "Top Hiring Partners", bullets: lpu.placements.partners },
    ],
    faqs: [
      { q: "Is a job guaranteed?", a: "No. Career services provide assistance and preparation, not a guaranteed job offer." },
      { q: "Can working professionals use career services?", a: "Yes, services are available to all enrolled learners." },
    ],
  },
];

export const findInfoPage = (slug: string) => infoPages.find((p) => p.slug === slug);

/* ---------------- Related content helpers ---------------- */

export function relatedBlogs(keyword: string, limit = 3): BlogPost[] {
  const k = keyword.toLowerCase();
  const matched = blogs.filter(
    (b) => b.title.toLowerCase().includes(k) || b.description.toLowerCase().includes(k),
  );
  const rest = blogs.filter((b) => !matched.includes(b));
  return [...matched, ...rest].slice(0, limit);
}

export function parseTopicPath(pathname: string): TopicPage | null {
  const clean = pathname.replace(/^\/+|\/+$/g, "");
  if (!clean.startsWith("lpu-online-")) return null;
  const rest = clean.slice("lpu-online-".length);
  const topic = TOPIC_SLUGS.find((t) => rest.endsWith(`-${t}`));
  if (!topic) return null;
  const program = rest.slice(0, rest.length - topic.length - 1) as ProgramSlug;
  if (!PROGRAM_SLUGS.includes(program)) return null;
  return buildTopicPage(program, topic);
}
