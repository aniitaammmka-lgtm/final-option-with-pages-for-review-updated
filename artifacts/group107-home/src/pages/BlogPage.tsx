import Nav from "@/components/blocks/Nav";
import Footer from "@/components/blocks/Footer";
import AnimateIn from "@/components/AnimateIn";
import { Icons } from "@/lib/icons";
import { blogHero, blogPosts, blogTags } from "@/data/blog";

const ArrowUpRight = Icons.ArrowUpRight;
const ArrowRight = Icons.ArrowRight;

function formatDate(iso: string) {
  const d = new Date(iso);
  return d.toLocaleDateString("en-GB", { day: "numeric", month: "short", year: "numeric" });
}

export default function BlogPage() {
  return (
    <div className="page" data-block="blog-page">
      <Nav />

      <main data-block="bl-main">

        {/* ── Hero ─────────────────────────────────── */}
        <section data-block="bl-hero" className="bl-hero">
          <div data-element="grid-overlay" className="bl-hero__grid" aria-hidden="true" />
          <div data-element="inner" className="bl-hero__inner">
            <AnimateIn delay={0} direction="up">
              <div data-element="eyebrow" className="bl-hero__eyebrow">{blogHero.eyebrow}</div>
            </AnimateIn>
            <AnimateIn delay={0.08} direction="up">
              <h1 data-element="title" className="bl-hero__title">{blogHero.title}</h1>
            </AnimateIn>
            <AnimateIn delay={0.14} direction="up">
              <p data-element="sub" className="bl-hero__sub">{blogHero.sub}</p>
            </AnimateIn>
          </div>
        </section>

        {/* ── Tag filter strip ─────────────────────── */}
        <div data-block="bl-filter" className="bl-filter">
          <div data-element="inner" className="bl-filter__inner">
            {blogTags.map((tag, i) => (
              <a
                key={tag}
                href={`#tag-${tag.toLowerCase()}`}
                data-element="tag"
                data-field={tag}
                className="bl-filter__tag"
                data-index={i}
              >
                {tag}
              </a>
            ))}
          </div>
        </div>

        {/* ── Featured post ────────────────────────── */}
        <section data-block="bl-featured" className="bl-featured">
          <div data-element="inner" className="bl-featured__inner">
            <AnimateIn delay={0} direction="up">
              <a
                href={blogPosts[0].link}
                target="_blank"
                rel="noopener noreferrer"
                data-block="bl-featured-card"
                className="bl-featured-card"
              >
                <div data-element="img-wrap" className="bl-featured-card__img-wrap">
                  <img
                    data-element="img"
                    src={blogPosts[0].image.src}
                    alt={blogPosts[0].image.alt}
                    className="bl-featured-card__img"
                  />
                </div>
                <div data-element="body" className="bl-featured-card__body">
                  <div data-element="meta" className="bl-featured-card__meta">
                    <span data-element="tag" className="bl-featured-card__tag">{blogPosts[0].tag}</span>
                    <span data-element="date" className="bl-featured-card__date">{formatDate(blogPosts[0].date)}</span>
                  </div>
                  <h2 data-element="title" className="bl-featured-card__title">{blogPosts[0].title}</h2>
                  <p data-element="excerpt" className="bl-featured-card__excerpt">{blogPosts[0].excerpt}</p>
                  <span data-element="cta" className="bl-featured-card__cta">
                    Read Article <ArrowUpRight className="bl-featured-card__cta-icon" />
                  </span>
                </div>
              </a>
            </AnimateIn>
          </div>
        </section>

        {/* ── Posts grid ───────────────────────────── */}
        <section data-block="bl-grid" className="bl-grid">
          <div data-element="inner" className="bl-grid__inner">
            <div data-element="posts" className="bl-grid__posts">
              {blogPosts.slice(1).map((post) => (
                <AnimateIn key={post.slug} delay={post.animDelay} direction="up">
                  <a
                    href={post.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    data-block="bl-card"
                    data-field={post.slug}
                    className="bl-card"
                  >
                    <div data-element="img-wrap" className="bl-card__img-wrap">
                      <img
                        data-element="img"
                        src={post.image.src}
                        alt={post.image.alt}
                        className="bl-card__img"
                      />
                    </div>
                    <div data-element="body" className="bl-card__body">
                      <div data-element="meta" className="bl-card__meta">
                        <span data-element="tag" className="bl-card__tag">{post.tag}</span>
                        <span data-element="date" className="bl-card__date">{formatDate(post.date)}</span>
                      </div>
                      <h3 data-element="title" className="bl-card__title">{post.title}</h3>
                      <p data-element="excerpt" className="bl-card__excerpt">{post.excerpt}</p>
                      <span data-element="cta" className="bl-card__cta">
                        Learn More <ArrowRight className="bl-card__cta-icon" />
                      </span>
                    </div>
                  </a>
                </AnimateIn>
              ))}
            </div>
          </div>
        </section>

        {/* ── CTA strip ────────────────────────────── */}
        <section data-block="bl-cta" className="bl-cta">
          <div data-element="inner" className="bl-cta__inner">
            <AnimateIn delay={0} direction="up">
              <div data-element="tag" className="bl-cta__tag">Stay in the loop</div>
              <h2 data-element="title" className="bl-cta__title">Read more on group107.com</h2>
              <p data-element="body" className="bl-cta__body">
                New articles published weekly covering software development, AI, offshore talent, and business strategy.
              </p>
              <a
                href="https://group107.com/category/blog/"
                target="_blank"
                rel="noopener noreferrer"
                data-element="btn"
                className="bl-cta__btn"
              >
                View All Articles <ArrowUpRight className="bl-cta__btn-icon" />
              </a>
            </AnimateIn>
          </div>
        </section>

      </main>

      <Footer />
    </div>
  );
}
