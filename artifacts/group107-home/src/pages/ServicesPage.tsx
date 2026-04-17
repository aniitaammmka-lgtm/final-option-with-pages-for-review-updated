import Nav from "@/components/blocks/Nav";
import Footer from "@/components/blocks/Footer";
import AnimateIn from "@/components/AnimateIn";
import { Icons } from "@/lib/icons";

const ArrowRight = Icons.ArrowRight;
const ArrowUpRight = Icons.ArrowUpRight;

const serviceCategories = [
  {
    id: "talents",
    icon: "Users",
    label: "Talents",
    title: "Talents",
    body: "Access top-tier global talent and scale your team quickly with full operational support.",
    items: ["Team Expertise", "Recruitment as a Service"],
  },
  {
    id: "development",
    icon: "Code2",
    label: "Development Services",
    title: "Development Services",
    body: "We build scalable, high-performance digital products — from websites to enterprise systems.",
    items: ["Web Development", "Software Development", "Mobile Development", "Product Discovery"],
  },
  {
    id: "digital",
    icon: "BarChart2",
    label: "Group 107 Digital",
    title: "Group 107 Digital",
    body: "We combine marketing, data, and technology to help businesses acquire, convert, and retain customers.",
    items: ["Marketing", "SDR", "Growth Systems"],
  },
  {
    id: "devops",
    icon: "Cloud",
    label: "Infrastructure & DevOps",
    title: "Infrastructure & DevOps Solutions",
    body: "We design and manage infrastructure that ensures performance, scalability, and reliability.",
    items: ["DevOps", "Cloud Solutions", "IT and Infrastructure"],
  },
  {
    id: "accessibility",
    icon: "Accessibility",
    label: "Accessibility",
    title: "Accessibility",
    body: "We ensure digital products are accessible, compliant, and usable for all users.",
    items: ["WCAG Compliance", "Accessible Design", "Audit & Remediation"],
  },
  {
    id: "fintech",
    icon: "TrendingUp",
    label: "Fintech",
    title: "Fintech",
    body: "Specialized solutions for financial institutions, including integrations and advanced systems.",
    items: ["Bank Integrations", "Financial Systems", "Compliance Infrastructure"],
  },
  {
    id: "nextai",
    icon: "Cpu",
    label: "Next AI",
    title: "Next AI",
    body: "AI-focused solutions designed to support automation, decision-making, and next-generation workflows.",
    items: ["AI-Driven Solutions", "Automation", "Intelligent Workflows"],
  },
];

const combinations = [
  { left: "Development", right: "DevOps", desc: "Ship faster with integrated CI/CD and infrastructure." },
  { left: "Accessibility", right: "Web Development", desc: "Build inclusive, compliant digital experiences from day one." },
  { left: "Fintech", right: "Data", desc: "Power financial workflows with real-time data intelligence." },
];

const industries = ["Finance", "Government", "SaaS", "Healthcare", "Media"];

export default function ServicesPage() {
  return (
    <div className="page">
      <Nav />
      <main>
        {/* ── Hero ─────────────────────────── */}
        <section className="sp-hero">
          <div className="sp-hero__inner">
            <AnimateIn delay={0} direction="up">
              <div className="sp-hero__label">Services / Solutions</div>
            </AnimateIn>
            <AnimateIn delay={0.08} direction="up">
              <h1 className="sp-hero__title">
                All Your Technology Needs—<br />One Partner
              </h1>
            </AnimateIn>
            <AnimateIn delay={0.16} direction="up">
              <p className="sp-hero__sub">
                From top-tier talent to development, AI, DevOps, and accessibility — Group 107 delivers complete, scalable solutions tailored to your business.
              </p>
            </AnimateIn>
            <AnimateIn delay={0.24} direction="up">
              <div className="sp-hero__actions">
                <a href="#categories" className="sp-hero__cta sp-hero__cta--primary">
                  Explore Services <ArrowRight className="sp-hero__cta-icon" />
                </a>
                <a href="#contact-cta" className="sp-hero__cta sp-hero__cta--secondary">
                  Talk to an Expert <ArrowUpRight className="sp-hero__cta-icon" />
                </a>
              </div>
            </AnimateIn>
          </div>
        </section>

        {/* ── Category Nav ─────────────────── */}
        <section id="categories" className="sp-cats">
          <div className="sp-cats__inner">
            <AnimateIn delay={0} direction="up">
              <div className="sp-cats__label">Navigate by Need</div>
            </AnimateIn>
            <AnimateIn delay={0.06} direction="up">
              <h2 className="sp-cats__title">Explore Our Solutions</h2>
            </AnimateIn>
            <AnimateIn delay={0.1} direction="up">
              <div className="sp-cats__grid">
                {serviceCategories.map((cat) => {
                  const Icon = Icons[cat.icon as keyof typeof Icons];
                  return (
                    <a key={cat.id} href={`#${cat.id}`} className="sp-cats__card">
                      <div className="sp-cats__card-icon">
                        {Icon && <Icon strokeWidth={1.5} />}
                      </div>
                      <span className="sp-cats__card-label">{cat.label}</span>
                      <ArrowRight className="sp-cats__card-arrow" />
                    </a>
                  );
                })}
              </div>
            </AnimateIn>
          </div>
        </section>

        {/* ── Detailed Sections ────────────── */}
        {serviceCategories.map((cat, idx) => {
          const Icon = Icons[cat.icon as keyof typeof Icons];
          const isEven = idx % 2 === 0;
          return (
            <section key={cat.id} id={cat.id} className={`sp-detail ${isEven ? "sp-detail--light" : "sp-detail--dark"}`}>
              <div className="sp-detail__inner">
                <AnimateIn delay={0} direction={isEven ? "left" : "right"}>
                  <div className="sp-detail__meta">
                    <div className="sp-detail__icon">
                      {Icon && <Icon strokeWidth={1.5} />}
                    </div>
                    <div className="sp-detail__num">0{idx + 1}</div>
                  </div>
                </AnimateIn>
                <AnimateIn delay={0.08} direction="up">
                  <div className="sp-detail__content">
                    <h2 className="sp-detail__title">{cat.title}</h2>
                    <p className="sp-detail__body">{cat.body}</p>
                    <ul className="sp-detail__list">
                      {cat.items.map((item, i) => (
                        <li key={i} className="sp-detail__list-item">
                          <span className="sp-detail__list-dot" />
                          {item}
                        </li>
                      ))}
                    </ul>
                    <a href="#contact-cta" className="sp-detail__cta">
                      Learn more <ArrowRight className="sp-detail__cta-icon" />
                    </a>
                  </div>
                </AnimateIn>
              </div>
            </section>
          );
        })}

        {/* ── Cross-Solution Section ────────── */}
        <section className="sp-cross">
          <div className="sp-cross__inner">
            <AnimateIn delay={0} direction="up">
              <div className="sp-cross__label">Unified Ecosystem</div>
            </AnimateIn>
            <AnimateIn delay={0.08} direction="up">
              <h2 className="sp-cross__title">More Than Services —<br />A Unified Technology Ecosystem</h2>
            </AnimateIn>
            <AnimateIn delay={0.12} direction="up">
              <p className="sp-cross__body">Combine multiple services into one seamless delivery model designed around your business.</p>
            </AnimateIn>
            <div className="sp-cross__grid">
              {combinations.map((combo, i) => (
                <AnimateIn key={i} delay={0.1 * (i + 1)} direction="up">
                  <div className="sp-cross__card">
                    <div className="sp-cross__pill">{combo.left}</div>
                    <span className="sp-cross__plus">+</span>
                    <div className="sp-cross__pill">{combo.right}</div>
                    <p className="sp-cross__card-desc">{combo.desc}</p>
                  </div>
                </AnimateIn>
              ))}
            </div>
          </div>
        </section>

        {/* ── Industries ───────────────────── */}
        <section className="sp-industries">
          <div className="sp-industries__inner">
            <AnimateIn delay={0} direction="up">
              <div className="sp-industries__label">Sector Experience</div>
            </AnimateIn>
            <AnimateIn delay={0.08} direction="up">
              <h2 className="sp-industries__title">Built for Complex Industries</h2>
            </AnimateIn>
            <AnimateIn delay={0.12} direction="up">
              <div className="sp-industries__list">
                {industries.map((ind, i) => (
                  <div key={i} className="sp-industries__item">
                    <span className="sp-industries__item-num">0{i + 1}</span>
                    <span className="sp-industries__item-name">{ind}</span>
                  </div>
                ))}
              </div>
            </AnimateIn>
          </div>
        </section>

        {/* ── Final CTA ────────────────────── */}
        <section id="contact-cta" className="sp-cta">
          <div className="sp-cta__grain" aria-hidden="true" />
          <div className="sp-cta__glow" aria-hidden="true" />
          <div className="sp-cta__inner">
            <AnimateIn delay={0} direction="up">
              <div className="sp-cta__label">Let's Connect</div>
            </AnimateIn>
            <AnimateIn delay={0.08} direction="up">
              <h2 className="sp-cta__title">Not Sure Where to Start?</h2>
            </AnimateIn>
            <AnimateIn delay={0.14} direction="up">
              <p className="sp-cta__sub">We'll help define the right solution for your business.</p>
            </AnimateIn>
            <AnimateIn delay={0.2} direction="up">
              <div className="sp-cta__actions">
                <a href="#" className="sp-cta__btn sp-cta__btn--primary">
                  Book a Consultation <ArrowRight className="sp-cta__btn-icon" />
                </a>
                <a href="#" className="sp-cta__btn sp-cta__btn--secondary">
                  Contact Us <ArrowUpRight className="sp-cta__btn-icon" />
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
