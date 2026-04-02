/**
 * @block talents
 * @root <section class="talents">
 * @repeatable talents__step — 1 to N
 * @optional none
 * @cta block
 * @static-compatible yes
 */
import AnimateIn from "@/components/AnimateIn";
import { talentsData } from "@/data/talents";
import { Icons } from "@/lib/icons";

export default function Talents() {
  const ArrowRight = Icons.ArrowRight;

  return (
    <section id="talents" className="talents" data-block="talents">
      <div className="talents__grain" aria-hidden="true" />
      <div className="talents__pattern" aria-hidden="true" />
      <div className="talents__inner">
        <AnimateIn delay={0} direction="up">
          <div className="talents__label" data-field="label">{talentsData.label}</div>
        </AnimateIn>
        <AnimateIn delay={0.08} direction="up">
          <h2 className="talents__title" data-field="title">{talentsData.title}</h2>
        </AnimateIn>
        <AnimateIn delay={0.16} direction="up">
          <p className="talents__description" data-field="description">{talentsData.description}</p>
        </AnimateIn>

        <div className="talents__steps">
          {talentsData.steps.map((step, i) => (
            <AnimateIn key={i} delay={step.animDelay} direction="up">
              <div className="talents__step" data-element="item">
                <span className="talents__step-num" data-field="num">{step.num}</span>
                <h3 className="talents__step-title" data-field="title">{step.title}</h3>
                <p className="talents__step-desc" data-field="description">{step.description}</p>
              </div>
            </AnimateIn>
          ))}
        </div>

        <AnimateIn delay={0.6} direction="up">
          <div className="talents__footer">
            <a href={talentsData.cta.url} className="talents__cta" data-field="label">
              {talentsData.cta.label}
              <ArrowRight className="talents__cta-icon" />
            </a>
            <div className="talents__trust">
              {talentsData.trustItems.map((item, i) => (
                <span key={i} className="talents__trust-item" data-element="item" data-field="label">
                  {item}
                  <span className="talents__trust-sep" aria-hidden="true">•</span>
                </span>
              ))}
            </div>
          </div>
        </AnimateIn>
      </div>
    </section>
  );
}
