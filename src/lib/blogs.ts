export type BlogPost = {
  slug: string;
  title: string;
  description: string;
  category: string;
  readTime: string;
  date: string;
  /** Pinned to the top of the blog hub as a pillar article. */
  featured?: boolean;
  keyTakeaways?: string[];
  content: { heading?: string; body: string; bullets?: string[] }[];
  faqs?: { q: string; a: string }[];
};


export const blogs: BlogPost[] = [
  {
    slug: "is-lpu-online-degree-valid",
    title: "Is LPU Online Degree Valid? UGC Recognition Explained (2026)",
    description: "A complete guide to LPU Online degree validity, UGC-DEB entitlement, NAAC accreditation and how it is treated by employers and universities.",
    category: "Recognition",
    readTime: "6 min read",
    date: "2026-01-10",
    content: [
      { body: "Yes — LPU Online degrees are 100% valid. Lovely Professional University's online programs are entitled by the UGC-DEB (Distance Education Bureau) and NAAC A++ accredited. That means they are treated at par with on-campus degrees for higher studies, government jobs and private sector employment." },
      { heading: "Approvals and accreditations", body: "UGC-DEB entitlement, NAAC A++ grade, WES recognition for study in Canada and the USA, and AICTE norms compliance for technical programs." },
      { heading: "Where can you use it?", body: "PSU jobs, UPSC and state services, private sector hiring, PhD admissions, foreign university applications and professional certifications." },
      { heading: "How to verify", body: "Every LPU Online degree carries a verifiable digital signature and can be validated via the UGC public notice list of entitled online universities." },
    ],
  },
  {
    slug: "mba-vs-mca-salary",
    title: "MBA vs MCA Salary in India (2026): Roles, Growth & ROI",
    description: "Detailed comparison of MBA vs MCA salaries, career paths, top job roles and long-term ROI for Indian graduates in 2026.",
    category: "Career",
    readTime: "8 min read",
    date: "2026-01-12",
    content: [
      { body: "An online MBA and an online MCA both open up strong careers, but the roles and salary bands are very different. This guide breaks down average CTC, top job roles and 5-year growth for each." },
      { heading: "Average starting salary", body: "MBA freshers: ₹5–8 LPA (up to ₹15 LPA for top specializations like Finance/Business Analytics). MCA freshers: ₹5–9 LPA in software roles, ₹8–15 LPA for AI/ML and cyber security specializations." },
      { heading: "Top roles", body: "MBA: Product Manager, Business Analyst, Marketing Manager, Financial Analyst. MCA: Full Stack Developer, Data Scientist, Cloud Engineer, Cyber Security Analyst." },
      { heading: "Which should you pick?", body: "Pick MBA if you want leadership, sales, marketing or operations roles. Pick MCA if you love coding and want a technical career in software, AI or cloud." },
    ],
  },
  {
    slug: "how-to-apply-lpu-online-mba",
    title: "How to Apply for LPU Online MBA — Step-by-Step Admission Guide 2026",
    description: "Step-by-step process to apply for LPU Online MBA in 2026 — eligibility, documents, fees, EMI options and important dates.",
    category: "Admission",
    readTime: "5 min read",
    date: "2026-01-15",
    content: [
      { heading: "Eligibility", body: "Bachelor's degree in any discipline from a recognized university with a minimum of 50% marks (45% for reserved categories)." },
      { heading: "Step 1 — Free counseling", body: "Book a free counseling session with an AVEDU advisor to shortlist the right MBA specialization." },
      { heading: "Step 2 — Fill the application form", body: "Register on the LPU Online portal, complete personal and academic details and upload documents (10th, 12th, graduation marksheets, ID proof and passport photo)." },
      { heading: "Step 3 — Pay the fees", body: "Choose full payment or 0% interest EMI. Total MBA fee after discount: ₹1,61,600 (₹6,733/mo EMI)." },
      { heading: "Step 4 — LMS access", body: "You receive LMS credentials within 24–48 hours of fee confirmation and can start attending live and recorded classes." },
    ],
  },
  {
    slug: "lpu-online-bba-fees",
    title: "LPU Online BBA Fees 2026 — Full Structure, Discounts & EMI Options",
    description: "Complete fee breakdown for LPU Online BBA 2026 — full fee, per-semester fee, discounts, EMI plans and scholarships.",
    category: "Fees",
    readTime: "4 min read",
    date: "2026-01-18",
    content: [
      { body: "The LPU Online BBA program has a total fee of ₹1,50,000, currently available at a discounted price of ₹1,22,400 (about ₹20,400 per semester)." },
      { heading: "EMI options", body: "0% interest EMI starting from ₹5,100 per month for eligible candidates." },
      { heading: "Scholarships", body: "Merit scholarship up to 30%, Defence & Government employee scholarship, Divyaang scholarship and Sports scholarship." },
      { heading: "What's included", body: "LMS access, live and recorded classes, e-books, mentor support and placement assistance are all included in the fee." },
    ],
  },
  {
    slug: "lpu-online-mca-fees",
    title: "LPU Online MCA Fees 2026 — Total Cost, Specializations & EMI",
    description: "LPU Online MCA fees for 2026 — total program cost, per-semester fee, specialization options, EMI plans and value for money.",
    category: "Fees",
    readTime: "5 min read",
    date: "2026-01-20",
    content: [
      { body: "LPU Online MCA has a total fee of ₹1,60,000, available at a discounted price of ₹1,29,600 (about ₹32,400 per semester)." },
      { heading: "EMI", body: "EMI options start at ₹5,400/month with 0% interest for eligible applicants." },
      { heading: "Specializations", body: "Data Science, Full Stack Development, Machine Learning & AI, Cyber Security, AR/VR (Game Development)." },
      { heading: "Return on investment", body: "MCA freshers earn ₹5–9 LPA on average, with AI/ML and cyber security specializations touching ₹15+ LPA in 3–4 years." },
    ],
  },
  {
    slug: "lpu-online-mba-semesters-explained",
    title: "LPU Online MBA Semesters Explained — Subjects, Duration & Exams",
    description: "A semester-wise breakdown of the LPU Online MBA — core subjects, electives, exam pattern and capstone project.",
    category: "Curriculum",
    readTime: "6 min read",
    date: "2026-01-22",
    content: [
      { heading: "Duration", body: "The LPU Online MBA is a 2-year program divided into 4 semesters." },
      { heading: "Semester 1", body: "Managerial Economics, Financial Accounting, Marketing Management, Organizational Behaviour, Business Statistics." },
      { heading: "Semester 2", body: "Operations Management, Business Research, Human Resource Management, Financial Management, Business Communication." },
      { heading: "Semester 3", body: "Strategic Management, Legal Aspects of Business, Specialization Electives (Marketing, Finance, HR, etc.)." },
      { heading: "Semester 4", body: "Advanced Specialization Electives, Business Analytics and a Capstone Project." },
    ],
  },
  {
    slug: "online-bba-admission-lpu",
    title: "Online BBA Admission at LPU 2026 — Process, Documents & Deadlines",
    description: "Complete Online BBA admission guide at LPU 2026 — eligibility, application steps, required documents and last date.",
    category: "Admission",
    readTime: "5 min read",
    date: "2026-01-24",
    content: [
      { heading: "Eligibility", body: "10+2 from a recognized board with a minimum of 50% marks (45% for reserved categories)." },
      { heading: "Documents required", body: "10th and 12th marksheets, transfer certificate, ID proof (Aadhaar/PAN), passport-size photograph." },
      { heading: "Admission steps", body: "Book free counseling → fill online application → upload documents → pay fees → receive LMS access." },
      { heading: "Important dates", body: "LPU Online BBA runs two intake cycles — January and July. Apply early to lock scholarship benefits." },
    ],
  },
  {
    slug: "bcom-distance-education-lpu",
    title: "B.Com Distance Education at LPU — Online B.Com Fees, Value & Career",
    description: "Why online B.Com at LPU is the smart choice for commerce students — fee structure, specializations, career paths and UGC recognition.",
    category: "Programs",
    readTime: "5 min read",
    date: "2026-01-26",
    content: [
      { body: "LPU's online B.Com is a 3-year UGC-entitled program built for working professionals, family business owners and students who want a career in commerce, finance and analytics." },
      { heading: "Fees", body: "Total fee: ₹99,000 (approx. ₹16,500 per semester). EMI plans from ₹2,899/month." },
      { heading: "Specializations", body: "Financial Analytics and Accounts & Finance." },
      { heading: "Career paths", body: "Accountant, Financial Analyst, Tax Consultant, Auditor, Investment Analyst and Banking Officer." },
    ],
  },
  {
    slug: "online-mba-specializations-guide",
    title: "Online MBA Specializations Guide 2026 — Pick the Right One",
    description: "How to choose the right online MBA specialization in 2026 — Marketing, Finance, HR, Business Analytics, Data Science and more.",
    category: "Guides",
    readTime: "7 min read",
    date: "2026-01-28",
    content: [
      { body: "LPU Online MBA offers 11 in-demand specializations. Pick based on the role you want, not just the highest paying one." },
      { heading: "For sales & growth roles", body: "Marketing Management, Digital Marketing, International Business." },
      { heading: "For analytics & tech", body: "Business Analytics, Data Science, Information Technology." },
      { heading: "For operations", body: "Operations Management, Logistics & Supply Chain Management, Hospitals & Healthcare Management." },
      { heading: "For finance & people", body: "Finance Management, Human Resource Management." },
    ],
  },
  {
    slug: "online-ma-vs-offline-ma",
    title: "Online MA vs Offline MA — Which One Should You Choose in 2026?",
    description: "Detailed comparison of Online MA and Offline MA in 2026 — cost, flexibility, recognition, exams and job outcomes.",
    category: "Guides",
    readTime: "6 min read",
    date: "2026-01-30",
    content: [
      { heading: "Recognition", body: "UGC-entitled online MA is treated at par with a regular MA for higher studies (M.Phil, PhD) and government jobs." },
      { heading: "Cost", body: "Online MA at LPU: ₹65,600 total. Regular MA at a Tier-1 university can cost 2–3× more when you factor in hostel and travel." },
      { heading: "Flexibility", body: "Online MA allows you to work, study and appear for competitive exams (UPSC, NET, TET) in parallel." },
      { heading: "Verdict", body: "For working professionals and civil services aspirants, online MA is the better choice in 2026." },
    ],
  },
  {
    slug: "lpu-online-mba-placements",
    title: "LPU Online MBA Placements 2026 — Recruiters, Packages & Support",
    description: "LPU Online MBA placement report 2026 — top recruiters, highest and average packages, and how the dedicated online placement cell works.",
    category: "Placements",
    readTime: "5 min read",
    date: "2026-02-02",
    content: [
      { heading: "Placement highlights", body: "100% placement assistance, 400+ hiring partners, highest package ₹10 LPA and average package ₹5 LPA." },
      { heading: "Top recruiters", body: "Cognizant, Wipro, HDFC Bank, Amazon, Byju's and 400+ other hiring partners." },
      { heading: "Support you get", body: "1-on-1 mentor, resume building, mock interviews, LinkedIn optimization and dedicated job alerts on the LMS." },
    ],
  },
  {
    slug: "online-degree-eligibility-india",
    title: "Online Degree Eligibility in India — UG, PG and Documents Checklist",
    description: "Eligibility criteria for online UG and PG programs in India in 2026 — age limit, minimum marks, documents and category relaxations.",
    category: "Admission",
    readTime: "5 min read",
    date: "2026-02-04",
    content: [
      { heading: "UG programs", body: "10+2 from a recognized board with 50% marks (45% for reserved categories). No age limit." },
      { heading: "PG programs", body: "Bachelor's degree in a relevant discipline with 50% marks (45% for reserved categories)." },
      { heading: "Documents", body: "10th and 12th marksheets, degree/provisional certificate (for PG), ID proof, passport photo, category certificate (if applicable)." },
    ],
  },
  {
    slug: "online-bca-vs-online-bsc-it",
    title: "Online BCA vs Online B.Sc IT — Which Is Better for a Tech Career?",
    description: "Online BCA vs Online B.Sc IT in 2026 — curriculum, career scope, fees and which one pays more.",
    category: "Guides",
    readTime: "6 min read",
    date: "2026-02-06",
    content: [
      { heading: "Curriculum", body: "BCA is application-focused (programming, DBMS, web tech, cloud). B.Sc IT is more theory-heavy (networks, math, OS)." },
      { heading: "Career scope", body: "BCA grads move directly into software developer, full-stack and cloud roles. B.Sc IT grads often pursue MCA/M.Sc for research/data roles." },
      { heading: "Verdict", body: "For faster job entry, pick Online BCA. LPU Online BCA fee: ₹1,22,400 (after discount)." },
    ],
  },
  {
    slug: "online-mcom-scope-career",
    title: "Online M.Com Scope in 2026 — Career Options, Salary & Higher Studies",
    description: "Career scope of an online M.Com in 2026 — job roles, salary bands, higher studies (PhD, NET) and government exam eligibility.",
    category: "Career",
    readTime: "5 min read",
    date: "2026-02-08",
    content: [
      { heading: "Job roles", body: "Financial Analyst, Tax Consultant, Auditor, Investment Analyst, Banking Officer, Cost Accountant." },
      { heading: "Salary", body: "Freshers ₹4–7 LPA, senior professionals ₹10–20 LPA in banking, tax and audit firms." },
      { heading: "Higher studies", body: "M.Com makes you eligible for UGC-NET, PhD, and civil services attempts." },
    ],
  },
  {
    slug: "lpu-online-scholarships-2026",
    title: "LPU Online Scholarships 2026 — Merit, Defence, Sports & Divyaang",
    description: "Full list of LPU Online scholarships available in 2026 — merit, defence, government employee, sports and Divyaang scholarships.",
    category: "Fees",
    readTime: "4 min read",
    date: "2026-02-10",
    content: [
      { heading: "Merit scholarship", body: "Up to 30% off the total program fee based on your last qualifying exam." },
      { heading: "Defence scholarship", body: "For serving and retired Defence personnel and their dependents." },
      { heading: "Government employee scholarship", body: "Discount for central/state government employees and their families." },
      { heading: "Divyaang & sports", body: "Special financial support for Divyaang candidates and national/state-level sports achievers." },
    ],
  },
];

export const findBlog = (slug: string) => blogs.find((b) => b.slug === slug);
