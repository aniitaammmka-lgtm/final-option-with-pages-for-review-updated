/**
 * @block footer
 * @root <footer class="footer">
 * @repeatable footer__col — 1 to N, footer__link — 1 to N
 * @optional none
 * @cta none
 * @static-compatible yes
 */
import { footerData } from "@/data/footer";
import logoSrc from "@assets/NEW_1774966879525.png";

export default function Footer() {
  return (
    <footer className="footer" data-block="footer">
      <div className="footer__inner">
        <div className="footer__brand">
          <div className="footer__brand-name">
            <img src={logoSrc} alt="Group 107" className="footer__logo" data-field="src" />
            <span className="footer__brand-label" data-field="label">{footerData.brand}</span>
          </div>
          <p className="footer__description" data-field="description">{footerData.description}</p>
          <div className="footer__social">
            {footerData.social.map((s, i) => (
              <a key={i} href={s.url} className="footer__social-link" data-element="item" data-field="label">
                {s.label}
              </a>
            ))}
          </div>
        </div>

        {footerData.columns.map((col, i) => (
          <div key={i} className="footer__col" data-element="item">
            <div className="footer__col-heading" data-field="label">{col.heading}</div>
            <ul className="footer__col-list">
              {col.links.map((link, j) => (
                <li key={j} className="footer__col-item" data-element="item">
                  <a href={link.url} className="footer__link" data-field="label">{link.label}</a>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>

      <div className="footer__bottom">
        <div className="footer__bottom-inner">
          <span className="footer__copyright" data-field="label">{footerData.copyright}</span>
        </div>
      </div>
    </footer>
  );
}
