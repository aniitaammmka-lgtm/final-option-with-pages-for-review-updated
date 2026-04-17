import Nav from "@/components/blocks/Nav";
import Footer from "@/components/blocks/Footer";
import AnimateIn from "@/components/AnimateIn";
import { Icons } from "@/lib/icons";

const ArrowRight = Icons.ArrowRight;
const ArrowUpRight = Icons.ArrowUpRight;

const products = [
  {
    id: "accessible-docs",
    tag: "AI Platform",
    title: "Accessible Docs",
    subheadline: "AI-powered document accessibility at scale",
    description: "Transform any document into a fully accessible, standards-compliant version using AI. Eliminate manual remediation and scale compliance across your entire document library.",
    image: "/project-1.png",
    icon: "FileCheck",
    color: "#0a0a0a",
    points: [
      { icon: "ScanLine", label: "Automated WCAG & PDF/UA compliance" },
      { icon: "Sparkles", label: "AI-powered remediation at scale" },
      { icon: "Workflow", label: "Seamless workflow integration" },
      { icon: "Shield", label: "Audit trails and compliance reporting" },
    ],
    mockupItems: ["PDF → Accessible PDF", "WCAG 2.1 AA", "PDF/UA", "Tagged HTML"],
  },
  {
    id: "global-docs",
    tag: "Translation",
    title: "Global Docs",
    subheadline: "AI-powered document translation",
    description: "Expand your reach with intelligent document translation that preserves formatting, context, and tone across 100+ languages for global teams.",
    image: "/project-3.png",
    icon: "Languages",
    color: "#111",
    points: [
      { icon: "Globe", label: "100+ language support" },
      { icon: "FileText", label: "Format-preserving translation" },
      { icon: "BrainCircuit", label: "Context-aware AI models" },
      { icon: "Users", label: "Multi-team collaboration" },
    ],
    mockupItems: ["EN → FR", "EN → DE", "EN → JP", "EN → AR"],
  },
  {
    id: "summa",
    tag: "Automation",
    title: "Summa",
    subheadline: "Smarter document and workflow intelligence",
    description: "Summa extracts, classifies, and routes document intelligence to the right people and systems — eliminating manual effort from document-heavy operations.",
    image: "/project-2.png",
    icon: "Workflow",
    color: "#0d0d0d",
    points: [
      { icon: "ScanLine", label: "Intelligent document classification" },
      { icon: "Database", label: "Automated data extraction" },
      { icon: "Network", label: "Workflow routing & orchestration" },
      { icon: "Lock", label: "Enterprise-grade security" },
    ],
    mockupItems: ["Classify", "Extract", "Route", "Archive"],
  },
  {
    id: "levent",
    tag: "Fintech R&D",
    title: "Levent",
    subheadline: "Fintech systems built for scale",
    description: "Levent provides banks, trading platforms, and financial institutions with battle-tested infrastructure and integration layers for modern financial operations.",
    image: "/hero.png",
    icon: "LineChart",
    color: "#0a0a0a",
    points: [
      { icon: "Link", label: "Core banking integration layers" },
      { icon: "Activity", label: "Trading system infrastructure" },
      { icon: "Fingerprint", label: "Regulatory compliance modules" },
      { icon: "Database", label: "Real-time data pipelines" },
    ],
    mockupItems: ["+12.4%", "99.99% uptime", "ISO 27001", "PCI DSS"],
  },
];

const whyPoints = [
  { icon: "Zap", title: "Built Around Real Pain Points", desc: "Every product was born from a real operational challenge faced by complex organizations." },
  { icon: "Shield", title: "Enterprise-Grade Security", desc: "All products are built with compliance, security, and auditability at the core." },
  { icon: "Layers", title: "Seamless Integration", desc: "Each product is designed to plug into existing systems without disruption." },
  { icon: "TrendingUp", title: "Proven at Scale", desc: "Trusted by teams across finance, government, and SaaS for mission-critical workloads." },
];

const useCases = [
  { sector: "Finance", icon: "TrendingUp", text: "Automate compliance documentation and regulatory filings with AI precision." },
  { sector: "Government", icon: "Building2", text: "Ensure public-facing documents meet accessibility mandates at scale." },
  { sector: "Healthcare", icon: "Heart", text: "Translate and classify medical documents for multi-lingual patient care." },
  { sector: "SaaS", icon: "LayoutDashboard", text: "Embed document intelligence directly into your product workflows." },
];

export default function ProductLobbyPage() {
  return (
    <div className="page">
      <Nav />
      <main>

        {/* ── Hero ────────────────────────── */}
        <section className="pl-hero">
          <div className="pl-hero__bg-grid" aria-hidden="true" />
          <div className="pl-hero__orb pl-hero__orb--1" aria-hidden="true" />
          <div className="pl-hero__orb pl-hero__orb--2" aria-hidden="true" />

          <div className="pl-hero__inner">
            <div className="pl-hero__content">
              <AnimateIn delay={0} direction="up">
                <div className="pl-hero__label">Product Lobby</div>
              </AnimateIn>
              <AnimateIn delay={0.08} direction="up">
                <h1 className="pl-hero__title">
                  Products Built to Solve<br />Real Business Challenges
                </h1>
              </AnimateIn>
              <AnimateIn delay={0.16} direction="up">
                <p className="pl-hero__sub">
                  Explore Group 107's portfolio of purpose-built platforms — engineered for compliance, intelligence, and scale.
                </p>
              </AnimateIn>
              <AnimateIn delay={0.24} direction="up">
                <div className="pl-hero__actions">
                  <a href="#products-grid" className="pl-hero__cta pl-hero__cta--primary">
                    Explore Products <ArrowRight className="pl-hero__cta-icon" />
                  </a>
                  <a href="#pl-contact" className="pl-hero__cta pl-hero__cta--secondary">
                    Talk to Our Team <ArrowUpRight className="pl-hero__cta-icon" />
                  </a>
                </div>
              </AnimateIn>
            </div>

            {/* Product preview cards */}
            <AnimateIn delay={0.2} direction="fade" className="pl-hero__mockup">
              <div className="pl-hero__mockup-window">
                <div className="pl-hero__mockup-bar">
                  <span className="pl-hero__mockup-dot" />
                  <span className="pl-hero__mockup-dot" />
                  <span className="pl-hero__mockup-dot" />
                  <span className="pl-hero__mockup-title">Group 107 Products</span>
                </div>
                <div className="pl-hero__mockup-body">
                  {products.map((p, i) => {
                    const Icon = Icons[p.icon];
                    return (
                      <div key={p.id} className="pl-hero__mockup-row">
                        <div className="pl-hero__mockup-row-icon">
                          {Icon && <Icon strokeWidth={1.5} />}
                        </div>
                        <div className="pl-hero__mockup-row-info">
                          <div className="pl-hero__mockup-row-name">{p.title}</div>
                          <div className="pl-hero__mockup-row-tag">{p.tag}</div>
                        </div>
                        <div className="pl-hero__mockup-row-badge">Live</div>
                      </div>
                    );
                  })}
                </div>
              </div>
            </AnimateIn>
          </div>
        </section>

        {/* ── Intro ───────────────────────── */}
        <section className="pl-intro">
          <div className="pl-intro__inner">
            <AnimateIn delay={0} direction="left" className="pl-intro__graphic">
              <div className="pl-intro__graphic-grid">
                {products.map((p, i) => {
                  const Icon = Icons[p.icon];
                  return (
                    <div key={p.id} className="pl-intro__graphic-tile">
                      {Icon && <Icon strokeWidth={1} className="pl-intro__graphic-tile-icon" />}
                      <span>{p.title}</span>
                    </div>
                  );
                })}
              </div>
            </AnimateIn>
            <AnimateIn delay={0.1} direction="up" className="pl-intro__text">
              <div className="pl-intro__label">Our Products</div>
              <h2 className="pl-intro__title">More Than Services —<br />Purpose-Built Products</h2>
              <p className="pl-intro__body">
                Beyond client engagements, Group 107 builds and maintains proprietary platforms designed to solve the document, workflow, and financial challenges facing modern enterprises. These aren't generic tools — they're products refined through real-world deployments across regulated industries.
              </p>
              <div className="pl-intro__bullets">
                {["AI-native from the ground up", "Built for regulated industries", "Integrates with existing systems"].map((b, i) => (
                  <div key={i} className="pl-intro__bullet">
                    {(() => { const Icon = Icons["CheckCircle2"]; return Icon ? <Icon strokeWidth={1.5} className="pl-intro__bullet-icon" /> : null; })()}
                    {b}
                  </div>
                ))}
              </div>
            </AnimateIn>
          </div>
        </section>

        {/* ── Products Grid ───────────────── */}
        <section id="products-grid" className="pl-grid-section">
          <div className="pl-grid-section__inner">
            <AnimateIn delay={0} direction="up" className="pl-grid-section__head">
              <div className="pl-grid-section__label">Product Suite</div>
              <h2 className="pl-grid-section__title">Four Products. One Ecosystem.</h2>
            </AnimateIn>
            <div className="pl-grid">
              {products.map((p, i) => {
                const Icon = Icons[p.icon];
                return (
                  <AnimateIn key={p.id} delay={0.08 * i} direction="up">
                    <a href={`#${p.id}`} className="pl-card">
                      <div className="pl-card__img-wrap">
                        <img src={p.image} alt={p.title} className="pl-card__img" />
                        <div className="pl-card__overlay" />
                        <div className="pl-card__icon-badge">
                          {Icon && <Icon strokeWidth={1.5} />}
                        </div>
                        <span className="pl-card__tag">{p.tag}</span>
                      </div>
                      <div className="pl-card__body">
                        <h3 className="pl-card__title">{p.title}</h3>
                        <p className="pl-card__sub">{p.subheadline}</p>
                        <div className="pl-card__features">
                          {p.points.slice(0, 2).map((pt, j) => (
                            <span key={j} className="pl-card__feature">{pt.label}</span>
                          ))}
                        </div>
                        <div className="pl-card__cta">
                          View Product <ArrowRight className="pl-card__cta-icon" />
                        </div>
                      </div>
                    </a>
                  </AnimateIn>
                );
              })}
            </div>
          </div>
        </section>

        {/* ── Product Sections ────────────── */}
        {products.map((product, idx) => {
          const ProductIcon = Icons[product.icon];
          const isEven = idx % 2 === 0;
          return (
            <section key={product.id} id={product.id} className={`pl-product ${isEven ? "pl-product--light" : "pl-product--muted"}`}>
              <div className="pl-product__inner">

                {/* Visual side */}
                <AnimateIn delay={0} direction={isEven ? "left" : "right"} className={`pl-product__visual ${isEven ? "" : "pl-product__visual--flip"}`}>
                  <div className="pl-product__img-wrap">
                    <img src={product.image} alt={product.title} className="pl-product__img" />
                    <div className="pl-product__img-overlay" />

                    {/* Floating mockup chips */}
                    <div className="pl-product__chips">
                      {product.mockupItems.map((chip, ci) => (
                        <div key={ci} className="pl-product__chip">
                          {(() => { const Icon = Icons["CheckCircle2"]; return Icon ? <Icon strokeWidth={2} className="pl-product__chip-icon" /> : null; })()}
                          {chip}
                        </div>
                      ))}
                    </div>

                    <div className="pl-product__img-badge">
                      {ProductIcon && <ProductIcon strokeWidth={1.5} />}
                      <span>{product.tag}</span>
                    </div>
                  </div>
                </AnimateIn>

                {/* Content side */}
                <AnimateIn delay={0.1} direction="up" className="pl-product__content">
                  <div className="pl-product__num">Product 0{idx + 1}</div>
                  <div className="pl-product__icon-wrap">
                    {ProductIcon && <ProductIcon strokeWidth={1} className="pl-product__big-icon" />}
                  </div>
                  <h2 className="pl-product__title">{product.title}</h2>
                  <p className="pl-product__sub">{product.subheadline}</p>
                  <p className="pl-product__desc">{product.description}</p>
                  <div className="pl-product__points">
                    {product.points.map((pt, i) => {
                      const PtIcon = Icons[pt.icon];
                      return (
                        <div key={i} className="pl-product__point">
                          <div className="pl-product__point-icon">
                            {PtIcon && <PtIcon strokeWidth={1.5} />}
                          </div>
                          <span>{pt.label}</span>
                        </div>
                      );
                    })}
                  </div>
                  <a href="#pl-contact" className="pl-product__cta">
                    Learn More <ArrowRight className="pl-product__cta-icon" />
                  </a>
                </AnimateIn>
              </div>
            </section>
          );
        })}

        {/* ── Why Section ─────────────────── */}
        <section className="pl-why">
          <div className="pl-why__pattern" aria-hidden="true" />
          <div className="pl-why__inner">
            <div className="pl-why__head">
              <AnimateIn delay={0} direction="up">
                <div className="pl-why__label">Why Group 107 Products</div>
              </AnimateIn>
              <AnimateIn delay={0.08} direction="up">
                <h2 className="pl-why__title">Built to Solve Real Operational Challenges</h2>
              </AnimateIn>
            </div>
            <div className="pl-why__grid">
              {whyPoints.map((pt, i) => {
                const Icon = Icons[pt.icon];
                return (
                  <AnimateIn key={i} delay={0.08 * (i + 1)} direction="up">
                    <div className="pl-why__card">
                      <div className="pl-why__card-icon">
                        {Icon && <Icon strokeWidth={1.5} />}
                      </div>
                      <h3 className="pl-why__card-title">{pt.title}</h3>
                      <p className="pl-why__card-desc">{pt.desc}</p>
                    </div>
                  </AnimateIn>
                );
              })}
            </div>
          </div>
        </section>

        {/* ── Products + Services Bridge ───── */}
        <section className="pl-bridge">
          <div className="pl-bridge__inner">
            <AnimateIn delay={0} direction="left" className="pl-bridge__visual">
              <div className="pl-bridge__diagram">
                <div className="pl-bridge__diagram-center">
                  {(() => { const Icon = Icons["Network"]; return Icon ? <Icon strokeWidth={1} className="pl-bridge__diagram-icon" /> : null; })()}
                  <span>Ecosystem</span>
                </div>
                <div className="pl-bridge__diagram-nodes">
                  {[
                    { label: "Products", icon: "Package" },
                    { label: "Services", icon: "Layers" },
                    { label: "Support", icon: "Headphones" },
                    { label: "Data", icon: "Database" },
                  ].map((node, i) => {
                    const NodeIcon = Icons[node.icon];
                    return (
                      <div key={i} className={`pl-bridge__diagram-node pl-bridge__diagram-node--${i + 1}`}>
                        {NodeIcon && <NodeIcon strokeWidth={1.5} />}
                        <span>{node.label}</span>
                      </div>
                    );
                  })}
                </div>
              </div>
            </AnimateIn>
            <AnimateIn delay={0.1} direction="up" className="pl-bridge__text">
              <div className="pl-bridge__label">Ecosystem</div>
              <h2 className="pl-bridge__title">Products That Don't Stand Alone</h2>
              <p className="pl-bridge__body">
                Every Group 107 product is backed by our full suite of services — from implementation and integration to ongoing support. Products and services work together to deliver complete, end-to-end solutions.
              </p>
              <a href="/services" className="pl-bridge__cta">
                See Our Solutions <ArrowRight className="pl-bridge__cta-icon" />
              </a>
            </AnimateIn>
          </div>
        </section>

        {/* ── Use Cases ───────────────────── */}
        <section className="pl-usecases">
          <div className="pl-usecases__inner">
            <div className="pl-usecases__head">
              <AnimateIn delay={0} direction="up">
                <div className="pl-usecases__label">Use Cases</div>
              </AnimateIn>
              <AnimateIn delay={0.08} direction="up">
                <h2 className="pl-usecases__title">Built for Organizations That Need More Than Generic Tools</h2>
              </AnimateIn>
            </div>
            <div className="pl-usecases__grid">
              {useCases.map((uc, i) => {
                const Icon = Icons[uc.icon];
                return (
                  <AnimateIn key={i} delay={0.08 * (i + 1)} direction="up">
                    <div className="pl-usecases__card">
                      <div className="pl-usecases__card-icon">
                        {Icon && <Icon strokeWidth={1.5} />}
                      </div>
                      <div className="pl-usecases__card-sector">{uc.sector}</div>
                      <p className="pl-usecases__card-text">{uc.text}</p>
                      <div className="pl-usecases__card-arrow">
                        <ArrowRight strokeWidth={1.5} className="pl-usecases__arrow-icon" />
                      </div>
                    </div>
                  </AnimateIn>
                );
              })}
            </div>
          </div>
        </section>

        {/* ── Credibility Block ───────────── */}
        <section className="pl-credibility">
          <div className="pl-credibility__grain" aria-hidden="true" />
          <div className="pl-credibility__inner">
            <div className="pl-credibility__head">
              <AnimateIn delay={0} direction="up">
                <div className="pl-credibility__label">Trust & Scale</div>
              </AnimateIn>
              <AnimateIn delay={0.08} direction="up">
                <h2 className="pl-credibility__title">Built by a Team Trusted Across Industries</h2>
              </AnimateIn>
            </div>
            <AnimateIn delay={0.14} direction="up" className="pl-credibility__stats">
              {[
                { val: "88K+", label: "Talent Pool", icon: "Users" },
                { val: "12+", label: "Industries", icon: "Globe" },
                { val: "4", label: "Products", icon: "Package" },
                { val: "100%", label: "Compliance Focus", icon: "Shield" },
              ].map((s, i) => {
                const Icon = Icons[s.icon];
                return (
                  <div key={i} className="pl-credibility__stat">
                    <div className="pl-credibility__stat-icon">
                      {Icon && <Icon strokeWidth={1} />}
                    </div>
                    <span className="pl-credibility__stat-value">{s.val}</span>
                    <span className="pl-credibility__stat-label">{s.label}</span>
                  </div>
                );
              })}
            </AnimateIn>
          </div>
        </section>

        {/* ── Final CTA ────────────────────── */}
        <section id="pl-contact" className="pl-cta">
          <div className="pl-cta__grain" aria-hidden="true" />
          <div className="pl-cta__glow" aria-hidden="true" />
          <div className="pl-cta__bg-icons" aria-hidden="true">
            {["FileCheck", "Languages", "Workflow", "LineChart"].map((ic, i) => {
              const Icon = Icons[ic];
              return Icon ? <Icon key={i} className={`pl-cta__bg-icon pl-cta__bg-icon--${i + 1}`} strokeWidth={0.75} /> : null;
            })}
          </div>
          <div className="pl-cta__inner">
            <AnimateIn delay={0} direction="up">
              <div className="pl-cta__eyebrow">
                {(() => { const Icon = Icons["Lightbulb"]; return Icon ? <Icon strokeWidth={1.5} className="pl-cta__eyebrow-icon" /> : null; })()}
                Get Started
              </div>
            </AnimateIn>
            <AnimateIn delay={0.08} direction="up">
              <h2 className="pl-cta__title">Need Help Choosing the Right Product?</h2>
            </AnimateIn>
            <AnimateIn delay={0.14} direction="up">
              <p className="pl-cta__sub">Our team will walk you through each product and find the best fit for your needs and compliance requirements.</p>
            </AnimateIn>
            <AnimateIn delay={0.2} direction="up">
              <a href="#" className="pl-cta__btn">
                Contact Us <ArrowRight className="pl-cta__btn-icon" />
              </a>
            </AnimateIn>
            <AnimateIn delay={0.26} direction="up">
              <div className="pl-cta__trust">
                {["Free product demo", "Implementation guidance", "Dedicated onboarding"].map((t, i) => (
                  <div key={i} className="pl-cta__trust-item">
                    {(() => { const Icon = Icons["CheckCircle2"]; return Icon ? <Icon strokeWidth={1.5} className="pl-cta__trust-icon" /> : null; })()}
                    {t}
                  </div>
                ))}
              </div>
            </AnimateIn>
          </div>
        </section>

      </main>
      <Footer />
    </div>
  );
}
