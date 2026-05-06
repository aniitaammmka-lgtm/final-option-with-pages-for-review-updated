import Nav from "@/components/blocks/Nav";
import Footer from "@/components/blocks/Footer";
import AnimateIn from "@/components/AnimateIn";
import { Icons } from "@/lib/icons";
import {
  careersHero,
  careersAbout,
  careersBenefits,
  careersVacancies,
  careersTestimonials,
  careersStats,
} from "@/data/careers";

const ArrowRight = Icons.ArrowRight;
const ArrowUpRight = Icons.ArrowUpRight;
const MapPin = Icons.MapPin;
const Clock = Icons.Clock;

export default function CareersPage() {
  return (
    <div className="page" data-block="careers-page">
      <Nav />

      <main data-block="cr-main">

        {/* ── Hero ─────────────────────────────────────── */}
        <section data-block="cr-hero" className="cr-hero">
          <div data-element="bg-grid" className="cr-hero__bg-grid" aria-hidden="true" />
          <div data-element="orb" className="cr-hero__orb cr-hero__orb--1" aria-hidden="true" />
          <div data-element="orb" className="cr-hero__orb cr-hero__orb--2" aria-hidden="true" />

          <div data-element="inner" className="cr-hero__inner">
            <AnimateIn delay={0} direction="up">
              <div data-element="label" className="cr-hero__label">{careersHero.label}</div>
            </AnimateIn>
            <AnimateIn delay={0.08} direction="up">
              <h1 data-element="title" className="cr-hero__title">{careersHero.title}</h1>
            </AnimateIn>
            <AnimateIn delay={0.14} direction="up">
              <p data-element="body" className="cr-hero__body">{careersHero.body}</p>
            </AnimateIn>
            <AnimateIn delay={0.18} direction="up">
              <p data-element="sub" className="cr-hero__sub">{careersHero.sub}</p>
            </AnimateIn>
            <AnimateIn delay={0.24} direction="up">
              <div data-element="actions" className="cr-hero__actions">
                <a
                  href={careersHero.cta.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  data-element="cta-primary"
                  className="cr-hero__cta cr-hero__cta--primary"
                >
                  {careersHero.cta.label} <ArrowRight className="cr-hero__cta-icon" />
                </a>
                <a
                  href={careersHero.ctaSecondary.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  data-element="cta-secondary"
                  className="cr-hero__cta cr-hero__cta--secondary"
                >
                  {careersHero.ctaSecondary.label} <ArrowUpRight className="cr-hero__cta-icon" />
                </a>
              </div>
            </AnimateIn>

            <AnimateIn delay={0.30} direction="up" className="cr-hero__stats">
              {careersStats.map((stat, i) => (
                <div key={i} data-element="stat" className="cr-hero__stat">
                  <span data-field="value" className="cr-hero__stat-val">{stat.value}</span>
                  <span data-field="label" className="cr-hero__stat-label">{stat.label}</span>
                </div>
              ))}
            </AnimateIn>
          </div>
        </section>

        {/* ── About ────────────────────────────────────── */}
        <section data-block="cr-about" className="cr-about">
          <div data-element="inner" className="cr-about__inner">
            <AnimateIn delay={0} direction="left" className="cr-about__content">
              <div data-element="tag" className="cr-about__tag">{careersAbout.tag}</div>
              <h2 data-element="title" className="cr-about__title">
                {careersAbout.title.split("\n").map((line, i) => (
                  <span key={i} data-field="line">{line}<br /></span>
                ))}
              </h2>
              <p data-element="body" className="cr-about__body">{careersAbout.body}</p>
            </AnimateIn>

            <AnimateIn delay={0.1} direction="right" className="cr-about__aside">
              <div data-element="mission-card" className="cr-about__card">
                <div data-element="card-label" className="cr-about__card-label">Mission</div>
                <p data-element="card-text" className="cr-about__card-text">{careersAbout.mission}</p>
              </div>
              <div data-element="vision-card" className="cr-about__card cr-about__card--dark">
                <div data-element="card-label" className="cr-about__card-label">Vision &amp; Goal</div>
                <p data-element="card-text" className="cr-about__card-text">{careersAbout.vision}</p>
              </div>
              <div data-element="ethics-card" className="cr-about__card">
                <div data-element="card-label" className="cr-about__card-label">Our Ethics</div>
                <p data-element="card-text" className="cr-about__card-text">{careersAbout.ethics}</p>
              </div>
            </AnimateIn>
          </div>
        </section>

        {/* ── Benefits ─────────────────────────────────── */}
        <section data-block="cr-benefits" className="cr-benefits">
          <div data-element="pattern" className="cr-benefits__pattern" aria-hidden="true" />
          <div data-element="inner" className="cr-benefits__inner">
            <div data-element="head" className="cr-benefits__head">
              <AnimateIn delay={0} direction="up">
                <div data-element="eyebrow" className="cr-benefits__eyebrow">Why Join Us</div>
              </AnimateIn>
              <AnimateIn delay={0.06} direction="up">
                <h2 data-element="title" className="cr-benefits__title">More Than a Job —<br />A Community</h2>
              </AnimateIn>
              <AnimateIn delay={0.1} direction="up">
                <p data-element="sub" className="cr-benefits__sub">
                  The professional and personal development of our people is our main priority. We strive to create a professional and innovative environment while maintaining a family-like atmosphere.
                </p>
              </AnimateIn>
            </div>

            <div data-element="grid" className="cr-benefits__grid">
              {careersBenefits.map((benefit) => {
                const Icon = Icons[benefit.icon];
                return (
                  <AnimateIn key={benefit.title} delay={benefit.animDelay} direction="up">
                    <div data-block="cr-benefit-card" data-field={benefit.title} className="cr-benefit-card">
                      <div data-element="icon-wrap" className="cr-benefit-card__icon-wrap">
                        {Icon && <Icon strokeWidth={1.5} className="cr-benefit-card__icon" />}
                      </div>
                      <h3 data-element="title" className="cr-benefit-card__title">{benefit.title}</h3>
                      <p data-element="desc" className="cr-benefit-card__desc">{benefit.desc}</p>
                    </div>
                  </AnimateIn>
                );
              })}
            </div>
          </div>
        </section>

        {/* ── Open Positions ───────────────────────────── */}
        <section data-block="cr-positions" className="cr-positions">
          <div data-element="inner" className="cr-positions__inner">
            <div data-element="head" className="cr-positions__head">
              <AnimateIn delay={0} direction="up">
                <div data-element="eyebrow" className="cr-positions__eyebrow">Open Roles</div>
              </AnimateIn>
              <AnimateIn delay={0.06} direction="up">
                <h2 data-element="title" className="cr-positions__title">Current Vacancies</h2>
              </AnimateIn>
              <AnimateIn delay={0.1} direction="up">
                <p data-element="sub" className="cr-positions__sub">Explore our latest openings and find the role that matches your skills and ambitions.</p>
              </AnimateIn>
            </div>

            <div data-element="list" className="cr-positions__list">
              {careersVacancies.map((vacancy) => (
                <AnimateIn key={vacancy.title} delay={vacancy.animDelay} direction="up">
                  <a
                    href="https://careers.group107.com/vacancies/"
                    target="_blank"
                    rel="noopener noreferrer"
                    data-block="cr-vacancy"
                    data-field={vacancy.title}
                    className="cr-vacancy"
                  >
                    <div data-element="info" className="cr-vacancy__info">
                      <h3 data-element="title" className="cr-vacancy__title">{vacancy.title}</h3>
                      <div data-element="meta" className="cr-vacancy__meta">
                        <span data-element="location" className="cr-vacancy__meta-item">
                          <MapPin className="cr-vacancy__meta-icon" />
                          {vacancy.location}
                        </span>
                        <span data-element="type" className="cr-vacancy__meta-item">
                          <Clock className="cr-vacancy__meta-icon" />
                          {vacancy.type}
                        </span>
                      </div>
                    </div>
                    <div data-element="right" className="cr-vacancy__right">
                      <span data-element="posted" className="cr-vacancy__posted">{vacancy.posted}</span>
                      <ArrowRight className="cr-vacancy__arrow" />
                    </div>
                  </a>
                </AnimateIn>
              ))}
            </div>

            <AnimateIn delay={0.4} direction="up" className="cr-positions__footer">
              <a
                href="https://careers.group107.com/vacancies/"
                target="_blank"
                rel="noopener noreferrer"
                data-element="view-all"
                className="cr-positions__view-all"
              >
                View All Positions <ArrowUpRight className="cr-positions__view-all-icon" />
              </a>
            </AnimateIn>
          </div>
        </section>

        {/* ── Employee Testimonials ─────────────────────── */}
        <section data-block="cr-voices" className="cr-voices">
          <div data-element="grain" className="cr-voices__grain" aria-hidden="true" />
          <div data-element="inner" className="cr-voices__inner">
            <div data-element="head" className="cr-voices__head">
              <AnimateIn delay={0} direction="up">
                <div data-element="eyebrow" className="cr-voices__eyebrow">Sharing Impressions</div>
              </AnimateIn>
              <AnimateIn delay={0.06} direction="up">
                <h2 data-element="title" className="cr-voices__title">Hear From Our Team</h2>
              </AnimateIn>
            </div>

            <div data-element="grid" className="cr-voices__grid">
              {careersTestimonials.map((t) => (
                <AnimateIn key={t.name} delay={t.animDelay} direction="up">
                  <div data-block="cr-voice-card" data-field={t.name} className="cr-voice-card">
                    <p data-element="quote" className="cr-voice-card__quote">"{t.quote}"</p>
                    <div data-element="author" className="cr-voice-card__author">
                      <span data-element="name" className="cr-voice-card__name">{t.name}</span>
                      <span data-element="role" className="cr-voice-card__role">{t.role}</span>
                    </div>
                  </div>
                </AnimateIn>
              ))}
            </div>
          </div>
        </section>

        {/* ── CTA ──────────────────────────────────────── */}
        <section data-block="cr-cta" className="cr-cta">
          <div data-element="glow" className="cr-cta__glow" aria-hidden="true" />
          <div data-element="inner" className="cr-cta__inner">
            <AnimateIn delay={0} direction="up">
              <div data-element="eyebrow" className="cr-cta__eyebrow">Ready to Join?</div>
            </AnimateIn>
            <AnimateIn delay={0.08} direction="up">
              <h2 data-element="title" className="cr-cta__title">Build Your Career<br />With Group 107</h2>
            </AnimateIn>
            <AnimateIn delay={0.14} direction="up">
              <p data-element="sub" className="cr-cta__sub">
                Join a team that values innovation, growth, and people. Explore our open positions and take the next step in your career.
              </p>
            </AnimateIn>
            <AnimateIn delay={0.2} direction="up">
              <div data-element="actions" className="cr-cta__actions">
                <a
                  href="https://careers.group107.com/vacancies/"
                  target="_blank"
                  rel="noopener noreferrer"
                  data-element="btn-primary"
                  className="cr-cta__btn cr-cta__btn--primary"
                >
                  Browse Vacancies <ArrowRight className="cr-cta__btn-icon" />
                </a>
                <a
                  href="mailto:joinus@group107.com"
                  data-element="btn-secondary"
                  className="cr-cta__btn cr-cta__btn--secondary"
                >
                  joinus@group107.com <ArrowUpRight className="cr-cta__btn-icon" />
                </a>
              </div>
            </AnimateIn>
            <AnimateIn delay={0.26} direction="up">
              <div data-element="offices" className="cr-cta__offices">
                {[
                  { city: "Tel Aviv", addr: "HaRakevet 58, Tel Aviv-Yafo, Israel" },
                  { city: "Lviv", addr: "Zelena 149/4gh, Lviv, Ukraine 79035" },
                ].map((office, i) => (
                  <div key={i} data-element="office" className="cr-cta__office">
                    <span data-field="city" className="cr-cta__office-city">{office.city}</span>
                    <span data-field="addr" className="cr-cta__office-addr">{office.addr}</span>
                  </div>
                ))}
              </div>
            </AnimateIn>
          </div>
        </section>

      </main>

      <Footer />
    </div>
  );
}
