export interface Stat {
  raw: number;
  suffix: string;
  label: string;
  animDelay: number;
}

export interface SocialData {
  label: string;
  title: string;
  clients: string[];
  stats: Stat[];
  /** @richtext */
  testimonial: string;
  testimonialAuthor: string;
}

export const socialData: SocialData = {
  label: "Social Proof",
  title: "Trusted by Global Companies",
  clients: ["IMTC", "FIBI", "TechNova", "Strategen", "PlatformX", "CloudFirst", "DataBridge", "NextScale"],
  stats: [
    { raw: 700, suffix: "+", label: "Global Clients", animDelay: 0 },
    { raw: 88000, suffix: "+", label: "Talent Pool", animDelay: 0.1 },
    { raw: 12, suffix: "+", label: "Years Active", animDelay: 0.2 },
    { raw: 4, suffix: "", label: "Global Hubs", animDelay: 0.3 },
  ],
  testimonial:
    "\u201cGroup 107 became an extension of our team overnight. The quality of delivery and speed of execution was unlike anything we\u2019d experienced.\u201d",
  testimonialAuthor: "\u2014 CTO, IMTC Financial Platform",
};
