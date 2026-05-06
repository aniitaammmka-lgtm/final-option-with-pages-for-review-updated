export interface CareerBenefit {
  icon: string;
  title: string;
  desc: string;
  animDelay: number;
}

export interface CareerVacancy {
  title: string;
  location: string;
  type: string;
  posted: string;
  animDelay: number;
}

export interface CareerTestimonial {
  quote: string;
  name: string;
  role: string;
  animDelay: number;
}

export interface CareerStat {
  value: string;
  label: string;
}

export const careersHero = {
  eyebrow: "Join Our Team",
  label: "Premium Software Development Community",
  title: "The Leading Tech Hub in Ukraine",
  body: "Join our team of like-minded people who work on exciting innovative projects by global technology companies in a friendly and family-like environment.",
  sub: "Our community is established on our Israeli management approach: innovation, professionalism, transparency, trust, and integrity.",
  cta: { label: "View Open Positions", url: "https://careers.group107.com/vacancies/" },
  ctaSecondary: { label: "Learn About Us", url: "https://careers.group107.com/en/about/" },
};

export const careersAbout = {
  tag: "About Group 107 Talent",
  title: "Where Innovations Meet\nWorld-Class Talent",
  body: "Group 107 in Ukraine is the place where innovations, technologies, IT talents, and leading world companies meet to transform cool ideas into successful businesses.",
  mission: "Our mission is to provide the most innovative and collaborative environment for development, engagement and extended professional growth.",
  vision: "Our vision and goal is to create a new standard of premium offshore IT services in Ukraine.",
  ethics: "Getting excited about the projects, our people enjoy the process and make the most of what they do. It allows us to provide complex A-Z premium offshore services based on strong professional ethics.",
};

export const careersBenefits: CareerBenefit[] = [
  {
    icon: "Users",
    title: "Smooth Team Integration",
    desc: "The quick and supportive onboarding process ensures you feel at home from day one.",
    animDelay: 0.06,
  },
  {
    icon: "Rocket",
    title: "Launch Project Opportunity",
    desc: "The projects we take very often are made from scratch — an excellent opportunity to take lead and grow with the company.",
    animDelay: 0.12,
  },
  {
    icon: "TrendingUp",
    title: "Individual Development Plan",
    desc: "Every IT specialist in Group 107 has an individual development road map to ensure their long-term professional growth.",
    animDelay: 0.18,
  },
  {
    icon: "Lightbulb",
    title: "Awesome Innovative Projects",
    desc: "Having the ability of choice, we give preference to trending innovative technologies.",
    animDelay: 0.24,
  },
  {
    icon: "Globe",
    title: "International Business Trips",
    desc: "Our clients invite specialists to work on-site for a couple of weeks to gain both cultural and professional experience.",
    animDelay: 0.30,
  },
  {
    icon: "Heart",
    title: "Pet-Friendly Office",
    desc: "Have a dog or cat you can't leave at home? Bring them to the office!",
    animDelay: 0.36,
  },
];

export const careersVacancies: CareerVacancy[] = [
  {
    title: "Strong Middle General QA Engineer",
    location: "Remote",
    type: "Full-time",
    posted: "2 days ago",
    animDelay: 0.06,
  },
  {
    title: "Senior BI Developer",
    location: "Remote",
    type: "Full-time",
    posted: "6 days ago",
    animDelay: 0.12,
  },
  {
    title: "Creative AI Specialist",
    location: "Remote",
    type: "Full-time",
    posted: "7 days ago",
    animDelay: 0.18,
  },
  {
    title: "Project Manager",
    location: "Tel Aviv",
    type: "Full-time",
    posted: "3 weeks ago",
    animDelay: 0.24,
  },
  {
    title: "Product Manager",
    location: "Tel Aviv",
    type: "Full-time",
    posted: "3 weeks ago",
    animDelay: 0.30,
  },
  {
    title: "Senior Azure Cloud Security Engineer",
    location: "Remote",
    type: "Full-time",
    posted: "1 month ago",
    animDelay: 0.36,
  },
];

export const careersTestimonials: CareerTestimonial[] = [
  {
    quote: "Hello, I am Sam. I have been working at Group 107 as a digital campaign specialist for 2 years and it is the best position ever!",
    name: "Sam",
    role: "SMS/Email Campaigner",
    animDelay: 0.06,
  },
  {
    quote: "Here I like the fact that I have the freedom to be creative and work on really cool projects.",
    name: "Dmytro",
    role: "Motion Designer",
    animDelay: 0.12,
  },
  {
    quote: "When I came to work, there were only about 20 of us. At the moment there are 100+ of us, and the feeling of support and friendship remains the same as in a small team.",
    name: "Anna",
    role: "Recruiter",
    animDelay: 0.18,
  },
  {
    quote: "What I like most is the family atmosphere, interesting projects, flexible management and the opportunity to develop my professional skills every day.",
    name: "Anastasia",
    role: "Scrum Master",
    animDelay: 0.24,
  },
  {
    quote: "From the beginning, I felt like I'm in a big family where everybody supports each other and is ready to help at any time. Group 107 gives great opportunities to develop your skills.",
    name: "Nazar",
    role: "Front-End Developer",
    animDelay: 0.30,
  },
  {
    quote: "I like that the company cares about me as a person and about my personal growth. I feel motivated and inspired at work every day.",
    name: "Kateryna",
    role: "UI/UX Designer",
    animDelay: 0.36,
  },
];

export const careersStats: CareerStat[] = [
  { value: "100+", label: "Team Members" },
  { value: "88K+", label: "Talent Pool" },
  { value: "700+", label: "Global Clients" },
  { value: "12+", label: "Years Experience" },
];
