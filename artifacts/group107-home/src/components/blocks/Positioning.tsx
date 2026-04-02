/**
 * @block positioning
 * @root <section class="positioning">
 * @repeatable positioning__col — 1 to N
 * @optional none
 * @cta none
 * @static-compatible yes
 */
import AnimateIn from "@/components/AnimateIn";
import SectionHeader from "@/components/SectionHeader";
import { positioningData } from "@/data/positioning";
import { Icons } from "@/lib/icons";

export default function Positioning() {
  const ArrowUpRight = Icons.ArrowUpRight;

  return (
    <section id="about" className="positioning" data-block="positioning">
      <SectionHeader
        label={positioningData.label}
        title={positioningData.title}
        className="positioning__header"
      />

      <div className="positioning__grid">
        {positioningData.cols.map((col, i) => (
          <AnimateIn key={i} delay={col.animDelay} direction="up">
            <div className="positioning__col" data-element="item">
              <span className="positioning__col-tag" data-field="tag">{col.tag}</span>
              <h3 className="positioning__col-title" data-field="title">{col.title}</h3>
              <p className="positioning__col-desc" data-field="description">{col.description}</p>
              <ArrowUpRight className="positioning__col-arrow" aria-hidden="true" />
            </div>
          </AnimateIn>
        ))}
      </div>
    </section>
  );
}
