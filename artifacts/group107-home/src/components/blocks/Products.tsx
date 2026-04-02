/**
 * @block products
 * @root <section class="products">
 * @repeatable products__item — 1 to N
 * @optional none
 * @cta block
 * @static-compatible yes
 */
import AnimateIn from "@/components/AnimateIn";
import { productsData } from "@/data/products";
import { Icons } from "@/lib/icons";

export default function Products() {
  const ArrowRight = Icons.ArrowRight;

  return (
    <section id="products" className="products" data-block="products">
      <div className="products__inner">
        <div className="products__header">
          <div>
            <AnimateIn delay={0} direction="up">
              <div className="products__label" data-field="label">{productsData.label}</div>
            </AnimateIn>
            <AnimateIn delay={0.08} direction="up">
              <h2 className="products__title" data-field="title">{productsData.title}</h2>
            </AnimateIn>
          </div>
          <AnimateIn delay={0.1} direction="up">
            <a href={productsData.cta.url} className="products__cta" data-field="label">
              {productsData.cta.label} <ArrowRight className="products__cta-icon" />
            </a>
          </AnimateIn>
        </div>

        <AnimateIn delay={0.15} direction="up">
          <p className="products__description" data-field="description">
            {productsData.description}
          </p>
        </AnimateIn>

        <div className="products__grid">
          {productsData.products.map((product, i) => (
            <AnimateIn key={i} delay={product.animDelay} direction="up">
              <div className="products__item" data-element="item">
                <div className="products__item-img-wrap">
                  <img
                    src={product.image.src}
                    alt={product.image.alt}
                    className="products__item-img"
                    data-field="src"
                  />
                  <div className="products__item-overlay" aria-hidden="true" />
                  <span className="products__item-tag" data-field="tag">{product.tag}</span>
                </div>
                <div className="products__item-body">
                  <h3 className="products__item-title" data-field="title">{product.title}</h3>
                  <p className="products__item-desc" data-field="description">{product.description}</p>
                  <div className="products__item-more" aria-hidden="true">
                    Learn more <ArrowRight className="products__item-more-icon" />
                  </div>
                </div>
              </div>
            </AnimateIn>
          ))}
        </div>
      </div>
    </section>
  );
}
