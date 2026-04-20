import Nav from "@/components/blocks/Nav";
import Footer from "@/components/blocks/Footer";
import AnimateIn from "@/components/AnimateIn";
import { Icons } from "@/lib/icons";

const ArrowRight = Icons.ArrowRight;
const ArrowUpRight = Icons.ArrowUpRight;

const capabilities = [
  { num: "01", title: "Custom WordPress Development", desc: "Tailored themes, plugins, and architecture built around your brand and business logic." },
  { num: "02", title: "Frontend Development", desc: "Responsive, fast, and accessible interfaces across every device and browser." },
  { num: "03", title: "Backend Development", desc: "Robust APIs, server-side logic, and data systems that power your digital product." },
  { num: "04", title: "Responsive & User-Friendly Websites", desc: "Builds that prioritise usability and clarity on any screen size." },
  { num: "05", title: "Business-Oriented Web Solutions", desc: "Every decision shaped by your goals — not by tech trends or agency defaults." },
  { num: "06", title: "Performance-Focused Delivery", desc: "Fast load times, clean code, and optimised delivery pipelines from day one." },
];

const deliverySteps = [
  { num: "01", title: "Understand Goals", desc: "Business objectives, user needs, and existing constraints." },
  { num: "02", title: "Define Direction", desc: "Structure, tech stack, and technical approach for your project." },
  { num: "03", title: "Design & Build", desc: "Iterative development shaped by user and business priorities." },
  { num: "04", title: "Test & Refine", desc: "QA, performance testing, and pre-launch quality assurance." },
  { num: "05", title: "Launch & Evolve", desc: "Ongoing support, improvements, and growth after delivery." },
];

const whyPoints = [
  "Full-service technology partner",
  "Strong WordPress & development expertise",
  "Business-focused approach to every build",
  "High-performance, user-friendly delivery",
  "Flexible collaboration models",
  "Cross-functional support: design, DevOps, AI, accessibility",
];

const projectTypes = [
  { num: "01", label: "Corporate websites" },
  { num: "02", label: "Marketing websites and landing pages" },
  { num: "03", label: "Content-driven WordPress websites" },
  { num: "04", label: "Customer-facing portals" },
  { num: "05", label: "Business platforms and tailored systems" },
  { num: "06", label: "Redesign and rebuild projects" },
  { num: "07", label: "Ongoing website improvement and evolution" },
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
  { label: "Product Discovery", url: "/development-services#discovery" },
  { label: "Mobile Development", url: "/development-services#mobile" },
  { label: "Software Development", url: "/development-services#software" },
  { label: "DevOps Solutions", url: "/services#devops" },
  { label: "Accessibility", url: "/services#accessibility" },
  { label: "AI Integrations", url: "/services#nextai" },
];

export default function WebDevelopmentPage() {
  return (
    <div className="page">
      <Nav />
      <main>

        {/* ── Split Hero ───────────────────────── */}
        <section className="wd-hero">
          <div className="wd-hero__left">
            <AnimateIn delay={0} direction="up">
              <div className="wd-hero__label">Services / Web Development</div>
            </AnimateIn>
            <AnimateIn delay={0.08} direction="up">
              <h1 className="wd-hero__title">
                Web<br />Development<br />That Moves<br />Business<br />Forward
              </h1>
            </AnimateIn>
            <AnimateIn delay={0.18} direction="up">
              <p className="wd-hero__sub">
                Custom websites, platforms, and web experiences designed around your goals — from tailored WordPress solutions to broader frontend and backend development.
              </p>
            </AnimateIn>
            <AnimateIn delay={0.24} direction="up">
              <div className="wd-hero__actions">
                <a href="#cta" className="wd-hero__cta wd-hero__cta--primary">
                  Let's Talk About Your Project <ArrowRight className="wd-hero__cta-icon" />
                </a>
                <a href="/#casestudies" className="wd-hero__cta wd-hero__cta--secondary">
                  View Case Studies <ArrowUpRight className="wd-hero__cta-icon" />
                </a>
              </div>
            </AnimateIn>
          </div>
          <div className="wd-hero__right" aria-hidden="true">
            <img src="/project-1.png" alt="" className="wd-hero__right-img" />
            <div className="wd-hero__right-overlay" />
            <div className="wd-hero__right-stats">
              <div className="wd-hero__right-stat">
                <span className="wd-hero__right-stat-val">150+</span>
                <span className="wd-hero__right-stat-label">Web Projects</span>
              </div>
              <div className="wd-hero__right-stat">
                <span className="wd-hero__right-stat-val">100+</span>
                <span className="wd-hero__right-stat-label">WordPress Builds</span>
              </div>
              <div className="wd-hero__right-stat">
                <span className="wd-hero__right-stat-val">700+</span>
                <span className="wd-hero__right-stat-label">Global Clients</span>
              </div>
            </div>
          </div>
        </section>

        {/* ── Full-width Stats Band ─────────────── */}
        <div className="wd-band">
          <div className="wd-band__inner">
            {[
              { val: "150+", label: "Web Projects" },
              { val: "100+", label: "WordPress Builds" },
              { val: "12+", label: "Tech Stacks" },
              { val: "700+", label: "Global Clients" },
            ].map((s, i) => (
              <div key={i} className="wd-band__item">
                <span className="wd-band__val">{s.val}</span>
                <span className="wd-band__label">{s.label}</span>
              </div>
            ))}
          </div>
        </div>

        {/* ── What We Deliver ───────────────────── */}
        <section className="wd-scope">
          <div className="wd-scope__inner">
            <AnimateIn delay={0} direction="up" className="wd-scope__heading">
              <span className="wd-scope__tag">What We Do</span>
              <h2 className="wd-scope__title">What We Deliver</h2>
            </AnimateIn>
            <div className="wd-scope__body">
              <AnimateIn delay={0.1} direction="up" className="wd-scope__text">
                <p>
                  Group 107 provides web development services for companies that need more than a basic website. We create responsive, user-friendly, and high-performance digital products that support real business goals.
                </p>
                <p>
                  Whether that means a marketing website, a complex WordPress build, a customer-facing platform, or a tailored web system — we build solutions around real business priorities using modern technologies.
                </p>
              </AnimateIn>
              <AnimateIn delay={0.16} direction="up" className="wd-scope__chips">
                {["WordPress Experts", "Performance-First", "Business-Oriented", "Scalable Builds", "Custom Solutions"].map((c, i) => (
                  <span key={i} className="wd-scope__chip">{c}</span>
                ))}
              </AnimateIn>
            </div>
          </div>
        </section>

        {/* ── Capabilities Table ────────────────── */}
        <section className="wd-table">
          <div className="wd-table__inner">
            <AnimateIn delay={0} direction="up" className="wd-table__head">
              <span className="wd-table__tag">Core Areas</span>
              <h2 className="wd-table__title">Core Web Development Capabilities</h2>
            </AnimateIn>
            <div className="wd-table__rows">
              {capabilities.map((c, i) => (
                <AnimateIn key={i} delay={0.06 * i} direction="up">
                  <div className="wd-table__row">
                    <span className="wd-table__row-num">{c.num}</span>
                    <span className="wd-table__row-title">{c.title}</span>
                    <span className="wd-table__row-desc">{c.desc}</span>
                    <span className="wd-table__row-arrow">
                      <ArrowRight />
                    </span>
                  </div>
                </AnimateIn>
              ))}
            </div>
          </div>
        </section>

        {/* ── WordPress Deep Dive ───────────────── */}
        <section className="wd-wp">
          <div className="wd-wp__watermark" aria-hidden="true">WORDPRESS</div>
          <div className="wd-wp__inner">
            <AnimateIn delay={0} direction="left" className="wd-wp__left">
              <span className="wd-wp__tag">WordPress Focus</span>
              <h2 className="wd-wp__title">Strong in WordPress, Flexible Beyond It</h2>
            </AnimateIn>
            <AnimateIn delay={0.12} direction="up" className="wd-wp__right">
              <p className="wd-wp__body">
                Group 107 specialises in customised WordPress solutions built around each client's needs. From branded marketing websites to content-driven business platforms, we develop WordPress solutions that are tailored, scalable, and easier to manage over time.
              </p>
              <p className="wd-wp__body">
                When a project requires it, we also support broader frontend and backend development — without being limited to any single framework.
              </p>
              <div className="wd-wp__tags">
                {["Custom Themes", "Plugin Development", "WooCommerce", "Headless WordPress", "Content Migration"].map((t, i) => (
                  <span key={i} className="wd-wp__tag-pill">{t}</span>
                ))}
              </div>
              <a href="#cta" className="wd-wp__cta">
                Discuss Your WordPress Project <ArrowRight className="wd-wp__cta-icon" />
              </a>
            </AnimateIn>
          </div>
        </section>

        {/* ── Project Types — Editorial List ───── */}
        <section className="wd-types">
          <div className="wd-types__inner">
            <AnimateIn delay={0} direction="up" className="wd-types__head">
              <span className="wd-types__tag">Project Types</span>
              <h2 className="wd-types__title">Types of Web Projects We Support</h2>
            </AnimateIn>
            <div className="wd-types__list">
              {projectTypes.map((pt, i) => (
                <AnimateIn key={i} delay={0.05 * i} direction="up">
                  <div className="wd-types__item">
                    <span className="wd-types__item-num">{pt.num}</span>
                    <span className="wd-types__item-label">{pt.label}</span>
                    <span className="wd-types__item-line" aria-hidden="true" />
                  </div>
                </AnimateIn>
              ))}
            </div>
          </div>
        </section>

        {/* ── Business Goals ───────────────────── */}
        <section className="wd-goals">
          <div className="wd-goals__inner">
            <AnimateIn delay={0} direction="left" className="wd-goals__left">
              <span className="wd-goals__tag">Why It Matters</span>
              <h2 className="wd-goals__title">Built Around Business Goals</h2>
              <p className="wd-goals__sub">
                Our web development work is designed to do more than launch a site — we create web experiences that support brand credibility, usability, and long-term growth.
              </p>
            </AnimateIn>
            <div className="wd-goals__grid">
              {[
                { num: "01", title: "User-Friendly Experiences", desc: "Interfaces designed for the people who actually use them — clear, accessible, effective." },
                { num: "02", title: "High-Performance Delivery", desc: "Optimised code and infrastructure that keeps your product fast and reliable." },
                { num: "03", title: "Scalable Foundations", desc: "Architecture built to grow alongside your business without friction." },
                { num: "04", title: "Alignment with Business Goals", desc: "Every decision shaped by your priorities — not by technical preferences." },
              ].map((v, i) => (
                <AnimateIn key={i} delay={0.08 * i} direction="up">
                  <div className="wd-goals__card">
                    <span className="wd-goals__card-num">{v.num}</span>
                    <span className="wd-goals__card-title">{v.title}</span>
                    <span className="wd-goals__card-desc">{v.desc}</span>
                  </div>
                </AnimateIn>
              ))}
            </div>
          </div>
        </section>

        {/* ── Delivery Process — Giant Numbers ─── */}
        <section className="wd-flow">
          <div className="wd-flow__inner">
            <AnimateIn delay={0} direction="up" className="wd-flow__head">
              <span className="wd-flow__tag">Our Workflow</span>
              <h2 className="wd-flow__title">How We Approach Web Development</h2>
            </AnimateIn>
            <div className="wd-flow__steps">
              {deliverySteps.map((step, i) => (
                <AnimateIn key={i} delay={0.08 * i} direction="up">
                  <div className="wd-flow__step">
                    <span className="wd-flow__step-num">{step.num}</span>
                    <span className="wd-flow__step-title">{step.title}</span>
                    <span className="wd-flow__step-desc">{step.desc}</span>
                  </div>
                </AnimateIn>
              ))}
            </div>
          </div>
        </section>

        {/* ── Why Group 107 — Compact Statements ─ */}
        <section className="wd-why">
          <div className="wd-why__inner">
            <AnimateIn delay={0} direction="up" className="wd-why__head">
              <span className="wd-why__tag">Our Positioning</span>
              <h2 className="wd-why__title">Why Companies Work With Group 107</h2>
            </AnimateIn>
            <div className="wd-why__list">
              {whyPoints.map((pt, i) => (
                <AnimateIn key={i} delay={0.06 * i} direction="up">
                  <div className="wd-why__item">
                    <span className="wd-why__item-dot" aria-hidden="true" />
                    <span className="wd-why__item-text">{pt}</span>
                  </div>
                </AnimateIn>
              ))}
            </div>
          </div>
        </section>

        {/* ── Selected Work ─────────────────────── */}
        <section className="wd-work">
          <div className="wd-work__inner">
            <AnimateIn delay={0} direction="up" className="wd-work__head">
              <span className="wd-work__tag">Our Work</span>
              <h2 className="wd-work__title">Selected Projects</h2>
            </AnimateIn>
            <div className="wd-work__list">
              {cases.map((c, i) => (
                <AnimateIn key={i} delay={0.06 * i} direction="up">
                  <div className="wd-work__item">
                    <span className="wd-work__item-num">0{i + 1}</span>
                    <span className="wd-work__item-name">{c.name}</span>
                    <span className="wd-work__item-tag">{c.tag}</span>
                    <span className="wd-work__item-industry">{c.industry}</span>
                    <div className="wd-work__item-img-wrap">
                      <img src={c.img} alt={c.name} className="wd-work__item-img" />
                    </div>
                  </div>
                </AnimateIn>
              ))}
            </div>
          </div>
        </section>

        {/* ── Final CTA ─────────────────────────── */}
        <section className="wd-cta" id="cta">
          <div className="wd-cta__inner">
            <AnimateIn delay={0} direction="up">
              <span className="wd-cta__tag">Get Started</span>
            </AnimateIn>
            <AnimateIn delay={0.08} direction="up">
              <h2 className="wd-cta__title">
                Planning a New Website<br />or Rebuilding an Existing One?
              </h2>
            </AnimateIn>
            <AnimateIn delay={0.14} direction="up">
              <p className="wd-cta__sub">
                Let's discuss what you're building, what needs to improve, and what kind of web solution makes the most sense for your goals.
              </p>
            </AnimateIn>
            <AnimateIn delay={0.2} direction="up">
              <a href="mailto:info@group107.com" className="wd-cta__btn">
                Talk to Group 107 <ArrowRight className="wd-cta__btn-icon" />
              </a>
            </AnimateIn>
          </div>
        </section>

        {/* ── Related Services ──────────────────── */}
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
