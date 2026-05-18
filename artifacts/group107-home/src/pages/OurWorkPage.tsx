import { useState } from "react";
import Nav from "@/components/blocks/Nav";
import Footer from "@/components/blocks/Footer";
import Breadcrumbs from "@/components/Breadcrumbs";
import AnimateIn from "@/components/AnimateIn";
import { Icons } from "@/lib/icons";
import { ourWorkHero, ourWorkFilters, ourWorkItems, ourWorkCta } from "@/data/ourWork";

const ArrowRight = Icons.ArrowRight;
const ArrowUpRight = Icons.ArrowUpRight;
const ChevronDown = Icons.ChevronDown;

const INITIAL_COUNT = 6;

export default function OurWorkPage() {
  const [showAll, setShowAll] = useState(false);

  return (
    <div className="page" data-block="our-work-page">
      <Nav />
      <Breadcrumbs items={[{ label: "Home", url: "/" }, { label: "Our Work" }]} />

      <main data-block="ow-main">

        {/* ── Hero ──────────────────────────────────────── */}
        <section data-block="ow-hero" className="ow-hero">
          <div data-element="grid" className="ow-hero__grid" aria-hidden="true" />
          <div data-element="noise" className="ow-hero__noise" aria-hidden="true" />
          <div data-element="inner" className="ow-hero__inner">
            <AnimateIn delay={0} direction="up">
              <div data-element="eyebrow" className="ow-hero__eyebrow">{ourWorkHero.eyebrow}</div>
            </AnimateIn>
            <AnimateIn delay={0.08} direction="up">
              <h1 data-element="title" className="ow-hero__title">{ourWorkHero.title}</h1>
            </AnimateIn>
            <AnimateIn delay={0.16} direction="up">
              <p data-element="sub" className="ow-hero__sub">{ourWorkHero.sub}</p>
            </AnimateIn>
            <AnimateIn delay={0.24} direction="up">
              <div data-element="stats" className="ow-hero__stats">
                <div data-element="stat" className="ow-hero__stat">
                  <span data-field="number" className="ow-hero__stat-number">700+</span>
                  <span data-field="label" className="ow-hero__stat-label">Clients Globally</span>
                </div>
                <div data-element="divider" className="ow-hero__stat-divider" aria-hidden="true" />
                <div data-element="stat" className="ow-hero__stat">
                  <span data-field="number" className="ow-hero__stat-number">10+</span>
                  <span data-field="label" className="ow-hero__stat-label">Years Delivering</span>
                </div>
                <div data-element="divider" className="ow-hero__stat-divider" aria-hidden="true" />
                <div data-element="stat" className="ow-hero__stat">
                  <span data-field="number" className="ow-hero__stat-number">88K+</span>
                  <span data-field="label" className="ow-hero__stat-label">Talent Pool</span>
                </div>
              </div>
            </AnimateIn>
          </div>
        </section>

        {/* ── Filter strip ──────────────────────────────── */}
        <div data-block="ow-filter" className="ow-filter">
          <div data-element="inner" className="ow-filter__inner">
            {ourWorkFilters.map((f, i) => (
              <button
                key={f}
                data-element="btn"
                data-field={f}
                data-active={i === 0 ? "true" : "false"}
                className="ow-filter__btn"
              >
                {f}
              </button>
            ))}
          </div>
        </div>

        {/* ── Projects grid ─────────────────────────────── */}
        <section data-block="ow-grid" className="ow-grid">
          <div data-element="inner" className="ow-grid__inner">
            <div data-element="items" className="ow-grid__items">
              {ourWorkItems.map((item, i) => (
                <AnimateIn
                  key={item.slug}
                  delay={item.animDelay}
                  direction="up"
                  data-hidden={!showAll && i >= INITIAL_COUNT ? "true" : "false"}
                >
                  <a
                    href={item.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    data-element="card"
                    data-field={item.slug}
                    className="ow-card"
                  >
                    <div data-element="img-wrap" className="ow-card__img-wrap">
                      <img
                        src={item.image.src}
                        alt={item.image.alt}
                        data-field="img"
                        className="ow-card__img"
                      />
                      <div data-element="category" className="ow-card__category">{item.category}</div>
                    </div>
                    <div data-element="body" className="ow-card__body">
                      <div data-element="client" className="ow-card__client">{item.client}</div>
                      <h3 data-element="title" className="ow-card__title">{item.title}</h3>
                      <p data-element="result" className="ow-card__result">{item.result}</p>
                      <div data-element="cta" className="ow-card__cta" aria-hidden="true">
                        View Case Study <ArrowRight className="ow-card__cta-icon" />
                      </div>
                    </div>
                  </a>
                </AnimateIn>
              ))}
            </div>

            {/* Load More */}
            <div className="ow-load-more-wrap" data-hidden={showAll ? "true" : "false"}>
              <button
                className="ow-load-more"
                data-element="load-more"
                onClick={() => setShowAll(true)}
              >
                Load More
                {ChevronDown && <ChevronDown className="ow-load-more-icon" />}
              </button>
            </div>
          </div>
        </section>

        {/* ── CTA ───────────────────────────────────────── */}
        <section data-block="ow-cta" className="ow-cta">
          <div data-element="inner" className="ow-cta__inner">
            <AnimateIn delay={0} direction="up">
              <div data-element="eyebrow" className="ow-cta__eyebrow">{ourWorkCta.eyebrow}</div>
            </AnimateIn>
            <AnimateIn delay={0.08} direction="up">
              <h2 data-element="title" className="ow-cta__title">
                {ourWorkCta.title.split("\n").map((line, i) => (
                  <span key={i} data-field="line">{line}<br /></span>
                ))}
              </h2>
            </AnimateIn>
            <AnimateIn delay={0.16} direction="up">
              <p data-element="sub" className="ow-cta__sub">{ourWorkCta.sub}</p>
            </AnimateIn>
            <AnimateIn delay={0.24} direction="up">
              <a href={ourWorkCta.cta.url} data-element="btn" className="ow-cta__btn">
                {ourWorkCta.cta.label}
                <ArrowUpRight className="ow-cta__btn-icon" />
              </a>
            </AnimateIn>
          </div>
        </section>

      </main>

      <Footer />
    </div>
  );
}
