import Nav from "@/components/blocks/Nav";
import Footer from "@/components/blocks/Footer";
import AnimateIn from "@/components/AnimateIn";
import { Icons } from "@/lib/icons";

const ArrowRight = Icons.ArrowRight;
const ArrowUpRight = Icons.ArrowUpRight;
const CheckCircle2 = Icons.CheckCircle2;

const services = [
  { icon: "Search", title: "SEO & Organic Growth", desc: "Technical SEO, content strategy, and authority building that drives compounding organic traffic." },
  { icon: "Target", title: "PPC & Paid Media", desc: "Performance-driven paid campaigns across Google, Bing, and display networks with measurable ROI." },
  { icon: "Radio", title: "Social & Native Ads", desc: "Audience-targeted social advertising on LinkedIn, Meta, and native placements for demand generation." },
  { icon: "Mail", title: "Email Marketing", desc: "Automated email sequences, drip campaigns, and lifecycle marketing that nurture and convert." },
  { icon: "Phone", title: "SDR & Outreach", desc: "Sales development rep services with scripted outreach, qualification, and pipeline handoff." },
  { icon: "Activity", title: "Growth Systems", desc: "End-to-end marketing infrastructure — analytics, automation, CRM setup, and reporting pipelines." },
];

const approach = [
  { label: "Data", sub: "Foundation", desc: "Every strategy starts with clean data — analytics audit, tracking setup, attribution modelling." },
  { label: "Strategy", sub: "Direction", desc: "We build channel strategies based on what moves the needle for your specific business model." },
  { label: "Execution", sub: "Performance", desc: "Rapid iteration, continuous A/B testing, and budget optimization across all active channels." },
];

const processSteps = [
  { num: "01", title: "Discovery & Audit", desc: "Full audit of your current marketing stack, channels, data, and competitive position." },
  { num: "02", title: "Strategy & Planning", desc: "Channel mix, budget allocation, messaging framework, and 90-day growth roadmap." },
  { num: "03", title: "Launch & Activate", desc: "Campaign setup, creative production, tracking implementation, and go-live." },
  { num: "04", title: "Optimize & Test", desc: "Ongoing A/B testing, bid management, audience refinement, and conversion optimization." },
  { num: "05", title: "Scale & Report", desc: "Performance reporting, budget scaling, and strategic expansion into new channels." },
];

const useCases = [
  { icon: "Globe", sector: "B2B Lead Generation", desc: "Drive qualified pipeline through targeted LinkedIn, SEO, and outbound SDR programs." },
  { icon: "ShoppingCart", sector: "E-Commerce Growth", desc: "Full-funnel paid and organic strategy for product discovery, retargeting, and LTV optimization." },
  { icon: "Building2", sector: "SaaS Acquisition", desc: "Product-led growth support with trial acquisition campaigns and onboarding funnel optimization." },
  { icon: "TrendingUp", sector: "Enterprise Outreach", desc: "Account-based marketing and SDR programs targeting enterprise accounts at scale." },
];

const integrations = [
  { label: "Development", sub: "Tech & Product" },
  { label: "Design", sub: "Creative & UI" },
  { label: "Next AI", sub: "Automation" },
  { label: "Analytics", sub: "Data Layer" },
];

const whyPoints = [
  "Full-stack team covering strategy, execution, and analytics",
  "Channel-agnostic approach focused on measurable outcomes",
  "Direct integration with Group 107 development and AI teams",
  "Transparent reporting with real attribution and ROI tracking",
];

const relatedSolutions = [
  { label: "Next AI", url: "/next-ai" },
  { label: "Development Services", url: "/development-services" },
  { label: "Product Discovery", url: "/product-discovery" },
  { label: "Services Overview", url: "/services" },
];

export default function Group107DigitalPage() {
  return (
    <div className="page">
      <Nav />
      <main>

        {/* ── Hero ─────────────────────────────── */}
        <section className="dg-hero">
          <div className="dg-hero__bg-text" aria-hidden="true">DIGITAL</div>
          <div className="dg-hero__inner">
            <AnimateIn delay={0} direction="up">
              <div className="dg-hero__label">Services / Group 107 Digital</div>
            </AnimateIn>
            <AnimateIn delay={0.08} direction="up">
              <h1 className="dg-hero__title">
                Digital Growth Built on Data, Automation, and Performance
              </h1>
            </AnimateIn>
            <AnimateIn delay={0.14} direction="up">
              <p className="dg-hero__sub">
                We combine marketing, sales, and technology to help businesses acquire, convert, and retain customers at scale.
              </p>
            </AnimateIn>
            <AnimateIn delay={0.18} direction="up">
              <p className="dg-hero__body">
                Group 107 Digital is a performance-first marketing and growth division. We don't just run campaigns — we build the entire system that makes growth repeatable and measurable.
              </p>
            </AnimateIn>
            <AnimateIn delay={0.22} direction="up">
              <div className="dg-hero__actions">
                <a href="#dg-cta" className="dg-hero__cta dg-hero__cta--primary">
                  Talk to Our Digital Team <ArrowRight className="dg-hero__cta-icon" />
                </a>
                <a href="#dg-services" className="dg-hero__cta dg-hero__cta--ghost">
                  View Services <ArrowUpRight className="dg-hero__cta-icon" />
                </a>
              </div>
            </AnimateIn>
          </div>
          <div className="dg-hero__stats">
            {[
              { val: "360°", label: "Digital Coverage" },
              { val: "Data-Driven", label: "Every Decision" },
              { val: "Full-Stack", label: "Marketing Team" },
              { val: "ROI", label: "Focused" },
            ].map((s, i) => (
              <div key={i} className="dg-hero__stat">
                <span className="dg-hero__stat-val">{s.val}</span>
                <span className="dg-hero__stat-label">{s.label}</span>
              </div>
            ))}
          </div>
        </section>

        {/* ── Intro ─────────────────────────────── */}
        <section className="dg-intro">
          <div className="dg-intro__inner">
            <AnimateIn delay={0} direction="left" className="dg-intro__left">
              <span className="dg-intro__tag">What We Do</span>
              <h2 className="dg-intro__title">Digital That Connects Marketing, Sales, and Technology</h2>
              <p className="dg-intro__body">
                Most agencies run campaigns. We build growth systems — combining paid media, SEO, SDR, and marketing automation into a single, integrated engine.
              </p>
              <p className="dg-intro__body">
                Because we sit inside Group 107, our digital work connects directly to development, AI, and design — creating a compound advantage that standalone agencies can't replicate.
              </p>
            </AnimateIn>
            <AnimateIn delay={0.1} direction="up" className="dg-intro__visual">
              <div className="dg-intro__ecosystem">
                <div className="dg-intro__eco-center">
                  <span className="dg-intro__eco-label">Growth Engine</span>
                </div>
                <div className="dg-intro__eco-nodes">
                  {["Marketing", "Sales / SDR", "Analytics", "Automation", "Development", "Design"].map((n, i) => (
                    <div key={i} className="dg-intro__eco-node">
                      <span>{n}</span>
                    </div>
                  ))}
                </div>
              </div>
            </AnimateIn>
          </div>
        </section>

        {/* ── Key Services ─────────────────────── */}
        <section id="dg-services" className="dg-services">
          <div className="dg-services__inner">
            <AnimateIn delay={0} direction="up" className="dg-services__head">
              <span className="dg-services__tag">Services</span>
              <h2 className="dg-services__title">What We Deliver</h2>
              <p className="dg-services__sub">Six core service areas — each data-driven, performance-oriented, and built to integrate with one another.</p>
            </AnimateIn>
            <div className="dg-services__grid">
              {services.map((svc, i) => {
                const Icon = Icons[svc.icon];
                return (
                  <AnimateIn key={i} delay={0.07 * i} direction="up">
                    <div className="dg-services__card">
                      <div className="dg-services__card-icon">
                        {Icon && <Icon strokeWidth={1.5} />}
                      </div>
                      <span className="dg-services__card-title">{svc.title}</span>
                      <span className="dg-services__card-desc">{svc.desc}</span>
                    </div>
                  </AnimateIn>
                );
              })}
            </div>
          </div>
        </section>

        {/* ── Our Approach ─────────────────────── */}
        <section className="dg-approach">
          <div className="dg-approach__inner">
            <AnimateIn delay={0} direction="up" className="dg-approach__head">
              <span className="dg-approach__tag">Methodology</span>
              <h2 className="dg-approach__title">How We Approach Growth</h2>
              <p className="dg-approach__sub">Every engagement follows a three-layer framework that makes growth predictable and repeatable.</p>
            </AnimateIn>
            <div className="dg-approach__cols">
              {approach.map((col, i) => (
                <AnimateIn key={i} delay={0.1 * i} direction="up">
                  <div className="dg-approach__col">
                    <div className="dg-approach__col-num">0{i + 1}</div>
                    <div className="dg-approach__col-label">{col.label}</div>
                    <div className="dg-approach__col-sub">{col.sub}</div>
                    <p className="dg-approach__col-desc">{col.desc}</p>
                  </div>
                </AnimateIn>
              ))}
            </div>
          </div>
        </section>

        {/* ── How We Work ──────────────────────── */}
        <section className="dg-process">
          <div className="dg-process__inner">
            <AnimateIn delay={0} direction="up" className="dg-process__head">
              <span className="dg-process__tag">Process</span>
              <h2 className="dg-process__title">How We Work</h2>
              <p className="dg-process__sub">A structured five-stage process from audit to full-scale execution.</p>
            </AnimateIn>
            <div className="dg-process__steps">
              {processSteps.map((step, i) => (
                <AnimateIn key={i} delay={0.08 * i} direction="up">
                  <div className="dg-process__step">
                    <span className="dg-process__step-num">{step.num}</span>
                    <div className="dg-process__step-body">
                      <span className="dg-process__step-title">{step.title}</span>
                      <span className="dg-process__step-desc">{step.desc}</span>
                    </div>
                    {i < processSteps.length - 1 && (
                      <div className="dg-process__step-arrow" aria-hidden="true" />
                    )}
                  </div>
                </AnimateIn>
              ))}
            </div>
          </div>
        </section>

        {/* ── Use Cases ─────────────────────────── */}
        <section className="dg-usecases">
          <div className="dg-usecases__inner">
            <AnimateIn delay={0} direction="up" className="dg-usecases__head">
              <span className="dg-usecases__tag">Applications</span>
              <h2 className="dg-usecases__title">Use Cases</h2>
              <p className="dg-usecases__sub">Group 107 Digital works across business models and industries — from SaaS and e-commerce to enterprise and B2B.</p>
            </AnimateIn>
            <div className="dg-usecases__grid">
              {useCases.map((uc, i) => {
                const Icon = Icons[uc.icon];
                return (
                  <AnimateIn key={i} delay={0.08 * i} direction="up">
                    <div className="dg-usecases__card">
                      <div className="dg-usecases__card-icon">
                        {Icon && <Icon strokeWidth={1.5} />}
                      </div>
                      <span className="dg-usecases__card-sector">{uc.sector}</span>
                      <p className="dg-usecases__card-desc">{uc.desc}</p>
                    </div>
                  </AnimateIn>
                );
              })}
            </div>
          </div>
        </section>

        {/* ── Integration ───────────────────────── */}
        <section className="dg-integration">
          <div className="dg-integration__inner">
            <AnimateIn delay={0} direction="up" className="dg-integration__head">
              <span className="dg-integration__tag">Ecosystem</span>
              <h2 className="dg-integration__title">Connected Across Group 107</h2>
              <p className="dg-integration__sub">
                Group 107 Digital doesn't operate in a silo. Our growth work connects directly to engineering, design, and AI capabilities — so campaigns are backed by real technical execution.
              </p>
            </AnimateIn>
            <div className="dg-integration__strip">
              {integrations.map((item, i) => (
                <AnimateIn key={i} delay={0.08 * i} direction="up">
                  <div className="dg-integration__item">
                    <span className="dg-integration__item-label">{item.label}</span>
                    <span className="dg-integration__item-sub">{item.sub}</span>
                  </div>
                </AnimateIn>
              ))}
            </div>
          </div>
        </section>

        {/* ── Why Group 107 Digital ─────────────── */}
        <section className="dg-why">
          <div className="dg-why__inner">
            <AnimateIn delay={0} direction="up" className="dg-why__head">
              <span className="dg-why__tag">Why Us</span>
              <h2 className="dg-why__title">Why Group 107 Digital</h2>
              <p className="dg-why__sub">
                Not just another agency — a full-stack growth partner with engineering and AI capabilities built in.
              </p>
            </AnimateIn>
            <div className="dg-why__list">
              {whyPoints.map((pt, i) => (
                <AnimateIn key={i} delay={0.08 * i} direction="up">
                  <div className="dg-why__item">
                    <span className="dg-why__item-bar" aria-hidden="true" />
                    <span className="dg-why__item-text">{pt}</span>
                  </div>
                </AnimateIn>
              ))}
            </div>
          </div>
        </section>

        {/* ── Final CTA ─────────────────────────── */}
        <section className="dg-cta" id="dg-cta">
          <div className="dg-cta__inner">
            <AnimateIn delay={0} direction="up">
              <span className="dg-cta__tag">Get Started</span>
            </AnimateIn>
            <AnimateIn delay={0.08} direction="up">
              <h2 className="dg-cta__title">
                Ready to Build<br />a Growth System?
              </h2>
            </AnimateIn>
            <AnimateIn delay={0.14} direction="up">
              <p className="dg-cta__sub">
                Let's talk about what growth looks like for your business — and how Group 107 Digital can get you there.
              </p>
            </AnimateIn>
            <AnimateIn delay={0.2} direction="up">
              <div className="dg-cta__actions">
                <a href="mailto:info@group107.com" className="dg-cta__btn dg-cta__btn--primary">
                  Talk to Our Team <ArrowRight className="dg-cta__btn-icon" />
                </a>
                <a href="mailto:info@group107.com" className="dg-cta__btn dg-cta__btn--ghost">
                  Request Demo
                </a>
              </div>
            </AnimateIn>
            <AnimateIn delay={0.26} direction="up">
              <div className="dg-cta__trust">
                {["No lock-in contracts", "Strategy before spend", "Full-stack execution"].map((t, i) => (
                  <div key={i} className="dg-cta__trust-item">
                    {(() => { const Icon = CheckCircle2; return Icon ? <Icon strokeWidth={1.5} className="dg-cta__trust-icon" /> : null; })()}
                    {t}
                  </div>
                ))}
              </div>
            </AnimateIn>
          </div>
        </section>

        {/* ── Related Solutions ─────────────────── */}
        <section className="ds-related">
          <div className="ds-related__inner">
            <div className="ds-related__head">
              <div className="ds-related__label">Explore More</div>
              <h2 className="ds-related__title">Explore More Services</h2>
            </div>
            <div className="ds-related__links">
              {relatedSolutions.map((rl, i) => (
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
