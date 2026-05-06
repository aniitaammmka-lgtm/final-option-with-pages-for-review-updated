import Nav from "@/components/blocks/Nav";
import Footer from "@/components/blocks/Footer";
import AnimateIn from "@/components/AnimateIn";
import { Icons } from "@/lib/icons";

const ArrowRight = Icons.ArrowRight;
const ArrowUpRight = Icons.ArrowUpRight;
const CheckCircle2 = Icons.CheckCircle2;

const benefits = [
  { icon: "Sparkles", title: "AI-Powered Remediation", desc: "Automatically fix accessibility issues using AI — no manual tagging required at scale." },
  { icon: "FileCheck", title: "WCAG 2.1 AA Compliance", desc: "Meet the gold standard for digital accessibility across all document types and formats." },
  { icon: "FileText", title: "PDF/UA Conformance", desc: "Produce PDF documents that fully conform to PDF/UA for assistive technology compatibility." },
  { icon: "ScanLine", title: "Automated Audit & Report", desc: "Detailed audit reports with issue identification, severity scoring, and remediation tracking." },
  { icon: "Workflow", title: "Workflow Integration", desc: "Plug directly into your document creation and publishing pipeline via API or plugin." },
  { icon: "Shield", title: "Compliance Trail", desc: "Maintain documented audit trails of remediation activity for legal and regulatory review." },
];

const processSteps = [
  { num: "01", title: "Upload Document", desc: "Upload any PDF, Word, or supported document through the platform, plugin, or API." },
  { num: "02", title: "AI Scans & Analyses", desc: "The AI engine scans structure, tags, reading order, alt text, colour contrast, and more." },
  { num: "03", title: "Auto-Remediation", desc: "Issues are automatically fixed — tags applied, alt text generated, structure corrected." },
  { num: "04", title: "Review & Export", desc: "Review the remediated document, download the accessible version, and access the audit report." },
];

const waysToUse = [
  { tag: "Platform", title: "Web Platform", desc: "Upload and manage documents directly through the Accessible Docs web platform — no integration required to get started." },
  { tag: "Plugin", title: "Document Plugin", desc: "Accessibility checking and remediation built into your existing Word or Adobe Acrobat workflow as a native plugin." },
  { tag: "API", title: "API & Automation", desc: "Connect Accessible Docs to your document pipeline via REST API for fully automated, high-volume remediation at scale." },
];

const audiences = [
  { label: "Public Sector", desc: "Government and public institutions required to meet accessibility legislation for all published documents." },
  { label: "Financial Services", desc: "Banks, insurers, and investment firms producing high volumes of regulated client-facing documents." },
  { label: "Legal & Compliance", desc: "Law firms and compliance teams creating accessible contracts, filings, and regulatory submissions." },
  { label: "Enterprise", desc: "Large organizations standardizing accessibility across internal and external document libraries." },
  { label: "Education", desc: "Universities and training providers making course materials and publications accessible for all learners." },
];

const integrationItems = [
  { label: "REST API", sub: "Full Automation" },
  { label: "Adobe Acrobat", sub: "Plugin" },
  { label: "Microsoft Word", sub: "Plugin" },
  { label: "Webhook Events", sub: "Status Updates" },
];

const relatedSolutions = [
  { label: "Global Docs", url: "/global-docs" },
  { label: "Summa", url: "/summa" },
  { label: "Next AI", url: "/next-ai" },
  { label: "Development Services", url: "/development-services" },
];

export default function AccessibleDocsPage() {
  return (
    <div className="page">
      <Nav />
      <main>

        {/* ── Hero ─────────────────────────────── */}
        <section className="ad-hero">
          <div className="ad-hero__bg-text" aria-hidden="true">ACCESS</div>
          <div className="ad-hero__inner">
            <AnimateIn delay={0} direction="up">
              <div className="ad-hero__label">Product Lobby / Accessible Docs</div>
            </AnimateIn>
            <AnimateIn delay={0.08} direction="up">
              <h1 className="ad-hero__title">
                Make Every Document Accessible — Automatically
              </h1>
            </AnimateIn>
            <AnimateIn delay={0.14} direction="up">
              <p className="ad-hero__sub">
                AI-powered platform for making documents accessible and compliant with global accessibility standards at scale.
              </p>
            </AnimateIn>
            <AnimateIn delay={0.18} direction="up">
              <p className="ad-hero__body">
                Accessible Docs eliminates the manual effort of document remediation. Upload once, receive a fully compliant, accessible version — with a complete audit trail — in minutes.
              </p>
            </AnimateIn>
            <AnimateIn delay={0.22} direction="up">
              <div className="ad-hero__actions">
                <a href="#ad-cta" className="ad-hero__cta ad-hero__cta--primary">
                  Start Free Trial <ArrowRight className="ad-hero__cta-icon" />
                </a>
                <a href="#ad-how" className="ad-hero__cta ad-hero__cta--ghost">
                  See How It Works <ArrowUpRight className="ad-hero__cta-icon" />
                </a>
              </div>
            </AnimateIn>
          </div>
          <div className="ad-hero__stats">
            {[
              { val: "WCAG 2.1", label: "AA Compliant" },
              { val: "PDF/UA", label: "Conformant" },
              { val: "AI-Powered", label: "Remediation" },
              { val: "API", label: "First Platform" },
            ].map((s, i) => (
              <div key={i} className="ad-hero__stat">
                <span className="ad-hero__stat-val">{s.val}</span>
                <span className="ad-hero__stat-label">{s.label}</span>
              </div>
            ))}
          </div>
        </section>

        {/* ── Product Intro ─────────────────────── */}
        <section className="ad-intro">
          <div className="ad-intro__inner">
            <AnimateIn delay={0} direction="left" className="ad-intro__left">
              <span className="ad-intro__tag">Platform</span>
              <h2 className="ad-intro__title">What is Accessible Docs?</h2>
              <p className="ad-intro__body">
                Accessible Docs is an AI-based platform that transforms documents into fully accessible, standards-compliant versions — automatically. It is built for organizations that need to scale document accessibility without scaling manual effort.
              </p>
              <p className="ad-intro__body">
                Whether you publish one document a week or thousands a day, Accessible Docs handles WCAG compliance, PDF/UA conformance, and audit reporting — automatically, at any volume.
              </p>
            </AnimateIn>
            <AnimateIn delay={0.1} direction="up" className="ad-intro__visual">
              <div className="ad-intro__transform">
                <div className="ad-intro__transform-in">
                  <span className="ad-intro__transform-label">Input</span>
                  <div className="ad-intro__transform-items">
                    {["PDF Document", "Word File", "HTML Page", "Scanned Doc"].map((item, i) => (
                      <div key={i} className="ad-intro__transform-item">
                        <span>{item}</span>
                      </div>
                    ))}
                  </div>
                </div>
                <div className="ad-intro__transform-arrow" aria-hidden="true">
                  <span className="ad-intro__transform-engine">AI Engine</span>
                  <span className="ad-intro__transform-chevron">→</span>
                </div>
                <div className="ad-intro__transform-out">
                  <span className="ad-intro__transform-label">Output</span>
                  <div className="ad-intro__transform-items ad-intro__transform-items--out">
                    {["WCAG 2.1 AA", "PDF/UA", "Tagged HTML", "Audit Report"].map((item, i) => (
                      <div key={i} className="ad-intro__transform-item ad-intro__transform-item--out">
                        <span>{item}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </AnimateIn>
          </div>
        </section>

        {/* ── How It Works ──────────────────────── */}
        <section id="ad-how" className="ad-process">
          <div className="ad-process__inner">
            <AnimateIn delay={0} direction="up" className="ad-process__head">
              <span className="ad-process__tag">Methodology</span>
              <h2 className="ad-process__title">How It Works</h2>
              <p className="ad-process__sub">Four simple steps from document upload to fully accessible, compliant output.</p>
            </AnimateIn>
            <div className="ad-process__steps">
              {processSteps.map((step, i) => (
                <AnimateIn key={i} delay={0.1 * i} direction="up">
                  <div className="ad-process__step">
                    <span className="ad-process__step-num">{step.num}</span>
                    <div className="ad-process__step-body">
                      <span className="ad-process__step-title">{step.title}</span>
                      <span className="ad-process__step-desc">{step.desc}</span>
                    </div>
                    {i < processSteps.length - 1 && (
                      <div className="ad-process__step-arrow" aria-hidden="true" />
                    )}
                  </div>
                </AnimateIn>
              ))}
            </div>
          </div>
        </section>

        {/* ── Benefits ──────────────────────────── */}
        <section className="ad-benefits">
          <div className="ad-benefits__inner">
            <AnimateIn delay={0} direction="up" className="ad-benefits__head">
              <span className="ad-benefits__tag">Features</span>
              <h2 className="ad-benefits__title">What Accessible Docs Delivers</h2>
              <p className="ad-benefits__sub">Everything you need to make document accessibility automatic, auditable, and scalable.</p>
            </AnimateIn>
            <div className="ad-benefits__grid">
              {benefits.map((b, i) => {
                const Icon = Icons[b.icon];
                return (
                  <AnimateIn key={i} delay={0.07 * i} direction="up">
                    <div className="ad-benefits__card">
                      <div className="ad-benefits__card-icon">
                        {Icon && <Icon strokeWidth={1.5} />}
                      </div>
                      <span className="ad-benefits__card-title">{b.title}</span>
                      <span className="ad-benefits__card-desc">{b.desc}</span>
                    </div>
                  </AnimateIn>
                );
              })}
            </div>
          </div>
        </section>

        {/* ── Ways to Use ───────────────────────── */}
        <section className="ad-modes">
          <div className="ad-modes__inner">
            <AnimateIn delay={0} direction="up" className="ad-modes__head">
              <span className="ad-modes__tag">Deployment</span>
              <h2 className="ad-modes__title">Three Ways to Use Accessible Docs</h2>
              <p className="ad-modes__sub">Platform, plugin, or API — choose the integration path that fits your workflow.</p>
            </AnimateIn>
            <div className="ad-modes__cards">
              {waysToUse.map((mode, i) => (
                <AnimateIn key={i} delay={0.1 * i} direction="up">
                  <div className="ad-modes__card">
                    <span className="ad-modes__card-tag">{mode.tag}</span>
                    <span className="ad-modes__card-title">{mode.title}</span>
                    <p className="ad-modes__card-desc">{mode.desc}</p>
                  </div>
                </AnimateIn>
              ))}
            </div>
          </div>
        </section>

        {/* ── Who It's For ──────────────────────── */}
        <section className="ad-audience">
          <div className="ad-audience__inner">
            <AnimateIn delay={0} direction="up" className="ad-audience__head">
              <span className="ad-audience__tag">Target Audience</span>
              <h2 className="ad-audience__title">Built for Organizations With Document Compliance Requirements</h2>
              <p className="ad-audience__sub">Any organization that produces or publishes documents — and needs to meet accessibility standards without manual effort.</p>
            </AnimateIn>
            <div className="ad-audience__grid">
              {audiences.map((aud, i) => (
                <AnimateIn key={i} delay={0.08 * i} direction="up">
                  <div className="ad-audience__card">
                    <span className="ad-audience__card-num">0{i + 1}</span>
                    <span className="ad-audience__card-label">{aud.label}</span>
                    <p className="ad-audience__card-desc">{aud.desc}</p>
                  </div>
                </AnimateIn>
              ))}
            </div>
          </div>
        </section>

        {/* ── Integration ───────────────────────── */}
        <section className="ad-integration">
          <div className="ad-integration__inner">
            <AnimateIn delay={0} direction="up" className="ad-integration__head">
              <span className="ad-integration__tag">Integration</span>
              <h2 className="ad-integration__title">Works With Your Existing Systems</h2>
              <p className="ad-integration__sub">
                Connect Accessible Docs to your document publishing pipeline — whether you're processing one file manually or thousands automatically.
              </p>
            </AnimateIn>
            <div className="ad-integration__strip">
              {integrationItems.map((item, i) => (
                <AnimateIn key={i} delay={0.08 * i} direction="up">
                  <div className="ad-integration__item">
                    <span className="ad-integration__item-label">{item.label}</span>
                    <span className="ad-integration__item-sub">{item.sub}</span>
                  </div>
                </AnimateIn>
              ))}
            </div>
          </div>
        </section>

        {/* ── Group 107 Connection ──────────────── */}
        <section className="ad-ecosystem">
          <div className="ad-ecosystem__inner">
            <AnimateIn delay={0} direction="up" className="ad-ecosystem__content">
              <span className="ad-ecosystem__tag">Ecosystem</span>
              <h2 className="ad-ecosystem__title">Powered by Group 107</h2>
              <p className="ad-ecosystem__body">
                Accessible Docs is part of the Group 107 product ecosystem — sitting alongside Global Docs and Summa to form a complete document intelligence platform.
              </p>
              <p className="ad-ecosystem__body">
                Built with the same engineering standards, security practices, and API-first architecture as every Group 107 product — designed to integrate, scale, and evolve with your organization.
              </p>
            </AnimateIn>
            <AnimateIn delay={0.12} direction="right" className="ad-ecosystem__aside">
              <div className="ad-ecosystem__badge">
                <span className="ad-ecosystem__badge-label">Group 107</span>
                <span className="ad-ecosystem__badge-sub">Document Intelligence Suite</span>
              </div>
              <div className="ad-ecosystem__links">
                {[
                  { label: "Accessible Docs", sub: "Current Product" },
                  { label: "Global Docs", sub: "Translation Platform" },
                  { label: "Summa", sub: "Financial Intelligence" },
                ].map((p, i) => (
                  <div key={i} className="ad-ecosystem__link-item">
                    <span className="ad-ecosystem__link-name">{p.label}</span>
                    <span className="ad-ecosystem__link-sub">{p.sub}</span>
                  </div>
                ))}
              </div>
            </AnimateIn>
          </div>
        </section>

        {/* ── Final CTA ─────────────────────────── */}
        <section className="ad-cta" id="ad-cta">
          <div className="ad-cta__inner">
            <AnimateIn delay={0} direction="up">
              <span className="ad-cta__tag">Get Started</span>
            </AnimateIn>
            <AnimateIn delay={0.08} direction="up">
              <h2 className="ad-cta__title">
                Start Making Your<br />Documents Accessible
              </h2>
            </AnimateIn>
            <AnimateIn delay={0.14} direction="up">
              <p className="ad-cta__sub">
                Try Accessible Docs on your own documents — no commitment required. See compliance results in minutes.
              </p>
            </AnimateIn>
            <AnimateIn delay={0.2} direction="up">
              <div className="ad-cta__actions">
                <a href="mailto:info@group107.com" className="ad-cta__btn ad-cta__btn--primary">
                  Start Free Trial <ArrowRight className="ad-cta__btn-icon" />
                </a>
                <a href="mailto:info@group107.com" className="ad-cta__btn ad-cta__btn--ghost">
                  Request Demo
                </a>
              </div>
            </AnimateIn>
            <AnimateIn delay={0.26} direction="up">
              <div className="ad-cta__trust">
                {["Free trial — no credit card", "WCAG & PDF/UA compliant output", "API access included"].map((t, i) => (
                  <div key={i} className="ad-cta__trust-item">
                    {(() => { const Icon = CheckCircle2; return Icon ? <Icon strokeWidth={1.5} className="ad-cta__trust-icon" /> : null; })()}
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
              <h2 className="ds-related__title">Explore More Products</h2>
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
