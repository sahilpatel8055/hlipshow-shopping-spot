export type CompareRow = { label: string; lpu: string; rival: string };

export type Comparison = {
  slug: string;
  rival: string;
  shortRival: string;
  title: string;
  description: string;
  intro: string;
  rows: CompareRow[];
  lpuWins: string[];
  rivalWins: string[];
  verdict: string;
  faqs: { q: string; a: string }[];
};

export const comparisons: Comparison[] = [
  {
    rival: "Manipal University Online",
    slug: "lpu-vs-manipal",
    shortRival: "Manipal Online",
    title: "LPU Online vs Manipal Online 2026 — Fees, Accreditation & Placements Compared",
    description: "LPU Online vs Manipal University Online 2026: NAAC grade, UGC entitlement, MBA and MCA fees, EMI, LMS, placements and which one is better value.",
    intro:
      "LPU Online and Manipal University Online are two of the most compared online universities in India. Both are UGC-DEB entitled with strong brand recall, so the decision usually comes down to fee, specialization depth and how much placement support you actually need.",
    rows: [
      { label: "NAAC Grade", lpu: "A++", rival: "A+" },
      { label: "UGC-DEB Entitlement", lpu: "Yes", rival: "Yes" },
      { label: "Online MBA Fee (Total)", lpu: "₹2,02,000 (₹1,61,600 after discount)", rival: "₹1,66,000 – ₹1,75,000" },
      { label: "Online MCA Fee", lpu: "₹1,60,000 (₹1,29,600 after discount)", rival: "₹1,70,000+" },
      { label: "MBA Specializations", lpu: "11", rival: "8–10" },
      { label: "EMI", lpu: "0% interest EMI", rival: "EMI available" },
      { label: "Placement Support", lpu: "Dedicated online cell, 400+ partners", rival: "Placement assistance portal" },
      { label: "LMS Access", lpu: "24×7 with recorded lectures", rival: "24×7" },
      { label: "International Recognition", lpu: "WES recognized", rival: "WES recognized" },
    ],
    lpuWins: [
      "Higher institutional accreditation (NAAC A++ vs A+)",
      "Lower effective MCA and PG fee after discount",
      "Wider MBA specialization list including Business Analytics and Data Science",
      "0% interest EMI on every program",
    ],
    rivalWins: [
      "Strong legacy brand recognition in healthcare and management circles",
      "Well-structured alumni network",
    ],
    verdict:
      "If cost-to-accreditation ratio matters most, LPU Online wins — NAAC A++ at a lower effective fee with more specializations. Manipal Online remains a solid alternative for candidates who value its legacy brand.",
    faqs: [
      { q: "Is LPU Online better than Manipal Online?", a: "LPU Online holds a higher NAAC grade (A++ vs A+) and offers a lower effective fee with more MBA specializations. Both are UGC-DEB entitled and valid for jobs and higher studies." },
      { q: "Which is cheaper, LPU or Manipal online MBA?", a: "The LPU Online MBA at ₹1,61,600 after discount is generally cheaper than the comparable Manipal Online MBA." },
    ],
  },
  {
    rival: "Amity University Online",
    slug: "lpu-vs-amity",
    shortRival: "Amity Online",
    title: "LPU Online vs Amity Online 2026 — Which Online Degree Gives Better Value?",
    description: "LPU Online vs Amity University Online 2026 comparison: fees, NAAC accreditation, MBA specializations, EMI options, placements and value for money.",
    intro:
      "Amity Online is one of the most advertised online universities in India, while LPU Online competes on accreditation and price. Both are UGC-DEB entitled — the real difference shows up in what you pay.",
    rows: [
      { label: "NAAC Grade", lpu: "A++", rival: "A+" },
      { label: "UGC-DEB Entitlement", lpu: "Yes", rival: "Yes" },
      { label: "Online MBA Fee (Total)", lpu: "₹2,02,000 (₹1,61,600 after discount)", rival: "₹1,99,000 – ₹2,20,000" },
      { label: "Online BBA Fee", lpu: "₹1,50,000 (₹1,22,400 after discount)", rival: "₹1,60,000+" },
      { label: "MBA Specializations", lpu: "11", rival: "10+" },
      { label: "EMI", lpu: "0% interest EMI", rival: "EMI available" },
      { label: "Scholarships", lpu: "Merit up to 30%, defence, govt, sports, Divyaang", rival: "Merit and category scholarships" },
      { label: "Placement Support", lpu: "Dedicated online cell, 400+ partners", rival: "Placement assistance" },
    ],
    lpuWins: [
      "NAAC A++ accreditation",
      "Noticeably lower fee on MBA, BBA and BCA after discount",
      "Broader scholarship coverage including defence and sports quotas",
    ],
    rivalWins: [
      "Aggressive international tie-ups and global marketing presence",
      "Large learner community across Delhi NCR",
    ],
    verdict:
      "LPU Online is the better value pick for most Indian learners in 2026 — same UGC entitlement, higher NAAC grade and a lower total fee. Amity Online suits candidates who specifically want its international positioning.",
    faqs: [
      { q: "Is LPU Online cheaper than Amity Online?", a: "Yes. LPU Online programs are generally 15–25% cheaper than the equivalent Amity Online programs after discount." },
      { q: "Are both degrees equally valid?", a: "Yes. Both universities offer UGC-DEB entitled online degrees valid for jobs, government exams and higher studies." },
    ],
  },
  {
    rival: "Chandigarh University Online",
    slug: "lpu-vs-chandigarh",
    shortRival: "CU Online",
    title: "LPU Online vs Chandigarh University Online 2026 — Full Comparison",
    description: "LPU Online vs Chandigarh University Online 2026: accreditation, program fees, specializations, EMI, placement support and which suits working professionals better.",
    intro:
      "Both universities are based in Punjab and compete directly for online learners in North India. LPU carries a NAAC A++ grade and a larger online program catalogue; CU Online is a newer but fast-growing entrant.",
    rows: [
      { label: "NAAC Grade", lpu: "A++", rival: "A+" },
      { label: "UGC-DEB Entitlement", lpu: "Yes", rival: "Yes" },
      { label: "Online MBA Fee (Total)", lpu: "₹2,02,000 (₹1,61,600 after discount)", rival: "₹1,60,000 – ₹1,80,000" },
      { label: "Program Catalogue", lpu: "MBA, MCA, MA, M.Sc, M.Com, BBA, BCA, BA, B.Com", rival: "MBA, MCA, BBA, BCA, B.Com and select PG" },
      { label: "MBA Specializations", lpu: "11", rival: "8" },
      { label: "EMI", lpu: "0% interest EMI", rival: "EMI available" },
      { label: "Placement Support", lpu: "Dedicated online cell, 400+ partners", rival: "Career services team" },
      { label: "Online Learning Experience", lpu: "Live weekend classes + recordings", rival: "Live and recorded sessions" },
    ],
    lpuWins: [
      "Higher NAAC grade and longer track record in distance and online education",
      "Larger program and specialization catalogue",
      "Stronger established recruiter network",
    ],
    rivalWins: [
      "Competitive entry-level pricing on some programs",
      "Strong campus placement reputation that carries brand halo",
    ],
    verdict:
      "Choose LPU Online for accreditation depth, specialization choice and a more mature online placement cell. Chandigarh University Online is worth considering if a specific program there matches your goal at a lower fee.",
    faqs: [
      { q: "Which is better for an online MBA — LPU or Chandigarh University?", a: "LPU Online offers a higher NAAC grade, more specializations and a dedicated online placement cell, making it the stronger overall pick for most working professionals." },
      { q: "Are both UGC approved?", a: "Yes, both offer UGC-DEB entitled online degrees." },
    ],
  },
  {
    rival: "Jain University Online",
    slug: "lpu-vs-jain",
    shortRival: "Jain Online",
    title: "LPU Online vs Jain University Online 2026 — Fees, Ranking & Placements",
    description: "LPU Online vs Jain (Deemed-to-be University) Online 2026: NAAC grade, MBA and BBA fees, specializations, EMI, placement support and final verdict.",
    intro:
      "Jain Online is a popular choice in South India with a strong management focus, while LPU Online has broader national reach. Both are UGC-DEB entitled, so accreditation and price drive the decision.",
    rows: [
      { label: "NAAC Grade", lpu: "A++", rival: "A++" },
      { label: "UGC-DEB Entitlement", lpu: "Yes", rival: "Yes" },
      { label: "Online MBA Fee (Total)", lpu: "₹2,02,000 (₹1,61,600 after discount)", rival: "₹1,80,000 – ₹2,00,000" },
      { label: "Online BBA Fee", lpu: "₹1,50,000 (₹1,22,400 after discount)", rival: "₹1,50,000+" },
      { label: "MBA Specializations", lpu: "11", rival: "10+ including dual specialization" },
      { label: "EMI", lpu: "0% interest EMI", rival: "EMI available" },
      { label: "Regional Strength", lpu: "Pan-India, strong in North & Central India", rival: "Strong in South India" },
      { label: "Placement Support", lpu: "Dedicated online cell, 400+ partners", rival: "Placement assistance and industry tie-ups" },
    ],
    lpuWins: [
      "Lower effective fee across MBA, MCA and BBA",
      "Larger overall program catalogue including MA, M.Sc and M.Com",
      "0% interest EMI on all programs",
    ],
    rivalWins: [
      "Dual specialization option in the online MBA",
      "Deeper recruiter presence in Bengaluru and South Indian markets",
    ],
    verdict:
      "Both hold NAAC A++. Pick LPU Online for lower cost and a wider catalogue; pick Jain Online if you are based in South India and want its dual-specialization MBA.",
    faqs: [
      { q: "Is Jain Online better than LPU Online?", a: "Both are NAAC A++ and UGC-DEB entitled. LPU Online is typically cheaper with a wider program range; Jain Online has stronger South India recruiter reach." },
      { q: "Which has more MBA specializations?", a: "LPU Online offers 11 specializations; Jain Online counters with a dual-specialization option." },
    ],
  },
  {
    rival: "DY Patil University Online",
    slug: "lpu-vs-dy-patil",
    shortRival: "DY Patil Online",
    title: "LPU Online vs DY Patil Online 2026 — Which Online MBA Is Worth It?",
    description: "LPU Online vs DY Patil University Online 2026: accreditation, MBA and MCA fees, specializations, EMI plans, placements and value-for-money verdict.",
    intro:
      "DY Patil Online is known for its healthcare and hospital management specializations, while LPU Online is the broader generalist option. Here is how they stack up across the factors that matter.",
    rows: [
      { label: "NAAC Grade", lpu: "A++", rival: "A++" },
      { label: "UGC-DEB Entitlement", lpu: "Yes", rival: "Yes" },
      { label: "Online MBA Fee (Total)", lpu: "₹2,02,000 (₹1,61,600 after discount)", rival: "₹1,80,000 – ₹2,10,000" },
      { label: "Standout Specializations", lpu: "Business Analytics, Data Science, Finance, Marketing", rival: "Hospital & Healthcare Management" },
      { label: "Program Catalogue", lpu: "9 UG and PG programs", rival: "Mainly MBA, MCA and BBA" },
      { label: "EMI", lpu: "0% interest EMI", rival: "EMI available" },
      { label: "Placement Support", lpu: "Dedicated online cell, 400+ partners", rival: "Placement assistance" },
      { label: "International Recognition", lpu: "WES recognized", rival: "Recognized" },
    ],
    lpuWins: [
      "Wider program catalogue across UG and PG",
      "Lower effective fee after discount",
      "Stronger analytics and technology specializations",
    ],
    rivalWins: [
      "Best-in-class hospital and healthcare management specialization",
      "Strong Maharashtra healthcare industry connections",
    ],
    verdict:
      "Go with DY Patil Online only if you want a healthcare management career. For every other stream — analytics, finance, marketing, IT — LPU Online offers better range at a lower price.",
    faqs: [
      { q: "Which is better for a healthcare MBA?", a: "DY Patil Online has the stronger hospital and healthcare management specialization; LPU Online also offers a healthcare management elective within its MBA." },
      { q: "Which is cheaper?", a: "LPU Online is generally cheaper after the current fee discount." },
    ],
  },
  {
    rival: "NMIMS Online (CDOE)",
    slug: "lpu-vs-nmims",
    shortRival: "NMIMS Online",
    title: "LPU Online vs NMIMS Online 2026 — Brand, Fees & ROI Compared",
    description: "LPU Online vs NMIMS Online (CDOE) 2026: accreditation, MBA fee difference, specializations, EMI, placement support and which delivers better ROI.",
    intro:
      "NMIMS carries a premium management brand with a premium fee to match. LPU Online competes on accreditation parity and a substantially lower price. If ROI is your metric, the fee gap matters a lot.",
    rows: [
      { label: "NAAC Grade", lpu: "A++", rival: "A+" },
      { label: "UGC-DEB Entitlement", lpu: "Yes", rival: "Yes" },
      { label: "Online MBA / PGDM Fee", lpu: "₹2,02,000 (₹1,61,600 after discount)", rival: "₹2,40,000 – ₹3,00,000+" },
      { label: "Brand Perception (Management)", lpu: "Strong national", rival: "Premium, especially in Mumbai/BFSI" },
      { label: "MBA Specializations", lpu: "11", rival: "8–10" },
      { label: "EMI", lpu: "0% interest EMI", rival: "EMI available" },
      { label: "Placement Support", lpu: "Dedicated online cell, 400+ partners", rival: "Career services, strong BFSI network" },
    ],
    lpuWins: [
      "Roughly 40% lower fee for a comparable UGC-entitled MBA",
      "Higher NAAC grade",
      "0% interest EMI keeps monthly outgo low",
    ],
    rivalWins: [
      "Premium management brand recall in BFSI and consulting",
      "Established Mumbai corporate network",
    ],
    verdict:
      "If your employer values brand above all and you can absorb the fee, NMIMS Online is defensible. For most working professionals optimizing ROI, LPU Online delivers the same UGC-entitled outcome at a much lower cost.",
    faqs: [
      { q: "Is NMIMS Online worth the extra fee over LPU Online?", a: "Only if you are targeting BFSI or consulting roles in Mumbai where the brand carries weight. For most learners the LPU Online MBA delivers a better cost-to-outcome ratio." },
      { q: "Are both degrees UGC entitled?", a: "Yes, both offer UGC-DEB entitled online programs." },
    ],
  },
];

export const findComparison = (slug: string) => comparisons.find((c) => c.slug === slug);
export const comparisonPaths = comparisons.map((c) => `/compare/${c.slug}`);
