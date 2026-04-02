/**
 * @block insights
 * @root <section class="insights">
 * @repeatable insights__post — 1 to N
 * @optional insights__tabs
 * @cta block
 * @static-compatible yes
 */
import AnimateIn from "@/components/AnimateIn";
import { insightsData } from "@/data/insights";
import { Icons } from "@/lib/icons";

export default function Insights() {
  const ArrowRight = Icons.ArrowRight;

  return (
    <section id="resources" className="insights" data-block="insights">
      <div className="insights__inner">
        <div className="insights__header">
          <div>
            <AnimateIn delay={0} direction="up">
              <div className="insights__label" data-field="label">{insightsData.label}</div>
            </AnimateIn>
            <AnimateIn delay={0.08} direction="up">
              <h2 className="insights__title" data-field="title">
                {insightsData.title.split("\n").map((line, i) => (
                  <span key={i}>{line}<br /></span>
                ))}
              </h2>
            </AnimateIn>
          </div>
          <AnimateIn delay={0.1} direction="up">
            <a href={insightsData.blogCta.url} className="insights__blog-cta" data-field="label">
              {insightsData.blogCta.label} <ArrowRight className="insights__blog-cta-icon" />
            </a>
          </AnimateIn>
        </div>

        <AnimateIn delay={0.15} direction="up">
          <p className="insights__description" data-field="description">
            {insightsData.description}
          </p>
        </AnimateIn>

        <div className="insights__grid">
          {insightsData.posts.map((post, i) => (
            <AnimateIn key={i} delay={post.animDelay} direction="up">
              <div className="insights__post" data-element="item">
                <div className="insights__post-img-wrap">
                  <img
                    src={post.image.src}
                    alt={post.image.alt}
                    className="insights__post-img"
                    data-field="src"
                  />
                  <div className="insights__post-overlay" aria-hidden="true" />
                  <span className="insights__post-type" data-field="meta">{post.type}</span>
                </div>
                <div className="insights__post-body">
                  <div className="insights__post-date" data-field="value">{post.date}</div>
                  <h3 className="insights__post-title" data-field="title">{post.title}</h3>
                  <div className="insights__post-more" aria-hidden="true">
                    Read more <ArrowRight className="insights__post-more-icon" />
                  </div>
                </div>
              </div>
            </AnimateIn>
          ))}
        </div>

        <AnimateIn delay={0.3} direction="up">
          <div className="insights__tabs">
            {insightsData.tabs.map((tab, i) => {
              const Icon = Icons[tab.icon];
              return (
                <a key={i} href={tab.url} className="insights__tab" data-element="item">
                  {Icon && <Icon className="insights__tab-icon" strokeWidth={1.5} />}
                  <span data-field="label">{tab.label}</span>
                </a>
              );
            })}
          </div>
        </AnimateIn>
      </div>
    </section>
  );
}
