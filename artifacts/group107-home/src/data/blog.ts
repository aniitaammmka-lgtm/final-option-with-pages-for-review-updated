export interface BlogPost {
  slug: string;
  title: string;
  excerpt: string;
  date: string;
  link: string;
  image: { src: string; alt: string };
  tag: string;
  animDelay: number;
}

export const blogHero = {
  eyebrow: "Resources",
  title: "Our Blog",
  sub: "Insights, guides, and expert perspectives on software development, AI, and business growth.",
};

export const blogPosts: BlogPost[] = [
  {
    slug: "top-it-staff-augmentation-companies",
    title: "Top IT Staff Augmentation Companies of 2026",
    excerpt: "In a competitive market, speed, skill, and scalability are non-negotiable. Hiring specialized tech talent—from DevOps engineers to AI specialists—is slower and more expensive than ever.",
    date: "2026-04-05",
    link: "https://group107.com/blog/top-it-staff-augmentation-companies/",
    image: { src: "https://group107.com/wp-content/uploads/2026/04/top-it-staff-augmentation-companies-digital-teamwork-1024x576.jpg", alt: "IT Staff Augmentation" },
    tag: "Talent",
    animDelay: 0.06,
  },
  {
    slug: "hire-remote-software-engineers",
    title: "How to Hire Remote Software Engineers in 2026: The Definitive Guide",
    excerpt: "Hiring remote software engineers is no longer a temporary measure or a simple cost-cutting tactic. It's a core strategic imperative for any business aiming to build a world-class product.",
    date: "2026-04-04",
    link: "https://group107.com/blog/hire-remote-software-engineers/",
    image: { src: "https://group107.com/wp-content/uploads/2026/04/hire-remote-software-engineers-global-team-1024x576.jpg", alt: "Hire Remote Software Engineers" },
    tag: "Talent",
    animDelay: 0.1,
  },
  {
    slug: "how-to-build-a-saas-product",
    title: "How to Build a SaaS Product in 2026: A Step-by-Step Guide",
    excerpt: "You have an idea for a SaaS product. That's the starting line. Transforming that concept into a market-leading business is a disciplined, strategic journey—not a single sprint.",
    date: "2026-04-03",
    link: "https://group107.com/blog/how-to-build-a-saas-product/",
    image: { src: "https://group107.com/wp-content/uploads/2026/04/how-to-build-a-saas-product-saas-workspace-1024x576.jpg", alt: "How to Build a SaaS Product" },
    tag: "Development",
    animDelay: 0.14,
  },
  {
    slug: "best-ai-tools-for-digital-marketing",
    title: "The Top 12 Best AI Tools for Digital Marketing in 2026",
    excerpt: "In 2026, artificial intelligence is no longer an optional add-on — it's the core engine driving measurable growth in digital marketing. These are the tools reshaping the industry.",
    date: "2026-04-02",
    link: "https://group107.com/blog/best-ai-tools-for-digital-marketing/",
    image: { src: "https://group107.com/wp-content/uploads/2026/04/best-ai-tools-for-digital-marketing-ai-marketing-1024x576.jpg", alt: "Best AI Tools for Digital Marketing" },
    tag: "AI",
    animDelay: 0.06,
  },
  {
    slug: "aws-compute-services",
    title: "Your Expert Guide to AWS Compute Services in 2026",
    excerpt: "Choosing the right AWS compute service is a foundational decision that directly impacts your application's performance, scalability, and cost efficiency in production.",
    date: "2026-04-01",
    link: "https://group107.com/blog/aws-compute-services/",
    image: { src: "https://group107.com/wp-content/uploads/2026/04/aws-compute-services-industrial-iot-1024x576.jpg", alt: "AWS Compute Services" },
    tag: "Cloud",
    animDelay: 0.1,
  },
  {
    slug: "backend-vs-frontend",
    title: "Backend vs. Frontend: A Strategic Guide for Business Leaders in 2026",
    excerpt: "Understanding the backend vs. frontend distinction is more than a technical discussion — it's a core business decision that directly shapes your product roadmap and team structure.",
    date: "2026-03-31",
    link: "https://group107.com/blog/backend-vs-frontend/",
    image: { src: "https://group107.com/wp-content/uploads/2026/03/backend-vs-frontend-api-integration-1024x576.jpg", alt: "Backend vs Frontend" },
    tag: "Development",
    animDelay: 0.14,
  },
  {
    slug: "digital-transformation-for-enterprises",
    title: "A Guide to Digital Transformation for Enterprises in 2026",
    excerpt: "When we talk about digital transformation for enterprises, we're not just talking about shiny new tech. It's a complete overhaul of how your organisation creates value and delivers it.",
    date: "2026-03-30",
    link: "https://group107.com/blog/digital-transformation-for-enterprises/",
    image: { src: "https://group107.com/wp-content/uploads/2026/03/digital-transformation-for-enterprises-digital-strategy-1024x576.jpg", alt: "Digital Transformation for Enterprises" },
    tag: "Business",
    animDelay: 0.06,
  },
  {
    slug: "business-intelligence-examples",
    title: "10 Actionable Business Intelligence Examples to Drive Growth in 2026",
    excerpt: "Data is one of your most valuable assets, but raw data alone is just noise. The real power comes from turning it into clear, actionable insights that shape strategic decisions.",
    date: "2026-03-29",
    link: "https://group107.com/blog/business-intelligence-examples/",
    image: { src: "https://group107.com/wp-content/uploads/2026/03/business-intelligence-examples-data-dashboard-1024x576.jpg", alt: "Business Intelligence Examples" },
    tag: "Business",
    animDelay: 0.1,
  },
  {
    slug: "offshore-software-development-company",
    title: "How to Hire an Offshore Software Development Company: The Definitive Guide",
    excerpt: "What was once viewed primarily as a cost-reduction tactic is now a core strategic capability. Here's what you need to know before choosing your offshore partner.",
    date: "2026-03-28",
    link: "https://group107.com/blog/offshore-software-development-company/",
    image: { src: "https://group107.com/wp-content/uploads/2026/03/offshore-software-development-company-coding-workspace-1024x576.jpg", alt: "Offshore Software Development Company" },
    tag: "Talent",
    animDelay: 0.14,
  },
  {
    slug: "common-sql-interview-questions",
    title: "Mastering the Database: Top 10 Common SQL Interview Questions for 2026",
    excerpt: "SQL is the bedrock of modern data management, powering everything from fintech platforms that process millions of transactions to analytics pipelines that guide business strategy.",
    date: "2026-03-27",
    link: "https://group107.com/blog/common-sql-interview-questions/",
    image: { src: "https://group107.com/wp-content/uploads/2026/03/common-sql-interview-questions-sql-study-1024x576.jpg", alt: "Common SQL Interview Questions" },
    tag: "Development",
    animDelay: 0.06,
  },
  {
    slug: "offshore-software-development-costs",
    title: "A Guide to Understanding Offshore Software Development Costs in 2026",
    excerpt: "When businesses first explore offshore software development costs, the conversation almost always starts—and often ends—with the hourly rate. That framing misses most of the picture.",
    date: "2026-03-26",
    link: "https://group107.com/blog/offshore-software-development-costs/",
    image: { src: "https://group107.com/wp-content/uploads/2026/03/offshore-software-development-costs-global-finance-1024x576.jpg", alt: "Offshore Software Development Costs" },
    tag: "Business",
    animDelay: 0.1,
  },
  {
    slug: "benefits-of-agile-development",
    title: "The Core Benefits of Agile Development: Building Better Products Faster",
    excerpt: "The primary advantage of agile development is its ability to deliver the right product, faster — by building and releasing working software in short, focused iterations.",
    date: "2026-03-25",
    link: "https://group107.com/blog/benefits-of-agile-development/",
    image: { src: "https://group107.com/wp-content/uploads/2026/03/benefits-of-agile-development-business-growth-1024x576.jpg", alt: "Benefits of Agile Development" },
    tag: "Development",
    animDelay: 0.14,
  },
];

export const blogTags = ["All", "Talent", "Development", "AI", "Cloud", "Business"];
