import type {
  Author,
  BlogPost,
  Category,
  FAQ,
  FounderProfile,
  HomePageContent,
  Resource,
  ServiceGroup,
  SiteSettings,
  Testimonial,
} from "@/lib/types";
import { BRAND_EMAIL, BRAND_NAME } from "@/lib/brand";

export const siteSettings: SiteSettings = {
  brandName: BRAND_NAME,
  tagline:
    "Premium thesis advisory for medical postgraduates who need clear research direction, stronger structure, and confident submission readiness.",
  description:
    "A medico-academic advisory brand supporting medical postgraduates with thesis planning, methodology, statistics, writing, and presentation, with especially strong end-to-end support in pediatrics.",
  contactEmail: BRAND_EMAIL,
  whatsappLink: "https://wa.me/919999999999",
  whatsappDisplay: "+91 99999 99999",
  location: "Serving medical postgraduate trainees across India",
  consultationResponseTime: "Replies within 24 working hours.",
  socialLinks: [
    { label: "Instagram", href: "https://instagram.com/" },
    { label: "LinkedIn", href: "https://linkedin.com/" },
    { label: "YouTube", href: "https://youtube.com/" },
    { label: "WhatsApp", href: "https://wa.me/919999999999" },
  ],
};

export const homePageContent: HomePageContent = {
  heroTitle:
    "Expert thesis advisory for medical postgraduates.",
  heroSubtitle:
    "Structured guidance in research, methodology, statistics, writing, and presentation, with especially strong end-to-end support in pediatrics.",
  heroDescription: [
    "Premium, consultation-led support for medical thesis work.",
    "Ethical guidance from idea to submission.",
  ],
  painPoints: [
    "Topic confusion and delayed approvals",
    "Methodology and variable planning uncertainty",
    "Statistics, results, and discussion bottlenecks",
    "Thesis work competing with residency workload",
  ],
  valueTitle:
    "A sharper, calmer thesis process for busy medical postgraduates.",
  valueDescription:
    "The advisory model is built around structure, clarity, and ethical academic support. Pediatrics remains a major specialization, especially for full end-to-end guidance.",
  processSteps: [
    "Assess the stage",
    "Review the gaps",
    "Build the plan",
    "Guide the execution",
    "Prepare for submission",
  ],
  whyChooseUs: [
    "Premium medico-academic positioning",
    "Strong pediatric end-to-end specialization",
    "Methodology and statistics explained clearly",
    "Ethical, consultation-based guidance",
    "Structured support across key milestones",
    "Responsive, professional communication",
  ],
  leadCtaTitle: "Book a consultation shaped around your exact thesis stage.",
  leadCtaDescription:
    "Share your current stage, draft, or bottleneck and receive focused academic direction.",
  finalCtaTitle:
    "Bring clarity back to your thesis journey.",
  finalCtaDescription:
    "If you need expert review, structured guidance, or stronger momentum, the next conversation can define the right next step.",
};

export const founderProfiles: FounderProfile[] = [
  {
    name: "Dr. [Founder Name]",
    credentials: "MD Pediatrics, Fellowship / Academic Credentials",
    role: "Pediatric thesis and clinical research mentor",
    bio: "A placeholder profile for the pediatric specialist founder. This role leads clinical framing, topic refinement, literature interpretation, and end-to-end pediatric thesis support where specialty understanding matters most.",
  },
  {
    name: "[Research Expert Name]",
    credentials: "Statistician / PhD / MPH / Research Methodology Credentials",
    role: "Biostatistics and research methodology expert",
    bio: "A placeholder profile for the methodology and statistics expert. This role supports study design, variable logic, data collection structure, analysis interpretation, and stronger academic presentation.",
  },
];

export const serviceGroups: ServiceGroup[] = [
  {
    title: "Topic and Proposal Guidance",
    intro:
      "Early-stage advisory that brings focus, feasibility, and academic structure to thesis planning.",
    ctaLabel: "Book a Consultation",
    services: [
      {
        title: "Guidance in Topic Selection",
        description:
          "Select or refine a thesis topic that balances relevance, feasibility, and research value within residency constraints.",
        points: [
          "Refining broad ideas into a workable thesis question",
          "Assessing feasibility, scope, and practical execution",
          "Aligning topic choice with specialty relevance and institutional realities",
        ],
      },
      {
        title: "Presentation of Thesis Proposal",
        description:
          "Structure the proposal so the rationale, objectives, and methodology communicate clearly and professionally.",
        points: [
          "Improving presentation flow and logic",
          "Clarifying the rationale and objectives",
          "Preparing for proposal review conversations with confidence",
        ],
      },
    ],
  },
  {
    title: "Literature and Methodology Support",
    intro:
      "A cleaner bridge between the question you want to study and the framework required to study it well.",
    ctaLabel: "Request Expert Guidance",
    services: [
      {
        title: "Surveying the Literature",
        description:
          "Identify strong papers, search more purposefully, and organize the review into a coherent academic chapter.",
        points: [
          "Literature search direction and source selection",
          "Thematic organisation of previous studies",
          "Sharper interpretation of what existing evidence is saying",
        ],
      },
      {
        title: "Guiding Through Methodology",
        description:
          "Build clarity around aims, objectives, hypotheses, design, variables, definitions, and methodological flow.",
        points: [
          "Study design and research question guidance",
          "Operational definitions and variable planning",
          "Inclusion and exclusion criteria alignment",
        ],
      },
    ],
  },
  {
    title: "Data Collection and Analysis Guidance",
    intro:
      "Support for turning methodology into practical data capture and then presenting outputs with confidence.",
    ctaLabel: "Book a Consultation",
    services: [
      {
        title: "Finalizing Protocols for Data Collection",
        description:
          "Prepare the proforma, data collection sheet, and documentation logic needed for consistent and reliable data capture.",
        points: [
          "Proforma planning and variable logic",
          "Data sheet readiness and documentation consistency",
          "Reducing confusion before data collection begins",
        ],
      },
      {
        title: "Analysing the Data",
        description:
          "Understand statistical planning, interpret outputs, and organize tables and figures so the results chapter becomes easier to build.",
        points: [
          "Guidance around analysis planning",
          "Interpretation of outputs and study findings",
          "Organising results into clear tables and figures",
        ],
      },
    ],
  },
  {
    title: "Writing, Editing, and Submission Readiness",
    intro:
      "The final layer of support for clarity, presentation, and submission readiness.",
    ctaLabel: "Request Expert Guidance",
    services: [
      {
        title: "Editing and Formatting the Thesis",
        description:
          "Refine language, structure, chapter flow, tables, discussion, references, and presentation details before submission.",
        points: [
          "Language refinement and chapter organisation",
          "Discussion structuring and formatting support",
          "Submission readiness with academic polish",
        ],
      },
    ],
  },
];

export const faqs: FAQ[] = [
  {
    question: "Who is this service for?",
    answer:
      "This service is designed for medical postgraduate trainees in India who need structured thesis guidance. Pediatrics is a major area of strength, especially for full end-to-end support.",
  },
  {
    question: "Do you help only pediatric residents?",
    answer:
      "No. The overall advisory brand is broader and medico-academic in nature, but pediatrics is a particularly strong specialization and the area where end-to-end support is currently the strongest.",
  },
  {
    question: "Do you write the thesis for students?",
    answer:
      "No. The work is positioned ethically as academic advisory, mentoring, structuring, review, and research support. The goal is to help postgraduates strengthen their own thesis work with clarity and confidence.",
  },
  {
    question: "Can you help with methodology and discussion?",
    answer:
      "Yes. Guidance can cover research design, variables, data collection logic, interpretation of results, discussion structure, and overall thesis clarity.",
  },
  {
    question: "Can you guide me if I have already started my thesis?",
    answer:
      "Absolutely. Many residents reach out after topic approval, during data collection, while working on results, or when they feel stuck in discussion or formatting.",
  },
  {
    question: "Is this useful for publication preparation?",
    answer:
      "Yes. Strong structuring, methodological clarity, and better interpretation can support later publication work, although the primary focus remains thesis advisory.",
  },
  {
    question: "How will consultation happen?",
    answer:
      "Consultation can happen through scheduled calls, document review, and structured guidance discussions based on your stage and requirements.",
  },
  {
    question: "Do you help from topic selection to final formatting?",
    answer:
      "Yes. The advisory model is designed to support residents across the full thesis journey, from topic refinement and proposal logic to final thesis presentation readiness.",
  },
];

export const testimonials: Testimonial[] = [
  {
    name: "Dr. Shreya",
    role: "MD Pediatrics Resident",
    quote:
      "What helped most was the clarity. I had been stuck at the methodology stage, and the guidance helped me organise the design, variables, and writing flow in a way that finally felt manageable.",
  },
  {
    name: "Dr. Dibyasa",
    role: "DNB Pediatrics Resident",
    quote:
      "The support felt structured, calm, and very responsive. The literature review and results presentation became much easier once the work was broken into focused steps.",
  },
  {
    name: "Dr. Shireen",
    role: "Medical Postgraduate Trainee",
    quote:
      "I reached out when I was uncertain about objectives, protocol flow, and discussion writing. The review process was professional and helped me understand the logic instead of just making superficial edits.",
  },
  {
    name: "Dr. Sonam",
    role: "MD Pediatrics Resident",
    quote:
      "The biggest difference was in understanding statistics and presenting findings properly. The guidance felt ethical, expert-led, and tailored to what residency actually feels like.",
  },
];

export const blogCategories: Category[] = [
  {
    title: "Thesis Topic Selection",
    slug: "thesis-topic-selection",
    description: "How to choose focused, feasible medical thesis topics.",
  },
  {
    title: "Research Methodology",
    slug: "research-methodology",
    description: "Study design, objectives, variables, and protocol logic.",
  },
  {
    title: "Biostatistics Basics",
    slug: "biostatistics-basics",
    description: "Statistics concepts residents need for thesis clarity.",
  },
  {
    title: "Pediatric Thesis Writing",
    slug: "pediatric-thesis-writing",
    description: "Writing structure for literature review, results, and discussion.",
  },
  {
    title: "Discussion and Interpretation",
    slug: "discussion-and-interpretation",
    description: "Interpreting findings and writing stronger discussion chapters.",
  },
  {
    title: "Viva Preparation",
    slug: "viva-preparation",
    description: "Preparation ideas for thesis presentation and viva.",
  },
  {
    title: "Common Thesis Mistakes",
    slug: "common-thesis-mistakes",
    description:
      "Typical thesis missteps and how pediatric residents can avoid them.",
  },
  {
    title: "Publication from Thesis",
    slug: "publication-from-thesis",
    description:
      "Turning pediatric thesis work into future publication opportunities.",
  },
];

const authors: Author[] = [
  {
    name: "Editorial Team",
    role: BRAND_NAME,
    bio: "Research-led educational content created for medical postgraduates in India, with strong pediatric specialization.",
  },
];

function paragraph(text: string) {
  return {
    _type: "block",
    style: "normal",
    children: [{ _type: "span", text }],
  };
}

export const blogPosts: BlogPost[] = [
  {
    title: "How to Choose a Good Pediatric Thesis Topic",
    slug: "how-to-choose-a-good-pediatric-thesis-topic",
    excerpt:
      "A practical framework for choosing a pediatric thesis topic that is clinically relevant, feasible, and defensible inside residency timelines.",
    seoTitle: "How to Choose a Good Pediatric Thesis Topic",
    seoDescription:
      "Learn how pediatric residents in India can choose a feasible, clinically relevant, and researchable thesis topic with confidence.",
    category: blogCategories[0],
    author: authors[0],
    featured: true,
    publishedAt: "2026-02-11",
    readTime: "7 min read",
    body: [
      paragraph(
        "The strongest pediatric thesis topics usually sit at the intersection of relevance, feasibility, and clarity. A topic that sounds impressive but cannot be executed within your clinical schedule will quickly become a burden."
      ),
      paragraph(
        "Start by listing the patient populations, clinical settings, and recurring problems you see during training. Then assess whether the question can be answered with realistic data access, measurable variables, and a clear study design."
      ),
      paragraph(
        "Before finalising the title, ask whether the scope is narrow enough to study well. Many residents struggle not because the idea is weak, but because the topic remains too broad for efficient execution."
      ),
    ],
  },
  {
    title: "Common Mistakes Junior Residents Make in Thesis Methodology",
    slug: "common-mistakes-junior-residents-make-in-thesis-methodology",
    excerpt:
      "Methodology confusion often starts with unclear objectives, poorly defined variables, and weak protocol flow. Here is how to avoid the most frequent errors.",
    seoTitle: "Common Mistakes Junior Residents Make in Thesis Methodology",
    seoDescription:
      "Avoid common thesis methodology mistakes in pediatric postgraduate research, from unclear objectives to weak variable planning.",
    category: blogCategories[1],
    author: authors[0],
    featured: true,
    publishedAt: "2026-02-18",
    readTime: "8 min read",
    body: [
      paragraph(
        "Residents often begin methodology writing before the research question is fully clarified. That usually leads to vague objectives, uncertain variables, and avoidable revisions later."
      ),
      paragraph(
        "A robust methodology chapter should explain design, setting, duration, population, inclusion criteria, exclusion criteria, variables, operational definitions, and analysis planning in a sequence that feels logical."
      ),
      paragraph(
        "If any section sounds generic or detached from the actual pediatric question, pause and rework the logic before collecting data."
      ),
    ],
  },
  {
    title: "How to Write Objectives for a Pediatric Thesis",
    slug: "how-to-write-objectives-for-a-pediatric-thesis",
    excerpt:
      "Clear objectives create direction for the entire thesis. Here is a simple way to write them without overcomplicating the study.",
    seoTitle: "How to Write Objectives for a Pediatric Thesis",
    seoDescription:
      "Learn how pediatric postgraduate students can write focused thesis objectives that support methodology and results planning.",
    category: blogCategories[1],
    author: authors[0],
    publishedAt: "2026-02-25",
    readTime: "6 min read",
    body: [
      paragraph(
        "Good objectives are specific, realistic, and measurable. They should help the reader understand exactly what the study intends to examine."
      ),
      paragraph(
        "A common problem is writing objectives that are too broad or that mix multiple ideas together. Each objective should support the thesis question and later connect clearly with the results section."
      ),
    ],
  },
  {
    title:
      "Difference Between Aim, Objectives, and Hypothesis in Medical Research",
    slug: "difference-between-aim-objectives-and-hypothesis-in-medical-research",
    excerpt:
      "A simple explanation of aim, objectives, and hypothesis for residents who want better methodology clarity.",
    seoTitle:
      "Difference Between Aim, Objectives, and Hypothesis in Medical Research",
    seoDescription:
      "Understand the difference between aim, objectives, and hypothesis in pediatric thesis work and medical research writing.",
    category: blogCategories[1],
    author: authors[0],
    publishedAt: "2026-03-03",
    readTime: "5 min read",
    body: [
      paragraph(
        "The aim describes the larger intention of the study. Objectives break that aim into specific measurable tasks. A hypothesis, where relevant, states an expected relationship or difference that the study intends to examine."
      ),
      paragraph(
        "When these three are mixed up, the entire thesis can start feeling incoherent. Taking time to distinguish them early makes the rest of the work easier."
      ),
    ],
  },
  {
    title: "How to Present Results in a Thesis Without Confusion",
    slug: "how-to-present-results-in-a-thesis-without-confusion",
    excerpt:
      "A structured approach to tables, figures, and narrative explanation so the results chapter becomes clearer and more readable.",
    seoTitle: "How to Present Results in a Thesis Without Confusion",
    seoDescription:
      "Learn how pediatric residents can organise thesis results with clear tables, figures, and clinically meaningful narration.",
    category: blogCategories[3],
    author: authors[0],
    featured: true,
    publishedAt: "2026-03-10",
    readTime: "7 min read",
    body: [
      paragraph(
        "The results chapter should not feel like a random collection of numbers. Readers need a sequence that follows the objectives and helps them understand what the data is actually saying."
      ),
      paragraph(
        "Use tables and figures purposefully, avoid duplication, and write short narrative interpretation around each major result. Clarity matters more than density."
      ),
    ],
  },
  {
    title: "How to Write Discussion in a Pediatric Thesis",
    slug: "how-to-write-discussion-in-a-pediatric-thesis",
    excerpt:
      "Turn raw findings into interpretation by linking results with existing literature, clinical meaning, and limitations.",
    seoTitle: "How to Write Discussion in a Pediatric Thesis",
    seoDescription:
      "Understand how to write a stronger discussion chapter for a pediatric thesis with interpretation, comparison, and limitations.",
    category: blogCategories[4],
    author: authors[0],
    publishedAt: "2026-03-17",
    readTime: "8 min read",
    body: [
      paragraph(
        "A good discussion chapter explains what the findings mean, how they compare with previous studies, and why the results matter in a pediatric context."
      ),
      paragraph(
        "It should also acknowledge limitations honestly and avoid overclaiming. This is where academic maturity becomes visible."
      ),
    ],
  },
  {
    title: "Thesis Viva Preparation for Pediatric PG Residents",
    slug: "thesis-viva-preparation-for-pediatric-pg-residents",
    excerpt:
      "Prepare for viva discussions by strengthening your command over rationale, methods, results, limitations, and implications.",
    seoTitle: "Thesis Viva Preparation for Pediatric PG Residents",
    seoDescription:
      "A practical viva preparation guide for pediatric postgraduate residents preparing to defend their thesis work.",
    category: blogCategories[5],
    author: authors[0],
    publishedAt: "2026-03-22",
    readTime: "6 min read",
    body: [
      paragraph(
        "Strong viva preparation is less about memorising lines and more about understanding your own thesis choices. Be ready to explain why the topic mattered, how the study was designed, and what the main findings mean."
      ),
    ],
  },
  {
    title: "Sample Size Basics for Junior Resident Doctors",
    slug: "sample-size-basics-for-junior-resident-doctors",
    excerpt:
      "A plain-language introduction to sample size thinking for residents trying to understand feasibility and statistical planning.",
    seoTitle: "Sample Size Basics for Junior Resident Doctors",
    seoDescription:
      "Understand sample size basics for pediatric thesis planning, feasibility, and better communication with statistics experts.",
    category: blogCategories[2],
    author: authors[0],
    publishedAt: "2026-03-28",
    readTime: "6 min read",
    body: [
      paragraph(
        "Sample size should never feel like a mysterious number that appears late in the protocol. It is tied to the study question, outcome measures, assumptions, and available population."
      ),
      paragraph(
        "Even when an expert supports the calculation, residents benefit from understanding the reasoning well enough to discuss it confidently."
      ),
    ],
  },
];

export const resources: Resource[] = [
  {
    title: "Pediatric Thesis Progress Checklist",
    slug: "pediatric-thesis-progress-checklist",
    shortDescription:
      "A practical free checklist to track the major milestones of the pediatric thesis journey.",
    fullDescription:
      "Use this checklist to review whether your topic, proposal, literature review, methodology, data collection, results, discussion, and final formatting work are moving in the right direction.",
    category: "Checklist",
    freeOrPaid: "free",
    downloadableFileUrl: "/downloads/pediatric-thesis-progress-checklist.txt",
    featured: true,
    seoTitle: "Free Pediatric Thesis Progress Checklist",
    seoDescription:
      "Download a free pediatric thesis progress checklist for postgraduate residents and junior doctors in India.",
  },
  {
    title: "Thesis Proposal Structure Template",
    slug: "thesis-proposal-structure-template",
    shortDescription:
      "A free outline template to help residents organise the flow of their thesis proposal presentation.",
    fullDescription:
      "This template offers a simple presentation structure covering title, rationale, objectives, methodology, expected outcomes, and questions to review before proposal submission.",
    category: "Template",
    freeOrPaid: "free",
    downloadableFileUrl: "/downloads/thesis-proposal-structure-template.txt",
    seoTitle: "Free Thesis Proposal Structure Template",
    seoDescription:
      "Download a free proposal structure template built for pediatric thesis presentations and synopsis discussions.",
  },
  {
    title: "Variable Planning Worksheet",
    slug: "variable-planning-worksheet",
    shortDescription:
      "A free worksheet to help residents think through outcomes, predictors, and operational definitions.",
    fullDescription:
      "Use this worksheet when planning variables for a pediatric thesis. It is especially useful before finalising methodology and data collection sheets.",
    category: "Worksheet",
    freeOrPaid: "free",
    downloadableFileUrl: "/downloads/variable-planning-worksheet.txt",
    featured: true,
    seoTitle: "Free Variable Planning Worksheet for Pediatric Thesis",
    seoDescription:
      "Download a free worksheet for variable planning, operational definitions, and pediatric thesis methodology support.",
  },
  {
    title: "Basic Statistics Guide for Pediatric Residents",
    slug: "basic-statistics-guide-for-pediatric-residents",
    shortDescription:
      "A concise paid guide that simplifies common statistical concepts used in postgraduate thesis work.",
    fullDescription:
      "Built for pediatric residents who want a practical, non-intimidating overview of common statistical terms, tables, outputs, and interpretation checkpoints.",
    category: "Guide",
    freeOrPaid: "paid",
    price: 1499,
    paymentLink: "https://example.com/payment/basic-statistics-guide",
    featured: true,
    seoTitle: "Basic Statistics Guide for Pediatric Residents",
    seoDescription:
      "Buy a practical statistics guide for pediatric residents working through thesis methodology and data interpretation.",
  },
  {
    title: "Thesis Formatting and Submission Checklist",
    slug: "thesis-formatting-and-submission-checklist",
    shortDescription:
      "A paid formatting resource for residents preparing the final thesis document for submission.",
    fullDescription:
      "This checklist helps residents review chapter order, tables, figure consistency, formatting standards, references, and final submission readiness.",
    category: "Checklist",
    freeOrPaid: "paid",
    price: 999,
    paymentLink: "https://example.com/payment/formatting-checklist",
    seoTitle: "Thesis Formatting and Submission Checklist",
    seoDescription:
      "Buy a thesis formatting and submission checklist designed for pediatric postgraduate residents in India.",
  },
  {
    title: "Pediatric Thesis Viva Preparation Guide",
    slug: "pediatric-thesis-viva-preparation-guide",
    shortDescription:
      "A paid guide to help residents prepare for thesis defence discussions with more clarity and confidence.",
    fullDescription:
      "This resource covers high-probability viva themes, presentation logic, and common question areas related to rationale, methodology, results, limitations, and clinical meaning.",
    category: "Guide",
    freeOrPaid: "paid",
    price: 1999,
    paymentLink: "https://example.com/payment/viva-guide",
    seoTitle: "Pediatric Thesis Viva Preparation Guide",
    seoDescription:
      "Buy a viva preparation guide for pediatric thesis defence and final academic presentation readiness.",
  },
];
