export interface ExperienceItem {
  company: string;
  role: string;
  duration: string;
  location: string;
  summary: string;
  bullets: string[];
  coreTech: string[];
}

export interface CaseStudy {
  id: string;
  title: string;
  subtitle: string;
  description: string;
  tag: string;
  problem: string;
  architectureDiagram: { step: string; label: string }[];
  ownership: string[];
  techStack: string[];
  aiDetails?: {
    overview: string;
    flow: { step: string; label: string }[];
    emphasis: string;
  };
  security?: {
    roles: string[];
    authFlow: string[];
  };
  highlights: string[];
  businessImpact: string;
}

export interface SkillCategory {
  category: string;
  skills: string[];
}

export interface PortfolioData {
  personal: {
    name: string;
    role: string;
    focus: string[];
    heroMessage: string;
    heroSubtext: string;
    about: string[];
  };
  socialLinks: {
    github: string;
    linkedin: string;
    leetcode: string;
    email: string;
  };
  experience: ExperienceItem[];
  caseStudies: CaseStudy[];
  skills: SkillCategory[];
  codingProfile: {
    platform: string;
    solvedCount: string;
    topics: string[];
    profileUrl: string;
  };
  education: {
    institution: string;
    degree: string;
    duration: string;
  };
}

export const portfolioData: PortfolioData = {
  personal: {
    name: "Arpit Tiwari",
    role: "Software Engineer",
    focus: [
      "Backend Engineering",
      "AI Applications",
      "Full-Stack Development",
    ],
    heroMessage:
      "I build backend systems, full-stack products, and AI-powered tools that solve real problems.",
    heroSubtext:
      "I build production systems across APIs, asynchronous processing, authentication, AI integrations, and workflow automation.",
    about: [
      "I'm Arpit Tiwari, a Software Engineer focused on building full-stack, backend, and AI-powered applications.",
      "I enjoy turning ideas into reliable production systems, with hands-on experience across APIs, automation, authentication, asynchronous processing, and AI integrations.",
      "At LevelUP MultiLink LLP, I've worked on AI-powered automation and internal intelligence products, including a prospecting platform and an investment intelligence dashboard with a retrieval-grounded AI assistant.",
      "I'm always learning, building, and looking for meaningful engineering problems to solve.",
    ],
  },
  socialLinks: {
    github: "https://github.com/Arpittiwari1",
    linkedin: "https://www.linkedin.com/in/arpit-tiwari-/",
    leetcode: "https://leetcode.com/u/arpit-tech/",
    email: "mailto:arpittiwari0408@gmail.com",
  },
  experience: [
    {
      company: "LevelUP MultiLink LLP",
      role: "Junior Developer Associate",
      duration: "Feb 2026 – Present",
      location: "Remote",
      summary:
        "Building production backend systems, full-stack products, and AI-powered automation across internal platforms.",
      bullets: [
        "Integrated production APIs across prospect discovery, verification, enrichment, AI classification, and campaign generation.",
        "Built async job processing with queues, caching, and rate limiting to handle high-volume workloads reliably.",
        "Created 15–20 n8n automation workflows for lead generation and campaign execution.",
        "Developed backend enrichment pipelines for an investment intelligence platform using Firecrawl and Ollama.",
        "Implemented OAuth, JWT, RBAC, and Cloudflare Zero Trust for protected internal systems.",
        "Containerized and deployed services using Docker and GitHub Actions CI/CD.",
      ],
      coreTech: [
        "FastAPI",
        "Python",
        "Node.js",
        "React",
        "Docker",
        "Ollama",
        "Claude",
        "n8n",
        "Supabase",
      ],
    },
  ],
  caseStudies: [
    {
      id: "icp-prospecting-platform",
      title: "AI-Powered ICP Prospecting Platform",
      subtitle:
        "End-to-End Prospect Discovery, Verification & Campaign Orchestration",
      description:
        "An AI-powered prospecting platform that automates prospect discovery, verification, enrichment, and campaign generation.",
      tag: "Professional Project · Source Code Proprietary · Built for LevelUP MultiLink LLP",
      problem:
        "Manual prospecting required multiple disconnected processes for prospect discovery, email verification, classification, enrichment, outreach, and campaign creation.",
      architectureDiagram: [
        { step: "1", label: "User ICP Input" },
        { step: "2", label: "Prospect Search" },
        { step: "3", label: "Email Verification" },
        { step: "4", label: "AI Classification" },
        { step: "5", label: "Lead Enrichment" },
        { step: "6", label: "AI Outreach Generation" },
        { step: "7", label: "Campaign Creation" },
      ],
      ownership: [
        "Backend Architecture",
        "API Orchestration",
        "Async Processing & Job Queues",
        "AI Integrations (Claude & Ollama)",
        "Caching & Rate Limiting",
        "Deployment Pipeline",
      ],
      techStack: [
        "React",
        "FastAPI",
        "Python",
        "Docker",
        "n8n",
        "Claude",
        "Ollama",
        "Blitz API",
        "MillionVerifier",
        "Smartlead",
        "GetSales",
        "Google Sheets",
      ],
      highlights: [
        "Designed and implemented the backend orchestration pipeline integrating prospect search, email verification, AI classification, lead enrichment, and campaign generation across multiple third-party services.",
        "Implemented asynchronous job queues with caching and rate limiting to support high-volume concurrent processing while preventing API contention and rate-limit violations.",
        "Integrated Claude and Ollama to power AI-driven prospect classification and personalized outbound outreach generation.",
      ],
      businessImpact:
        "Automated prospecting, verification, enrichment, and campaign creation end-to-end, enabling generation of approximately 10,000–20,000 verified, ICP-matched leads per run without manual effort.",
    },
    {
      id: "investment-intelligence-dashboard",
      title: "Investment Intelligence Dashboard",
      subtitle:
        "Internal Intelligence Platform & Retrieval-Grounded AI Assistant",
      description:
        "An internal investment intelligence platform that transforms WhatsApp-submitted pitch decks into structured company insights with an AI assistant powered by structured investment data.",
      tag: "Professional Project · Source Code Proprietary · Built for LevelUP MultiLink LLP",
      problem:
        "Investment research previously involved manual, per-deck research and information scattered across documents.",
      architectureDiagram: [
        { step: "1", label: "WhatsApp Submission" },
        { step: "2", label: "Document Intake" },
        { step: "3", label: "Firecrawl Enrichment" },
        { step: "4", label: "Structured Data Storage" },
        { step: "5", label: "Ollama AI Assistant" },
      ],
      ownership: [
        "Backend Enrichment Pipeline",
        "Structured Data Layer",
        "Authentication & RBAC Security",
        "Ollama Integration",
        "Retrieval-Grounded AI Assistant",
        "API Credit Optimization",
      ],
      techStack: [
        "React",
        "Node.js",
        "WhatsApp Bot",
        "Firecrawl",
        "Supabase",
        "Google OAuth",
        "JWT",
        "Cloudflare Zero Trust",
        "Ollama",
      ],
      aiDetails: {
        overview:
          "Integrated Ollama to power a retrieval-grounded AI assistant that answers investment, portfolio, and deal-related questions using the platform's structured data rather than relying on generic LLM responses.",
        flow: [
          { step: "1", label: "User Question" },
          { step: "2", label: "Structured Investment Data" },
          { step: "3", label: "Relevant Platform Context" },
          { step: "4", label: "Ollama LLM" },
          { step: "5", label: "Grounded Answer" },
        ],
        emphasis:
          "The assistant is strictly constrained to the platform's verified structured investment data rather than relying on general model knowledge.",
      },
      security: {
        roles: ["Admin", "Partner", "Analyst", "Viewer"],
        authFlow: [
          "Google OAuth",
          "JWT",
          "Role-Based Access Control (RBAC)",
          "Cloudflare Zero Trust",
        ],
      },
      highlights: [
        "Built a backend enrichment pipeline that processes WhatsApp-submitted pitch decks and enriches company, founder, and funding data through Firecrawl.",
        "Integrated Ollama to power a retrieval-grounded AI assistant using structured company data.",
        "Implemented authentication and authorization using Google OAuth, JWT, role-based access control, and Cloudflare Zero Trust.",
        "Reduced API credit consumption by caching Firecrawl responses and rate-limiting external calls.",
      ],
      businessImpact:
        "Replaced manual, per-deck research with an automated enrichment pipeline, giving management a centralized platform for investment intelligence, portfolio analysis, and AI-assisted deal insights.",
    },
  ],
  skills: [
    {
      category: "Backend",
      skills: ["FastAPI", "Python", "Node.js", "Express", "REST APIs", "Java"],
    },
    {
      category: "AI & LLM",
      skills: ["Claude", "Ollama", "OpenAI API", "Gemini API"],
    },
    {
      category: "Infrastructure & DevOps",
      skills: ["Docker", "GitHub Actions", "CI/CD", "Cloudflare", "VPS"],
    },
    {
      category: "Databases & Data",
      skills: ["PostgreSQL", "MongoDB", "Supabase"],
    },
    {
      category: "Automation & Workflows",
      skills: ["n8n", "Firecrawl", "API Integrations", "Workflow Automation"],
    },
    {
      category: "Security & Auth",
      skills: ["OAuth", "JWT", "RBAC", "Cloudflare Zero Trust"],
    },
    {
      category: "Frontend",
      skills: ["React", "TypeScript", "JavaScript", "HTML", "CSS", "Tailwind CSS"],
    },
    {
      category: "Engineering Concepts",
      skills: ["Queue Processing", "Background Jobs", "Async Processing", "Caching", "Rate Limiting"],
    },
  ],
  codingProfile: {
    platform: "LeetCode",
    solvedCount: "162+",
    topics: [
      "Java (DSA)",
      "Arrays",
      "Hashing",
      "Linked Lists",
      "Queues",
      "Prefix Sums",
      "Binary Search",
      "Sorting",
      "Bit Manipulation",
    ],
    profileUrl: "https://leetcode.com/u/arpit-tech/",
  },
  education: {
    institution: "Indira Gandhi National Open University",
    degree: "Bachelor of Computer Applications (BCA)",
    duration: "Sep 2023 – Nov 2026",
  },
};
