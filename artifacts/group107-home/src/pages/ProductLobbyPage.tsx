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
    points: [
      "Automated WCAG & PDF/UA compliance",
      "AI-powered remediation at scale",
      "Seamless integration with existing workflows",
      "Audit trails and compliance reporting",
    ],
  },
  {
    id: "global-docs",
    tag: "Translation",
    title: "Global Docs",
    subheadline: "AI-powered document translation",
    description: "Expand your reach with intelligent document translation that preserves formatting, context, and tone across 100+ languages.",
    image: "/project-3.png",
    points: [
      "100+ language support",
      "Format-preserving translation",
      "Context-aware AI models",
      "Multi-team collaboration workflows",
    ],
  },
  {
    id: "summa",
    tag: "Automation",
    title: "Summa",
    subheadline: "Smarter document and workflow intelligence",
    description: "Summa extracts, classifies, and routes document intelligence to the right people and systems — eliminating manual effort from document-heavy operations.",
    image: "/project-2.png",
    points: [
      "Intelligent document classification",
      "Automated data extraction",
      "Workflow routing and orchestration",
      "Enterprise-grade security",
    ],
  },
  {
    id: "levent",
    tag: "Fintech R&D",
    title: "Levent",
    subheadline: "Fintech systems built for scale",
    description: "Levent provides banks, trading platforms, and financial institutions with battle-tested infrastructure and integration layers for modern financial operations.",
    image: "/hero.png",
    points: [
      "Core banking integration layers",
      "Trading system infrastructure",
      "Regulatory compliance modules",
      "Real-time data pipelines",
    ],
  },
];

const whyPoints = [
  { icon: "Zap", title: "Built Around Real Pain Points", desc: "Every product was born from a real operational challenge faced by complex organizations." },
  { icon: "Shield", title: "Enterprise-Grade Security", desc: "All products are built with compliance, security, and auditability at the core." },
  { icon: "Layers", title: "Seamless Integration", desc: "Each product is designed to plug into existing systems without disruption." },
  { icon: "TrendingUp", title: "Proven at Scale", desc: "Trusted by teams across finance, government, and SaaS to handle mission-critical workloads." },
];

const useCases = [
  { sector: "Finance", text: "Automate compliance documentation and regulatory filings with AI precision." },
  { sector: "Government", text: "Ensure public-facing documents meet accessibility mandates at scale." },
  { sector: "Healthcare", text: "Translate and classify medical documents for multi-lingual patient care." },
  { sector: "SaaS", text: "Embed document intelligence directly into your product workflows." },
];

export default function ProductLobbyPage() {
  return (
    <div className="page">
      <Nav />
      <main>
        {/* ── Hero ────────────────────────── */}
        <section className="pl-hero">
          <div className="pl-hero__inner">
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
        </section>

        {/* ── Intro ───────────────────────── */}
        <section className="pl-intro">
          <div className="pl-intro__inner">
            <AnimateIn delay={0} direction="up">
              <div className="pl-intro__label">Our Products</div>
            </AnimateIn>
            <AnimateIn delay={0.08} direction="up">
              <h2 className="pl-intro__title">More Than Services —<br />Purpose-Built Products</h2>
            </AnimateIn>
            <AnimateIn delay={0.14} direction="up">
              <p className="pl-intro__body">
                Beyond client engagements, Group 107 builds and maintains proprietary platforms designed to solve the document, workflow, and financial challenges facing modern enterprises. These aren't generic tools — they're products refined through real-world deployments across regulated industries.
              </p>
            </AnimateIn>
          </div>
        </section>

        {/* ── Products Grid ───────────────── */}
        <section id="products-grid" className="pl-grid-section">
          <div className="pl-grid-section__inner">
            <div className="pl-grid">
              {products.map((p, i) => (
                <AnimateIn key={p.id} delay={0.08 * i} direction="up">
                  <a href={`#${p.id}`} className="pl-card">
                    <div className="pl-card__img-wrap">
                      <img src={p.image} alt={p.title} className="pl-card__img" />
                      <div className="pl-card__overlay" />
                      <span className="pl-card__tag">{p.tag}</span>
                    </div>
                    <div className="pl-card__body">
                      <h3 className="pl-card__title">{p.title}</h3>
                      <p className="pl-card__sub">{p.subheadline}</p>
                      <div className="pl-card__cta">
                        View Product <ArrowRight className="pl-card__cta-icon" />
                      </div>
                    </div>
                  </a>
                </AnimateIn>
              ))}
            </div>
          </div>
        </section>

        {/* ── Product Sections ────────────── */}
        {products.map((product, idx) => {
          const isEven = idx % 2 === 0;
          return (
            <section key={product.id} id={product.id} className={`pl-product ${isEven ? "pl-product--light" : "pl-product--dark"}`}>
              <div className="pl-product__inner">
                <AnimateIn delay={0} direction={isEven ? "left" : "right"} className="pl-product__img-wrap">
                  <img src={product.image} alt={product.title} className="pl-product__img" />
                  <span className="pl-product__img-tag">{product.tag}</span>
                </AnimateIn>
                <AnimateIn delay={0.1} direction="up" className="pl-product__content">
                  <div className="pl-product__num">0{idx + 1}</div>
                  <h2 className="pl-product__title">{product.title}</h2>
                  <p className="pl-product__sub">{product.subheadline}</p>
                  <p className="pl-product__desc">{product.description}</p>
                  <ul className="pl-product__points">
                    {product.points.map((pt, i) => (
                      <li key={i} className="pl-product__point">
                        <span className="pl-product__point-dot" />
                        {pt}
                      </li>
                    ))}
                  </ul>
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
          <div className="pl-why__inner">
            <AnimateIn delay={0} direction="up">
              <div className="pl-why__label">Why Group 107 Products</div>
            </AnimateIn>
            <AnimateIn delay={0.08} direction="up">
              <h2 className="pl-why__title">Built to Solve Real Operational Challenges</h2>
            </AnimateIn>
            <div className="pl-why__grid">
              {whyPoints.map((pt, i) => {
                const Icon = Icons[pt.icon as keyof typeof Icons];
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

        {/* ── Products + Services ─────────── */}
        <section className="pl-services-bridge">
          <div className="pl-services-bridge__inner">
            <AnimateIn delay={0} direction="up">
              <div className="pl-services-bridge__label">Ecosystem</div>
            </AnimateIn>
            <AnimateIn delay={0.08} direction="up">
              <h2 className="pl-services-bridge__title">Products That Don't Stand Alone</h2>
            </AnimateIn>
            <AnimateIn delay={0.14} direction="up">
              <p className="pl-services-bridge__body">
                Every Group 107 product is backed by our full suite of services — from implementation and integration to ongoing support. Products and services work together to deliver complete solutions.
              </p>
            </AnimateIn>
            <AnimateIn delay={0.2} direction="up">
              <a href="/services" className="pl-services-bridge__cta">
                See Our Solutions <ArrowRight className="pl-services-bridge__cta-icon" />
              </a>
            </AnimateIn>
          </div>
        </section>

        {/* ── Use Cases ───────────────────── */}
        <section className="pl-usecases">
          <div className="pl-usecases__inner">
            <AnimateIn delay={0} direction="up">
              <div className="pl-usecases__label">Use Cases</div>
            </AnimateIn>
            <AnimateIn delay={0.08} direction="up">
              <h2 className="pl-usecases__title">Built for Organizations That Need More Than Generic Tools</h2>
            </AnimateIn>
            <div className="pl-usecases__grid">
              {useCases.map((uc, i) => (
                <AnimateIn key={i} delay={0.08 * (i + 1)} direction="up">
                  <div className="pl-usecases__card">
                    <div className="pl-usecases__card-sector">{uc.sector}</div>
                    <p className="pl-usecases__card-text">{uc.text}</p>
                  </div>
                </AnimateIn>
              ))}
            </div>
          </div>
        </section>

        {/* ── Credibility Block ───────────── */}
        <section className="pl-credibility">
          <div className="pl-credibility__inner">
            <AnimateIn delay={0} direction="up">
              <div className="pl-credibility__label">Trust</div>
            </AnimateIn>
            <AnimateIn delay={0.08} direction="up">
              <h2 className="pl-credibility__title">Built by a Team Trusted Across Industries</h2>
            </AnimateIn>
            <AnimateIn delay={0.14} direction="up">
              <div className="pl-credibility__stats">
                <div className="pl-credibility__stat">
                  <span className="pl-credibility__stat-value">88K+</span>
                  <span className="pl-credibility__stat-label">Talent Pool</span>
                </div>
                <div className="pl-credibility__stat-divider" />
                <div className="pl-credibility__stat">
                  <span className="pl-credibility__stat-value">12+</span>
                  <span className="pl-credibility__stat-label">Industries Served</span>
                </div>
                <div className="pl-credibility__stat-divider" />
                <div className="pl-credibility__stat">
                  <span className="pl-credibility__stat-value">4</span>
                  <span className="pl-credibility__stat-label">Proprietary Products</span>
                </div>
                <div className="pl-credibility__stat-divider" />
                <div className="pl-credibility__stat">
                  <span className="pl-credibility__stat-value">100%</span>
                  <span className="pl-credibility__stat-label">Compliance Focus</span>
                </div>
              </div>
            </AnimateIn>
          </div>
        </section>

        {/* ── Final CTA ────────────────────── */}
        <section id="pl-contact" className="pl-cta">
          <div className="pl-cta__grain" aria-hidden="true" />
          <div className="pl-cta__glow" aria-hidden="true" />
          <div className="pl-cta__inner">
            <AnimateIn delay={0} direction="up">
              <div className="pl-cta__label">Get Started</div>
            </AnimateIn>
            <AnimateIn delay={0.08} direction="up">
              <h2 className="pl-cta__title">Need Help Choosing the Right Product?</h2>
            </AnimateIn>
            <AnimateIn delay={0.14} direction="up">
              <p className="pl-cta__sub">Our team will walk you through each product and find the best fit for your needs.</p>
            </AnimateIn>
            <AnimateIn delay={0.2} direction="up">
              <a href="#" className="pl-cta__btn">
                Contact Us <ArrowRight className="pl-cta__btn-icon" />
              </a>
            </AnimateIn>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
