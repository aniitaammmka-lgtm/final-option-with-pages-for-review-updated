export interface WorkItem {
  slug: string;
  client: string;
  category: string;
  tags: string[];
  title: string;
  result: string;
  image: { src: string; alt: string };
  link: string;
  animDelay: number;
}

export const ourWorkHero = {
  eyebrow: "Portfolio",
  title: "Our Work",
  sub: "Real projects. Real results. A decade of delivering software, AI, and digital solutions for companies that demand excellence.",
};

export const ourWorkFilters = [
  "All",
  "Web Development",
  "Custom Software Development",
  "UI/UX Design",
  "Enterprise Solutions",
  "Accessibility-Focused Design",
];

export const ourWorkItems: WorkItem[] = [
  {
    slug: "ezbob",
    client: "Ezbob",
    category: "Custom Software Development",
    tags: ["Custom Software Development"],
    title: "End-to-End Lending Platform",
    result: "Rebuilt core lending engine; onboarding time cut by 60% and loan origination fully automated.",
    image: { src: "/project-1.png", alt: "Ezbob Lending Platform" },
    link: "/our-work/ezbob",
    animDelay: 0,
  },
  {
    slug: "simplex",
    client: "Simplex",
    category: "Enterprise Solutions",
    tags: ["Enterprise Solutions"],
    title: "Crypto Payment Gateway",
    result: "Enterprise-grade payment infrastructure now processing 500K+ monthly transactions globally.",
    image: { src: "/project-2.png", alt: "Simplex Crypto Payment Gateway" },
    link: "/our-work/simplex",
    animDelay: 0.06,
  },
  {
    slug: "cato",
    client: "Cato Networks",
    category: "Enterprise Solutions",
    tags: ["Custom Software Development", "Enterprise Solutions"],
    title: "Cloud-Native SASE Platform",
    result: "SASE platform integration across 1,500+ enterprise sites; IT overhead reduced by 45%.",
    image: { src: "/project-3.png", alt: "Cato Networks SASE Platform" },
    link: "/our-work/cato",
    animDelay: 0.1,
  },
  {
    slug: "super-play",
    client: "Super Play",
    category: "Custom Software Development",
    tags: ["Custom Software Development"],
    title: "Cross-Platform Gaming Infrastructure",
    result: "Scalable backend supporting 1M+ concurrent users across iOS, Android, and web.",
    image: { src: "/project-1.png", alt: "Super Play Gaming Infrastructure" },
    link: "/our-work/super-play",
    animDelay: 0.14,
  },
  {
    slug: "blings",
    client: "Blings",
    category: "Custom Software Development",
    tags: ["Custom Software Development", "UI/UX Design"],
    title: "AI Video Personalisation Engine",
    result: "Real-time AI-powered video rendering platform serving personalised content at scale.",
    image: { src: "/project-2.png", alt: "Blings AI Video Platform" },
    link: "/our-work/blings",
    animDelay: 0.18,
  },
  {
    slug: "priority-software",
    client: "Priority Software",
    category: "Accessibility-Focused Design",
    tags: ["Accessibility-Focused Design", "Custom Software Development"],
    title: "Enterprise ERP Accessibility",
    result: "WCAG 2.1 AA compliance achieved across 3 flagship ERP products used by 75,000+ users.",
    image: { src: "https://group107.com/wp-content/uploads/2025/04/priority-thumb.png", alt: "Priority Software Accessibility" },
    link: "/our-work/priority",
    animDelay: 0.04,
  },
  {
    slug: "dynamo",
    client: "Dynamo",
    category: "Custom Software Development",
    tags: ["Custom Software Development", "UI/UX Design"],
    title: "B2B SaaS Platform Build",
    result: "Full-stack product delivered in 14 weeks; deployment cycles 2× faster post-launch.",
    image: { src: "https://group107.com/wp-content/uploads/2025/05/dynamo-b.png", alt: "Dynamo B2B SaaS Platform" },
    link: "/our-work/dynamo",
    animDelay: 0.08,
  },
  {
    slug: "pluto-security",
    client: "Pluto Security",
    category: "Enterprise Solutions",
    tags: ["Enterprise Solutions", "Custom Software Development"],
    title: "AI Workspace Security Suite",
    result: "Purpose-built AI security platform enabling safe innovation without blocking enterprise workflows.",
    image: { src: "https://group107.com/wp-content/uploads/2026/03/pluto-thumb.png", alt: "Pluto Security Platform" },
    link: "/our-work/pluto-security",
    animDelay: 0.12,
  },
  {
    slug: "vetted-outsource",
    client: "Vetted Outsource",
    category: "Web Development",
    tags: ["Web Development", "UI/UX Design"],
    title: "Talent Marketplace Platform",
    result: "Full web platform redesign and build; recruiter conversion rate up 40% within 60 days.",
    image: { src: "https://group107.com/wp-content/uploads/2026/02/vetted-thumb.png", alt: "Vetted Outsource Marketplace" },
    link: "/our-work/vetted-outsource",
    animDelay: 0.16,
  },
  {
    slug: "neureality",
    client: "NeuReality",
    category: "Custom Software Development",
    tags: ["Custom Software Development", "Enterprise Solutions"],
    title: "AI Inference Hardware Platform",
    result: "Software integration layer for AI inference chips; 3× throughput improvement over baseline.",
    image: { src: "https://group107.com/wp-content/uploads/2026/01/1628.png", alt: "NeuReality AI Platform" },
    link: "/our-work/neureality",
    animDelay: 0.2,
  },
];

export const ourWorkCta = {
  eyebrow: "Let's Build Together",
  title: "Ready to be our next\ncase study?",
  sub: "Tell us about your project and we'll show you how Group 107 can help you build, scale, and grow.",
  cta: { url: "#cta", label: "Start a Project" },
};
