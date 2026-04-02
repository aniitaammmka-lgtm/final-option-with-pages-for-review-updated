export interface ServiceCategory {
  icon: string;
  title: string;
  items: string[];
  popular: boolean;
  animDelay: number;
}

export interface ServicesData {
  label: string;
  title: string;
  cta: { url: string; label: string };
  categories: ServiceCategory[];
}

export const servicesData: ServicesData = {
  label: "What We Do",
  title: "Our Services",
  cta: { url: "#cta", label: "Explore Services" },
  categories: [
    {
      icon: "Code2",
      title: "Development Services",
      items: ["Web Development", "Software Development", "Mobile Development", "Product Discovery"],
      popular: true,
      animDelay: 0,
    },
    {
      icon: "Cloud",
      title: "Infrastructure & DevOps",
      items: ["DevOps", "Cloud Solutions", "IT Infrastructure"],
      popular: false,
      animDelay: 0.1,
    },
    {
      icon: "Accessibility",
      title: "Accessibility",
      items: ["WCAG Compliance", "Accessible Design", "Audit & Remediation"],
      popular: false,
      animDelay: 0.2,
    },
    {
      icon: "TrendingUp",
      title: "Fintech",
      items: ["Bank Integrations", "Financial Systems"],
      popular: false,
      animDelay: 0.3,
    },
    {
      icon: "Bot",
      title: "Group 107 Digital",
      items: ["Marketing", "SDR", "Growth Systems"],
      popular: true,
      animDelay: 0.4,
    },
    {
      icon: "Cpu",
      title: "Next AI",
      items: ["AI-Driven Solutions", "Automation", "Intelligent Workflows"],
      popular: true,
      animDelay: 0.5,
    },
  ],
};
