import lpuHero from "@/assets/lpu-hero.jpg";

export type Course = {
  name: string;
  duration: string;
  fee: string;
  specializations?: string[];
};

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
    "Lovely Professional University (LPU) offers UGC-entitled online degree programs designed for working professionals and students who want the flexibility of learning from anywhere. Programs are delivered through a modern LMS with recorded lectures, live sessions, mentor support, and proctored online exams.",
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
  courses: {
    ug: [
      { name: "Online BBA", duration: "3 Years", fee: "₹1,20,000 total", specializations: ["Marketing", "HR", "Finance", "IB"] },
      { name: "Online BCA", duration: "3 Years", fee: "₹1,35,000 total", specializations: ["Cloud Computing", "Data Analytics"] },
      { name: "Online B.Com", duration: "3 Years", fee: "₹99,000 total", specializations: ["Financial Analytics"] },
      { name: "Online BA", duration: "3 Years", fee: "₹78,000 total" },
    ] as Course[],
    pg: [
      { name: "Online MBA", duration: "2 Years", fee: "₹1,70,000 total", specializations: ["Marketing", "Finance", "HR", "Business Analytics", "IT"] },
      { name: "Online MCA", duration: "2 Years", fee: "₹1,60,000 total", specializations: ["AI/ML", "Data Science"] },
      { name: "Online M.Com", duration: "2 Years", fee: "₹85,000 total" },
      { name: "Online MA", duration: "2 Years", fee: "₹60,000 total" },
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
