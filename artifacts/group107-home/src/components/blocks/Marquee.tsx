/**
 * @block marquee
 * @root <div class="marquee">
 * @repeatable marquee__item — 1 to N
 * @optional none
 * @cta none
 * @static-compatible yes
 */
import { marqueeItems } from "@/data/marquee";

const repeated = [...marqueeItems, ...marqueeItems, ...marqueeItems];

export default function Marquee() {
  return (
    <div className="marquee" data-block="marquee">
      <div className="marquee__grain" aria-hidden="true" />
      <div className="marquee__track" aria-label="Services ticker">
        {repeated.map((item, i) => (
          <span key={i} className="marquee__item" data-element="item">
            <span className="marquee__item-text" data-field="label">{item}</span>
            <span className="marquee__sep" aria-hidden="true">—</span>
          </span>
        ))}
      </div>
    </div>
  );
}
