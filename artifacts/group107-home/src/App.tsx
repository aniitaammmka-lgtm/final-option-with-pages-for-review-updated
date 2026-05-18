import { Switch, Route, Router as WouterRouter } from "wouter";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import NotFound from "@/pages/not-found";
import ServicesPage from "@/pages/ServicesPage";
import ProductLobbyPage from "@/pages/ProductLobbyPage";
import DevelopmentServicesPage from "@/pages/DevelopmentServicesPage";
import WebDevelopmentPage from "@/pages/WebDevelopmentPage";
import SoftwareDevelopmentPage from "@/pages/SoftwareDevelopmentPage";
import MobileDevelopmentPage from "@/pages/MobileDevelopmentPage";
import ProductDiscoveryPage from "@/pages/ProductDiscoveryPage";
import SummaPage from "@/pages/SummaPage";
import GlobalDocsPage from "@/pages/GlobalDocsPage";
import LeventPage from "@/pages/LeventPage";
import Group107DigitalPage from "@/pages/Group107DigitalPage";
import NextAIPage from "@/pages/NextAIPage";
import AccessibleDocsPage from "@/pages/AccessibleDocsPage";
import LeadershipPage from "@/pages/LeadershipPage";
import CareersPage from "@/pages/CareersPage";
import PartnershipPage from "@/pages/PartnershipPage";
import BlogPage from "@/pages/BlogPage";
import OurWorkPage from "@/pages/OurWorkPage";
import CaseStudyPage from "@/pages/CaseStudyPage";
import AboutUsPage from "@/pages/AboutUsPage";
import ContactUsPage from "@/pages/ContactUsPage";
import TalentsPage from "@/pages/TalentsPage";
import TeamExpertisePage from "@/pages/TeamExpertisePage";
import RecruitmentPage from "@/pages/RecruitmentPage";
import Nav from "@/components/blocks/Nav";
import Hero from "@/components/blocks/Hero";
import Marquee from "@/components/blocks/Marquee";
import Positioning from "@/components/blocks/Positioning";
import Talents from "@/components/blocks/Talents";
import Services from "@/components/blocks/Services";
import Products from "@/components/blocks/Products";
import AiSection from "@/components/blocks/AiSection";
import SocialProof from "@/components/blocks/SocialProof";
import Advantages from "@/components/blocks/Advantages";
import CaseStudies from "@/components/blocks/CaseStudies";
import Insights from "@/components/blocks/Insights";
import CTA from "@/components/blocks/CTA";
import Footer from "@/components/blocks/Footer";

const queryClient = new QueryClient();

function Home() {
  return (
    <div className="page">
      <Nav />
      <main>
        <Hero />
        <Marquee />
        <Positioning />
        <Talents />
        <Services />
        <Products />
        <AiSection />
        <SocialProof />
        <Advantages />
        <CaseStudies />
        <Insights />
        <CTA />
      </main>
      <Footer />
    </div>
  );
}

function Router() {
  return (
    <Switch>
      <Route path="/" component={Home} />
      <Route path="/services" component={ServicesPage} />
      <Route path="/product-lobby" component={ProductLobbyPage} />
      <Route path="/development-services" component={DevelopmentServicesPage} />
      <Route path="/web-development" component={WebDevelopmentPage} />
      <Route path="/software-development" component={SoftwareDevelopmentPage} />
      <Route path="/mobile-development" component={MobileDevelopmentPage} />
      <Route path="/product-discovery" component={ProductDiscoveryPage} />
      <Route path="/summa" component={SummaPage} />
      <Route path="/global-docs" component={GlobalDocsPage} />
      <Route path="/levent" component={LeventPage} />
      <Route path="/group107-digital" component={Group107DigitalPage} />
      <Route path="/next-ai" component={NextAIPage} />
      <Route path="/accessible-docs" component={AccessibleDocsPage} />
      <Route path="/leadership" component={LeadershipPage} />
      <Route path="/careers" component={CareersPage} />
      <Route path="/partnership" component={PartnershipPage} />
      <Route path="/blog" component={BlogPage} />
      <Route path="/our-work" component={OurWorkPage} />
      <Route path="/our-work/:slug" component={CaseStudyPage} />
      <Route path="/about-us" component={AboutUsPage} />
      <Route path="/contact-us" component={ContactUsPage} />
      <Route path="/talents" component={TalentsPage} />
      <Route path="/team-expertise" component={TeamExpertisePage} />
      <Route path="/recruitment-as-a-service" component={RecruitmentPage} />
      <Route component={NotFound} />
    </Switch>
  );
}

export default function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <WouterRouter base={import.meta.env.BASE_URL.replace(/\/$/, "")}>
          <Router />
        </WouterRouter>
        <Toaster />
      </TooltipProvider>
    </QueryClientProvider>
  );
}
