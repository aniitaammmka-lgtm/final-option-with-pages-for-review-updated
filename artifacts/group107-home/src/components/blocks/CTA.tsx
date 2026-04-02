/**
 * @block cta-section
 * @root <section class="cta-section">
 * @optional none
 * @cta block
 * @static-compatible yes
 */
import AnimateIn from "@/components/AnimateIn";
import { ctaData } from "@/data/cta";
import { Icons } from "@/lib/icons";

export default function CTA() {
  const ArrowRight = Icons.ArrowRight;

  return (
    <section id="cta" className="cta-section" data-block="cta-section">
      <div className="cta-section__grain" aria-hidden="true" />
      <div className="cta-section__glow" aria-hidden="true" />
      <div className="cta-section__inner">
        <AnimateIn delay={0} direction="up">
          <div className="cta-section__label" data-field="label">{ctaData.label}</div>
        </AnimateIn>
        <AnimateIn delay={0.08} direction="up">
          <h2 className="cta-section__title" data-field="title">
            {ctaData.title.split("\n").map((line, i) => (
              <span key={i}>{line}<br /></span>
            ))}
          </h2>
        </AnimateIn>
        <AnimateIn delay={0.16} direction="up">
          <p className="cta-section__description" data-field="description">
            {ctaData.description}
          </p>
        </AnimateIn>
        <AnimateIn delay={0.24} direction="up">
          <a href={ctaData.cta.url} className="cta-section__cta" data-field="label">
            {ctaData.cta.label}
            <ArrowRight className="cta-section__cta-icon" />
          </a>
        </AnimateIn>
      </div>
    </section>
  );
}
