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
    body: "Access top-tier global talent and scale your team quickly with full operational support and global reach.",
    items: [
      { icon: "UserCheck", label: "Team Expertise" },
      { icon: "Briefcase", label: "Recruitment as a Service" },
      { icon: "Globe", label: "Global Talent Pool" },
      { icon: "Scaling", label: "Scalable Resourcing" },
    ],
    image: "/project-3.png",
    accent: "#0a0a0a",
  },
  {
    id: "development",
    icon: "Code2",
    label: "Development Services",
    title: "Development Services",
    body: "We build scalable, high-performance digital products — from websites to enterprise-grade systems.",
    items: [
      { icon: "Globe", label: "Web Development" },
      { icon: "Code2", label: "Software Development" },
      { icon: "Smartphone", label: "Mobile Development" },
      { icon: "Lightbulb", label: "Product Discovery" },
    ],
    image: "/project-1.png",
    accent: "#111",
  },
  {
    id: "digital",
    icon: "BarChart2",
    label: "Group 107 Digital",
    title: "Group 107 Digital",
    body: "We combine marketing, data, and technology to help businesses acquire, convert, and retain customers at scale.",
    items: [
      { icon: "Target", label: "Performance Marketing" },
      { icon: "Radio", label: "SDR & Outreach" },
      { icon: "Activity", label: "Growth Systems" },
      { icon: "LineChart", label: "Analytics & Data" },
    ],
    image: "/project-2.png",
    accent: "#0d0d0d",
  },
  {
    id: "devops",
    icon: "Server",
    label: "Infrastructure & DevOps",
    title: "Infrastructure & DevOps Solutions",
    body: "We design and manage infrastructure that ensures performance, scalability, and reliability at every layer.",
    items: [
      { icon: "GitBranch", label: "DevOps & CI/CD" },
      { icon: "Cloud", label: "Cloud Solutions" },
      { icon: "Server", label: "IT Infrastructure" },
      { icon: "Shield", label: "Security & Compliance" },
    ],
    image: "/hero.png",
    accent: "#0a0a0a",
  },
  {
    id: "accessibility",
    icon: "Accessibility",
    label: "Accessibility",
    title: "Accessibility",
    body: "We ensure digital products are accessible, compliant, and usable for every person across every device.",
    items: [
      { icon: "FileCheck", label: "WCAG Compliance" },
      { icon: "ScanLine", label: "Audit & Remediation" },
      { icon: "MonitorSmartphone", label: "Accessible Design" },
      { icon: "CheckCircle2", label: "Ongoing Monitoring" },
    ],
    image: "/project-1.png",
    accent: "#111",
  },
  {
    id: "fintech",
    icon: "TrendingUp",
    label: "Fintech",
    title: "Fintech",
    body: "Specialized solutions for financial institutions — from bank integrations to advanced compliance systems.",
    items: [
      { icon: "Link", label: "Bank Integrations" },
      { icon: "Lock", label: "Financial Systems" },
      { icon: "Database", label: "Data Infrastructure" },
      { icon: "Fingerprint", label: "Compliance Modules" },
    ],
    image: "/project-2.png",
    accent: "#0d0d0d",
  },
  {
    id: "nextai",
    icon: "BrainCircuit",
    label: "Next AI",
    title: "Next AI",
    body: "AI-focused solutions designed to support automation, decision-making, and next-generation intelligent workflows.",
    items: [
      { icon: "Sparkles", label: "AI-Driven Solutions" },
      { icon: "Workflow", label: "Automation" },
      { icon: "Network", label: "Intelligent Workflows" },
      { icon: "Cpu", label: "Model Integration" },
    ],
    image: "/project-3.png",
    accent: "#0a0a0a",
  },
];

const combinations = [
  {
    services: ["Development", "DevOps"],
    desc: "Ship faster with integrated CI/CD pipelines and cloud infrastructure from day one.",
    icon: "GitMerge",
  },
  {
    services: ["Accessibility", "Web Dev"],
    desc: "Build inclusive, compliant digital experiences with accessibility baked in at the design stage.",
    icon: "MonitorSmartphone",
  },
  {
    services: ["Fintech", "Next AI"],
    desc: "Power financial workflows with real-time AI intelligence and automated compliance checks.",
    icon: "BrainCircuit",
  },
  {
    services: ["Talents", "DevOps"],
    desc: "Scale your engineering team instantly with embedded DevOps expertise ready to deploy.",
    icon: "Users",
  },
];

const industries = [
  { name: "Finance", icon: "TrendingUp", desc: "Banks, trading, fintech" },
  { name: "Government", icon: "Building2", desc: "Public sector & civic" },
  { name: "SaaS", icon: "LayoutDashboard", desc: "Platforms & products" },
  { name: "Healthcare", icon: "Heart", desc: "Medical & compliance" },
  { name: "Media", icon: "Radio", desc: "Content & publishing" },
];

export default function ServicesPage() {
  return (
    <div className="page">
      <Nav />
      <main>

        {/* ── Hero ─────────────────────────── */}
        <section className="sp-hero">
          <div className="sp-hero__bg-grid" aria-hidden="true" />
          <div className="sp-hero__orb sp-hero__orb--1" aria-hidden="true" />
          <div className="sp-hero__orb sp-hero__orb--2" aria-hidden="true" />

          <div className="sp-hero__floating-icons" aria-hidden="true">
            {["Code2", "Cloud", "BrainCircuit", "Shield", "TrendingUp", "Users", "Accessibility", "Server"].map((ic, i) => {
              const Icon = Icons[ic];
              return Icon ? (
                <div key={i} className={`sp-hero__float-icon sp-hero__float-icon--${i + 1}`}>
                  <Icon strokeWidth={1} />
                </div>
              ) : null;
            })}
          </div>

          <div className="sp-hero__inner">
            <AnimateIn delay={0} direction="up">
              <div className="sp-hero__label">Services / Solutions</div>
            </AnimateIn>
            <AnimateIn delay={0.08} direction="up">
              <h1 className="sp-hero__title">
                All Your Technology<br />Needs — One Partner
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

            <AnimateIn delay={0.3} direction="up" className="sp-hero__stats">
              {[
                { val: "7", label: "Service Areas" },
                { val: "88K+", label: "Talent Pool" },
                { val: "12+", label: "Industries" },
                { val: "700+", label: "Global Clients" },
              ].map((s, i) => (
                <div key={i} className="sp-hero__stat">
                  <span className="sp-hero__stat-val">{s.val}</span>
                  <span className="sp-hero__stat-label">{s.label}</span>
                </div>
              ))}
            </AnimateIn>
          </div>
        </section>

        {/* ── Category Nav ─────────────────── */}
        <section id="categories" className="sp-cats">
          <div className="sp-cats__pattern" aria-hidden="true" />
          <div className="sp-cats__inner">
            <div className="sp-cats__head">
              <AnimateIn delay={0} direction="up">
                <div className="sp-cats__label">Navigate by Need</div>
              </AnimateIn>
              <AnimateIn delay={0.06} direction="up">
                <h2 className="sp-cats__title">Explore Our Solutions</h2>
              </AnimateIn>
            </div>
            <div className="sp-cats__grid">
              {serviceCategories.map((cat, i) => {
                const Icon = Icons[cat.icon];
                return (
                  <AnimateIn key={cat.id} delay={0.05 * i} direction="up">
                    <a href={`#${cat.id}`} className="sp-cats__card">
                      <div className="sp-cats__card-icon-wrap">
                        {Icon && <Icon className="sp-cats__card-icon" strokeWidth={1.5} />}
                      </div>
                      <span className="sp-cats__card-label">{cat.label}</span>
                      <ArrowRight className="sp-cats__card-arrow" />
                    </a>
                  </AnimateIn>
                );
              })}
            </div>
          </div>
        </section>

        {/* ── Detailed Sections ────────────── */}
        {serviceCategories.map((cat, idx) => {
          const CatIcon = Icons[cat.icon];
          const isEven = idx % 2 === 0;
          return (
            <section key={cat.id} id={cat.id} className={`sp-detail ${isEven ? "sp-detail--light" : "sp-detail--muted"}`}>
              <div className="sp-detail__inner">

                {/* Image side */}
                <AnimateIn delay={0} direction={isEven ? "left" : "right"} className={`sp-detail__visual ${isEven ? "" : "sp-detail__visual--reverse"}`}>
                  <div className="sp-detail__img-wrap">
                    <img src={cat.image} alt={cat.title} className="sp-detail__img" />
                    <div className="sp-detail__img-overlay" />
                    <div className="sp-detail__img-badge">
                      {CatIcon && <CatIcon strokeWidth={1.5} className="sp-detail__img-badge-icon" />}
                      <span>{cat.label}</span>
                    </div>
                    <div className="sp-detail__img-num">0{idx + 1}</div>
                  </div>

                  {/* Feature icon pills */}
                  <div className="sp-detail__icon-pills">
                    {cat.items.slice(0, 2).map((item, j) => {
                      const PillIcon = Icons[item.icon];
                      return (
                        <div key={j} className="sp-detail__pill">
                          {PillIcon && <PillIcon strokeWidth={1.5} className="sp-detail__pill-icon" />}
                          <span>{item.label}</span>
                        </div>
                      );
                    })}
                  </div>
                </AnimateIn>

                {/* Content side */}
                <AnimateIn delay={0.1} direction="up" className="sp-detail__content">
                  <div className="sp-detail__content-label">
                    {CatIcon && <CatIcon strokeWidth={1.5} className="sp-detail__content-label-icon" />}
                    <span>0{idx + 1} / 07</span>
                  </div>
                  <h2 className="sp-detail__title">{cat.title}</h2>
                  <p className="sp-detail__body">{cat.body}</p>

                  <div className="sp-detail__items">
                    {cat.items.map((item, j) => {
                      const ItemIcon = Icons[item.icon];
                      return (
                        <div key={j} className="sp-detail__item">
                          <div className="sp-detail__item-icon">
                            {ItemIcon && <ItemIcon strokeWidth={1.5} />}
                          </div>
                          <span className="sp-detail__item-label">{item.label}</span>
                          <ArrowRight className="sp-detail__item-arrow" />
                        </div>
                      );
                    })}
                  </div>

                  <a href="#contact-cta" className="sp-detail__cta">
                    Start a Conversation <ArrowRight className="sp-detail__cta-icon" />
                  </a>
                </AnimateIn>
              </div>
            </section>
          );
        })}

        {/* ── Cross-Solution Section ────────── */}
        <section className="sp-cross">
          <div className="sp-cross__grain" aria-hidden="true" />
          <div className="sp-cross__inner">
            <div className="sp-cross__head">
              <AnimateIn delay={0} direction="up">
                <div className="sp-cross__label">Unified Ecosystem</div>
              </AnimateIn>
              <AnimateIn delay={0.08} direction="up">
                <h2 className="sp-cross__title">More Than Services —<br />A Unified Technology Ecosystem</h2>
              </AnimateIn>
              <AnimateIn delay={0.12} direction="up">
                <p className="sp-cross__body">Combine multiple services into one seamless delivery model. Our integrated approach means your tech stack works as a whole.</p>
              </AnimateIn>
            </div>

            {/* Visual Diagram */}
            <AnimateIn delay={0.16} direction="up" className="sp-cross__diagram">
              <div className="sp-cross__diagram-center">
                <div className="sp-cross__diagram-hub">
                  {(() => { const Icon = Icons["Network"]; return Icon ? <Icon strokeWidth={1} className="sp-cross__diagram-hub-icon" /> : null; })()}
                  <span>Group 107</span>
                </div>
                <div className="sp-cross__diagram-ring">
                  {serviceCategories.slice(0, 6).map((cat, i) => {
                    const Icon = Icons[cat.icon];
                    const angle = (i / 6) * 360;
                    return (
                      <div
                        key={cat.id}
                        className="sp-cross__diagram-node"
                        style={{ "--angle": `${angle}deg` } as React.CSSProperties}
                      >
                        {Icon && <Icon strokeWidth={1.5} />}
                        <span>{cat.label}</span>
                      </div>
                    );
                  })}
                </div>
              </div>
            </AnimateIn>

            <div className="sp-cross__combos">
              {combinations.map((combo, i) => {
                const ComboIcon = Icons[combo.icon];
                return (
                  <AnimateIn key={i} delay={0.08 * (i + 1)} direction="up">
                    <div className="sp-cross__combo">
                      <div className="sp-cross__combo-icon">
                        {ComboIcon && <ComboIcon strokeWidth={1.5} />}
                      </div>
                      <div className="sp-cross__combo-pills">
                        <span className="sp-cross__combo-pill">{combo.services[0]}</span>
                        <span className="sp-cross__combo-plus">+</span>
                        <span className="sp-cross__combo-pill">{combo.services[1]}</span>
                      </div>
                      <p className="sp-cross__combo-desc">{combo.desc}</p>
                    </div>
                  </AnimateIn>
                );
              })}
            </div>
          </div>
        </section>

        {/* ── Industries ───────────────────── */}
        <section className="sp-industries">
          <div className="sp-industries__inner">
            <div className="sp-industries__head">
              <AnimateIn delay={0} direction="up">
                <div className="sp-industries__label">Sector Experience</div>
              </AnimateIn>
              <AnimateIn delay={0.08} direction="up">
                <h2 className="sp-industries__title">Built for Complex Industries</h2>
              </AnimateIn>
              <AnimateIn delay={0.12} direction="up">
                <p className="sp-industries__sub">We understand the regulatory, operational, and technical demands of the sectors we serve.</p>
              </AnimateIn>
            </div>

            <div className="sp-industries__grid">
              {industries.map((ind, i) => {
                const Icon = Icons[ind.icon];
                return (
                  <AnimateIn key={i} delay={0.08 * (i + 1)} direction="up">
                    <div className="sp-industries__card">
                      <div className="sp-industries__card-icon">
                        {Icon && <Icon strokeWidth={1.5} />}
                      </div>
                      <div className="sp-industries__card-body">
                        <div className="sp-industries__card-name">{ind.name}</div>
                        <div className="sp-industries__card-desc">{ind.desc}</div>
                      </div>
                      <ArrowRight className="sp-industries__card-arrow" />
                    </div>
                  </AnimateIn>
                );
              })}
            </div>
          </div>
        </section>

        {/* ── Final CTA ────────────────────── */}
        <section id="contact-cta" className="sp-cta">
          <div className="sp-cta__grain" aria-hidden="true" />
          <div className="sp-cta__glow" aria-hidden="true" />
          <div className="sp-cta__bg-icons" aria-hidden="true">
            {["Code2", "Cloud", "BrainCircuit", "Shield"].map((ic, i) => {
              const Icon = Icons[ic];
              return Icon ? <Icon key={i} className={`sp-cta__bg-icon sp-cta__bg-icon--${i + 1}`} strokeWidth={0.75} /> : null;
            })}
          </div>
          <div className="sp-cta__inner">
            <AnimateIn delay={0} direction="up">
              <div className="sp-cta__eyebrow">
                {(() => { const Icon = Icons["Lightbulb"]; return Icon ? <Icon strokeWidth={1.5} className="sp-cta__eyebrow-icon" /> : null; })()}
                Let's Connect
              </div>
            </AnimateIn>
            <AnimateIn delay={0.08} direction="up">
              <h2 className="sp-cta__title">Not Sure Where to Start?</h2>
            </AnimateIn>
            <AnimateIn delay={0.14} direction="up">
              <p className="sp-cta__sub">We'll help define the right solution for your business. No jargon, no pressure — just a clear conversation about what you need.</p>
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
            <AnimateIn delay={0.26} direction="up">
              <div className="sp-cta__trust">
                {["No commitment required", "Response within 24h", "Free initial consultation"].map((t, i) => (
                  <div key={i} className="sp-cta__trust-item">
                    {(() => { const Icon = Icons["CheckCircle2"]; return Icon ? <Icon strokeWidth={1.5} className="sp-cta__trust-icon" /> : null; })()}
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
