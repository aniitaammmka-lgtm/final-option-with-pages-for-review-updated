export interface NavPanel {
  heading: string;
  links: { label: string; url: string }[];
}

export interface NavItem {
  label: string;
  id: string;
  url: string;
  panels: NavPanel[];
  image: { src: string; alt: string };
  imageLabel: string;
  imageCta: { url: string; label: string };
}

export const navItems: NavItem[] = [
  {
    label: "Services / Solutions",
    id: "services",
    url: "/services",
    panels: [
      { heading: "Talents", links: [{ label: "Team Expertise", url: "/services#talents" }, { label: "Recruitment as a Service", url: "/services#talents" }] },
      { heading: "Development Services", links: [{ label: "Development Overview", url: "/development-services" }, { label: "Web Development", url: "/development-services#web" }, { label: "Software Development", url: "/development-services#software" }, { label: "Mobile Development", url: "/development-services#mobile" }, { label: "Product Discovery", url: "/development-services#discovery" }] },
      { heading: "Group 107 Digital", links: [{ label: "Marketing", url: "/services#digital" }, { label: "SDR", url: "/services#digital" }, { label: "Growth Systems", url: "/services#digital" }] },
      { heading: "Infrastructure & DevOps", links: [{ label: "DevOps", url: "/services#devops" }, { label: "Cloud Solutions", url: "/services#devops" }, { label: "IT and Infrastructure", url: "/services#devops" }] },
      { heading: "Accessibility", links: [{ label: "WCAG Compliance", url: "/services#accessibility" }, { label: "Accessible Design", url: "/services#accessibility" }, { label: "Audit & Remediation", url: "/services#accessibility" }] },
      { heading: "Fintech", links: [{ label: "Bank Integrations", url: "/services#fintech" }, { label: "Financial Systems", url: "/services#fintech" }] },
      { heading: "Next AI", links: [{ label: "AI-Driven Solutions", url: "/services#nextai" }, { label: "Automation", url: "/services#nextai" }] },
    ],
    image: { src: "/hero.png", alt: "Build. Scale. Grow." },
    imageLabel: "Build. Scale. Grow.",
    imageCta: { url: "/services", label: "View All Services" },
  },
  {
    label: "Product Lobby",
    id: "products",
    url: "/product-lobby",
    panels: [
      { heading: "Our Products", links: [{ label: "Accessible Docs", url: "/product-lobby#accessible-docs" }, { label: "Global Docs", url: "/product-lobby#global-docs" }, { label: "Summa", url: "/product-lobby#summa" }, { label: "Levent", url: "/product-lobby#levent" }] },
    ],
    image: { src: "/project-1.png", alt: "Our Product Suite" },
    imageLabel: "Our Product Suite",
    imageCta: { url: "/product-lobby", label: "Explore Products" },
  },
  {
    label: "Case Studies",
    id: "casestudies",
    url: "/#casestudies",
    panels: [
      { heading: "Work", links: [{ label: "View Case Studies", url: "/#casestudies" }, { label: "Fintech Projects", url: "/#casestudies" }, { label: "SaaS Projects", url: "/#casestudies" }, { label: "Enterprise Projects", url: "/#casestudies" }] },
    ],
    image: { src: "/project-2.png", alt: "Real Projects. Real Results." },
    imageLabel: "Real Projects. Real Results.",
    imageCta: { url: "/#casestudies", label: "View Case Studies" },
  },
  {
    label: "Company",
    id: "company",
    url: "#",
    panels: [
      { heading: "About", links: [{ label: "About Us", url: "#" }, { label: "Leadership", url: "#" }, { label: "Careers", url: "#" }, { label: "Partnership", url: "#" }, { label: "Contact Us", url: "#" }] },
    ],
    image: { src: "/project-3.png", alt: "Group 107" },
    imageLabel: "Group 107",
    imageCta: { url: "#cta", label: "Get a Consultation" },
  },
  {
    label: "Resources",
    id: "resources",
    url: "#",
    panels: [
      { heading: "Content", links: [{ label: "Blogs", url: "#" }, { label: "Articles", url: "#" }, { label: "Media Room", url: "#" }, { label: "Glossary", url: "#" }] },
    ],
    image: { src: "/project-1.png", alt: "Knowledge Hub" },
    imageLabel: "Knowledge Hub",
    imageCta: { url: "#cta", label: "Get a Consultation" },
  },
  {
    label: "Investors Relations",
    id: "investors",
    url: "#",
    panels: [
      { heading: "Investors", links: [{ label: "Overview", url: "#" }] },
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
