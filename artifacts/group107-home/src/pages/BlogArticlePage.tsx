import Nav from "@/components/blocks/Nav";
import Footer from "@/components/blocks/Footer";
import Breadcrumbs from "@/components/Breadcrumbs";
import AnimateIn from "@/components/AnimateIn";
import { Icons } from "@/lib/icons";
import { blogPosts } from "@/data/blog";
import { Link, useParams } from "wouter";

const ArrowLeft = Icons.ArrowLeft;
const ArrowUpRight = Icons.ArrowUpRight;
const Calendar = Icons.Calendar;
const Tag = Icons.Tag;

function formatDate(iso: string) {
  const d = new Date(iso);
  return d.toLocaleDateString("en-GB", { day: "numeric", month: "long", year: "numeric" });
}

export default function BlogArticlePage() {
  const params = useParams<{ slug: string }>();
  const post = blogPosts.find((p) => p.slug === params.slug);

  return (
    <div className="page" data-block="blog-article-page">
      <Nav />
      <Breadcrumbs
        items={[
          { label: "Home", url: "/" },
          { label: "Blog", url: "/blog" },
          { label: post ? post.title : "Article" },
        ]}
      />

      <main data-element="main">

        <div className="ba-article" data-block="ba-article" data-found={post ? "true" : "false"}>

          {/* ── Found state ─────────────────── */}
          <div className="ba-article__found" data-element="found">

            <div className="ba-article__hero" data-element="hero">
              <div className="ba-article__hero-inner" data-element="hero-inner">
                <AnimateIn delay={0} direction="up">
                  <div className="ba-article__meta" data-element="meta">
                    <span className="ba-article__tag" data-field="tag">
                      {Tag && <Tag className="ba-article__tag-icon" />}
                      <span data-field="tag-label">{post?.tag ?? "Article"}</span>
                    </span>
                    <span className="ba-article__date" data-field="date">
                      {Calendar && <Calendar className="ba-article__date-icon" />}
                      <span data-field="date-label">{post ? formatDate(post.date) : ""}</span>
                    </span>
                  </div>
                </AnimateIn>
                <AnimateIn delay={0.08} direction="up">
                  <h1 className="ba-article__title" data-field="title">{post?.title ?? "Article Not Found"}</h1>
                </AnimateIn>
              </div>
            </div>

            <div className="ba-article__body-wrap" data-element="body-wrap">
              <div className="ba-article__body-inner" data-element="body-inner">

                <AnimateIn delay={0} direction="up" className="ba-article__img-wrap" data-element="img-wrap">
                  <img
                    src={post?.image.src ?? ""}
                    alt={post?.image.alt ?? ""}
                    className="ba-article__img"
                    data-field="img"
                  />
                </AnimateIn>

                <AnimateIn delay={0.06} direction="up">
                  <div className="ba-article__content" data-element="content">
                    <p className="ba-article__excerpt" data-field="excerpt">{post?.excerpt ?? ""}</p>
                    <div className="ba-article__divider" aria-hidden="true" />
                    <p className="ba-article__body-text" data-field="body">
                      This article explores key insights and strategic thinking around{" "}
                      {post?.tag?.toLowerCase() ?? "technology"} that impact businesses in 2026.
                      Group 107's team of experts shares practical guidance drawn from real-world
                      engagements across global markets. Our research is grounded in the challenges
                      that our 700+ clients face every day — from scaling engineering teams to
                      adopting AI responsibly. This piece is part of our ongoing commitment to
                      sharing knowledge that helps technology leaders make better decisions.
                    </p>
                    <p className="ba-article__body-text" data-field="body-2">
                      Group 107 is a publicly listed company operating at the intersection of
                      technology talent, software development, and digital transformation. With
                      hubs in Tel Aviv, Lviv, Kraków, and Buenos Aires, we serve clients across
                      Europe, the Americas, and the APAC region.
                    </p>
                  </div>
                </AnimateIn>

                <AnimateIn delay={0.1} direction="up">
                  <div className="ba-article__cta-bar" data-element="cta-bar">
                    <Link href="/blog" className="ba-article__back" data-element="back">
                      {ArrowLeft && <ArrowLeft className="ba-article__back-icon" />}
                      Back to Blog
                    </Link>
                    <a
                      href={post?.link ?? "#"}
                      className="ba-article__external"
                      data-element="external"
                    >
                      Read on Group107.com
                      {ArrowUpRight && <ArrowUpRight className="ba-article__external-icon" />}
                    </a>
                  </div>
                </AnimateIn>

              </div>
            </div>

          </div>

          {/* ── Not-found state ──────────────── */}
          <div className="ba-article__notfound" data-element="notfound">
            <div className="ba-article__nf-inner" data-element="nf-inner">
              <p className="ba-article__nf-text" data-field="text">Article not found.</p>
              <Link href="/blog" className="ba-article__nf-link" data-field="link">
                Back to Blog
              </Link>
            </div>
          </div>

        </div>

      </main>
      <Footer />
    </div>
  );
}
