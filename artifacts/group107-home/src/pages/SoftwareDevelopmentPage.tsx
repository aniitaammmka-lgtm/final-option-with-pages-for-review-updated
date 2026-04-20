import Nav from "@/components/blocks/Nav";
import Footer from "@/components/blocks/Footer";
import AnimateIn from "@/components/AnimateIn";
import { Icons } from "@/lib/icons";

const ArrowRight = Icons.ArrowRight;
const ArrowUpRight = Icons.ArrowUpRight;

const whatWeBuild = [
  { label: "Business Platforms & Internal Systems", tag: "Core" },
  { label: "Customer-Facing Web & Mobile Products", tag: "Product" },
  { label: "Enterprise-Grade Software Solutions", tag: "Enterprise" },
  { label: "Data-Driven & AI-Supported Systems", tag: "AI" },
  { label: "Integrations with Third-Party Tools & APIs", tag: "Integration" },
];

const devAreas = [
  { num: "01", title: "Web Development", desc: "Responsive platforms, portals, and web applications." },
  { num: "02", title: "Mobile Applications", desc: "iOS and Android apps built for real user workflows." },
  { num: "03", title: "Enterprise Systems", desc: "Internal tools, ERP-adjacent platforms, and business logic." },
  { num: "04", title: "Product & System Architecture", desc: "Technical direction, architecture design, and system design." },
  { num: "05", title: "AI & Automation Components", desc: "Intelligent automation, AI integrations, and smart workflows." },
  { num: "06", title: "Infrastructure & DevOps Support", desc: "Delivery pipelines, cloud setup, and ongoing operations." },
];

const approachSteps = [
  { num: "1", title: "Understand Business Logic", desc: "Business goals, workflows, and real constraints." },
  { num: "2", title: "Define Architecture", desc: "System design, key flows, and technical approach." },
  { num: "3", title: "Build in Iterations", desc: "Structured delivery with continuous validation." },
  { num: "4", title: "Validate with Real Usage", desc: "Testing against actual business scenarios." },
  { num: "5", title: "Improve & Scale", desc: "Continuous improvement after launch." },
];

const techStrengths = [
  "Frontend, backend, and full-stack development",
  "Modern frameworks and scalable architectures",
  "API-first and integration-ready systems",
  "Ability to extend or build teams as needed",
  "Experience across multiple industries and product types",
];

const engagementModels = [
  {
    tag: "Option A",
    title: "Project-Based Delivery",
    desc: "A defined scope, timeline, and outcome. Best for companies that know what they need and want structured delivery with clear deliverables.",
    fit: "Well-defined projects with fixed scope",
  },
  {
    tag: "Option B",
    title: "Dedicated Team Extension",
    desc: "Ongoing collaboration with embedded specialists. Best for companies building continuously or scaling a product over time.",
    fit: "Long-term product development",
  },
  {
    tag: "Option C",
    title: "Hybrid Collaboration",
    desc: "Planning and execution combined. Best for companies that need both strategic direction and hands-on development support.",
    fit: "Complex or evolving requirements",
  },
];

const projects = [
  { name: "IMTC", industry: "Fintech", tag: "Enterprise Platform" },
  { name: "RoutePerfect", industry: "Travel Tech", tag: "SaaS Product" },
  { name: "Nova", industry: "Enterprise", tag: "Internal System" },
  { name: "Ahoy", industry: "E-Commerce", tag: "Web App" },
  { name: "Evergent", industry: "Media", tag: "Billing Platform" },
  { name: "Accessible Docs", industry: "Accessibility", tag: "Web Platform" },
];

const relatedLinks = [
  { label: "Web Development", url: "/web-development" },
  { label: "Mobile Development", url: "/development-services#mobile" },
  { label: "Product Discovery", url: "/development-services#discovery" },
  { label: "DevOps Solutions", url: "/services#devops" },
  { label: "AI Integrations", url: "/services#nextai" },
  { label: "Accessibility", url: "/services#accessibility" },
];

export default function SoftwareDevelopmentPage() {
  return (
    <div className="page">
      <Nav />
      <main>

        {/* ── Dark Blueprint Hero ───────────────── */}
        <section className="sd-hero">
          <div className="sd-hero__bg" aria-hidden="true" />
          <div className="sd-hero__inner">
            <AnimateIn delay={0} direction="up">
              <div className="sd-hero__label">Development Services / Software Development</div>
            </AnimateIn>
            <AnimateIn delay={0.08} direction="up">
              <h1 className="sd-hero__title">
                Custom Software,<br />Built Around<br />Your Business
              </h1>
            </AnimateIn>
            <AnimateIn delay={0.16} direction="up">
              <p className="sd-hero__sub">
                Group 107 builds custom software solutions for companies that need reliable delivery, strong technical thinking, and the flexibility to scale. From web and mobile products to enterprise systems, we help turn ideas into usable, high-quality digital products.
              </p>
            </AnimateIn>
            <AnimateIn delay={0.22} direction="up">
              <div className="sd-hero__actions">
                <a href="#cta" className="sd-hero__cta sd-hero__cta--primary">
                  Start a Project <ArrowRight className="sd-hero__cta-icon" />
                </a>
                <a href="/#casestudies" className="sd-hero__cta sd-hero__cta--secondary">
                  Talk to Us <ArrowUpRight className="sd-hero__cta-icon" />
                </a>
              </div>
            </AnimateIn>
          </div>
          <div className="sd-hero__stats">
            <div className="sd-hero__stats-inner">
              {[
                { val: "200+", label: "Software Projects" },
                { val: "50+", label: "Enterprise Clients" },
                { val: "12+", label: "Years Delivering" },
                { val: "700+", label: "Global Clients" },
              ].map((s, i) => (
                <div key={i} className="sd-hero__stat">
                  <span className="sd-hero__stat-val">{s.val}</span>
                  <span className="sd-hero__stat-label">{s.label}</span>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── Pull-Quote Intro ──────────────────── */}
        <section className="sd-intro">
          <div className="sd-intro__inner">
            <AnimateIn delay={0} direction="left" className="sd-intro__pull">
              <span className="sd-intro__tag">Positioning</span>
              <blockquote className="sd-intro__quote">
                "Software That Fits How Your Business Works"
              </blockquote>
            </AnimateIn>
            <AnimateIn delay={0.12} direction="up" className="sd-intro__body">
              <p>
                We design and build software tailored to real business workflows — not generic systems. Our focus is on creating solutions that integrate smoothly into your operations, support growth, and remain adaptable as your needs evolve.
              </p>
              <p>
                This means we spend as much time understanding your business as we do writing code. The result is software that works the way your team works — not software your team has to adapt to.
              </p>
              <a href="#cta" className="sd-intro__link">
                Discuss your project <ArrowRight className="sd-intro__link-icon" />
              </a>
            </AnimateIn>
          </div>
        </section>

        {/* ── What We Build — Large Spec List ──── */}
        <section className="sd-spec">
          <div className="sd-spec__inner">
            <AnimateIn delay={0} direction="up" className="sd-spec__head">
              <span className="sd-spec__tag">Scope</span>
              <h2 className="sd-spec__title">What We Build</h2>
            </AnimateIn>
            <div className="sd-spec__list">
              {whatWeBuild.map((item, i) => (
                <AnimateIn key={i} delay={0.07 * i} direction="up">
                  <div className="sd-spec__item">
                    <span className="sd-spec__item-num">0{i + 1}</span>
                    <span className="sd-spec__item-label">{item.label}</span>
                    <span className="sd-spec__item-tag">{item.tag}</span>
                  </div>
                </AnimateIn>
              ))}
            </div>
          </div>
        </section>

        {/* ── Development Areas — 2×3 Boxes ────── */}
        <section className="sd-areas">
          <div className="sd-areas__inner">
            <AnimateIn delay={0} direction="up" className="sd-areas__head">
              <span className="sd-areas__tag">Capabilities</span>
              <h2 className="sd-areas__title">Development Areas</h2>
              <p className="sd-areas__sub">
                From frontend interfaces to enterprise systems, our technical expertise spans the full software lifecycle.
              </p>
            </AnimateIn>
            <div className="sd-areas__grid">
              {devAreas.map((area, i) => (
                <AnimateIn key={i} delay={0.07 * i} direction="up">
                  <div className="sd-areas__box">
                    <span className="sd-areas__box-num">{area.num}</span>
                    <span className="sd-areas__box-title">{area.title}</span>
                    <span className="sd-areas__box-desc">{area.desc}</span>
                  </div>
                </AnimateIn>
              ))}
            </div>
          </div>
        </section>

        {/* ── Enterprise & System Thinking ─────── */}
        <section className="sd-enterprise">
          <div className="sd-enterprise__inner">
            <AnimateIn delay={0} direction="up" className="sd-enterprise__statement">
              <span className="sd-enterprise__tag">System Thinking</span>
              <h2 className="sd-enterprise__title">Built for Real-World Complexity</h2>
            </AnimateIn>
            <AnimateIn delay={0.1} direction="up" className="sd-enterprise__body">
              <p>
                Our work goes beyond building features. We design systems that support real operational logic — from internal workflows and integrations to performance, scalability, and long-term maintainability.
              </p>
              <p>
                This approach is especially critical for enterprise-level solutions and complex products where technical decisions made early have significant long-term consequences.
              </p>
            </AnimateIn>
          </div>
        </section>

        {/* ── Approach — Horizontal Timeline ───── */}
        <section className="sd-approach">
          <div className="sd-approach__inner">
            <AnimateIn delay={0} direction="up" className="sd-approach__head">
              <span className="sd-approach__tag">Methodology</span>
              <h2 className="sd-approach__title">How We Approach Development</h2>
            </AnimateIn>
            <div className="sd-approach__timeline">
              {approachSteps.map((step, i) => (
                <AnimateIn key={i} delay={0.08 * i} direction="up">
                  <div className="sd-approach__step">
                    <div className="sd-approach__step-connector" aria-hidden="true">
                      <span className="sd-approach__step-num">{step.num}</span>
                      {i < approachSteps.length - 1 && (
                        <span className="sd-approach__step-line" aria-hidden="true" />
                      )}
                    </div>
                    <span className="sd-approach__step-title">{step.title}</span>
                    <span className="sd-approach__step-desc">{step.desc}</span>
                  </div>
                </AnimateIn>
              ))}
            </div>
          </div>
        </section>

        {/* ── Tech Depth — Dense Checklist ─────── */}
        <section className="sd-tech">
          <div className="sd-tech__inner">
            <AnimateIn delay={0} direction="left" className="sd-tech__left">
              <span className="sd-tech__tag">Technical Depth</span>
              <h2 className="sd-tech__title">Technical Depth, Flexible Delivery</h2>
            </AnimateIn>
            <div className="sd-tech__right">
              {techStrengths.map((pt, i) => (
                <AnimateIn key={i} delay={0.08 * i} direction="up">
                  <div className="sd-tech__item">
                    <span className="sd-tech__item-num">0{i + 1}</span>
                    <span className="sd-tech__item-text">{pt}</span>
                  </div>
                </AnimateIn>
              ))}
            </div>
          </div>
        </section>

        {/* ── Beyond Development ────────────────── */}
        <section className="sd-beyond">
          <div className="sd-beyond__inner">
            <AnimateIn delay={0} direction="up" className="sd-beyond__head">
              <span className="sd-beyond__tag">Full-Scope Support</span>
              <h2 className="sd-beyond__title">Beyond Development</h2>
            </AnimateIn>
            <AnimateIn delay={0.1} direction="up" className="sd-beyond__body">
              <p>
                Many projects require more than development alone. We support areas such as AI integrations, DevOps processes, infrastructure setup, and system optimisation — helping ensure your product works reliably in production.
              </p>
              <p>
                Where relevant, we also bring in accessibility specialists, UX designers, and data engineers from within our wider team — so your project has the right people at the right stages.
              </p>
              <div className="sd-beyond__tags">
                {["AI Integrations", "DevOps", "Infrastructure", "System Optimization", "Accessibility", "UX Design"].map((t, i) => (
                  <span key={i} className="sd-beyond__chip">{t}</span>
                ))}
              </div>
            </AnimateIn>
          </div>
        </section>

        {/* ── Engagement Models — 3 Cards ──────── */}
        <section className="sd-engage">
          <div className="sd-engage__inner">
            <AnimateIn delay={0} direction="up" className="sd-engage__head">
              <span className="sd-engage__tag">Collaboration</span>
              <h2 className="sd-engage__title">Ways to Work With Us</h2>
            </AnimateIn>
            <div className="sd-engage__cards">
              {engagementModels.map((m, i) => (
                <AnimateIn key={i} delay={0.1 * i} direction="up">
                  <div className="sd-engage__card">
                    <span className="sd-engage__card-tag">{m.tag}</span>
                    <span className="sd-engage__card-title">{m.title}</span>
                    <span className="sd-engage__card-desc">{m.desc}</span>
                    <div className="sd-engage__card-fit">
                      <span className="sd-engage__card-fit-label">Best fit:</span>
                      <span className="sd-engage__card-fit-val">{m.fit}</span>
                    </div>
                  </div>
                </AnimateIn>
              ))}
            </div>
          </div>
        </section>

        {/* ── Selected Work — Project Grid ─────── */}
        <section className="sd-work">
          <div className="sd-work__inner">
            <AnimateIn delay={0} direction="up" className="sd-work__head">
              <span className="sd-work__tag">Our Work</span>
              <h2 className="sd-work__title">Selected Projects</h2>
              <p className="sd-work__sub">
                Group 107 has delivered software solutions across industries including fintech, enterprise platforms, digital products, and accessibility-focused systems.
              </p>
            </AnimateIn>
            <div className="sd-work__grid">
              {projects.map((p, i) => (
                <AnimateIn key={i} delay={0.06 * i} direction="up">
                  <div className="sd-work__card">
                    <span className="sd-work__card-num">0{i + 1}</span>
                    <span className="sd-work__card-name">{p.name}</span>
                    <span className="sd-work__card-industry">{p.industry}</span>
                    <span className="sd-work__card-tag">{p.tag}</span>
                  </div>
                </AnimateIn>
              ))}
            </div>
          </div>
        </section>

        {/* ── CTA ───────────────────────────────── */}
        <section className="sd-cta" id="cta">
          <div className="sd-cta__inner">
            <AnimateIn delay={0} direction="up">
              <span className="sd-cta__tag">Let's Talk</span>
            </AnimateIn>
            <AnimateIn delay={0.08} direction="up">
              <h2 className="sd-cta__title">
                Let's Build the Right Software —<br />Not Just Any Software
              </h2>
            </AnimateIn>
            <AnimateIn delay={0.14} direction="up">
              <p className="sd-cta__sub">
                Whether you're starting from scratch or improving an existing system, we can help define, build, and scale your solution.
              </p>
            </AnimateIn>
            <AnimateIn delay={0.2} direction="up">
              <a href="mailto:info@group107.com" className="sd-cta__btn">
                Talk to Us <ArrowRight className="sd-cta__btn-icon" />
              </a>
            </AnimateIn>
          </div>
        </section>

        {/* ── Related Services ──────────────────── */}
        <section className="ds-related">
          <div className="ds-related__inner">
            <div className="ds-related__head">
              <div className="ds-related__label">Explore More</div>
              <h2 className="ds-related__title">Other Development Services</h2>
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
