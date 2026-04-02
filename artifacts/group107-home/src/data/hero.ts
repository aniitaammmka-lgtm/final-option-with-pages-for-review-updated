export interface HeroStat {
  label: string;
  value: string;
}

export interface HeroCta {
  url: string;
  label: string;
}

export interface HeroData {
  badge: string;
  title: string;
  description: string;
  primaryCta: HeroCta;
  secondaryCta: HeroCta;
  image: { src: string; alt: string };
  stats: HeroStat[];
}

export const heroData: HeroData = {
  badge: "Complete Tech Partner \u2014 700+ Clients Globally",
  title: "Build, Scale,\nand Grow\nYour Tech.",
  description:
    "Group 107 is a full-service tech partner delivering development, AI, Digital Marketing, DevOps, accessibility, and dedicated teams \u2014 helping companies move faster and scale smarter.",
  primaryCta: { url: "#cta", label: "Get a Consultation" },
  secondaryCta: { url: "#work", label: "View Our Work" },
  image: { src: "/hero.png", alt: "Group 107" },
  stats: [
    { label: "Talent Pool", value: "88,000+" },
    { label: "Global Clients", value: "700+" },
  ],
};
