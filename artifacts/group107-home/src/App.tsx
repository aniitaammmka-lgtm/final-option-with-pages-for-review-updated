import React from "react";
import { Switch, Route, Router as WouterRouter, Link } from "wouter";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import NotFound from "@/pages/not-found";
import { motion, useScroll, useTransform } from "framer-motion";
import { ArrowRight, ArrowUpRight, Menu } from "lucide-react";

const queryClient = new QueryClient();

const fadeInUp = {
  initial: { opacity: 0, y: 30 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: "-100px" },
  transition: { duration: 0.7, ease: [0.16, 1, 0.3, 1] }
};

const staggerContainer = {
  initial: { opacity: 0 },
  whileInView: { opacity: 1 },
  viewport: { once: true, margin: "-100px" },
  transition: { staggerChildren: 0.1 }
};

function NavBar() {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-md border-b border-border/50">
      <div className="max-w-[1440px] mx-auto px-6 md:px-12 h-20 flex items-center justify-between">
        <Link href="/" className="text-xl font-bold tracking-tight">
          Group 107
        </Link>
        <div className="hidden md:flex items-center gap-8 font-mono text-sm uppercase tracking-tight">
          <Link href="#work" className="hover:opacity-60 transition-opacity">Work</Link>
          <Link href="#services" className="hover:opacity-60 transition-opacity">Services</Link>
          <Link href="#about" className="hover:opacity-60 transition-opacity">About</Link>
          <button 
            data-testid="btn-contact-nav"
            className="bg-foreground text-background px-5 py-2.5 hover:bg-foreground/90 transition-colors"
          >
            Contact Us
          </button>
        </div>
        <button className="md:hidden p-2" aria-label="Menu" data-testid="btn-mobile-menu">
          <Menu className="w-6 h-6" />
        </button>
      </div>
    </nav>
  );
}

function Hero() {
  return (
    <section className="pt-40 pb-20 md:pt-52 md:pb-32 px-6 md:px-12 max-w-[1440px] mx-auto">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-16">
        <motion.div 
          className="lg:col-span-8 flex flex-col items-start justify-center"
          initial="initial"
          animate="whileInView"
          variants={staggerContainer}
        >
          <motion.div variants={fadeInUp} className="mb-6 inline-block border border-foreground px-4 py-1.5 font-mono text-xs uppercase tracking-wider">
            Digital growth studio
          </motion.div>
          <motion.h1 
            variants={fadeInUp}
            className="text-[12vw] leading-[0.9] md:text-[8vw] font-bold tracking-tighter text-balance uppercase"
          >
            Design &<br/>Marketing<br/>for Ambitious<br/>Companies.
          </motion.h1>
          <motion.div variants={fadeInUp} className="mt-12 flex flex-col sm:flex-row gap-4 items-start sm:items-center">
            <button 
              data-testid="btn-contact-hero"
              className="group flex items-center gap-3 bg-foreground text-background px-8 py-4 text-sm font-mono uppercase tracking-wide hover:bg-foreground/90 transition-all"
            >
              Let's Talk 
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </button>
          </motion.div>
        </motion.div>
        
        <motion.div 
          className="lg:col-span-4 relative aspect-[4/5] lg:aspect-auto mt-12 lg:mt-0"
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
        >
          <img 
            src="/hero.png" 
            alt="Abstract minimalist geometric hero" 
            className="w-full h-full object-cover grayscale contrast-125"
          />
        </motion.div>
      </div>
    </section>
  );
}

function Marquee() {
  return (
    <div className="border-y border-border py-6 overflow-hidden bg-foreground text-background flex whitespace-nowrap">
      <motion.div 
        className="flex gap-16 items-center px-8 text-xl font-mono uppercase tracking-widest shrink-0"
        animate={{ x: [0, -1035] }}
        transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
      >
        <span>Move Faster</span>
        <span>•</span>
        <span>Achieve More</span>
        <span>•</span>
        <span>Design Systems</span>
        <span>•</span>
        <span>Growth Strategy</span>
        <span>•</span>
        <span>Move Faster</span>
        <span>•</span>
        <span>Achieve More</span>
        <span>•</span>
        <span>Design Systems</span>
        <span>•</span>
        <span>Growth Strategy</span>
        <span>•</span>
      </motion.div>
    </div>
  );
}

function Process() {
  const services = [
    { num: "01", title: "Web Strategy", desc: "We establish your unique strategy to stand out and accelerate your reach." },
    { num: "02", title: "Design & UX", desc: "Translating strategy into visual decisions focused on achieving key KPIs." },
    { num: "03", title: "Development", desc: "Modular web structures built for scale, performance, and security." },
    { num: "04", title: "Growth Marketing", desc: "Data-driven process to grow your business and acquire new customers." }
  ];

  return (
    <section id="services" className="py-32 px-6 md:px-12 max-w-[1440px] mx-auto">
      <motion.div 
        className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-32"
        variants={staggerContainer}
        initial="initial"
        whileInView="whileInView"
      >
        <div>
          <motion.h2 variants={fadeInUp} className="text-4xl md:text-6xl font-bold tracking-tight mb-8">
            Growth strategy and execution. We deliver ROI.
          </motion.h2>
          <motion.p variants={fadeInUp} className="text-xl text-muted-foreground mb-12 max-w-md leading-relaxed">
            A balance between performance and aesthetics. Our mission is to help you meet your business goals.
          </motion.p>
        </div>
        
        <div className="flex flex-col">
          {services.map((s, i) => (
            <motion.div 
              key={i} 
              variants={fadeInUp}
              className="border-b border-border py-8 group hover:bg-muted/50 transition-colors -mx-6 px-6 cursor-pointer"
              data-testid={`service-item-${i}`}
            >
              <div className="flex gap-8 items-start">
                <span className="font-mono text-sm text-muted-foreground pt-2">{s.num}</span>
                <div>
                  <h3 className="text-2xl font-bold tracking-tight mb-3 flex items-center justify-between">
                    {s.title}
                    <ArrowUpRight className="w-5 h-5 opacity-0 -translate-y-2 group-hover:opacity-100 group-hover:translate-y-0 transition-all text-muted-foreground" />
                  </h3>
                  <p className="text-muted-foreground leading-relaxed">{s.desc}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
}

function SelectedWork() {
  const projects = [
    { title: "Typographic Engine", category: "Web Design", img: "/project-1.png" },
    { title: "Sleek Interfaces", category: "SaaS Application", img: "/project-2.png" },
    { title: "Structural Forms", category: "Brand Identity", img: "/project-3.png" }
  ];

  return (
    <section id="work" className="bg-foreground text-background py-32">
      <div className="px-6 md:px-12 max-w-[1440px] mx-auto">
        <motion.div 
          className="flex justify-between items-end mb-16"
          variants={staggerContainer}
          initial="initial"
          whileInView="whileInView"
        >
          <motion.h2 variants={fadeInUp} className="text-5xl md:text-7xl font-bold tracking-tighter uppercase">
            Selected Work
          </motion.h2>
          <motion.a 
            variants={fadeInUp}
            href="#" 
            className="hidden md:flex items-center gap-2 font-mono text-sm uppercase tracking-wide hover:opacity-70 transition-opacity"
          >
            View all projects <ArrowRight className="w-4 h-4" />
          </motion.a>
        </motion.div>

        <motion.div 
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          variants={staggerContainer}
          initial="initial"
          whileInView="whileInView"
        >
          {projects.map((p, i) => (
            <motion.div key={i} variants={fadeInUp} className="group cursor-pointer">
              <div className="aspect-[4/3] overflow-hidden bg-muted/20 mb-6 relative">
                <img 
                  src={p.img} 
                  alt={p.title} 
                  className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-black/10 group-hover:bg-transparent transition-colors" />
              </div>
              <div className="flex justify-between items-center">
                <div>
                  <h3 className="text-xl font-bold tracking-tight mb-1">{p.title}</h3>
                  <p className="font-mono text-xs text-muted-foreground uppercase tracking-widest">{p.category}</p>
                </div>
                <ArrowUpRight className="w-5 h-5 opacity-0 -translate-x-2 translate-y-2 group-hover:opacity-100 group-hover:translate-x-0 group-hover:translate-y-0 transition-all" />
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}

function Manifesto() {
  return (
    <section className="py-32 px-6 md:px-12 max-w-[1440px] mx-auto border-b border-border">
      <motion.div 
        className="max-w-4xl"
        initial="initial"
        whileInView="whileInView"
        variants={staggerContainer}
      >
        <motion.div variants={fadeInUp} className="font-mono text-sm text-muted-foreground uppercase tracking-widest mb-8">
          The Manifesto
        </motion.div>
        <motion.h2 
          variants={fadeInUp}
          className="text-3xl md:text-5xl lg:text-6xl font-bold tracking-tighter leading-[1.1] text-balance"
        >
          WE BELIEVE IN REDUCING NOISE TO AMPLIFY SIGNAL. GREAT DESIGN IS NOT ABOUT ADDING DECORATION; IT'S ABOUT SUBTRACTING UNTIL ONLY THE ESSENTIAL REMAINS.
        </motion.h2>
      </motion.div>
    </section>
  );
}

function Stats() {
  const stats = [
    { label: "Projects Completed", value: "300+" },
    { label: "Global Partners", value: "45" },
    { label: "Awards Won", value: "12" },
    { label: "Years Experience", value: "10" }
  ];

  return (
    <section className="py-20 px-6 md:px-12 max-w-[1440px] mx-auto">
      <motion.div 
        className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-4"
        variants={staggerContainer}
        initial="initial"
        whileInView="whileInView"
      >
        {stats.map((s, i) => (
          <motion.div key={i} variants={fadeInUp} className="flex flex-col justify-between border-l border-border pl-6 h-32">
            <span className="font-mono text-sm text-muted-foreground uppercase tracking-wider">{s.label}</span>
            <span className="text-5xl md:text-6xl font-bold tracking-tighter">{s.value}</span>
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
}

function CTA() {
  return (
    <section className="py-32 px-6 md:px-12 max-w-[1440px] mx-auto text-center flex flex-col items-center">
      <motion.div
        initial="initial"
        whileInView="whileInView"
        variants={staggerContainer}
      >
        <motion.h2 variants={fadeInUp} className="text-5xl md:text-8xl font-bold tracking-tighter uppercase mb-12">
          Let's Grow<br/>Together
        </motion.h2>
        <motion.button 
          variants={fadeInUp}
          data-testid="btn-contact-footer"
          className="bg-foreground text-background px-10 py-5 text-lg font-mono uppercase tracking-widest hover:bg-foreground/90 transition-colors"
        >
          Book a Call
        </motion.button>
      </motion.div>
    </section>
  );
}

function Footer() {
  return (
    <footer className="bg-foreground text-background pt-20 pb-8 px-6 md:px-12">
      <div className="max-w-[1440px] mx-auto grid grid-cols-1 md:grid-cols-4 gap-12 mb-20">
        <div className="md:col-span-2">
          <h3 className="text-2xl font-bold tracking-tight mb-6">Group 107</h3>
          <p className="text-muted-foreground/60 max-w-sm">
            Digital growth studio. Design + Marketing to help ambitious companies grow faster.
          </p>
        </div>
        <div>
          <h4 className="font-mono text-xs text-muted-foreground/60 uppercase tracking-widest mb-6">Social</h4>
          <ul className="space-y-3 font-mono text-sm">
            <li><a href="#" className="hover:text-muted-foreground transition-colors">Twitter</a></li>
            <li><a href="#" className="hover:text-muted-foreground transition-colors">LinkedIn</a></li>
            <li><a href="#" className="hover:text-muted-foreground transition-colors">Instagram</a></li>
          </ul>
        </div>
        <div>
          <h4 className="font-mono text-xs text-muted-foreground/60 uppercase tracking-widest mb-6">Offices</h4>
          <ul className="space-y-3 font-mono text-sm">
            <li>New York</li>
            <li>London</li>
            <li>Madrid</li>
          </ul>
        </div>
      </div>
      <div className="max-w-[1440px] mx-auto border-t border-background/20 pt-8 flex flex-col md:flex-row justify-between items-center gap-4 font-mono text-xs text-muted-foreground/60">
        <p>© 2024 Group 107. All rights reserved.</p>
        <div className="flex gap-6">
          <a href="#" className="hover:text-background transition-colors">Privacy Policy</a>
          <a href="#" className="hover:text-background transition-colors">Terms of Service</a>
        </div>
      </div>
    </footer>
  );
}

function Home() {
  return (
    <div className="min-h-screen w-full bg-background text-foreground selection:bg-foreground selection:text-background">
      <NavBar />
      <main>
        <Hero />
        <Marquee />
        <Process />
        <Stats />
        <SelectedWork />
        <Manifesto />
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
      <Route component={NotFound} />
    </Switch>
  );
}

function App() {
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

export default App;
