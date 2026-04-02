/**
 * @block social-proof
 * @root <section class="social-proof">
 * @repeatable social-proof__client — 1 to N, social-proof__stat — 1 to N
 * @optional social-proof__testimonial
 * @cta none
 * @static-compatible yes
 */
import { useRef, useState, useEffect } from "react";
import AnimateIn from "@/components/AnimateIn";
import { socialData } from "@/data/social";

function AnimatedNumber({ value, suffix = "" }: { value: number; suffix?: string }) {
  const ref = useRef<HTMLSpanElement>(null);
  const [display, setDisplay] = useState(0);
  const [started, setStarted] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !started) setStarted(true);
      },
      { threshold: 0.1, rootMargin: "-80px" }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, [started]);

  useEffect(() => {
    if (!started) return;
    let startTime = 0;
    const step = (timestamp: number) => {
      if (!startTime) startTime = timestamp;
      const progress = Math.min((timestamp - startTime) / 2000, 1);
      const eased = 1 - Math.pow(1 - progress, 3);
      setDisplay(Math.floor(eased * value));
      if (progress < 1) requestAnimationFrame(step);
    };
    requestAnimationFrame(step);
  }, [started, value]);

  return <span ref={ref}>{display.toLocaleString()}{suffix}</span>;
}

export default function SocialProof() {
  return (
    <section className="social-proof" data-block="social-proof">
      <div className="social-proof__inner">
        <AnimateIn delay={0} direction="up">
          <div className="social-proof__label" data-field="label">{socialData.label}</div>
        </AnimateIn>
        <AnimateIn delay={0.08} direction="up">
          <h2 className="social-proof__title" data-field="title">{socialData.title}</h2>
        </AnimateIn>

        <div className="social-proof__clients">
          {socialData.clients.map((name, i) => (
            <AnimateIn key={i} delay={i * 0.05} direction="up">
              <div className="social-proof__client" data-element="item" data-field="label">
                {name}
              </div>
            </AnimateIn>
          ))}
        </div>

        <div className="social-proof__stats">
          {socialData.stats.map((stat, i) => (
            <AnimateIn key={i} delay={stat.animDelay} direction="up">
              <div className="social-proof__stat" data-element="item">
                <span className="social-proof__stat-value" data-field="value">
                  <AnimatedNumber value={stat.raw} suffix={stat.suffix} />
                </span>
                <span className="social-proof__stat-label" data-field="label">{stat.label}</span>
              </div>
            </AnimateIn>
          ))}
        </div>

        <AnimateIn delay={0.4} direction="left">
          <blockquote className="social-proof__testimonial" data-element="item">
            <p className="social-proof__testimonial-text" data-field="description">
              {socialData.testimonial}
            </p>
            <footer className="social-proof__testimonial-author" data-field="meta">
              {socialData.testimonialAuthor}
            </footer>
          </blockquote>
        </AnimateIn>
      </div>
    </section>
  );
}
