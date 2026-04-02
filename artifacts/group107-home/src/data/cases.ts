export interface CaseStudy {
  client: string;
  category: string;
  title: string;
  result: string;
  image: { src: string; alt: string };
  animDelay: number;
}

export interface CasesData {
  label: string;
  title: string;
  filters: string[];
  items: CaseStudy[];
}

export const casesData: CasesData = {
  label: "Case Studies",
  title: "Real Projects.\nReal Results.",
  filters: ["All", "Fintech", "SaaS", "Enterprise"],
  items: [
    {
      client: "IMTC",
      category: "Fintech",
      title: "Cloud Investment Platform",
      result: "Improved performance & scalability; cut infra costs 40%.",
      image: { src: "/project-1.png", alt: "IMTC Cloud Investment Platform" },
      animDelay: 0,
    },
    {
      client: "TechNova",
      category: "SaaS",
      title: "Enterprise SaaS Dashboard",
      result: "3\u00d7 faster onboarding, 98% uptime SLA post-launch.",
      image: { src: "/project-2.png", alt: "TechNova Enterprise SaaS Dashboard" },
      animDelay: 0.1,
    },
    {
      client: "DataBridge",
      category: "Enterprise",
      title: "Unified Data Intelligence",
      result: "Real-time analytics pipeline processing 2M+ events/day.",
      image: { src: "/project-3.png", alt: "DataBridge Unified Data Intelligence" },
      animDelay: 0.2,
    },
  ],
};
