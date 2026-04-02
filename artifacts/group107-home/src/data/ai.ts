export interface AiFeature {
  label: string;
  description: string;
  animDelay: number;
}

export interface AiData {
  label: string;
  title: string;
  description: string;
  features: AiFeature[];
  image: { src: string; alt: string };
  stat: { icon: string; meta: string; value: string; suffix: string };
}

export const aiData: AiData = {
  label: "AI & Innovation",
  title: "AI-Driven Solutions for Smarter Business",
  description:
    "We integrate AI into your systems to automate processes, improve decision-making, and increase efficiency across your organization.",
  features: [
    {
      label: "Intelligent Automation",
      description: "Eliminate repetitive tasks and accelerate throughput with AI-orchestrated pipelines.",
      animDelay: 0,
    },
    {
      label: "Smarter Decisions",
      description: "Real-time data models that surface insights and trigger actions without human latency.",
      animDelay: 0.1,
    },
    {
      label: "Operational Efficiency",
      description: "AI-first architecture designed to compound gains as your business scales.",
      animDelay: 0.2,
    },
  ],
  image: { src: "/project-2.png", alt: "AI innovation" },
  stat: {
    icon: "BarChart3",
    meta: "AI Efficiency Gain",
    value: "340",
    suffix: "%",
  },
};
