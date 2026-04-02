/**
 * @block advantages
 * @root <section class="advantages">
 * @repeatable advantages__item — 1 to N
 * @optional none
 * @cta none
 * @static-compatible yes
 */
import AnimateIn from "@/components/AnimateIn";
import { advantagesData } from "@/data/advantages";
import { Icons } from "@/lib/icons";

export default function Advantages() {
  return (
    <section className="advantages" data-block="advantages">
      <div className="advantages__pattern" aria-hidden="true" />
      <div className="advantages__inner">
        <AnimateIn delay={0} direction="up">
          <div className="advantages__label" data-field="label">{advantagesData.label}</div>
        </AnimateIn>
        <AnimateIn delay={0.08} direction="up">
          <h2 className="advantages__title" data-field="title">
            {advantagesData.title.split("\n").map((line, i) => (
              <span key={i}>{line}<br /></span>
            ))}
          </h2>
        </AnimateIn>

        <div className="advantages__grid">
          {advantagesData.items.map((adv, i) => {
            const Icon = Icons[adv.icon];
            return (
              <AnimateIn key={i} delay={adv.animDelay} direction="up">
                <div className="advantages__item" data-element="item">
                  <div className="advantages__item-icon" aria-hidden="true">
                    {Icon && <Icon className="advantages__icon" strokeWidth={1.5} />}
                  </div>
                  <h3 className="advantages__item-title" data-field="title">{adv.title}</h3>
                  <p className="advantages__item-desc" data-field="description">{adv.description}</p>
                </div>
              </AnimateIn>
            );
          })}
        </div>
      </div>
    </section>
  );
}
