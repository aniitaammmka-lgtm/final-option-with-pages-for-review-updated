/**
 * @block case-studies
 * @root <section class="case-studies">
 * @repeatable case-studies__item — 1 to N
 * @optional case-studies__filters
 * @cta per-item
 * @static-compatible yes
 */
import { useState } from "react";
import { Link } from "wouter";
import AnimateIn from "@/components/AnimateIn";
import { casesData } from "@/data/cases";
import { Icons } from "@/lib/icons";

const INITIAL_COUNT = 6;

export default function CaseStudies() {
  const ArrowRight = Icons.ArrowRight;
  const ChevronDown = Icons.ChevronDown;
  const [showAll, setShowAll] = useState(false);

  return (
    <section id="work" className="case-studies" data-block="case-studies">
      <div className="case-studies__grain" aria-hidden="true" />
      <div className="case-studies__inner">
        <div className="case-studies__header">
          <div>
            <AnimateIn delay={0} direction="up">
              <div className="case-studies__label" data-field="label">{casesData.label}</div>
            </AnimateIn>
            <AnimateIn delay={0.08} direction="up">
              <h2 className="case-studies__title" data-field="title">
                {casesData.title.split("\n").map((line, i) => (
                  <span key={i}>{line}<br /></span>
                ))}
              </h2>
            </AnimateIn>
          </div>
          <AnimateIn delay={0.12} direction="up">
            <Link href="/our-work" className="case-studies__view-all" data-element="cta">
              View All Work <ArrowRight className="case-studies__view-all-icon" />
            </Link>
          </AnimateIn>
        </div>

        <AnimateIn delay={0.15} direction="up">
          <div className="case-studies__filters">
            {casesData.filters.map((filter, i) => (
              <button
                key={i}
                className="case-studies__filter"
                data-element="item"
                data-active={i === 0 ? "true" : "false"}
                data-field="label"
              >
                {filter}
              </button>
            ))}
          </div>
        </AnimateIn>

        <div className="case-studies__grid">
          {casesData.items.map((c, i) => (
            <AnimateIn
              key={i}
              delay={c.animDelay}
              direction="up"
              data-hidden={!showAll && i >= INITIAL_COUNT ? "true" : "false"}
            >
              <Link href={c.link} className="case-studies__item" data-element="item">
                <div className="case-studies__item-img-wrap">
                  <img
                    src={c.image.src}
                    alt={c.image.alt}
                    className="case-studies__item-img"
                    data-field="src"
                  />
                  <div className="case-studies__item-category" data-field="meta">{c.category}</div>
                </div>
                <div className="case-studies__item-body">
                  <div className="case-studies__item-client" data-field="label">{c.client}</div>
                  <h3 className="case-studies__item-title" data-field="title">{c.title}</h3>
                  <p className="case-studies__item-result" data-field="description">{c.result}</p>
                  <div className="case-studies__item-cta" aria-hidden="true">
                    View Case Study <ArrowRight className="case-studies__item-cta-icon" />
                  </div>
                </div>
              </Link>
            </AnimateIn>
          ))}
        </div>

        <div className="case-studies__load-more-wrap" data-hidden={showAll ? "true" : "false"}>
          <button
            className="case-studies__load-more"
            data-element="load-more"
            onClick={() => setShowAll(true)}
          >
            Load More
            {ChevronDown && <ChevronDown className="case-studies__load-more-icon" />}
          </button>
        </div>
      </div>
    </section>
  );
}
