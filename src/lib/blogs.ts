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

  /* ---------------- Pillar articles (2026) ---------------- */
  {
    slug: "lpu-online-mba-review-2026",
    title: "LPU Online MBA Review 2026 — Honest Breakdown of Fees, Faculty & Placements",
    description: "An in-depth LPU Online MBA review for 2026: curriculum quality, LMS experience, specializations, real fee structure, placement support and who the program suits.",
    category: "Review",
    readTime: "10 min read",
    date: "2026-03-02",
    featured: true,
    keyTakeaways: [
      "UGC-DEB entitled, NAAC A++ university — degree is treated at par with the on-campus MBA.",
      "Total MBA fee ₹2,02,000, currently ₹1,61,600 after discount, with 0% EMI from ₹6,733/month.",
      "11 specializations including Business Analytics, Finance, Marketing, HR and Data Science.",
      "Best suited to working professionals who need weekend live classes plus recorded lectures.",
    ],
    content: [
      { body: "The LPU Online MBA is one of the most searched online management programs in India, and for good reason — it combines a NAAC A++ university brand with a fee that sits below most private online MBAs. This review looks at what you actually get: the teaching model, the LMS, the specializations, the real cost after discounts, and the level of placement support you can realistically expect." },
      {
        heading: "Programme structure at a glance",
        body: "The MBA runs for 2 years across 4 semesters, delivered fully online with no campus visits mandated. Semesters 1 and 2 cover the management core; semesters 3 and 4 shift into your chosen specialization plus a capstone project.",
        bullets: [
          "Duration: 2 years / 4 semesters (flexible completion window)",
          "Mode: live weekend classes + recorded lectures on the LMS",
          "Assessment: continuous internal assessment + proctored end-term exams",
          "Eligibility: Bachelor's degree with 50% marks (45% for reserved categories)",
        ],
      },
      {
        heading: "Teaching quality and the LMS",
        body: "Learning happens through a dedicated LMS that hosts recorded lectures, e-books, practice quizzes and discussion boards. Live sessions are scheduled mostly on weekends and evenings so that working professionals can attend, and every session is recorded. The strongest part of the experience is asynchronous access — you can complete a full week of content on a Sunday if your job demands it. The weakest part, as with any online MBA, is peer networking; you have to actively use discussion forums and cohort groups to get value there.",
      },
      {
        heading: "Specializations worth choosing in 2026",
        body: "Not all specializations carry the same hiring demand. Based on current recruitment trends, Business Analytics, Finance and Marketing lead on job availability, while Data Science and IT suit candidates already working in tech.",
        bullets: [
          "Business Analytics — analyst and consulting roles, strong salary growth",
          "Finance Management — banking, FP&A, credit and investment roles",
          "Marketing / Digital Marketing — growth, brand and performance marketing",
          "Human Resource Management — HRBP, talent acquisition, L&D",
          "Operations & Supply Chain — manufacturing, e-commerce, logistics",
        ],
      },
      {
        heading: "Fees: what you actually pay",
        body: "The published total MBA fee is ₹2,02,000. With the current discount it comes down to ₹1,61,600, payable per semester or on 0% interest EMI starting around ₹6,733 per month. Scholarships (merit, defence, government employee, Divyaang, sports) apply on top for eligible candidates, so your final number is often lower than the sticker price. Use the fee and EMI calculator on this site to see your exact monthly outgo before you apply.",
      },
      {
        heading: "Placement support — realistic expectations",
        body: "LPU runs a dedicated online placement cell with 400+ hiring partners, resume workshops, mock interviews and job alerts inside the LMS. Average reported packages sit around ₹5 LPA with highs near ₹10 LPA, and outcomes skew heavily toward candidates who already have 2+ years of work experience. Treat placement support as a genuine accelerator, not a guaranteed job — the degree plus your existing experience is what moves your salary.",
      },
      {
        heading: "Who should and shouldn't pick this MBA",
        body: "Pick it if you are working, need UGC-entitled credentials for a promotion or a role change, and want a recognized brand at a mid-range fee. Skip it if you are a fresher expecting campus-style placements from a top IIM-tier cohort — a full-time MBA serves that goal better.",
      },
      {
        heading: "Verdict",
        body: "For working professionals in India, the LPU Online MBA is strong value in 2026: credible accreditation, a wide specialization list, transparent fees and 0% EMI. Rated 4.4/5 on overall value for money by learners who completed the program while working.",
      },
    ],
    faqs: [
      { q: "Is the LPU Online MBA valid for government jobs?", a: "Yes. It is UGC-DEB entitled, so it is accepted for government jobs, PSU roles and higher studies including PhD." },
      { q: "How much does the LPU Online MBA cost in 2026?", a: "Total fee is ₹2,02,000, discounted to ₹1,61,600, with 0% interest EMI from about ₹6,733 per month." },
      { q: "Are there live classes?", a: "Yes — live weekend and evening sessions are held and every class is recorded for later viewing on the LMS." },
      { q: "Does LPU Online provide placement assistance?", a: "Yes, through a dedicated online placement cell with 400+ hiring partners, resume support and mock interviews." },
    ],
  },
  {
    slug: "lpu-online-fees-2026",
    title: "LPU Online Fees 2026 — Complete Program-Wise Fee Structure, EMI & Hidden Costs",
    description: "Program-wise LPU Online fees for 2026 — MBA, MCA, MA, M.Sc, M.Com, BBA, BCA, BA and B.Com totals, per-semester fees, discounts, EMI plans and what is included.",
    category: "Fees",
    readTime: "9 min read",
    date: "2026-03-04",
    featured: true,
    keyTakeaways: [
      "UG programs start around ₹99,000 total; PG programs from about ₹65,600.",
      "Discounted fees apply automatically on full payment; 0% EMI is available on every program.",
      "LMS, e-books, live classes, exams and placement support are included — no separate charges.",
      "Scholarships can reduce your fee by up to 30% on top of the discount.",
    ],
    content: [
      { body: "Fees are the single biggest deciding factor for most online learners, so here is the full 2026 picture for LPU Online — program totals, per-semester splits, EMI options and the costs that people usually forget to budget for." },
      {
        heading: "Postgraduate fee structure 2026",
        body: "PG programs run 2 years across 4 semesters.",
        bullets: [
          "Online MBA — ₹2,02,000 total, ₹1,61,600 after discount, EMI from ₹6,733/mo",
          "Online MCA — ₹1,60,000 total, ₹1,29,600 after discount, EMI from ₹5,400/mo",
          "Online M.Com — mid-range PG fee with per-semester payment option",
          "Online MA — ₹65,600 total, one of the most affordable UGC-entitled PG degrees",
          "Online M.Sc — competitive fee with specialization-based variation",
        ],
      },
      {
        heading: "Undergraduate fee structure 2026",
        body: "UG programs run 3 years across 6 semesters.",
        bullets: [
          "Online BBA — ₹1,50,000 total, ₹1,22,400 after discount, EMI from ₹5,100/mo",
          "Online BCA — ₹1,22,400 after discount, EMI options available",
          "Online B.Com — ₹99,000 total (about ₹16,500 per semester), EMI from ₹2,899/mo",
          "Online BA — lowest-cost UG route with UGC entitlement",
        ],
      },
      {
        heading: "Payment options",
        body: "You can pay the full program fee upfront (highest discount), pay semester by semester, or use a 0% interest EMI plan through partner lenders. EMI approval typically needs a PAN, bank statement and address proof, and is processed within 24–48 hours.",
      },
      {
        heading: "What the fee includes — and what it doesn't",
        body: "Included: LMS access for the full duration, recorded and live classes, digital course material and e-books, internal assessments, mentor support, and placement assistance. Not included: the one-time application fee, exam re-attempt fees if you fail a paper, and optional physical convocation costs.",
      },
      {
        heading: "Scholarships that reduce your fee further",
        body: "Merit scholarship up to 30% based on your last qualifying exam, plus dedicated concessions for Defence personnel, government employees, Divyaang candidates and national/state-level sportspersons. These stack on top of the standard discount, so always check eligibility before paying.",
      },
      {
        heading: "How LPU Online fees compare",
        body: "Against Manipal Online (₹1,66,000 for MBA) and Amity Online (around ₹2,00,000), LPU's discounted MBA at ₹1,61,600 with NAAC A++ accreditation is one of the better cost-to-brand ratios in the Indian online degree market.",
      },
    ],
    faqs: [
      { q: "Can I pay LPU Online fees semester-wise?", a: "Yes. Every program supports per-semester payment, and 0% interest EMI is available as well." },
      { q: "Is the discounted fee always available?", a: "Discounts are cycle-based and tied to the January and July intakes. Confirm the current offer with a counselor before you pay." },
      { q: "Are there any hidden charges?", a: "No. The program fee covers LMS, classes, study material and exams. Only the application fee and re-attempt exam fees are separate." },
      { q: "Do scholarships apply on top of the discount?", a: "Yes, eligible candidates can combine a scholarship with the standard fee discount." },
    ],
  },
  {
    slug: "lpu-online-admission-guide-2026",
    title: "LPU Online Admission Guide 2026 — Process, Documents, Dates & Common Mistakes",
    description: "Step-by-step LPU Online admission guide for 2026 — eligibility, application process, document checklist, fee payment, LMS activation and intake deadlines.",
    category: "Admission",
    readTime: "8 min read",
    date: "2026-03-06",
    featured: true,
    keyTakeaways: [
      "No entrance exam — admission is merit-based on your last qualifying degree.",
      "Two intakes every year: January and July.",
      "The full process takes 2–4 days from application to LMS access.",
      "Applying early protects both the scholarship slab and the fee discount.",
    ],
    content: [
      { body: "LPU Online admissions are refreshingly simple — there is no entrance exam and the whole process is online. The catch is that most delays come from avoidable document errors. This guide walks through every step and flags the mistakes that hold applications up." },
      {
        heading: "Step 1 — Confirm eligibility",
        body: "UG programs need 10+2 from a recognized board with 50% marks (45% for reserved categories). PG programs need a bachelor's degree with 50% marks (45% relaxed). There is no upper age limit for any online program.",
      },
      {
        heading: "Step 2 — Free counseling (recommended)",
        body: "Speak to an advisor before you fill the form. Specialization choice is the one decision you cannot easily reverse after semester 2, and a 15-minute call usually saves candidates from picking the wrong stream.",
      },
      {
        heading: "Step 3 — Fill the online application",
        body: "Register with your mobile number and email, then complete personal, academic and program details. Enter your name exactly as printed on your 10th marksheet — mismatches are the single most common cause of verification delays.",
      },
      {
        heading: "Step 4 — Upload documents",
        body: "Keep clear scans ready in PDF or JPG under the size limit.",
        bullets: [
          "10th and 12th marksheets",
          "Graduation degree / provisional certificate (PG applicants)",
          "Government photo ID — Aadhaar or PAN",
          "Passport-size photograph and signature",
          "Category or scholarship supporting certificate, if applicable",
        ],
      },
      {
        heading: "Step 5 — Pay the fee",
        body: "Choose full payment, semester-wise payment or 0% EMI. Payment confirmation is instant for cards and UPI; EMI approval can take up to 48 hours.",
      },
      {
        heading: "Step 6 — Verification and LMS access",
        body: "Documents are verified within 24–48 hours. Once cleared, you receive your enrolment number and LMS credentials by email and can start attending classes immediately.",
      },
      {
        heading: "Mistakes that delay admission",
        body: "Blurred document scans, name mismatches between marksheet and ID, uploading a mark statement instead of a degree certificate for PG, and applying in the last week of an intake when verification queues are longest.",
      },
      {
        heading: "Important dates for 2026",
        body: "January intake applications typically close in late January; July intake closes in late July. Scholarship slabs are allotted on a first-come basis, so early applicants get the better deal.",
      },
    ],
    faqs: [
      { q: "Is there an entrance exam for LPU Online?", a: "No. Admission is merit-based on your last qualifying examination." },
      { q: "How long does LPU Online admission take?", a: "Typically 2–4 days from submitting the application to receiving LMS credentials." },
      { q: "Can I apply without a graduation certificate?", a: "PG applicants can apply with a provisional certificate, but the final degree must be submitted before the first exam." },
      { q: "When are the LPU Online intakes?", a: "There are two intake cycles each year — January and July." },
    ],
  },
  {
    slug: "lpu-online-scholarship-guide-2026",
    title: "LPU Online Scholarship 2026 — Every Scheme, Eligibility & How to Claim It",
    description: "Complete guide to LPU Online scholarships in 2026 — merit, defence, government employee, Divyaang and sports schemes, discount slabs, documents and claim process.",
    category: "Scholarship",
    readTime: "7 min read",
    date: "2026-03-08",
    featured: true,
    keyTakeaways: [
      "Merit scholarships go up to 30% of the total program fee.",
      "Defence, government employee, Divyaang and sports schemes run in parallel.",
      "You must claim the scholarship before paying the fee — it is not applied retrospectively.",
      "Only one scholarship applies per learner; the highest eligible slab is granted.",
    ],
    content: [
      { body: "A scholarship is the fastest way to cut your online degree cost, and most LPU Online applicants qualify for at least one scheme. Here is what is on offer in 2026, who qualifies and exactly how to claim it." },
      {
        heading: "Merit scholarship",
        body: "Based on the percentage in your last qualifying exam (12th for UG, graduation for PG). Higher percentage bands unlock larger waivers, going up to 30% of the total program fee. You need self-attested marksheets at the time of application.",
      },
      {
        heading: "Defence scholarship",
        body: "For serving and retired Defence, Paramilitary and Police personnel and their dependents. Requires a service certificate, discharge book or dependent card.",
      },
      {
        heading: "Government employee scholarship",
        body: "Central and state government employees and their immediate family members qualify. An employee ID plus a department letter is usually enough.",
      },
      {
        heading: "Divyaang scholarship",
        body: "Candidates with 40% or more certified disability receive a dedicated fee concession. Submit a valid UDID or medical board certificate.",
      },
      {
        heading: "Sports scholarship",
        body: "For national and state-level sports achievers. Attach the participation or medal certificate issued by a recognized federation.",
      },
      {
        heading: "How to claim your scholarship",
        body: "Declare the scheme in the application form, upload the supporting certificate at the document stage, and wait for the revised fee quote before making payment. If you pay the full fee first, the waiver cannot be adjusted afterwards.",
      },
      {
        heading: "Scholarship plus discount stacking",
        body: "The scholarship applies on the program fee, and the current intake discount applies separately, so an eligible candidate can land well below the published price. A counselor can compute your exact net payable in one call.",
      },
    ],
    faqs: [
      { q: "Can I claim two LPU Online scholarships together?", a: "No. Only one scheme applies per learner — the highest eligible waiver is granted." },
      { q: "What is the maximum LPU Online scholarship?", a: "Merit scholarships go up to 30% of the total program fee." },
      { q: "Can I claim a scholarship after paying fees?", a: "No. The scholarship must be declared and approved before the fee payment is made." },
      { q: "Do scholarships apply to every semester?", a: "Yes, an approved waiver applies across the program duration subject to satisfactory academic progress." },
    ],
  },
  {
    slug: "lpu-online-exam-pattern-2026",
    title: "LPU Online Exam Pattern 2026 — Proctored Exams, Marks Split & Passing Criteria",
    description: "How LPU Online exams work in 2026 — internal assessment weightage, end-term proctored exam format, passing marks, re-attempt rules and preparation tips.",
    category: "Exams",
    readTime: "7 min read",
    date: "2026-03-10",
    featured: true,
    keyTakeaways: [
      "Exams are fully online and remotely proctored — no exam centre visit needed.",
      "Final marks combine continuous internal assessment with an end-term exam.",
      "Assignments and quizzes through the semester make passing far easier.",
      "Re-attempts are allowed in the next exam cycle for backlog papers.",
    ],
    content: [
      { body: "One of the most common questions before enrolling is simply: how are online exams conducted, and are they hard? Here is exactly how the LPU Online assessment system works and how to prepare for it while holding a full-time job." },
      {
        heading: "Two components of your final score",
        body: "Every course is graded on continuous internal assessment plus an end-term examination. Internal assessment comes from quizzes, assignments and discussion participation completed through the semester; the end-term is a single proctored exam per subject.",
      },
      {
        heading: "How remote proctoring works",
        body: "You take the exam from home on a laptop or desktop with a working webcam, microphone and stable internet. The system verifies your identity, monitors the session via camera and screen tracking, and flags tab switching. Slot booking is done in advance from the LMS, with multiple time windows to pick from.",
        bullets: [
          "Laptop/desktop with webcam and mic (mobile is not recommended)",
          "Stable broadband — 2 Mbps or better",
          "Government photo ID for identity verification",
          "A quiet, well-lit room with no other person present",
        ],
      },
      {
        heading: "Question format",
        body: "Papers typically mix objective questions with short and long descriptive answers depending on the subject. Technical programs such as MCA and BCA include applied and case-based questions; management papers lean on scenario analysis.",
      },
      {
        heading: "Passing criteria and re-attempts",
        body: "You must clear the aggregate passing threshold for each course, combining internals and the end-term. If you miss or fail a paper, it becomes a backlog and can be re-attempted in the next exam cycle on payment of a re-attempt fee — it does not stop you from progressing to the next semester.",
      },
      {
        heading: "How to prepare while working",
        body: "Do not save internals for the end — they are the easiest marks in the system. Watch recorded lectures at 1.5x during the week, attempt the LMS practice quizzes after each module, and reserve the two weekends before the end-term for revision and past-paper practice.",
      },
    ],
    faqs: [
      { q: "Do I have to visit a centre for LPU Online exams?", a: "No. All end-term exams are conducted online with remote proctoring from your own location." },
      { q: "What happens if I fail a paper?", a: "The paper becomes a backlog and can be re-attempted in the next exam cycle on payment of a re-attempt fee." },
      { q: "Can I take the exam on a mobile phone?", a: "A laptop or desktop with a webcam is required for proctoring; mobile devices are not recommended." },
      { q: "How much weight do internal assessments carry?", a: "Internals from quizzes and assignments form a significant part of the final score alongside the end-term exam." },
    ],
  },
  {
    slug: "lpu-online-degree-validity",
    title: "LPU Online Degree Validity — Is It Valid for Jobs, PhD & Abroad? (2026)",
    description: "Is an LPU Online degree valid? UGC-DEB entitlement, NAAC A++ accreditation, WES recognition, government job acceptance, PhD eligibility and how to verify your degree.",
    category: "Recognition",
    readTime: "8 min read",
    date: "2026-03-12",
    featured: true,
    keyTakeaways: [
      "UGC-DEB entitled online degrees are legally equivalent to on-campus degrees.",
      "Accepted for government jobs, PSU roles, UPSC and state services.",
      "Valid for PhD, NET and higher studies in India.",
      "WES recognition supports applications to Canada and the USA.",
    ],
    content: [
      { body: "Degree validity is the number one anxiety for anyone considering an online degree, and the answer for LPU Online is straightforward: it is a UGC-DEB entitled degree from a NAAC A++ accredited university, and by law it carries the same standing as the equivalent on-campus degree." },
      {
        heading: "The legal position",
        body: "Under UGC (Open and Distance Learning Programmes and Online Programmes) Regulations, degrees awarded through entitled online programmes are treated at par with degrees awarded in conventional mode. LPU appears on the UGC's list of entitled universities, and its degree certificates do not carry any 'online' distinction that marks them apart from campus degrees.",
      },
      {
        heading: "Government jobs and competitive exams",
        body: "An LPU Online degree is accepted as the qualifying degree for UPSC, SSC, state PSC, banking exams, PSU recruitment and teaching eligibility tests, provided you meet the specific notification's subject and percentage requirements.",
      },
      {
        heading: "Private sector hiring",
        body: "Employers verify accreditation, not delivery mode. Recruiters across IT services, BFSI, e-commerce and consulting hire LPU Online graduates, and 400+ hiring partners work with the university's online placement cell. What matters in interviews is your specialization and demonstrated skills.",
      },
      {
        heading: "Higher studies and PhD",
        body: "The degree makes you eligible for postgraduate admission, UGC-NET and PhD programmes at Indian universities. Some institutions ask for a UGC entitlement reference — the public UGC notice list covers this.",
      },
      {
        heading: "Studying or working abroad",
        body: "LPU is WES recognized, which is the credential evaluation body used for Canadian and US immigration and admissions. That means your transcripts can be evaluated for equivalence rather than being rejected outright, though each destination university still applies its own admission criteria.",
      },
      {
        heading: "How to verify a degree",
        body: "Check the university's name in the UGC-DEB list of entitled online universities for the relevant academic session, confirm the NAAC grade on the NAAC portal, and validate the digital signature on the issued certificate. Employers can also verify enrolment through the university registry and the National Academic Depository.",
      },
      {
        heading: "What an online degree cannot do",
        body: "Be realistic: online mode is not permitted for regulated professional programmes such as medicine, nursing, law practice enrolment, engineering B.Tech and pharmacy. If your target career needs one of those, an online degree is not the route.",
      },
    ],
    faqs: [
      { q: "Is an LPU Online degree valid for government jobs?", a: "Yes. It is UGC-DEB entitled and accepted for government, PSU and competitive exam eligibility." },
      { q: "Does the certificate mention 'online'?", a: "No. The degree certificate is equivalent to the on-campus degree for the same program." },
      { q: "Is the degree valid abroad?", a: "LPU is WES recognized, which supports credential evaluation for Canada and the USA. Individual universities and employers apply their own criteria." },
      { q: "Can I do a PhD after an LPU Online master's?", a: "Yes. A UGC-entitled online master's degree makes you eligible for PhD admission and UGC-NET." },
    ],
  },
];


export const findBlog = (slug: string) => blogs.find((b) => b.slug === slug);
