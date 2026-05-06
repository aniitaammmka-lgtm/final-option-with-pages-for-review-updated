import Nav from "@/components/blocks/Nav";
import Footer from "@/components/blocks/Footer";
import AnimateIn from "@/components/AnimateIn";
import { Icons } from "@/lib/icons";

const ArrowRight = Icons.ArrowRight;
const ArrowUpRight = Icons.ArrowUpRight;
const CheckCircle2 = Icons.CheckCircle2;

const features = [
  { icon: "Globe", title: "Multi-Language Translation", desc: "Translate documents into multiple languages with a single upload and processing run." },
  { icon: "FileText", title: "Supports PDF, Word & More", desc: "Works with common document formats used in business and legal workflows." },
  { icon: "Layout", title: "Layout Preservation", desc: "Keeps original structure, formatting, and layout intact after translation." },
  { icon: "Zap", title: "Fast AI Processing", desc: "Documents are processed quickly through an automated AI translation pipeline." },
  { icon: "FolderOpen", title: "File Management & Download", desc: "Easy upload, status tracking, and download of all translated files." },
  { icon: "Network", title: "API Integration", desc: "Connect Global Docs to your existing systems for fully automated workflows." },
];

const processSteps = [
  { num: "01", title: "Upload Your Document", desc: "Upload any supported file directly or via API connection." },
  { num: "02", title: "AI Translates Content", desc: "The AI engine processes and translates the full document content." },
  { num: "03", title: "Structure is Preserved", desc: "Layout, formatting, and structure are kept exactly as in the original." },
  { num: "04", title: "Optional Review", desc: "Human review and improvement step available for critical documents." },
  { num: "05", title: "Download Final File", desc: "Receive the finished translated document ready for immediate use." },
];

const audiences = [
  { label: "Public Companies", desc: "Translate investor materials, reports, and filings for global audiences." },
  { label: "Government Institutions", desc: "Standardize public-facing communication across multiple languages." },
  { label: "Legal Teams", desc: "Handle contracts, agreements, and legal documents across jurisdictions." },
  { label: "Financial Organizations", desc: "Translate financial reports, analyses, and compliance documentation at scale." },
  { label: "Global Enterprises", desc: "Scale document translation across regions without increasing manual workload." },
];

const useCases = [
  { icon: "FileCheck", sector: "Official Documents", desc: "Translate regulatory filings, certifications, and official correspondence." },
  { icon: "BarChart2", sector: "International Reports", desc: "Prepare business reports and analyses for international distribution." },
  { icon: "Globe", sector: "Multi-Language Communication", desc: "Enable consistent cross-language communication across teams and markets." },
  { icon: "Layers", sector: "Internal Standardization", desc: "Standardize internal documents across offices and regions efficiently." },
  { icon: "Building2", sector: "Global Operations", desc: "Support global teams with translated operational documentation at scale." },
];

const apiFeatures = [
  { label: "REST API", sub: "Clean & Documented" },
  { label: "Webhooks", sub: "Status Updates" },
  { label: "Bulk Upload", sub: "High Volume" },
  { label: "Auto Download", sub: "No Manual Steps" },
];

const whyPoints = [
  "Faster than manual translation workflows by a wide margin",
  "Keeps original document structure and formatting intact",
  "Scales for large document volumes without extra headcount",
  "Straightforward for any team to adopt and use immediately",
  "Built around real business document processing needs",
];

const engagements = [
  { tag: "Demo", title: "Request a Demo", desc: "See Global Docs translate your actual documents live in a guided session." },
  { tag: "Pilot", title: "Run a Pilot", desc: "Start with a real batch of documents and measure results against your workflow." },
  { tag: "Integrate", title: "API Integration", desc: "Connect Global Docs directly into your existing document systems via API." },
  { tag: "Scale", title: "Scale Operations", desc: "Roll out across your full document operation with ongoing Group 107 support." },
];

const relatedSolutions = [
  { label: "Summa", url: "/summa" },
  { label: "AI Integrations", url: "/services#nextai" },
  { label: "Product Discovery", url: "/product-discovery" },
  { label: "Custom Development", url: "/development-services" },
];

export default function GlobalDocsPage() {
  return (
    <div className="page">
      <Nav />
      <main>

        {/* ── Hero ─────────────────────────────── */}
        <section className="gd-hero">
          <div className="gd-hero__bg-text" aria-hidden="true">GLOBAL</div>
          <div className="gd-hero__inner">
            <AnimateIn delay={0} direction="up">
              <div className="gd-hero__label">Product Lobby / Global Docs</div>
            </AnimateIn>
            <AnimateIn delay={0.08} direction="up">
              <h1 className="gd-hero__title">
                Translate Documents Faster — Without Manual Work
              </h1>
            </AnimateIn>
            <AnimateIn delay={0.14} direction="up">
              <p className="gd-hero__sub">
                AI-powered document translation platform for businesses, teams, and public organizations.
              </p>
            </AnimateIn>
            <AnimateIn delay={0.18} direction="up">
              <p className="gd-hero__body">
                Global Docs helps you translate documents into multiple languages quickly and efficiently. Upload your file, let the system process it, and receive a translated version ready for use.
              </p>
            </AnimateIn>
            <AnimateIn delay={0.22} direction="up">
              <div className="gd-hero__actions">
                <a href="#gd-cta" className="gd-hero__cta gd-hero__cta--primary">
                  Start Translating <ArrowRight className="gd-hero__cta-icon" />
                </a>
                <a href="#gd-features" className="gd-hero__cta gd-hero__cta--ghost">
                  Request Demo <ArrowUpRight className="gd-hero__cta-icon" />
                </a>
              </div>
            </AnimateIn>
          </div>
          <div className="gd-hero__stats">
            {[
              { val: "Multi-Language", label: "Translation Support" },
              { val: "AI-Powered", label: "Processing Engine" },
              { val: "Layout", label: "Preserved" },
              { val: "API", label: "Ready" },
            ].map((s, i) => (
              <div key={i} className="gd-hero__stat">
                <span className="gd-hero__stat-val">{s.val}</span>
                <span className="gd-hero__stat-label">{s.label}</span>
              </div>
            ))}
          </div>
        </section>

        {/* ── What is Global Docs ─────────────── */}
        <section className="gd-what">
          <div className="gd-what__inner">
            <AnimateIn delay={0} direction="left" className="gd-what__left">
              <span className="gd-what__tag">Definition</span>
              <h2 className="gd-what__title">What is Global Docs?</h2>
              <p className="gd-what__body">
                Global Docs is an AI-based platform that translates documents while keeping their structure, format, and layout. It is built for companies that need fast and scalable translation workflows.
              </p>
              <p className="gd-what__body">
                Instead of manual processes, it combines automation and optional review to deliver better results in less time — across any language and document format your business relies on.
              </p>
            </AnimateIn>
            <AnimateIn delay={0.1} direction="up" className="gd-what__diagram">
              <div className="gd-what__node gd-what__node--in">
                <span className="gd-what__node-label">PDF Documents</span>
              </div>
              <div className="gd-what__node gd-what__node--in">
                <span className="gd-what__node-label">Word & Office Files</span>
              </div>
              <div className="gd-what__node gd-what__node--in">
                <span className="gd-what__node-label">Reports & Filings</span>
              </div>
              <div className="gd-what__arrow" aria-hidden="true" />
              <div className="gd-what__node gd-what__node--out">
                <span className="gd-what__node-label">Translated & Formatted Output</span>
              </div>
            </AnimateIn>
          </div>
        </section>

        {/* ── How It Works ─────────────────────── */}
        <section className="gd-process">
          <div className="gd-process__inner">
            <AnimateIn delay={0} direction="up" className="gd-process__head">
              <span className="gd-process__tag">Methodology</span>
              <h2 className="gd-process__title">How It Works</h2>
              <p className="gd-process__sub">The process is simple and built to save time while keeping quality under control.</p>
            </AnimateIn>
            <div className="gd-process__steps">
              {processSteps.map((step, i) => (
                <AnimateIn key={i} delay={0.08 * i} direction="up">
                  <div className="gd-process__step">
                    <span className="gd-process__step-num">{step.num}</span>
                    <div className="gd-process__step-body">
                      <span className="gd-process__step-title">{step.title}</span>
                      <span className="gd-process__step-desc">{step.desc}</span>
                    </div>
                    {i < processSteps.length - 1 && (
                      <div className="gd-process__step-arrow" aria-hidden="true">
                        {(() => { const Icon = Icons["ArrowRight"]; return Icon ? <Icon strokeWidth={1.5} /> : null; })()}
                      </div>
                    )}
                  </div>
                </AnimateIn>
              ))}
            </div>
          </div>
        </section>

        {/* ── Key Features ──────────────────────── */}
        <section id="gd-features" className="gd-caps">
          <div className="gd-caps__inner">
            <AnimateIn delay={0} direction="up" className="gd-caps__head">
              <span className="gd-caps__tag">Platform</span>
              <h2 className="gd-caps__title">Key Features</h2>
              <p className="gd-caps__sub">Everything designed to make translation simple, scalable, and ready for real business use.</p>
            </AnimateIn>
            <div className="gd-caps__grid">
              {features.map((feat, i) => {
                const Icon = Icons[feat.icon];
                return (
                  <AnimateIn key={i} delay={0.07 * i} direction="up">
                    <div className="gd-caps__card">
                      <div className="gd-caps__card-num">0{i + 1}</div>
                      <div className="gd-caps__card-icon">
                        {Icon && <Icon strokeWidth={1.5} />}
                      </div>
                      <span className="gd-caps__card-title">{feat.title}</span>
                      <span className="gd-caps__card-desc">{feat.desc}</span>
                    </div>
                  </AnimateIn>
                );
              })}
            </div>
          </div>
        </section>

        {/* ── Who It's For ──────────────────────── */}
        <section className="gd-audience">
          <div className="gd-audience__inner">
            <AnimateIn delay={0} direction="up" className="gd-audience__head">
              <span className="gd-audience__tag">Target Audience</span>
              <h2 className="gd-audience__title">Built for Teams That Work With Documents</h2>
              <p className="gd-audience__sub">If your business works with documents across languages, Global Docs helps you move faster without increasing workload.</p>
            </AnimateIn>
            <div className="gd-audience__grid">
              {audiences.map((aud, i) => (
                <AnimateIn key={i} delay={0.08 * i} direction="up">
                  <div className="gd-audience__card">
                    <span className="gd-audience__card-num">0{i + 1}</span>
                    <span className="gd-audience__card-label">{aud.label}</span>
                    <p className="gd-audience__card-desc">{aud.desc}</p>
                  </div>
                </AnimateIn>
              ))}
            </div>
          </div>
        </section>

        {/* ── Use Cases ─────────────────────────── */}
        <section className="gd-usecases">
          <div className="gd-usecases__inner">
            <AnimateIn delay={0} direction="up" className="gd-usecases__head">
              <span className="gd-usecases__tag">Applications</span>
              <h2 className="gd-usecases__title">Common Use Cases</h2>
              <p className="gd-usecases__sub">Global Docs fits into existing workflows and helps teams scale document handling across regions.</p>
            </AnimateIn>
            <div className="gd-usecases__grid">
              {useCases.map((uc, i) => {
                const Icon = Icons[uc.icon];
                return (
                  <AnimateIn key={i} delay={0.07 * i} direction="up">
                    <div className="gd-usecases__card">
                      <div className="gd-usecases__card-icon">
                        {Icon && <Icon strokeWidth={1.5} />}
                      </div>
                      <span className="gd-usecases__card-sector">{uc.sector}</span>
                      <p className="gd-usecases__card-desc">{uc.desc}</p>
                    </div>
                  </AnimateIn>
                );
              })}
            </div>
          </div>
        </section>

        {/* ── Automation & API ──────────────────── */}
        <section className="gd-api">
          <div className="gd-api__inner">
            <AnimateIn delay={0} direction="up" className="gd-api__content">
              <span className="gd-api__tag">Automation</span>
              <h2 className="gd-api__title">Built for Automation</h2>
              <p className="gd-api__body">
                Global Docs connects directly to your systems using API and webhooks. You can upload documents automatically, receive status updates, and download translated files without manual steps.
              </p>
              <p className="gd-api__body">
                It is built for companies that want full control and automation over their document translation pipeline — at any volume.
              </p>
              <div className="gd-api__pills">
                {["REST API", "Webhook Support", "Bulk Processing", "Automated Downloads", "Custom Pipelines"].map((p, i) => (
                  <span key={i} className="gd-api__pill">{p}</span>
                ))}
              </div>
            </AnimateIn>
            <AnimateIn delay={0.12} direction="right" className="gd-api__visual">
              <div className="gd-api__visual-box">
                <div className="gd-api__visual-top">
                  <span className="gd-api__visual-dot" />
                  <span className="gd-api__visual-dot" />
                  <span className="gd-api__visual-dot" />
                  <span className="gd-api__visual-label">Global Docs API</span>
                </div>
                {apiFeatures.map((feat, i) => (
                  <div key={i} className="gd-api__visual-line">
                    <span className="gd-api__visual-prompt">›</span>
                    <span className="gd-api__visual-text">{feat.label}</span>
                    <span className="gd-api__visual-done">{feat.sub}</span>
                  </div>
                ))}
                <div className="gd-api__visual-result">
                  <span className="gd-api__visual-result-label">Translation Complete</span>
                </div>
              </div>
            </AnimateIn>
          </div>
        </section>

        {/* ── Why Global Docs ───────────────────── */}
        <section className="gd-why">
          <div className="gd-why__inner">
            <AnimateIn delay={0} direction="up" className="gd-why__head">
              <span className="gd-why__tag">Differentiation</span>
              <h2 className="gd-why__title">Why Choose Global Docs</h2>
              <p className="gd-why__sub">
                Global Docs is not just a translation tool — it is a system designed to handle documents at scale across any organization.
              </p>
            </AnimateIn>
            <div className="gd-why__list">
              {whyPoints.map((pt, i) => (
                <AnimateIn key={i} delay={0.08 * i} direction="up">
                  <div className="gd-why__item">
                    <span className="gd-why__item-bar" aria-hidden="true" />
                    <span className="gd-why__item-text">{pt}</span>
                  </div>
                </AnimateIn>
              ))}
            </div>
          </div>
        </section>

        {/* ── Powered by Group 107 ──────────────── */}
        <section className="gd-ecosystem">
          <div className="gd-ecosystem__inner">
            <AnimateIn delay={0} direction="up" className="gd-ecosystem__content">
              <span className="gd-ecosystem__tag">Ecosystem</span>
              <h2 className="gd-ecosystem__title">Powered by Group 107</h2>
              <p className="gd-ecosystem__body">
                Global Docs is part of the Group 107 ecosystem, combining AI technology with real business workflows. We help companies build, integrate, and scale systems that work in production.
              </p>
              <p className="gd-ecosystem__body">
                From initial setup to full-scale deployment, Group 107 provides the engineering, integration expertise, and ongoing support your team needs to get the most from Global Docs.
              </p>
            </AnimateIn>
            <AnimateIn delay={0.12} direction="right" className="gd-ecosystem__aside">
              <div className="gd-ecosystem__badge">
                <span className="gd-ecosystem__badge-label">Group 107</span>
                <span className="gd-ecosystem__badge-sub">Product Ecosystem</span>
              </div>
              <div className="gd-ecosystem__links">
                {[
                  { label: "Summa", sub: "Financial Intelligence" },
                  { label: "Accessible Docs", sub: "Accessibility Platform" },
                  { label: "Levent", sub: "Fintech R&D" },
                ].map((p, i) => (
                  <div key={i} className="gd-ecosystem__link-item">
                    <span className="gd-ecosystem__link-name">{p.label}</span>
                    <span className="gd-ecosystem__link-sub">{p.sub}</span>
                  </div>
                ))}
              </div>
            </AnimateIn>
          </div>
        </section>

        {/* ── Engagement Models ─────────────────── */}
        <section className="gd-engage">
          <div className="gd-engage__inner">
            <AnimateIn delay={0} direction="up" className="gd-engage__head">
              <span className="gd-engage__tag">Getting Started</span>
              <h2 className="gd-engage__title">How to Get Started</h2>
              <p className="gd-engage__sub">Four clear paths to get Global Docs working for your organization.</p>
            </AnimateIn>
            <div className="gd-engage__cards">
              {engagements.map((e, i) => (
                <AnimateIn key={i} delay={0.09 * i} direction="up">
                  <div className="gd-engage__card">
                    <span className="gd-engage__card-tag">{e.tag}</span>
                    <span className="gd-engage__card-title">{e.title}</span>
                    <span className="gd-engage__card-desc">{e.desc}</span>
                  </div>
                </AnimateIn>
              ))}
            </div>
          </div>
        </section>

        {/* ── Final CTA ─────────────────────────── */}
        <section className="gd-cta" id="gd-cta">
          <div className="gd-cta__inner">
            <AnimateIn delay={0} direction="up">
              <span className="gd-cta__tag">Get Started</span>
            </AnimateIn>
            <AnimateIn delay={0.08} direction="up">
              <h2 className="gd-cta__title">
                Start Translating Today
              </h2>
            </AnimateIn>
            <AnimateIn delay={0.14} direction="up">
              <p className="gd-cta__sub">
                See how Global Docs can simplify your document workflows and scale translation across your organization.
              </p>
            </AnimateIn>
            <AnimateIn delay={0.2} direction="up">
              <div className="gd-cta__actions">
                <a href="mailto:info@group107.com" className="gd-cta__btn gd-cta__btn--primary">
                  Request Demo <ArrowRight className="gd-cta__btn-icon" />
                </a>
                <a href="mailto:info@group107.com" className="gd-cta__btn gd-cta__btn--ghost">
                  Contact Us
                </a>
              </div>
            </AnimateIn>
            <AnimateIn delay={0.26} direction="up">
              <div className="gd-cta__trust">
                {["Free product demo", "Quick setup & onboarding", "Full integration support"].map((t, i) => (
                  <div key={i} className="gd-cta__trust-item">
                    {(() => { const Icon = CheckCircle2; return Icon ? <Icon strokeWidth={1.5} className="gd-cta__trust-icon" /> : null; })()}
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
              <h2 className="ds-related__title">Explore More Products & Services</h2>
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
