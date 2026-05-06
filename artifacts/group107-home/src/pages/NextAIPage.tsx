import Nav from "@/components/blocks/Nav";
import Footer from "@/components/blocks/Footer";
import AnimateIn from "@/components/AnimateIn";
import { Icons } from "@/lib/icons";

const ArrowRight = Icons.ArrowRight;
const ArrowUpRight = Icons.ArrowUpRight;
const CheckCircle2 = Icons.CheckCircle2;

const aiServices = [
  { icon: "Cpu", title: "Custom AI Development", desc: "Bespoke AI models and pipelines trained and tuned for your specific business domain and data." },
  { icon: "Workflow", title: "Intelligent Automation", desc: "Replace manual processes with AI-orchestrated workflows that scale without growing headcount." },
  { icon: "MessageSquare", title: "Natural Language Processing", desc: "Document intelligence, classification, extraction, and conversational AI built on production-grade NLP." },
  { icon: "BrainCircuit", title: "Generative AI Integration", desc: "Embed LLMs and generative models into products, tools, and internal workflows — safely and responsibly." },
  { icon: "BarChart2", title: "Predictive Analytics", desc: "Data models that surface business signals, forecast outcomes, and trigger automated actions." },
  { icon: "Network", title: "AI Consulting & Strategy", desc: "Discovery, feasibility assessments, and AI roadmapping for organizations ready to scale intelligently." },
];

const valueBenefits = [
  { icon: "Zap", title: "Speed", desc: "Compress decision cycles and execution time with automation that operates at machine speed." },
  { icon: "TrendingUp", title: "Scale", desc: "AI systems grow with your operation — no linear headcount required to handle volume." },
  { icon: "Shield", title: "Precision", desc: "Reduce human error and inconsistency across high-volume, repetitive business processes." },
];

const processSteps = [
  { num: "01", title: "Discovery", desc: "Identify where AI creates the highest leverage inside your existing workflows and data." },
  { num: "02", title: "Feasibility", desc: "Technical and commercial feasibility assessment with clear ROI modelling." },
  { num: "03", title: "Architecture", desc: "Design the AI system, data pipeline, and integration points before writing code." },
  { num: "04", title: "Build & Train", desc: "Model development, fine-tuning, and integration with your existing systems." },
  { num: "05", title: "Deploy & Monitor", desc: "Production deployment with monitoring, feedback loops, and continuous improvement." },
];

const useCases = [
  { icon: "FileText", sector: "Document Intelligence", desc: "Extract, classify, and route information from unstructured documents at any volume." },
  { icon: "Bot", sector: "Conversational AI", desc: "Customer-facing chatbots, internal assistants, and knowledge retrieval systems." },
  { icon: "Activity", sector: "Process Automation", desc: "End-to-end workflow automation connecting data sources, systems, and human touchpoints." },
  { icon: "LineChart", sector: "Predictive Models", desc: "Churn prediction, demand forecasting, risk scoring, and recommendation engines." },
  { icon: "ScanLine", sector: "Computer Vision", desc: "Image and document analysis, quality control, and visual data extraction pipelines." },
];

const technologies = [
  "OpenAI", "Anthropic", "Google Gemini", "Mistral", "LangChain",
  "Python", "PyTorch", "HuggingFace", "Pinecone", "PostgreSQL + pgvector",
];

const whyPoints = [
  "End-to-end AI delivery — strategy, engineering, and production",
  "Domain-trained models tuned to your data and workflows",
  "Integration-first mindset — AI connects to your existing systems",
  "Responsible AI practices with explainability and compliance built in",
];

const relatedSolutions = [
  { label: "Group 107 Digital", url: "/group107-digital" },
  { label: "Summa", url: "/summa" },
  { label: "Global Docs", url: "/global-docs" },
  { label: "Development Services", url: "/development-services" },
];

export default function NextAIPage() {
  return (
    <div className="page">
      <Nav />
      <main>

        {/* ── Hero ─────────────────────────────── */}
        <section className="na-hero">
          <div className="na-hero__bg-text" aria-hidden="true">AI</div>
          <div className="na-hero__inner">
            <AnimateIn delay={0} direction="up">
              <div className="na-hero__label">Services / Next AI</div>
            </AnimateIn>
            <AnimateIn delay={0.08} direction="up">
              <h1 className="na-hero__title">
                AI Solutions That Create Real Business Impact
              </h1>
            </AnimateIn>
            <AnimateIn delay={0.14} direction="up">
              <p className="na-hero__sub">
                We design, build, and deploy production-grade AI systems that automate workflows, surface intelligence, and scale operations.
              </p>
            </AnimateIn>
            <AnimateIn delay={0.18} direction="up">
              <p className="na-hero__body">
                Next AI is Group 107's AI practice — a team of engineers and data scientists who take AI from concept to live production, embedded directly in your business.
              </p>
            </AnimateIn>
            <AnimateIn delay={0.22} direction="up">
              <div className="na-hero__actions">
                <a href="#na-cta" className="na-hero__cta na-hero__cta--primary">
                  Explore AI Solutions <ArrowRight className="na-hero__cta-icon" />
                </a>
                <a href="#na-services" className="na-hero__cta na-hero__cta--ghost">
                  View Services <ArrowUpRight className="na-hero__cta-icon" />
                </a>
              </div>
            </AnimateIn>
          </div>
          <div className="na-hero__stats">
            {[
              { val: "AI-Native", label: "Engineering Team" },
              { val: "Custom", label: "Model Development" },
              { val: "Production", label: "Ready Delivery" },
              { val: "Full-Cycle", label: "AI Support" },
            ].map((s, i) => (
              <div key={i} className="na-hero__stat">
                <span className="na-hero__stat-val">{s.val}</span>
                <span className="na-hero__stat-label">{s.label}</span>
              </div>
            ))}
          </div>
        </section>

        {/* ── Value ─────────────────────────────── */}
        <section className="na-value">
          <div className="na-value__inner">
            <AnimateIn delay={0} direction="up" className="na-value__head">
              <span className="na-value__tag">Why AI Now</span>
              <h2 className="na-value__title">What AI Does for Your Business</h2>
              <p className="na-value__sub">AI isn't a future technology — it's a production tool. The question is whether your business is using it to its full potential.</p>
            </AnimateIn>
            <div className="na-value__cols">
              {valueBenefits.map((v, i) => {
                const Icon = Icons[v.icon];
                return (
                  <AnimateIn key={i} delay={0.1 * i} direction="up">
                    <div className="na-value__col">
                      <div className="na-value__col-icon">
                        {Icon && <Icon strokeWidth={1.5} />}
                      </div>
                      <span className="na-value__col-title">{v.title}</span>
                      <p className="na-value__col-desc">{v.desc}</p>
                    </div>
                  </AnimateIn>
                );
              })}
            </div>
          </div>
        </section>

        {/* ── AI Services ───────────────────────── */}
        <section id="na-services" className="na-services">
          <div className="na-services__inner">
            <AnimateIn delay={0} direction="up" className="na-services__head">
              <span className="na-services__tag">What We Build</span>
              <h2 className="na-services__title">AI Services</h2>
              <p className="na-services__sub">Six core AI capability areas — each production-ready and delivered end-to-end.</p>
            </AnimateIn>
            <div className="na-services__grid">
              {aiServices.map((svc, i) => {
                const Icon = Icons[svc.icon];
                return (
                  <AnimateIn key={i} delay={0.07 * i} direction="up">
                    <div className="na-services__card">
                      <div className="na-services__card-num">0{i + 1}</div>
                      <div className="na-services__card-icon">
                        {Icon && <Icon strokeWidth={1.5} />}
                      </div>
                      <span className="na-services__card-title">{svc.title}</span>
                      <span className="na-services__card-desc">{svc.desc}</span>
                    </div>
                  </AnimateIn>
                );
              })}
            </div>
          </div>
        </section>

        {/* ── Use Cases ─────────────────────────── */}
        <section className="na-usecases">
          <div className="na-usecases__inner">
            <AnimateIn delay={0} direction="up" className="na-usecases__head">
              <span className="na-usecases__tag">Applications</span>
              <h2 className="na-usecases__title">Where We Apply AI</h2>
              <p className="na-usecases__sub">Real use cases across industries where AI creates measurable operational impact.</p>
            </AnimateIn>
            <div className="na-usecases__grid">
              {useCases.map((uc, i) => {
                const Icon = Icons[uc.icon];
                return (
                  <AnimateIn key={i} delay={0.08 * i} direction="up">
                    <div className="na-usecases__card">
                      <div className="na-usecases__card-icon">
                        {Icon && <Icon strokeWidth={1.5} />}
                      </div>
                      <span className="na-usecases__card-sector">{uc.sector}</span>
                      <p className="na-usecases__card-desc">{uc.desc}</p>
                    </div>
                  </AnimateIn>
                );
              })}
            </div>
          </div>
        </section>

        {/* ── Technology Stack ──────────────────── */}
        <section className="na-tech">
          <div className="na-tech__inner">
            <AnimateIn delay={0} direction="up" className="na-tech__content">
              <span className="na-tech__tag">Technology</span>
              <h2 className="na-tech__title">Technologies We Work With</h2>
              <p className="na-tech__body">
                We work with the leading AI platforms, frameworks, and model providers — choosing the right stack for each use case rather than being locked to a single vendor.
              </p>
              <div className="na-tech__pills">
                {technologies.map((t, i) => (
                  <span key={i} className="na-tech__pill">{t}</span>
                ))}
              </div>
            </AnimateIn>
            <AnimateIn delay={0.12} direction="right" className="na-tech__visual">
              <div className="na-tech__visual-box">
                <div className="na-tech__visual-top">
                  <span className="na-tech__visual-dot" />
                  <span className="na-tech__visual-dot" />
                  <span className="na-tech__visual-dot" />
                  <span className="na-tech__visual-label">Next AI Engine</span>
                </div>
                {[
                  { step: "Ingesting data pipeline...", status: "✓" },
                  { step: "Running inference model...", status: "✓" },
                  { step: "Classifying output...", status: "✓" },
                  { step: "Routing to workflow...", status: "✓" },
                ].map((line, i) => (
                  <div key={i} className="na-tech__visual-line">
                    <span className="na-tech__visual-prompt">›</span>
                    <span className="na-tech__visual-text">{line.step}</span>
                    <span className="na-tech__visual-done">{line.status}</span>
                  </div>
                ))}
                <div className="na-tech__visual-result">
                  <span className="na-tech__visual-result-label">Output Delivered</span>
                </div>
              </div>
            </AnimateIn>
          </div>
        </section>

        {/* ── Process ───────────────────────────── */}
        <section className="na-process">
          <div className="na-process__inner">
            <AnimateIn delay={0} direction="up" className="na-process__head">
              <span className="na-process__tag">Delivery</span>
              <h2 className="na-process__title">From Discovery to Production</h2>
              <p className="na-process__sub">A structured process that takes AI from idea to measurable live impact.</p>
            </AnimateIn>
            <div className="na-process__steps">
              {processSteps.map((step, i) => (
                <AnimateIn key={i} delay={0.08 * i} direction="up">
                  <div className="na-process__step">
                    <span className="na-process__step-num">{step.num}</span>
                    <div className="na-process__step-body">
                      <span className="na-process__step-title">{step.title}</span>
                      <span className="na-process__step-desc">{step.desc}</span>
                    </div>
                    {i < processSteps.length - 1 && (
                      <div className="na-process__step-arrow" aria-hidden="true" />
                    )}
                  </div>
                </AnimateIn>
              ))}
            </div>
          </div>
        </section>

        {/* ── Why Group 107 ─────────────────────── */}
        <section className="na-why">
          <div className="na-why__inner">
            <AnimateIn delay={0} direction="up" className="na-why__head">
              <span className="na-why__tag">Why Us</span>
              <h2 className="na-why__title">Why Group 107 for AI</h2>
              <p className="na-why__sub">
                We don't pitch AI concepts — we build and ship AI systems that work in production environments with real data and real constraints.
              </p>
            </AnimateIn>
            <div className="na-why__list">
              {whyPoints.map((pt, i) => (
                <AnimateIn key={i} delay={0.08 * i} direction="up">
                  <div className="na-why__item">
                    <span className="na-why__item-bar" aria-hidden="true" />
                    <span className="na-why__item-text">{pt}</span>
                  </div>
                </AnimateIn>
              ))}
            </div>
          </div>
        </section>

        {/* ── Final CTA ─────────────────────────── */}
        <section className="na-cta" id="na-cta">
          <div className="na-cta__inner">
            <AnimateIn delay={0} direction="up">
              <span className="na-cta__tag">Get Started</span>
            </AnimateIn>
            <AnimateIn delay={0.08} direction="up">
              <h2 className="na-cta__title">
                Let's Build Your<br />AI Advantage
              </h2>
            </AnimateIn>
            <AnimateIn delay={0.14} direction="up">
              <p className="na-cta__sub">
                Start with a discovery session — we'll map out where AI creates the highest value in your business and what it takes to get there.
              </p>
            </AnimateIn>
            <AnimateIn delay={0.2} direction="up">
              <div className="na-cta__actions">
                <a href="mailto:info@group107.com" className="na-cta__btn na-cta__btn--primary">
                  Book a Discovery Call <ArrowRight className="na-cta__btn-icon" />
                </a>
                <a href="mailto:info@group107.com" className="na-cta__btn na-cta__btn--ghost">
                  Contact Us
                </a>
              </div>
            </AnimateIn>
            <AnimateIn delay={0.26} direction="up">
              <div className="na-cta__trust">
                {["Free AI discovery session", "No vendor lock-in", "Production-grade delivery"].map((t, i) => (
                  <div key={i} className="na-cta__trust-item">
                    {(() => { const Icon = CheckCircle2; return Icon ? <Icon strokeWidth={1.5} className="na-cta__trust-icon" /> : null; })()}
                    {t}
                  </div>
                ))}
              </div>
            </AnimateIn>
          </div>
        </section>

        {/* ── Related Solutions ─────────────────── */}
        <section className="ds-related">
          <div className="ds-related__inner">
            <div className="ds-related__head">
              <div className="ds-related__label">Explore More</div>
              <h2 className="ds-related__title">Explore More AI-Powered Products</h2>
            </div>
            <div className="ds-related__links">
              {relatedSolutions.map((rl, i) => (
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
