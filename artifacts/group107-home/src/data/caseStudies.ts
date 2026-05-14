export interface CsImage { src: string; alt: string; }
export interface CsSolution { title: string; text: string; }
export interface CsQuote { text: string; author: string; role: string; }

export interface CaseStudyDetail {
  slug: string;
  client: string;
  tagline: string;
  tags: string[];
  industry: string;
  year: string;
  website: string;
  goal: string;
  description: string;
  conclusion: string;
  heroImage: CsImage;
  gallery: CsImage[];
  solutions: CsSolution[];
  quote?: CsQuote;
  relatedSlugs: string[];
}

export const caseStudyDetails: CaseStudyDetail[] = [
  {
    slug: "ezbob",
    client: "Ezbob",
    tagline: "Fintech-powered platform that delivers embedded lending solutions",
    tags: ["Web Development", "Custom Software Development", "UX/UI Design"],
    industry: "Financial Services",
    year: "2024",
    website: "https://ezbob.com",
    goal: "To translate a sophisticated visual design into a high-performing, secure, and easily manageable WordPress site that supports ezbob's growth and lead generation strategies in the fintech space.",
    description: "Full WordPress implementation from scratch using ACF and custom post types, optimised for speed, security, and SEO. The project focused on conveying product value through structured pages and benefit-focused narratives for bank decision-makers. Motion product design and tech consultancy were layered on top to ensure a polished, future-ready result.",
    conclusion: "A clean and robust WordPress implementation of a third-party design, resulting in a scalable digital presence that aligns with ezbob's position as a leading embedded lending platform.",
    heroImage: { src: "https://group107.com/wp-content/uploads/2025/04/ezbob-1-1.png", alt: "Ezbob platform hero" },
    gallery: [
      { src: "https://group107.com/wp-content/uploads/2025/04/ezbob-3.png", alt: "Ezbob interface" },
      { src: "https://group107.com/wp-content/uploads/2025/04/ezbob-2.png", alt: "Ezbob dashboard" },
      { src: "https://group107.com/wp-content/uploads/2025/04/macbook-air-15-inch-2.png", alt: "Ezbob desktop view" },
      { src: "https://group107.com/wp-content/uploads/2025/04/ezbob-4.png", alt: "Ezbob product page" },
      { src: "https://group107.com/wp-content/uploads/2025/04/ezbob-5.png", alt: "Ezbob mobile experience" },
    ],
    solutions: [
      { title: "Web Development", text: "Full WordPress implementation from scratch using ACF and custom post types. Optimisation for speed, security, and SEO baked into the core structure." },
      { title: "UX/UI Design", text: "Pixel-perfect implementation of the Awesome – Deloitte studio design, preserving every interaction detail and visual system component." },
      { title: "Product Discovery", text: "Focus on conveying product value through structured pages and benefit-focused narratives tailored to bank decision-makers." },
      { title: "Tech Consultancy", text: "Advising on optimal implementation approaches within WordPress and ensuring best practices in performance, SEO, and CMS usability." },
    ],
    quote: {
      text: "The agency's approach to understand the customer's market and technology and to build lasting relationships creates a value-add that cannot be easily replicated.",
      author: "Roger Ordman",
      role: "Executive VP Marketing & Business Development, Ezbob",
    },
    relatedSlugs: ["simplex", "blings", "neureality"],
  },
  {
    slug: "simplex",
    client: "Simplex",
    tagline: "A new vision for planning and presenting your space",
    tags: ["Web Development", "Enterprise Solutions"],
    industry: "Information Technology & Services",
    year: "2024",
    website: "https://simplexdna.com",
    goal: "To create a corporate website that effectively communicates Simplex 3D's technical expertise, showcases project success stories, and supports lead generation through a user-friendly digital experience.",
    description: "Group 107 handled the full WordPress website development, focusing on performance, modularity, and ease of content updates. Discovery sessions with Simplex 3D's leadership defined key messaging, user flows, and content prioritisation. The team advised on scalable architecture, multilingual site setup, and integration opportunities with marketing tools.",
    conclusion: "The Simplex 3D website now serves as a strong, credible digital presence that clearly highlights their technological leadership and supports business growth through better visibility and client engagement.",
    heroImage: { src: "https://group107.com/wp-content/uploads/2025/05/simplex-h.png", alt: "Simplex platform hero" },
    gallery: [
      { src: "https://group107.com/wp-content/uploads/2025/05/smplx.png", alt: "Simplex interface" },
      { src: "https://group107.com/wp-content/uploads/2025/05/1.jpg", alt: "Simplex project overview" },
      { src: "https://group107.com/wp-content/uploads/2025/05/simplex-phones.jpg", alt: "Simplex mobile experience" },
      { src: "https://group107.com/wp-content/uploads/2025/05/desk-simplex.png", alt: "Simplex desktop view" },
      { src: "https://group107.com/wp-content/uploads/2025/05/mob-simplex.png", alt: "Simplex mobile view" },
    ],
    solutions: [
      { title: "Web Development", text: "Full WordPress website development with focus on performance, modularity, and ease of content updates for the Simplex 3D team." },
      { title: "UX/UI Design", text: "Implemented the Awesome – Deloitte studio design with a focus on dynamic, engaging user experiences and intuitive navigation." },
      { title: "AI Integrations", text: "Seamlessly merged AI into the digital systems, unleashing efficiency and innovation for a future-ready web presence." },
      { title: "Product Discovery", text: "Discovery sessions with leadership to define key messaging, user flows, and content prioritisation across all product lines." },
    ],
    relatedSlugs: ["ezbob", "cato", "priority"],
  },
  {
    slug: "cato",
    client: "Cato Networks",
    tagline: "Cloud-native platform that redefines secure access for modern enterprises",
    tags: ["Web Development", "Custom Software Development", "Enterprise Solutions"],
    industry: "Networking & Network Security",
    year: "2024",
    website: "https://catonetworks.com",
    goal: "To build a platform site that clearly communicates Cato's pioneering convergence of networking and security, driving enterprise pipeline through authoritative content and conversion-optimised architecture.",
    description: "Cato pioneered the convergence of networking and security into the cloud. By aligning with Gartner's SASE framework, Cato delivers a next-gen IT security platform that replaces complex, costly legacy systems. Group 107 implemented the full WordPress site on ACF and Gutenberg Blocks, ensuring fast deployment, optimal performance, and a content structure flexible enough for rapid campaign launches.",
    conclusion: "A technically rigorous, high-performing enterprise site that positions Cato as the definitive SASE authority — enabling fast deployment and optimal security messaging without burdening IT teams.",
    heroImage: { src: "https://group107.com/wp-content/uploads/2025/04/cato-1.png", alt: "Cato Networks platform" },
    gallery: [
      { src: "https://group107.com/wp-content/uploads/2025/04/cato-2.png", alt: "Cato Networks dashboard" },
    ],
    solutions: [
      { title: "Web Development", text: "WordPress, ACF Gutenberg Blocks, custom frontend and backend implementation optimised for enterprise-scale content operations." },
      { title: "Custom Software Development", text: "Bespoke integrations and modules enabling campaign landing pages, dynamic content delivery, and performance benchmarking." },
      { title: "Enterprise Solutions", text: "Scalable site architecture designed to support global multi-region deployments and localised content without rebuilding core infrastructure." },
      { title: "Tech Consultancy", text: "Advisory on CMS architecture, animation feasibility, and frontend implementation aligned with design intent and performance targets." },
    ],
    relatedSlugs: ["simplex", "pluto-security", "neureality"],
  },
  {
    slug: "super-play",
    client: "Super Play",
    tagline: "An animated playground built for bold games and bolder experiences",
    tags: ["Web Development", "Custom Software Development", "Interactive Prototyping"],
    industry: "Mobile Gaming",
    year: "2024",
    website: "https://superplay.com",
    goal: "Custom development of a vibrant, interactive WordPress website for SuperPlay — the studio behind top titles like Dice Dreams — with pixel-perfect front-end implementation from an external agency design.",
    description: "The project involved building a bold, animation-rich WordPress theme with advanced scroll and hover interactions. A CMS-driven Careers and About section gives the SuperPlay team full editorial control. Every layout was built for responsiveness and speed across device types, while maintaining the studio's distinctive visual energy.",
    conclusion: "A high-energy, performant site that reflects the SuperPlay brand — animation-rich, conversion-ready, and built to scale alongside the studio's growing roster of hit mobile games.",
    heroImage: { src: "https://group107.com/wp-content/uploads/2025/05/super-play-b-1.png", alt: "Super Play website hero" },
    gallery: [
      { src: "https://group107.com/wp-content/uploads/2025/05/super-play-p.png", alt: "Super Play product page" },
      { src: "https://group107.com/wp-content/uploads/2025/05/iphone-16-pro.png", alt: "Super Play mobile view" },
      { src: "https://group107.com/wp-content/uploads/2025/05/sp-jar.png", alt: "Super Play game asset" },
    ],
    solutions: [
      { title: "Web Development", text: "Custom WordPress theme with advanced scroll and hover animations, responsive across all screen sizes." },
      { title: "Interactive Prototyping", text: "Pixel-perfect implementation of animation-rich layouts with smooth micro-interactions and CMS-managed sections." },
      { title: "Custom Software Development", text: "Modular CMS architecture for easy management of Careers, About, and culture content by the internal team." },
      { title: "Performance Optimisation", text: "Site speed, SEO readiness, and responsiveness maintained across all animation-heavy page layouts." },
    ],
    relatedSlugs: ["blings", "dynamo", "ezbob"],
  },
  {
    slug: "blings",
    client: "Blings",
    tagline: "Empowering businesses with AI-driven video storytelling",
    tags: ["UX/UI Design", "Custom Software Development", "Web Development"],
    industry: "SaaS & Software",
    year: "2024",
    website: "https://blings.io",
    goal: "To create a modern, interactive WordPress website for Blings that showcases personalised video capabilities and supports scalable marketing solutions — bringing the brand's creative vision to life through vibrant design, seamless animation, and flexible content updates.",
    description: "Custom WordPress development with animation-rich frontend execution. The project included building flexible content structures and ensuring mobile-first responsiveness, speed, and SEO. The UX was led by the Awesome – Deloitte studio with a focus on dynamic, engaging user experiences and intuitive navigation that mirrors the Blings product itself.",
    conclusion: "The result is a fast, visually dynamic website that amplifies Blings' marketing strategy. It provides a smooth user experience, a flexible CMS architecture, and the scalability needed for future growth and business expansion.",
    heroImage: { src: "https://group107.com/wp-content/uploads/2025/04/blings-b.png", alt: "Blings platform hero" },
    gallery: [
      { src: "https://group107.com/wp-content/uploads/2025/04/blings-6.png", alt: "Blings feature section" },
      { src: "https://group107.com/wp-content/uploads/2025/04/blings-2-1.png", alt: "Blings interface" },
      { src: "https://group107.com/wp-content/uploads/2025/04/blings-3.png", alt: "Blings dashboard" },
      { src: "https://group107.com/wp-content/uploads/2025/04/blings-4.png", alt: "Blings product page" },
      { src: "https://group107.com/wp-content/uploads/2025/04/blings-5-1.png", alt: "Blings mobile view" },
    ],
    solutions: [
      { title: "Web Development", text: "Custom WordPress development with animation-rich frontend execution, mobile-first responsiveness, and SEO-optimised architecture." },
      { title: "UX/UI Design", text: "Awesome – Deloitte studio design with a focus on dynamic, engaging user experiences and intuitive storytelling navigation." },
      { title: "Animation & Motion Design", text: "Immersive motion design woven throughout the site to mirror the Blings AI video product proposition." },
      { title: "WordPress CMS Strategy", text: "Flexible content structures enabling the Blings marketing team to update and expand the site independently." },
    ],
    relatedSlugs: ["super-play", "dynamo", "simplex"],
  },
  {
    slug: "priority",
    client: "Priority Software",
    tagline: "Modern multilingual ERP platform built for global enterprise audiences",
    tags: ["Web Development", "Custom Software Development", "Accessibility-Focused Design"],
    industry: "Enterprise Software (ERP)",
    year: "2024",
    website: "https://priority-software.com",
    goal: "Development of a modern, multilingual corporate website for Priority Software — an ERP provider serving global enterprises — with emphasis on performance, user experience, and SEO optimisation.",
    description: "The Priority Software site demanded a scalable architecture capable of supporting industry-specific solution pages, partner and customer portals, a filterable resource library, and a fully globalised content structure. Group 107 delivered WCAG-compliant, accessible design across all modules, alongside strong CTA integration throughout the acquisition funnel.",
    conclusion: "Priority Software now operates a high-performance, globally accessible web presence that clearly communicates product value across verticals and drives enterprise pipeline at scale.",
    heroImage: { src: "https://group107.com/wp-content/uploads/2025/04/priority-thumb.png", alt: "Priority Software platform" },
    gallery: [
      { src: "https://group107.com/wp-content/uploads/2025/04/priority-3.png", alt: "Priority Software features" },
      { src: "https://group107.com/wp-content/uploads/2025/04/priority-2.png", alt: "Priority Software interface" },
    ],
    solutions: [
      { title: "Web Development", text: "WordPress-based multilingual site with dynamic service pages, partner portals, and resource library with advanced filtering." },
      { title: "Accessibility-Focused Design", text: "Full WCAG 2.1 AA compliance achieved across all product pages and user journeys, serving 75,000+ end users." },
      { title: "Custom Software Development", text: "Bespoke interactive prototyping and custom post types enabling self-serve content management across 12 regional markets." },
      { title: "SEO & Performance", text: "Core Web Vitals-optimised architecture with structured content designed for discovery across B2B enterprise search queries." },
    ],
    relatedSlugs: ["cato", "ezbob", "vetted-outsource"],
  },
  {
    slug: "dynamo",
    client: "Dynamo",
    tagline: "Conversion-driven automation platform built to scale your brand through AI",
    tags: ["Web Development", "Custom Software Development", "Interactive Prototyping"],
    industry: "AI & Technology Consultancy",
    year: "2025",
    website: "https://dynamoai.com",
    goal: "To position Dynamo as a top-tier consultancy for AI-native companies by creating a digital presence that communicates technical excellence, drives qualified leads, and balances bold storytelling with enterprise credibility.",
    description: "Creation of a sleek, high-performance marketing website for Dynamo — a cutting-edge AI-native consultancy. The site features unique branded animations and transitions, modular block-based content sections, case study and team introduction elements, and a clear inquiry funnel. Blog integration supports ongoing thought leadership positioning.",
    conclusion: "Dynamo's new digital presence positions the company as a forward-thinking AI authority — converting visitors into qualified pipeline through a minimal, high-converting interface that doesn't compromise on visual ambition.",
    heroImage: { src: "https://group107.com/wp-content/uploads/2025/05/herody-1.jpg", alt: "Dynamo platform hero" },
    gallery: [
      { src: "https://group107.com/wp-content/uploads/2025/05/dynamo-b.png", alt: "Dynamo website overview" },
      { src: "https://group107.com/wp-content/uploads/2025/05/m-screens.png", alt: "Dynamo mobile screens" },
      { src: "https://group107.com/wp-content/uploads/2025/05/d-screens.png", alt: "Dynamo desktop screens" },
    ],
    solutions: [
      { title: "Web Development", text: "WordPress platform with high-performance architecture, clean CMS structure, and full SEO foundation for long-term content growth." },
      { title: "Custom Software Development", text: "Unique branded animations and transitions engineered for smooth performance across devices, with no compromise on visual ambition." },
      { title: "Interactive Prototyping", text: "Modular block-based content system enabling rapid page creation, campaign landing pages, and case study additions without dev involvement." },
      { title: "Product Discovery", text: "Structured complex service offerings and team narratives into a clear, scannable hierarchy that converts enterprise visitors." },
    ],
    relatedSlugs: ["blings", "super-play", "neureality"],
  },
  {
    slug: "pluto-security",
    client: "Pluto Security",
    tagline: "AI workspace security platform securing innovation without slowing it down",
    tags: ["Web Development", "Enterprise Solutions"],
    industry: "Computer and Network Security",
    year: "2026",
    website: "https://plutosecurity.com",
    goal: "Enable organisations to let people build safely by securing AI creation tools without blocking innovation or forcing manual governance.",
    description: "The Pluto Security website was developed on WordPress, ensuring scalability, flexibility, and seamless content management for ongoing growth. The product discovery process focused on empowering businesses to securely adopt AI while maintaining enterprise-level control. Content and messaging position Pluto as an advisor on how to integrate security into AI workflows.",
    conclusion: "Pluto Security shifts AI security from a reactive to a proactive approach, enabling organisations to oversee, control, and protect AI-driven workflows across the enterprise. The platform empowers security teams to ensure safe AI adoption without hindering innovation.",
    heroImage: { src: "https://group107.com/wp-content/uploads/2026/03/pluto-thumb.png", alt: "Pluto Security platform" },
    gallery: [
      { src: "https://group107.com/wp-content/uploads/2026/03/1631.png", alt: "Pluto Security dashboard" },
      { src: "https://group107.com/wp-content/uploads/2026/03/1630.png", alt: "Pluto Security features" },
      { src: "https://group107.com/wp-content/uploads/2026/03/1559.png", alt: "Pluto Security interface" },
      { src: "https://group107.com/wp-content/uploads/2026/03/1561.png", alt: "Pluto Security controls" },
      { src: "https://group107.com/wp-content/uploads/2026/03/15122-crop.png", alt: "Pluto Security overview" },
    ],
    solutions: [
      { title: "Web Development", text: "Scalable WordPress platform with flexible content management architecture supporting rapid updates across security advisories and blog content." },
      { title: "Product Discovery", text: "Structured the product narrative around the growing need for secure AI adoption — translating complex security concepts into accessible messaging." },
      { title: "Tech Consultancy", text: "Positioned Pluto as a thought leader through research-backed blog content and a risk-visibility narrative integrated throughout the site." },
      { title: "UX/UI Design", text: "Clean, enterprise-grade visual system provided by the client, implemented with precision for clarity across all user personas." },
    ],
    relatedSlugs: ["cato", "neureality", "vetted-outsource"],
  },
  {
    slug: "vetted-outsource",
    client: "Vetted Outsource",
    tagline: "Connecting businesses with trusted outsourcing partners worldwide",
    tags: ["Web Development", "UX/UI Design"],
    industry: "B2B Outsourcing & Workforce Solutions",
    year: "2025",
    website: "https://vettedoutsource.com",
    goal: "To build a high-converting B2B platform that communicates credibility, streamlines lead generation, and supports long-term marketing efforts — simplifying complex service offerings into a structured, easy-to-navigate experience.",
    description: "The main challenge was implementing a scalable and flexible website structure that could support future service expansion without rebuilding core architecture. Group 107 built a modular system allowing the client to manage services and pages independently. The project included dynamic service pages, lead capture forms, and a full responsive system optimised for performance and SEO.",
    conclusion: "The result is a professional, performance-optimised website that supports lead generation, strengthens brand credibility, and provides a scalable foundation for future expansion.",
    heroImage: { src: "https://group107.com/wp-content/uploads/2026/02/vetted-thumb.png", alt: "Vetted Outsource platform" },
    gallery: [
      { src: "https://group107.com/wp-content/uploads/2026/02/vetted-phone.png", alt: "Vetted Outsource mobile" },
      { src: "https://group107.com/wp-content/uploads/2026/02/vetted-banner.png", alt: "Vetted Outsource banner" },
      { src: "https://group107.com/wp-content/uploads/2026/02/group-15125-crop.png", alt: "Vetted Outsource UI detail" },
      { src: "https://group107.com/wp-content/uploads/2026/02/group-15124-crop-scaled.png", alt: "Vetted Outsource layout" },
    ],
    solutions: [
      { title: "Web Development", text: "Custom WordPress website with scalable structure, dynamic service pages, lead capture forms, and a modular content system for easy updates." },
      { title: "UX/UI Design", text: "Clear, credibility-first design system that simplifies complex outsourcing service offerings into a structured, scannable experience." },
      { title: "SEO & Performance", text: "Core Web Vitals-optimised build with SEO-ready architecture and responsive behaviour tuned for the B2B acquisition funnel." },
      { title: "CMS Architecture", text: "Modular system enabling the Vetted team to add and manage service pages and content independently without developer involvement." },
    ],
    relatedSlugs: ["priority", "pluto-security", "ezbob"],
  },
  {
    slug: "neureality",
    client: "NeuReality",
    tagline: "Venture-backed deep tech AI startup redefining inference at scale",
    tags: ["Web Development", "Custom Software Development", "UX/UI Design"],
    industry: "Artificial Intelligence & Semiconductors",
    year: "2026",
    website: "https://neureality.ai",
    goal: "To deliver a redesigned, high-performance website that clearly communicates NeuReality's groundbreaking AI inference innovations while serving as a lead-generation and positioning tool for investors, partners, and enterprise clients.",
    description: "Group 107 delivered custom WordPress development for performance, scalability, and flexibility. The UX was completely redefined — a tech-forward design system and visual hierarchy that communicates NeuReality's complex semiconductor technology to a diverse audience of enterprises, governments, and investment partners. Structured complex technical information into accessible, scannable content blocks.",
    conclusion: "The NeuReality redesign is more than a facelift — it's a repositioning of a revolutionary AI company in the digital space. Through strategic design, content clarity, and technical excellence, the new site empowers NeuReality to scale its message and mission to a global audience.",
    heroImage: { src: "https://group107.com/wp-content/uploads/2026/01/1628.png", alt: "NeuReality platform hero" },
    gallery: [
      { src: "https://group107.com/wp-content/uploads/2026/01/1597884275.png", alt: "NeuReality overview" },
      { src: "https://group107.com/wp-content/uploads/2026/01/1623.png", alt: "NeuReality AI features" },
      { src: "https://group107.com/wp-content/uploads/2026/01/1619.png", alt: "NeuReality interface" },
      { src: "https://group107.com/wp-content/uploads/2026/01/15110-crop.png", alt: "NeuReality product detail" },
    ],
    solutions: [
      { title: "Web Development", text: "Custom WordPress development for performance, scalability, and flexibility — built to handle rapid content growth across investor and enterprise audiences." },
      { title: "UX/UI Design", text: "Redefined user journey with a tech-forward design system and visual hierarchy that makes complex AI inference technology immediately legible." },
      { title: "Product Discovery", text: "Structured complex technical information into accessible content blocks, creating clear pathways for enterprise, government, and investor visitors." },
      { title: "Tech Consultancy", text: "Recommendations on CMS best practices, cloud integration, and compliance readiness for a globally scaling deep tech company." },
    ],
    relatedSlugs: ["cato", "dynamo", "pluto-security"],
  },
];

export function getCaseStudy(slug: string): CaseStudyDetail | undefined {
  return caseStudyDetails.find(cs => cs.slug === slug);
}

export function getRelatedCaseStudies(slugs: string[]): CaseStudyDetail[] {
  return slugs.map(s => caseStudyDetails.find(cs => cs.slug === s)).filter(Boolean) as CaseStudyDetail[];
}
