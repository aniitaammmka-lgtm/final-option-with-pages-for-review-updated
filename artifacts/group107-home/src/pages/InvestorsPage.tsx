import Nav from "@/components/blocks/Nav";
import Footer from "@/components/blocks/Footer";
import Breadcrumbs from "@/components/Breadcrumbs";
import AnimateIn from "@/components/AnimateIn";
import { Icons } from "@/lib/icons";

const ArrowRight = Icons.ArrowRight;
const ArrowUpRight = Icons.ArrowUpRight;
const CheckCircle2 = Icons.CheckCircle2;
const ExternalLink = Icons.ExternalLink;

const highlights = [
  { num: "700+",  label: "Global Clients",   desc: "Serving enterprise and growth-stage companies across finance, tech, healthcare, and beyond." },
  { num: "88K+",  label: "Talent Pool",       desc: "Deep bench of vetted software engineers, AI specialists, and digital professionals." },
  { num: "10+",   label: "Years Operating",   desc: "Over a decade of profitable, transparent operations with a track record of delivery." },
  { num: "TASE",  label: "Publicly Traded",   desc: "Fully listed on the Tel Aviv Stock Exchange with audited financials and full disclosure." },
];

const pillars = [
  { icon: "TrendingUp",  title: "Revenue Growth",         desc: "Consistent year-on-year revenue growth driven by expanding client relationships and new service lines." },
  { icon: "Globe",       title: "Global Diversification", desc: "Revenue generated from multiple geographies — Europe, Americas, APAC — reducing concentration risk." },
  { icon: "Shield",      title: "Transparent Governance", desc: "Full regulatory compliance and shareholder reporting as a listed public company on TASE." },
  { icon: "Users",       title: "Scalable Model",         desc: "Asset-light, talent-driven business model with strong recurring revenue and high client retention." },
];

const trustPoints = [
  "Public company listed on the Tel Aviv Stock Exchange (TASE)",
  "Audited annual financials and quarterly investor updates",
  "Experienced board with deep technology and capital markets expertise",
  "Over 700 long-term client relationships across 40+ countries",
  "No single-client concentration — diversified revenue base",
  "Compliant with Israeli Securities Authority (ISA) reporting standards",
];

const hubs = [
  { city: "Tel Aviv",     country: "Israel",    role: "Headquarters & EMEA Hub" },
  { city: "Lviv",         country: "Ukraine",   role: "Engineering Centre" },
  { city: "Kraków",       country: "Poland",    role: "European Development Hub" },
  { city: "Buenos Aires", country: "Argentina", role: "LATAM Operations Hub" },
];

const presentations = [
  {
    icon: "FileText",
    type: "Investor Presentation",
    title: "Q1 2025 Investor Presentation",
    date: "March 2025",
    link: "https://group107.com/investors/",
  },
  {
    icon: "BarChart",
    type: "Annual Report",
    title: "Annual Financial Report 2024",
    date: "February 2025",
    link: "https://group107.com/investors/",
  },
  {
    icon: "FileText",
    type: "Investor Presentation",
    title: "Q3 2024 Business Update",
    date: "November 2024",
    link: "https://group107.com/investors/",
  },
  {
    icon: "FileBarChart",
    type: "Quarterly Report",
    title: "Q2 2024 Financial Results",
    date: "August 2024",
    link: "https://group107.com/investors/",
  },
  {
    icon: "FileText",
    type: "Investor Presentation",
    title: "H1 2024 Strategy Overview",
    date: "June 2024",
    link: "https://group107.com/investors/",
  },
  {
    icon: "FileBarChart",
    type: "Quarterly Report",
    title: "Q1 2024 Financial Results",
    date: "May 2024",
    link: "https://group107.com/investors/",
  },
];

const events = [
  { day: "12", month: "Jun", year: "2025", title: "Q1 2025 Earnings Call — Webinar", meta: "Online · Investor Relations", link: "https://group107.com/investors/" },
  { day: "24", month: "Sep", year: "2025", title: "TASE Annual Investor Day", meta: "Tel Aviv, Israel · In-Person", link: "https://group107.com/investors/" },
  { day: "19", month: "Nov", year: "2025", title: "Q3 2025 Business Update — Webinar", meta: "Online · Investor Relations", link: "https://group107.com/investors/" },
];

const stockRows = [
  { label: "Exchange", val: "TASE — Tel Aviv Stock Exchange" },
  { label: "Stock Symbol", val: "GRP107" },
  { label: "Reporting Currency", val: "Israeli Shekel (ILS)" },
  { label: "Sector", val: "Technology Services" },
  { label: "Regulator", val: "Israel Securities Authority (ISA)" },
];

const tabs = [
  { label: "About Us",       icon: "Info",       href: "#about" },
  { label: "Presentations",  icon: "FileText",   href: "#presentations" },
  { label: "Stock Price",    icon: "TrendingUp", href: "#stock" },
  { label: "Events",         icon: "Calendar",   href: "#events" },
  { label: "Leadership",     icon: "Users",      href: "/leadership" },
];

export default function InvestorsPage() {
  return (
    <div className="page" data-block="investors-page">
      <Nav />
      <Breadcrumbs items={[{ label: "Home", url: "/" }, { label: "Investor Relations" }]} />

      <main>

        {/* ── Hero ─────────────────────────── */}
        <section id="about" className="iv-hero" data-block="hero">
          <div className="iv-hero__inner" data-element="inner">
            <div className="iv-hero__content" data-element="content">
              <AnimateIn delay={0} direction="up">
                <div className="iv-hero__eyebrow" data-field="eyebrow">Investor Relations</div>
              </AnimateIn>
              <AnimateIn delay={0.08} direction="up">
                <h1 className="iv-hero__title" data-field="title">Built for the Long Term</h1>
              </AnimateIn>
              <AnimateIn delay={0.16} direction="up">
                <p className="iv-hero__sub" data-field="sub">
                  Group 107 is a publicly listed technology company delivering measurable growth
                  through premium software development, talent solutions, and digital innovation.
                </p>
              </AnimateIn>
              <AnimateIn delay={0.24} direction="up">
                <div className="iv-hero__actions" data-element="actions">
                  <a href="/contact-us" className="iv-hero__btn iv-hero__btn--primary" data-field="cta-primary">
                    Investor Enquiries <ArrowRight className="iv-hero__btn-icon" />
                  </a>
                  <a href="/about-us" className="iv-hero__btn iv-hero__btn--secondary" data-field="cta-secondary">
                    About Group 107 <ArrowUpRight className="iv-hero__btn-icon" />
                  </a>
                </div>
              </AnimateIn>
            </div>

            <AnimateIn delay={0.1} direction="fade" className="iv-hero__visual" data-element="visual">
              <div className="iv-hero__stock-card" data-element="stock-card">
                <div className="iv-hero__stock-label" data-field="exchange-label">Listed on</div>
                <div className="iv-hero__stock-exchange" data-field="exchange">TASE</div>
                <div className="iv-hero__stock-name" data-field="name">Tel Aviv Stock Exchange</div>
                <div className="iv-hero__stock-divider" aria-hidden="true" />
                <div className="iv-hero__stock-metrics" data-element="metrics">
                  <div className="iv-hero__stock-metric" data-element="metric">
                    <span className="iv-hero__stock-metric-val" data-field="val">10+</span>
                    <span className="iv-hero__stock-metric-label" data-field="label">Years Listed</span>
                  </div>
                  <div className="iv-hero__stock-metric" data-element="metric">
                    <span className="iv-hero__stock-metric-val" data-field="val">40+</span>
                    <span className="iv-hero__stock-metric-label" data-field="label">Countries Served</span>
                  </div>
                  <div className="iv-hero__stock-metric" data-element="metric">
                    <span className="iv-hero__stock-metric-val" data-field="val">700+</span>
                    <span className="iv-hero__stock-metric-label" data-field="label">Active Clients</span>
                  </div>
                </div>
              </div>
            </AnimateIn>
          </div>
        </section>

        {/* ── Tab Navigation ─────────────────── */}
        <nav className="iv-tabs" data-block="iv-tabs" aria-label="Investor Relations sections">
          <div className="iv-tabs__inner" data-element="inner">
            {tabs.map((tab, i) => {
              const Icon = Icons[tab.icon];
              return (
                <a
                  key={i}
                  href={tab.href}
                  className="iv-tabs__tab"
                  data-element="tab"
                  data-active={i === 0 ? "true" : "false"}
                >
                  {Icon && <Icon className="iv-tabs__tab-icon" strokeWidth={1.5} />}
                  {tab.label}
                </a>
              );
            })}
          </div>
        </nav>

        {/* ── Financial Highlights ──────────── */}
        <section className="iv-highlights" data-block="highlights">
          <div className="iv-highlights__inner" data-element="inner">
            <div className="iv-highlights__head" data-element="head">
              <AnimateIn delay={0} direction="up">
                <div className="iv-highlights__label" data-field="label">Company Overview</div>
              </AnimateIn>
              <AnimateIn delay={0.06} direction="up">
                <h2 className="iv-highlights__title" data-field="title">Key Metrics at a Glance</h2>
              </AnimateIn>
            </div>
            <div className="iv-highlights__grid" data-element="grid">
              {highlights.map((h, i) => (
                <AnimateIn key={i} delay={0.08 * i} direction="up">
                  <div className="iv-highlights__card" data-element="card">
                    <div className="iv-highlights__card-num" data-field="num">{h.num}</div>
                    <div className="iv-highlights__card-label" data-field="label">{h.label}</div>
                    <p className="iv-highlights__card-desc" data-field="desc">{h.desc}</p>
                  </div>
                </AnimateIn>
              ))}
            </div>
          </div>
        </section>

        {/* ── Investor Presentations ─────────── */}
        <section id="presentations" className="iv-presentation" data-block="presentation">
          <div className="iv-presentation__inner" data-element="inner">
            <div className="iv-presentation__head" data-element="head">
              <AnimateIn delay={0} direction="up">
                <div className="iv-presentation__label" data-field="label">Documents & Presentations</div>
              </AnimateIn>
              <AnimateIn delay={0.06} direction="up">
                <h2 className="iv-presentation__title" data-field="title">Investor Presentations & Reports</h2>
              </AnimateIn>
            </div>
            <div className="iv-presentation__grid" data-element="grid">
              {presentations.map((p, i) => {
                const Icon = Icons[p.icon];
                return (
                  <AnimateIn key={i} delay={0.06 * i} direction="up">
                    <a
                      href={p.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="iv-presentation__card"
                      data-element="card"
                    >
                      <div className="iv-presentation__card-icon-wrap" data-element="icon-wrap">
                        {Icon && <Icon className="iv-presentation__card-icon" strokeWidth={1.5} />}
                      </div>
                      <div className="iv-presentation__card-type" data-field="type">{p.type}</div>
                      <div className="iv-presentation__card-title" data-field="title">{p.title}</div>
                      <div className="iv-presentation__card-date" data-field="date">{p.date}</div>
                      <div className="iv-presentation__card-cta" data-element="cta">
                        View Document
                        {ExternalLink && <ExternalLink className="iv-presentation__card-cta-icon" strokeWidth={1.5} />}
                      </div>
                    </a>
                  </AnimateIn>
                );
              })}
            </div>
          </div>
        </section>

        {/* ── Investment Pillars ────────────── */}
        <section className="iv-pillars" data-block="pillars">
          <div className="iv-pillars__inner" data-element="inner">
            <div className="iv-pillars__head" data-element="head">
              <AnimateIn delay={0} direction="up">
                <div className="iv-pillars__label" data-field="label">Why Invest</div>
              </AnimateIn>
              <AnimateIn delay={0.06} direction="up">
                <h2 className="iv-pillars__title" data-field="title">A Disciplined, Scalable Business</h2>
              </AnimateIn>
              <AnimateIn delay={0.12} direction="up">
                <p className="iv-pillars__sub" data-field="sub">
                  Group 107 is built on a resilient operating model with consistent growth, global diversification, and full transparency.
                </p>
              </AnimateIn>
            </div>
            <div className="iv-pillars__grid" data-element="grid">
              {pillars.map((p, i) => {
                const Icon = Icons[p.icon];
                return (
                  <AnimateIn key={i} delay={0.08 * i} direction="up">
                    <div className="iv-pillars__card" data-element="card">
                      <div className="iv-pillars__card-icon-wrap" data-element="icon-wrap">
                        {Icon && <Icon className="iv-pillars__card-icon" strokeWidth={1.5} />}
                      </div>
                      <h3 className="iv-pillars__card-title" data-field="title">{p.title}</h3>
                      <p className="iv-pillars__card-desc" data-field="desc">{p.desc}</p>
                    </div>
                  </AnimateIn>
                );
              })}
            </div>
          </div>
        </section>

        {/* ── Stock Price ───────────────────── */}
        <section id="stock" className="iv-stock" data-block="stock">
          <div className="iv-stock__inner" data-element="inner">
            <AnimateIn delay={0} direction="left" className="iv-stock__content" data-element="content">
              <div className="iv-stock__label" data-field="label">Stock Information</div>
              <h2 className="iv-stock__title" data-field="title">TASE Listed Company</h2>
              <p className="iv-stock__sub" data-field="sub">
                Group 107 is publicly traded on the Tel Aviv Stock Exchange (TASE). For live stock price data, please visit the TASE website or your preferred financial data provider.
              </p>
              <a
                href="https://www.tase.co.il"
                target="_blank"
                rel="noopener noreferrer"
                className="iv-stock__link"
                data-field="link"
              >
                View on TASE
                {ExternalLink && <ExternalLink className="iv-stock__link-icon" strokeWidth={1.5} />}
              </a>
            </AnimateIn>
            <AnimateIn delay={0.1} direction="right">
              <div className="iv-stock__ticker-card" data-element="ticker-card">
                <div className="iv-stock__ticker-symbol" data-field="symbol">GRP107</div>
                <div className="iv-stock__ticker-name" data-field="name">Group 107 Ltd · TASE</div>
                <div className="iv-stock__ticker-divider" aria-hidden="true" />
                <div className="iv-stock__ticker-rows" data-element="rows">
                  {stockRows.map((row, i) => (
                    <div key={i} className="iv-stock__ticker-row" data-element="row">
                      <span className="iv-stock__ticker-row-label" data-field="label">{row.label}</span>
                      <span className="iv-stock__ticker-row-val" data-field="val">{row.val}</span>
                    </div>
                  ))}
                </div>
                <div className="iv-stock__ticker-note" data-field="note">
                  Live pricing available at tase.co.il — data delayed 15 min
                </div>
              </div>
            </AnimateIn>
          </div>
        </section>

        {/* ── Trust & Governance ────────────── */}
        <section className="iv-trust" data-block="trust">
          <div className="iv-trust__inner" data-element="inner">
            <AnimateIn delay={0} direction="left" className="iv-trust__content" data-element="content">
              <div className="iv-trust__label" data-field="label">Governance</div>
              <h2 className="iv-trust__title" data-field="title">Accountability You Can Rely On</h2>
              <p className="iv-trust__sub" data-field="sub">
                As a publicly traded company on the Tel Aviv Stock Exchange, Group 107 operates with the highest standards of financial reporting, shareholder communication, and regulatory compliance.
              </p>
              <div className="iv-trust__bullets" data-element="bullets">
                {trustPoints.map((pt, i) => (
                  <div key={i} className="iv-trust__bullet" data-element="bullet">
                    {CheckCircle2 && <CheckCircle2 className="iv-trust__bullet-icon" strokeWidth={1.5} />}
                    <span data-field="text">{pt}</span>
                  </div>
                ))}
              </div>
            </AnimateIn>
            <AnimateIn delay={0.1} direction="right" className="iv-trust__visual" data-element="visual">
              <div className="iv-trust__visual-card" data-element="visual-card">
                <div className="iv-trust__visual-badge" data-field="badge">Public Company</div>
                <div className="iv-trust__visual-headline" data-field="headline">
                  Full Regulatory Compliance
                </div>
                <div className="iv-trust__visual-body" data-field="body">
                  Reporting to the Israel Securities Authority (ISA) and TASE listing requirements, Group 107 maintains quarterly and annual financial disclosures.
                </div>
                <div className="iv-trust__visual-divider" aria-hidden="true" />
                <div className="iv-trust__visual-tags" data-element="tags">
                  {["TASE Listed", "ISA Compliant", "Audited Accounts", "Quarterly Reports"].map((t) => (
                    <span key={t} className="iv-trust__visual-tag" data-field="tag">{t}</span>
                  ))}
                </div>
              </div>
            </AnimateIn>
          </div>
        </section>

        {/* ── Events ───────────────────────── */}
        <section id="events" className="iv-events" data-block="events">
          <div className="iv-events__inner" data-element="inner">
            <div className="iv-events__head" data-element="head">
              <AnimateIn delay={0} direction="up">
                <div className="iv-events__label" data-field="label">Investor Calendar</div>
              </AnimateIn>
              <AnimateIn delay={0.06} direction="up">
                <h2 className="iv-events__title" data-field="title">Upcoming Events & Webinars</h2>
              </AnimateIn>
            </div>
            <div className="iv-events__list" data-element="list">
              {events.map((ev, i) => (
                <AnimateIn key={i} delay={0.08 * i} direction="up">
                  <a
                    href={ev.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="iv-events__item"
                    data-element="item"
                  >
                    <div className="iv-events__item-date" data-element="date">
                      <span className="iv-events__item-day" data-field="day">{ev.day}</span>
                      <span data-field="month">{ev.month}</span>
                      <span data-field="year">{ev.year}</span>
                    </div>
                    <div className="iv-events__item-body" data-element="body">
                      <div className="iv-events__item-title" data-field="title">{ev.title}</div>
                      <div className="iv-events__item-meta" data-field="meta">{ev.meta}</div>
                    </div>
                    <div className="iv-events__item-cta" data-element="cta">
                      Register
                      {ArrowRight && <ArrowRight className="iv-events__item-cta-icon" />}
                    </div>
                  </a>
                </AnimateIn>
              ))}
            </div>
          </div>
        </section>

        {/* ── Global Presence ───────────────── */}
        <section className="iv-global" data-block="global">
          <div className="iv-global__inner" data-element="inner">
            <div className="iv-global__head" data-element="head">
              <AnimateIn delay={0} direction="up">
                <div className="iv-global__label" data-field="label">Our Hubs</div>
              </AnimateIn>
              <AnimateIn delay={0.06} direction="up">
                <h2 className="iv-global__title" data-field="title">Global Operations, Local Expertise</h2>
              </AnimateIn>
              <AnimateIn delay={0.12} direction="up">
                <p className="iv-global__sub" data-field="sub">
                  Strategic hubs across four countries ensure we can serve clients in any time zone with proximity to talent.
                </p>
              </AnimateIn>
            </div>
            <div className="iv-global__grid" data-element="grid">
              {hubs.map((hub, i) => (
                <AnimateIn key={i} delay={0.08 * i} direction="up">
                  <div className="iv-global__card" data-element="card">
                    <div className="iv-global__card-city" data-field="city">{hub.city}</div>
                    <div className="iv-global__card-country" data-field="country">{hub.country}</div>
                    <div className="iv-global__card-role" data-field="role">{hub.role}</div>
                  </div>
                </AnimateIn>
              ))}
            </div>
          </div>
        </section>

        {/* ── CTA ──────────────────────────── */}
        <section className="iv-cta" data-block="cta">
          <div className="iv-cta__inner" data-element="inner">
            <AnimateIn delay={0} direction="up">
              <div className="iv-cta__eyebrow" data-field="eyebrow">Investor Relations</div>
            </AnimateIn>
            <AnimateIn delay={0.08} direction="up">
              <h2 className="iv-cta__title" data-field="title">Interested in Group 107?</h2>
            </AnimateIn>
            <AnimateIn delay={0.14} direction="up">
              <p className="iv-cta__sub" data-field="sub">
                For investor enquiries, financial information, or partnership opportunities, contact our investor relations team.
              </p>
            </AnimateIn>
            <AnimateIn delay={0.2} direction="up">
              <div className="iv-cta__actions" data-element="actions">
                <a href="/contact-us" className="iv-cta__btn iv-cta__btn--primary" data-field="cta">
                  Contact Investor Relations <ArrowRight className="iv-cta__btn-icon" />
                </a>
                <a href="/about-us" className="iv-cta__btn iv-cta__btn--secondary" data-field="cta-sec">
                  Learn About Group 107 <ArrowUpRight className="iv-cta__btn-icon" />
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
