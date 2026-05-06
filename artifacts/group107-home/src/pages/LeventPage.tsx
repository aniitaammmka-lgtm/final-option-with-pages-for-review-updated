import Nav from "@/components/blocks/Nav";
import Footer from "@/components/blocks/Footer";
import AnimateIn from "@/components/AnimateIn";
import { Icons } from "@/lib/icons";

const ArrowRight = Icons.ArrowRight;
const ArrowUpRight = Icons.ArrowUpRight;
const CheckCircle2 = Icons.CheckCircle2;

const products = [
  { icon: "TrendingUp", title: "Trading Platforms & Investment Tools", desc: "Full-cycle trading systems with market data integration, order management, and optimized UI." },
  { icon: "Landmark", title: "Banking & Financial Management", desc: "Core banking systems, account management, and financial operations infrastructure." },
  { icon: "Wallet", title: "Digital Wallets & Payment Solutions", desc: "Secure, compliant digital payment products for consumer and institutional use." },
  { icon: "BarChart2", title: "Financial Analytics Platforms", desc: "Data-driven analytics tools that surface actionable insights from financial data." },
  { icon: "FileText", title: "Custom Financial Applications", desc: "Internal tools and customer-facing apps tailored to specific business workflows." },
  { icon: "ShieldCheck", title: "Compliance & Security Systems", desc: "Systems built with regulatory compliance and security best practices at their core." },
];

const capabilities = [
  { num: "01", title: "System Development", desc: "Scalable, user-focused financial systems built for performance and reliability in production environments." },
  { num: "02", title: "Banking Integrations", desc: "Secure connections with financial platforms, core banking APIs, payment rails, and market data providers." },
  { num: "03", title: "Trading Systems", desc: "Trading engine optimization, real-time market data integration, and professional trading UI development." },
  { num: "04", title: "Client-Centric Approach", desc: "Solutions aligned with real business needs, compliance requirements, and long-term product growth." },
];

const processSteps = [
  { num: "01", title: "Understand Your Business", desc: "Deep-dive into your financial workflows, regulatory environment, and product goals." },
  { num: "02", title: "Define Architecture", desc: "Design the product architecture, feature set, and integration strategy together." },
  { num: "03", title: "Develop & Integrate", desc: "Full-cycle engineering with banking, market data, and third-party system integrations." },
  { num: "04", title: "Test with Real Data", desc: "Rigorous testing with real financial data scenarios, compliance checks, and load testing." },
  { num: "05", title: "Deploy & Improve", desc: "Live deployment followed by continuous monitoring, iteration, and scaling support." },
];

const caseStudies = [
  { tag: "Fixed Income", client: "IMTC", desc: "Fixed income management system for portfolio managers — pricing, analytics, and order workflow tools." },
  { tag: "Financial Platform", client: "PrePay", desc: "End-to-end financial management platform with account management and payment processing." },
  { tag: "Banking", client: "FIBI", desc: "Core banking system enhancements — new modules, API integrations, and operational tooling." },
  { tag: "Trading", client: "Trade.com", desc: "Trading and investment platform with market data feeds, charting, and portfolio management." },
];

const whyPoints = [
  "Direct experience with banks, brokers, and financial institutions",
  "End-to-end product development from concept to live production",
  "Strong integration capabilities with financial infrastructure",
  "Agile, responsive delivery aligned with market timelines",
];

const valueCols = [
  { label: "Understand", desc: "Your financial business model, workflows, and regulatory constraints before a single line is written." },
  { label: "Build", desc: "Secure, scalable financial products engineered for performance and compliance from day one." },
  { label: "Integrate", desc: "With banking systems, market data providers, payment rails, and your existing infrastructure." },
  { label: "Scale", desc: "Your product confidently with the architecture, monitoring, and team support to grow with you." },
];

const relatedSolutions = [
  { label: "Summa", url: "/summa" },
  { label: "Global Docs", url: "/global-docs" },
  { label: "Product Discovery", url: "/product-discovery" },
  { label: "Development Services", url: "/development-services" },
];

export default function LeventPage() {
  return (
    <div className="page">
      <Nav />
      <main>

        {/* ── Hero ─────────────────────────────── */}
        <section className="lv-hero">
          <div className="lv-hero__bg-text" aria-hidden="true">LEVENT</div>
          <div className="lv-hero__inner">
            <AnimateIn delay={0} direction="up">
              <div className="lv-hero__label">Product Lobby / Levent</div>
            </AnimateIn>
            <AnimateIn delay={0.08} direction="up">
              <h1 className="lv-hero__title">
                Build Advanced Financial Products — Faster and Smarter
              </h1>
            </AnimateIn>
            <AnimateIn delay={0.14} direction="up">
              <p className="lv-hero__sub">
                Levent by Group 107 delivers end-to-end fintech product development for banks, brokers, and insurance companies.
              </p>
            </AnimateIn>
            <AnimateIn delay={0.18} direction="up">
              <p className="lv-hero__body">
                From concept to live product, Levent combines financial expertise, engineering excellence, and real-world integrations to create scalable, secure, and user-focused financial solutions.
              </p>
            </AnimateIn>
            <AnimateIn delay={0.22} direction="up">
              <div className="lv-hero__actions">
                <a href="#lv-cta" className="lv-hero__cta lv-hero__cta--primary">
                  Talk to Us <ArrowRight className="lv-hero__cta-icon" />
                </a>
                <a href="#lv-products" className="lv-hero__cta lv-hero__cta--ghost">
                  Request Demo <ArrowUpRight className="lv-hero__cta-icon" />
                </a>
              </div>
            </AnimateIn>
          </div>
          <div className="lv-hero__stats">
            {[
              { val: "Fintech", label: "Domain Expertise" },
              { val: "End-to-End", label: "Product Development" },
              { val: "Banking", label: "Integrations" },
              { val: "Enterprise", label: "Grade Security" },
            ].map((s, i) => (
              <div key={i} className="lv-hero__stat">
                <span className="lv-hero__stat-val">{s.val}</span>
                <span className="lv-hero__stat-label">{s.label}</span>
              </div>
            ))}
          </div>
        </section>

        {/* ── About Levent ──────────────────────── */}
        <section className="lv-about">
          <div className="lv-about__inner">
            <AnimateIn delay={0} direction="left" className="lv-about__left">
              <span className="lv-about__tag">About</span>
              <h2 className="lv-about__title">What is Levent?</h2>
              <p className="lv-about__body">
                Levent is an R&D-focused fintech solution designed to build complete financial products for institutions such as banks, brokers, and insurance companies.
              </p>
              <p className="lv-about__body">
                It combines product thinking, engineering, and financial domain expertise to deliver end-to-end solutions tailored to each business — from initial architecture through to live production deployment.
              </p>
            </AnimateIn>
            <AnimateIn delay={0.1} direction="up" className="lv-about__diagram">
              <div className="lv-about__node lv-about__node--in">
                <span className="lv-about__node-label">Banks & Financial Institutions</span>
              </div>
              <div className="lv-about__node lv-about__node--in">
                <span className="lv-about__node-label">Brokers & Trading Platforms</span>
              </div>
              <div className="lv-about__node lv-about__node--in">
                <span className="lv-about__node-label">Insurance Companies</span>
              </div>
              <div className="lv-about__arrow" aria-hidden="true" />
              <div className="lv-about__node lv-about__node--out">
                <span className="lv-about__node-label">Live Financial Product</span>
              </div>
            </AnimateIn>
          </div>
        </section>

        {/* ── What We Build ─────────────────────── */}
        <section id="lv-products" className="lv-products">
          <div className="lv-products__inner">
            <AnimateIn delay={0} direction="up" className="lv-products__head">
              <span className="lv-products__tag">Capabilities</span>
              <h2 className="lv-products__title">Fintech Products We Deliver</h2>
              <p className="lv-products__sub">Each product is built around real operational needs, ensuring performance, compliance, and usability.</p>
            </AnimateIn>
            <div className="lv-products__grid">
              {products.map((prod, i) => {
                const Icon = Icons[prod.icon];
                return (
                  <AnimateIn key={i} delay={0.07 * i} direction="up">
                    <div className="lv-products__card">
                      <div className="lv-products__card-num">0{i + 1}</div>
                      <div className="lv-products__card-icon">
                        {Icon && <Icon strokeWidth={1.5} />}
                      </div>
                      <span className="lv-products__card-title">{prod.title}</span>
                      <span className="lv-products__card-desc">{prod.desc}</span>
                    </div>
                  </AnimateIn>
                );
              })}
            </div>
          </div>
        </section>

        {/* ── Core Capabilities ─────────────────── */}
        <section className="lv-caps">
          <div className="lv-caps__inner">
            <AnimateIn delay={0} direction="left" className="lv-caps__head">
              <span className="lv-caps__tag">Core Strengths</span>
              <h2 className="lv-caps__title">Core Capabilities</h2>
              <p className="lv-caps__sub">
                Levent brings together the engineering depth and financial knowledge needed to build products that work in regulated, high-stakes environments.
              </p>
            </AnimateIn>
            <div className="lv-caps__list">
              {capabilities.map((cap, i) => (
                <AnimateIn key={i} delay={0.09 * i} direction="up">
                  <div className="lv-caps__item">
                    <span className="lv-caps__item-num">{cap.num}</span>
                    <div className="lv-caps__item-body">
                      <span className="lv-caps__item-title">{cap.title}</span>
                      <span className="lv-caps__item-desc">{cap.desc}</span>
                    </div>
                  </div>
                </AnimateIn>
              ))}
            </div>
          </div>
        </section>

        {/* ── How It Works ─────────────────────── */}
        <section className="lv-process">
          <div className="lv-process__inner">
            <AnimateIn delay={0} direction="up" className="lv-process__head">
              <span className="lv-process__tag">Methodology</span>
              <h2 className="lv-process__title">From Idea to Live Product</h2>
              <p className="lv-process__sub">We ensure every step is aligned with compliance, scalability, and real market needs.</p>
            </AnimateIn>
            <div className="lv-process__steps">
              {processSteps.map((step, i) => (
                <AnimateIn key={i} delay={0.08 * i} direction="up">
                  <div className="lv-process__step">
                    <span className="lv-process__step-num">{step.num}</span>
                    <div className="lv-process__step-body">
                      <span className="lv-process__step-title">{step.title}</span>
                      <span className="lv-process__step-desc">{step.desc}</span>
                    </div>
                    {i < processSteps.length - 1 && (
                      <div className="lv-process__step-arrow" aria-hidden="true">
                        {(() => { const Icon = Icons["ArrowRight"]; return Icon ? <Icon strokeWidth={1.5} /> : null; })()}
                      </div>
                    )}
                  </div>
                </AnimateIn>
              ))}
            </div>
          </div>
        </section>

        {/* ── Real Use Cases ────────────────────── */}
        <section className="lv-cases">
          <div className="lv-cases__inner">
            <AnimateIn delay={0} direction="up" className="lv-cases__head">
              <span className="lv-cases__tag">Track Record</span>
              <h2 className="lv-cases__title">Proven Fintech Experience</h2>
              <p className="lv-cases__sub">Our experience across fintech products allows us to build reliable and scalable systems.</p>
            </AnimateIn>
            <div className="lv-cases__grid">
              {caseStudies.map((cs, i) => (
                <AnimateIn key={i} delay={0.09 * i} direction="up">
                  <div className="lv-cases__card">
                    <span className="lv-cases__card-tag">{cs.tag}</span>
                    <span className="lv-cases__card-client">{cs.client}</span>
                    <p className="lv-cases__card-desc">{cs.desc}</p>
                  </div>
                </AnimateIn>
              ))}
            </div>
          </div>
        </section>

        {/* ── Value Proposition ─────────────────── */}
        <section className="lv-value">
          <div className="lv-value__inner">
            <AnimateIn delay={0} direction="up" className="lv-value__head">
              <span className="lv-value__tag">Value Proposition</span>
              <h2 className="lv-value__title">Not Just Development —<br />A Complete Fintech Partner</h2>
            </AnimateIn>
            <div className="lv-value__cols">
              {valueCols.map((col, i) => (
                <AnimateIn key={i} delay={0.09 * i} direction="up">
                  <div className="lv-value__col">
                    <div className="lv-value__col-label">{col.label}</div>
                    <p className="lv-value__col-desc">{col.desc}</p>
                  </div>
                </AnimateIn>
              ))}
            </div>
          </div>
        </section>

        {/* ── Levent + Buffer ───────────────────── */}
        <section className="lv-buffer">
          <div className="lv-buffer__inner">
            <AnimateIn delay={0} direction="up" className="lv-buffer__content">
              <span className="lv-buffer__tag">Ecosystem</span>
              <h2 className="lv-buffer__title">Built Together With Smart Investment Tools</h2>
              <p className="lv-buffer__body">
                Alongside Levent, Group 107 developed solutions like Buffer — an AI-powered investment tool designed to analyze market data and create personalized strategies for users.
              </p>
              <p className="lv-buffer__body">
                The Levent and Buffer ecosystem reflects Group 107's ability to build interconnected financial products that serve institutions and individual investors alike.
              </p>
            </AnimateIn>
            <AnimateIn delay={0.12} direction="right" className="lv-buffer__aside">
              <div className="lv-buffer__badge">
                <span className="lv-buffer__badge-label">Levent</span>
                <span className="lv-buffer__badge-sub">Institutional Fintech</span>
              </div>
              <div className="lv-buffer__badge lv-buffer__badge--alt">
                <span className="lv-buffer__badge-label">Buffer</span>
                <span className="lv-buffer__badge-sub">AI Investment Tool</span>
              </div>
              <div className="lv-buffer__connector" aria-hidden="true">
                <span className="lv-buffer__connector-line" />
                <span className="lv-buffer__connector-label">Group 107 Ecosystem</span>
                <span className="lv-buffer__connector-line" />
              </div>
            </AnimateIn>
          </div>
        </section>

        {/* ── Why Group 107 ─────────────────────── */}
        <section className="lv-why">
          <div className="lv-why__inner">
            <AnimateIn delay={0} direction="up" className="lv-why__head">
              <span className="lv-why__tag">Partnership</span>
              <h2 className="lv-why__title">Built by Group 107 — Your Fintech Technology Partner</h2>
              <p className="lv-why__sub">
                Group 107 combines financial expertise with deep technical capabilities to deliver solutions that are secure, scalable, and ready for real-world use.
              </p>
            </AnimateIn>
            <div className="lv-why__list">
              {whyPoints.map((pt, i) => (
                <AnimateIn key={i} delay={0.08 * i} direction="up">
                  <div className="lv-why__item">
                    <span className="lv-why__item-bar" aria-hidden="true" />
                    <span className="lv-why__item-text">{pt}</span>
                  </div>
                </AnimateIn>
              ))}
            </div>
          </div>
        </section>

        {/* ── Final CTA ─────────────────────────── */}
        <section className="lv-cta" id="lv-cta">
          <div className="lv-cta__inner">
            <AnimateIn delay={0} direction="up">
              <span className="lv-cta__tag">Get Started</span>
            </AnimateIn>
            <AnimateIn delay={0.08} direction="up">
              <h2 className="lv-cta__title">
                Ready to Build Your<br />Fintech Product?
              </h2>
            </AnimateIn>
            <AnimateIn delay={0.14} direction="up">
              <p className="lv-cta__sub">
                Let's discuss how Levent and Group 107 can help you design, develop, and scale your next financial solution.
              </p>
            </AnimateIn>
            <AnimateIn delay={0.2} direction="up">
              <div className="lv-cta__actions">
                <a href="mailto:info@group107.com" className="lv-cta__btn lv-cta__btn--primary">
                  Contact Us <ArrowRight className="lv-cta__btn-icon" />
                </a>
                <a href="mailto:info@group107.com" className="lv-cta__btn lv-cta__btn--ghost">
                  Book a Call
                </a>
              </div>
            </AnimateIn>
            <AnimateIn delay={0.26} direction="up">
              <div className="lv-cta__trust">
                {["Free initial consultation", "Fintech domain expertise", "End-to-end delivery"].map((t, i) => (
                  <div key={i} className="lv-cta__trust-item">
                    {(() => { const Icon = CheckCircle2; return Icon ? <Icon strokeWidth={1.5} className="lv-cta__trust-icon" /> : null; })()}
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
              <h2 className="ds-related__title">Explore More Products & Services</h2>
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
