import Nav from "@/components/blocks/Nav";
import Footer from "@/components/blocks/Footer";
import AnimateIn from "@/components/AnimateIn";
import { Icons } from "@/lib/icons";

const ArrowRight = Icons.ArrowRight;
const ArrowUpRight = Icons.ArrowUpRight;
const CheckCircle2 = Icons.CheckCircle2;

const capabilities = [
  { icon: "FileText", title: "Document Reading", desc: "Read and understand complex financial documents of any length or format." },
  { icon: "Database", title: "Data Extraction", desc: "Extract key data points, figures, and structured information automatically." },
  { icon: "FileSearch", title: "Smart Summaries", desc: "Generate clear, concise summaries of dense financial content." },
  { icon: "Layers", title: "Batch Processing", desc: "Process large volumes of documents simultaneously without manual effort." },
  { icon: "Network", title: "API Integration", desc: "Connect Summa directly to your existing systems via a clean API." },
  { icon: "BarChart2", title: "Structured Output", desc: "Deliver organized, machine-readable data ready for downstream use." },
];

const processSteps = [
  { num: "01", title: "Upload or Connect", desc: "Upload documents directly or connect your existing system via API." },
  { num: "02", title: "AI Analysis", desc: "Summa reads and analyzes the full content with financial-domain understanding." },
  { num: "03", title: "Data Extraction", desc: "Key figures, metrics, and insights are identified and extracted." },
  { num: "04", title: "Structured Results", desc: "Receive clean summaries and structured data ready for immediate use." },
];

const useCases = [
  { icon: "TrendingUp", sector: "Financial Analysis", desc: "Quickly extract key metrics from earnings reports, balance sheets, and filings." },
  { icon: "LineChart", sector: "Investment Research", desc: "Accelerate due diligence by processing large volumes of financial documents." },
  { icon: "FileCheck", sector: "Compliance Reviews", desc: "Automate review of regulatory filings and compliance documentation." },
  { icon: "Building2", sector: "Reporting & Filings", desc: "Monitor and summarize corporate reports and public disclosures at scale." },
  { icon: "Database", sector: "Internal Data Processing", desc: "Route structured financial data into internal workflows and databases." },
  { icon: "Workflow", sector: "Workflow Automation", desc: "Integrate document intelligence into existing business processes." },
];

const businessValues = [
  { num: "01", title: "Save Time on Manual Reading", desc: "Eliminate hours spent reviewing lengthy financial documents manually." },
  { num: "02", title: "Reduce Human Errors", desc: "AI-driven extraction is consistent and less prone to oversight than manual review." },
  { num: "03", title: "Handle More Data", desc: "Scale document processing without growing your team." },
  { num: "04", title: "Make Better Decisions", desc: "Clear, structured insights enable faster and more informed decision-making." },
];

const integrationItems = [
  { label: "API Access", sub: "Clean REST API" },
  { label: "Scalable Volume", sub: "Enterprise Grade" },
  { label: "Flexible Setup", sub: "Custom Config" },
  { label: "Secure Transfer", sub: "Encrypted" },
];

const whyGroup107Points = [
  "AI integration expertise across industries",
  "Custom workflow development tailored to your operations",
  "Data engineering and system integration capabilities",
  "Full-cycle support from pilot to production scale",
];

const engagements = [
  { tag: "Start", title: "Book a Demo", desc: "See Summa in action with your own document types and use cases." },
  { tag: "Pilot", title: "Start a Pilot", desc: "Run a structured pilot on a real subset of your document library." },
  { tag: "Deploy", title: "System Integration", desc: "Integrate Summa directly into your infrastructure with full API support." },
  { tag: "Scale", title: "Scale Organization-Wide", desc: "Expand across your entire document operation with ongoing support." },
];

const relatedSolutions = [
  { label: "AI Integrations", url: "/services#nextai" },
  { label: "Data Engineering", url: "/services#devops" },
  { label: "Product Discovery", url: "/product-discovery" },
  { label: "Custom Development", url: "/development-services" },
];

export default function SummaPage() {
  return (
    <div className="page">
      <Nav />
      <main>

        {/* ── Hero ─────────────────────────────── */}
        <section className="smm-hero">
          <div className="smm-hero__bg-text" aria-hidden="true">SUMMA</div>
          <div className="smm-hero__inner">
            <AnimateIn delay={0} direction="up">
              <div className="smm-hero__label">Product Lobby / Summa</div>
            </AnimateIn>
            <AnimateIn delay={0.08} direction="up">
              <h1 className="smm-hero__title">
                Turn Financial Documents<br />Into Simple Insights
              </h1>
            </AnimateIn>
            <AnimateIn delay={0.14} direction="up">
              <p className="smm-hero__sub">
                Summa reads complex financial texts and turns them into clear, structured information you can use.
              </p>
            </AnimateIn>
            <AnimateIn delay={0.18} direction="up">
              <p className="smm-hero__body">
                Instead of spending hours reading reports, filings, and documents, Summa helps you quickly understand the key points and data that matter.
              </p>
            </AnimateIn>
            <AnimateIn delay={0.22} direction="up">
              <div className="smm-hero__actions">
                <a href="#smm-cta" className="smm-hero__cta smm-hero__cta--primary">
                  Request Demo <ArrowRight className="smm-hero__cta-icon" />
                </a>
                <a href="#smm-capabilities" className="smm-hero__cta smm-hero__cta--ghost">
                  Explore Summa <ArrowUpRight className="smm-hero__cta-icon" />
                </a>
              </div>
            </AnimateIn>
          </div>
          <div className="smm-hero__stats">
            {[
              { val: "Financial", label: "Domain Focus" },
              { val: "AI-Native", label: "Architecture" },
              { val: "API", label: "Ready" },
              { val: "Enterprise", label: "Grade Security" },
            ].map((s, i) => (
              <div key={i} className="smm-hero__stat">
                <span className="smm-hero__stat-val">{s.val}</span>
                <span className="smm-hero__stat-label">{s.label}</span>
              </div>
            ))}
          </div>
        </section>

        {/* ── What is Summa ─────────────────────── */}
        <section className="smm-what">
          <div className="smm-what__inner">
            <AnimateIn delay={0} direction="left" className="smm-what__left">
              <span className="smm-what__tag">Definition</span>
              <h2 className="smm-what__title">What is Summa?</h2>
              <p className="smm-what__body">
                Summa is a tool that helps companies understand financial documents faster. It reads large texts, finds important information, and organizes it into clear summaries and data points.
              </p>
              <p className="smm-what__body">
                Built specifically for financial content, Summa understands the language, numbers, and context that matter — delivering reliable, structured results at scale.
              </p>
            </AnimateIn>
            <AnimateIn delay={0.1} direction="up" className="smm-what__diagram">
              <div className="smm-what__node smm-what__node--in">
                <span className="smm-what__node-label">Financial Reports</span>
              </div>
              <div className="smm-what__node smm-what__node--in">
                <span className="smm-what__node-label">Regulatory Filings</span>
              </div>
              <div className="smm-what__node smm-what__node--in">
                <span className="smm-what__node-label">Investment Documents</span>
              </div>
              <div className="smm-what__arrow" aria-hidden="true" />
              <div className="smm-what__node smm-what__node--out">
                <span className="smm-what__node-label">Clear Structured Insights</span>
              </div>
            </AnimateIn>
          </div>
        </section>

        {/* ── Problem → Solution ────────────────── */}
        <section className="smm-problem">
          <div className="smm-problem__inner">
            <AnimateIn delay={0} direction="up" className="smm-problem__head">
              <span className="smm-problem__tag">Value Proposition</span>
              <h2 className="smm-problem__title">Too Much Data.<br />Not Enough Time.</h2>
            </AnimateIn>
            <div className="smm-problem__cols">
              <AnimateIn delay={0.08} direction="up">
                <div className="smm-problem__col smm-problem__col--problem">
                  <div className="smm-problem__col-label">Problem</div>
                  <p className="smm-problem__col-text">Financial documents are long, complex, and take a lot of time to review manually — with high risk of oversight.</p>
                </div>
              </AnimateIn>
              <AnimateIn delay={0.14} direction="up">
                <div className="smm-problem__col smm-problem__col--solution">
                  <div className="smm-problem__col-label">Solution</div>
                  <p className="smm-problem__col-text">Summa AI reads and summarizes them automatically, using financial-domain intelligence to identify what truly matters.</p>
                </div>
              </AnimateIn>
              <AnimateIn delay={0.2} direction="up">
                <div className="smm-problem__col smm-problem__col--result">
                  <div className="smm-problem__col-label">Result</div>
                  <p className="smm-problem__col-text">You get the key insights faster and can make decisions quicker — with less manual effort and fewer missed details.</p>
                </div>
              </AnimateIn>
            </div>
          </div>
        </section>

        {/* ── Key Capabilities ─────────────────── */}
        <section id="smm-capabilities" className="smm-caps">
          <div className="smm-caps__inner">
            <AnimateIn delay={0} direction="up" className="smm-caps__head">
              <span className="smm-caps__tag">Platform</span>
              <h2 className="smm-caps__title">What Summa Can Do</h2>
              <p className="smm-caps__sub">Six core capabilities designed for financial document intelligence at scale.</p>
            </AnimateIn>
            <div className="smm-caps__grid">
              {capabilities.map((cap, i) => {
                const Icon = Icons[cap.icon];
                return (
                  <AnimateIn key={i} delay={0.07 * i} direction="up">
                    <div className="smm-caps__card">
                      <div className="smm-caps__card-num">0{i + 1}</div>
                      <div className="smm-caps__card-icon">
                        {Icon && <Icon strokeWidth={1.5} />}
                      </div>
                      <span className="smm-caps__card-title">{cap.title}</span>
                      <span className="smm-caps__card-desc">{cap.desc}</span>
                    </div>
                  </AnimateIn>
                );
              })}
            </div>
          </div>
        </section>

        {/* ── How It Works ─────────────────────── */}
        <section className="smm-process">
          <div className="smm-process__inner">
            <AnimateIn delay={0} direction="up" className="smm-process__head">
              <span className="smm-process__tag">Methodology</span>
              <h2 className="smm-process__title">How It Works</h2>
              <p className="smm-process__sub">Four steps from raw document to structured, actionable insight.</p>
            </AnimateIn>
            <div className="smm-process__steps">
              {processSteps.map((step, i) => (
                <AnimateIn key={i} delay={0.1 * i} direction="up">
                  <div className="smm-process__step">
                    <span className="smm-process__step-num">{step.num}</span>
                    <div className="smm-process__step-body">
                      <span className="smm-process__step-title">{step.title}</span>
                      <span className="smm-process__step-desc">{step.desc}</span>
                    </div>
                    {i < processSteps.length - 1 && (
                      <div className="smm-process__step-arrow" aria-hidden="true">
                        {(() => { const Icon = Icons["ArrowRight"]; return Icon ? <Icon strokeWidth={1.5} /> : null; })()}
                      </div>
                    )}
                  </div>
                </AnimateIn>
              ))}
            </div>
          </div>
        </section>

        {/* ── Use Cases ────────────────────────── */}
        <section className="smm-usecases">
          <div className="smm-usecases__inner">
            <AnimateIn delay={0} direction="up" className="smm-usecases__head">
              <span className="smm-usecases__tag">Applications</span>
              <h2 className="smm-usecases__title">Where You Can Use It</h2>
              <p className="smm-usecases__sub">Summa is built for organizations that work with high volumes of financial documents.</p>
            </AnimateIn>
            <div className="smm-usecases__grid">
              {useCases.map((uc, i) => {
                const Icon = Icons[uc.icon];
                return (
                  <AnimateIn key={i} delay={0.07 * i} direction="up">
                    <div className="smm-usecases__card">
                      <div className="smm-usecases__card-icon">
                        {Icon && <Icon strokeWidth={1.5} />}
                      </div>
                      <span className="smm-usecases__card-sector">{uc.sector}</span>
                      <p className="smm-usecases__card-desc">{uc.desc}</p>
                    </div>
                  </AnimateIn>
                );
              })}
            </div>
          </div>
        </section>

        {/* ── Business Value ────────────────────── */}
        <section className="smm-value">
          <div className="smm-value__inner">
            <AnimateIn delay={0} direction="left" className="smm-value__head">
              <span className="smm-value__tag">Business Value</span>
              <h2 className="smm-value__title">Why It Matters</h2>
              <p className="smm-value__sub">
                Summa transforms how your organization handles financial document review — faster, more accurate, and at a scale no manual process can match.
              </p>
            </AnimateIn>
            <div className="smm-value__list">
              {businessValues.map((v, i) => (
                <AnimateIn key={i} delay={0.09 * i} direction="up">
                  <div className="smm-value__item">
                    <span className="smm-value__item-num">{v.num}</span>
                    <div className="smm-value__item-body">
                      <span className="smm-value__item-title">{v.title}</span>
                      <span className="smm-value__item-desc">{v.desc}</span>
                    </div>
                  </div>
                </AnimateIn>
              ))}
            </div>
          </div>
        </section>

        {/* ── Technology ───────────────────────── */}
        <section className="smm-tech">
          <div className="smm-tech__inner">
            <AnimateIn delay={0} direction="up" className="smm-tech__content">
              <span className="smm-tech__tag">Technology</span>
              <h2 className="smm-tech__title">Built with Advanced AI</h2>
              <p className="smm-tech__body">
                Summa uses modern AI technology to understand language, numbers, and financial context. It is trained to work with financial data and deliver accurate, structured results — even across complex multi-page documents.
              </p>
              <div className="smm-tech__pills">
                {["NLP", "Financial Domain Models", "Structured Data Extraction", "Large Document Support", "Context Understanding"].map((p, i) => (
                  <span key={i} className="smm-tech__pill">{p}</span>
                ))}
              </div>
            </AnimateIn>
            <AnimateIn delay={0.12} direction="right" className="smm-tech__visual">
              <div className="smm-tech__visual-box">
                <div className="smm-tech__visual-top">
                  <span className="smm-tech__visual-dot" />
                  <span className="smm-tech__visual-dot" />
                  <span className="smm-tech__visual-dot" />
                  <span className="smm-tech__visual-label">Summa AI Engine</span>
                </div>
                {["Parsing document structure...", "Identifying key figures...", "Extracting financial metrics...", "Building summary output..."].map((line, i) => (
                  <div key={i} className="smm-tech__visual-line">
                    <span className="smm-tech__visual-prompt">›</span>
                    <span className="smm-tech__visual-text">{line}</span>
                    <span className="smm-tech__visual-done">✓</span>
                  </div>
                ))}
                <div className="smm-tech__visual-result">
                  <span className="smm-tech__visual-result-label">Output Ready</span>
                </div>
              </div>
            </AnimateIn>
          </div>
        </section>

        {/* ── Integration Block ─────────────────── */}
        <section className="smm-integration">
          <div className="smm-integration__inner">
            <AnimateIn delay={0} direction="up" className="smm-integration__head">
              <span className="smm-integration__tag">Integration</span>
              <h2 className="smm-integration__title">Works With Your Systems</h2>
              <p className="smm-integration__sub">
                Summa can be connected to your existing tools and workflows. You can automate document processing and get results directly where you need them.
              </p>
            </AnimateIn>
            <div className="smm-integration__strip">
              {integrationItems.map((item, i) => (
                <AnimateIn key={i} delay={0.08 * i} direction="up">
                  <div className="smm-integration__item">
                    <span className="smm-integration__item-label">{item.label}</span>
                    <span className="smm-integration__item-sub">{item.sub}</span>
                  </div>
                </AnimateIn>
              ))}
            </div>
          </div>
        </section>

        {/* ── Why Group 107 ────────────────────── */}
        <section className="smm-trust">
          <div className="smm-trust__inner">
            <AnimateIn delay={0} direction="up" className="smm-trust__head">
              <span className="smm-trust__tag">Partnership</span>
              <h2 className="smm-trust__title">Implement Summa With Group 107</h2>
              <p className="smm-trust__sub">
                Group 107 helps companies integrate AI platforms like Summa into their operations — from initial discovery to full-scale deployment and ongoing optimization.
              </p>
            </AnimateIn>
            <div className="smm-trust__list">
              {whyGroup107Points.map((pt, i) => (
                <AnimateIn key={i} delay={0.08 * i} direction="up">
                  <div className="smm-trust__item">
                    <span className="smm-trust__item-bar" aria-hidden="true" />
                    <span className="smm-trust__item-text">{pt}</span>
                  </div>
                </AnimateIn>
              ))}
            </div>
          </div>
        </section>

        {/* ── Engagement Models ─────────────────── */}
        <section className="smm-engage">
          <div className="smm-engage__inner">
            <AnimateIn delay={0} direction="up" className="smm-engage__head">
              <span className="smm-engage__tag">Getting Started</span>
              <h2 className="smm-engage__title">How to Get Started</h2>
              <p className="smm-engage__sub">Four ways to begin your Summa journey, from first look to full-scale deployment.</p>
            </AnimateIn>
            <div className="smm-engage__cards">
              {engagements.map((e, i) => (
                <AnimateIn key={i} delay={0.09 * i} direction="up">
                  <div className="smm-engage__card">
                    <span className="smm-engage__card-tag">{e.tag}</span>
                    <span className="smm-engage__card-title">{e.title}</span>
                    <span className="smm-engage__card-desc">{e.desc}</span>
                  </div>
                </AnimateIn>
              ))}
            </div>
          </div>
        </section>

        {/* ── Final CTA ─────────────────────────── */}
        <section className="smm-cta" id="smm-cta">
          <div className="smm-cta__inner">
            <AnimateIn delay={0} direction="up">
              <span className="smm-cta__tag">Get Started</span>
            </AnimateIn>
            <AnimateIn delay={0.08} direction="up">
              <h2 className="smm-cta__title">
                Unlock Insights From<br />Your Financial Data
              </h2>
            </AnimateIn>
            <AnimateIn delay={0.14} direction="up">
              <p className="smm-cta__sub">
                Start transforming complex financial documents into structured, actionable intelligence with Summa and Group 107.
              </p>
            </AnimateIn>
            <AnimateIn delay={0.2} direction="up">
              <div className="smm-cta__actions">
                <a href="mailto:info@group107.com" className="smm-cta__btn smm-cta__btn--primary">
                  Book a Demo <ArrowRight className="smm-cta__btn-icon" />
                </a>
                <a href="mailto:info@group107.com" className="smm-cta__btn smm-cta__btn--ghost">
                  Contact Us
                </a>
              </div>
            </AnimateIn>
            <AnimateIn delay={0.26} direction="up">
              <div className="smm-cta__trust">
                {["Free product demo", "Custom pilot setup", "Full integration support"].map((t, i) => (
                  <div key={i} className="smm-cta__trust-item">
                    {(() => { const Icon = CheckCircle2; return Icon ? <Icon strokeWidth={1.5} className="smm-cta__trust-icon" /> : null; })()}
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
              <h2 className="ds-related__title">Explore More AI Solutions</h2>
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
