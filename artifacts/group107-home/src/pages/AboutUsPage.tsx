import Nav from "@/components/blocks/Nav";
import Footer from "@/components/blocks/Footer";
import Breadcrumbs from "@/components/Breadcrumbs";
import AnimateIn from "@/components/AnimateIn";
import { Icons } from "@/lib/icons";

const ArrowRight = Icons.ArrowRight;
const ArrowUpRight = Icons.ArrowUpRight;

const stats = [
  { val: "700+",  label: "Global Clients" },
  { val: "88K+",  label: "Talent Pool" },
  { val: "10+",   label: "Years Delivering" },
  { val: "4",     label: "Global Hubs" },
];

const services = [
  { icon: "Globe",        title: "Web Development",       desc: "Custom WordPress solutions, Frontend and Backend technologies." },
  { icon: "Smartphone",   title: "App Development",        desc: "Expertise in iOS, Android, React, and Angular." },
  { icon: "BrainCircuit", title: "AI Integrations",        desc: "Tailored AI solutions that improve productivity and enhance decision-making." },
  { icon: "GitBranch",    title: "DevOps",                 desc: "Streamlining software development and deployment with automation, CI/CD, and cloud migration." },
  { icon: "Database",     title: "Data Engineering",       desc: "Robust data integration and big data analytics for data-driven decisions." },
  { icon: "UserCheck",    title: "Recruitment Services",   desc: "Sourcing and evaluating top talent to meet business and technical needs." },
];

const expertise = [
  { icon: "Cpu",          title: "Tech & Digital",            desc: "Software platforms, digital products, and scalable tech infrastructure." },
  { icon: "TrendingUp",   title: "Finance & Consulting",      desc: "Fintech systems, compliance tooling, and enterprise advisory." },
  { icon: "Heart",        title: "Healthcare & Industry",     desc: "Medical platforms, compliance systems, and IoT-driven operations." },
  { icon: "Radio",        title: "Media & Entertainment",     desc: "Content platforms, streaming, and AI-powered personalisation." },
];

const advantages = [
  { icon: "Globe",           title: "Global Client Reach & Local Hubs",  desc: "We serve 700+ clients worldwide through innovation hubs in Israel, Ukraine, Poland, and Argentina." },
  { icon: "CheckCircle2",    title: "100% Process Transparency",          desc: "Full visibility into hiring pipelines, delivery timelines, and team performance at every stage." },
  { icon: "Zap",             title: "Accelerated Recruitment",            desc: "Our 88,000+ talent pool and streamlined process gets the right people in place fast." },
  { icon: "HeartHandshake",  title: "High Employee Loyalty",              desc: "Strong engagement programs and dedicated HR support keep teams motivated and stable." },
];

const clients = [
  { name: "FIBI",       desc: "First International Bank of Israel" },
  { name: "Trade.com",  desc: "Global trading & investment platform" },
  { name: "IMTC",       desc: "International Money Transfer Company" },
];

export default function AboutUsPage() {
  return (
    <div className="page">
      <Nav />
      <Breadcrumbs items={[{ label: "Home", url: "/" }, { label: "About Us" }]} />
      <main>

        {/* ── Hero ─────────────────────────── */}
        <section className="au-hero" data-block="hero">
          <div className="au-hero__inner" data-element="inner">
            <div className="au-hero__content" data-element="content">
              <AnimateIn delay={0} direction="up">
                <div className="au-hero__eyebrow" data-field="eyebrow">About Group 107</div>
              </AnimateIn>
              <AnimateIn delay={0.08} direction="up">
                <h1 className="au-hero__title" data-field="title">Who We Are</h1>
              </AnimateIn>
              <AnimateIn delay={0.16} direction="up">
                <p className="au-hero__sub" data-field="sub">
                  Group 107 is a publicly listed company specialising in premium offshore software
                  development, tech talent recruitment, and comprehensive IT solutions. We tailor
                  solutions to meet business goals with full transparency and flexibility.
                </p>
              </AnimateIn>
              <AnimateIn delay={0.24} direction="up">
                <div className="au-hero__actions" data-element="actions">
                  <a href="/contact-us" className="au-hero__btn au-hero__btn--primary" data-field="cta-primary">
                    Get in Touch <ArrowRight className="au-hero__btn-icon" />
                  </a>
                  <a href="/our-work" className="au-hero__btn au-hero__btn--secondary" data-field="cta-secondary">
                    View Our Work <ArrowUpRight className="au-hero__btn-icon" />
                  </a>
                </div>
              </AnimateIn>
            </div>

            <AnimateIn delay={0.1} direction="fade" className="au-hero__visual" data-element="visual">
              <div className="au-hero__stats-card" data-element="stats-card">
                {stats.map((s, i) => (
                  <div key={i} className="au-hero__stats-item" data-element="stats-item">
                    <span className="au-hero__stats-val" data-field="val">{s.val}</span>
                    <span className="au-hero__stats-label" data-field="label">{s.label}</span>
                  </div>
                ))}
              </div>
            </AnimateIn>
          </div>
        </section>

        {/* ── Services ─────────────────────── */}
        <section className="au-services" data-block="services">
          <div className="au-services__inner" data-element="inner">
            <div className="au-services__head" data-element="head">
              <AnimateIn delay={0} direction="up">
                <div className="au-services__label" data-field="label">What We Do</div>
              </AnimateIn>
              <AnimateIn delay={0.06} direction="up">
                <h2 className="au-services__title" data-field="title">Our Services</h2>
              </AnimateIn>
              <AnimateIn delay={0.12} direction="up">
                <p className="au-services__sub" data-field="sub">
                  At Group 107, we focus on creating high-performing, dedicated teams of software developers, data scientists, AI specialists, and digital marketing experts.
                </p>
              </AnimateIn>
            </div>
            <div className="au-services__grid" data-element="grid">
              {services.map((svc, i) => {
                const Icon = Icons[svc.icon];
                return (
                  <AnimateIn key={i} delay={0.07 * i} direction="up">
                    <div className="au-services__card" data-element="card">
                      <div className="au-services__card-icon-wrap" data-element="icon-wrap">
                        {Icon && <Icon className="au-services__card-icon" strokeWidth={1.5} />}
                      </div>
                      <h3 className="au-services__card-title" data-field="title">{svc.title}</h3>
                      <p className="au-services__card-desc" data-field="desc">{svc.desc}</p>
                      <div className="au-services__card-cta" data-field="cta">
                        Learn more <ArrowRight className="au-services__card-cta-icon" />
                      </div>
                    </div>
                  </AnimateIn>
                );
              })}
            </div>
          </div>
        </section>

        {/* ── Expertise ────────────────────── */}
        <section className="au-expertise" data-block="expertise">
          <div className="au-expertise__inner" data-element="inner">
            <div className="au-expertise__head" data-element="head">
              <AnimateIn delay={0} direction="up">
                <div className="au-expertise__label" data-field="label">Industry Reach</div>
              </AnimateIn>
              <AnimateIn delay={0.06} direction="up">
                <h2 className="au-expertise__title" data-field="title">Our Expertise</h2>
              </AnimateIn>
              <AnimateIn delay={0.12} direction="up">
                <p className="au-expertise__sub" data-field="sub">
                  We bring together a diverse range of skills across industries.
                </p>
              </AnimateIn>
            </div>
            <div className="au-expertise__grid" data-element="grid">
              {expertise.map((ex, i) => {
                const Icon = Icons[ex.icon];
                return (
                  <AnimateIn key={i} delay={0.08 * i} direction="up">
                    <div className="au-expertise__card" data-element="card">
                      <div className="au-expertise__card-icon-wrap" data-element="icon-wrap">
                        {Icon && <Icon className="au-expertise__card-icon" strokeWidth={1.25} />}
                      </div>
                      <h3 className="au-expertise__card-title" data-field="title">{ex.title}</h3>
                      <p className="au-expertise__card-desc" data-field="desc">{ex.desc}</p>
                    </div>
                  </AnimateIn>
                );
              })}
            </div>
          </div>
        </section>

        {/* ── Recruitment & Ops ────────────── */}
        <section className="au-recruit" data-block="recruitment">
          <div className="au-recruit__inner" data-element="inner">
            <AnimateIn delay={0} direction="left" className="au-recruit__visual" data-element="visual">
              <div className="au-recruit__visual-badge" data-element="badge">
                <span className="au-recruit__visual-badge-num">88K+</span>
                <span className="au-recruit__visual-badge-label">Talent Pool</span>
              </div>
              <div className="au-recruit__visual-rings" aria-hidden="true">
                <div className="au-recruit__visual-ring au-recruit__visual-ring--1" />
                <div className="au-recruit__visual-ring au-recruit__visual-ring--2" />
                <div className="au-recruit__visual-ring au-recruit__visual-ring--3" />
              </div>
              {["Code2", "Users", "Globe", "Shield", "Database", "BrainCircuit"].map((ic, i) => {
                const Icon = Icons[ic];
                return Icon ? (
                  <div key={i} className={`au-recruit__orbit-dot au-recruit__orbit-dot--${i + 1}`} data-element="orbit-dot">
                    <Icon strokeWidth={1.5} />
                  </div>
                ) : null;
              })}
            </AnimateIn>
            <AnimateIn delay={0.1} direction="up" className="au-recruit__content" data-element="content">
              <div className="au-recruit__label" data-field="label">Recruitment & Operations</div>
              <h2 className="au-recruit__title" data-field="title">People-First. Process-Driven.</h2>
              <p className="au-recruit__body" data-field="body">
                Our recruitment services are aligned with your technical needs and project timelines to scale your team effectively. We also ensure that every employee is fully integrated with comprehensive HR services, payroll support, wellness programs, and more.
              </p>
              <div className="au-recruit__bullets" data-element="bullets">
                {["HR & payroll support", "Wellness programs", "Onboarding & engagement", "Remote team management", "Professional development"].map((b, i) => {
                  const Icon = Icons["CheckCircle2"];
                  return (
                    <div key={i} className="au-recruit__bullet" data-element="bullet">
                      {Icon && <Icon className="au-recruit__bullet-icon" strokeWidth={1.5} />}
                      <span data-field="text">{b}</span>
                    </div>
                  );
                })}
              </div>
            </AnimateIn>
          </div>
        </section>

        {/* ── Key Advantages ───────────────── */}
        <section className="au-advantages" data-block="advantages">
          <div className="au-advantages__inner" data-element="inner">
            <div className="au-advantages__head" data-element="head">
              <AnimateIn delay={0} direction="up">
                <div className="au-advantages__label" data-field="label">Why Group 107</div>
              </AnimateIn>
              <AnimateIn delay={0.06} direction="up">
                <h2 className="au-advantages__title" data-field="title">Why Companies Choose Group107</h2>
              </AnimateIn>
            </div>
            <div className="au-advantages__grid" data-element="grid">
              {advantages.map((adv, i) => {
                const Icon = Icons[adv.icon];
                return (
                  <AnimateIn key={i} delay={0.08 * i} direction="up">
                    <div className="au-advantages__card" data-element="card">
                      <div className="au-advantages__card-num" data-field="num">0{i + 1}</div>
                      <div className="au-advantages__card-icon-wrap" data-element="icon-wrap">
                        {Icon && <Icon className="au-advantages__card-icon" strokeWidth={1.5} />}
                      </div>
                      <h3 className="au-advantages__card-title" data-field="title">{adv.title}</h3>
                      <p className="au-advantages__card-desc" data-field="desc">{adv.desc}</p>
                    </div>
                  </AnimateIn>
                );
              })}
            </div>
          </div>
        </section>

        {/* ── Clients ──────────────────────── */}
        <section className="au-clients" data-block="clients">
          <div className="au-clients__inner" data-element="inner">
            <AnimateIn delay={0} direction="up">
              <div className="au-clients__label" data-field="label">Our Clients</div>
            </AnimateIn>
            <AnimateIn delay={0.06} direction="up">
              <h2 className="au-clients__title" data-field="title">Trusted by Leading Organisations</h2>
            </AnimateIn>
            <AnimateIn delay={0.12} direction="up">
              <p className="au-clients__sub" data-field="sub">
                We are proud to work with over 700 clients across various industries, including finance, healthcare, education, and more.
              </p>
            </AnimateIn>
            <div className="au-clients__logos" data-element="logos">
              {clients.map((c, i) => (
                <AnimateIn key={i} delay={0.1 * i} direction="up">
                  <div className="au-clients__logo-card" data-element="logo-card">
                    <span className="au-clients__logo-name" data-field="name">{c.name}</span>
                    <span className="au-clients__logo-desc" data-field="desc">{c.desc}</span>
                  </div>
                </AnimateIn>
              ))}
            </div>
          </div>
        </section>

        {/* ── CTA ──────────────────────────── */}
        <section className="au-cta" data-block="cta">
          <div className="au-cta__grain" aria-hidden="true" />
          <div className="au-cta__inner" data-element="inner">
            <AnimateIn delay={0} direction="up">
              <div className="au-cta__eyebrow" data-field="eyebrow">Let's Talk</div>
            </AnimateIn>
            <AnimateIn delay={0.08} direction="up">
              <h2 className="au-cta__title" data-field="title">Ready to Scale Your Team?</h2>
            </AnimateIn>
            <AnimateIn delay={0.14} direction="up">
              <p className="au-cta__sub" data-field="sub">
                Let's discuss how Group107 can support your business goals with technology, talent, and scalable solutions.
              </p>
            </AnimateIn>
            <AnimateIn delay={0.2} direction="up">
              <div className="au-cta__actions" data-element="actions">
                <a href="/contact-us" className="au-cta__btn au-cta__btn--primary" data-field="cta">
                  Contact Us <ArrowRight className="au-cta__btn-icon" />
                </a>
                <a href="/our-work" className="au-cta__btn au-cta__btn--secondary" data-field="cta-sec">
                  Our Work <ArrowUpRight className="au-cta__btn-icon" />
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
