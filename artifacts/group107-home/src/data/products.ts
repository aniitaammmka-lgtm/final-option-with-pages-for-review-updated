export interface Product {
  title: string;
  tag: string;
  description: string;
  image: { src: string; alt: string };
  animDelay: number;
}

export interface ProductsData {
  label: string;
  title: string;
  description: string;
  cta: { url: string; label: string };
  products: Product[];
}

export const productsData: ProductsData = {
  label: "Product Lobby",
  title: "Building Products, Platforms, and Scalable Solutions",
  description:
    "Beyond client services, Group 107 develops and supports proprietary platforms and technology solutions designed for scalability, automation, and real business impact.",
  cta: { url: "#cta", label: "Explore Our Products" },
  products: [
    {
      title: "AccessibleDocs",
      tag: "AI Platform",
      description:
        "AI-powered platform for making documents accessible and compliant with global accessibility standards.",
      image: { src: "/project-1.png", alt: "AccessibleDocs" },
      animDelay: 0,
    },
    {
      title: "Summa",
      tag: "Automation",
      description:
        "AI-driven document processing and automation platform that accelerates workflows and reduces manual effort.",
      image: { src: "/project-2.png", alt: "Summa" },
      animDelay: 0.1,
    },
    {
      title: "GlobalDocs",
      tag: "Translation",
      description:
        "Document translation platform for multi-language content workflows, built for global teams.",
      image: { src: "/project-3.png", alt: "GlobalDocs" },
      animDelay: 0.2,
    },
    {
      title: "Levent",
      tag: "Fintech R&D",
      description:
        "R&D-driven fintech product development for banks and trading platforms, built for scale and compliance.",
      image: { src: "/hero.png", alt: "Levent" },
      animDelay: 0.3,
    },
  ],
};
