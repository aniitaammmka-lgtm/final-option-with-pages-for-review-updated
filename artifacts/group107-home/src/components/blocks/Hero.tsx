/**
 * @block hero
 * @root <section class="hero">
 * @repeatable hero__stat — 1 to N
 * @optional hero__badge
 * @cta per-item
 * @static-compatible yes
 */
import AnimateIn from "@/components/AnimateIn";
import { heroData } from "@/data/hero";
import { Icons } from "@/lib/icons";

export default function Hero() {
  const ArrowRight = Icons.ArrowRight;
  const ArrowUpRight = Icons.ArrowUpRight;

  return (
    <section className="hero" data-block="hero">
      <div className="hero__inner">
        <div className="hero__content">
          <AnimateIn delay={0} direction="up">
            <div className="hero__badge" data-field="badge">
              <span className="hero__badge-dot" />
              {heroData.badge}
            </div>
          </AnimateIn>

          <AnimateIn delay={0.1} direction="up">
            <h1 className="hero__title" data-field="title">
              {heroData.title.split("\n").map((line, i) => (
                <span key={i} className="hero__title-line">{line}<br /></span>
              ))}
            </h1>
          </AnimateIn>

          <AnimateIn delay={0.2} direction="up">
            <p className="hero__description" data-field="description">
              {heroData.description}
            </p>
          </AnimateIn>

          <AnimateIn delay={0.3} direction="up">
            <div className="hero__actions">
              <a
                href={heroData.primaryCta.url}
                className="hero__cta hero__cta--primary"
                data-field="label"
              >
                {heroData.primaryCta.label}
                <ArrowRight className="hero__cta-icon" />
              </a>
              <a
                href={heroData.secondaryCta.url}
                className="hero__cta hero__cta--secondary"
                data-field="label"
              >
                {heroData.secondaryCta.label}
                <ArrowUpRight className="hero__cta-icon" />
              </a>
            </div>
          </AnimateIn>
        </div>

        <AnimateIn delay={0.1} direction="fade" className="hero__visual">
          <img
            src={heroData.image.src}
            alt={heroData.image.alt}
            className="hero__img"
            data-field="src"
          />
          <div className="hero__stats-bar">
            {heroData.stats.map((stat, i) => (
              <div key={i} className="hero__stat" data-element="item">
                <div className="hero__stat-label" data-field="label">{stat.label}</div>
                <div className="hero__stat-value" data-field="value">{stat.value}</div>
                <div className="hero__stat-divider" aria-hidden="true" />
              </div>
            ))}
          </div>
        </AnimateIn>
      </div>
    </section>
  );
}
