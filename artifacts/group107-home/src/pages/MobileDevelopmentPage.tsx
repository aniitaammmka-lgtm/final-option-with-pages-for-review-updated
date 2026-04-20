import Nav from "@/components/blocks/Nav";
import Footer from "@/components/blocks/Footer";
import AnimateIn from "@/components/AnimateIn";
import { Icons } from "@/lib/icons";

const ArrowRight = Icons.ArrowRight;
const ArrowUpRight = Icons.ArrowUpRight;

const capabilities = [
  { num: "01", title: "iOS Application Development", desc: "Native iOS apps built for performance, usability, and App Store standards." },
  { num: "02", title: "Android Application Development", desc: "Android apps designed for reliability across devices and versions." },
  { num: "03", title: "Cross-Platform Development", desc: "Shared codebases delivering consistent experiences on both platforms." },
  { num: "04", title: "Business Application Development", desc: "Mobile apps built around real internal processes and operational needs." },
  { num: "05", title: "Enterprise Mobile Systems", desc: "Scalable, secure apps for enterprise workflows and integrations." },
  { num: "06", title: "UX-Driven Mobile Interfaces", desc: "Interfaces designed for how users actually interact with their phones." },
  { num: "07", title: "React-Based Front-End Development", desc: "Modern cross-platform development using React Native and related tooling." },
  { num: "08", title: "Scalable Mobile Product Delivery", desc: "Delivery frameworks built to evolve as your product grows." },
];

const platforms = [
  { label: "iOS (Native)", sub: "Swift / Objective-C" },
  { label: "Android (Native)", sub: "Kotlin / Java" },
  { label: "React Native", sub: "Cross-Platform" },
  { label: "React / Angular", sub: "Web App Layer" },
  { label: "API Integration", sub: "REST / GraphQL" },
];

const productTypes = [
  { title: "Business Mobile Applications", desc: "Internal tools, field apps, and operational systems that support team workflows." },
  { title: "Enterprise-Level Mobile Systems", desc: "Complex, integrated apps built for scale, security, and enterprise environments." },
  { title: "Custom Mobile Solutions", desc: "Tailored products built around your specific goals and user needs." },
  { title: "iOS & Android Applications", desc: "Native builds across both major platforms with platform-appropriate experiences." },
  { title: "Cross-Platform Applications", desc: "Shared codebase products delivering consistent quality on iOS and Android." },
];

const whyPoints = [
  { num: "01", point: "Development tailored to your specific business goals", desc: "We understand your objectives before writing a line of code." },
  { num: "02", point: "Strong balance of user experience and technical execution", desc: "Great mobile products need both — we don't sacrifice one for the other." },
  { num: "03", point: "Ability to support both focused apps and complex systems", desc: "Whether a single-function app or an enterprise platform, we adapt our approach." },
  { num: "04", point: "Access to a broader multidisciplinary team when needed", desc: "UX, DevOps, AI, and accessibility specialists available as required." },
  { num: "05", point: "Transparent collaboration and scalable delivery approach", desc: "Clear milestones, honest communication, and a process that scales." },
];

const processSteps = [
  { num: "01", title: "Understand Product Goals", desc: "User needs, business objectives, and existing constraints." },
  { num: "02", title: "Define Scope & Direction", desc: "Priorities, technical approach, and delivery framework." },
  { num: "03", title: "Align on UX & Features", desc: "Screen flows, interaction patterns, and feature prioritisation." },
  { num: "04", title: "Develop & Iterate", desc: "Structured delivery phases with continuous review cycles." },
  { num: "05", title: "Test & Refine", desc: "QA across devices, performance testing, and pre-launch readiness." },
  { num: "06", title: "Launch & Evolve", desc: "Deployment support and ongoing product improvements." },
];

const engagements = [
  {
    tag: "Model 01",
    title: "Project-Based Delivery",
    desc: "Defined scope, milestone-based execution. Best for clear requirements and fixed outcomes.",
  },
  {
    tag: "Model 02",
    title: "Dedicated Team",
    desc: "Ongoing product development and long-term support with embedded specialists.",
  },
  {
    tag: "Model 03",
    title: "Discovery First",
    desc: "Start by shaping scope and strategy before development begins. For teams still defining their product.",
  },
  {
    tag: "Model 04",
    title: "Hybrid Model",
    desc: "Strategic planning combined with hands-on execution support. Flexible and adaptive.",
  },
];

const projects = [
  "RoutePerfect", "IMTC", "Ahoy", "Evergent", "Priority", "Createlist",
];

const relatedLinks = [
  { label: "Web Development", url: "/web-development" },
  { label: "Software Development", url: "/software-development" },
  { label: "Product Discovery", url: "/development-services#discovery" },
  { label: "DevOps Solutions", url: "/services#devops" },
  { label: "AI Integrations", url: "/services#nextai" },
  { label: "Accessibility", url: "/services#accessibility" },
];

export default function MobileDevelopmentPage() {
  return (
    <div className="page">
      <Nav />
      <main>

        {/* ── Newspaper-Style Hero ──────────────── */}
        <section className="mb-hero">
          <div className="mb-hero__top">
            <div className="mb-hero__breadcrumb">Development Services / Mobile Development</div>
            <div className="mb-hero__rule" aria-hidden="true" />
          </div>
          <AnimateIn delay={0} direction="up">
            <h1 className="mb-hero__title">
              Mobile Development<br />for Products That<br />Need to Perform
            </h1>
          </AnimateIn>
          <div className="mb-hero__bottom">
            <AnimateIn delay={0.1} direction="up" className="mb-hero__sub-wrap">
              <p className="mb-hero__sub">
                Group 107 builds high-quality mobile solutions tailored to each client's goals — from focused business apps to complex enterprise systems. We support iOS, Android, and cross-platform development with a strong delivery mindset.
              </p>
            </AnimateIn>
            <AnimateIn delay={0.16} direction="up" className="mb-hero__actions">
              <a href="#cta" className="mb-hero__cta mb-hero__cta--primary">
                Let's Build Your Mobile Product <ArrowRight className="mb-hero__cta-icon" />
              </a>
              <a href="/#casestudies" className="mb-hero__cta mb-hero__cta--ghost">
                Talk to Our Team <ArrowUpRight className="mb-hero__cta-icon" />
              </a>
            </AnimateIn>
            <AnimateIn delay={0.2} direction="up" className="mb-hero__stats">
              {[
                { val: "120+", label: "Mobile Projects" },
                { val: "iOS + Android", label: "Platforms Covered" },
                { val: "12+", label: "Years Experience" },
                { val: "700+", label: "Global Clients" },
              ].map((s, i) => (
                <div key={i} className="mb-hero__stat">
                  <span className="mb-hero__stat-val">{s.val}</span>
                  <span className="mb-hero__stat-label">{s.label}</span>
                </div>
              ))}
            </AnimateIn>
          </div>
        </section>

        {/* ── Intro ────────────────────────────── */}
        <section className="mb-intro">
          <div className="mb-intro__inner">
            <AnimateIn delay={0} direction="up" className="mb-intro__head">
              <span className="mb-intro__tag">What We Do</span>
              <h2 className="mb-intro__title">Mobile Development Services</h2>
            </AnimateIn>
            <AnimateIn delay={0.1} direction="up" className="mb-intro__body">
              <p>
                Our mobile development services are designed around the specific needs of each project. Group 107 helps businesses launch and evolve mobile products that are user-friendly, reliable, and aligned with real operational or market goals.
              </p>
              <p>
                Whether the need is a customer-facing app, an internal business tool, or part of a wider digital ecosystem, we provide the strategy, design collaboration, and development support required to move from concept to delivery.
              </p>
            </AnimateIn>
          </div>
        </section>

        {/* ── Core Capabilities — 4×2 Grid ─────── */}
        <section className="mb-caps">
          <div className="mb-caps__inner">
            <AnimateIn delay={0} direction="up" className="mb-caps__head">
              <span className="mb-caps__tag">Capabilities</span>
              <h2 className="mb-caps__title">Core Mobile Development Capabilities</h2>
            </AnimateIn>
            <div className="mb-caps__grid">
              {capabilities.map((cap, i) => (
                <AnimateIn key={i} delay={0.06 * i} direction="up">
                  <div className="mb-caps__card">
                    <span className="mb-caps__card-num">{cap.num}</span>
                    <span className="mb-caps__card-title">{cap.title}</span>
                    <span className="mb-caps__card-desc">{cap.desc}</span>
                  </div>
                </AnimateIn>
              ))}
            </div>
          </div>
        </section>

        {/* ── Platforms Strip ───────────────────── */}
        <section className="mb-platform">
          <div className="mb-platform__inner">
            <AnimateIn delay={0} direction="up" className="mb-platform__head">
              <span className="mb-platform__tag">Technologies</span>
              <h2 className="mb-platform__title">Platforms & Technologies</h2>
              <p className="mb-platform__sub">
                Group 107 supports mobile projects across native and modern front-end environments, with hands-on experience across iOS, Android, and cross-platform toolchains.
              </p>
            </AnimateIn>
            <div className="mb-platform__strip">
              {platforms.map((p, i) => (
                <AnimateIn key={i} delay={0.07 * i} direction="up">
                  <div className="mb-platform__item">
                    <span className="mb-platform__item-label">{p.label}</span>
                    <span className="mb-platform__item-sub">{p.sub}</span>
                  </div>
                </AnimateIn>
              ))}
            </div>
          </div>
        </section>

        {/* ── Product Types ─────────────────────── */}
        <section className="mb-types">
          <div className="mb-types__inner">
            <AnimateIn delay={0} direction="left" className="mb-types__head">
              <span className="mb-types__tag">What We Build</span>
              <h2 className="mb-types__title">Types of Mobile Products We Build</h2>
            </AnimateIn>
            <div className="mb-types__list">
              {productTypes.map((pt, i) => (
                <AnimateIn key={i} delay={0.07 * i} direction="up">
                  <div className="mb-types__item">
                    <span className="mb-types__item-num">0{i + 1}</span>
                    <div className="mb-types__item-content">
                      <span className="mb-types__item-title">{pt.title}</span>
                      <span className="mb-types__item-desc">{pt.desc}</span>
                    </div>
                  </div>
                </AnimateIn>
              ))}
            </div>
          </div>
        </section>

        {/* ── Why Group 107 — Numbered List ─────── */}
        <section className="mb-why">
          <div className="mb-why__inner">
            <AnimateIn delay={0} direction="up" className="mb-why__head">
              <span className="mb-why__tag">Our Positioning</span>
              <h2 className="mb-why__title">Why Group 107 for Mobile Development</h2>
            </AnimateIn>
            <div className="mb-why__list">
              {whyPoints.map((wp, i) => (
                <AnimateIn key={i} delay={0.07 * i} direction="up">
                  <div className="mb-why__item">
                    <span className="mb-why__item-num">{wp.num}</span>
                    <div className="mb-why__item-content">
                      <span className="mb-why__item-point">{wp.point}</span>
                      <span className="mb-why__item-desc">{wp.desc}</span>
                    </div>
                  </div>
                </AnimateIn>
              ))}
            </div>
          </div>
        </section>

        {/* ── Process — Vertical Steps ──────────── */}
        <section className="mb-process">
          <div className="mb-process__inner">
            <AnimateIn delay={0} direction="left" className="mb-process__head">
              <span className="mb-process__tag">How We Work</span>
              <h2 className="mb-process__title">From Idea to Delivery</h2>
              <p className="mb-process__sub">
                A structured approach that reduces uncertainty and keeps the focus on shipping a product that works.
              </p>
            </AnimateIn>
            <div className="mb-process__steps">
              {processSteps.map((step, i) => (
                <AnimateIn key={i} delay={0.08 * i} direction="up">
                  <div className="mb-process__step">
                    <div className="mb-process__step-aside">
                      <span className="mb-process__step-num">{step.num}</span>
                      {i < processSteps.length - 1 && (
                        <span className="mb-process__step-line" aria-hidden="true" />
                      )}
                    </div>
                    <div className="mb-process__step-body">
                      <span className="mb-process__step-title">{step.title}</span>
                      <span className="mb-process__step-desc">{step.desc}</span>
                    </div>
                  </div>
                </AnimateIn>
              ))}
            </div>
          </div>
        </section>

        {/* ── Engagement Options — 4 Cards ─────── */}
        <section className="mb-engage">
          <div className="mb-engage__inner">
            <AnimateIn delay={0} direction="up" className="mb-engage__head">
              <span className="mb-engage__tag">Collaboration</span>
              <h2 className="mb-engage__title">Flexible Ways to Work With Us</h2>
            </AnimateIn>
            <div className="mb-engage__cards">
              {engagements.map((e, i) => (
                <AnimateIn key={i} delay={0.08 * i} direction="up">
                  <div className="mb-engage__card">
                    <span className="mb-engage__card-tag">{e.tag}</span>
                    <span className="mb-engage__card-title">{e.title}</span>
                    <span className="mb-engage__card-desc">{e.desc}</span>
                  </div>
                </AnimateIn>
              ))}
            </div>
          </div>
        </section>

        {/* ── Cross-Service Support ─────────────── */}
        <section className="mb-beyond">
          <div className="mb-beyond__inner">
            <AnimateIn delay={0} direction="up" className="mb-beyond__left">
              <span className="mb-beyond__tag">Full-Scope Support</span>
              <h2 className="mb-beyond__title">More Than Mobile Code</h2>
            </AnimateIn>
            <AnimateIn delay={0.1} direction="up" className="mb-beyond__body">
              <p>
                Because Group 107 operates as a broader tech partner, mobile projects can also be supported by adjacent expertise when needed — including product thinking, UI/UX collaboration, DevOps, AI integrations, accessibility-related support, and additional development resources.
              </p>
              <div className="mb-beyond__chips">
                {["Product Strategy", "UI/UX Design", "DevOps", "AI Integrations", "Accessibility", "Additional Dev Resources"].map((c, i) => (
                  <span key={i} className="mb-beyond__chip">{c}</span>
                ))}
              </div>
            </AnimateIn>
          </div>
        </section>

        {/* ── Selected Experience ───────────────── */}
        <section className="mb-work">
          <div className="mb-work__inner">
            <AnimateIn delay={0} direction="up" className="mb-work__head">
              <span className="mb-work__tag">Our Work</span>
              <h2 className="mb-work__title">Selected Experience</h2>
              <p className="mb-work__sub">
                Group 107 supports a wide range of digital and product initiatives across industries. Our broader portfolio includes product, platform, and development work for companies including:
              </p>
            </AnimateIn>
            <div className="mb-work__strip">
              {projects.map((name, i) => (
                <AnimateIn key={i} delay={0.06 * i} direction="up">
                  <div className="mb-work__item">
                    <span className="mb-work__item-num">0{i + 1}</span>
                    <span className="mb-work__item-name">{name}</span>
                  </div>
                </AnimateIn>
              ))}
            </div>
          </div>
        </section>

        {/* ── Final CTA ─────────────────────────── */}
        <section className="mb-cta" id="cta">
          <div className="mb-cta__inner">
            <AnimateIn delay={0} direction="up">
              <span className="mb-cta__tag">Get Started</span>
            </AnimateIn>
            <AnimateIn delay={0.08} direction="up">
              <h2 className="mb-cta__title">
                Need a Mobile Team That<br />Can Actually Deliver?
              </h2>
            </AnimateIn>
            <AnimateIn delay={0.14} direction="up">
              <p className="mb-cta__sub">
                Whether you're planning a new product, improving an existing app, or expanding internal mobile capabilities, Group 107 can help you move faster with the right technical and delivery support.
              </p>
            </AnimateIn>
            <AnimateIn delay={0.2} direction="up">
              <a href="mailto:info@group107.com" className="mb-cta__btn">
                Talk to Us About Your Mobile Project <ArrowRight className="mb-cta__btn-icon" />
              </a>
            </AnimateIn>
          </div>
        </section>

        {/* ── Related Services ──────────────────── */}
        <section className="ds-related">
          <div className="ds-related__inner">
            <div className="ds-related__head">
              <div className="ds-related__label">Explore More</div>
              <h2 className="ds-related__title">Other Services You May Need</h2>
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
