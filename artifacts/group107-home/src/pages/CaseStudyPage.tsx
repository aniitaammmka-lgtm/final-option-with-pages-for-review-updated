import { useParams } from "wouter";
import Nav from "@/components/blocks/Nav";
import Footer from "@/components/blocks/Footer";
import AnimateIn from "@/components/AnimateIn";
import { Icons } from "@/lib/icons";
import { getCaseStudy, getRelatedCaseStudies } from "@/data/caseStudies";
import NotFound from "@/pages/not-found";

const ArrowRight = Icons.ArrowRight;
const ArrowUpRight = Icons.ArrowUpRight;
const ExternalLink = Icons.ExternalLink;

export default function CaseStudyPage() {
  const params = useParams<{ slug: string }>();
  const cs = getCaseStudy(params.slug ?? "");

  if (!cs) return <NotFound />;

  const related = getRelatedCaseStudies(cs.relatedSlugs).slice(0, 3);

  return (
    <div className="page" data-block="case-study-page">
      <Nav />

      <main data-block="cs-main">

        {/* ── Hero ──────────────────────────────────── */}
        <section data-block="cs-hero" className="cs-hero">
          <div data-element="grid" className="cs-hero__grid" aria-hidden="true" />
          <div data-element="noise" className="cs-hero__noise" aria-hidden="true" />
          <div data-element="inner" className="cs-hero__inner">
            <AnimateIn delay={0} direction="up">
              <a href="/our-work" data-element="back" className="cs-hero__back">
                <ArrowRight className="cs-hero__back-icon cs-hero__back-icon--flip" />
                Our Work
              </a>
            </AnimateIn>
            <AnimateIn delay={0.08} direction="up">
              <div data-element="tags" className="cs-hero__tags">
                {cs.tags.map(t => (
                  <span key={t} data-element="tag" className="cs-hero__tag">{t}</span>
                ))}
              </div>
            </AnimateIn>
            <AnimateIn delay={0.16} direction="up">
              <h1 data-element="client" className="cs-hero__client">{cs.client}</h1>
            </AnimateIn>
            <AnimateIn delay={0.22} direction="up">
              <p data-element="tagline" className="cs-hero__tagline">{cs.tagline}</p>
            </AnimateIn>
            <AnimateIn delay={0.3} direction="up">
              <div data-element="meta" className="cs-hero__meta">
                <div data-element="meta-item" className="cs-hero__meta-item">
                  <span data-field="label" className="cs-hero__meta-label">Industry</span>
                  <span data-field="value" className="cs-hero__meta-value">{cs.industry}</span>
                </div>
                <div data-element="divider" className="cs-hero__meta-divider" aria-hidden="true" />
                <div data-element="meta-item" className="cs-hero__meta-item">
                  <span data-field="label" className="cs-hero__meta-label">Year</span>
                  <span data-field="value" className="cs-hero__meta-value">{cs.year}</span>
                </div>
                <div data-element="divider" className="cs-hero__meta-divider" aria-hidden="true" />
                <div data-element="meta-item" className="cs-hero__meta-item">
                  <span data-field="label" className="cs-hero__meta-label">Services</span>
                  <span data-field="value" className="cs-hero__meta-value">{cs.tags.length} disciplines</span>
                </div>
              </div>
            </AnimateIn>
          </div>
        </section>

        {/* ── Hero image ────────────────────────────── */}
        <div data-block="cs-hero-img" className="cs-hero-img">
          <AnimateIn delay={0} direction="fade">
            <img
              src={cs.heroImage.src}
              alt={cs.heroImage.alt}
              data-element="img"
              className="cs-hero-img__img"
            />
          </AnimateIn>
        </div>

        {/* ── Brief ─────────────────────────────────── */}
        <section data-block="cs-brief" className="cs-brief">
          <div data-element="inner" className="cs-brief__inner">
            <div data-element="sidebar" className="cs-brief__sidebar">
              <AnimateIn delay={0} direction="up">
                <div data-element="block" className="cs-brief__info-block">
                  <div data-element="label" className="cs-brief__info-label">Client</div>
                  <div data-element="value" className="cs-brief__info-value">{cs.client}</div>
                </div>
              </AnimateIn>
              <AnimateIn delay={0.06} direction="up">
                <div data-element="block" className="cs-brief__info-block">
                  <div data-element="label" className="cs-brief__info-label">Industry</div>
                  <div data-element="value" className="cs-brief__info-value">{cs.industry}</div>
                </div>
              </AnimateIn>
              <AnimateIn delay={0.1} direction="up">
                <div data-element="block" className="cs-brief__info-block">
                  <div data-element="label" className="cs-brief__info-label">Services</div>
                  <div data-element="value" className="cs-brief__info-value cs-brief__info-services">
                    {cs.tags.map(t => (
                      <span key={t} data-field="service" className="cs-brief__service-pill">{t}</span>
                    ))}
                  </div>
                </div>
              </AnimateIn>
              <AnimateIn delay={0.14} direction="up">
                <div data-element="block" className="cs-brief__info-block">
                  <div data-element="label" className="cs-brief__info-label">Year</div>
                  <div data-element="value" className="cs-brief__info-value">{cs.year}</div>
                </div>
              </AnimateIn>
              <AnimateIn delay={0.18} direction="up">
                <a
                  href={cs.website}
                  target="_blank"
                  rel="noopener noreferrer"
                  data-element="website"
                  className="cs-brief__website"
                >
                  Visit Website <ExternalLink className="cs-brief__website-icon" />
                </a>
              </AnimateIn>
            </div>

            <div data-element="content" className="cs-brief__content">
              <AnimateIn delay={0} direction="up">
                <div data-element="section" className="cs-brief__section">
                  <div data-element="label" className="cs-brief__section-label">Project Goal</div>
                  <p data-element="text" className="cs-brief__section-text">{cs.goal}</p>
                </div>
              </AnimateIn>
              <AnimateIn delay={0.1} direction="up">
                <div data-element="section" className="cs-brief__section">
                  <div data-element="label" className="cs-brief__section-label">Overview</div>
                  <p data-element="text" className="cs-brief__section-text">{cs.description}</p>
                </div>
              </AnimateIn>
              <AnimateIn delay={0.18} direction="up">
                <div data-element="section" className="cs-brief__section cs-brief__section--conclusion">
                  <div data-element="label" className="cs-brief__section-label">Result</div>
                  <p data-element="text" className="cs-brief__section-text cs-brief__section-text--emphasis">{cs.conclusion}</p>
                </div>
              </AnimateIn>
            </div>
          </div>
        </section>

        {/* ── Gallery ───────────────────────────────── */}
        {cs.gallery.length > 0 && (
          <section data-block="cs-gallery" className="cs-gallery">
            <div data-element="inner" className="cs-gallery__inner">
              <div
                data-element="grid"
                className="cs-gallery__grid"
                data-count={cs.gallery.length}
              >
                {cs.gallery.map((img, i) => (
                  <AnimateIn key={i} delay={i * 0.07} direction="up">
                    <div data-element="item" className="cs-gallery__item" data-index={i}>
                      <img
                        src={img.src}
                        alt={img.alt}
                        data-field="img"
                        className="cs-gallery__img"
                      />
                    </div>
                  </AnimateIn>
                ))}
              </div>
            </div>
          </section>
        )}

        {/* ── Solutions ─────────────────────────────── */}
        <section data-block="cs-solutions" className="cs-solutions">
          <div data-element="inner" className="cs-solutions__inner">
            <AnimateIn delay={0} direction="up">
              <div data-element="label" className="cs-solutions__label">Solutions Provided</div>
              <h2 data-element="title" className="cs-solutions__title">How We Delivered It</h2>
            </AnimateIn>
            <div data-element="grid" className="cs-solutions__grid">
              {cs.solutions.map((sol, i) => (
                <AnimateIn key={i} delay={i * 0.08} direction="up">
                  <div data-element="card" className="cs-solutions__card">
                    <div data-element="num" className="cs-solutions__card-num">0{i + 1}</div>
                    <h3 data-element="title" className="cs-solutions__card-title">{sol.title}</h3>
                    <p data-element="text" className="cs-solutions__card-text">{sol.text}</p>
                  </div>
                </AnimateIn>
              ))}
            </div>
          </div>
        </section>

        {/* ── Quote ─────────────────────────────────── */}
        {cs.quote && (
          <section data-block="cs-quote" className="cs-quote">
            <div data-element="inner" className="cs-quote__inner">
              <AnimateIn delay={0} direction="up">
                <div data-element="mark" className="cs-quote__mark" aria-hidden="true">"</div>
                <blockquote data-element="text" className="cs-quote__text">
                  {cs.quote.text}
                </blockquote>
                <div data-element="attribution" className="cs-quote__attribution">
                  <span data-field="author" className="cs-quote__author">{cs.quote.author}</span>
                  <span data-field="role" className="cs-quote__role">{cs.quote.role}</span>
                </div>
              </AnimateIn>
            </div>
          </section>
        )}

        {/* ── Related ───────────────────────────────── */}
        {related.length > 0 && (
          <section data-block="cs-related" className="cs-related">
            <div data-element="inner" className="cs-related__inner">
              <AnimateIn delay={0} direction="up">
                <div data-element="header" className="cs-related__header">
                  <div data-element="label" className="cs-related__label">More Case Studies</div>
                  <a href="/our-work" data-element="all" className="cs-related__all">
                    View All <ArrowRight className="cs-related__all-icon" />
                  </a>
                </div>
              </AnimateIn>
              <div data-element="grid" className="cs-related__grid">
                {related.map((rel, i) => (
                  <AnimateIn key={rel.slug} delay={i * 0.09} direction="up">
                    <a
                      href={`/our-work/${rel.slug}`}
                      data-element="card"
                      className="cs-related__card"
                    >
                      <div data-element="img-wrap" className="cs-related__card-img-wrap">
                        <img
                          src={rel.heroImage.src}
                          alt={rel.heroImage.alt}
                          data-field="img"
                          className="cs-related__card-img"
                        />
                      </div>
                      <div data-element="body" className="cs-related__card-body">
                        <div data-element="tags" className="cs-related__card-tags">
                          {rel.tags.slice(0, 2).map(t => (
                            <span key={t} data-field="tag" className="cs-related__card-tag">{t}</span>
                          ))}
                        </div>
                        <div data-element="client" className="cs-related__card-client">{rel.client}</div>
                        <div data-element="tagline" className="cs-related__card-tagline">{rel.tagline}</div>
                        <div data-element="cta" className="cs-related__card-cta" aria-hidden="true">
                          View Case Study <ArrowRight className="cs-related__card-cta-icon" />
                        </div>
                      </div>
                    </a>
                  </AnimateIn>
                ))}
              </div>
            </div>
          </section>
        )}

        {/* ── CTA ───────────────────────────────────── */}
        <section data-block="cs-cta" className="cs-cta">
          <div data-element="inner" className="cs-cta__inner">
            <AnimateIn delay={0} direction="up">
              <div data-element="eyebrow" className="cs-cta__eyebrow">Let's Build Together</div>
            </AnimateIn>
            <AnimateIn delay={0.08} direction="up">
              <h2 data-element="title" className="cs-cta__title">Ready to be our<br />next case study?</h2>
            </AnimateIn>
            <AnimateIn delay={0.16} direction="up">
              <a href="#cta" data-element="btn" className="cs-cta__btn">
                Start a Project <ArrowUpRight className="cs-cta__btn-icon" />
              </a>
            </AnimateIn>
          </div>
        </section>

      </main>

      <Footer />
    </div>
  );
}
