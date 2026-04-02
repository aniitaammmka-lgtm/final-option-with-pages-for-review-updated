export interface TalentStep {
  num: string;
  title: string;
  description: string;
  animDelay: number;
}

export interface TalentsData {
  label: string;
  title: string;
  description: string;
  cta: { url: string; label: string };
  trustItems: string[];
  steps: TalentStep[];
}

export const talentsData: TalentsData = {
  label: "Talents",
  title: "Scale Your Team with Top Tech Talent \u2014 Without the Hiring Complexity",
  description:
    "We build and manage dedicated teams tailored to your needs \u2014 giving you access to top-tier talent, faster delivery, and full operational support.",
  cta: { url: "#cta", label: "Build Your Team" },
  trustItems: ["Transparent Process", "Fast Hiring", "Fully Managed"],
  steps: [
    {
      num: "01",
      title: "Define Your Team",
      description: "Tell us your requirements \u2014 stack, team size, seniority, and timeline.",
      animDelay: 0,
    },
    {
      num: "02",
      title: "We Source & Screen",
      description: "We search our 88,000+ talent pool and rigorously screen candidates for you.",
      animDelay: 0.12,
    },
    {
      num: "03",
      title: "You Interview & Select",
      description: "Review shortlisted candidates and choose the right fit for your team.",
      animDelay: 0.24,
    },
    {
      num: "04",
      title: "We Handle Onboarding & Ops",
      description: "Full operational support \u2014 contracts, onboarding, tooling, and management.",
      animDelay: 0.36,
    },
    {
      num: "05",
      title: "Scale as Needed",
      description: "Grow or adjust your team at any time as your project evolves.",
      animDelay: 0.48,
    },
  ],
};
