import { useRef } from "react";
import { Switch, Route, Router as WouterRouter } from "wouter";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import NotFound from "@/pages/not-found";
import {
  motion,
  useScroll,
  useTransform,
  useSpring,
  useInView,
} from "framer-motion";
import { useEffect, useState } from "react";
import {
  ArrowRight,
  ArrowUpRight,
  Menu,
  Code2,
  Globe,
  Smartphone,
  Bot,
  Cloud,
  Accessibility,
  TrendingUp,
  Users,
  CheckCircle2,
  Clock,
  BarChart3,
  Layers,
  Scaling,
  Headphones,
} from "lucide-react";
import logoSrc from "@assets/NEW_1774966879525.png";

const queryClient = new QueryClient();

/* ─── ANIMATION VARIANTS ─── */
const fadeUp = {
  initial: { opacity: 0, y: 36 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: "-60px" },
  transition: { duration: 0.7, ease: [0.16, 1, 0.3, 1] },
};

const fadeLeft = {
  initial: { opacity: 0, x: -40 },
  whileInView: { opacity: 1, x: 0 },
  viewport: { once: true, margin: "-60px" },
  transition: { duration: 0.7, ease: [0.16, 1, 0.3, 1] },
};

const fadeRight = {
  initial: { opacity: 0, x: 40 },
  whileInView: { opacity: 1, x: 0 },
  viewport: { once: true, margin: "-60px" },
  transition: { duration: 0.7, ease: [0.16, 1, 0.3, 1] },
};

const stagger = {
  initial: {},
  whileInView: {},
  viewport: { once: true, margin: "-60px" },
  transition: { staggerChildren: 0.08 },
};

/* ─── ANIMATED COUNTER ─── */
function AnimatedNumber({ value, suffix = "" }: { value: number; suffix?: string }) {
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });
  const [display, setDisplay] = useState(0);

  useEffect(() => {
    if (!inView) return;
    let start = 0;
    const end = value;
    const duration = 1800;
    const step = (timestamp: number) => {
      if (!start) start = timestamp;
      const progress = Math.min((timestamp - start) / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 3);
      setDisplay(Math.floor(eased * end));
      if (progress < 1) requestAnimationFrame(step);
    };
    requestAnimationFrame(step);
  }, [inView, value]);

  return <span ref={ref}>{display.toLocaleString()}{suffix}</span>;
}

/* ─── NOISE TEXTURE OVERLAY ─── */
function Grain({ opacity = 0.035 }: { opacity?: number }) {
  return (
    <div
      className="pointer-events-none absolute inset-0 z-10"
      style={{
        backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 512 512' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.75' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E")`,
        backgroundRepeat: "repeat",
        backgroundSize: "200px 200px",
        opacity,
        mixBlendMode: "overlay",
      }}
    />
  );
}

/* ─── SECTION LABEL ─── */
function Label({ children, light = false }: { children: React.ReactNode; light?: boolean }) {
  return (
    <div className={`font-mono text-xs uppercase tracking-widest mb-4 ${light ? "text-background/40" : "text-muted-foreground"}`}>
      {children}
    </div>
  );
}

/* ─── NAV ─── */
function NavBar() {
  const { scrollY } = useScroll();
  const navBg = useTransform(scrollY, [0, 80], ["rgba(250,250,250,0)", "rgba(250,250,250,0.95)"]);
  const navBorder = useTransform(scrollY, [0, 80], ["rgba(0,0,0,0)", "rgba(0,0,0,0.08)"]);

  return (
    <motion.nav
      className="fixed top-0 left-0 right-0 z-50 backdrop-blur-md"
      style={{ backgroundColor: navBg, borderBottom: "1px solid", borderColor: navBorder }}
    >
      <div className="max-w-[1440px] mx-auto px-6 md:px-12 h-[72px] flex items-center justify-between">
        <a href="/" className="flex items-center gap-3">
          <img src={logoSrc} alt="Group 107" className="h-10 w-10 object-contain invert" />
          <span className="text-lg font-bold tracking-tight">Group 107</span>
        </a>
        <div className="hidden md:flex items-center gap-8 font-mono text-xs uppercase tracking-widest">
          <a href="#services" className="hover:opacity-50 transition-opacity">Services</a>
          <a href="#work" className="hover:opacity-50 transition-opacity">Work</a>
          <a href="#process" className="hover:opacity-50 transition-opacity">How It Works</a>
          <a href="#about" className="hover:opacity-50 transition-opacity">About</a>
          <a
            href="#cta"
            data-testid="btn-nav-contact"
            className="bg-foreground text-background px-5 py-2.5 text-xs font-mono uppercase tracking-widest hover:bg-foreground/85 transition-colors"
          >
            Get a Consultation
          </a>
        </div>
        <button className="md:hidden p-2" aria-label="Menu" data-testid="btn-mobile-menu">
          <Menu className="w-5 h-5" />
        </button>
      </div>
    </motion.nav>
  );
}

/* ─── 1. HERO with parallax ─── */
function Hero() {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start start", "end start"] });
  const imgY = useTransform(scrollYProgress, [0, 1], ["0%", "18%"]);
  const textY = useTransform(scrollYProgress, [0, 1], ["0%", "10%"]);

  return (
    <section ref={ref} className="relative pt-36 pb-24 md:pt-48 md:pb-32 px-6 md:px-12 max-w-[1440px] mx-auto overflow-hidden">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
        <motion.div
          className="lg:col-span-7 flex flex-col items-start"
          style={{ y: textY }}
          variants={stagger}
          initial="initial"
          animate="whileInView"
        >
          <motion.div
            variants={fadeUp}
            className="mb-6 inline-flex items-center gap-3 border border-foreground/25 px-4 py-1.5 font-mono text-xs uppercase tracking-widest text-muted-foreground"
          >
            <motion.span
              className="w-1.5 h-1.5 rounded-full bg-green-500"
              animate={{ scale: [1, 1.4, 1], opacity: [1, 0.6, 1] }}
              transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
            />
            Complete Tech Partner &mdash; 700+ Clients Globally
          </motion.div>

          <motion.h1
            variants={fadeUp}
            className="text-[11vw] leading-[0.88] md:text-[7vw] font-black tracking-tighter uppercase text-balance mb-8"
          >
            Build, Scale,<br />and Grow<br />Your Tech.
          </motion.h1>

          <motion.p
            variants={fadeUp}
            className="text-lg md:text-xl text-muted-foreground max-w-lg leading-relaxed mb-10"
          >
            From custom development and AI integration to dedicated teams and digital
            growth &mdash; Group 107 helps companies move faster, smarter, and at scale.
          </motion.p>

          <motion.div variants={fadeUp} className="flex flex-col sm:flex-row gap-4">
            <motion.a
              href="#cta"
              data-testid="btn-hero-consultation"
              className="group inline-flex items-center gap-3 bg-foreground text-background px-8 py-4 text-sm font-mono uppercase tracking-widest hover:bg-foreground/85 transition-all"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              Get a Consultation
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </motion.a>
            <motion.a
              href="#work"
              data-testid="btn-hero-work"
              className="group inline-flex items-center gap-3 border border-border px-8 py-4 text-sm font-mono uppercase tracking-widest hover:bg-muted/40 transition-all"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              View Our Work
              <ArrowUpRight className="w-4 h-4 group-hover:-translate-y-0.5 group-hover:translate-x-0.5 transition-transform" />
            </motion.a>
          </motion.div>
        </motion.div>

        <motion.div
          className="lg:col-span-5 relative aspect-[4/5] lg:aspect-[3/4]"
          style={{ y: imgY }}
          initial={{ opacity: 0, scale: 0.94 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1.1, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
        >
          <img
            src="/hero.png"
            alt="Group 107 — abstract architecture"
            className="w-full h-full object-cover"
          />
          <motion.div
            className="absolute bottom-6 left-6 right-6 bg-background/92 backdrop-blur-sm border border-border px-6 py-4 flex justify-between items-center"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.7, duration: 0.7 }}
          >
            <div>
              <div className="font-mono text-xs text-muted-foreground uppercase tracking-widest mb-1">Talent Pool</div>
              <div className="text-2xl font-black tracking-tighter">88,000+</div>
            </div>
            <div className="w-px h-10 bg-border" />
            <div>
              <div className="font-mono text-xs text-muted-foreground uppercase tracking-widest mb-1">Global Clients</div>
              <div className="text-2xl font-black tracking-tighter">700+</div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}

/* ─── MARQUEE ─── */
function Marquee() {
  const items = ["Custom Development","AI Integration","Dedicated Teams","DevOps & Cloud","Digital Growth","Mobile Apps","Accessibility","WordPress"];
  const repeated = [...items, ...items, ...items];
  return (
    <div className="relative border-y border-border py-5 overflow-hidden bg-foreground text-background">
      <Grain opacity={0.04} />
      <motion.div
        className="flex gap-12 items-center px-8 font-mono text-xs uppercase tracking-widest shrink-0 whitespace-nowrap"
        animate={{ x: [0, "-33.33%"] }}
        transition={{ duration: 26, repeat: Infinity, ease: "linear" }}
      >
        {repeated.map((item, i) => (
          <span key={i} className="flex items-center gap-12">
            {item}
            <span className="text-background/30">—</span>
          </span>
        ))}
      </motion.div>
    </div>
  );
}

/* ─── 2. POSITIONING ─── */
function Positioning() {
  const cols = [
    { tag: "01 / Build", title: "Custom Solutions", desc: "We design and build high-performance software tailored to your exact requirements — web, mobile, and enterprise-grade platforms." },
    { tag: "02 / Scale", title: "Teams & DevOps", desc: "Access our 88,000+ talent pool to extend your team instantly. We handle recruitment, onboarding, and infrastructure at any scale." },
    { tag: "03 / Grow", title: "AI & Marketing", desc: "Integrate intelligent automation and drive digital growth with data-led marketing strategies that deliver measurable ROI." },
  ];

  return (
    <section id="about" className="py-28 px-6 md:px-12 max-w-[1440px] mx-auto border-b border-border">
      <motion.div variants={stagger} initial="initial" whileInView="whileInView" className="mb-16">
        <motion.div variants={fadeUp}><Label>Our Positioning</Label></motion.div>
        <motion.h2 variants={fadeUp} className="text-4xl md:text-6xl font-black tracking-tighter leading-[1] uppercase text-balance max-w-3xl">
          Not Just Development.<br />Not Just Talent.<br />A Complete Tech Partner.
        </motion.h2>
      </motion.div>

      <motion.div
        className="grid grid-cols-1 md:grid-cols-3 gap-0 border border-border"
        variants={stagger}
        initial="initial"
        whileInView="whileInView"
      >
        {cols.map((c, i) => (
          <motion.div
            key={i}
            variants={fadeUp}
            className="p-8 md:p-10 border-b md:border-b-0 md:border-r border-border last:border-0 flex flex-col gap-6 group hover:bg-muted/25 transition-colors duration-300"
            data-testid={`positioning-col-${i}`}
            whileHover={{ y: -4 }}
            transition={{ duration: 0.3 }}
          >
            <span className="font-mono text-xs text-muted-foreground uppercase tracking-widest">{c.tag}</span>
            <h3 className="text-2xl font-bold tracking-tight">{c.title}</h3>
            <p className="text-muted-foreground leading-relaxed text-sm">{c.desc}</p>
            <motion.div animate={{ x: [0, 4, 0] }} transition={{ duration: 2, repeat: Infinity, ease: "easeInOut", delay: i * 0.3 }}>
              <ArrowUpRight className="w-5 h-5 text-muted-foreground mt-auto" />
            </motion.div>
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
}

/* ─── 3. SERVICES ─── */
const SERVICES = [
  { icon: Code2, title: "Custom Software Development", popular: true },
  { icon: Globe, title: "WordPress & Web Development", popular: false },
  { icon: Smartphone, title: "Mobile Apps", popular: true },
  { icon: Bot, title: "AI Integration", popular: true },
  { icon: Cloud, title: "DevOps & Cloud", popular: false },
  { icon: Accessibility, title: "Accessibility", popular: false },
  { icon: TrendingUp, title: "Digital Marketing", popular: false },
  { icon: Users, title: "Dedicated Teams", popular: true },
];

function Services() {
  return (
    <section id="services" className="relative py-28 px-6 md:px-12 overflow-hidden border-b border-border">
      {/* Dot grid texture */}
      <div
        className="pointer-events-none absolute inset-0"
        style={{
          backgroundImage: "radial-gradient(circle, rgba(0,0,0,0.06) 1px, transparent 1px)",
          backgroundSize: "28px 28px",
        }}
      />
      <div className="max-w-[1440px] mx-auto relative z-10">
        <motion.div variants={stagger} initial="initial" whileInView="whileInView">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16">
            <div>
              <motion.div variants={fadeUp}><Label>What We Do</Label></motion.div>
              <motion.h2 variants={fadeUp} className="text-4xl md:text-6xl font-black tracking-tighter uppercase leading-[1]">
                Our Services
              </motion.h2>
            </div>
            <motion.a variants={fadeUp} href="#cta" className="hidden md:inline-flex items-center gap-2 font-mono text-xs uppercase tracking-widest text-muted-foreground hover:text-foreground transition-colors">
              Start a project <ArrowRight className="w-4 h-4" />
            </motion.a>
          </div>

          <motion.div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-px bg-border" variants={stagger} initial="initial" whileInView="whileInView">
            {SERVICES.map((svc, i) => {
              const Icon = svc.icon;
              return (
                <motion.div
                  key={i}
                  variants={fadeUp}
                  className="group bg-background p-8 flex flex-col gap-6 cursor-pointer relative overflow-hidden"
                  data-testid={`service-card-${i}`}
                  whileHover={{ backgroundColor: "hsl(var(--muted) / 0.4)" }}
                  transition={{ duration: 0.2 }}
                >
                  {svc.popular && (
                    <span className="absolute top-4 right-4 font-mono text-[10px] uppercase tracking-widest bg-foreground text-background px-2.5 py-1">Popular</span>
                  )}
                  <motion.div whileHover={{ rotate: 8, scale: 1.1 }} transition={{ duration: 0.3 }}>
                    <Icon className="w-7 h-7 text-muted-foreground group-hover:text-foreground transition-colors" strokeWidth={1.5} />
                  </motion.div>
                  <h3 className="text-lg font-bold tracking-tight leading-snug">{svc.title}</h3>
                  <motion.div
                    className="flex items-center gap-1.5 mt-auto font-mono text-xs uppercase tracking-widest text-muted-foreground"
                    initial={{ opacity: 0, x: -8 }}
                    whileHover={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.2 }}
                  >
                    Learn more <ArrowRight className="w-3 h-3" />
                  </motion.div>
                </motion.div>
              );
            })}
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}

/* ─── 4. SOCIAL PROOF ─── */
const CLIENTS = ["IMTC", "FIBI", "TechNova", "Strategen", "PlatformX", "CloudFirst", "DataBridge", "NextScale"];
const STATS = [
  { raw: 700, suffix: "+", label: "Global Clients" },
  { raw: 88000, suffix: "+", label: "Talent Pool" },
  { raw: 12, suffix: "+", label: "Years Active" },
  { raw: 4, suffix: "", label: "Global Hubs" },
];

function SocialProof() {
  return (
    <section className="py-24 px-6 md:px-12 max-w-[1440px] mx-auto border-b border-border">
      <motion.div variants={stagger} initial="initial" whileInView="whileInView">
        <motion.div variants={fadeUp}><Label>Social Proof</Label></motion.div>
        <motion.h2 variants={fadeUp} className="text-3xl md:text-5xl font-black tracking-tighter mb-16 uppercase">
          Trusted by Global Companies
        </motion.h2>

        <motion.div className="grid grid-cols-4 md:grid-cols-8 gap-px bg-border mb-16" variants={stagger} initial="initial" whileInView="whileInView">
          {CLIENTS.map((name, i) => (
            <motion.div
              key={i}
              variants={fadeUp}
              className="bg-background px-4 py-8 flex items-center justify-center font-mono text-xs uppercase tracking-widest text-muted-foreground hover:text-foreground hover:bg-muted/20 transition-colors cursor-default"
              whileHover={{ scale: 1.05 }}
              data-testid={`client-logo-${i}`}
            >
              {name}
            </motion.div>
          ))}
        </motion.div>

        <motion.div className="grid grid-cols-2 md:grid-cols-4 gap-px bg-border" variants={stagger} initial="initial" whileInView="whileInView">
          {STATS.map((s, i) => (
            <motion.div key={i} variants={fadeUp} className="bg-background py-10 px-8 flex flex-col gap-2" data-testid={`stat-${i}`}>
              <span className="text-5xl md:text-6xl font-black tracking-tighter">
                <AnimatedNumber value={s.raw} suffix={s.suffix} />
              </span>
              <span className="font-mono text-xs text-muted-foreground uppercase tracking-widest">{s.label}</span>
            </motion.div>
          ))}
        </motion.div>

        <motion.blockquote variants={fadeLeft} className="mt-16 border-l-2 border-foreground pl-8 max-w-2xl">
          <p className="text-xl md:text-2xl font-medium leading-relaxed tracking-tight text-balance">
            "Group 107 became an extension of our team overnight. The quality of delivery and speed of execution was unlike anything we'd experienced."
          </p>
          <footer className="mt-6 font-mono text-xs text-muted-foreground uppercase tracking-widest">
            — CTO, IMTC Financial Platform
          </footer>
        </motion.blockquote>
      </motion.div>
    </section>
  );
}

/* ─── 5. KEY ADVANTAGES ─── */
const ADVANTAGES = [
  { icon: CheckCircle2, title: "Transparent Processes", desc: "Full visibility into timelines, budgets, and delivery milestones at every stage." },
  { icon: Clock, title: "Fast Delivery Cycles", desc: "Sprint-based delivery with weekly demos — no black boxes, no surprises." },
  { icon: Users, title: "High Team Retention", desc: "Our talent averages 3+ years per engagement, ensuring institutional knowledge stays." },
  { icon: Layers, title: "End-to-End Ownership", desc: "From strategy through deployment — we own the outcome, not just the task." },
  { icon: Scaling, title: "Flexible Scaling", desc: "Add or remove team members in days, not months, as your needs evolve." },
  { icon: Headphones, title: "Dedicated Account Mgmt", desc: "A single point of contact — proactive, responsive, invested in your success." },
];

function Advantages() {
  return (
    <section className="relative py-28 overflow-hidden border-b border-border bg-foreground text-background">
      <Grain opacity={0.045} />
      {/* Diagonal stripe texture */}
      <div
        className="pointer-events-none absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage: "repeating-linear-gradient(45deg, #fff 0, #fff 1px, transparent 0, transparent 50%)",
          backgroundSize: "16px 16px",
        }}
      />
      <div className="max-w-[1440px] mx-auto px-6 md:px-12 relative z-10">
        <motion.div variants={stagger} initial="initial" whileInView="whileInView">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16">
            <div>
              <motion.div variants={fadeUp}><Label light>Why Group 107</Label></motion.div>
              <motion.h2 variants={fadeUp} className="text-4xl md:text-6xl font-black tracking-tighter uppercase leading-[1] max-w-xl text-background">
                Why Companies<br />Choose Us
              </motion.h2>
            </div>
          </div>

          <motion.div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-px bg-background/20" variants={stagger} initial="initial" whileInView="whileInView">
            {ADVANTAGES.map((adv, i) => {
              const Icon = adv.icon;
              return (
                <motion.div
                  key={i}
                  variants={fadeUp}
                  className="bg-foreground p-8 flex flex-col gap-4 group hover:bg-background/5 transition-colors duration-300"
                  data-testid={`advantage-${i}`}
                  whileHover={{ y: -3 }}
                  transition={{ duration: 0.3 }}
                >
                  <motion.div whileHover={{ scale: 1.15, rotate: -6 }} transition={{ duration: 0.3 }}>
                    <Icon className="w-6 h-6 text-background/50 group-hover:text-background transition-colors" strokeWidth={1.5} />
                  </motion.div>
                  <h3 className="text-lg font-bold tracking-tight text-background">{adv.title}</h3>
                  <p className="text-background/60 text-sm leading-relaxed">{adv.desc}</p>
                </motion.div>
              );
            })}
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}

/* ─── 6. PROCESS ─── */
const STEPS = [
  { num: "01", title: "Define Needs", desc: "Discovery call to understand your goals, constraints, and success criteria." },
  { num: "02", title: "Design Solution", desc: "Architecture, team structure, and delivery plan scoped and documented." },
  { num: "03", title: "Approve & Align", desc: "You review and sign off before any work begins. No hidden scope." },
  { num: "04", title: "Build & Onboard", desc: "Development kicks off with your dedicated team, integrated into your workflow." },
  { num: "05", title: "Scale", desc: "Iterate, grow, and expand based on results and evolving business needs." },
];

function Process() {
  return (
    <section id="process" className="py-28 px-6 md:px-12 max-w-[1440px] mx-auto border-b border-border">
      <motion.div variants={stagger} initial="initial" whileInView="whileInView">
        <motion.div variants={fadeUp}><Label>How It Works</Label></motion.div>
        <motion.h2 variants={fadeUp} className="text-4xl md:text-6xl font-black tracking-tighter uppercase leading-[1] mb-20">
          Simple.<br />Predictable.<br />Proven.
        </motion.h2>

        <motion.div className="flex flex-col" variants={stagger} initial="initial" whileInView="whileInView">
          {STEPS.map((step, i) => (
            <motion.div
              key={i}
              variants={fadeUp}
              className="group border-b border-border py-8 grid grid-cols-12 gap-6 md:gap-12 items-center cursor-default -mx-6 px-6"
              data-testid={`process-step-${i}`}
              whileHover={{ backgroundColor: "hsl(var(--muted) / 0.25)", paddingLeft: "2rem", paddingRight: "2rem" }}
              transition={{ duration: 0.25 }}
            >
              <span className="col-span-2 md:col-span-1 font-mono text-xs text-muted-foreground uppercase tracking-widest">{step.num}</span>
              <h3 className="col-span-10 md:col-span-3 text-2xl font-bold tracking-tight">{step.title}</h3>
              <p className="col-span-12 md:col-span-7 text-muted-foreground text-sm leading-relaxed md:pl-4">{step.desc}</p>
              <motion.div
                className="hidden md:flex col-span-1 justify-self-end"
                initial={{ opacity: 0, x: -8 }}
                whileHover={{ opacity: 1, x: 0 }}
              >
                <ArrowUpRight className="w-5 h-5 text-muted-foreground opacity-0 group-hover:opacity-100 transition-opacity" />
              </motion.div>
            </motion.div>
          ))}
        </motion.div>
      </motion.div>
    </section>
  );
}

/* ─── 7. CASE STUDIES with parallax image ─── */
const CASES = [
  { client: "IMTC", category: "Fintech", title: "Cloud Investment Platform", result: "Improved performance & scalability; cut infra costs 40%.", img: "/project-1.png" },
  { client: "TechNova", category: "SaaS", title: "Enterprise SaaS Dashboard", result: "3× faster onboarding, 98% uptime SLA post-launch.", img: "/project-2.png" },
  { client: "DataBridge", category: "Enterprise", title: "Unified Data Intelligence", result: "Real-time analytics pipeline processing 2M+ events/day.", img: "/project-3.png" },
];

function CaseCard({ c, i }: { c: typeof CASES[0]; i: number }) {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start end", "end start"] });
  const imgY = useTransform(scrollYProgress, [0, 1], ["-8%", "8%"]);

  return (
    <motion.div
      ref={ref}
      variants={fadeUp}
      className="group bg-foreground flex flex-col cursor-pointer"
      data-testid={`case-study-${i}`}
      whileHover={{ y: -6 }}
      transition={{ duration: 0.35 }}
    >
      <div className="aspect-[4/3] overflow-hidden relative bg-background/5">
        <motion.img
          src={c.img}
          alt={c.title}
          className="w-full h-full object-cover opacity-80 group-hover:opacity-100 transition-opacity duration-700"
          style={{ y: imgY, scale: 1.15 }}
        />
        <div className="absolute top-4 left-4 font-mono text-xs uppercase tracking-widest bg-background/20 backdrop-blur-sm px-3 py-1.5">
          {c.category}
        </div>
      </div>
      <div className="p-8 flex flex-col gap-4 flex-1">
        <div className="font-mono text-xs text-background/50 uppercase tracking-widest">{c.client}</div>
        <h3 className="text-xl font-bold tracking-tight leading-snug">{c.title}</h3>
        <p className="text-background/60 text-sm leading-relaxed">{c.result}</p>
        <motion.div
          className="flex items-center gap-2 mt-auto font-mono text-xs uppercase tracking-widest text-background/50 group-hover:text-background transition-colors"
          animate={{ x: [0, 4, 0] }}
          transition={{ duration: 2, repeat: Infinity, ease: "easeInOut", delay: i * 0.4 }}
        >
          View Case Study <ArrowRight className="w-3.5 h-3.5" />
        </motion.div>
      </div>
    </motion.div>
  );
}

function CaseStudies() {
  return (
    <section id="work" className="relative bg-foreground text-background py-28 overflow-hidden">
      <Grain opacity={0.04} />
      <div className="px-6 md:px-12 max-w-[1440px] mx-auto relative z-10">
        <motion.div variants={stagger} initial="initial" whileInView="whileInView">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-4">
            <div>
              <motion.div variants={fadeUp}><Label light>Case Studies</Label></motion.div>
              <motion.h2 variants={fadeUp} className="text-4xl md:text-6xl font-black tracking-tighter uppercase leading-[1]">
                Real Projects.<br />Real Results.
              </motion.h2>
            </div>
          </div>

          <motion.div variants={fadeUp} className="flex flex-wrap gap-3 mt-8 mb-16">
            {["All", "Fintech", "SaaS", "Enterprise"].map((f, i) => (
              <motion.button
                key={i}
                className={`font-mono text-xs uppercase tracking-widest px-4 py-2 border transition-colors ${i === 0 ? "bg-background text-foreground border-background" : "border-background/30 text-background/70 hover:border-background hover:text-background"}`}
                whileHover={{ scale: 1.04 }}
                whileTap={{ scale: 0.96 }}
                data-testid={`filter-${f.toLowerCase()}`}
              >
                {f}
              </motion.button>
            ))}
          </motion.div>

          <motion.div className="grid grid-cols-1 md:grid-cols-3 gap-px bg-background/20" variants={stagger} initial="initial" whileInView="whileInView">
            {CASES.map((c, i) => <CaseCard key={i} c={c} i={i} />)}
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}

/* ─── 8. AI & INNOVATION with scroll parallax ─── */
function AiSection() {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start end", "end start"] });
  const imgY = useTransform(scrollYProgress, [0, 1], ["-10%", "10%"]);
  const springY = useSpring(imgY, { stiffness: 80, damping: 20 });

  return (
    <section ref={ref} className="relative py-28 overflow-hidden border-b border-border">
      {/* Cross-hatch texture */}
      <div
        className="pointer-events-none absolute inset-0 opacity-[0.04]"
        style={{
          backgroundImage:
            "repeating-linear-gradient(0deg, #000 0, #000 1px, transparent 0, transparent 28px), repeating-linear-gradient(90deg, #000 0, #000 1px, transparent 0, transparent 28px)",
        }}
      />
      <div className="max-w-[1440px] mx-auto px-6 md:px-12 relative z-10">
        <motion.div
          className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-center"
          variants={stagger}
          initial="initial"
          whileInView="whileInView"
        >
          <div className="lg:col-span-6">
            <motion.div variants={fadeLeft}><Label>AI &amp; Innovation</Label></motion.div>
            <motion.h2 variants={fadeLeft} className="text-4xl md:text-5xl font-black tracking-tighter leading-[1.05] uppercase mb-8 text-balance">
              AI-Driven Solutions That Move Your Business Forward
            </motion.h2>
            <motion.p variants={fadeLeft} className="text-muted-foreground leading-relaxed mb-10 max-w-md">
              Intelligent automation, smarter decision-making, and AI-powered workflows that reduce manual effort and unlock new efficiency at every layer of your operation.
            </motion.p>
            <motion.div variants={stagger} className="flex flex-col gap-0 border border-border">
              {[
                { label: "Intelligent Automation", desc: "Eliminate repetitive tasks and accelerate throughput with AI-orchestrated pipelines." },
                { label: "Smarter Decisions", desc: "Real-time data models that surface insights and trigger actions without human latency." },
                { label: "Operational Efficiency", desc: "AI-first architecture designed to compound gains as your business scales." },
              ].map((item, i) => (
                <motion.div
                  key={i}
                  variants={fadeLeft}
                  className="border-b border-border last:border-b-0 px-6 py-5 flex gap-6 items-start group hover:bg-muted/20 transition-colors"
                  whileHover={{ x: 6 }}
                  transition={{ duration: 0.25 }}
                >
                  <span className="font-mono text-xs text-muted-foreground mt-1 shrink-0">0{i + 1}</span>
                  <div>
                    <div className="font-bold mb-1">{item.label}</div>
                    <div className="text-muted-foreground text-sm leading-relaxed">{item.desc}</div>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </div>

          <motion.div
            variants={fadeRight}
            className="lg:col-span-6 relative overflow-hidden bg-muted/20 border border-border"
            style={{ height: "520px" }}
          >
            <motion.img
              src="/project-2.png"
              alt="AI-driven system visualization"
              className="w-full h-full object-cover opacity-90"
              style={{ y: springY, scale: 1.2 }}
            />
            <div className="absolute inset-0 bg-gradient-to-tr from-background/50 to-transparent" />
            <motion.div
              className="absolute bottom-6 left-6 right-6 bg-background/92 backdrop-blur-sm border border-border px-6 py-4"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4, duration: 0.7 }}
            >
              <div className="flex items-center gap-3 mb-2">
                <BarChart3 className="w-4 h-4 text-muted-foreground" />
                <span className="font-mono text-xs uppercase tracking-widest text-muted-foreground">AI Efficiency Gain</span>
              </div>
              <div className="text-3xl font-black tracking-tighter">
                +<AnimatedNumber value={340} />% <span className="text-muted-foreground text-base font-normal">avg. throughput</span>
              </div>
            </motion.div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}

/* ─── 9. CTA ─── */
function CTA() {
  return (
    <section id="cta" className="relative bg-foreground text-background py-36 px-6 md:px-12 overflow-hidden">
      <Grain opacity={0.05} />
      {/* Radial glow */}
      <div className="pointer-events-none absolute inset-0 flex items-center justify-center">
        <div className="w-[600px] h-[400px] rounded-full bg-white/5 blur-[120px]" />
      </div>
      <div className="max-w-[1440px] mx-auto flex flex-col items-center text-center relative z-10">
        <motion.div variants={stagger} initial="initial" whileInView="whileInView">
          <motion.div variants={fadeUp}><Label light>Ready to move?</Label></motion.div>
          <motion.h2
            variants={fadeUp}
            className="text-5xl md:text-8xl font-black tracking-tighter uppercase leading-[0.9] mb-8 text-balance"
          >
            Let's Build Something<br />That Works&mdash;<br />and Scales.
          </motion.h2>
          <motion.p variants={fadeUp} className="text-background/60 text-lg max-w-lg mx-auto leading-relaxed mb-12">
            Tell us what you need. We'll help define and build it — from first sprint to full scale.
          </motion.p>
          <motion.div variants={fadeUp}>
            <motion.a
              href="mailto:hello@group107.com"
              data-testid="btn-cta-book"
              className="group inline-flex items-center gap-4 bg-background text-foreground px-12 py-5 text-sm font-mono uppercase tracking-widest hover:bg-background/90 transition-colors"
              whileHover={{ scale: 1.04 }}
              whileTap={{ scale: 0.97 }}
            >
              Book a Call
              <motion.span animate={{ x: [0, 5, 0] }} transition={{ duration: 1.6, repeat: Infinity, ease: "easeInOut" }}>
                <ArrowRight className="w-4 h-4" />
              </motion.span>
            </motion.a>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}

/* ─── 10. FOOTER ─── */
function Footer() {
  return (
    <footer className="bg-foreground text-background pt-20 pb-8 px-6 md:px-12">
      <div className="max-w-[1440px] mx-auto grid grid-cols-1 md:grid-cols-12 gap-12 mb-16">
        <div className="md:col-span-4 flex flex-col gap-4">
          <div className="flex items-center gap-3">
            <img src={logoSrc} alt="Group 107" className="h-10 w-10 object-contain brightness-0 invert" />
            <span className="text-xl font-bold tracking-tight">Group 107</span>
          </div>
          <p className="text-background/50 text-sm leading-relaxed max-w-xs">
            A complete tech partner for ambitious companies — from custom software and dedicated teams to AI integration and digital growth.
          </p>
        </div>

        <div className="md:col-span-2 md:col-start-6">
          <div className="font-mono text-xs text-background/40 uppercase tracking-widest mb-6">Services</div>
          <ul className="space-y-3 font-mono text-xs text-background/70">
            {["Custom Development","WordPress & Web","Mobile Apps","AI Integration","DevOps & Cloud","Digital Marketing"].map((s, i) => (
              <li key={i}><a href="#services" className="hover:text-background transition-colors">{s}</a></li>
            ))}
          </ul>
        </div>

        <div className="md:col-span-2">
          <div className="font-mono text-xs text-background/40 uppercase tracking-widest mb-6">Industries</div>
          <ul className="space-y-3 font-mono text-xs text-background/70">
            {["Fintech","SaaS & Enterprise","Healthcare","E-Commerce","Media"].map((s, i) => (
              <li key={i}><a href="#" className="hover:text-background transition-colors">{s}</a></li>
            ))}
          </ul>
        </div>

        <div className="md:col-span-2">
          <div className="font-mono text-xs text-background/40 uppercase tracking-widest mb-6">Global Hubs</div>
          <ul className="space-y-3 font-mono text-xs text-background/70">
            {["Israel","Ukraine","Poland","Argentina"].map((loc, i) => <li key={i}>{loc}</li>)}
          </ul>
          <div className="font-mono text-xs text-background/40 uppercase tracking-widest mb-4 mt-8">Social</div>
          <ul className="space-y-3 font-mono text-xs text-background/70">
            {["LinkedIn","Twitter / X","GitHub"].map((s, i) => (
              <li key={i}><a href="#" className="hover:text-background transition-colors">{s}</a></li>
            ))}
          </ul>
        </div>
      </div>

      <div className="max-w-[1440px] mx-auto border-t border-background/15 pt-8 flex flex-col md:flex-row justify-between items-center gap-4 font-mono text-xs text-background/40">
        <span>© {new Date().getFullYear()} Group 107. All rights reserved.</span>
        <div className="flex gap-6">
          <a href="#" className="hover:text-background/70 transition-colors">Privacy Policy</a>
          <a href="#" className="hover:text-background/70 transition-colors">Terms of Service</a>
          <a href="#" className="hover:text-background/70 transition-colors">Contact</a>
        </div>
      </div>
    </footer>
  );
}

/* ─── PAGE ─── */
function Home() {
  return (
    <div className="min-h-screen w-full bg-background text-foreground selection:bg-foreground selection:text-background">
      <NavBar />
      <main>
        <Hero />
        <Marquee />
        <Positioning />
        <Services />
        <SocialProof />
        <Advantages />
        <Process />
        <CaseStudies />
        <AiSection />
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
