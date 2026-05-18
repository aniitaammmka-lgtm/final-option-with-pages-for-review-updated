import Nav from "@/components/blocks/Nav";
import Footer from "@/components/blocks/Footer";
import Breadcrumbs from "@/components/Breadcrumbs";
import AnimateIn from "@/components/AnimateIn";
import { Icons } from "@/lib/icons";

const ArrowRight = Icons.ArrowRight;
const ArrowUpRight = Icons.ArrowUpRight;
const CheckCircle2 = Icons.CheckCircle2;

const expertiseAreas = [
  { icon: "Code2",        title: "Software Development",          desc: "Custom web, mobile, and enterprise software built for performance and scale." },
  { icon: "BrainCircuit", title: "AI Integrations & Automation",  desc: "Intelligent workflows, LLM integrations, and AI-driven product features." },
  { icon: "Server",       title: "DevOps & Cloud Infrastructure", desc: "CI/CD pipelines, cloud migrations, and resilient infrastructure at any scale." },
  { icon: "Shield",       title: "Cybersecurity & MDR",          desc: "Managed detection & response, penetration testing, and compliance frameworks." },
  { icon: "Database",     title: "Data Engineering",             desc: "Data pipelines, warehouses, analytics platforms, and real-time processing." },
  { icon: "BarChart",     title: "Digital Growth & SDR",         desc: "Performance marketing, outbound sales development, and growth systems." },
  { icon: "Lightbulb",    title: "Tech Consultancy",             desc: "Architecture reviews, technology strategy, and digital transformation advisory." },
  { icon: "UserCheck",    title: "Recruitment & Dedicated Teams", desc: "End-to-end talent sourcing, screening, onboarding, and team management." },
];

const supportHighlights = [
  { icon: "Scaling",     title: "Flexible Scaling Models",      desc: "Ramp teams up or down based on delivery phases and business cycles." },
  { icon: "Network",     title: "Cross-Functional Expertise",   desc: "One partner spanning development, design, data, ops, and marketing." },
  { icon: "Zap",         title: "Fast Onboarding",              desc: "Talent ready to contribute from day one, with full operational support." },
  { icon: "Users",       title: "Dedicated Management",         desc: "Dedicated account management and HR support for your remote team." },
  { icon: "Workflow",    title: "End-to-End Delivery",          desc: "Full ownership of execution from discovery through deployment." },
];

const workflowSteps = [
  { num: "01", title: "Discovery & Requirements",     desc: "We start by deeply understanding your product, team, and business objectives." },
  { num: "02", title: "Team Matching",                desc: "We match the right specialists from our 88,000+ talent pool to your exact needs." },
  { num: "03", title: "Execution & Delivery",         desc: "Your embedded team executes with full transparency, regular reporting, and agile delivery." },
  { num: "04", title: "Scaling & Long-Term Support",  desc: "We grow with you — scaling resources, adapting scope, and ensuring continuity." },
];

const industries = [
  { icon: "TrendingUp",     title: "Finance & Banking",         desc: "Fintech, trading, compliance, and banking platforms." },
  { icon: "Heart",          title: "Healthcare",                desc: "Medical software, patient platforms, and health compliance." },
  { icon: "Building2",      title: "Government",                desc: "Public sector digital transformation and civic tech." },
  { icon: "Radio",          title: "Media & Entertainment",     desc: "Content platforms, streaming, and AI personalisation." },
  { icon: "Globe",          title: "Tourism & Hospitality",     desc: "Booking systems, travel platforms, and guest experiences." },
  { icon: "Package",        title: "Logistics & Supply Chain",  desc: "Tracking systems, warehouse software, and route optimisation." },
  { icon: "Cpu",            title: "Technology & Digital",      desc: "SaaS platforms, developer tools, and digital products." },
];

const whyBullets = [
  "Full transparency across all engagements",
  "Fast access to specialists in any domain",
  "High employee engagement and retention",
  "Dedicated onsite and remote team management",
  "Flexible scaling to match your business rhythm",
  "Public company reliability and accountability",
];

const heroIcons = ["Code2", "BrainCircuit", "Shield", "Server", "Database", "BarChart"];

export default function TeamExpertisePage() {
  return (
    <div className="page">
      <Nav />
      <Breadcrumbs items={[{ label: "Home", url: "/" }, { label: "Team Expertise" }]} />
      <main>

        {/* ── Hero ─────────────────────────── */}
        <section className="te-hero" data-block="hero">
          <div className="te-hero__inner" data-element="inner">
            <div className="te-hero__content" data-element="content">
              <AnimateIn delay={0} direction="up">
                <div className="te-hero__eyebrow" data-field="eyebrow">Expertise</div>
              </AnimateIn>
              <AnimateIn delay={0.08} direction="up">
                <h1 className="te-hero__title" data-field="title">
                  Team Expertise That<br />Moves Products Forward
                </h1>
              </AnimateIn>
              <AnimateIn delay={0.14} direction="up">
                <p className="te-hero__sub" data-field="sub">
                  From software development and AI to DevOps, cybersecurity, data, and digital growth.
                </p>
              </AnimateIn>
              <AnimateIn delay={0.2} direction="up">
                <div className="te-hero__actions" data-element="actions">
                  <a href="/contact-us" className="te-hero__btn te-hero__btn--primary" data-field="cta">
                    Talk to Our Team <ArrowRight className="te-hero__btn-icon" />
                  </a>
                  <a href="/our-work" className="te-hero__btn te-hero__btn--secondary" data-field="cta-sec">
                    See Our Work <ArrowUpRight className="te-hero__btn-icon" />
                  </a>
                </div>
              </AnimateIn>
            </div>

            <AnimateIn delay={0.1} direction="fade" className="te-hero__visual" data-element="visual">
              <div className="te-hero__expertise-card" data-element="expertise-card">
                <div className="te-hero__expertise-label" data-field="label">Areas of Expertise</div>
                <div className="te-hero__expertise-icons" data-element="expertise-icons">
                  {heroIcons.map((ic, i) => {
                    const Icon = Icons[ic];
                    return Icon ? (
                      <div key={i} className="te-hero__expertise-icon-wrap" data-element="icon-wrap">
                        <Icon className="te-hero__expertise-icon" strokeWidth={1.25} />
                      </div>
                    ) : null;
                  })}
                </div>
                <div className="te-hero__expertise-divider" aria-hidden="true" />
                <div className="te-hero__expertise-tags" data-element="tags">
                  {["Software Dev", "AI / ML", "DevOps", "Security", "Data", "Growth"].map((t) => (
                    <span key={t} className="te-hero__expertise-tag" data-field="tag">{t}</span>
                  ))}
                </div>
              </div>
            </AnimateIn>
          </div>
        </section>

        {/* ── Overview ─────────────────────── */}
        <section className="te-overview" data-block="overview">
          <div className="te-overview__inner" data-element="inner">
            <AnimateIn delay={0} direction="up">
              <div className="te-overview__label" data-field="label">One Partner</div>
            </AnimateIn>
            <AnimateIn delay={0.06} direction="up">
              <h2 className="te-overview__title" data-field="title">One Partner. Multiple Areas of Expertise.</h2>
            </AnimateIn>
            <AnimateIn delay={0.12} direction="up">
              <p className="te-overview__body" data-field="body">
                Group107 combines technical, product, creative, operational, and business expertise under one roof — giving you a single trusted partner for your entire technology journey.
              </p>
            </AnimateIn>
          </div>
        </section>

        {/* ── Expertise Areas ───────────────── */}
        <section className="te-expertise" data-block="expertise-areas">
          <div className="te-expertise__inner" data-element="inner">
            <div className="te-expertise__head" data-element="head">
              <AnimateIn delay={0} direction="up">
                <div className="te-expertise__label" data-field="label">What We Do Best</div>
              </AnimateIn>
              <AnimateIn delay={0.06} direction="up">
                <h2 className="te-expertise__title" data-field="title">Our Areas of Expertise</h2>
              </AnimateIn>
            </div>
            <div className="te-expertise__grid" data-element="grid">
              {expertiseAreas.map((area, i) => {
                const Icon = Icons[area.icon];
                return (
                  <AnimateIn key={i} delay={0.06 * i} direction="up">
                    <div className="te-expertise__card" data-element="card">
                      <div className="te-expertise__card-icon-wrap" data-element="icon-wrap">
                        {Icon && <Icon className="te-expertise__card-icon" strokeWidth={1.25} />}
                      </div>
                      <h3 className="te-expertise__card-title" data-field="title">{area.title}</h3>
                      <p className="te-expertise__card-desc" data-field="desc">{area.desc}</p>
                      <div className="te-expertise__card-cta" data-field="cta">
                        Explore <ArrowRight className="te-expertise__card-cta-icon" />
                      </div>
                    </div>
                  </AnimateIn>
                );
              })}
            </div>
          </div>
        </section>

        {/* ── Support ───────────────────────── */}
        <section className="te-support" data-block="support">
          <div className="te-support__inner" data-element="inner">
            <div className="te-support__head" data-element="head">
              <AnimateIn delay={0} direction="up">
                <div className="te-support__label" data-field="label">How We Work</div>
              </AnimateIn>
              <AnimateIn delay={0.06} direction="up">
                <h2 className="te-support__title" data-field="title">Built Around Real Business Needs</h2>
              </AnimateIn>
            </div>
            <div className="te-support__grid" data-element="grid">
              {supportHighlights.map((item, i) => {
                const Icon = Icons[item.icon];
                return (
                  <AnimateIn key={i} delay={0.08 * i} direction="up">
                    <div className="te-support__card" data-element="card">
                      <div className="te-support__card-icon-wrap" data-element="icon-wrap">
                        {Icon && <Icon className="te-support__card-icon" strokeWidth={1.5} />}
                      </div>
                      <h3 className="te-support__card-title" data-field="title">{item.title}</h3>
                      <p className="te-support__card-desc" data-field="desc">{item.desc}</p>
                    </div>
                  </AnimateIn>
                );
              })}
            </div>
          </div>
        </section>

        {/* ── Workflow ──────────────────────── */}
        <section className="te-workflow" data-block="workflow">
          <div className="te-workflow__inner" data-element="inner">
            <div className="te-workflow__head" data-element="head">
              <AnimateIn delay={0} direction="up">
                <div className="te-workflow__label" data-field="label">Our Process</div>
              </AnimateIn>
              <AnimateIn delay={0.06} direction="up">
                <h2 className="te-workflow__title" data-field="title">How We Work With Clients</h2>
              </AnimateIn>
            </div>
            <div className="te-workflow__steps" data-element="steps">
              {workflowSteps.map((step, i) => (
                <AnimateIn key={i} delay={0.1 * i} direction="up">
                  <div className="te-workflow__step" data-element="step">
                    <div className="te-workflow__step-num" data-field="num">{step.num}</div>
                    <div className="te-workflow__step-line" aria-hidden="true" />
                    <div className="te-workflow__step-content" data-element="content">
                      <h3 className="te-workflow__step-title" data-field="title">{step.title}</h3>
                      <p className="te-workflow__step-desc" data-field="desc">{step.desc}</p>
                    </div>
                  </div>
                </AnimateIn>
              ))}
            </div>
          </div>
        </section>

        {/* ── Industries ───────────────────── */}
        <section className="te-industries" data-block="industries">
          <div className="te-industries__inner" data-element="inner">
            <div className="te-industries__head" data-element="head">
              <AnimateIn delay={0} direction="up">
                <div className="te-industries__label" data-field="label">Sector Experience</div>
              </AnimateIn>
              <AnimateIn delay={0.06} direction="up">
                <h2 className="te-industries__title" data-field="title">Experience Across Multiple Industries</h2>
              </AnimateIn>
              <AnimateIn delay={0.12} direction="up">
                <p className="te-industries__sub" data-field="sub">
                  Trusted by startups, enterprises, and publicly traded companies worldwide.
                </p>
              </AnimateIn>
            </div>
            <div className="te-industries__grid" data-element="grid">
              {industries.map((ind, i) => {
                const Icon = Icons[ind.icon];
                return (
                  <AnimateIn key={i} delay={0.07 * i} direction="up">
                    <div className="te-industries__card" data-element="card">
                      <div className="te-industries__card-icon-wrap" data-element="icon-wrap">
                        {Icon && <Icon className="te-industries__card-icon" strokeWidth={1.5} />}
                      </div>
                      <h3 className="te-industries__card-title" data-field="title">{ind.title}</h3>
                      <p className="te-industries__card-desc" data-field="desc">{ind.desc}</p>
                    </div>
                  </AnimateIn>
                );
              })}
            </div>
          </div>
        </section>

        {/* ── Why Group107 ─────────────────── */}
        <section className="te-why" data-block="why">
          <div className="te-why__inner" data-element="inner">
            <div className="te-why__head" data-element="head">
              <AnimateIn delay={0} direction="up">
                <div className="te-why__label" data-field="label">Our Commitment</div>
              </AnimateIn>
              <AnimateIn delay={0.06} direction="up">
                <h2 className="te-why__title" data-field="title">Why Companies Work With Our Experts</h2>
              </AnimateIn>
            </div>
            <div className="te-why__bullets" data-element="bullets">
              {whyBullets.map((b, i) => (
                <AnimateIn key={i} delay={0.06 * i} direction="up">
                  <div className="te-why__bullet" data-element="bullet">
                    {CheckCircle2 && <CheckCircle2 className="te-why__bullet-icon" strokeWidth={1.5} />}
                    <span data-field="text">{b}</span>
                  </div>
                </AnimateIn>
              ))}
            </div>
          </div>
        </section>

        {/* ── Final CTA ────────────────────── */}
        <section className="te-cta" data-block="cta">
          <div className="te-cta__grain" aria-hidden="true" />
          <div className="te-cta__inner" data-element="inner">
            <AnimateIn delay={0} direction="up">
              <h2 className="te-cta__title" data-field="title">Need the Right Experts for Your Next Project?</h2>
            </AnimateIn>
            <AnimateIn delay={0.08} direction="up">
              <p className="te-cta__sub" data-field="sub">
                Let's discuss your goals and match the right Group107 expertise to your product, team, or business challenge.
              </p>
            </AnimateIn>
            <AnimateIn delay={0.14} direction="up">
              <div className="te-cta__actions" data-element="actions">
                <a href="/contact-us" className="te-cta__btn te-cta__btn--primary" data-field="cta">
                  Contact Us <ArrowRight className="te-cta__btn-icon" />
                </a>
                <a href="/talents" className="te-cta__btn te-cta__btn--secondary" data-field="cta-sec">
                  Explore Talents <ArrowUpRight className="te-cta__btn-icon" />
                </a>
              </div>
            </AnimateIn>
          </div>
        </section>

      </main>
      <Footer />
    </div>
  );
}
