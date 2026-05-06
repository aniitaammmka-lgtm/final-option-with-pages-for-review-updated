import Nav from "@/components/blocks/Nav";
import Footer from "@/components/blocks/Footer";
import AnimateIn from "@/components/AnimateIn";
import { leadershipTabs } from "@/data/leadership";

export default function LeadershipPage() {
  return (
    <div className="page" data-block="leadership-page">

      <Nav />

      <main data-block="lp-main">

        <section data-block="lp-hero" className="lp-hero">
          <div data-element="bg-grid" className="lp-hero__bg-grid" aria-hidden="true" />
          <div data-element="inner" className="lp-hero__inner">
            <AnimateIn delay={0} direction="up">
              <div data-element="eyebrow" className="lp-hero__eyebrow">Company / Leadership</div>
            </AnimateIn>
            <AnimateIn delay={0.08} direction="up">
              <h1 data-element="title" className="lp-hero__title">Leadership</h1>
            </AnimateIn>
            <AnimateIn delay={0.14} direction="up">
              <p data-element="sub" className="lp-hero__sub">
                The team driving Group 107 forward — founders, operators, and board members united by a shared vision of building world-class technology.
              </p>
            </AnimateIn>
          </div>
        </section>

        <section data-block="lp-body" className="lp-body">
          <div data-element="inner" className="lp-body__inner">

            <div data-element="tab-anchors" className="lp-tabs__anchors" aria-hidden="true">
              <span id="founders" className="lp-tabs__anchor-target" />
              <span id="management" className="lp-tabs__anchor-target" />
              <span id="directors" className="lp-tabs__anchor-target" />
            </div>

            <AnimateIn delay={0} direction="up">
              <nav data-element="tabs" className="lp-tabs__nav" aria-label="Leadership categories">
                {leadershipTabs.map((tab) => (
                  <a
                    key={tab.id}
                    href={`#${tab.id}`}
                    data-element="tab"
                    data-field={tab.id}
                    className={`lp-tabs__tab lp-tabs__tab--${tab.id}`}
                  >
                    {tab.label}
                  </a>
                ))}
              </nav>
            </AnimateIn>

            {leadershipTabs.map((tab) => (
              <div
                key={tab.id}
                data-element="panel"
                data-field={tab.id}
                className={`lp-tabs__panel lp-tabs__panel--${tab.id}`}
              >
                <div
                  data-element="members-grid"
                  data-field={`grid-${tab.id}`}
                  className={`lp-members__grid lp-members__grid--${tab.members.length > 2 ? "multi" : "pair"}`}
                >
                  {tab.members.map((member) => (
                    <AnimateIn key={member.name} delay={member.animDelay} direction="up">
                      <article
                        data-block="lp-card"
                        data-field={member.name}
                        className="lp-card"
                      >
                        <div data-element="photo-wrap" className="lp-card__photo-wrap">
                          <img
                            data-element="photo"
                            src={member.image.src}
                            alt={member.image.alt}
                            className="lp-card__photo"
                          />
                          <div data-element="overlay" className="lp-card__overlay" aria-hidden="true" />
                        </div>
                        <div data-element="info" className="lp-card__info">
                          <h2 data-element="name" className="lp-card__name">{member.name}</h2>
                          <p data-element="role" className="lp-card__role">{member.role}</p>
                          <p data-element="bio" className="lp-card__bio">{member.bio}</p>
                        </div>
                      </article>
                    </AnimateIn>
                  ))}
                </div>
              </div>
            ))}

          </div>
        </section>

      </main>

      <Footer />

    </div>
  );
}
