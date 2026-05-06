export interface Partner {
  name: string;
  logo: { src: string; alt: string };
  url: string;
  animDelay: number;
}

export interface PartnershipValue {
  icon: string;
  title: string;
  desc: string;
  animDelay: number;
}

export const partnershipHero = {
  eyebrow: "Company / Partnership",
  title: "Power of\nPartnership",
  sub: "When done right, partnership can be a catalyst for growth.",
};

export const partnershipIntro = {
  tag: "Strategic Alliances",
  title: "Partners",
  leftBody: "Strong partnership doesn't just happen — any successful business should be based on trust, open communication, shared goals and values. Partnering is the key factor in achieving fulminant growth.",
  leftSub: "By forming strategic alliances and collaborations, you can tap into new markets, access new resources, and give new breath to your organization.",
  rightBody: "We are more than proud to be partners with leading technology companies that give us the unique access to innovative solutions, resources, and allow us to stay ahead of the curve.",
  rightSub: "Click one of the logos below to learn more about a specific partnership.",
};

export const partners: Partner[] = [
  {
    name: "Amazon Web Services",
    logo: { src: "https://group107.com/wp-content/uploads/2023/01/logo-aws.svg", alt: "AWS" },
    url: "https://aws.amazon.com/",
    animDelay: 0.06,
  },
  {
    name: "GNS Cloud Solutions",
    logo: { src: "https://group107.com/wp-content/uploads/2023/01/logo-gns.svg", alt: "GNS Cloud Solutions" },
    url: "https://www.gns.co.il/",
    animDelay: 0.12,
  },
  {
    name: "Awesome — a Deloitte Business",
    logo: { src: "https://group107.com/wp-content/uploads/2023/01/logo-awesome.svg", alt: "Awesome a Deloitte Business" },
    url: "https://www.deloitte.com/",
    animDelay: 0.18,
  },
  {
    name: "Pelecard",
    logo: { src: "https://group107.com/wp-content/uploads/2023/01/logo-pelecard.svg", alt: "Pelecard" },
    url: "https://www.pelecard.com/",
    animDelay: 0.24,
  },
];

export const partnershipValues: PartnershipValue[] = [
  {
    icon: "Shield",
    title: "Trust & Transparency",
    desc: "Every partnership we build is grounded in honest communication, clear expectations, and shared accountability.",
    animDelay: 0.06,
  },
  {
    icon: "Target",
    title: "Shared Goals",
    desc: "We align with partners who share our commitment to delivering innovative, high-quality technology solutions.",
    animDelay: 0.12,
  },
  {
    icon: "TrendingUp",
    title: "Mutual Growth",
    desc: "Our partnerships are structured to unlock new markets, resources, and opportunities for all parties involved.",
    animDelay: 0.18,
  },
  {
    icon: "Network",
    title: "Ecosystem Access",
    desc: "As a partner, you gain access to our global talent pool, development capabilities, and established client network.",
    animDelay: 0.24,
  },
];

export const affiliateProgram = {
  tag: "Affiliate Program",
  title: "Grow Together —\nEarn Together",
  body: "Our affiliate program is designed for businesses and individuals who want to generate revenue by referring clients to Group 107. It's simple, transparent, and built for long-term mutual benefit.",
  benefits: [
    "Competitive commission structure",
    "Dedicated partner support",
    "Real-time tracking and reporting",
    "Flexible referral model",
  ],
  cta: { label: "Learn About Affiliate Program", url: "https://group107.com/partnership/" },
  ctaTc: { label: "Affiliate T&C", url: "https://group107.com/partnership/" },
};
