import Nav from "@/components/blocks/Nav";
import Footer from "@/components/blocks/Footer";
import AnimateIn from "@/components/AnimateIn";
import { Icons } from "@/lib/icons";

const ArrowRight = Icons.ArrowRight;
const CheckCircle2 = Icons.CheckCircle2;

const whyPoints = [
  { num: "01", point: "Reduce development risks and rework", desc: "Define the right scope before a line of code is written." },
  { num: "02", point: "Align stakeholders on product vision", desc: "Create a shared understanding across business and technical teams." },
  { num: "03", point: "Define clear scope and priorities", desc: "Know exactly what to build first and why." },
  { num: "04", point: "Accelerate time-to-market", desc: "Avoid late-stage changes by resolving ambiguity upfront." },
  { num: "05", point: "Make informed technical decisions", desc: "Architecture and tech choices grounded in real product needs." },
];

const activities = [
  { label: "Business & product goals alignment" },
  { label: "User flows and product logic definition" },
  { label: "Feature scoping and prioritization" },
  { label: "Technical architecture planning" },
  { label: "UX direction and structure" },
  { label: "Delivery roadmap creation" },
];

const processSteps = [
  { num: "01", title: "Understanding the Business", desc: "Goals, users, constraints, and success criteria." },
  { num: "02", title: "Product Definition", desc: "Features, user flows, logic, and interaction patterns." },
  { num: "03", title: "Technical Planning", desc: "Architecture decisions, integrations, and stack direction." },
  { num: "04", title: "Validation & Alignment", desc: "Stakeholder review, iteration, and sign-off." },
  { num: "05", title: "Roadmap Creation", desc: "Clear next steps, priorities, and delivery estimates." },
];

const deliverables = [
  "Clear product scope and feature definition",
  "User flows and product logic",
  "Technical direction and architecture approach",
  "UX structure (wireframes if required)",
  "Prioritized roadmap for development",
  "Estimated plan for execution",
];

const audiences = [
  { title: "Startups Building MVPs", desc: "Validate ideas and launch with clarity before investing in full development." },
  { title: "Companies Launching New Products", desc: "Define scope, reduce risk, and align teams before development begins." },
  { title: "Businesses Scaling Existing Systems", desc: "Plan the next phase of growth with a clear technical and product direction." },
  { title: "Teams Needing Technical Clarity", desc: "Resolve ambiguity on architecture, integrations, and delivery approach." },
  { title: "Organizations Aligning Business & Tech", desc: "Bridge the gap between stakeholder goals and technical execution." },
];

const nextServices = [
  { label: "Web Development", url: "/web-development" },
  { label: "Software Development", url: "/software-development" },
  { label: "Mobile Development", url: "/mobile-development" },
  { label: "DevOps & Infrastructure", url: "/services#devops" },
];

const whyGroup107 = [
  "Full-service tech partner — from idea to scale",
  "Strong expertise across web, mobile, and enterprise systems",
  "Combined product and engineering mindset",
  "Transparent and structured delivery process",
  "Seamless transition into development and scaling",
];

const engagements = [
  { tag: "Fixed", title: "Discovery Sprint", desc: "A focused engagement with a defined scope, timeline, and deliverables. Best for clear ideas that need structured validation." },
  { tag: "Extended", title: "Extended Discovery", desc: "For complex or large-scale products that require deeper exploration, multiple stakeholders, or evolving requirements." },
  { tag: "End-to-End", title: "Discovery + Development", desc: "A continuous partnership from initial discovery through to full product delivery — no handover gaps, no context loss." },
];

const relatedLinks = [
  { label: "Web Development", url: "/web-development" },
  { label: "Software Development", url: "/software-development" },
  { label: "Mobile Development", url: "/mobile-development" },
  { label: "DevOps Solutions", url: "/services#devops" },
  { label: "AI Integrations", url: "/services#nextai" },
];

export default function ProductDiscoveryPage() {
  return (
    <div className="page">
      <Nav />
      <main>

        {/* ── Centered Hero with Decorative BG Text */}
        <section className="pd-hero">
          <div className="pd-hero__bg-text" aria-hidden="true">DISCOVERY</div>
          <div className="pd-hero__inner">
            <AnimateIn delay={0} direction="up">
              <div className="pd-hero__label">Development Services / Product Discovery</div>
            </AnimateIn>
            <AnimateIn delay={0.08} direction="up">
              <h1 className="pd-hero__title">
                Build the Right Product —<br />Before You Build It
              </h1>
            </AnimateIn>
            <AnimateIn delay={0.14} direction="up">
              <p className="pd-hero__sub">
                Turn ideas into clear, validated product direction with structured discovery led by experienced product and technology teams.
              </p>
            </AnimateIn>
            <AnimateIn delay={0.18} direction="up">
              <p className="pd-hero__body">
                At Group 107, Product Discovery helps you define what to build, why it matters, and how to execute it — reducing risks, saving time, and aligning business and technology from day one.
              </p>
            </AnimateIn>
            <AnimateIn delay={0.22} direction="up">
              <div className="pd-hero__actions">
                <a href="#cta" className="pd-hero__cta pd-hero__cta--primary">
                  Start Discovery <ArrowRight className="pd-hero__cta-icon" />
                </a>
                <a href="mailto:info@group107.com" className="pd-hero__cta pd-hero__cta--ghost">
                  Talk to an Expert
                </a>
              </div>
            </AnimateIn>
          </div>
          <div className="pd-hero__stats">
            {[
              { val: "100+", label: "Discovery Projects" },
              { val: "4–6", label: "Weeks Average Sprint" },
              { val: "700+", label: "Global Clients" },
              { val: "12+", label: "Years of Expertise" },
            ].map((s, i) => (
              <div key={i} className="pd-hero__stat">
                <span className="pd-hero__stat-val">{s.val}</span>
                <span className="pd-hero__stat-label">{s.label}</span>
              </div>
            ))}
          </div>
        </section>

        {/* ── What Is Product Discovery — CSS Flow */}
        <section className="pd-what">
          <div className="pd-what__inner">
            <AnimateIn delay={0} direction="left" className="pd-what__left">
              <span className="pd-what__tag">Definition</span>
              <h2 className="pd-what__title">What is Product Discovery?</h2>
              <p className="pd-what__body">
                Product Discovery is a structured process that transforms ideas into validated product plans. It combines business goals, user needs, and technical feasibility into a clear roadmap.
              </p>
              <p className="pd-what__body">
                It helps companies avoid costly mistakes by ensuring the product is well-defined before development begins.
              </p>
            </AnimateIn>
            <AnimateIn delay={0.1} direction="up" className="pd-what__diagram">
              <div className="pd-what__node pd-what__node--in">
                <span className="pd-what__node-label">Business Goals</span>
              </div>
              <div className="pd-what__node pd-what__node--in">
                <span className="pd-what__node-label">User Needs</span>
              </div>
              <div className="pd-what__node pd-what__node--in">
                <span className="pd-what__node-label">Technical Feasibility</span>
              </div>
              <div className="pd-what__arrow" aria-hidden="true" />
              <div className="pd-what__node pd-what__node--out">
                <span className="pd-what__node-num">→</span>
                <span className="pd-what__node-label">Clear Product Plan</span>
              </div>
            </AnimateIn>
          </div>
        </section>

        {/* ── Why It Matters ───────────────────── */}
        <section className="pd-why">
          <div className="pd-why__inner">
            <AnimateIn delay={0} direction="up" className="pd-why__head">
              <span className="pd-why__tag">Business Value</span>
              <h2 className="pd-why__title">Why Product Discovery Matters</h2>
              <p className="pd-why__sub">
                Group 107 brings together product thinking, technical expertise, and real delivery experience to ensure every product starts on the right foundation.
              </p>
            </AnimateIn>
            <div className="pd-why__grid">
              {whyPoints.map((p, i) => (
                <AnimateIn key={i} delay={0.07 * i} direction="up">
                  <div className="pd-why__card">
                    <span className="pd-why__card-num">{p.num}</span>
                    <span className="pd-why__card-point">{p.point}</span>
                    <span className="pd-why__card-desc">{p.desc}</span>
                  </div>
                </AnimateIn>
              ))}
            </div>
          </div>
        </section>

        {/* ── What We Do ───────────────────────── */}
        <section className="pd-activities">
          <div className="pd-activities__inner">
            <AnimateIn delay={0} direction="up" className="pd-activities__head">
              <span className="pd-activities__tag">Scope</span>
              <h2 className="pd-activities__title">What We Do During Discovery</h2>
              <p className="pd-activities__sub">
                We combine product strategy with hands-on technical expertise to create a plan that is ready for execution.
              </p>
            </AnimateIn>
            <div className="pd-activities__list">
              {activities.map((a, i) => (
                <AnimateIn key={i} delay={0.06 * i} direction="up">
                  <div className="pd-activities__item">
                    <span className="pd-activities__item-num">0{i + 1}</span>
                    <span className="pd-activities__item-label">{a.label}</span>
                  </div>
                </AnimateIn>
              ))}
            </div>
          </div>
        </section>

        {/* ── Discovery Process — Staircase ────── */}
        <section className="pd-process">
          <div className="pd-process__inner">
            <AnimateIn delay={0} direction="up" className="pd-process__head">
              <span className="pd-process__tag">Methodology</span>
              <h2 className="pd-process__title">Our Discovery Process</h2>
              <p className="pd-process__sub">
                This structured approach ensures transparency and clarity at every stage.
              </p>
            </AnimateIn>
            <div className="pd-process__steps">
              {processSteps.map((step, i) => (
                <AnimateIn key={i} delay={0.09 * i} direction="up">
                  <div className="pd-process__step" style={{ marginLeft: `${i * 4}rem` }}>
                    <span className="pd-process__step-num">{step.num}</span>
                    <div className="pd-process__step-body">
                      <span className="pd-process__step-title">{step.title}</span>
                      <span className="pd-process__step-desc">{step.desc}</span>
                    </div>
                  </div>
                </AnimateIn>
              ))}
            </div>
          </div>
        </section>

        {/* ── Deliverables — Checklist ──────────── */}
        <section className="pd-deliver">
          <div className="pd-deliver__inner">
            <AnimateIn delay={0} direction="left" className="pd-deliver__left">
              <span className="pd-deliver__tag">Outputs</span>
              <h2 className="pd-deliver__title">Deliverables</h2>
              <p className="pd-deliver__sub">
                At the end of the discovery phase, you receive everything needed to move into development with clarity.
              </p>
            </AnimateIn>
            <div className="pd-deliver__list">
              {deliverables.map((d, i) => (
                <AnimateIn key={i} delay={0.07 * i} direction="up">
                  <div className="pd-deliver__item">
                    <span className="pd-deliver__item-icon">
                      <CheckCircle2 strokeWidth={2} />
                    </span>
                    <span className="pd-deliver__item-label">{d}</span>
                  </div>
                </AnimateIn>
              ))}
            </div>
          </div>
        </section>

        {/* ── Who It's For — Persona Cards ─────── */}
        <section className="pd-for">
          <div className="pd-for__inner">
            <AnimateIn delay={0} direction="up" className="pd-for__head">
              <span className="pd-for__tag">Audience</span>
              <h2 className="pd-for__title">Who This Is For</h2>
            </AnimateIn>
            <div className="pd-for__grid">
              {audiences.map((a, i) => (
                <AnimateIn key={i} delay={0.07 * i} direction="up">
                  <div className="pd-for__card">
                    <span className="pd-for__card-num">0{i + 1}</span>
                    <span className="pd-for__card-title">{a.title}</span>
                    <span className="pd-for__card-desc">{a.desc}</span>
                  </div>
                </AnimateIn>
              ))}
            </div>
          </div>
        </section>

        {/* ── From Discovery to Development ──────── */}
        <section className="pd-next">
          <div className="pd-next__inner">
            <AnimateIn delay={0} direction="up" className="pd-next__head">
              <span className="pd-next__tag">What Comes Next</span>
              <h2 className="pd-next__title">From Discovery to Development</h2>
              <p className="pd-next__body">
                Product Discovery is the foundation for successful execution. Once completed, Group 107 can seamlessly continue into development — ensuring continuity, speed, and alignment across teams.
              </p>
            </AnimateIn>
            <div className="pd-next__services">
              {nextServices.map((s, i) => (
                <AnimateIn key={i} delay={0.07 * i} direction="up">
                  <a href={s.url} className="pd-next__service">
                    <span className="pd-next__service-label">{s.label}</span>
                    <ArrowRight className="pd-next__service-icon" />
                  </a>
                </AnimateIn>
              ))}
            </div>
          </div>
        </section>

        {/* ── Why Group 107 ─────────────────────── */}
        <section className="pd-trust">
          <div className="pd-trust__inner">
            <AnimateIn delay={0} direction="up" className="pd-trust__head">
              <span className="pd-trust__tag">Why Us</span>
              <h2 className="pd-trust__title">Why Group 107</h2>
              <p className="pd-trust__sub">We don't just plan products — we build and scale them.</p>
            </AnimateIn>
            <div className="pd-trust__list">
              {whyGroup107.map((pt, i) => (
                <AnimateIn key={i} delay={0.07 * i} direction="up">
                  <div className="pd-trust__item">
                    <span className="pd-trust__item-bar" aria-hidden="true" />
                    <span className="pd-trust__item-text">{pt}</span>
                  </div>
                </AnimateIn>
              ))}
            </div>
          </div>
        </section>

        {/* ── Engagement Model ──────────────────── */}
        <section className="pd-engage">
          <div className="pd-engage__inner">
            <AnimateIn delay={0} direction="up" className="pd-engage__head">
              <span className="pd-engage__tag">Collaboration</span>
              <h2 className="pd-engage__title">How We Work</h2>
              <p className="pd-engage__sub">
                We adapt the discovery process based on your product complexity and goals.
              </p>
            </AnimateIn>
            <div className="pd-engage__cards">
              {engagements.map((e, i) => (
                <AnimateIn key={i} delay={0.09 * i} direction="up">
                  <div className="pd-engage__card">
                    <span className="pd-engage__card-tag">{e.tag}</span>
                    <span className="pd-engage__card-title">{e.title}</span>
                    <span className="pd-engage__card-desc">{e.desc}</span>
                  </div>
                </AnimateIn>
              ))}
            </div>
          </div>
        </section>

        {/* ── Final CTA ─────────────────────────── */}
        <section className="pd-cta" id="cta">
          <div className="pd-cta__inner">
            <AnimateIn delay={0} direction="up">
              <span className="pd-cta__tag">Get Started</span>
            </AnimateIn>
            <AnimateIn delay={0.08} direction="up">
              <h2 className="pd-cta__title">
                Let's Define Your Product —<br />The Right Way
              </h2>
            </AnimateIn>
            <AnimateIn delay={0.14} direction="up">
              <p className="pd-cta__sub">Start with clarity. Build with confidence.</p>
            </AnimateIn>
            <AnimateIn delay={0.2} direction="up">
              <div className="pd-cta__actions">
                <a href="mailto:info@group107.com" className="pd-cta__btn pd-cta__btn--primary">
                  Start Product Discovery <ArrowRight className="pd-cta__btn-icon" />
                </a>
                <a href="mailto:info@group107.com" className="pd-cta__btn pd-cta__btn--ghost">
                  Book a Call
                </a>
              </div>
            </AnimateIn>
          </div>
        </section>

        {/* ── Related Services ──────────────────── */}
        <section className="ds-related">
          <div className="ds-related__inner">
            <div className="ds-related__head">
              <div className="ds-related__label">Continue</div>
              <h2 className="ds-related__title">Move Into Development</h2>
            </div>
            <div className="ds-related__links">
              {relatedLinks.map((rl, i) => (
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
