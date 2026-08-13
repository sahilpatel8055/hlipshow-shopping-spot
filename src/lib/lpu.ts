import lpuHero from "@/assets/lpu-hero.jpg";
import courseBusiness from "@/assets/course-business.jpg";
import courseTech from "@/assets/course-tech.jpg";
import courseArts from "@/assets/course-arts.jpg";
import courseCommerce from "@/assets/course-commerce.jpg";

export type CareerRole = { role: string; salary: string };
export type CurriculumYear = { year: string; subjects: string[] };
export type FeesBreakdown = {
  fullFees: string;
  appliedFee: string;
  perSemester: string;
  emi: string;
};

export type Course = {
  slug: string;
  name: string;
  level: "ug" | "pg";
  duration: string;
  fee: string;
  specializations?: string[];
  image: string;
  rating: number;
  reviews: number;
  tagline: string;
  feesBreakdown: FeesBreakdown;
  curriculum: CurriculumYear[];
  careers: CareerRole[];
};

const ugYears = (subjectsBySem: string[][]): CurriculumYear[] =>
  subjectsBySem.map((subjects, i) => ({ year: `Year ${i + 1}`, subjects }));

const pgYears = (subjectsBySem: string[][]): CurriculumYear[] =>
  subjectsBySem.map((subjects, i) => ({ year: `Year ${i + 1}`, subjects }));

const defaultCareers: CareerRole[] = [
  { role: "Business Analyst", salary: "Rs. 5 - 11 LPA" },
  { role: "Product Manager", salary: "Rs. 7 - 16 LPA" },
  { role: "Marketing Manager", salary: "Rs. 6 - 14 LPA" },
  { role: "Operations Manager", salary: "Rs. 5 - 13 LPA" },
  { role: "Financial Analyst", salary: "Rs. 4 - 9 LPA" },
  { role: "HR Manager", salary: "Rs. 5 - 11 LPA" },
];

const techCareers: CareerRole[] = [
  { role: "Software Engineer", salary: "Rs. 6 - 15 LPA" },
  { role: "Data Analyst", salary: "Rs. 5 - 12 LPA" },
  { role: "Cloud Engineer", salary: "Rs. 7 - 18 LPA" },
  { role: "Full Stack Developer", salary: "Rs. 6 - 16 LPA" },
  { role: "Cyber Security Analyst", salary: "Rs. 6 - 14 LPA" },
  { role: "AI/ML Engineer", salary: "Rs. 8 - 20 LPA" },
];

const commerceCareers: CareerRole[] = [
  { role: "Accountant", salary: "Rs. 3 - 7 LPA" },
  { role: "Financial Analyst", salary: "Rs. 4 - 9 LPA" },
  { role: "Tax Consultant", salary: "Rs. 4 - 10 LPA" },
  { role: "Auditor", salary: "Rs. 4 - 9 LPA" },
  { role: "Investment Analyst", salary: "Rs. 5 - 12 LPA" },
  { role: "Banking Officer", salary: "Rs. 4 - 8 LPA" },
];

const artsCareers: CareerRole[] = [
  { role: "Content Writer", salary: "Rs. 3 - 7 LPA" },
  { role: "Public Relations Officer", salary: "Rs. 4 - 9 LPA" },
  { role: "Journalist", salary: "Rs. 4 - 8 LPA" },
  { role: "Social Media Manager", salary: "Rs. 4 - 9 LPA" },
  { role: "Teacher / Educator", salary: "Rs. 3 - 8 LPA" },
  { role: "Civil Services Aspirant", salary: "Rs. 7 - 15 LPA" },
];

const scienceCareers: CareerRole[] = [
  { role: "Data Scientist", salary: "Rs. 7 - 18 LPA" },
  { role: "Statistician", salary: "Rs. 5 - 12 LPA" },
  { role: "Economist", salary: "Rs. 6 - 14 LPA" },
  { role: "Research Analyst", salary: "Rs. 5 - 11 LPA" },
  { role: "Actuary", salary: "Rs. 8 - 20 LPA" },
  { role: "Quantitative Analyst", salary: "Rs. 7 - 16 LPA" },
];

export const lpu = {
  slug: "lpu-online",
  name: "LPU Online",
  shortName: "LPU",
  tagline: "UGC-entitled online degrees from India's largest private university",
  image: lpuHero,
  established: "2005",
  accreditations: ["UGC", "NAAC A++", "WES Recognized"],
  ranking: "Ranked among top private universities in India (NIRF).",
  overview:
    "Lovely Professional University (LPU) offers UGC-entitled online degree programs designed for working professionals and students who want the flexibility of learning from anywhere.",
  highlights: [
    { label: "Mode", value: "100% Online" },
    { label: "EMI", value: "0% Interest Options" },
    { label: "Placement", value: "Dedicated Cell" },
    { label: "Recognition", value: "UGC Entitled" },
  ],
  approvals: [
    { name: "UGC Entitled", note: "Online programs entitled by UGC-DEB." },
    { name: "NAAC A++", note: "Institutional accreditation grade." },
    { name: "WES Recognized", note: "Degrees recognized internationally by WES." },
  ],
  rankings: [
    { title: "NAAC A++", subtitle: "Accredited University", badge: "A++" },
    { title: "QS World University Rankings", subtitle: "South Asia's Top Universities 2026", badge: "Top 195" },
    { title: "UGC Entitled", subtitle: "Online Degrees = Campus Degree", badge: "UGC" },
    { title: "AICTE Norms Compliant", subtitle: "Approved Technical Programs", badge: "AICTE" },
    { title: "Times Higher Education", subtitle: "Worlds Top 400 Universities 2025", badge: "301-400" },
    { title: "The Week", subtitle: "Private & Deemed Multidisciplinary Universities", badge: "Rank 6" },
    { title: "Outlook", subtitle: "Private Distance & Online Learning Programs 2026", badge: "Rank 7" },
    { title: "WES Recognized", subtitle: "For study in Canada & USA", badge: "WES" },
  ],
  courses: {
    ug: [
      {
        slug: "online-bba",
        name: "Online BBA",
        level: "ug",
        duration: "3 Years",
        fee: "Rs. 1,22,400 total",
        image: courseBusiness,
        rating: 4.7,
        reviews: 1240,
        tagline: "Bachelor of Business Administration — build a strong business foundation.",
        feesBreakdown: { fullFees: "Rs. 1,50,000", appliedFee: "Rs. 1,22,400", perSemester: "Rs. 20,400", emi: "Rs. 5,100/mo" },
        curriculum: ugYears([
          ["Principles of Management", "Business Communication", "Financial Accounting", "Microeconomics", "Business Mathematics"],
          ["Marketing Management", "Human Resource Management", "Business Law", "Cost Accounting", "Organizational Behavior"],
          ["Strategic Management", "Entrepreneurship", "Project Work"],
        ]),
        careers: defaultCareers,
      },
      {
        slug: "online-bca",
        name: "Online BCA",
        level: "ug",
        duration: "3 Years",
        fee: "Rs. 1,22,400 total",
        image: courseTech,
        rating: 4.8,
        reviews: 1580,
        tagline: "Bachelor of Computer Applications — launch a career in tech.",
        feesBreakdown: { fullFees: "Rs. 1,50,000", appliedFee: "Rs. 1,22,400", perSemester: "Rs. 20,400", emi: "Rs. 5,100/mo" },
        curriculum: ugYears([
          ["Programming in C", "Digital Electronics", "Mathematics", "PC Software", "Communication Skills"],
          ["Data Structures", "Operating Systems", "DBMS", "Web Technologies", "Java"],
          ["Software Engineering", "Cloud Computing", "Capstone Project"],
        ]),
        careers: techCareers,
      },
      {
        slug: "online-bcom",
        name: "Online B.Com",
        level: "ug",
        duration: "3 Years",
        fee: "Rs. 99,000 total",
        specializations: ["Financial Analytics", "Accounts & Finance"],
        image: courseCommerce,
        rating: 4.6,
        reviews: 980,
        tagline: "Bachelor of Commerce — master accounting, finance and business.",
        feesBreakdown: { fullFees: "Rs. 99,000", appliedFee: "Rs. 99,000", perSemester: "Rs. 16,500", emi: "Rs. 2,899/mo" },
        curriculum: ugYears([
          ["Financial Accounting", "Business Economics", "Business Law", "Business Statistics"],
          ["Corporate Accounting", "Cost Accounting", "Income Tax", "Auditing"],
          ["Financial Management", "GST", "Specialization Electives", "Project Work"],
        ]),
        careers: commerceCareers,
      },
      {
        slug: "online-ba",
        name: "Online BA",
        level: "ug",
        duration: "3 Years",
        fee: "Rs. 98,400 total",
        image: courseArts,
        rating: 4.5,
        reviews: 720,
        tagline: "Bachelor of Arts — a flexible, career-ready arts degree.",
        feesBreakdown: { fullFees: "Rs. 1,20,000", appliedFee: "Rs. 98,400", perSemester: "Rs. 16,400", emi: "Rs. 4,100/mo" },
        curriculum: ugYears([
          ["English", "Political Science", "History", "Sociology"],
          ["Public Administration", "Economics", "Psychology", "Communication"],
          ["Research Methods", "Electives", "Internship / Project"],
        ]),
        careers: artsCareers,
      },
    ] as Course[],
    pg: [
      {
        slug: "online-mba",
        name: "Online MBA",
        level: "pg",
        duration: "2 Years",
        fee: "Rs. 1,61,600 total",
        specializations: [
          "Marketing Management",
          "Human Resource Management",
          "Finance Management",
          "Logistics & Supply Chain Management",
          "Data Science",
          "Operations Management",
          "Business Analytics",
          "International Business",
          "Hospitals & Healthcare Management",
          "Digital Marketing",
          "Information Technology",
        ],
        image: courseBusiness,
        rating: 4.8,
        reviews: 2140,
        tagline: "Master of Business Administration — accelerate your leadership career.",
        feesBreakdown: { fullFees: "Rs. 2,00,000", appliedFee: "Rs. 1,61,600", perSemester: "Rs. 40,400", emi: "Rs. 6,733/mo" },
        curriculum: pgYears([
          ["Managerial Economics", "Financial Accounting", "Marketing Management", "Organizational Behaviour", "Business Statistics"],
          ["Strategic Management", "Operations", "Business Research", "Specialization Electives", "Capstone Project"],
        ]),
        careers: defaultCareers,
      },
      {
        slug: "online-mca",
        name: "Online MCA",
        level: "pg",
        duration: "2 Years",
        fee: "Rs. 1,29,600 total",
        specializations: [
          "Data Science",
          "Full Stack Development",
          "Machine Learning & AI",
          "Cyber Security",
          "AR/VR (Game Development)",
        ],
        image: courseTech,
        rating: 4.8,
        reviews: 1360,
        tagline: "Master of Computer Applications — go deep on modern software.",
        feesBreakdown: { fullFees: "Rs. 1,60,000", appliedFee: "Rs. 1,29,600", perSemester: "Rs. 32,400", emi: "Rs. 5,400/mo" },
        curriculum: pgYears([
          ["Advanced DBMS", "Object-Oriented Programming", "Data Structures & Algorithms", "Software Engineering"],
          ["AI & Machine Learning", "Cloud Computing", "Specialization Electives", "Major Project"],
        ]),
        careers: techCareers,
      },
      {
        slug: "online-mcom",
        name: "Online M.Com",
        level: "pg",
        duration: "2 Years",
        fee: "Rs. 81,600 total",
        image: courseCommerce,
        rating: 4.6,
        reviews: 640,
        tagline: "Master of Commerce — advance in finance, taxation and analytics.",
        feesBreakdown: { fullFees: "Rs. 1,00,000", appliedFee: "Rs. 81,600", perSemester: "Rs. 20,400", emi: "Rs. 3,400/mo" },
        curriculum: pgYears([
          ["Advanced Financial Accounting", "Managerial Economics", "Corporate Law", "Business Research"],
          ["Strategic Financial Management", "Taxation", "Electives", "Dissertation"],
        ]),
        careers: commerceCareers,
      },
      {
        slug: "online-ma",
        name: "Online MA",
        level: "pg",
        duration: "2 Years",
        fee: "Rs. 65,600 total",
        specializations: ["Sociology", "English", "History", "Political Science"],
        image: courseArts,
        rating: 4.5,
        reviews: 420,
        tagline: "Master of Arts — an advanced humanities degree, 100% online.",
        feesBreakdown: { fullFees: "Rs. 80,000", appliedFee: "Rs. 65,600", perSemester: "Rs. 16,400", emi: "Rs. 3,644/mo" },
        curriculum: pgYears([
          ["Core Discipline I", "Core Discipline II", "Research Methods", "Communication"],
          ["Advanced Electives", "Contemporary Studies", "Dissertation"],
        ]),
        careers: artsCareers,
      },
      {
        slug: "online-msc",
        name: "Online M.Sc",
        level: "pg",
        duration: "2 Years",
        fee: "Rs. 81,600 total",
        specializations: ["Mathematics", "Economics"],
        image: courseTech,
        rating: 4.6,
        reviews: 380,
        tagline: "Master of Science — build deep analytical and quantitative expertise.",
        feesBreakdown: { fullFees: "Rs. 1,00,000", appliedFee: "Rs. 81,600", perSemester: "Rs. 20,400", emi: "Rs. 3,400/mo" },
        curriculum: pgYears([
          ["Advanced Calculus / Microeconomics", "Linear Algebra / Macroeconomics", "Probability & Statistics", "Research Methods"],
          ["Specialization Electives", "Computational Methods", "Dissertation"],
        ]),
        careers: scienceCareers,
      },
    ] as Course[],
  },
  eligibility: [
    { level: "UG Programs", criteria: "10+2 from a recognized board with minimum 50% marks (45% for reserved categories)." },
    { level: "PG Programs", criteria: "Bachelor's degree in relevant discipline with minimum 50% marks (45% for reserved categories)." },
  ],
  process: [
    "Free counseling with AVEDU advisor",
    "Program & specialization selection",
    "Application form & document upload",
    "Fee payment (full / EMI)",
    "LMS access & orientation",
  ],
  placements: {
    partners: ["Cognizant", "Wipro", "HDFC Bank", "Amazon", "Byju's"],
    highlight:
      "Dedicated online placement cell with resume building, mock interviews and industry connects.",
  },
  scholarships: [
    "Merit scholarship up to 30%",
    "Defence & Government employee scholarship",
    "Divyaang scholarship",
    "Sports & extracurricular scholarship",
  ],
  faqs: [
    { q: "Is LPU Online degree valid?", a: "Yes, LPU's online programs are entitled by UGC-DEB and hold equal recognition as regular degrees for higher education and jobs." },
    { q: "Can I pay fees in EMI?", a: "Yes, 0% interest EMI options are available. Talk to an AVEDU counselor for eligible plans." },
    { q: "How are exams conducted?", a: "Exams are conducted online via a remote proctored system, from the comfort of your home." },
  ],
};

export const allCourses: Course[] = [...lpu.courses.pg, ...lpu.courses.ug];

// Short-form aliases so /courses/mba, /courses/mca etc. also work for SEO.
const slugAliases: Record<string, string> = {
  mba: "online-mba",
  mca: "online-mca",
  bca: "online-bca",
  bba: "online-bba",
  ba: "online-ba",
  bcom: "online-bcom",
  mcom: "online-mcom",
  ma: "online-ma",
  msc: "online-msc",
};

export const findCourse = (slug: string): Course | undefined => {
  const normalized = slugAliases[slug] ?? slug;
  return allCourses.find((c) => c.slug === normalized);
};
