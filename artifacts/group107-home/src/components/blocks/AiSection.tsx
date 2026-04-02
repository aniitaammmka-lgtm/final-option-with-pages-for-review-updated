/**
 * @block ai
 * @root <section class="ai">
 * @repeatable ai__feature — 1 to N
 * @optional ai__stat
 * @cta none
 * @static-compatible yes
 */
import AnimateIn from "@/components/AnimateIn";
import { aiData } from "@/data/ai";
import { Icons } from "@/lib/icons";

export default function AiSection() {
  const StatIcon = Icons[aiData.stat.icon];

  return (
    <section id="ai" className="ai" data-block="ai">
      <div className="ai__pattern" aria-hidden="true" />
      <div className="ai__inner">
        <div className="ai__left">
          <AnimateIn delay={0} direction="left">
            <div className="ai__label" data-field="label">{aiData.label}</div>
          </AnimateIn>
          <AnimateIn delay={0.08} direction="left">
            <h2 className="ai__title" data-field="title">{aiData.title}</h2>
          </AnimateIn>
          <AnimateIn delay={0.16} direction="left">
            <p className="ai__description" data-field="description">{aiData.description}</p>
          </AnimateIn>

          <div className="ai__features">
            {aiData.features.map((feature, i) => (
              <AnimateIn key={i} delay={feature.animDelay + 0.24} direction="left">
                <div className="ai__feature" data-element="item">
                  <span className="ai__feature-num" aria-hidden="true">0{i + 1}</span>
                  <div className="ai__feature-body">
                    <div className="ai__feature-label" data-field="label">{feature.label}</div>
                    <div className="ai__feature-desc" data-field="description">{feature.description}</div>
                  </div>
                </div>
              </AnimateIn>
            ))}
          </div>
        </div>

        <AnimateIn delay={0.2} direction="right" className="ai__right">
          <div className="ai__img-wrap">
            <img
              src={aiData.image.src}
              alt={aiData.image.alt}
              className="ai__img"
              data-field="src"
            />
            <div className="ai__img-overlay" aria-hidden="true" />
            <div className="ai__stat" data-element="item">
              <div className="ai__stat-header">
                {StatIcon && <StatIcon className="ai__stat-icon" />}
                <span className="ai__stat-meta" data-field="meta">{aiData.stat.meta}</span>
              </div>
              <div className="ai__stat-value" data-field="value">
                +{aiData.stat.value}{aiData.stat.suffix}{" "}
                <span className="ai__stat-suffix">avg. throughput</span>
              </div>
            </div>
          </div>
        </AnimateIn>
      </div>
    </section>
  );
}
