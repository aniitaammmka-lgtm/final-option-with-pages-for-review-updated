export interface NavPanel {
  heading: string;
  links: string[];
}

export interface NavItem {
  label: string;
  id: string;
  panels: NavPanel[];
  image: { src: string; alt: string };
  imageLabel: string;
  imageCta: { url: string; label: string };
}

export const navItems: NavItem[] = [
  {
    label: "Services / Solutions",
    id: "services",
    panels: [
      { heading: "Talents", links: ["Team Expertise", "Recruitment as a Service"] },
      { heading: "Development Services", links: ["Web Development", "Software Development", "Mobile Development", "Product Discovery"] },
      { heading: "Group 107 Digital", links: ["Marketing", "SDR", "Growth Systems"] },
      { heading: "Infrastructure & DevOps", links: ["DevOps", "Cloud Solutions", "IT and Infrastructure"] },
      { heading: "Accessibility", links: ["WCAG Compliance", "Accessible Design", "Audit & Remediation"] },
      { heading: "Fintech", links: ["Bank Integrations", "Financial Systems"] },
      { heading: "Next AI", links: ["AI-Driven Solutions", "Automation"] },
    ],
    image: { src: "/hero.png", alt: "Build. Scale. Grow." },
    imageLabel: "Build. Scale. Grow.",
    imageCta: { url: "#cta", label: "Get a Consultation" },
  },
  {
    label: "Product Lobby",
    id: "products",
    panels: [
      { heading: "Our Products", links: ["AccessibleDocs", "Summa", "GlobalDocs", "Levent"] },
    ],
    image: { src: "/project-1.png", alt: "Our Product Suite" },
    imageLabel: "Our Product Suite",
    imageCta: { url: "#cta", label: "Get a Consultation" },
  },
  {
    label: "Case Studies",
    id: "casestudies",
    panels: [
      { heading: "Work", links: ["View Case Studies", "Fintech Projects", "SaaS Projects", "Enterprise Projects"] },
    ],
    image: { src: "/project-2.png", alt: "Real Projects. Real Results." },
    imageLabel: "Real Projects. Real Results.",
    imageCta: { url: "#cta", label: "Get a Consultation" },
  },
  {
    label: "Company",
    id: "company",
    panels: [
      { heading: "About", links: ["About Us", "Leadership", "Careers", "Partnership", "Contact Us"] },
    ],
    image: { src: "/project-3.png", alt: "Group 107" },
    imageLabel: "Group 107",
    imageCta: { url: "#cta", label: "Get a Consultation" },
  },
  {
    label: "Resources",
    id: "resources",
    panels: [
      { heading: "Content", links: ["Blogs", "Articles", "Media Room", "Glossary"] },
    ],
    image: { src: "/project-1.png", alt: "Knowledge Hub" },
    imageLabel: "Knowledge Hub",
    imageCta: { url: "#cta", label: "Get a Consultation" },
  },
  {
    label: "Investors Relations",
    id: "investors",
    panels: [
      { heading: "Investors", links: ["Overview"] },
    ],
    image: { src: "/project-2.png", alt: "Investor Relations" },
    imageLabel: "Investor Relations",
    imageCta: { url: "#cta", label: "Get a Consultation" },
  },
];

export const navCta: { url: string; label: string } = {
  url: "#cta",
  label: "Get a Consultation",
};
