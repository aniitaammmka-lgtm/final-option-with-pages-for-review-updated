import { Link } from "wouter";
import Nav from "@/components/blocks/Nav";
import Footer from "@/components/blocks/Footer";
import AnimateIn from "@/components/AnimateIn";
import { Icons } from "@/lib/icons";

const ArrowRight = Icons.ArrowRight;
const ArrowUpRight = Icons.ArrowUpRight;

const floatIcons = ["Code2", "Cloud", "Wifi", "Server", "BrainCircuit", "Database", "Globe", "Shield"];

export default function NotFound() {
  return (
    <div className="page">
      <Nav />
      <main>
        <section className="nf-page" data-block="not-found">
          <div className="nf-page__grid" aria-hidden="true" />
          <div className="nf-page__noise" aria-hidden="true" />

          <div className="nf-page__floats" aria-hidden="true">
            {floatIcons.map((ic, i) => {
              const Icon = Icons[ic];
              return Icon ? (
                <div key={i} className={`nf-page__float nf-page__float--${i + 1}`} data-element="float">
                  <Icon strokeWidth={0.75} />
                </div>
              ) : null;
            })}
          </div>

          <div className="nf-page__inner" data-element="inner">
            <AnimateIn delay={0} direction="fade">
              <div className="nf-page__code" data-field="code" aria-hidden="true">404</div>
            </AnimateIn>

            <AnimateIn delay={0.1} direction="up">
              <div className="nf-page__signal" aria-hidden="true">
                <span className="nf-page__signal-dot nf-page__signal-dot--1" />
                <span className="nf-page__signal-dot nf-page__signal-dot--2" />
                <span className="nf-page__signal-dot nf-page__signal-dot--3" />
              </div>
            </AnimateIn>

            <AnimateIn delay={0.18} direction="up">
              <h1 className="nf-page__title" data-field="title">
                Looks Like This Page Went Remote
              </h1>
            </AnimateIn>

            <AnimateIn delay={0.26} direction="up">
              <p className="nf-page__sub" data-field="sub">
                The page you're looking for may have been moved, renamed, or is temporarily unavailable.
              </p>
            </AnimateIn>

            <AnimateIn delay={0.34} direction="up">
              <div className="nf-page__actions" data-element="actions">
                <Link href="/" className="nf-page__btn nf-page__btn--primary" data-field="btn-home">
                  Back Home {ArrowRight && <ArrowRight className="nf-page__btn-icon" />}
                </Link>
                <Link href="/contact-us" className="nf-page__btn nf-page__btn--secondary" data-field="btn-contact">
                  Contact Us {ArrowUpRight && <ArrowUpRight className="nf-page__btn-icon" />}
                </Link>
              </div>
            </AnimateIn>

            <AnimateIn delay={0.42} direction="up">
              <div className="nf-page__hint" data-field="hint">
                Or try navigating from the menu above
              </div>
            </AnimateIn>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
