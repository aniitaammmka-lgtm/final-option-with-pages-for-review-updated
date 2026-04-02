/**
 * @block services
 * @root <section class="services">
 * @repeatable services__item — 1 to N
 * @optional services__item--popular
 * @cta block
 * @static-compatible yes
 */
import AnimateIn from "@/components/AnimateIn";
import { servicesData } from "@/data/services";
import { Icons } from "@/lib/icons";

export default function Services() {
  const ArrowRight = Icons.ArrowRight;

  return (
    <section id="services" className="services" data-block="services">
      <div className="services__pattern" aria-hidden="true" />
      <div className="services__inner">
        <div className="services__header">
          <div>
            <AnimateIn delay={0} direction="up">
              <div className="services__label" data-field="label">{servicesData.label}</div>
            </AnimateIn>
            <AnimateIn delay={0.08} direction="up">
              <h2 className="services__title" data-field="title">{servicesData.title}</h2>
            </AnimateIn>
          </div>
          <AnimateIn delay={0.1} direction="up">
            <a href={servicesData.cta.url} className="services__cta" data-field="label">
              {servicesData.cta.label} <ArrowRight className="services__cta-icon" />
            </a>
          </AnimateIn>
        </div>

        <div className="services__grid">
          {servicesData.categories.map((svc, i) => {
            const Icon = Icons[svc.icon];
            return (
              <AnimateIn key={i} delay={svc.animDelay} direction="up">
                <div
                  className="services__item"
                  data-element="item"
                  data-popular={svc.popular ? "true" : "false"}
                >
                  <span className="services__item-popular-badge" data-field="meta">Popular</span>
                  <div className="services__item-icon" aria-hidden="true">
                    {Icon && <Icon className="services__icon" strokeWidth={1.5} />}
                  </div>
                  <h3 className="services__item-title" data-field="title">{svc.title}</h3>
                  <ul className="services__item-list">
                    {svc.items.map((item, j) => (
                      <li key={j} className="services__item-li" data-element="item">
                        <span className="services__item-dot" aria-hidden="true" />
                        <span data-field="label">{item}</span>
                      </li>
                    ))}
                  </ul>
                  <div className="services__item-more" aria-hidden="true">
                    Learn more <ArrowRight className="services__item-more-icon" />
                  </div>
                </div>
              </AnimateIn>
            );
          })}
        </div>
      </div>
    </section>
  );
}
