export interface FooterLink {
  label: string;
  url: string;
}

export interface FooterColumn {
  heading: string;
  links: FooterLink[];
}

export interface FooterData {
  brand: string;
  description: string;
  social: FooterLink[];
  columns: FooterColumn[];
  copyright: string;
}

export const footerData: FooterData = {
  brand: "Group 107",
  description:
    "A complete tech partner for ambitious companies \u2014 from custom software and dedicated teams to AI integration and digital growth.",
  social: [
    { label: "LinkedIn", url: "#" },
    { label: "Twitter / X", url: "#" },
    { label: "GitHub", url: "#" },
  ],
  columns: [
    {
      heading: "Services",
      links: [
        { label: "Custom Development", url: "#services" },
        { label: "WordPress & Web", url: "#services" },
        { label: "Mobile Apps", url: "#services" },
        { label: "AI Integration", url: "#services" },
        { label: "DevOps & Cloud", url: "#services" },
        { label: "Digital Marketing", url: "#services" },
      ],
    },
    {
      heading: "Company",
      links: [
        { label: "About Us", url: "#" },
        { label: "Leadership", url: "#" },
        { label: "Careers", url: "#" },
        { label: "Partnership", url: "#" },
        { label: "Contact Us", url: "#cta" },
      ],
    },
    {
      heading: "Global Hubs",
      links: [
        { label: "Israel", url: "#" },
        { label: "Ukraine", url: "#" },
        { label: "Poland", url: "#" },
        { label: "Argentina", url: "#" },
      ],
    },
  ],
  copyright: "\u00a9 2026 Group 107. All rights reserved.",
};
