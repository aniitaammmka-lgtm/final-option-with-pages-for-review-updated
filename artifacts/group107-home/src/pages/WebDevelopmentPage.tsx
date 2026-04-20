import Nav from "@/components/blocks/Nav";
import Footer from "@/components/blocks/Footer";
import AnimateIn from "@/components/AnimateIn";
import { Icons } from "@/lib/icons";

const ArrowRight = Icons.ArrowRight;
const ArrowUpRight = Icons.ArrowUpRight;

const capabilities = [
  { icon: "Globe", num: "01", title: "Custom WordPress Development", desc: "Tailored WordPress solutions built around your brand, content needs, and business goals." },
  { icon: "Monitor", num: "02", title: "Frontend Development", desc: "Responsive, user-friendly interfaces built for performance across all devices and browsers." },
  { icon: "Database", num: "03", title: "Backend Development", desc: "Robust server-side systems, APIs, and data logic that power your digital product." },
  { icon: "Smartphone", num: "04", title: "Responsive Websites", desc: "Designs and builds that work seamlessly on any screen, prioritising usability." },
  { icon: "Target", num: "05", title: "Business-Oriented Solutions", desc: "Every decision shaped by your goals — not just technical requirements or design trends." },
  { icon: "Zap", num: "06", title: "Performance-Focused Delivery", desc: "Fast load times, clean code, and optimised delivery pipelines from day one." },
];

const businessValues = [
  { icon: "Users", title: "User-Friendly Experiences", desc: "Interfaces designed for the people who actually use them — clear, accessible, and effective." },
  { icon: "Zap", title: "High-Performance Delivery", desc: "Optimised code and infrastructure that keeps your web product fast and reliable." },
  { icon: "Layers", title: "Scalable Foundations", desc: "Architecture and systems built to grow alongside your business without friction." },
  { icon: "Target", title: "Alignment with Business Goals", desc: "Every decision shaped by your priorities — not by technical preferences or trends." },
];

const projectTypes = [
  "Corporate websites",
  "Marketing websites and landing pages",
  "Content-driven WordPress websites",
  "Customer-facing portals",
  "Business platforms and tailored systems",
  "Redesign and rebuild projects",
  "Ongoing website improvement and evolution",
];

const deliverySteps = [
  { icon: "Lightbulb", num: "01", title: "Understand Goals", desc: "We start with your business objectives, user needs, and existing constraints." },
  { icon: "Code2", num: "02", title: "Define Direction", desc: "Agree on the right structure, tech stack, and technical approach for your project." },
  { icon: "Monitor", num: "03", title: "Design & Build", desc: "Develop around user and business needs with iterative feedback loops." },
  { icon: "Shield", num: "04", title: "Test & Refine", desc: "QA, performance testing, and pre-launch refinement to ensure quality." },
  { icon: "Rocket", num: "05", title: "Launch & Evolve", desc: "Support future improvements and ongoing growth after delivery." },
];

const whyPoints = [
  { icon: "Layers", title: "Full-Service Technology Partner", desc: "Development is just one part of what we offer — access design, DevOps, AI, and more." },
  { icon: "Globe", title: "Strong WordPress & Dev Expertise", desc: "Deep experience with WordPress builds and broader frontend and backend development." },
  { icon: "Target", title: "Business-Focused Approach", desc: "We build around goals, users, and operations — not just requirements lists." },
  { icon: "Zap", title: "High-Performance Builds", desc: "Fast, reliable, and optimised web products delivered with quality standards." },
  { icon: "Users", title: "Flexible Collaboration Models", desc: "Project-based delivery, dedicated teams, or mixed models to match your need." },
  { icon: "BrainCircuit", title: "Cross-Functional Support", desc: "Design, DevOps, accessibility, and AI integration available within one partner." },
];

const cases = [
  { name: "Priority", industry: "Fintech", tag: "Web Platform", img: "/project-1.png" },
  { name: "RoutePerfect", industry: "Travel Tech", tag: "SaaS", img: "/project-2.png" },
  { name: "Nova", industry: "Enterprise", tag: "Corporate Site", img: "/project-3.png" },
  { name: "Ahoy", industry: "E-Commerce", tag: "Marketing Site", img: "/project-1.png" },
  { name: "Createlist", industry: "SaaS", tag: "Web App", img: "/project-2.png" },
  { name: "Accessible Docs", industry: "Accessibility", tag: "Platform", img: "/project-3.png" },
];

const relatedLinks = [
  { label: "Product Discovery", url: "/development-services#discovery", icon: "Lightbulb" },
  { label: "Mobile Development", url: "/development-services#mobile", icon: "Smartphone" },
  { label: "Software Development", url: "/development-services#software", icon: "Code2" },
  { label: "DevOps Solutions", url: "/services#devops", icon: "Server" },
  { label: "Accessibility", url: "/services#accessibility", icon: "Shield" },
  { label: "AI Integrations", url: "/services#nextai", icon: "BrainCircuit" },
];

export default function WebDevelopmentPage() {
  return (
    <div className="page">
      <Nav />
      <main>

        {/* ── Hero ─────────────────────────── */}
        <section className="ds-hero">
          <div className="ds-hero__bg-grid" aria-hidden="true" />
          <div className="ds-hero__orb ds-hero__orb--1" aria-hidden="true" />
          <div className="ds-hero__orb ds-hero__orb--2" aria-hidden="true" />
          <div className="ds-hero__floating-icons" aria-hidden="true">
            {["Globe", "Monitor", "Server", "Smartphone", "Zap", "Code2", "Database", "Layers"].map((ic, i) => {
              const Icon = Icons[ic];
              return Icon ? (
                <div key={i} className={`ds-hero__float-icon ds-hero__float-icon--${i + 1}`}>
                  <Icon strokeWidth={1} />
                </div>
              ) : null;
            })}
          </div>
          <div className="ds-hero__inner">
            <AnimateIn delay={0} direction="up">
              <div className="ds-hero__label">Services / Web Development</div>
            </AnimateIn>
            <AnimateIn delay={0.08} direction="up">
              <h1 className="ds-hero__title">
                Web Development That Moves Business Forward
              </h1>
            </AnimateIn>
            <AnimateIn delay={0.16} direction="up">
              <p className="ds-hero__sub">
                Group 107 builds custom websites, platforms, and web experiences designed around your goals — from tailored WordPress solutions to broader frontend and backend development. We focus on performance, usability, scalability, and long-term business value.
              </p>
            </AnimateIn>
            <AnimateIn delay={0.22} direction="up">
              <div className="ds-hero__actions">
                <a href="#cta" className="ds-hero__cta ds-hero__cta--primary">
                  Let's Talk About Your Project <ArrowRight className="ds-hero__cta-icon" />
                </a>
                <a href="/#casestudies" className="ds-hero__cta ds-hero__cta--secondary">
                  View Case Studies <ArrowUpRight className="ds-hero__cta-icon" />
                </a>
              </div>
            </AnimateIn>
            <AnimateIn delay={0.3} direction="up" className="ds-hero__stats">
              {[
                { val: "150+", label: "Web Projects" },
                { val: "100+", label: "WordPress Builds" },
                { val: "12+", label: "Tech Stacks" },
                { val: "700+", label: "Global Clients" },
              ].map((s, i) => (
                <div key={i} className="ds-hero__stat">
                  <span className="ds-hero__stat-val">{s.val}</span>
                  <span className="ds-hero__stat-label">{s.label}</span>
                </div>
              ))}
            </AnimateIn>
          </div>
        </section>

        {/* ── What We Deliver ───────────────── */}
        <section className="ds-intro">
          <div className="ds-intro__inner">
            <AnimateIn delay={0} direction="left" className="ds-intro__graphic">
              <div className="ds-intro__graphic-grid">
                {[
                  { icon: "Globe", label: "WordPress" },
                  { icon: "Monitor", label: "Frontend" },
                  { icon: "Database", label: "Backend" },
                  { icon: "Smartphone", label: "Responsive" },
                ].map((s, i) => {
                  const Icon = Icons[s.icon];
                  return (
                    <div key={i} className="ds-intro__graphic-tile">
                      {Icon && <Icon strokeWidth={1.5} className="ds-intro__graphic-tile-icon" />}
                      <span>{s.label}</span>
                    </div>
                  );
                })}
              </div>
            </AnimateIn>
            <AnimateIn delay={0.12} direction="up" className="ds-intro__text">
              <div className="ds-intro__label">What We Do</div>
              <h2 className="ds-intro__title">What We Deliver</h2>
              <p className="ds-intro__body">
                Group 107 provides web development services for companies that need more than a basic website. We create responsive, user-friendly, and high-performance digital products that support real business goals.
              </p>
              <p className="ds-intro__body">
                Whether that means a marketing website, a complex WordPress build, a customer-facing platform, or a tailored web system — we build solutions around real business priorities using modern technologies.
              </p>
              <div className="ds-intro__badges">
                {["WordPress Experts", "Performance-First", "Business-Oriented", "Scalable Builds"].map((b, i) => {
                  const Icon = Icons["CheckCircle2"];
                  return (
                    <div key={i} className="ds-intro__badge">
                      {Icon && <Icon strokeWidth={1.5} className="ds-intro__badge-icon" />}
                      {b}
                    </div>
                  );
                })}
              </div>
            </AnimateIn>
          </div>
        </section>

        {/* ── Core Capabilities ─────────────── */}
        <section className="ds-services">
          <div className="ds-services__inner">
            <div className="ds-services__head">
              <AnimateIn delay={0} direction="up">
                <div className="ds-services__label">Core Areas</div>
              </AnimateIn>
              <AnimateIn delay={0.06} direction="up">
                <h2 className="ds-services__title">Core Web Development Capabilities</h2>
              </AnimateIn>
            </div>
            <div className="ds-services__grid wd-caps-grid">
              {capabilities.map((c, i) => {
                const Icon = Icons[c.icon];
                return (
                  <AnimateIn key={i} delay={0.07 * i} direction="up">
                    <div className="ds-services__card">
                      <div className="ds-services__card-num">{c.num}</div>
                      <div className="ds-services__card-icon-wrap">
                        {Icon && <Icon strokeWidth={1.25} className="ds-services__card-icon" />}
                      </div>
                      <h3 className="ds-services__card-title">{c.title}</h3>
                      <p className="ds-services__card-desc">{c.desc}</p>
                    </div>
                  </AnimateIn>
                );
              })}
            </div>
          </div>
        </section>

        {/* ── WordPress Focus ───────────────── */}
        <section className="ds-service ds-service--muted">
          <div className="ds-service__inner">
            <AnimateIn delay={0} direction="left" className="ds-service__visual">
              <div className="ds-service__img-wrap">
                <img src="/project-1.png" alt="WordPress Development" className="ds-service__img" />
                <div className="ds-service__img-overlay" />
                <div className="ds-service__img-badge">
                  {(() => { const Icon = Icons["Globe"]; return Icon ? <Icon strokeWidth={1.5} className="ds-service__img-badge-icon" /> : null; })()}
                  <span>WordPress</span>
                </div>
              </div>
              <div className="ds-service__tech-badge">
                {(() => { const Icon = Icons["Code2"]; return Icon ? <Icon strokeWidth={1.5} className="ds-service__tech-icon" /> : null; })()}
                WordPress · Custom Themes · WooCommerce · Headless
              </div>
            </AnimateIn>
            <AnimateIn delay={0.12} direction="up" className="ds-service__content">
              <div className="ds-service__content-num">
                <span>WordPress Focus</span>
              </div>
              <h2 className="ds-service__title">Strong in WordPress, Flexible Beyond It</h2>
              <p className="ds-service__body">
                Group 107 specialises in customised WordPress solutions built around each client's needs. From branded marketing websites to content-driven business platforms, we develop WordPress solutions that are tailored, scalable, and easier to manage over time.
              </p>
              <p className="ds-service__body">
                When a project requires it, we also support broader frontend and backend development to match the product scope — without being limited to any single framework or approach.
              </p>
              <div className="ds-service__caps-label">Capabilities Include</div>
              <div className="ds-service__caps">
                {["Custom theme development", "WordPress plugin integration", "WooCommerce stores", "Headless WordPress setups", "Content migration & restructure"].map((f, i) => {
                  const Icon = Icons["CheckCircle2"];
                  return (
                    <div key={i} className="ds-service__cap">
                      <div className="ds-service__cap-icon">
                        {Icon && <Icon strokeWidth={1.5} />}
                      </div>
                      <span className="ds-service__cap-label">{f}</span>
                    </div>
                  );
                })}
              </div>
              <a href="#cta" className="ds-service__cta">
                Discuss Your WordPress Project <ArrowRight className="ds-service__cta-icon" />
              </a>
            </AnimateIn>
          </div>
        </section>

        {/* ── Business Value Block ──────────── */}
        <section className="wd-values">
          <div className="wd-values__inner">
            <div className="wd-values__head">
              <AnimateIn delay={0} direction="up">
                <div className="wd-values__label">Why It Matters</div>
              </AnimateIn>
              <AnimateIn delay={0.06} direction="up">
                <h2 className="wd-values__title">Built Around Business Goals</h2>
              </AnimateIn>
              <AnimateIn delay={0.1} direction="up">
                <p className="wd-values__sub">
                  Our web development work is designed to do more than launch a site. We help companies create web experiences that support brand credibility, improve usability, enable growth, and provide a better foundation for future evolution.
                </p>
              </AnimateIn>
            </div>
            <div className="wd-values__grid">
              {businessValues.map((v, i) => {
                const Icon = Icons[v.icon];
                return (
                  <AnimateIn key={i} delay={0.08 * i} direction="up">
                    <div className="wd-values__card">
                      <div className="wd-values__card-icon">
                        {Icon && <Icon strokeWidth={1.5} />}
                      </div>
                      <div className="wd-values__card-title">{v.title}</div>
                      <div className="wd-values__card-desc">{v.desc}</div>
                    </div>
                  </AnimateIn>
                );
              })}
            </div>
          </div>
        </section>

        {/* ── Types of Projects ─────────────── */}
        <section className="wd-projects">
          <div className="wd-projects__inner">
            <AnimateIn delay={0} direction="left" className="wd-projects__head">
              <div className="wd-projects__label">Project Types</div>
              <h2 className="wd-projects__title">Types of Web Projects We Support</h2>
              <p className="wd-projects__sub">
                From marketing websites to complex business platforms — we've worked across a wide range of web project types and scales.
              </p>
            </AnimateIn>
            <div className="wd-projects__list">
              {projectTypes.map((pt, i) => {
                const Icon = Icons["CheckCircle2"];
                return (
                  <AnimateIn key={i} delay={0.06 * i} direction="up">
                    <div className="wd-projects__item">
                      {Icon && <Icon strokeWidth={1.5} className="wd-projects__item-icon" />}
                      <span>{pt}</span>
                    </div>
                  </AnimateIn>
                );
              })}
            </div>
          </div>
        </section>

        {/* ── Delivery Approach ─────────────── */}
        <section className="ds-process">
          <div className="ds-process__grain" aria-hidden="true" />
          <div className="ds-process__inner">
            <div className="ds-process__head">
              <AnimateIn delay={0} direction="up">
                <div className="ds-process__label">Our Workflow</div>
              </AnimateIn>
              <AnimateIn delay={0.06} direction="up">
                <h2 className="ds-process__title">How We Approach Web Development</h2>
              </AnimateIn>
              <AnimateIn delay={0.1} direction="up">
                <p className="ds-process__sub">
                  A structured, business-first process that keeps delivery on track and aligned with your goals at every stage.
                </p>
              </AnimateIn>
            </div>
            <div className="ds-process__steps">
              {deliverySteps.map((step, i) => {
                const Icon = Icons[step.icon];
                return (
                  <AnimateIn key={i} delay={0.08 * i} direction="up">
                    <div className="ds-process__step">
                      <div className="ds-process__step-track">
                        <div className="ds-process__step-dot">
                          {Icon && <Icon strokeWidth={1.5} className="ds-process__step-dot-icon" />}
                        </div>
                        {i < deliverySteps.length - 1 && <div className="ds-process__step-line" />}
                      </div>
                      <div className="ds-process__step-body">
                        <div className="ds-process__step-num">{step.num}</div>
                        <div className="ds-process__step-title">{step.title}</div>
                        <div className="ds-process__step-desc">{step.desc}</div>
                      </div>
                    </div>
                  </AnimateIn>
                );
              })}
            </div>
          </div>
        </section>

        {/* ── Why Group 107 ─────────────────── */}
        <section className="ds-why">
          <div className="ds-why__pattern" aria-hidden="true" />
          <div className="ds-why__inner">
            <div className="ds-why__head">
              <AnimateIn delay={0} direction="up">
                <div className="ds-why__label">Our Positioning</div>
              </AnimateIn>
              <AnimateIn delay={0.06} direction="up">
                <h2 className="ds-why__title">Why Companies Work With Group 107</h2>
              </AnimateIn>
            </div>
            <div className="ds-why__grid">
              {whyPoints.map((pt, i) => {
                const Icon = Icons[pt.icon];
                return (
                  <AnimateIn key={i} delay={0.07 * i} direction="up">
                    <div className="ds-why__card">
                      <div className="ds-why__card-icon">
                        {Icon && <Icon strokeWidth={1.5} />}
                      </div>
                      <div className="ds-why__card-body">
                        <div className="ds-why__card-title">{pt.title}</div>
                        <div className="ds-why__card-desc">{pt.desc}</div>
                      </div>
                    </div>
                  </AnimateIn>
                );
              })}
            </div>
          </div>
        </section>

        {/* ── Case Studies ──────────────────── */}
        <section className="ds-cases">
          <div className="ds-cases__inner">
            <div className="ds-cases__head">
              <AnimateIn delay={0} direction="up">
                <div className="ds-cases__label">Our Work</div>
              </AnimateIn>
              <AnimateIn delay={0.06} direction="up">
                <h2 className="ds-cases__title">Selected Projects</h2>
              </AnimateIn>
              <AnimateIn delay={0.1} direction="up">
                <p className="ds-cases__sub">
                  We support a wide range of digital projects across websites, platforms, and business-focused web experiences for companies in different industries.
                </p>
              </AnimateIn>
            </div>
            <div className="ds-cases__grid">
              {cases.map((c, i) => (
                <AnimateIn key={i} delay={0.07 * i} direction="up">
                  <div className="ds-cases__card">
                    <div className="ds-cases__card-img-wrap">
                      <img src={c.img} alt={c.name} className="ds-cases__card-img" />
                      <div className="ds-cases__card-tag">{c.tag}</div>
                    </div>
                    <div className="ds-cases__card-body">
                      <div className="ds-cases__card-title">{c.name}</div>
                      <div className="ds-cases__card-industry">{c.industry}</div>
                    </div>
                  </div>
                </AnimateIn>
              ))}
            </div>
          </div>
        </section>

        {/* ── Final CTA ─────────────────────── */}
        <section className="ds-cta" id="cta">
          <div className="ds-cta__grain" aria-hidden="true" />
          <div className="ds-cta__inner">
            <AnimateIn delay={0} direction="up">
              <div className="ds-cta__label">Get Started</div>
            </AnimateIn>
            <AnimateIn delay={0.08} direction="up">
              <h2 className="ds-cta__title">
                Planning a New Website or Rebuilding an Existing One?
              </h2>
            </AnimateIn>
            <AnimateIn delay={0.14} direction="up">
              <p className="ds-cta__sub">
                Let's discuss what you're building, what needs to improve, and what kind of web solution makes the most sense for your goals.
              </p>
            </AnimateIn>
            <AnimateIn delay={0.2} direction="up">
              <a href="mailto:info@group107.com" className="ds-cta__btn">
                Talk to Group 107 <ArrowRight className="ds-cta__btn-icon" />
              </a>
            </AnimateIn>
          </div>
        </section>

        {/* ── Related Services ──────────────── */}
        <section className="ds-related">
          <div className="ds-related__inner">
            <div className="ds-related__head">
              <div className="ds-related__label">Explore More</div>
              <h2 className="ds-related__title">Need More Than Web Development?</h2>
            </div>
            <div className="ds-related__links">
              {relatedLinks.map((rl, i) => (
                <a key={i} href={rl.url} className="ds-related__link">
                  {rl.label} <ArrowRight className="ds-related__link-icon" />
                </a>
              ))}
            </div>
          </div>
        </section>

      </main>
      <Footer />
    </div>
  );
}
