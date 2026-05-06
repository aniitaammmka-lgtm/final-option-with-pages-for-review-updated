export interface LeaderMember {
  name: string;
  role: string;
  bio: string;
  image: { src: string; alt: string };
  animDelay: number;
}

export interface LeadershipTab {
  id: string;
  label: string;
  members: LeaderMember[];
}

export const leadershipTabs: LeadershipTab[] = [
  {
    id: "founders",
    label: "Co-founders",
    members: [
      {
        name: "Adi Katz",
        role: "Founder & CEO",
        bio: "Founder & CEO is the acting CEO of the group with a proven track record working in the financial services industry. Adi's skills set includes Management, Sales, Business Strategy, and Marketing. Adi has served in senior management positions over the past 15 years. He has generated annual revenues from sales in the sum of over 100 million NIS.",
        image: { src: "https://group107.com/wp-content/uploads/2025/07/whatsapp_image_2025-07-28_at_18.03.45.jpeg", alt: "Adi Katz" },
        animDelay: 0.1,
      },
      {
        name: "Guy Amar",
        role: "Founder & CTO",
        bio: "Serves as the CTO of the group. Guy has over 8 years of experience in R&D and managing product development from the initiation phase to a leading international tech service provider. Vast experience in managing R&D responsibilities of leading tech companies.",
        image: { src: "https://group107.com/wp-content/uploads/2025/07/whatsapp_image_2025-07-28_at_18.03.45__1_.jpeg", alt: "Guy Amar" },
        animDelay: 0.18,
      },
    ],
  },
  {
    id: "management",
    label: "Management",
    members: [
      {
        name: "Roi Katz",
        role: "CFO",
        bio: "CPA, Ph.D candidate in accounting and finance, senior partner at \"Amos Katz & Co.\"",
        image: { src: "https://group107.com/wp-content/uploads/2023/12/Roi-Katz.png", alt: "Roi Katz" },
        animDelay: 0.1,
      },
      {
        name: "Sandra Usiemwanta",
        role: "COO",
        bio: "Determined and skilled executive manager with an MA in International Economic Relations and 16 years of complex experience in the Banking, Entrepreneurship and IT.",
        image: { src: "https://group107.com/wp-content/uploads/2023/12/Sandra-Usiemwanta.png", alt: "Sandra Usiemwanta" },
        animDelay: 0.18,
      },
    ],
  },
  {
    id: "directors",
    label: "Board of Directors",
    members: [
      {
        name: "Izhar Shay",
        role: "Chairman of the Board",
        bio: "Former Minister of Science & Technology and MK. High-Tech Entrepreneur, Venture Capital Investor, Director & Chairman. Founder of Start-Up Stadium, the largest on-line community of Israeli entrepreneurs.",
        image: { src: "https://group107.com/wp-content/uploads/2025/07/izhar-shay.jpeg", alt: "Izhar Shay" },
        animDelay: 0.1,
      },
      {
        name: "Maybar Drust",
        role: "Director",
        bio: "Founder & CEO of MD Consultancy. 20+ years of experience in sales & marketing executive roles in global companies. Startup advisor & mentor.",
        image: { src: "https://group107.com/wp-content/uploads/2023/12/Maybar-Drust.png", alt: "Maybar Drust" },
        animDelay: 0.18,
      },
      {
        name: "Maya Finger",
        role: "Director",
        bio: "Head of ACTO, the Academic Center for Impact Investments. Senior lecturer in academic institutions. Experience in banking and risk management.",
        image: { src: "https://group107.com/wp-content/uploads/2023/12/Maya-Finger.png", alt: "Maya Finger" },
        animDelay: 0.26,
      },
      {
        name: "Einat Skornik",
        role: "Director",
        bio: "+20 years of experience. Director of a consulting system of Investments and pensions, capital market research and R&D of Fintech products. Has financial expertise. Provides mentoring for young entrepreneurs.",
        image: { src: "https://group107.com/wp-content/uploads/2024/08/einat-scurnick-profile.png", alt: "Einat Skornik" },
        animDelay: 0.34,
      },
      {
        name: "Liema Davidovich",
        role: "Director",
        bio: "Holds a PhD in Business Administration and Economics with a specialization in Finance and Accounting. Served for over 20 years as Head of the Department of Economics and Accounting at the Ruppin Academic Center.",
        image: { src: "https://group107.com/wp-content/uploads/2023/12/Liema-Davidovich.png", alt: "Liema Davidovich" },
        animDelay: 0.42,
      },
    ],
  },
];
