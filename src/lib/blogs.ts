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
      { heading: "Average starting salary", body: "MBA freshers: Rs. 5–8 LPA (up to Rs. 15 LPA for top specializations like Finance/Business Analytics). MCA freshers: Rs. 5–9 LPA in software roles, Rs. 8–15 LPA for AI/ML and cyber security specializations." },
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
      { heading: "Step 3 — Pay the fees", body: "Choose full payment or 0% interest EMI. Total MBA fee after discount: Rs. 1,61,600 (Rs. 6,733/mo EMI)." },
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
      { body: "The LPU Online BBA program has a total fee of Rs. 1,50,000, currently available at a discounted price of Rs. 1,22,400 (about Rs. 20,400 per semester)." },
      { heading: "EMI options", body: "0% interest EMI starting from Rs. 5,100 per month for eligible candidates." },
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
      { body: "LPU Online MCA has a total fee of Rs. 1,60,000, available at a discounted price of Rs. 1,29,600 (about Rs. 32,400 per semester)." },
      { heading: "EMI", body: "EMI options start at Rs. 5,400/month with 0% interest for eligible applicants." },
      { heading: "Specializations", body: "Data Science, Full Stack Development, Machine Learning & AI, Cyber Security, AR/VR (Game Development)." },
      { heading: "Return on investment", body: "MCA freshers earn Rs. 5–9 LPA on average, with AI/ML and cyber security specializations touching Rs. 15+ LPA in 3–4 years." },
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
      { heading: "Fees", body: "Total fee: Rs. 99,000 (approx. Rs. 16,500 per semester). EMI plans from Rs. 2,899/month." },
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
      { heading: "Cost", body: "Online MA at LPU: Rs. 65,600 total. Regular MA at a Tier-1 university can cost 2–3× more when you factor in hostel and travel." },
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
      { heading: "Placement highlights", body: "100% placement assistance, 400+ hiring partners, highest package Rs. 10 LPA and average package Rs. 5 LPA." },
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
      { heading: "Verdict", body: "For faster job entry, pick Online BCA. LPU Online BCA fee: Rs. 1,22,400 (after discount)." },
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
      { heading: "Salary", body: "Freshers Rs. 4–7 LPA, senior professionals Rs. 10–20 LPA in banking, tax and audit firms." },
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
      "Total MBA fee Rs. 2,02,000, currently Rs. 1,61,600 after discount, with 0% EMI from Rs. 6,733/month.",
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
        body: "The published total MBA fee is Rs. 2,02,000. With the current discount it comes down to Rs. 1,61,600, payable per semester or on 0% interest EMI starting around Rs. 6,733 per month. Scholarships (merit, defence, government employee, Divyaang, sports) apply on top for eligible candidates, so your final number is often lower than the sticker price. Use the fee and EMI calculator on this site to see your exact monthly outgo before you apply.",
      },
      {
        heading: "Placement support — realistic expectations",
        body: "LPU runs a dedicated online placement cell with 400+ hiring partners, resume workshops, mock interviews and job alerts inside the LMS. Average reported packages sit around Rs. 5 LPA with highs near Rs. 10 LPA, and outcomes skew heavily toward candidates who already have 2+ years of work experience. Treat placement support as a genuine accelerator, not a guaranteed job — the degree plus your existing experience is what moves your salary.",
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
      { q: "How much does the LPU Online MBA cost in 2026?", a: "Total fee is Rs. 2,02,000, discounted to Rs. 1,61,600, with 0% interest EMI from about Rs. 6,733 per month." },
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
      "UG programs start around Rs. 99,000 total; PG programs from about Rs. 65,600.",
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
          "Online MBA — Rs. 2,02,000 total, Rs. 1,61,600 after discount, EMI from Rs. 6,733/mo",
          "Online MCA — Rs. 1,60,000 total, Rs. 1,29,600 after discount, EMI from Rs. 5,400/mo",
          "Online M.Com — mid-range PG fee with per-semester payment option",
          "Online MA — Rs. 65,600 total, one of the most affordable UGC-entitled PG degrees",
          "Online M.Sc — competitive fee with specialization-based variation",
        ],
      },
      {
        heading: "Undergraduate fee structure 2026",
        body: "UG programs run 3 years across 6 semesters.",
        bullets: [
          "Online BBA — Rs. 1,50,000 total, Rs. 1,22,400 after discount, EMI from Rs. 5,100/mo",
          "Online BCA — Rs. 1,22,400 after discount, EMI options available",
          "Online B.Com — Rs. 99,000 total (about Rs. 16,500 per semester), EMI from Rs. 2,899/mo",
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
        body: "Against Manipal Online (Rs. 1,66,000 for MBA) and Amity Online (around Rs. 2,00,000), LPU's discounted MBA at Rs. 1,61,600 with NAAC A++ accreditation is one of the better cost-to-brand ratios in the Indian online degree market.",
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
  {
    slug: "lpu-online-courses-list-2026",
    title: "LPU Online Courses List 2026 — All UG, PG & Diploma Programs With Fees",
    description: "Complete LPU Online courses list for 2026 — every UG, PG and diploma program with duration, total fees, specializations, eligibility and admission process.",
    category: "Courses",
    readTime: "12 min read",
    date: "2026-02-02",
    featured: true,
    keyTakeaways: [
      "LPU Online offers UG (BBA, BCA, BA), PG (MBA, MCA, M.Sc, MA, M.Com) and diploma (DBA, DCA) programs.",
      "Program fees range from Rs. 50,000 for diplomas to Rs. 2,00,000 for the MBA (before discounts).",
      "Every program is UGC-DEB entitled; LPU is NAAC A++ and ranked among the top universities in NIRF.",
      "Admission is open twice a year (January and July cycles) and is fully online with no entrance exam.",
    ],
    content: [
      { body: "Lovely Professional University (LPU) runs one of India's widest online program portfolios — management, computer applications, commerce, arts and sciences, at undergraduate, postgraduate and diploma level. This guide lists every LPU Online course available for the 2026 admission cycle with duration, total fees, specializations, eligibility and who each program suits best." },
      {
        heading: "LPU at a glance",
        body: "LPU is a private university established in 2005 (Lovely Professional University Act) with a campus in Phagwara, Punjab, and one of the largest student bodies in India. Its online school operates under UGC-DEB entitlement.",
        bullets: [
          "NAAC A++ accredited",
          "UGC entitled for online programs; UGC Category-1 university",
          "AICTE approval norms followed for technical programs",
          "WES recognised — supports credential evaluation for Canada and the USA",
          "Dedicated online LMS with recorded lectures, live classes and proctored online exams",
        ],
      },
      {
        heading: "LPU Online courses list — quick view",
        body: "Here is the full program list by level.",
        bullets: [
          "UG: Online BBA (3 years), Online BCA (3 years), Online BA (3 years)",
          "PG: Online MBA (2 years), Online MCA (2 years), Online M.Sc (2 years), Online MA (2 years), Online M.Com (2 years)",
          "Diploma: Diploma in Business Administration (DBA), Diploma in Computer Applications (DCA) — 1 year each",
        ],
      },
      {
        heading: "Management courses and fees",
        body: "Management is LPU Online's largest vertical. The Online MBA carries a wide specialization menu, and BBA is the feeder UG program.",
        bullets: [
          "Online BBA — 3 years — Rs. 1,50,000 total (indicative full fee before scholarship)",
          "Online MBA — 2 years — Rs. 2,00,000 total, all specializations priced the same",
          "MBA specializations: Finance, Marketing, HRM, Business Analytics, Data Science, Digital Marketing, Information Technology, Operations, International Business, Logistics & Supply Chain, Hospital & Healthcare Management",
          "Diploma in Business Administration (DBA) — 1 year — Rs. 50,000",
        ],
      },
      {
        heading: "Computer application courses and fees",
        body: "For IT and software careers, LPU Online offers BCA at UG level and MCA at PG level, both with modern electives.",
        bullets: [
          "Online BCA — 3 years — Rs. 1,50,000 total",
          "Online MCA — 2 years — Rs. 1,48,000 total",
          "MCA specializations: Data Science, Machine Learning & AI, Cyber Security, Full Stack Web Development",
          "Diploma in Computer Applications (DCA) — 1 year — Rs. 50,000",
        ],
      },
      {
        heading: "Commerce, arts and science courses and fees",
        body: "These are the most affordable degrees in the portfolio and are popular with working professionals, teachers and competitive-exam aspirants.",
        bullets: [
          "Online BA — 3 years — Rs. 1,20,000 total",
          "Online M.Com — 2 years — Rs. 1,00,000 total",
          "Online MA (English, Sociology, Political Science, History, Economics) — 2 years — Rs. 80,000 total",
          "Online M.Sc (Mathematics, Economics) — 2 years — Rs. 80,000 total",
        ],
      },
      {
        heading: "Eligibility for LPU Online courses",
        body: "There is no entrance exam. Eligibility is purely qualification based, verified during document upload.",
        bullets: [
          "UG (BBA, BCA, BA): 10+2 from a recognised board, any stream",
          "MBA / M.Com: bachelor's degree in any discipline, typically 50% aggregate (45% for reserved categories)",
          "MCA: bachelor's degree with Mathematics at 10+2 or graduation level (BCA/B.Sc IT preferred)",
          "MA / M.Sc: bachelor's degree, preferably in a related discipline",
          "Diplomas: 10+2 pass",
        ],
      },
      {
        heading: "Admission process step by step",
        body: "The whole application is online and usually completes within 48 hours once documents and fees are in.",
        bullets: [
          "Step 1: Free counseling call to shortlist the program and specialization",
          "Step 2: Register and fill the online application form",
          "Step 3: Upload documents — 10th and 12th marksheets, degree marksheet for PG, photo ID, passport photo, category certificate if applicable",
          "Step 4: Pay full fee or choose a 0% interest EMI plan (semester-wise payment is also allowed)",
          "Step 5: Receive enrolment number and LMS credentials, then start classes",
        ],
      },
      {
        heading: "How to choose the right LPU Online course",
        body: "Match the program to the career you want, not just the fee. A quick decision guide: pick MBA for management and leadership tracks, MCA for software and data roles, M.Com for finance/accounting and teaching, MA for civil services and content careers, and BBA/BCA/BA if you are still at the undergraduate stage and want a flexible degree alongside a job or family responsibilities.",
      },
    ],
    faqs: [
      { q: "How many courses does LPU Online offer?", a: "Ten core programs — BBA, BCA, BA at UG level; MBA, MCA, M.Sc, MA and M.Com at PG level; and two one-year diplomas (DBA, DCA) — with multiple specializations inside MBA and MCA." },
      { q: "Which is the cheapest LPU Online degree?", a: "Online MA and Online M.Sc at Rs. 80,000 total are the most affordable degrees; the one-year diplomas cost Rs. 50,000." },
      { q: "Is there an entrance exam for LPU Online?", a: "No. Admission is merit-based on your previous qualification; there is no entrance test." },
      { q: "Can I pay LPU Online fees in instalments?", a: "Yes. You can pay semester-wise or use a 0% interest EMI plan through partner lenders." },
      { q: "Are LPU Online degrees valid for government jobs?", a: "Yes. They are UGC-DEB entitled and treated at par with on-campus degrees for government and private employment." },
    ],
  },
  {
    slug: "lpu-online-bba-fees-2026",
    title: "LPU Online BBA Fees 2026 — Full Fee Structure, EMI & Scholarships",
    description: "LPU Online BBA fees 2026 explained — total fee, semester-wise breakup, EMI plans, scholarships, eligibility and what is included in the fee.",
    category: "Fees",
    readTime: "10 min read",
    date: "2026-02-03",
    featured: true,
    keyTakeaways: [
      "LPU Online BBA total fee is Rs. 1,50,000 for 3 years (indicative full fee before scholarship).",
      "Fees can be paid per semester or via 0% interest EMI — no lump sum required.",
      "The fee covers LMS access, recorded and live classes, e-content and online exams.",
      "Eligibility is only 10+2 in any stream; there is no entrance exam.",
    ],
    content: [
      { body: "The Online BBA from Lovely Professional University is a three-year, six-semester UGC-entitled undergraduate management degree. Before you apply, the single most important number is the fee — and how you can spread it. This guide breaks down the LPU Online BBA fee structure for 2026, the payment options, what is included and what is not, and how scholarships change the final amount you pay." },
      {
        heading: "LPU Online BBA at a glance",
        body: "A quick snapshot of the program before we get into money.",
        bullets: [
          "Program: Online Bachelor of Business Administration (BBA)",
          "Duration: 3 years / 6 semesters (maximum duration allowed: 6 years)",
          "Mode: 100% online — recorded lectures, live sessions and online proctored exams",
          "Approval: UGC entitled, NAAC A++ university",
          "Eligibility: 10+2 or equivalent from a recognised board, any stream",
        ],
      },
      {
        heading: "LPU Online BBA fee structure 2026",
        body: "The indicative total programme fee is Rs. 1,50,000 for the full three years. Split across six semesters, that is roughly Rs. 25,000 per semester, or about Rs. 50,000 per year. Scholarships and early-bird discounts reduce this — our counselors apply the current cycle's discount on your application, and the reduced amount is what appears on your fee receipt.",
        bullets: [
          "Total programme fee: Rs. 1,50,000 (indicative, before discount)",
          "Per semester: approximately Rs. 25,000",
          "Per year: approximately Rs. 50,000",
          "Registration/application fee: paid once at admission",
          "Examination fee: charged per semester as per university norms",
        ],
      },
      {
        heading: "EMI and instalment options",
        body: "You do not have to pay the full programme fee upfront. Three routes exist: pay semester-wise (the default), pay yearly, or convert a semester's fee into a 0% interest EMI through partner financing. Monthly EMIs typically land in the Rs. 4,000–Rs. 6,500 range depending on tenure and the discount applied. Credit card EMI and net-banking instalments are also accepted.",
      },
      {
        heading: "Scholarships that reduce your BBA fee",
        body: "LPU runs several fee-concession categories for online learners. Eligibility is verified at admission with supporting documents.",
        bullets: [
          "Merit scholarship based on 10+2 percentage",
          "Defence personnel and their dependents",
          "Divyangjan (differently-abled) learners",
          "Government employees and alumni concessions",
          "Early-bird / one-shot payment discounts during each admission cycle",
        ],
      },
      {
        heading: "What the fee includes",
        body: "Understanding inclusions prevents surprise costs later.",
        bullets: [
          "Full LMS access with recorded video lectures and e-books",
          "Live interactive classes and doubt-clearing sessions",
          "Assignments, self-assessment quizzes and semester exams",
          "Placement assistance, resume workshops and interview prep",
          "Degree issuance on successful completion",
        ],
      },
      {
        heading: "Is the LPU Online BBA fee worth it?",
        body: "Compared with on-campus BBA programs at comparable private universities, which typically cost Rs. 3–6 lakh over three years plus hostel and travel, an online BBA at Rs. 1.5 lakh with no relocation is a strong ROI play — especially if you are working or running a family business while studying. The degree carries no 'online' mention on the certificate and is UGC-entitled for further study, including MBA admission.",
      },
      {
        heading: "How to pay",
        body: "After your application is verified, you receive a secure payment link. Pay by UPI, net banking, debit/credit card or through an EMI partner. A receipt and enrolment number are issued immediately, and LMS credentials follow within 24–48 hours.",
      },
    ],
    faqs: [
      { q: "What is the total LPU Online BBA fee?", a: "The indicative total programme fee is Rs. 1,50,000 for three years, before any scholarship or early-bird discount." },
      { q: "Can I pay LPU Online BBA fees semester-wise?", a: "Yes. Semester-wise payment is the default option, at roughly Rs. 25,000 per semester." },
      { q: "Is EMI available with zero interest?", a: "Yes. 0% interest EMI plans are available through partner lenders and on most credit cards." },
      { q: "Are exam fees included in the programme fee?", a: "Examination fees are charged separately each semester as per university norms." },
      { q: "Do I get a refund if I withdraw?", a: "Refunds follow the UGC refund policy applicable at the time of withdrawal; timelines and the amount depend on when you cancel." },
    ],
  },
  {
    slug: "lpu-online-bcom-guide-2026",
    title: "LPU Online B.Com 2026 — Fees, Syllabus, Eligibility & Career Scope",
    description: "Complete guide to B.Com through LPU Online and distance-style flexible learning — fee structure, semester syllabus, eligibility, admission and career options.",
    category: "Courses",
    readTime: "10 min read",
    date: "2026-02-04",
    keyTakeaways: [
      "LPU's commerce route online covers UG commerce study and the two-year Online M.Com at Rs. 1,00,000.",
      "Commerce learners get accounting, taxation, audit and finance foundations mapped to CA/CS/CMA prep.",
      "Study is fully online with recorded lectures — ideal alongside a job or professional-course coaching.",
      "Degrees are UGC entitled and accepted for government jobs, PG admission and professional exams.",
    ],
    content: [
      { body: "Commerce remains one of the highest-enrolment streams in India, and a flexible online commerce degree from a NAAC A++ university is a practical option if you are working, preparing for CA/CS/CMA, or running a family business. This guide covers what LPU offers on the commerce side online, what it costs, what you study semester by semester, and where it takes you." },
      {
        heading: "Commerce programs available online at LPU",
        body: "LPU Online's commerce and business portfolio spans UG and PG.",
        bullets: [
          "Online BBA — 3 years — Rs. 1,50,000 (business + commerce foundation)",
          "Online M.Com — 2 years — Rs. 1,00,000 (advanced accounting, finance and taxation)",
          "Diploma in Business Administration — 1 year — Rs. 50,000",
          "Online MBA (Finance) — 2 years — Rs. 2,00,000, the natural PG upgrade for commerce graduates",
        ],
      },
      {
        heading: "Eligibility",
        body: "Commerce is an open-entry stream at LPU Online — no entrance test.",
        bullets: [
          "UG commerce/business route: 10+2 in any stream from a recognised board",
          "M.Com: bachelor's degree, preferably B.Com/BBA, typically 50% aggregate (45% reserved)",
          "No age limit; working professionals are actively encouraged to apply",
        ],
      },
      {
        heading: "What you study",
        body: "A typical commerce syllabus at LPU Online is built semester-wise, moving from fundamentals to applied finance.",
        bullets: [
          "Financial Accounting and Corporate Accounting",
          "Business Economics, Statistics and Quantitative Techniques",
          "Cost and Management Accounting",
          "Income Tax and GST / Indirect Taxation",
          "Auditing, Corporate Law and Business Regulation",
          "Financial Management, Banking and Insurance",
          "Electives and a capstone project in the final semesters",
        ],
      },
      {
        heading: "How online commerce study actually works",
        body: "You get a full LMS with recorded lectures you can rewatch at 1.5x, weekly live classes with faculty, downloadable e-books, self-assessment quizzes and assignments. Exams are online and proctored, scheduled at the end of each semester, with a window that accommodates working learners.",
      },
      {
        heading: "Career scope after an online commerce degree",
        body: "A UGC-entitled commerce degree qualifies you for the same roles as a regular one.",
        bullets: [
          "Accountant, Junior Accountant, Accounts Executive (Rs. 2.5–5 LPA to start)",
          "Tax Assistant / GST Practitioner support roles",
          "Financial Analyst and Audit Assistant in mid-size firms",
          "Banking and insurance roles, including IBPS and SBI recruitment eligibility",
          "Government jobs via SSC CGL, state PSC and railway recruitment",
          "Self-employment: bookkeeping, GST filing and financial consulting",
        ],
      },
      {
        heading: "Commerce degree plus a professional course",
        body: "The biggest advantage of an online commerce degree is that it frees up your day. Many learners pair it with CA, CS or CMA coaching, since attendance is not required and lectures are recorded. The degree also satisfies the graduation requirement for those professional finals, and for MBA and M.Com admission afterwards.",
      },
    ],
    faqs: [
      { q: "Is an online commerce degree from LPU valid?", a: "Yes. LPU's online programs are UGC-DEB entitled and the university is NAAC A++ accredited, so the degree is valid for jobs, government exams and higher study." },
      { q: "What does the LPU Online M.Com cost?", a: "The indicative total fee is Rs. 1,00,000 for two years, payable semester-wise or via 0% interest EMI." },
      { q: "Can I do CA along with an online commerce degree?", a: "Yes. Since there is no attendance requirement and lectures are recorded, most learners pair the degree with CA, CS or CMA preparation." },
      { q: "Are there placements for online commerce learners?", a: "Yes. LPU Online's career services offer resume building, mock interviews and access to recruiter drives open to online learners." },
      { q: "Can I appear for banking exams after this degree?", a: "Yes. IBPS, SBI, RBI and SSC recruitment accept any UGC-recognised graduation, including online degrees." },
    ],
  },
  {
    slug: "lpu-online-ba-guide-2026",
    title: "LPU Online BA 2026 — Fees, Subjects, Eligibility & Career Options",
    description: "LPU Online BA guide for 2026 — Rs. 1,20,000 total fee, subject combinations, eligibility, admission process, exam pattern and career paths after graduation.",
    category: "Courses",
    readTime: "9 min read",
    date: "2026-02-05",
    keyTakeaways: [
      "LPU Online BA is a 3-year UGC-entitled degree with an indicative total fee of Rs. 1,20,000.",
      "Eligibility is 10+2 in any stream — no entrance exam, no age limit.",
      "It is the most popular route for UPSC/state PSC aspirants who want a flexible degree.",
      "Graduates can move to Online MA (Rs. 80,000) or Online MBA at LPU without leaving their job.",
    ],
    content: [
      { body: "The Online BA from Lovely Professional University is designed for learners who want a recognised undergraduate degree without giving up work, coaching or family commitments. It is a three-year, six-semester humanities degree delivered fully online through LPU's LMS, with online proctored exams." },
      {
        heading: "Program snapshot",
        body: "The essentials in one place.",
        bullets: [
          "Program: Online Bachelor of Arts (BA)",
          "Duration: 3 years / 6 semesters",
          "Indicative total fee: Rs. 1,20,000 (about Rs. 20,000 per semester before discount)",
          "Eligibility: 10+2 from a recognised board, any stream",
          "Approval: UGC entitled; LPU is NAAC A++ and UGC Category-1",
        ],
      },
      {
        heading: "Subjects and specialisation areas",
        body: "The BA curriculum mixes core humanities with communication and analytical skills.",
        bullets: [
          "English literature and communication skills",
          "Political Science and Indian polity",
          "Sociology and social psychology",
          "History and Indian heritage",
          "Economics fundamentals",
          "Environmental studies, research methods and a final-semester project",
        ],
      },
      {
        heading: "Why BA online works for competitive-exam aspirants",
        body: "UPSC, state PSC, SSC and teaching-eligibility aspirants need a graduation degree, but classroom attendance eats the study hours they need. An online BA solves that: lectures are recorded, exams are scheduled in windows, and the syllabus itself (polity, history, economics, sociology) overlaps heavily with general studies preparation. You build exam knowledge and earn the qualifying degree at the same time.",
      },
      {
        heading: "Admission process",
        body: "Applications open in the January and July cycles.",
        bullets: [
          "Free counseling call to confirm eligibility and subject choice",
          "Online application form with personal and academic details",
          "Upload 10th and 12th marksheets, ID proof and photograph",
          "Pay the first semester fee (full payment, semester-wise or EMI)",
          "Receive enrolment number and LMS access within 24–48 hours",
        ],
      },
      {
        heading: "Exam pattern and evaluation",
        body: "Each course carries internal assessment (assignments and quizzes) plus an end-semester online proctored exam. Internals typically contribute around 30% and the term-end exam the remaining 70%. Exams are attempted from home on a laptop with a webcam, and re-attempt windows are available if you miss a scheduled slot.",
      },
      {
        heading: "Careers after an Online BA",
        body: "A BA is a launchpad rather than a terminal qualification, and the paths are wide.",
        bullets: [
          "Government services: UPSC, state PSC, SSC CGL, railways, police services",
          "Teaching after B.Ed or an MA plus UGC-NET",
          "Content writing, editing, digital marketing and communications",
          "HR, customer success and operations executive roles",
          "Higher study: Online MA (Rs. 80,000), MBA, MSW or LLB (three-year)",
        ],
      },
    ],
    faqs: [
      { q: "What is the LPU Online BA fee?", a: "The indicative total programme fee is Rs. 1,20,000 for three years, payable semester-wise or through 0% interest EMI." },
      { q: "Is LPU Online BA valid for UPSC?", a: "Yes. UPSC accepts any degree from a UGC-recognised university, including UGC-entitled online degrees." },
      { q: "Do I need to visit the campus?", a: "No. Classes, assignments and exams are all online; the degree is delivered without any mandatory campus visit." },
      { q: "Can I do a B.Ed after an online BA?", a: "Yes. A UGC-recognised BA makes you eligible for B.Ed admission, subject to each institution's entrance requirements." },
      { q: "How long can I take to complete the degree?", a: "The standard duration is three years, with a maximum permissible duration of six years under UGC norms." },
    ],
  },
  {
    slug: "lpu-online-mba-complete-guide-2026",
    title: "LPU Online MBA 2026 — Fees, Specializations, Syllabus & Placements",
    description: "The complete LPU Online MBA guide for 2026 — Rs. 2,00,000 fee structure, all 11 specializations, semester syllabus, eligibility, exam pattern and placement outcomes.",
    category: "MBA",
    readTime: "14 min read",
    date: "2026-02-06",
    featured: true,
    keyTakeaways: [
      "LPU Online MBA: 2 years, 4 semesters, indicative total fee Rs. 2,00,000 (EMI from ~Rs. 6,700/month).",
      "Eleven specializations, all priced the same — Finance, Marketing, HR, Business Analytics, Data Science and more.",
      "UGC entitled, NAAC A++, WES recognised — accepted by employers and for PhD admission.",
      "Placement support includes recruiter drives, resume clinics and mock interviews for online learners.",
    ],
    content: [
      { body: "The Online MBA is LPU's flagship postgraduate program and the most enrolled online degree in its portfolio. It is a two-year, four-semester management degree delivered fully online, built for working professionals who want a promotion, a career switch or an entrepreneurial foundation without pausing their income." },
      {
        heading: "Program snapshot",
        body: "Key facts before we go deeper.",
        bullets: [
          "Duration: 2 years / 4 semesters (maximum 4 years)",
          "Indicative total fee: Rs. 2,00,000; roughly Rs. 50,000 per semester before discount",
          "EMI: 0% interest plans, commonly Rs. 6,500–Rs. 8,500 per month depending on tenure",
          "Eligibility: bachelor's degree in any discipline, typically 50% aggregate (45% for reserved categories)",
          "Entrance exam: none",
        ],
      },
      {
        heading: "All LPU Online MBA specializations",
        body: "Every specialization costs the same, so choose on career fit, not price.",
        bullets: [
          "Finance — corporate finance, investment analysis, financial modelling",
          "Marketing — brand management, consumer behaviour, sales strategy",
          "Human Resource Management — talent acquisition, L&D, compensation",
          "Business Analytics — data-driven decision making, visualisation, BI tools",
          "Data Science — statistics, machine learning applications in business",
          "Digital Marketing — SEO, SEM, social and performance marketing",
          "Information Technology — IT strategy, systems and project management",
          "Operations Management — supply operations, quality, lean and Six Sigma",
          "International Business — global trade, export-import, cross-border strategy",
          "Logistics & Supply Chain Management — procurement, warehousing, distribution",
          "Hospital & Healthcare Management — healthcare operations and policy",
        ],
      },
      {
        heading: "Semester-wise syllabus structure",
        body: "Semesters 1 and 2 build the management core; semesters 3 and 4 go deep into your specialization and applied work.",
        bullets: [
          "Semester 1: Management Principles, Managerial Economics, Accounting for Managers, Organisational Behaviour, Business Statistics",
          "Semester 2: Marketing Management, Financial Management, Human Resource Management, Operations Management, Business Research Methods",
          "Semester 3: Strategic Management, Business Ethics & Corporate Governance, specialization electives I & II",
          "Semester 4: Specialization electives III & IV, capstone project / dissertation",
        ],
      },
      {
        heading: "How classes and exams work",
        body: "You get recorded lectures accessible any time, scheduled live sessions with faculty, downloadable e-content and case studies, discussion forums and assignment submissions through the LMS. Assessment is split between continuous internal evaluation (assignments, quizzes, participation) and an end-semester online proctored examination taken from home.",
      },
      {
        heading: "Placement support and outcomes",
        body: "Online learners get access to LPU's Division of Career Services. The realistic picture: freshers with an online MBA typically enter at Rs. 3.5–6 LPA, while working professionals more often use the degree for an internal promotion or a switch that lifts their existing CTC by 20–40%.",
        bullets: [
          "Resume and LinkedIn profile building workshops",
          "Mock interviews and group discussion practice",
          "Virtual recruitment drives and a job portal for online learners",
          "Industry masterclasses and guest lectures from practising managers",
          "Alumni network access across corporate India",
        ],
      },
      {
        heading: "Who should take this MBA — and who should not",
        body: "Take it if you are working and need a UGC-entitled management degree with schedule flexibility, if you want a specialization your current job can absorb immediately, or if you plan to move into management from a technical role. Skip it if you specifically need a residential campus experience, on-campus cohort networking or a guaranteed placement package — those are the trade-offs of any online MBA, at any university.",
      },
      {
        heading: "How to apply",
        body: "Book a free counseling session, complete the online application, upload your graduation marksheet along with 10th/12th documents and photo ID, then pay semester 1 fees or set up an EMI. LMS credentials arrive within 24–48 hours and you can start immediately.",
      },
    ],
    faqs: [
      { q: "What is the total LPU Online MBA fee in 2026?", a: "The indicative total programme fee is Rs. 2,00,000 for two years, before scholarships or early-bird discounts. All specializations are priced the same." },
      { q: "How many specializations does the LPU Online MBA offer?", a: "Eleven, including Finance, Marketing, HRM, Business Analytics, Data Science, Digital Marketing, IT, Operations, International Business, Logistics & Supply Chain and Healthcare Management." },
      { q: "Is the LPU Online MBA good for working professionals?", a: "Yes. Lectures are recorded, live sessions are scheduled outside standard work hours and exams are taken online from home." },
      { q: "Is there an entrance exam like CAT?", a: "No. Admission is based on your graduation marks; CAT/MAT scores are not required." },
      { q: "Can I do a PhD after an LPU Online MBA?", a: "Yes. A UGC-entitled online master's degree makes you eligible for PhD admission and UGC-NET." },
      { q: "Does the degree certificate say 'online'?", a: "No. The degree awarded is the same as the corresponding on-campus MBA degree." },
    ],
  },
  {
    slug: "online-bba-admission-guide-2026",
    title: "Online BBA Admission 2026 — Process, Dates, Documents & Eligibility",
    description: "Step-by-step online BBA admission guide for 2026 — eligibility, application process, documents checklist, key dates, fees and how to pick the right university.",
    category: "Admission",
    readTime: "9 min read",
    date: "2026-02-07",
    keyTakeaways: [
      "Online BBA admission needs only 10+2 — no entrance exam at LPU Online.",
      "Two intake cycles run each year: January and July.",
      "Full application to LMS access typically completes in 24–48 hours.",
      "Always verify UGC-DEB entitlement before paying any university.",
    ],
    content: [
      { body: "An online BBA is the fastest way for a 12th-pass student — or a working person who never finished a degree — to get a recognised management qualification. This guide walks through the entire admission journey for 2026, from checking eligibility to receiving your LMS credentials, using LPU Online as the reference." },
      {
        heading: "Eligibility for online BBA admission",
        body: "The bar is deliberately low, because the program is designed for accessibility.",
        bullets: [
          "10+2 or equivalent from any recognised board, in any stream (Science, Commerce or Arts)",
          "No minimum percentage barrier for general admission at most online universities",
          "No entrance exam — no CUET, no institutional test",
          "No upper age limit; open-school 12th qualifications are accepted",
        ],
      },
      {
        heading: "Admission cycles and key dates",
        body: "Online universities run two intakes a year under UGC-DEB norms.",
        bullets: [
          "January cycle: applications typically open November–December, sessions start January–February",
          "July cycle: applications open May–June, sessions start July–August",
          "Late admission windows sometimes extend by a few weeks with a late fee",
          "Early-bird discounts are usually strongest in the first weeks of each cycle",
        ],
      },
      {
        heading: "Documents checklist",
        body: "Keep clear scans (PDF or JPG, usually under 2 MB each) ready before you start the form.",
        bullets: [
          "Class 10 marksheet / certificate (for date of birth)",
          "Class 12 marksheet and passing certificate",
          "Government photo ID — Aadhaar, PAN, passport or voter ID",
          "Recent passport-size photograph on a plain background",
          "Signature scan",
          "Category certificate (SC/ST/OBC) if claiming a concession",
          "Defence / government employee proof if claiming that scholarship",
        ],
      },
      {
        heading: "Step-by-step application process",
        body: "The whole flow is online and takes under an hour of active work.",
        bullets: [
          "Step 1 — Free counseling: confirm the program is right for your goal and check scholarship eligibility",
          "Step 2 — Register: create an account with your email and mobile, verify with OTP",
          "Step 3 — Fill the form: personal details, academic history and program selection",
          "Step 4 — Upload documents: from the checklist above",
          "Step 5 — Pay: full fee, semester-wise or 0% EMI",
          "Step 6 — Verification: the university validates your documents, usually within 24–48 hours",
          "Step 7 — Onboarding: enrolment number issued, LMS credentials emailed, orientation session scheduled",
        ],
      },
      {
        heading: "Online BBA fees to budget for",
        body: "At LPU Online the indicative total BBA fee is Rs. 1,50,000 across three years — roughly Rs. 25,000 per semester. Add a one-time registration fee and per-semester examination fees. Compare this with Rs. 3–6 lakh for a comparable on-campus BBA plus living costs, and the online route saves both money and relocation.",
      },
      {
        heading: "How to choose the right online BBA university",
        body: "Fee is not the deciding factor — recognition and support are.",
        bullets: [
          "Confirm UGC-DEB entitlement for online mode on the UGC public list",
          "Check NAAC grade — A++ or A+ signals institutional quality",
          "Ask exactly what placement support online learners get, in writing",
          "Test the LMS demo: recorded lectures, live class frequency, mobile app",
          "Check exam mode and whether re-attempt windows exist",
          "Verify the degree wording — it should not differ from the on-campus degree",
        ],
      },
      {
        heading: "Common admission mistakes to avoid",
        body: "Three mistakes cost applicants the most: uploading a blurred or mismatched marksheet (which delays verification by days), choosing a specialization without checking its electives, and missing the early-bird window and losing a discount worth tens of thousands of rupees. Book counseling before the cycle deadline rather than in its final week.",
      },
    ],
    faqs: [
      { q: "Is there an entrance exam for online BBA admission?", a: "No. At LPU Online and most UGC-entitled online universities, admission is merit-based on your 10+2 marks with no entrance test." },
      { q: "When does online BBA admission open in 2026?", a: "There are two intakes — the January cycle (applications from November–December) and the July cycle (applications from May–June)." },
      { q: "How long does the admission process take?", a: "Typically 24–48 hours from fee payment to LMS access, assuming documents are clear and complete." },
      { q: "Can I get admission with an open-school 12th?", a: "Yes. NIOS and state open-school qualifications from recognised boards are accepted." },
      { q: "Is an online BBA valid for MBA admission later?", a: "Yes. A UGC-entitled online BBA is a valid graduation qualification for MBA admission, including at LPU Online." },
    ],
  },
  {
    slug: "lpu-online-bca-guide-2026",
    title: "LPU Online BCA 2026 — Fees, Syllabus, Eligibility & IT Career Scope",
    description: "LPU Online BCA guide 2026 — Rs. 1,50,000 total fee, semester syllabus, programming languages covered, eligibility, admission steps and salary expectations.",
    category: "Courses",
    readTime: "11 min read",
    date: "2026-02-08",
    featured: true,
    keyTakeaways: [
      "LPU Online BCA: 3 years, indicative total fee Rs. 1,50,000 (~Rs. 25,000 per semester).",
      "Curriculum covers C, Python, Java, DBMS, web development, networking and cloud basics.",
      "Eligibility is 10+2 in any stream — Mathematics is preferred but not mandatory everywhere.",
      "Natural progression is Online MCA (Rs. 1,48,000) with Data Science, AI/ML or Cyber Security tracks.",
    ],
    content: [
      { body: "The Online BCA is LPU's undergraduate route into software and IT careers, and one of its most in-demand programs. It packs the same computing fundamentals as an on-campus BCA — programming, data structures, databases, web and networking — into a flexible online format you can study alongside a job, a freelance practice or self-taught coding work." },
      {
        heading: "Program snapshot",
        body: "The essentials.",
        bullets: [
          "Program: Online Bachelor of Computer Applications (BCA)",
          "Duration: 3 years / 6 semesters",
          "Indicative total fee: Rs. 1,50,000 (~Rs. 25,000 per semester before discount)",
          "Eligibility: 10+2 from a recognised board; Mathematics or Computer Science at 12th is preferred",
          "Approval: UGC entitled; LPU is NAAC A++",
        ],
      },
      {
        heading: "Semester-wise syllabus",
        body: "The BCA curriculum moves from fundamentals to applied development.",
        bullets: [
          "Semester 1: Computer Fundamentals, Programming in C, Mathematics I, Communication Skills",
          "Semester 2: Data Structures, Object-Oriented Programming, Digital Electronics, Mathematics II",
          "Semester 3: Database Management Systems, Operating Systems, Python Programming",
          "Semester 4: Java Programming, Computer Networks, Software Engineering",
          "Semester 5: Web Technologies, Cloud Computing basics, elective I",
          "Semester 6: Mobile Application Development, elective II, capstone project",
        ],
      },
      {
        heading: "Technologies you actually learn",
        body: "A recurring question is whether an online BCA teaches real, employable skills. The stack covered is standard industry entry-level material.",
        bullets: [
          "Languages: C, C++, Python, Java, JavaScript",
          "Databases: SQL, MySQL, basic NoSQL concepts",
          "Web: HTML, CSS, JavaScript, backend fundamentals",
          "Foundations: data structures, algorithms, OS, networking",
          "Tools: Git basics, IDEs, cloud platform introductions",
        ],
      },
      {
        heading: "Career scope and salary after BCA",
        body: "BCA is a genuine entry ticket into IT services and product startups, provided you build a portfolio alongside the degree.",
        bullets: [
          "Software Developer / Junior Developer — Rs. 3–6 LPA to start",
          "Web Developer / Front-end Developer — Rs. 3–5.5 LPA",
          "Data Analyst — Rs. 3.5–6 LPA",
          "Quality Assurance / Test Engineer — Rs. 3–5 LPA",
          "Technical Support and System Administrator roles — Rs. 2.5–4.5 LPA",
          "Freelance development and app building alongside study",
        ],
      },
      {
        heading: "BCA then MCA — the strongest path",
        body: "An online BCA followed by LPU's Online MCA (Rs. 1,48,000, two years, with Data Science, Machine Learning & AI, Cyber Security or Full Stack Web Development specializations) is the highest-return combination in this portfolio. Specialised MCA graduates in AI/ML and cyber security consistently command the top salary bands among LPU Online learners.",
      },
      {
        heading: "How to make an online BCA count",
        body: "The degree alone is a credential; the portfolio is what gets you hired. Build 3–5 real projects while you study, publish them on GitHub, contribute to one open-source repository, and take at least one industry certification (AWS Cloud Practitioner, Google Data Analytics or similar). Learners who do this reliably out-earn those who only complete coursework.",
      },
      {
        heading: "Admission process",
        body: "Book free counseling, submit the online application with your 10th and 12th marksheets and photo ID, pay semester 1 fees or set up EMI, and receive LMS credentials within 24–48 hours. Intakes run in January and July.",
      },
    ],
    faqs: [
      { q: "What is the LPU Online BCA fee?", a: "The indicative total programme fee is Rs. 1,50,000 for three years, roughly Rs. 25,000 per semester before scholarships." },
      { q: "Do I need Mathematics in 12th for online BCA?", a: "Mathematics or Computer Science at 10+2 is preferred, but students from other streams are generally eligible; confirm during counseling." },
      { q: "Can I get an IT job with an online BCA?", a: "Yes. The degree is UGC entitled and accepted by IT employers. Your project portfolio and certifications strongly influence which offers you get." },
      { q: "Is there any practical or lab work?", a: "Yes. Programming assignments and project work are submitted through the LMS, using your own machine and cloud-based environments." },
      { q: "What can I study after an online BCA?", a: "Online MCA is the standard next step; MBA in IT, M.Sc Computer Science and industry certifications are also common routes." },
    ],
  },
  {
    slug: "lpu-online-placement-guide-2026",
    title: "LPU Online Placement 2026 — Recruiters, Salary, Process & Support",
    description: "How LPU Online placements really work in 2026 — career services, recruiter drives, average salary by program, eligibility for placement support and honest expectations.",
    category: "Placement",
    readTime: "11 min read",
    date: "2026-02-09",
    featured: true,
    keyTakeaways: [
      "LPU Online learners get career services: resume clinics, mock interviews and virtual recruitment drives.",
      "Realistic fresher bands: MBA Rs. 3.5–6 LPA, MCA Rs. 4–8 LPA, BBA/BCA Rs. 2.5–5 LPA.",
      "Working professionals more often gain internal promotions or 20–40% CTC jumps than fresh placements.",
      "No online university guarantees placement — support is assistance, not a job offer.",
    ],
    content: [
      { body: "Placement is the number one question every online-degree applicant asks, and the answers online are usually either marketing gloss or blanket cynicism. Here is a grounded look at what LPU Online placement support actually consists of, who it works for, what salary bands are realistic, and what you must do yourself." },
      {
        heading: "What LPU Online placement support includes",
        body: "Online learners are served by the university's career services division.",
        bullets: [
          "Resume and LinkedIn profile building workshops",
          "Mock interviews and group discussion practice sessions",
          "Aptitude and technical test preparation modules",
          "Virtual recruitment drives and a dedicated job portal for online learners",
          "Industry masterclasses and guest lectures from practising professionals",
          "Alumni network access for referrals",
        ],
      },
      {
        heading: "Recruiter landscape",
        body: "Companies that hire from LPU's talent pool span IT services, BFSI, e-commerce, consulting and manufacturing. Typical recruiter categories include large IT services firms, banking and financial services companies, e-commerce and logistics players, EdTech and IT product startups, and BPO/KPO organisations. Which drives you qualify for depends on your program, specialization, academic performance and prior work experience.",
      },
      {
        heading: "Realistic salary expectations by program",
        body: "Averages published by any university skew high. These are practical bands for online learners.",
        bullets: [
          "Online MBA (fresher): Rs. 3.5–6 LPA; Business Analytics and Finance at the upper end",
          "Online MBA (experienced): usually a 20–40% raise on existing CTC or an internal promotion",
          "Online MCA: Rs. 4–8 LPA; AI/ML and Cyber Security specializations reach higher",
          "Online BCA: Rs. 2.5–5 LPA, portfolio dependent",
          "Online BBA: Rs. 2.5–4.5 LPA into sales, operations and HR executive roles",
          "Online M.Com / MA: Rs. 2.5–4.5 LPA, plus strong government-exam eligibility",
        ],
      },
      {
        heading: "Who gets placed, and who does not",
        body: "The pattern is consistent. Learners who get strong outcomes treat the degree as one input among several — they build projects or case portfolios, attend every mock interview, complete one or two industry certifications, and apply actively through the portal and independently. Learners who complete only the coursework and wait for a call generally do not get placed, at any university, online or offline.",
      },
      {
        heading: "The honest limitations",
        body: "You should know these before enrolling, not after.",
        bullets: [
          "No placement guarantee exists — support is assistance, not an offer",
          "On-campus flagship drives are usually reserved for full-time campus students",
          "Some legacy employers still prefer regular-mode freshers for entry-level hiring",
          "Your prior work experience matters more than your degree mode for experienced roles",
        ],
      },
      {
        heading: "How to maximise your placement odds",
        body: "A concrete plan from day one of the program.",
        bullets: [
          "Semester 1: build your LinkedIn profile properly and start a project or case portfolio",
          "Semester 2: complete one recognised certification relevant to your specialization",
          "Semester 3: attend every mock interview and masterclass; start applying to roles",
          "Final semester: make the capstone project genuinely portfolio-worthy and use alumni referrals",
          "Throughout: keep internal assessment scores high — several drives filter on academic performance",
        ],
      },
      {
        heading: "Is an LPU Online degree respected by employers?",
        body: "For hiring purposes, employers verify that the degree is from a UGC-recognised university. LPU is NAAC A++, UGC Category-1 and WES recognised, and the awarded degree does not differ from the on-campus version. In practice, the brand carries weight; what varies by employer is entry-level fresher hiring policy, which is why portfolio and certifications matter so much for freshers.",
      },
    ],
    faqs: [
      { q: "Does LPU Online guarantee placement?", a: "No. LPU Online provides placement assistance — resume support, mock interviews, drives and a job portal — but no university can guarantee a job offer." },
      { q: "What is the average salary after LPU Online MBA?", a: "Realistic fresher bands are Rs. 3.5–6 LPA. Working professionals more commonly see a 20–40% CTC increase or an internal promotion." },
      { q: "Can online learners attend campus placement drives?", a: "Online learners access virtual drives and the online-learner job portal; flagship on-campus drives are generally reserved for full-time campus students." },
      { q: "Which LPU Online program has the best placement outcomes?", a: "MCA with AI/ML, Data Science or Cyber Security specializations, followed by MBA in Business Analytics and Finance." },
      { q: "Is placement support available after graduation?", a: "Yes. Alumni retain access to the career portal and alumni network for referrals after completing the program." },
    ],
  },
  {
    "slug": "lpu-online-mca-review-2026",
    "title": "LPU Online MCA Review 2026 — Is It Good or Bad? Fees, Syllabus & Jobs",
    "description": "Honest LPU Online MCA review for 2026: semester-wise syllabus, specializations, real fees and EMI, LMS and exam experience, placement outcomes and who should avoid it.",
    "category": "Review",
    "readTime": "10 min read",
    "date": "2026-04-02",
    "keyTakeaways": [
      "UGC-DEB entitled MCA from a NAAC A++ university — valid for IT jobs, PSUs and PhD.",
      "Total fee Rs. 1,62,000, applied fee Rs. 1,29,600, EMI from about Rs. 5,400 per month.",
      "Specializations: Data Science, Full Stack Development, Machine Learning & AI, Cyber Security, AR/VR.",
      "Best for working IT professionals and BCA/B.Sc IT graduates who want a master's without quitting a job."
    ],
    "content": [
      {
        "body": "The LPU Online MCA is one of the few UGC-entitled online master's programs in computer applications that carries a NAAC A++ brand at a mid-range fee. This review covers the syllabus, the actual money you pay, how classes and exams work, and the kind of jobs graduates realistically land in 2026."
      },
      {
        "heading": "Programme at a glance",
        "body": "A 2-year, 4-semester fully online master's degree. Semesters 1 and 2 build core software, data and networking foundations; semesters 3 and 4 move into your specialization electives and a project.",
        "bullets": [
          "Duration: 2 years / 4 semesters",
          "Mode: recorded lectures + live weekend sessions",
          "Assessment: internal assessment + online proctored end-term exams",
          "Eligibility: Bachelor's degree with Mathematics at 10+2 or graduation level, 50% marks"
        ]
      },
      {
        "heading": "Syllabus — what you actually study",
        "body": "The curriculum stays close to industry stacks rather than pure theory.",
        "bullets": [
          "Semester 1: Software Engineering Practices, OOP using C++, Data Warehousing & Data Mining, Linux and Shell Scripting, Data Communication and Networking",
          "Semester 2: Programming in Java, Advanced Data Structures, Introduction to Big Data, Cloud Computing, Web Technologies",
          "Semester 3: Programming in Python, discipline electives and generic electives",
          "Semester 4: Skill enhancement, discipline electives and Project Work"
        ]
      },
      {
        "heading": "Specializations that pay in 2026",
        "body": "Data Science and Full Stack Development attract the most hiring interest, followed by Cyber Security. AR/VR is niche but useful if you already work in gaming or simulation.",
        "bullets": [
          "Data Science — analyst, ML support, BI roles",
          "Full Stack Development — MERN/Java stack developer roles",
          "Machine Learning & AI — model support and AI engineering roles",
          "Cyber Security — SOC analyst, security engineer",
          "AR/VR (Game Development) — niche studio and simulation roles"
        ]
      },
      {
        "heading": "Fees and EMI",
        "body": "Published fee is Rs. 1,62,000 for the full programme. The applied fee after the running discount is Rs. 1,29,600 — roughly Rs. 32,400 per semester, or 0% interest EMI from about Rs. 5,400 a month. Merit, defence and Divyaang scholarships can reduce it further."
      },
      {
        "heading": "Classes, LMS and exams",
        "body": "Everything runs through the LMS: recorded lectures, e-books, practice sets and discussion boards. Live sessions are weekend-heavy and recorded. End-term exams are online and remotely proctored, so you never travel to a centre. The practical labs are self-paced, which is fine if you already code daily and harder if you are switching into tech from scratch."
      },
      {
        "heading": "Placements — the honest picture",
        "body": "LPU's online placement cell offers resume reviews, mock interviews and job alerts, with hiring partners across IT services and product companies. Freshers typically start in the Rs. 3.5–6 LPA band; experienced candidates use the degree for internal promotions and role changes rather than fresh placement."
      },
      {
        "heading": "Good or bad? The verdict",
        "body": "Good if you are working in IT, need a recognised master's for eligibility or promotion, and want flexible timings at a fair price. Not ideal if you want a campus cohort, on-site labs or guaranteed placement — an on-campus MCA suits that better."
      }
    ],
    "faqs": [
      {
        "q": "Is LPU Online MCA valid?",
        "a": "Yes. It is UGC-DEB entitled and NAAC A++ accredited, so it is accepted for jobs, government roles and further study."
      },
      {
        "q": "What is the LPU Online MCA fee in 2026?",
        "a": "Total Rs. 1,62,000, applied fee Rs. 1,29,600, with EMI from about Rs. 5,400 per month."
      },
      {
        "q": "Do I need Mathematics to apply?",
        "a": "Yes, Mathematics at 10+2 or at graduation level is typically required for MCA admission."
      },
      {
        "q": "Are the exams online?",
        "a": "Yes, end-term exams are conducted online with remote proctoring."
      }
    ]
  },
  {
    "slug": "lpu-online-bba-review-2026",
    "title": "LPU Online BBA Review 2026 — Good or Bad? Fees, Syllabus & Career Scope",
    "description": "A full LPU Online BBA review for 2026: six-semester syllabus, fee structure and EMI, class experience, career options after BBA and whether it is worth it.",
    "category": "Review",
    "readTime": "9 min read",
    "date": "2026-04-04",
    "keyTakeaways": [
      "3-year UGC-entitled BBA, valid for MBA admission and government exams.",
      "Total fee Rs. 1,50,000, applied fee Rs. 1,22,400, EMI from about Rs. 5,100 per month.",
      "Six semesters covering management, marketing, finance, HR and electives.",
      "Best for 12th-pass students who are working, running a family business or preparing for competitive exams."
    ],
    "content": [
      {
        "body": "An online BBA only makes sense if the degree is recognised and the syllabus is current. LPU Online scores on both, but it is not the right pick for every student. Here is the detailed breakdown."
      },
      {
        "heading": "Programme at a glance",
        "body": "3 years across 6 semesters, fully online, with no attendance requirement at campus.",
        "bullets": [
          "Eligibility: 10+2 from a recognised board with 50% marks (45% for reserved categories)",
          "Mode: recorded lectures with live doubt sessions",
          "Exams: online, remotely proctored",
          "Degree: same BBA degree as the on-campus program"
        ]
      },
      {
        "heading": "Semester-wise syllabus",
        "body": "The structure moves from broad business foundations to electives and a community project.",
        "bullets": [
          "Semester 1: Business Economics, Business Environment, Business Organisation and Management, Office Automation Tools, English Communication Skills",
          "Semester 2: Principles of Marketing, Research Methodology, Business Mathematics and Statistics, Cost and Management Accounting, Community Development Project",
          "Semester 3: Business Ethics, Human Resource Management, Financial Accounting, Environmental Sciences",
          "Semester 4: Business Law, Fundamentals of Financial Management, Skill Enhancement Courses",
          "Semester 5 and 6: Discipline specific electives, Generic electives and E-commerce"
        ]
      },
      {
        "heading": "Fees and payment options",
        "body": "Full fee Rs. 1,50,000, applied fee Rs. 1,22,400 — about Rs. 20,400 per semester or 0% EMI from roughly Rs. 5,100 per month. LMS access, e-books and online exams are included; there are no separate lab or campus charges."
      },
      {
        "heading": "What the learning experience feels like",
        "body": "Content is bite-sized and mobile friendly, which suits students who study between shifts. Live sessions are optional but recommended for finance and accounting subjects. Self-discipline matters more than in a classroom — students who schedule two study slots a week finish comfortably."
      },
      {
        "heading": "Career scope after an online BBA",
        "body": "Most graduates use the BBA either as a stepping stone to an MBA or to move into structured corporate roles.",
        "bullets": [
          "Business development and sales executive",
          "Marketing and social media coordinator",
          "HR and recruitment associate",
          "Operations and supply chain executive",
          "Family business management or entrepreneurship",
          "MBA admission and competitive exams"
        ]
      },
      {
        "heading": "Verdict",
        "body": "Good value for working students and 12th-pass learners who need a recognised degree with flexibility. If you want campus placements, internships and college life, choose a regular BBA instead."
      }
    ],
    "faqs": [
      {
        "q": "Is an online BBA accepted for MBA admission?",
        "a": "Yes. A UGC-entitled online BBA is accepted for MBA admission in Indian and most foreign universities."
      },
      {
        "q": "What is the LPU Online BBA fee?",
        "a": "Rs. 1,50,000 total, currently Rs. 1,22,400 after discount, with EMI options."
      },
      {
        "q": "How long is the BBA?",
        "a": "3 years across 6 semesters, with a flexible completion window."
      },
      {
        "q": "Do employers accept online BBA degrees?",
        "a": "Yes, as the degree is UGC-DEB entitled and identical in title to the on-campus degree."
      }
    ]
  },
  {
    "slug": "lpu-online-bca-review-2026",
    "title": "LPU Online BCA Review 2026 — Good or Bad? Syllabus, Fees & IT Jobs",
    "description": "LPU Online BCA review 2026 covering the six-semester syllabus, coding practice, fee structure and EMI, exam format, IT job prospects and who should not enrol.",
    "category": "Review",
    "readTime": "9 min read",
    "date": "2026-04-06",
    "keyTakeaways": [
      "UGC-entitled 3-year BCA accepted for MCA admission and IT jobs.",
      "Total fee Rs. 1,50,000, applied fee Rs. 1,22,400, EMI from about Rs. 5,100 per month.",
      "Syllabus covers C, Java, Python, DBMS, networking, PHP and two projects.",
      "Suits self-driven learners who will practise coding outside the recorded lectures."
    ],
    "content": [
      {
        "body": "An online BCA can genuinely start an IT career — but only if you treat the recorded lectures as the floor, not the ceiling. This review breaks down what LPU Online delivers and what you must add yourself."
      },
      {
        "heading": "Programme at a glance",
        "body": "3 years, 6 semesters, 100% online with proctored online exams and no campus visits.",
        "bullets": [
          "Eligibility: 10+2 in any stream with 50% marks (45% for reserved categories)",
          "Mode: recorded lectures, live sessions and LMS practice sets",
          "Projects: Project-I in semester 5 and Project-II in semester 6"
        ]
      },
      {
        "heading": "Semester-wise syllabus",
        "body": "The stack is broad and progresses from fundamentals to applied development.",
        "bullets": [
          "Semester 1: Introduction to Information Technology, Digital Computer and Fundamentals, Mathematics-I, Communicative English, Programming in C",
          "Semester 2: Discrete Mathematics, Accounting and Financial Management, Data Structures using C, Core Java, Environmental Studies",
          "Semester 3: Management Information Systems, Numerical Analysis, Operating Systems, Computer Organization and Architecture, C++",
          "Semester 4: Internet Technology, DBMS, Computer Networking, Software Engineering, Programming in Python",
          "Semester 5: Analysis and Design of Algorithms, Computer Graphics, .NET, Linux Administration, Project-I",
          "Semester 6: IoT Based Application, Web Development using PHP, Business Intelligence, Project-II"
        ]
      },
      {
        "heading": "Fees and EMI",
        "body": "Rs. 1,50,000 in total, applied fee Rs. 1,22,400, about Rs. 20,400 per semester, or 0% interest EMI from roughly Rs. 5,100 a month. Scholarships apply for merit, defence and Divyaang categories."
      },
      {
        "heading": "How to make this degree actually pay",
        "body": "The syllabus gives you the theory; hiring is decided by what you build.",
        "bullets": [
          "Push every subject into a small project — a CRUD app after DBMS, an API after Java",
          "Keep a public GitHub profile from semester 2 onwards",
          "Add one industry certification (cloud or data) alongside the degree",
          "Practise DSA weekly rather than only before exams"
        ]
      },
      {
        "heading": "Job prospects after online BCA",
        "body": "Entry roles typically land in the Rs. 3–6 LPA band: junior developer, support engineer, QA analyst, data entry to data analyst transitions and web developer. Graduates who build a portfolio move up considerably faster than those who only clear exams."
      },
      {
        "heading": "Verdict",
        "body": "Good if you are disciplined, already working, or cannot attend a campus. Bad if you expect the degree alone to place you — online BCA rewards portfolio builders."
      }
    ],
    "faqs": [
      {
        "q": "Is LPU Online BCA valid for MCA admission?",
        "a": "Yes, the UGC-entitled online BCA is accepted for MCA admission in Indian universities."
      },
      {
        "q": "What is the BCA fee at LPU Online?",
        "a": "Rs. 1,50,000 total, currently Rs. 1,22,400 after discount, payable per semester or on EMI."
      },
      {
        "q": "Are there practical labs?",
        "a": "Lab work is self-paced through assignments and two projects, submitted online."
      },
      {
        "q": "Can I get an IT job with an online BCA?",
        "a": "Yes, especially with a project portfolio and one relevant certification."
      }
    ]
  },
  {
    "slug": "lpu-online-ma-review-2026",
    "title": "LPU Online MA Review 2026 — Specializations, Syllabus, Fees & Careers",
    "description": "LPU Online MA review 2026: English, History, Economics and Sociology syllabus, fee structure and EMI, dissertation, teaching career scope and UGC NET eligibility.",
    "category": "Review",
    "readTime": "8 min read",
    "date": "2026-04-08",
    "keyTakeaways": [
      "Four specializations — Economics, History, English and Sociology.",
      "Total fee Rs. 80,000, applied fee Rs. 65,600, EMI from about Rs. 3,644 per month.",
      "UGC-entitled, so it is valid for UGC NET, B.Ed and PhD eligibility.",
      "Includes a dissertation, which matters if you plan to move into research or teaching."
    ],
    "content": [
      {
        "body": "The LPU Online MA is one of the most affordable UGC-entitled master's degrees for humanities students, and it is built for people who are already working or preparing for competitive exams."
      },
      {
        "heading": "Specializations offered",
        "body": "Each stream has its own subject list culminating in a dissertation.",
        "bullets": [
          "MA Economics — micro, macro, mathematics for economists, international economics, public economics, development economics",
          "MA History — India 650–1964 AD, society and culture, women in Indian history, economic history, modern Europe, twentieth century world",
          "MA English — British drama, poetry and fiction, literary criticism, linguistics, post-independence Indian literature, postcolonial studies",
          "MA Sociology — classical sociological tradition, social research methodology, gender and society, kinship and family, demography, sociology of health"
        ]
      },
      {
        "heading": "Programme structure",
        "body": "2 years across 4 semesters, fully online, with a dissertation in the final semester. Every stream includes Fundamentals of Research and Fundamentals of Information Technology, and Teaching Aptitude appears in the humanities streams — useful if UGC NET is your goal."
      },
      {
        "heading": "Fees",
        "body": "Full fee Rs. 80,000, applied fee Rs. 65,600 — roughly Rs. 16,400 per semester or EMI from about Rs. 3,644 per month. This makes it one of the cheapest recognised online master's options in India."
      },
      {
        "heading": "Career scope",
        "body": "Most learners use the MA for eligibility rather than direct placement.",
        "bullets": [
          "UGC NET / JRF and college lecturer eligibility",
          "B.Ed and school teaching roles",
          "Content writing, editing and publishing",
          "Civil services and state PSC preparation",
          "Research assistant and policy roles (Economics, Sociology)",
          "HR, CSR and NGO programme roles"
        ]
      },
      {
        "heading": "Verdict",
        "body": "Good if you need a recognised master's for teaching eligibility, exam preparation or a career shift into content and research, at a low cost. Less useful if you want corporate placement — an MBA or M.Com fits that better."
      }
    ],
    "faqs": [
      {
        "q": "Is an online MA valid for UGC NET?",
        "a": "Yes, a UGC-entitled online MA is accepted for UGC NET and for PhD eligibility."
      },
      {
        "q": "Which MA specializations does LPU Online offer?",
        "a": "Economics, History, English and Sociology."
      },
      {
        "q": "What is the LPU Online MA fee?",
        "a": "Rs. 80,000 total, currently Rs. 65,600 after discount."
      },
      {
        "q": "Is a dissertation required?",
        "a": "Yes, the final semester includes a dissertation submitted online."
      }
    ]
  },
  {
    "slug": "lpu-online-mcom-review-2026",
    "title": "LPU Online M.Com Review 2026 — Syllabus, Fees, Scope & Is It Worth It?",
    "description": "LPU Online M.Com review 2026: semester-wise syllabus including forensic accounting and international finance, fees and EMI, career scope and comparison with an MBA Finance.",
    "category": "Review",
    "readTime": "8 min read",
    "date": "2026-04-10",
    "keyTakeaways": [
      "2-year UGC-entitled M.Com with a finance and accounting focus.",
      "Total fee Rs. 1,00,000, applied fee Rs. 81,600, EMI from about Rs. 3,400 per month.",
      "Syllabus includes forensic accounting, corporate tax planning and international financial management.",
      "Ideal for CA/CS aspirants, accountants and commerce graduates targeting teaching or banking."
    ],
    "content": [
      {
        "body": "For commerce graduates deciding between an M.Com and an MBA, the M.Com is the cheaper, more technical route — deeper on accounting and taxation, lighter on general management. Here is how LPU Online's version stacks up."
      },
      {
        "heading": "Semester-wise syllabus",
        "body": "Four semesters that stay close to professional accounting practice.",
        "bullets": [
          "Semester 1: Managerial Economics, Organizational Behaviour and Human Resource Dynamics, Financial Reporting Statements and Analysis, Fundamental of Research, Fundamentals of Information Technology",
          "Semester 2: Corporate Tax Structure and Planning, Research Methodology, International Business Environment, Marketing Management, Generic Elective I",
          "Semester 3: Corporate Strategy and Entrepreneurship, Forensic Accounting and Fraud Examination, International Banking and Forex Management, International Accounting, Generic Elective II",
          "Semester 4: Management Science, International Financial Management, Generic Electives III and IV"
        ]
      },
      {
        "heading": "Fees",
        "body": "Rs. 1,00,000 total, applied fee Rs. 81,600 — about Rs. 20,400 per semester or 0% EMI from roughly Rs. 3,400 a month. Working accountants often finish it entirely on EMI without touching savings."
      },
      {
        "heading": "Career scope after M.Com",
        "body": "The degree supports both employment and eligibility goals.",
        "bullets": [
          "Accountant, senior accountant and finance executive roles",
          "Taxation and GST consulting",
          "Audit and forensic accounting support roles",
          "Banking and financial services officer roles",
          "UGC NET Commerce and college lecturer eligibility",
          "A strong complement while pursuing CA, CS or CMA"
        ]
      },
      {
        "heading": "M.Com or MBA Finance?",
        "body": "Choose the M.Com if your work is technical — accounts, audit, tax, compliance — or if you want teaching eligibility. Choose an MBA Finance if you are aiming at managerial and business-partnering roles where breadth matters more than accounting depth."
      },
      {
        "heading": "Verdict",
        "body": "Worth it for commerce professionals who want depth, recognition and a low fee. Not the best pick if you want general management exposure or leadership roles."
      }
    ],
    "faqs": [
      {
        "q": "Is LPU Online M.Com UGC approved?",
        "a": "Yes, it is UGC-DEB entitled and NAAC A++ accredited."
      },
      {
        "q": "What is the M.Com fee?",
        "a": "Rs. 1,00,000 total, currently Rs. 81,600 after discount."
      },
      {
        "q": "Can I do M.Com along with CA?",
        "a": "Yes, many students pair the online M.Com with CA/CS preparation because of the flexible schedule."
      },
      {
        "q": "Is M.Com valid for UGC NET Commerce?",
        "a": "Yes, it meets the eligibility requirement for UGC NET Commerce."
      }
    ]
  },
  {
    "slug": "lpu-online-msc-review-2026",
    "title": "LPU Online M.Sc Review 2026 — Maths & Economics Syllabus, Fees, Careers",
    "description": "LPU Online M.Sc review 2026: Mathematics and Economics specialization syllabus, fees and EMI, dissertation requirements, analytics career paths and who it suits.",
    "category": "Review",
    "readTime": "8 min read",
    "date": "2026-04-12",
    "keyTakeaways": [
      "Two specializations — M.Sc Mathematics and M.Sc Economics.",
      "Total fee Rs. 1,00,000, applied fee Rs. 81,600, EMI from about Rs. 3,400 per month.",
      "Rigorous quantitative syllabus with a dissertation in the final semester.",
      "Strong feeder degree for data, analytics, actuarial and teaching careers."
    ],
    "content": [
      {
        "body": "The LPU Online M.Sc is the most quantitative option in the online portfolio. It is demanding — real analysis, topology and econometrics do not get easier online — but it opens analytics and academic doors that softer degrees do not."
      },
      {
        "heading": "M.Sc Mathematics syllabus",
        "body": "Four semesters of core pure and applied mathematics.",
        "bullets": [
          "Semester 1: Real Analysis-I, Advanced Abstract Algebra-I, Theory of Differential Equations, Fundamentals of Research, Fundamentals of Information Technology",
          "Semester 2: Real Analysis-II, Advanced Abstract Algebra-II, Research Methods and Design, Complex Analysis-I, Calculus of Variation and Integral Equation",
          "Semester 3: Partial Differential Equations, Complex Analysis-II, Topology, Generic Electives, Term Paper",
          "Semester 4: Mechanics, Functional Analysis, Dissertation, Generic Elective IV"
        ]
      },
      {
        "heading": "M.Sc Economics syllabus",
        "body": "A theory-plus-policy structure with quantitative depth.",
        "bullets": [
          "Semester 1: Microeconomics Theory and Analysis-I, Macroeconomics Theory and Analysis-I, Fundamentals of Information Technology, Indian Economic Development, Fundamental of Research",
          "Semester 2: Microeconomics-II, Macroeconomics-II, Mathematics for Economists, Research Methodology, Generic Elective",
          "Semester 3: International Economics, Environmental Economics, Monetary Theory and Policy, Public Economics, Term Paper",
          "Semester 4: Economics of Development, Trade and Development, Generic Electives, Dissertation"
        ]
      },
      {
        "heading": "Fees",
        "body": "Rs. 1,00,000 total, applied fee Rs. 81,600 — about Rs. 20,400 per semester or EMI from roughly Rs. 3,400 per month."
      },
      {
        "heading": "Where the degree leads",
        "body": "Quantitative master's degrees convert well into analytics roles when paired with a tool skill such as Python, R or SQL.",
        "bullets": [
          "Data analyst and data scientist tracks",
          "Statistician and research analyst roles",
          "Actuarial and quantitative analysis",
          "Economist and policy research roles",
          "UGC NET, PhD and college teaching",
          "Banking and financial risk roles"
        ]
      },
      {
        "heading": "Verdict",
        "body": "Excellent value if you enjoy mathematics or economics and want a recognised, low-cost master's while working. Avoid it if you dislike proof-heavy study — an MBA or M.Com will be a smoother path."
      }
    ],
    "faqs": [
      {
        "q": "Which M.Sc specializations are available?",
        "a": "Mathematics and Economics."
      },
      {
        "q": "What is the LPU Online M.Sc fee?",
        "a": "Rs. 1,00,000 total, currently Rs. 81,600 after discount."
      },
      {
        "q": "Is a dissertation mandatory?",
        "a": "Yes, both specializations require a dissertation in the final semester."
      },
      {
        "q": "Is the online M.Sc valid for PhD?",
        "a": "Yes, it is UGC-DEB entitled and accepted for PhD admission and UGC NET."
      }
    ]
  },
];


export const findBlog = (slug: string) => blogs.find((b) => b.slug === slug);
