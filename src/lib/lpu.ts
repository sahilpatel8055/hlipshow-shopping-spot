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
        curriculum: [
          { year: "Semester 1", subjects: ["Business Economics", "Business Environment", "Business Organisation and Management", "Office Automation Tools", "English Communication Skills"] },
          { year: "Semester 2", subjects: ["Principles of Marketing", "Research Methodology", "Business Mathematics and Statistics", "Cost and Management Accounting", "Generic Elective I", "Community Development Project"] },
          { year: "Semester 3", subjects: ["Business Ethics", "Human Resource Management", "Financial Accounting", "Environmental Sciences", "Advanced English Communication Skills"] },
          { year: "Semester 4", subjects: ["Business Law", "Fundamentals of Financial Management", "Generic Elective II", "Skill Enhancement Course I", "Skill Enhancement Course II"] },
          { year: "Semester 5", subjects: ["Discipline Specific Elective I", "Discipline Specific Elective II", "Generic Elective III", "Skill Enhancement Course III"] },
          { year: "Semester 6", subjects: ["E-commerce", "Discipline Specific Elective III", "Discipline Specific Elective IV", "Generic Elective IV", "Skill Enhancement Course IV"] },
        ],
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
        curriculum: [
          { year: "Semester 1", subjects: ["Introduction to Information Technology", "Digital Computer and Fundamentals", "Mathematics-I", "Communicative English", "Programming in C"] },
          { year: "Semester 2", subjects: ["Discrete Mathematics", "Accounting and Financial Management", "Data Structure Using 'C' Lab", "Core Java", "Environmental Studies"] },
          { year: "Semester 3", subjects: ["Management Information Systems", "Mathematics-III (Numerical Analysis)", "Operating Systems", "Computer Organization and Architecture", "Object-Oriented Programming in C++"] },
          { year: "Semester 4", subjects: ["PC Applications and Internet Technology", "Database Management Systems", "Computer Networking", "Software Engineering", "Programming in Python"] },
          { year: "Semester 5", subjects: ["Analysis and Design of Algorithms", "Computer Graphics", ".NET Technology", "Linux Administration", "Project-I"] },
          { year: "Semester 6", subjects: ["IOT Based Application", "Web Development Using PHP", "Business Intelligence", "Project-II"] },
        ],
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
        curriculum: [
          { year: "Semester 1", subjects: ["Financial Reporting, Statements and Analysis", "Managerial Economics", "International Business Environment", "Marketing Management", "Organizational Behaviour & Human Resource Dynamics"] },
          { year: "Semester 2", subjects: ["Corporate Finance", "Operations Management & Research", "Business Analytics", "Research Methodology", "Legal Aspects of Business", "Communication for Leaders"] },
          { year: "Semester 3", subjects: ["Discipline Specific Elective I", "Discipline Specific Elective II", "Discipline Specific Elective III", "Seminar on Summer Training", "Generic Elective I"] },
          { year: "Semester 4", subjects: ["Discipline Specific Elective IV", "Discipline Specific Elective V", "Discipline Specific Elective VI"] },
        ],
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
        curriculum: [
          { year: "Semester 1", subjects: ["Software Engineering Practices", "Object Oriented Programming using C++", "Data Warehousing and Data Mining", "Linux and Shell Scripting", "Data Communication and Networking", "Skill Enhancement Course I", "Programming in C (S/U)", "Database Management System (S/U)"] },
          { year: "Semester 2", subjects: ["Programming in Java", "Advanced Data Structures", "Introduction to Big Data", "Cloud Computing", "Mathematical Foundation for Computer Science", "Web Technologies", "Skill Enhancement Course II"] },
          { year: "Semester 3", subjects: ["Programming in Python", "Skill Enhancement Course III", "Discipline Specific Elective I", "Discipline Specific Elective II", "Generic Elective I", "Generic Elective II"] },
          { year: "Semester 4", subjects: ["Skill Enhancement Course IV", "Discipline Specific Elective III", "Discipline Specific Elective IV", "Generic Elective III", "Generic Elective IV", "Project Work"] },
        ],
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
        curriculum: [
          { year: "Semester 1", subjects: ["Managerial Economics", "Organizational Behaviour and Human Resource Dynamics", "Financial Reporting, Statements and Analysis", "Fundamental of Research", "Fundamentals of Information Technology"] },
          { year: "Semester 2", subjects: ["Corporate Tax Structure and Planning", "Research Methodology", "International Business Environment", "Marketing Management", "Generic Elective I"] },
          { year: "Semester 3", subjects: ["Corporate Strategy and Entrepreneurship", "Forensic Accounting and Fraud Examination", "International Banking and Forex Management", "International Accounting", "Generic Elective II"] },
          { year: "Semester 4", subjects: ["Management Science", "International Financial Management", "Generic Elective III", "Generic Elective IV"] },
        ],
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
        curriculum: [
          { year: "MA Economics", subjects: ["Microeconomics Theory and Analysis-I", "Macroeconomics Theory and Analysis-I", "Fundamentals of Information Technology", "Fundamental of Research", "Indian Economic Development", "Microeconomics Theory and Analysis-II", "Macroeconomics Theory and Analysis-II", "Mathematics for Economists", "Research Methodology", "International Economics", "Monetary Theory and Policy", "Environmental Economics", "Public Economics", "Economics of Development", "Dissertation"] },
          { year: "MA History", subjects: ["History of India: Polity and Economy from 1200 AD to 1750 AD", "Fundamental of Research", "Fundamentals of Information Technology", "Society and Culture of India 1200 AD-1750 AD", "History of India from 650-1200 AD", "History of India 1858-1964 AD", "Teaching Aptitude", "Women in Indian History", "Economic History of India from 1757 AD to 1947 AD", "History of Modern Europe", "Twentieth Century World", "Dissertation"] },
          { year: "MA English", subjects: ["Academic English", "British Drama", "British Poetry", "Fundamental of Research", "Fundamentals of Information Technology", "British Fiction", "Literary Criticism", "Introduction to the Study of Language", "Teaching Aptitude", "Discursive Prose", "Post-Independence Indian Literature", "Literary Theory", "Post World War II Postcolonial Literatures and Cultural Studies", "Dissertation"] },
          { year: "MA Sociology", subjects: ["Classical Sociological Tradition", "Fundamentals of Sociology", "Science, Technology and Society", "Fundamental of Research", "Fundamentals of Information Technology", "Globalisation and Society", "Methodology of Social Research", "Criminal Justice and Correctional Management", "Teaching Aptitude", "Gender and Society", "Sociology of Kinship, Family and Marriage", "Sociology of Demography", "Sociology of Health", "Dissertation"] },
        ],
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
        curriculum: [
          { year: "M.Sc Maths — Semester 1", subjects: ["Real Analysis-I", "Advanced Abstract Algebra-I", "Theory of Differential Equations", "Fundamentals of Research", "Fundamentals of Information Technology"] },
          { year: "M.Sc Maths — Semester 2", subjects: ["Real Analysis-II", "Advanced Abstract Algebra-II", "Research Methods and Design", "Complex Analysis-I", "Calculus of Variation and Integral Equation", "Generic Elective I"] },
          { year: "M.Sc Maths — Semester 3", subjects: ["Partial Differential Equations", "Complex Analysis-II", "Topology", "Generic Elective II", "Generic Elective III", "Term Paper"] },
          { year: "M.Sc Maths — Semester 4", subjects: ["Mechanics", "Functional Analysis", "Dissertation", "Generic Elective IV"] },
          { year: "M.Sc Economics — Semester 1", subjects: ["Microeconomics Theory and Analysis-I", "Macroeconomics Theory and Analysis-I", "Fundamentals of Information Technology", "Indian Economic Development", "Fundamental of Research"] },
          { year: "M.Sc Economics — Semester 2", subjects: ["Microeconomics Theory and Analysis-II", "Macroeconomics Theory and Analysis-II", "Mathematics for Economists", "Generic Elective I", "Research Methodology"] },
          { year: "M.Sc Economics — Semester 3", subjects: ["International Economics", "Environmental Economics", "Monetary Theory and Policy", "Public Economics", "Generic Elective II", "Term Paper"] },
          { year: "M.Sc Economics — Semester 4", subjects: ["Economics of Development", "Trade and Development", "Generic Elective III", "Generic Elective IV", "Dissertation"] },
        ],
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
