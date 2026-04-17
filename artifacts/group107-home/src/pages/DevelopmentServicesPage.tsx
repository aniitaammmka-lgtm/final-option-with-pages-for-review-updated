import Nav from "@/components/blocks/Nav";
import Footer from "@/components/blocks/Footer";
import AnimateIn from "@/components/AnimateIn";
import { Icons } from "@/lib/icons";

const ArrowRight = Icons.ArrowRight;
const ArrowUpRight = Icons.ArrowUpRight;

const subServices = [
  {
    id: "web",
    icon: "Globe",
    label: "Web Development",
    desc: "Marketing websites, corporate portals, and custom WordPress solutions built for performance and growth.",
    anchor: "#web",
  },
  {
    id: "software",
    icon: "Code2",
    label: "Software Development",
    desc: "Custom platforms, internal systems, enterprise tools, integrations, and tailored business software.",
    anchor: "#software",
  },
  {
    id: "mobile",
    icon: "Smartphone",
    label: "Mobile Development",
    desc: "iOS, Android, and cross-platform mobile applications for customer and internal use.",
    anchor: "#mobile",
  },
  {
    id: "discovery",
    icon: "Lightbulb",
    label: "Product Discovery",
    desc: "Structured planning to define features, architecture, priorities, and delivery roadmap before building.",
    anchor: "#discovery",
  },
];

const whyPoints = [
  {
    icon: "Target",
    title: "Business-First Approach",
    desc: "We build around goals, users, and operations — not only requirements lists.",
  },
  {
    icon: "Layers",
    title: "Cross-Functional Delivery",
    desc: "Strategy, design, development, DevOps, QA, and accessibility can work together under one partner.",
  },
  {
    icon: "Settings",
    title: "Flexible Engagement",
    desc: "Project-based delivery, dedicated teams, or mixed models depending on the client's need.",
  },
  {
    icon: "Scaling",
    title: "Scalable Expertise",
    desc: "From websites and mobile apps to enterprise systems and AI-connected solutions.",
  },
  {
    icon: "CheckCircle2",
    title: "Quality and Transparency",
    desc: "Structured execution, clear communication, and reliable delivery process.",
  },
];

const serviceDetails = [
  {
    id: "web",
    icon: "Globe",
    num: "01",
    total: "04",
    title: "Web Development",
    sub: "Responsive. Performant. Business-Oriented.",
    body: "Group 107 delivers customized web development solutions for companies that need high-quality, responsive, and user-friendly digital experiences. Our expertise includes custom WordPress development, front-end and back-end implementation, and business-oriented website builds designed to support growth, performance, and maintainability.",
    capabilities: [
      { icon: "Code2", label: "Custom WordPress websites" },
      { icon: "Globe", label: "Corporate and marketing websites" },
      { icon: "MonitorSmartphone", label: "Responsive front-end implementation" },
      { icon: "Database", label: "Back-end functionality and integrations" },
      { icon: "Zap", label: "Performance-focused builds" },
      { icon: "Accessibility", label: "Accessibility-aware delivery" },
    ],
    image: "/project-1.png",
  },
  {
    id: "software",
    icon: "Code2",
    num: "02",
    total: "04",
    title: "Software Development",
    sub: "Custom. Scalable. Built Around Your Operations.",
    body: "We build custom software solutions tailored to each client's operations, workflows, and business objectives. From internal systems and operational tools to enterprise-grade platforms, Group 107 helps companies streamline processes, improve efficiency, and create scalable digital products that fit their exact requirements.",
    capabilities: [
      { icon: "LayoutDashboard", label: "Custom platform development" },
      { icon: "Building2", label: "Enterprise software solutions" },
      { icon: "Settings", label: "Internal business systems" },
      { icon: "Link", label: "API and third-party integrations" },
      { icon: "Layers", label: "Scalable architecture thinking" },
      { icon: "FileCode2", label: "Tailored feature development" },
    ],
    image: "/project-2.png",
  },
  {
    id: "mobile",
    icon: "Smartphone",
    num: "03",
    total: "04",
    title: "Mobile Development",
    sub: "iOS. Android. Cross-Platform. Always UX-First.",
    body: "Group 107 develops mobile applications tailored to the specific goals of each product and business. Our team supports mobile solutions for iOS, Android, and cross-platform environments, helping clients launch user-friendly, high-quality apps ranging from focused business tools to more complex product ecosystems.",
    capabilities: [
      { icon: "Smartphone", label: "iOS and Android app development" },
      { icon: "Layers", label: "Cross-platform solutions" },
      { icon: "Users", label: "Customer-facing mobile products" },
      { icon: "Settings", label: "Internal operational apps" },
      { icon: "MonitorSmartphone", label: "UX-driven mobile interfaces" },
      { icon: "Zap", label: "Ongoing product evolution support" },
    ],
    image: "/project-3.png",
  },
  {
    id: "discovery",
    icon: "Lightbulb",
    num: "04",
    total: "04",
    title: "Product Discovery",
    sub: "Clarity Before Code. Strategy Before Execution.",
    body: "Before building, we help clients clarify what should be built and why. Our product discovery process helps define goals, user needs, feature priorities, technical direction, and delivery scope. This stage reduces risk, improves alignment, and creates a stronger foundation for design and development.",
    capabilities: [
      { icon: "Target", label: "Business and product goals alignment" },
      { icon: "Package", label: "Feature scoping and prioritization" },
      { icon: "Workflow", label: "User flow and product logic definition" },
      { icon: "Server", label: "Technical direction and architecture input" },
      { icon: "Map", label: "Delivery planning and roadmap creation" },
    ],
    image: "/hero.png",
  },
];

const processSteps = [
  { num: "01", icon: "Search", title: "Discovery", desc: "Understanding business goals, users, and technical needs." },
  { num: "02", icon: "Map", title: "Planning", desc: "Defining scope, priorities, and delivery approach." },
  { num: "03", icon: "Layers", title: "Design & Architecture", desc: "Shaping UX and technical direction together." },
  { num: "04", icon: "Code2", title: "Development", desc: "Iterative implementation with ongoing communication." },
  { num: "05", icon: "FlaskConical", title: "QA & Refinement", desc: "Testing, validation, and issue resolution." },
  { num: "06", icon: "Rocket", title: "Launch & Next Phase", desc: "Deployment and roadmap for future improvements." },
];

const caseStudies = [
  { name: "MP Check", tag: "Platform" },
  { name: "RoutePerfect", tag: "Web App" },
  { name: "IMTC", tag: "Enterprise" },
  { name: "Accessible Docs", tag: "AI Platform" },
  { name: "Grip AI", tag: "AI SaaS" },
  { name: "Priority", tag: "Website" },
  { name: "Nova", tag: "Mobile" },
  { name: "Ahoy", tag: "Software" },
  { name: "Ryze", tag: "Platform" },
  { name: "Evergent", tag: "Enterprise" },
];

const engageModels = [
  {
    icon: "Users",
    title: "Dedicated Teams",
    sub: "Talents",
    desc: "Scale your team with top-tier developers, AI specialists, and data experts. We help you integrate AI capabilities into your workflows, products, and operations while managing recruitment and team performance.",
    cta: "Learn About Talents",
  },
  {
    icon: "Package",
    title: "Project-Based Delivery",
    sub: "End-to-End",
    desc: "End-to-end development of digital products — from planning and architecture to implementation and deployment. We build systems that automate processes, improve efficiency, and support smarter decision-making.",
    cta: "Discuss Your Project",
  },
  {
    icon: "Lightbulb",
    title: "Discovery & Planning",
    sub: "Strategy First",
    desc: "Start with a structured phase to identify where development can deliver the highest impact. We define use cases, evaluate the right technologies, and build a clear roadmap for implementation.",
    cta: "Start With Discovery",
  },
];

const relatedLinks = [
  { label: "Web Development", url: "/development-services#web" },
  { label: "Software Development", url: "/development-services#software" },
  { label: "Mobile Development", url: "/development-services#mobile" },
  { label: "Product Discovery", url: "/development-services#discovery" },
  { label: "Infrastructure & DevOps", url: "/services#devops" },
  { label: "Next AI", url: "/services#nextai" },
  { label: "Case Studies", url: "/#casestudies" },
  { label: "Contact Us", url: "#contact-cta" },
];

export default function DevelopmentServicesPage() {
  return (
    <div className="page">
      <Nav />
      <main>

        {/* ── Hero ─────────────────────────── */}
        <section className="ds-hero">
          <div className="ds-hero__bg-grid" aria-hidden="true" />
          <div className="ds-hero__orb ds-hero__orb--1" aria-hidden="true" />
          <div className="ds-hero__orb ds-hero__orb--2" aria-hidden="true" />
          <div className="ds-hero__floating-icons" aria-hidden="true">
            {["Globe", "Code2", "Smartphone", "Lightbulb", "BrainCircuit", "Zap", "Database", "Layers"].map((ic, i) => {
              const Icon = Icons[ic];
              return Icon ? (
                <div key={i} className={`ds-hero__float-icon ds-hero__float-icon--${i + 1}`}>
                  <Icon strokeWidth={1} />
                </div>
              ) : null;
            })}
          </div>

          <div className="ds-hero__inner">
            <AnimateIn delay={0} direction="up">
              <div className="ds-hero__label">Services / Development Services</div>
            </AnimateIn>
            <AnimateIn delay={0.08} direction="up">
              <h1 className="ds-hero__title">
                Development That Moves Your Business Forward
              </h1>
            </AnimateIn>
            <AnimateIn delay={0.16} direction="up">
              <p className="ds-hero__sub">
                From websites and platforms to mobile apps and product discovery, Group 107 helps companies design, build, and scale digital products using modern technologies and AI-based solutions — with the right team structure and delivery approach.
              </p>
            </AnimateIn>
            <AnimateIn delay={0.24} direction="up">
              <div className="ds-hero__actions">
                <a href="#contact-cta" className="ds-hero__cta ds-hero__cta--primary">
                  Let's Talk About Your Project <ArrowRight className="ds-hero__cta-icon" />
                </a>
                <a href="/#casestudies" className="ds-hero__cta ds-hero__cta--secondary">
                  View Case Studies <ArrowUpRight className="ds-hero__cta-icon" />
                </a>
              </div>
            </AnimateIn>
            <AnimateIn delay={0.3} direction="up" className="ds-hero__stats">
              {[
                { val: "4", label: "Dev Service Areas" },
                { val: "150+", label: "Projects Delivered" },
                { val: "12+", label: "Tech Stacks" },
                { val: "700+", label: "Global Clients" },
              ].map((s, i) => (
                <div key={i} className="ds-hero__stat">
                  <span className="ds-hero__stat-val">{s.val}</span>
                  <span className="ds-hero__stat-label">{s.label}</span>
                </div>
              ))}
            </AnimateIn>
          </div>
        </section>

        {/* ── Intro ─────────────────────────── */}
        <section className="ds-intro">
          <div className="ds-intro__inner">
            <AnimateIn delay={0} direction="left" className="ds-intro__graphic">
              <div className="ds-intro__graphic-grid">
                {subServices.map((s, i) => {
                  const Icon = Icons[s.icon];
                  return (
                    <a key={i} href={s.anchor} className="ds-intro__graphic-tile">
                      {Icon && <Icon strokeWidth={1.5} className="ds-intro__graphic-tile-icon" />}
                      <span>{s.label}</span>
                    </a>
                  );
                })}
              </div>
            </AnimateIn>
            <AnimateIn delay={0.12} direction="up" className="ds-intro__text">
              <div className="ds-intro__label">What We Do</div>
              <h2 className="ds-intro__title">End-to-End Development, Not Just Execution</h2>
              <p className="ds-intro__body">
                Group 107 provides development services for companies that need more than coding resources. We combine product thinking, UX awareness, architecture, development, QA, and delivery management to turn ideas into reliable digital products.
              </p>
              <p className="ds-intro__body">
                Whether the need is a WordPress website, custom software platform, mobile app, or early-stage product definition, our team builds solutions around real business goals — using modern technologies and AI-based approaches to deliver quick, quality results.
              </p>
              <div className="ds-intro__badges">
                {["Modern Tech Stack", "AI-Augmented", "Quality-Focused", "Fast Delivery"].map((b, i) => (
                  <div key={i} className="ds-intro__badge">
                    {(() => { const Icon = Icons["CheckCircle2"]; return Icon ? <Icon strokeWidth={1.5} className="ds-intro__badge-icon" /> : null; })()}
                    {b}
                  </div>
                ))}
              </div>
            </AnimateIn>
          </div>
        </section>

        {/* ── Services Overview Grid ─────────── */}
        <section className="ds-services">
          <div className="ds-services__inner">
            <div className="ds-services__head">
              <AnimateIn delay={0} direction="up">
                <div className="ds-services__label">Service Areas</div>
              </AnimateIn>
              <AnimateIn delay={0.06} direction="up">
                <h2 className="ds-services__title">Our Development Services</h2>
              </AnimateIn>
            </div>
            <div className="ds-services__grid">
              {subServices.map((s, i) => {
                const Icon = Icons[s.icon];
                return (
                  <AnimateIn key={s.id} delay={0.08 * i} direction="up">
                    <a href={s.anchor} className="ds-services__card">
                      <div className="ds-services__card-num">0{i + 1}</div>
                      <div className="ds-services__card-icon-wrap">
                        {Icon && <Icon strokeWidth={1.25} className="ds-services__card-icon" />}
                      </div>
                      <h3 className="ds-services__card-title">{s.label}</h3>
                      <p className="ds-services__card-desc">{s.desc}</p>
                      <div className="ds-services__card-cta">
                        Explore <ArrowRight className="ds-services__card-cta-icon" />
                      </div>
                    </a>
                  </AnimateIn>
                );
              })}
            </div>
          </div>
        </section>

        {/* ── Why Group 107 ─────────────────── */}
        <section className="ds-why">
          <div className="ds-why__pattern" aria-hidden="true" />
          <div className="ds-why__inner">
            <div className="ds-why__head">
              <AnimateIn delay={0} direction="up">
                <div className="ds-why__label">Our Positioning</div>
              </AnimateIn>
              <AnimateIn delay={0.06} direction="up">
                <h2 className="ds-why__title">Why Companies Choose Group 107</h2>
              </AnimateIn>
            </div>
            <div className="ds-why__grid">
              {whyPoints.map((pt, i) => {
                const Icon = Icons[pt.icon];
                return (
                  <AnimateIn key={i} delay={0.07 * i} direction="up">
                    <div className="ds-why__card">
                      <div className="ds-why__card-icon">
                        {Icon && <Icon strokeWidth={1.5} />}
                      </div>
                      <div className="ds-why__card-body">
                        <div className="ds-why__card-title">{pt.title}</div>
                        <div className="ds-why__card-desc">{pt.desc}</div>
                      </div>
                    </div>
                  </AnimateIn>
                );
              })}
            </div>
          </div>
        </section>

        {/* ── Individual Service Sections ──────── */}
        {serviceDetails.map((svc, idx) => {
          const SvcIcon = Icons[svc.icon];
          const isEven = idx % 2 === 0;
          return (
            <section key={svc.id} id={svc.id} className={`ds-service ${isEven ? "ds-service--light" : "ds-service--muted"}`}>
              <div className="ds-service__inner">

                <AnimateIn delay={0} direction={isEven ? "left" : "right"} className={`ds-service__visual ${isEven ? "" : "ds-service__visual--flip"}`}>
                  <div className="ds-service__img-wrap">
                    <img src={svc.image} alt={svc.title} className="ds-service__img" />
                    <div className="ds-service__img-overlay" />
                    <div className="ds-service__img-badge">
                      {SvcIcon && <SvcIcon strokeWidth={1.5} className="ds-service__img-badge-icon" />}
                      <span>{svc.label || svc.title}</span>
                    </div>
                    <div className="ds-service__img-num">{svc.num}</div>
                  </div>
                  <div className="ds-service__tech-badge">
                    {(() => { const Icon = Icons["BrainCircuit"]; return Icon ? <Icon strokeWidth={1.5} className="ds-service__tech-icon" /> : null; })()}
                    <span>AI-Augmented &amp; Modern Stack</span>
                  </div>
                </AnimateIn>

                <AnimateIn delay={0.1} direction="up" className="ds-service__content">
                  <div className="ds-service__content-num">
                    {SvcIcon && <SvcIcon strokeWidth={1.5} className="ds-service__content-num-icon" />}
                    <span>{svc.num} / {svc.total}</span>
                  </div>
                  <h2 className="ds-service__title">{svc.title}</h2>
                  <p className="ds-service__sub">{svc.sub}</p>
                  <p className="ds-service__body">{svc.body}</p>

                  <div className="ds-service__caps-label">Key Capabilities</div>
                  <div className="ds-service__caps">
                    {svc.capabilities.map((cap, j) => {
                      const CapIcon = Icons[cap.icon];
                      return (
                        <div key={j} className="ds-service__cap">
                          <div className="ds-service__cap-icon">
                            {CapIcon && <CapIcon strokeWidth={1.5} />}
                          </div>
                          <span className="ds-service__cap-label">{cap.label}</span>
                          <ArrowRight className="ds-service__cap-arrow" />
                        </div>
                      );
                    })}
                  </div>

                  <a href="#contact-cta" className="ds-service__cta">
                    Discuss This Service <ArrowRight className="ds-service__cta-icon" />
                  </a>
                </AnimateIn>

              </div>
            </section>
          );
        })}

        {/* ── Process ───────────────────────── */}
        <section className="ds-process">
          <div className="ds-process__grain" aria-hidden="true" />
          <div className="ds-process__inner">
            <div className="ds-process__head">
              <AnimateIn delay={0} direction="up">
                <div className="ds-process__label">How We Work</div>
              </AnimateIn>
              <AnimateIn delay={0.06} direction="up">
                <h2 className="ds-process__title">How We Deliver Development Projects</h2>
              </AnimateIn>
              <AnimateIn delay={0.1} direction="up">
                <p className="ds-process__sub">A structured, transparent delivery model — from first conversation to launch and beyond.</p>
              </AnimateIn>
            </div>
            <div className="ds-process__steps">
              {processSteps.map((step, i) => {
                const Icon = Icons[step.icon];
                return (
                  <AnimateIn key={i} delay={0.08 * i} direction="up">
                    <div className="ds-process__step">
                      <div className="ds-process__step-track">
                        <div className="ds-process__step-dot">
                          {Icon && <Icon strokeWidth={1.5} className="ds-process__step-dot-icon" />}
                        </div>
                        {i < processSteps.length - 1 && <div className="ds-process__step-line" />}
                      </div>
                      <div className="ds-process__step-body">
                        <div className="ds-process__step-num">{step.num}</div>
                        <div className="ds-process__step-title">{step.title}</div>
                        <p className="ds-process__step-desc">{step.desc}</p>
                      </div>
                    </div>
                  </AnimateIn>
                );
              })}
            </div>
          </div>
        </section>

        {/* ── Cross-Service Collaboration ──── */}
        <section className="ds-cross">
          <div className="ds-cross__inner">
            <AnimateIn delay={0} direction="left" className="ds-cross__graphic">
              <div className="ds-cross__diagram">
                <div className="ds-cross__diagram-core">
                  {(() => { const Icon = Icons["Code2"]; return Icon ? <Icon strokeWidth={1} className="ds-cross__diagram-core-icon" /> : null; })()}
                  <span>Dev</span>
                </div>
                {[
                  { label: "DevOps", icon: "Server" },
                  { label: "Accessibility", icon: "Accessibility" },
                  { label: "AI / Next", icon: "BrainCircuit" },
                  { label: "Digital", icon: "BarChart2" },
                  { label: "Talents", icon: "Users" },
                  { label: "Fintech", icon: "TrendingUp" },
                ].map((node, i) => {
                  const Icon = Icons[node.icon];
                  const angle = (i / 6) * 360;
                  return (
                    <div
                      key={i}
                      className="ds-cross__diagram-node"
                      style={{ "--ds-angle": `${angle}deg` } as React.CSSProperties}
                    >
                      {Icon && <Icon strokeWidth={1.5} />}
                      <span>{node.label}</span>
                    </div>
                  );
                })}
              </div>
            </AnimateIn>

            <AnimateIn delay={0.12} direction="up" className="ds-cross__text">
              <div className="ds-cross__label">Unified Delivery</div>
              <h2 className="ds-cross__title">More Than Development Alone</h2>
              <p className="ds-cross__body">
                When needed, Development Services can be combined with other Group 107 capabilities such as DevOps, accessibility, AI integrations, digital growth support, recruitment, and technical consultancy.
              </p>
              <p className="ds-cross__body">
                This allows clients to work with one partner across multiple stages of product delivery and scale — without switching vendors or losing context.
              </p>
              <div className="ds-cross__chips">
                {["DevOps & Cloud", "Accessibility", "Next AI", "Talents", "Digital Growth", "Fintech"].map((chip, i) => (
                  <span key={i} className="ds-cross__chip">{chip}</span>
                ))}
              </div>
              <a href="/services" className="ds-cross__cta">
                View All Services <ArrowRight className="ds-cross__cta-icon" />
              </a>
            </AnimateIn>
          </div>
        </section>

        {/* ── Case Studies ─────────────────── */}
        <section className="ds-cases">
          <div className="ds-cases__inner">
            <div className="ds-cases__head">
              <AnimateIn delay={0} direction="up">
                <div className="ds-cases__label">Proof of Work</div>
              </AnimateIn>
              <AnimateIn delay={0.06} direction="up">
                <h2 className="ds-cases__title">Selected Development Work</h2>
              </AnimateIn>
              <AnimateIn delay={0.1} direction="up">
                <p className="ds-cases__sub">Explore selected projects delivered by Group 107 across websites, digital platforms, and product development initiatives.</p>
              </AnimateIn>
            </div>
            <div className="ds-cases__grid">
              {caseStudies.map((cs, i) => (
                <AnimateIn key={i} delay={0.05 * i} direction="up">
                  <a href="/#casestudies" className="ds-cases__card">
                    <div className="ds-cases__card-tag">{cs.tag}</div>
                    <div className="ds-cases__card-name">{cs.name}</div>
                    <ArrowUpRight className="ds-cases__card-arrow" />
                  </a>
                </AnimateIn>
              ))}
            </div>
            <AnimateIn delay={0.2} direction="up" className="ds-cases__footer">
              <a href="/#casestudies" className="ds-cases__view-all">
                View All Case Studies <ArrowRight className="ds-cases__view-all-icon" />
              </a>
            </AnimateIn>
          </div>
        </section>

        {/* ── Engagement Models ─────────────── */}
        <section className="ds-engage">
          <div className="ds-engage__inner">
            <div className="ds-engage__head">
              <AnimateIn delay={0} direction="up">
                <div className="ds-engage__label">Engagement Options</div>
              </AnimateIn>
              <AnimateIn delay={0.06} direction="up">
                <h2 className="ds-engage__title">How You Can Work With Us</h2>
              </AnimateIn>
              <AnimateIn delay={0.1} direction="up">
                <p className="ds-engage__sub">Choose how to work with Group 107 — from scaling your team to building AI-powered products and systems tailored to your business.</p>
              </AnimateIn>
            </div>
            <div className="ds-engage__grid">
              {engageModels.map((model, i) => {
                const Icon = Icons[model.icon];
                return (
                  <AnimateIn key={i} delay={0.1 * i} direction="up">
                    <div className="ds-engage__card">
                      <div className="ds-engage__card-top">
                        <div className="ds-engage__card-icon">
                          {Icon && <Icon strokeWidth={1.5} />}
                        </div>
                        <span className="ds-engage__card-sub">{model.sub}</span>
                      </div>
                      <h3 className="ds-engage__card-title">{model.title}</h3>
                      <p className="ds-engage__card-desc">{model.desc}</p>
                      <a href="#contact-cta" className="ds-engage__card-cta">
                        {model.cta} <ArrowRight className="ds-engage__card-cta-icon" />
                      </a>
                    </div>
                  </AnimateIn>
                );
              })}
            </div>
          </div>
        </section>

        {/* ── CTA ───────────────────────────── */}
        <section id="contact-cta" className="ds-cta">
          <div className="ds-cta__grain" aria-hidden="true" />
          <div className="ds-cta__glow" aria-hidden="true" />
          <div className="ds-cta__bg-icons" aria-hidden="true">
            {["Globe", "Code2", "Smartphone", "BrainCircuit"].map((ic, i) => {
              const Icon = Icons[ic];
              return Icon ? <Icon key={i} className={`ds-cta__bg-icon ds-cta__bg-icon--${i + 1}`} strokeWidth={0.75} /> : null;
            })}
          </div>
          <div className="ds-cta__inner">
            <AnimateIn delay={0} direction="up">
              <div className="ds-cta__eyebrow">
                {(() => { const Icon = Icons["Rocket"]; return Icon ? <Icon strokeWidth={1.5} className="ds-cta__eyebrow-icon" /> : null; })()}
                Ready to Build
              </div>
            </AnimateIn>
            <AnimateIn delay={0.08} direction="up">
              <h2 className="ds-cta__title">Need a Development Partner That Can Actually Deliver?</h2>
            </AnimateIn>
            <AnimateIn delay={0.14} direction="up">
              <p className="ds-cta__sub">Whether you're launching a new product, rebuilding an existing platform, or defining the next phase of growth, Group 107 can help you move from idea to execution with the right team and structure.</p>
            </AnimateIn>
            <AnimateIn delay={0.2} direction="up">
              <a href="#" className="ds-cta__btn">
                Book a Consultation <ArrowRight className="ds-cta__btn-icon" />
              </a>
            </AnimateIn>
            <AnimateIn delay={0.26} direction="up">
              <div className="ds-cta__trust">
                {["No commitment required", "Response within 24h", "Free initial consultation"].map((t, i) => (
                  <div key={i} className="ds-cta__trust-item">
                    {(() => { const Icon = Icons["CheckCircle2"]; return Icon ? <Icon strokeWidth={1.5} className="ds-cta__trust-icon" /> : null; })()}
                    {t}
                  </div>
                ))}
              </div>
            </AnimateIn>
          </div>
        </section>

        {/* ── Related Pages ─────────────────── */}
        <section className="ds-related">
          <div className="ds-related__inner">
            <div className="ds-related__label">Related Services</div>
            <div className="ds-related__links">
              {relatedLinks.map((link, i) => (
                <a key={i} href={link.url} className="ds-related__link">
                  {link.label} <ArrowRight className="ds-related__link-icon" />
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
