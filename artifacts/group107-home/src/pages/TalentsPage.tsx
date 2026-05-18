import Nav from "@/components/blocks/Nav";
import Footer from "@/components/blocks/Footer";
import Breadcrumbs from "@/components/Breadcrumbs";
import AnimateIn from "@/components/AnimateIn";
import { Icons } from "@/lib/icons";

const ArrowRight = Icons.ArrowRight;
const ArrowUpRight = Icons.ArrowUpRight;
const CheckCircle2 = Icons.CheckCircle2;

const talentCategories = [
  { icon: "Code2",        title: "Software Developers",     desc: "Full-stack, frontend, backend engineers across all major stacks and frameworks." },
  { icon: "BrainCircuit", title: "AI & Data Experts",        desc: "Data scientists, ML engineers, AI architects, and LLM integration specialists." },
  { icon: "Cloud",        title: "Cloud & DevOps",           desc: "Cloud architects, SREs, DevOps engineers, and infrastructure specialists." },
  { icon: "Shield",       title: "Cybersecurity Experts",   desc: "Penetration testers, SOC analysts, security architects, and compliance officers." },
  { icon: "Sparkles",     title: "Creative & Product",      desc: "UX/UI designers, product managers, and creative directors." },
  { icon: "Users",        title: "Delivery Teams",          desc: "Project managers, QA engineers, Scrum masters, and business analysts." },
];

const whyBullets = [
  "100% process transparency",
  "Accelerated recruitment cycles",
  "Access to top-tier talent",
  "Strong employee engagement and loyalty",
  "Dedicated onsite and remote IT team management",
  "Flexible scaling model",
];

const processSteps = [
  { num: "01", title: "Define Requirements",   desc: "Tell us your requirements — stack, team size, seniority, and timeline." },
  { num: "02", title: "Sourcing & Screening",  desc: "We search our 88,000+ talent pool and rigorously screen candidates for you." },
  { num: "03", title: "Candidate Approval",    desc: "Review shortlisted candidates and choose the right fit for your team." },
  { num: "04", title: "Hiring Decision",       desc: "Finalise your selections with full visibility into the process." },
  { num: "05", title: "Finalise Conditions",   desc: "Agree on terms, compensation, and operational setup." },
  { num: "06", title: "Sign Agreement",        desc: "Formalise the partnership and onboard your new team members." },
];

const managementItems = [
  "Recruitment A to Z",
  "HR services",
  "Payroll services",
  "Healthcare benefits",
  "Onboarding",
  "Employee engagement",
  "Remote employee management",
  "Account management",
  "Team activities",
  "Professional development support",
];

const industries = [
  "Technology", "Finance", "Consulting", "Government", "Healthcare",
  "Tourism", "Logistics", "Media", "Gaming", "E-learning",
];

const stats = [
  { val: "700+",  label: "Customers" },
  { val: "88K+",  label: "Tech Talents" },
  { val: "TASE",  label: "Publicly Traded" },
  { val: "10+",   label: "Years Delivering" },
];

export default function TalentsPage() {
  return (
    <div className="page">
      <Nav />
      <Breadcrumbs items={[{ label: "Home", url: "/" }, { label: "Talents" }]} />
      <main>

        {/* ── Hero ─────────────────────────── */}
        <section className="tp-hero" data-block="hero">
          <div className="tp-hero__inner" data-element="inner">
            <div className="tp-hero__content" data-element="content">
              <AnimateIn delay={0} direction="up">
                <div className="tp-hero__eyebrow" data-field="eyebrow">Talent Solutions</div>
              </AnimateIn>
              <AnimateIn delay={0.08} direction="up">
                <h1 className="tp-hero__title" data-field="title">Premium Tech Talents for Growing Teams</h1>
              </AnimateIn>
              <AnimateIn delay={0.14} direction="up">
                <p className="tp-hero__sub" data-field="sub">
                  Build your team faster with top-tier tech professionals matched to your needs, timeline, and business goals.
                </p>
              </AnimateIn>
              <AnimateIn delay={0.2} direction="up">
                <div className="tp-hero__actions" data-element="actions">
                  <a href="/contact-us" className="tp-hero__btn tp-hero__btn--primary" data-field="cta">
                    Find Your Talent <ArrowRight className="tp-hero__btn-icon" />
                  </a>
                  <a href="/our-work" className="tp-hero__btn tp-hero__btn--secondary" data-field="cta-sec">
                    View Case Studies <ArrowUpRight className="tp-hero__btn-icon" />
                  </a>
                </div>
              </AnimateIn>
            </div>

            <AnimateIn delay={0.1} direction="fade" className="tp-hero__visual" data-element="visual">
              <div className="tp-hero__pool-card" data-element="pool-card">
                <div className="tp-hero__pool-num" data-field="num">88,000+</div>
                <div className="tp-hero__pool-label" data-field="label">Vetted Professionals</div>
                <div className="tp-hero__pool-divider" aria-hidden="true" />
                <div className="tp-hero__pool-stats" data-element="pool-stats">
                  {stats.map((s, i) => (
                    <div key={i} className="tp-hero__pool-stat" data-element="pool-stat">
                      <span className="tp-hero__pool-stat-val" data-field="val">{s.val}</span>
                      <span className="tp-hero__pool-stat-label" data-field="label">{s.label}</span>
                    </div>
                  ))}
                </div>
                <div className="tp-hero__pool-tags" data-element="pool-tags">
                  {["React", "Node.js", "Python", "AWS", "AI/ML", "iOS", "DevOps", "QA"].map((t) => (
                    <span key={t} className="tp-hero__pool-tag" data-field="tag">{t}</span>
                  ))}
                </div>
              </div>
            </AnimateIn>
          </div>
        </section>

        {/* ── Talent Categories ─────────────── */}
        <section className="tp-cats" data-block="categories">
          <div className="tp-cats__inner" data-element="inner">
            <div className="tp-cats__head" data-element="head">
              <AnimateIn delay={0} direction="up">
                <div className="tp-cats__label" data-field="label">What We Provide</div>
              </AnimateIn>
              <AnimateIn delay={0.06} direction="up">
                <h2 className="tp-cats__title" data-field="title">Talent Across Every Key Technology Area</h2>
              </AnimateIn>
            </div>
            <div className="tp-cats__grid" data-element="grid">
              {talentCategories.map((cat, i) => {
                const Icon = Icons[cat.icon];
                return (
                  <AnimateIn key={i} delay={0.07 * i} direction="up">
                    <div className="tp-cats__card" data-element="card">
                      <div className="tp-cats__card-icon-wrap" data-element="icon-wrap">
                        {Icon && <Icon className="tp-cats__card-icon" strokeWidth={1.25} />}
                      </div>
                      <h3 className="tp-cats__card-title" data-field="title">{cat.title}</h3>
                      <p className="tp-cats__card-desc" data-field="desc">{cat.desc}</p>
                      <div className="tp-cats__card-cta" data-field="cta">
                        Learn more <ArrowRight className="tp-cats__card-cta-icon" />
                      </div>
                    </div>
                  </AnimateIn>
                );
              })}
            </div>
          </div>
        </section>

        {/* ── Why Group107 Talents ──────────── */}
        <section className="tp-why" data-block="why">
          <div className="tp-why__inner" data-element="inner">
            <AnimateIn delay={0} direction="left" className="tp-why__content" data-element="content">
              <div className="tp-why__label" data-field="label">Our Advantage</div>
              <h2 className="tp-why__title" data-field="title">Why Companies Choose Group107 Talents</h2>
              <div className="tp-why__bullets" data-element="bullets">
                {whyBullets.map((b, i) => (
                  <div key={i} className="tp-why__bullet" data-element="bullet">
                    {CheckCircle2 && <CheckCircle2 className="tp-why__bullet-icon" strokeWidth={1.5} />}
                    <span data-field="text">{b}</span>
                  </div>
                ))}
              </div>
              <a href="/contact-us" className="tp-why__cta" data-field="cta">
                Start Hiring <ArrowRight className="tp-why__cta-icon" />
              </a>
            </AnimateIn>
            <AnimateIn delay={0.1} direction="right" className="tp-why__visual" data-element="visual">
              <div className="tp-why__visual-card" data-element="visual-card">
                <div className="tp-why__visual-num" data-field="num">88,000+</div>
                <div className="tp-why__visual-label" data-field="label">Vetted Professionals</div>
                <div className="tp-why__visual-divider" aria-hidden="true" />
                <div className="tp-why__visual-tags" data-element="tags">
                  {["React", "Node.js", "Python", "AWS", "Kubernetes", "AI/ML", "iOS", "Android", "DevOps", "Data Eng.", "UX/UI", "QA"].map((t) => (
                    <span key={t} className="tp-why__visual-tag" data-field="tag">{t}</span>
                  ))}
                </div>
              </div>
            </AnimateIn>
          </div>
        </section>

        {/* ── Process ───────────────────────── */}
        <section className="tp-process" data-block="process">
          <div className="tp-process__inner" data-element="inner">
            <div className="tp-process__head" data-element="head">
              <AnimateIn delay={0} direction="up">
                <div className="tp-process__label" data-field="label">How It Works</div>
              </AnimateIn>
              <AnimateIn delay={0.06} direction="up">
                <h2 className="tp-process__title" data-field="title">Simple Process. Strong Talent Match.</h2>
              </AnimateIn>
            </div>
            <div className="tp-process__steps" data-element="steps">
              {processSteps.map((step, i) => (
                <AnimateIn key={i} delay={0.08 * i} direction="up">
                  <div className="tp-process__step" data-element="step">
                    <div className="tp-process__step-num" data-field="num">{step.num}</div>
                    <div className="tp-process__step-connector" aria-hidden="true" />
                    <div className="tp-process__step-body" data-element="body">
                      <h3 className="tp-process__step-title" data-field="title">{step.title}</h3>
                      <p className="tp-process__step-desc" data-field="desc">{step.desc}</p>
                    </div>
                  </div>
                </AnimateIn>
              ))}
            </div>
          </div>
        </section>

        {/* ── Management & Support ──────────── */}
        <section className="tp-mgmt" data-block="management">
          <div className="tp-mgmt__inner" data-element="inner">
            <AnimateIn delay={0} direction="up" className="tp-mgmt__head" data-element="head">
              <div className="tp-mgmt__label" data-field="label">Full-Service Support</div>
              <h2 className="tp-mgmt__title" data-field="title">More Than Recruitment — Full Talent Management</h2>
              <p className="tp-mgmt__sub" data-field="sub">
                Our management fee covers the operational support needed to keep your remote team working smoothly.
              </p>
            </AnimateIn>
            <div className="tp-mgmt__grid" data-element="grid">
              {managementItems.map((item, i) => (
                <AnimateIn key={i} delay={0.05 * i} direction="up">
                  <div className="tp-mgmt__item" data-element="item">
                    {CheckCircle2 && <CheckCircle2 className="tp-mgmt__item-icon" strokeWidth={1.5} />}
                    <span className="tp-mgmt__item-text" data-field="text">{item}</span>
                  </div>
                </AnimateIn>
              ))}
            </div>
          </div>
        </section>

        {/* ── Industries ───────────────────── */}
        <section className="tp-industries" data-block="industries">
          <div className="tp-industries__inner" data-element="inner">
            <AnimateIn delay={0} direction="up">
              <div className="tp-industries__label" data-field="label">Who We Serve</div>
            </AnimateIn>
            <AnimateIn delay={0.06} direction="up">
              <h2 className="tp-industries__title" data-field="title">Supporting Teams Across Industries</h2>
            </AnimateIn>
            <div className="tp-industries__tags" data-element="tags">
              {industries.map((ind, i) => (
                <AnimateIn key={i} delay={0.04 * i} direction="up">
                  <div className="tp-industries__tag" data-element="tag" data-field="tag">{ind}</div>
                </AnimateIn>
              ))}
            </div>
          </div>
        </section>

        {/* ── CTA ──────────────────────────── */}
        <section className="tp-cta" data-block="cta">
          <div className="tp-cta__grain" aria-hidden="true" />
          <div className="tp-cta__inner" data-element="inner">
            <AnimateIn delay={0} direction="up">
              <h2 className="tp-cta__title" data-field="title">Ready to Expand Your Team?</h2>
            </AnimateIn>
            <AnimateIn delay={0.08} direction="up">
              <p className="tp-cta__sub" data-field="sub">
                Tell us what roles you need, and we'll help you find the right talent.
              </p>
            </AnimateIn>
            <AnimateIn delay={0.14} direction="up">
              <div className="tp-cta__actions" data-element="actions">
                <a href="/contact-us" className="tp-cta__btn tp-cta__btn--primary" data-field="cta">
                  Contact Us <ArrowRight className="tp-cta__btn-icon" />
                </a>
                <a href="/our-work" className="tp-cta__btn tp-cta__btn--secondary" data-field="cta-sec">
                  See Our Work <ArrowUpRight className="tp-cta__btn-icon" />
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
