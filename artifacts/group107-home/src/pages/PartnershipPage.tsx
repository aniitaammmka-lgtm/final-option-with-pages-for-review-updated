import Nav from "@/components/blocks/Nav";
import Footer from "@/components/blocks/Footer";
import AnimateIn from "@/components/AnimateIn";
import { Icons } from "@/lib/icons";
import {
  partnershipHero,
  partnershipIntro,
  partners,
  partnershipValues,
  affiliateProgram,
} from "@/data/partnership";

const ArrowRight = Icons.ArrowRight;
const ArrowUpRight = Icons.ArrowUpRight;
const CheckCircle2 = Icons.CheckCircle2;

export default function PartnershipPage() {
  return (
    <div className="page" data-block="partnership-page">
      <Nav />

      <main data-block="prt-main">

        {/* ── Hero ─────────────────────────────────────── */}
        <section data-block="prt-hero" className="prt-hero">
          <div data-element="overlay" className="prt-hero__overlay" aria-hidden="true" />
          <div data-element="inner" className="prt-hero__inner">
            <AnimateIn delay={0} direction="up">
              <div data-element="eyebrow" className="prt-hero__eyebrow">{partnershipHero.eyebrow}</div>
            </AnimateIn>
            <AnimateIn delay={0.1} direction="up">
              <h1 data-element="title" className="prt-hero__title">
                {partnershipHero.title.split("\n").map((line, i) => (
                  <span key={i} data-field="line">{line}<br /></span>
                ))}
              </h1>
            </AnimateIn>
            <AnimateIn delay={0.18} direction="up">
              <p data-element="sub" className="prt-hero__sub">{partnershipHero.sub}</p>
            </AnimateIn>
            <AnimateIn delay={0.26} direction="up">
              <a href="#partners" data-element="scroll-cta" className="prt-hero__scroll-cta">
                <ArrowRight className="prt-hero__scroll-icon" />
                Explore Partners
              </a>
            </AnimateIn>
          </div>
        </section>

        {/* ── Partnership Values ────────────────────────── */}
        <section data-block="prt-values" className="prt-values">
          <div data-element="inner" className="prt-values__inner">
            <div data-element="grid" className="prt-values__grid">
              {partnershipValues.map((val) => {
                const Icon = Icons[val.icon];
                return (
                  <AnimateIn key={val.title} delay={val.animDelay} direction="up">
                    <div data-block="prt-value-card" data-field={val.title} className="prt-value-card">
                      <div data-element="icon-wrap" className="prt-value-card__icon-wrap">
                        {Icon && <Icon strokeWidth={1.5} className="prt-value-card__icon" />}
                      </div>
                      <h3 data-element="title" className="prt-value-card__title">{val.title}</h3>
                      <p data-element="desc" className="prt-value-card__desc">{val.desc}</p>
                    </div>
                  </AnimateIn>
                );
              })}
            </div>
          </div>
        </section>

        {/* ── Partners Intro ────────────────────────────── */}
        <section id="partners" data-block="prt-intro" className="prt-intro">
          <div data-element="pattern" className="prt-intro__pattern" aria-hidden="true" />
          <div data-element="inner" className="prt-intro__inner">
            <AnimateIn delay={0} direction="up">
              <h2 data-element="title" className="prt-intro__title">{partnershipIntro.title}</h2>
            </AnimateIn>
            <div data-element="body" className="prt-intro__body">
              <AnimateIn delay={0.08} direction="left" className="prt-intro__col">
                <p data-element="left-body" className="prt-intro__text">{partnershipIntro.leftBody}</p>
                <p data-element="left-sub" className="prt-intro__text prt-intro__text--muted">{partnershipIntro.leftSub}</p>
              </AnimateIn>
              <AnimateIn delay={0.14} direction="right" className="prt-intro__col">
                <p data-element="right-body" className="prt-intro__text">{partnershipIntro.rightBody}</p>
                <p data-element="right-sub" className="prt-intro__text prt-intro__text--muted">{partnershipIntro.rightSub}</p>
              </AnimateIn>
            </div>
          </div>
        </section>

        {/* ── Partner Logos ─────────────────────────────── */}
        <section data-block="prt-logos" className="prt-logos">
          <div data-element="inner" className="prt-logos__inner">
            <div data-element="grid" className="prt-logos__grid">
              {partners.map((partner) => (
                <AnimateIn key={partner.name} delay={partner.animDelay} direction="up">
                  <a
                    href={partner.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    data-block="prt-logo-card"
                    data-field={partner.name}
                    className="prt-logo-card"
                  >
                    <img
                      data-element="logo"
                      src={partner.logo.src}
                      alt={partner.logo.alt}
                      className="prt-logo-card__img"
                    />
                    <span data-element="name" className="prt-logo-card__name">{partner.name}</span>
                  </a>
                </AnimateIn>
              ))}
            </div>
          </div>
        </section>

        {/* ── Affiliate Program ─────────────────────────── */}
        <section data-block="prt-affiliate" className="prt-affiliate">
          <div data-element="grain" className="prt-affiliate__grain" aria-hidden="true" />
          <div data-element="inner" className="prt-affiliate__inner">
            <AnimateIn delay={0} direction="left" className="prt-affiliate__content">
              <div data-element="tag" className="prt-affiliate__tag">{affiliateProgram.tag}</div>
              <h2 data-element="title" className="prt-affiliate__title">
                {affiliateProgram.title.split("\n").map((line, i) => (
                  <span key={i} data-field="line">{line}<br /></span>
                ))}
              </h2>
              <p data-element="body" className="prt-affiliate__body">{affiliateProgram.body}</p>
              <ul data-element="benefits" className="prt-affiliate__benefits">
                {affiliateProgram.benefits.map((benefit, i) => (
                  <li key={i} data-element="benefit" className="prt-affiliate__benefit">
                    <CheckCircle2 className="prt-affiliate__benefit-icon" strokeWidth={1.5} />
                    <span data-field="text">{benefit}</span>
                  </li>
                ))}
              </ul>
              <div data-element="actions" className="prt-affiliate__actions">
                <a
                  href={affiliateProgram.cta.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  data-element="cta-primary"
                  className="prt-affiliate__cta prt-affiliate__cta--primary"
                >
                  {affiliateProgram.cta.label} <ArrowRight className="prt-affiliate__cta-icon" />
                </a>
                <a
                  href={affiliateProgram.ctaTc.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  data-element="cta-secondary"
                  className="prt-affiliate__cta prt-affiliate__cta--secondary"
                >
                  {affiliateProgram.ctaTc.label} <ArrowUpRight className="prt-affiliate__cta-icon" />
                </a>
              </div>
            </AnimateIn>

            <AnimateIn delay={0.12} direction="right" className="prt-affiliate__aside">
              <div data-element="stat-card" className="prt-affiliate__stat-card">
                <div data-element="stat" className="prt-affiliate__stat">
                  <span data-field="val" className="prt-affiliate__stat-val">700+</span>
                  <span data-field="label" className="prt-affiliate__stat-label">Global Clients</span>
                </div>
                <div data-element="divider" className="prt-affiliate__stat-divider" aria-hidden="true" />
                <div data-element="stat" className="prt-affiliate__stat">
                  <span data-field="val" className="prt-affiliate__stat-val">88K+</span>
                  <span data-field="label" className="prt-affiliate__stat-label">Talent Pool</span>
                </div>
                <div data-element="divider" className="prt-affiliate__stat-divider" aria-hidden="true" />
                <div data-element="stat" className="prt-affiliate__stat">
                  <span data-field="val" className="prt-affiliate__stat-val">12+</span>
                  <span data-field="label" className="prt-affiliate__stat-label">Years Experience</span>
                </div>
              </div>
              <div data-element="contact-card" className="prt-affiliate__contact-card">
                <div data-element="contact-label" className="prt-affiliate__contact-label">Interested in partnering?</div>
                <a
                  href="mailto:sales@group107.com"
                  data-element="contact-email"
                  className="prt-affiliate__contact-email"
                >
                  sales@group107.com
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
