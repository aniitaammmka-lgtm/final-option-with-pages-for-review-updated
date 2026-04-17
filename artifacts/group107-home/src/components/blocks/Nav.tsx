/**
 * @block nav
 * @root <nav class="nav">
 * @repeatable nav__menu-item — 1 to N
 * @optional nav__mega (mega menu dropdown)
 * @cta block
 * @static-compatible no
 */
import { useState, useEffect } from "react";
import { navItems, navCta } from "@/data/nav";
import { Icons } from "@/lib/icons";
import logoSrc from "@assets/NEW_1774966879525.png";
import MegaMenu from "./MegaMenu";

export default function Nav() {
  const [openMenu, setOpenMenu] = useState<string | null>(null);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handler = () => setScrolled(window.scrollY > 80);
    window.addEventListener("scroll", handler, { passive: true });
    return () => window.removeEventListener("scroll", handler);
  }, []);

  const ChevronDown = Icons.ChevronDown;
  const Menu = Icons.Menu;
  const X = Icons.X;

  return (
    <nav
      className="nav"
      data-block="nav"
      data-scrolled={scrolled ? "true" : "false"}
      onMouseLeave={() => setOpenMenu(null)}
    >
      <div className="nav__inner">
        <a href="/" className="nav__logo" data-field="brand">
          <img src={logoSrc} alt="Group 107 logo" className="nav__logo-img" />
        </a>

        <div className="nav__links" aria-label="Main navigation">
          {navItems.map((item) => (
            <button
              key={item.id}
              className="nav__menu-item"
              data-element="item"
              data-active={openMenu === item.id ? "true" : "false"}
              onMouseEnter={() => setOpenMenu(item.id)}
              onClick={() => { window.location.href = item.url; }}
            >
              <span data-field="label">{item.label}</span>
              <ChevronDown
                className="nav__chevron"
                data-open={openMenu === item.id ? "true" : "false"}
              />
            </button>
          ))}
        </div>

        <a
          href={navCta.url}
          className="nav__cta"
          data-field="label"
        >
          {navCta.label}
        </a>

        <button
          className="nav__mobile-toggle"
          aria-label="Toggle menu"
          data-open={mobileOpen ? "true" : "false"}
          onClick={() => setMobileOpen((v) => !v)}
        >
          <span data-open={mobileOpen ? "true" : "false"} className="nav__mobile-icon nav__mobile-icon--menu">
            <Menu className="nav__icon" />
          </span>
          <span data-open={mobileOpen ? "true" : "false"} className="nav__mobile-icon nav__mobile-icon--close">
            <X className="nav__icon" />
          </span>
        </button>
      </div>

      {openMenu && (
        <MegaMenu
          item={navItems.find((m) => m.id === openMenu)!}
          onClose={() => setOpenMenu(null)}
        />
      )}

      <div
        className="nav__mobile-menu"
        data-open={mobileOpen ? "true" : "false"}
        aria-hidden={!mobileOpen}
      >
        <div className="nav__mobile-inner">
          {navItems.map((item) => (
            <a
              key={item.id}
              href={item.url}
              className="nav__mobile-link"
              data-element="item"
              data-field="label"
              onClick={() => setMobileOpen(false)}
            >
              {item.label}
            </a>
          ))}
          <a
            href={navCta.url}
            className="nav__mobile-cta"
            data-field="label"
            onClick={() => setMobileOpen(false)}
          >
            {navCta.label}
          </a>
        </div>
      </div>
    </nav>
  );
}
