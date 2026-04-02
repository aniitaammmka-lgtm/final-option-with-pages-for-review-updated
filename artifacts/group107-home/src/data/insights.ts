export interface InsightPost {
  type: string;
  title: string;
  date: string;
  image: { src: string; alt: string };
  animDelay: number;
}

export interface InsightTab {
  icon: string;
  label: string;
  url: string;
}

export interface InsightsData {
  label: string;
  title: string;
  description: string;
  blogCta: { url: string; label: string };
  posts: InsightPost[];
  tabs: InsightTab[];
}

export const insightsData: InsightsData = {
  label: "Resources",
  title: "Insights, Ideas,\nand Industry Expertise",
  description:
    "Explore our blog, articles, and media content to stay updated on technology, AI, and digital growth.",
  blogCta: { url: "#", label: "Read Our Blog" },
  posts: [
    {
      type: "Blog",
      title: "How AI is Transforming Enterprise Software Development",
      date: "Mar 2025",
      image: { src: "/project-1.png", alt: "AI transforming enterprise software" },
      animDelay: 0,
    },
    {
      type: "Article",
      title: "Scaling Dedicated Teams: What Every CTO Should Know",
      date: "Feb 2025",
      image: { src: "/project-2.png", alt: "Scaling dedicated teams" },
      animDelay: 0.1,
    },
    {
      type: "Media",
      title: "Group 107 at FinTech Europe 2025: Key Takeaways",
      date: "Jan 2025",
      image: { src: "/project-3.png", alt: "Group 107 at FinTech Europe 2025" },
      animDelay: 0.2,
    },
  ],
  tabs: [
    { icon: "BookOpen", label: "Blog", url: "#" },
    { icon: "Newspaper", label: "Articles", url: "#" },
    { icon: "PlayCircle", label: "Media Room", url: "#" },
  ],
};
