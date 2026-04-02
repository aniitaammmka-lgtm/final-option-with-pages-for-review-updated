export interface PositioningCol {
  tag: string;
  title: string;
  description: string;
  animDelay: number;
}

export interface PositioningData {
  label: string;
  title: string;
  cols: PositioningCol[];
}

export const positioningData: PositioningData = {
  label: "Our Positioning",
  title: "Not Just Talent.\nNot Just Development.\nA Complete Tech Partner.",
  cols: [
    {
      tag: "01 / Build",
      title: "Custom Solutions",
      description:
        "We design and build high-performance software tailored to your exact requirements \u2014 web, mobile, and enterprise-grade platforms.",
      animDelay: 0,
    },
    {
      tag: "02 / Scale",
      title: "Teams & DevOps",
      description:
        "Access our 88,000+ talent pool to extend your team instantly. We handle recruitment, onboarding, and infrastructure at any scale.",
      animDelay: 0.1,
    },
    {
      tag: "03 / Grow",
      title: "AI & Marketing",
      description:
        "Integrate intelligent automation and drive digital growth with data-led marketing strategies that deliver measurable ROI.",
      animDelay: 0.2,
    },
  ],
};
