import Nav from "@/components/blocks/Nav";
import Footer from "@/components/blocks/Footer";
import AnimateIn from "@/components/AnimateIn";
import { Icons } from "@/lib/icons";

const ArrowRight = Icons.ArrowRight;
const ArrowUpRight = Icons.ArrowUpRight;
const CheckCircle2 = Icons.CheckCircle2;

const talentRoles = [
  { icon: "Code2",        title: "Software Developers" },
  { icon: "Layout",       title: "Frontend Developers" },
  { icon: "Server",       title: "Backend Developers" },
  { icon: "Layers",       title: "Full-Stack Developers" },
  { icon: "Smartphone",   title: "Mobile Developers" },
  { icon: "BrainCircuit", title: "AI Specialists" },
  { icon: "Database",     title: "Data Scientists" },
  { icon: "GitBranch",    title: "DevOps Engineers" },
  { icon: "Cloud",        title: "Cloud Engineers" },
  { icon: "Shield",       title: "Cybersecurity Experts" },
  { icon: "Sparkles",     title: "UI/UX Designers" },
  { icon: "CheckSquare",  title: "QA Engineers" },
  { icon: "ClipboardList","title": "Project Managers" },
  { icon: "Target",       title: "Product Owners" },
  { icon: "Headphones",   title: "Technical Support" },
  { icon: "BarChart",     title: "Digital Marketing" },
];

const services = [
  { icon: "Users",        num: "01", title: "Candidate Sourcing",     desc: "Access to a large pool of qualified candidates sourced from our 88,000+ global talent network." },
  { icon: "UserCheck",    num: "02", title: "Candidate Evaluation",   desc: "Review of technical skills, social aptitudes, and role fit to ensure the best match for your team." },
  { icon: "User",         num: "03", title: "Dedicated Recruiter",    desc: "A recruiter who understands your needs and company culture, acting as a true extension of your team." },
  { icon: "Lightbulb",    num: "04", title: "Recruitment Consulting", desc: "Guidance to improve your hiring process, employer branding, and long-term recruitment strategy." },
];

const processSteps = [
  { num: "01", title: "Define Requirements",        desc: "Define the job description, technical requirements, seniority level, and hiring timeline." },
  { num: "02", title: "Sourcing & Screening",       desc: "We source and screen candidates from our global talent pool against your exact specifications." },
  { num: "03", title: "Candidate Review",           desc: "We share a shortlist of pre-vetted candidates for your review and feedback." },
  { num: "04", title: "Interviews & Approval",      desc: "Conduct interviews and approve the candidates you want to move forward with." },
  { num: "05", title: "Finalise Conditions",        desc: "Agree on hiring conditions, compensation, and any operational arrangements." },
  { num: "06", title: "Sign the Agreement",         desc: "Formalise the partnership and onboard your new hires with full support." },
];

const whyBullets = [
  "Full process transparency",
  "Fast and effective recruitment cycles",
  "Access to top-tier tech talent",
  "High employee loyalty and engagement",
  "Professional team management support",
  "Flexible models that scale with your needs",
];

const locations = [
  { city: "Tel Aviv",  country: "Israel",    desc: "Primary EMEA hub, our founding location." },
  { city: "Lviv",      country: "Ukraine",   desc: "Engineering centre for European clients." },
  { city: "Kraków",    country: "Poland",    desc: "Growing European development hub." },
  { city: "Buenos Aires", country: "Argentina", desc: "LATAM hub covering Americas time zones." },
];

const stats = [
  { val: "88K+",  label: "Talent Pool" },
  { val: "700+",  label: "Global Clients" },
  { val: "4",     label: "Global Hubs" },
  { val: "10+",   label: "Years Delivering" },
];

export default function RecruitmentPage() {
  return (
    <div className="page">
      <Nav />
      <main>

        {/* ── Hero ─────────────────────────── */}
        <section className="rs-hero" data-block="hero">
          <div className="rs-hero__grid" aria-hidden="true" />
          <div className="rs-hero__noise" aria-hidden="true" />
          <div className="rs-hero__inner" data-element="inner">
            <AnimateIn delay={0} direction="up">
              <div className="rs-hero__eyebrow" data-field="eyebrow">Recruitment as a Service</div>
            </AnimateIn>
            <AnimateIn delay={0.08} direction="up">
              <h1 className="rs-hero__title" data-field="title">
                Find the Right<br />Tech Talent Faster
              </h1>
            </AnimateIn>
            <AnimateIn delay={0.14} direction="up">
              <p className="rs-hero__sub" data-field="sub">
                Find the right tech talent faster with Group107.
              </p>
            </AnimateIn>
            <AnimateIn delay={0.2} direction="up">
              <p className="rs-hero__body" data-field="body">
                We help companies source, evaluate, and hire qualified technology professionals based on their technical needs, timelines, and company culture.
              </p>
            </AnimateIn>
            <AnimateIn delay={0.26} direction="up">
              <div className="rs-hero__actions" data-element="actions">
                <a href="/contact-us" className="rs-hero__btn rs-hero__btn--primary" data-field="cta">
                  Contact Us <ArrowRight className="rs-hero__btn-icon" />
                </a>
                <a href="/contact-us" className="rs-hero__btn rs-hero__btn--secondary" data-field="cta-sec">
                  Talk to a Recruiter <ArrowUpRight className="rs-hero__btn-icon" />
                </a>
              </div>
            </AnimateIn>
          </div>
        </section>

        {/* ── Intro ────────────────────────── */}
        <section className="rs-intro" data-block="intro">
          <div className="rs-intro__inner" data-element="inner">
            <div className="rs-intro__left" data-element="left">
              <AnimateIn delay={0} direction="up">
                <div className="rs-intro__label" data-field="label">Our Value Proposition</div>
              </AnimateIn>
              <AnimateIn delay={0.06} direction="up">
                <h2 className="rs-intro__title" data-field="title">Build Your Team with Confidence</h2>
              </AnimateIn>
            </div>
            <div className="rs-intro__right" data-element="right">
              <AnimateIn delay={0.1} direction="up">
                <p className="rs-intro__body" data-field="body">
                  Finding the right people is one of the most important parts of business growth. Group107 supports your recruitment process from sourcing to candidate evaluation, helping you access relevant, pre-vetted talent faster and with full process transparency.
                </p>
              </AnimateIn>
            </div>
          </div>
        </section>

        {/* ── Talent Grid ───────────────────── */}
        <section className="rs-talent" data-block="talent">
          <div className="rs-talent__inner" data-element="inner">
            <div className="rs-talent__head" data-element="head">
              <AnimateIn delay={0} direction="up">
                <div className="rs-talent__label" data-field="label">Talent We Source</div>
              </AnimateIn>
              <AnimateIn delay={0.06} direction="up">
                <h2 className="rs-talent__title" data-field="title">Tech & Creative Talent We Can Help You Find</h2>
              </AnimateIn>
            </div>
            <div className="rs-talent__grid" data-element="grid">
              {talentRoles.map((role, i) => {
                const Icon = Icons[role.icon];
                return (
                  <AnimateIn key={i} delay={0.04 * i} direction="up">
                    <div className="rs-talent__card" data-element="card">
                      <div className="rs-talent__card-icon-wrap" data-element="icon-wrap">
                        {Icon && <Icon className="rs-talent__card-icon" strokeWidth={1.25} />}
                      </div>
                      <span className="rs-talent__card-title" data-field="title">{role.title}</span>
                    </div>
                  </AnimateIn>
                );
              })}
            </div>
          </div>
        </section>

        {/* ── Services ─────────────────────── */}
        <section className="rs-services" data-block="services">
          <div className="rs-services__inner" data-element="inner">
            <div className="rs-services__head" data-element="head">
              <AnimateIn delay={0} direction="up">
                <div className="rs-services__label" data-field="label">What We Offer</div>
              </AnimateIn>
              <AnimateIn delay={0.06} direction="up">
                <h2 className="rs-services__title" data-field="title">Recruitment Services Tailored to Your Needs</h2>
              </AnimateIn>
            </div>
            <div className="rs-services__grid" data-element="grid">
              {services.map((svc, i) => {
                const Icon = Icons[svc.icon];
                return (
                  <AnimateIn key={i} delay={0.09 * i} direction="up">
                    <div className="rs-services__card" data-element="card">
                      <div className="rs-services__card-top" data-element="top">
                        <div className="rs-services__card-num" data-field="num">{svc.num}</div>
                        <div className="rs-services__card-icon-wrap" data-element="icon-wrap">
                          {Icon && <Icon className="rs-services__card-icon" strokeWidth={1.5} />}
                        </div>
                      </div>
                      <h3 className="rs-services__card-title" data-field="title">{svc.title}</h3>
                      <p className="rs-services__card-desc" data-field="desc">{svc.desc}</p>
                      <div className="rs-services__card-cta" data-field="cta">
                        Learn more <ArrowRight className="rs-services__card-cta-icon" />
                      </div>
                    </div>
                  </AnimateIn>
                );
              })}
            </div>
          </div>
        </section>

        {/* ── Process ───────────────────────── */}
        <section className="rs-process" data-block="process">
          <div className="rs-process__inner" data-element="inner">
            <div className="rs-process__head" data-element="head">
              <AnimateIn delay={0} direction="up">
                <div className="rs-process__label" data-field="label">How It Works</div>
              </AnimateIn>
              <AnimateIn delay={0.06} direction="up">
                <h2 className="rs-process__title" data-field="title">How the Recruitment Process Works</h2>
              </AnimateIn>
            </div>
            <div className="rs-process__steps" data-element="steps">
              {processSteps.map((step, i) => (
                <AnimateIn key={i} delay={0.08 * i} direction="up">
                  <div className="rs-process__step" data-element="step">
                    <div className="rs-process__step-num" data-field="num">{step.num}</div>
                    <div className="rs-process__step-connector" aria-hidden="true" />
                    <div className="rs-process__step-body" data-element="body">
                      <h3 className="rs-process__step-title" data-field="title">{step.title}</h3>
                      <p className="rs-process__step-desc" data-field="desc">{step.desc}</p>
                    </div>
                  </div>
                </AnimateIn>
              ))}
            </div>
          </div>
        </section>

        {/* ── Why Group107 ─────────────────── */}
        <section className="rs-why" data-block="why">
          <div className="rs-why__inner" data-element="inner">
            <AnimateIn delay={0} direction="up">
              <div className="rs-why__label" data-field="label">Why Us</div>
            </AnimateIn>
            <AnimateIn delay={0.06} direction="up">
              <h2 className="rs-why__title" data-field="title">Why Work With Group107</h2>
            </AnimateIn>
            <div className="rs-why__grid" data-element="grid">
              {whyBullets.map((b, i) => (
                <AnimateIn key={i} delay={0.07 * i} direction="up">
                  <div className="rs-why__item" data-element="item">
                    {CheckCircle2 && <CheckCircle2 className="rs-why__item-icon" strokeWidth={1.5} />}
                    <span className="rs-why__item-text" data-field="text">{b}</span>
                  </div>
                </AnimateIn>
              ))}
            </div>
            <AnimateIn delay={0.5} direction="up">
              <div className="rs-why__actions" data-element="actions">
                <a href="/contact-us" className="rs-why__btn" data-field="cta">
                  Talk to Our Team <ArrowRight className="rs-why__btn-icon" />
                </a>
              </div>
            </AnimateIn>
          </div>
        </section>

        {/* ── Global Reach ─────────────────── */}
        <section className="rs-global" data-block="global">
          <div className="rs-global__inner" data-element="inner">
            <div className="rs-global__content" data-element="content">
              <AnimateIn delay={0} direction="up">
                <div className="rs-global__label" data-field="label">Global Talent Reach</div>
              </AnimateIn>
              <AnimateIn delay={0.06} direction="up">
                <h2 className="rs-global__title" data-field="title">Global Reach, Local Support</h2>
              </AnimateIn>
              <AnimateIn delay={0.12} direction="up">
                <p className="rs-global__body" data-field="body">
                  Group107 serves clients worldwide through innovation hubs in Tel Aviv, Ukraine, Poland, and Argentina, helping companies access talent across different time zones and business cultures.
                </p>
              </AnimateIn>
              <AnimateIn delay={0.18} direction="up">
                <div className="rs-global__stats" data-element="stats">
                  {stats.map((s, i) => (
                    <div key={i} className="rs-global__stat" data-element="stat">
                      <span className="rs-global__stat-val" data-field="val">{s.val}</span>
                      <span className="rs-global__stat-label" data-field="label">{s.label}</span>
                    </div>
                  ))}
                </div>
              </AnimateIn>
            </div>
            <div className="rs-global__locs" data-element="locations">
              {locations.map((loc, i) => (
                <AnimateIn key={i} delay={0.08 * i} direction="up">
                  <div className="rs-global__loc-card" data-element="loc-card">
                    <div className="rs-global__loc-dot" aria-hidden="true" />
                    <div className="rs-global__loc-body" data-element="body">
                      <span className="rs-global__loc-city" data-field="city">{loc.city}</span>
                      <span className="rs-global__loc-country" data-field="country">{loc.country}</span>
                      <p className="rs-global__loc-desc" data-field="desc">{loc.desc}</p>
                    </div>
                  </div>
                </AnimateIn>
              ))}
            </div>
          </div>
        </section>

        {/* ── Final CTA ────────────────────── */}
        <section className="rs-cta" data-block="cta">
          <div className="rs-cta__grain" aria-hidden="true" />
          <div className="rs-cta__inner" data-element="inner">
            <AnimateIn delay={0} direction="up">
              <div className="rs-cta__eyebrow" data-field="eyebrow">Let's Talk</div>
            </AnimateIn>
            <AnimateIn delay={0.08} direction="up">
              <h2 className="rs-cta__title" data-field="title">Looking for the Right Talent?</h2>
            </AnimateIn>
            <AnimateIn delay={0.14} direction="up">
              <p className="rs-cta__sub" data-field="sub">
                Let's discuss your hiring needs and help you find the right people for your team.
              </p>
            </AnimateIn>
            <AnimateIn delay={0.2} direction="up">
              <a href="/contact-us" className="rs-cta__btn" data-field="cta">
                Contact Us <ArrowRight className="rs-cta__btn-icon" />
              </a>
            </AnimateIn>
          </div>
        </section>

      </main>
      <Footer />
    </div>
  );
}
