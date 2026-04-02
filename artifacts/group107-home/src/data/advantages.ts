export interface Advantage {
  icon: string;
  title: string;
  description: string;
  animDelay: number;
}

export interface AdvantagesData {
  label: string;
  title: string;
  items: Advantage[];
}

export const advantagesData: AdvantagesData = {
  label: "Why Us",
  title: "Why Companies\nChoose Group 107",
  items: [
    {
      icon: "CheckCircle2",
      title: "Transparent Processes",
      description: "Full visibility into timelines, budgets, and delivery milestones at every stage.",
      animDelay: 0,
    },
    {
      icon: "Clock",
      title: "Fast Delivery Cycles",
      description: "Sprint-based delivery with weekly demos \u2014 no black boxes, no surprises.",
      animDelay: 0.1,
    },
    {
      icon: "Users",
      title: "High Team Retention",
      description: "Our talent averages 3+ years per engagement, ensuring institutional knowledge stays.",
      animDelay: 0.2,
    },
    {
      icon: "Layers",
      title: "End-to-End Ownership",
      description: "From strategy through deployment \u2014 we own the outcome, not just the task.",
      animDelay: 0.3,
    },
    {
      icon: "Scaling",
      title: "Flexible Scaling",
      description: "Add or remove team members in days, not months, as your needs evolve.",
      animDelay: 0.4,
    },
    {
      icon: "Headphones",
      title: "Dedicated Account Mgmt",
      description: "A single point of contact \u2014 proactive, responsive, invested in your success.",
      animDelay: 0.5,
    },
  ],
};
