/**
 * @block mega-menu
 * @root <div class="mega-menu">
 * @repeatable mega-menu__panel — 1 to N
 * @optional mega-menu__links (sub-links panel)
 * @cta block
 * @static-compatible no
 */
import { useState } from "react";
import type { NavItem } from "@/data/nav";
import { Icons } from "@/lib/icons";

interface MegaMenuProps {
  item: NavItem;
  onClose: () => void;
}

export default function MegaMenu({ item }: MegaMenuProps) {
  const [activePanel, setActivePanel] = useState<number | null>(null);
  const current = activePanel !== null ? item.panels[activePanel] : null;
  const ChevronDown = Icons.ChevronDown;
  const ArrowRight = Icons.ArrowRight;

  return (
    <div className="mega-menu" data-block="mega-menu">
      <div className="mega-menu__inner">
        <div className="mega-menu__categories">
          {item.panels.map((panel, pi) => (
            <button
              key={pi}
              className="mega-menu__panel"
              data-element="item"
              data-active={activePanel === pi ? "true" : "false"}
              onMouseEnter={() => setActivePanel(pi)}
            >
              <span data-field="label">{panel.heading}</span>
              <ChevronDown className="mega-menu__chevron" />
            </button>
          ))}
        </div>

        <div className="mega-menu__links">
          <div
            className="mega-menu__links-inner"
            data-visible={current ? "true" : "false"}
          >
            <div className="mega-menu__links-heading" data-field="label">
              {current ? current.heading : ""}
            </div>
            <div className="mega-menu__links-list">
              {(current ? current.links : []).map((link, li) => (
                <a
                  key={li}
                  href="#"
                  className="mega-menu__link"
                  data-element="item"
                  data-field="label"
                >
                  <span className="mega-menu__link-dash" />
                  {link}
                </a>
              ))}
            </div>
            <p
              className="mega-menu__empty"
              data-visible={current && current.links.length === 0 ? "true" : "false"}
            >
              Coming soon
            </p>
          </div>
          <div
            className="mega-menu__placeholder"
            data-visible={current ? "false" : "true"}
          >
            Hover a category →
          </div>
        </div>

        <div className="mega-menu__preview">
          <div className="mega-menu__preview-img-wrap">
            <img
              src={item.image.src}
              alt={item.image.alt}
              className="mega-menu__preview-img"
              data-field="src"
            />
            <div className="mega-menu__preview-overlay" />
            <div className="mega-menu__preview-label" data-field="imageLabel">
              {item.imageLabel}
            </div>
          </div>
          <a
            href={item.imageCta.url}
            className="mega-menu__preview-cta"
            data-field="label"
          >
            {item.imageCta.label}
            <ArrowRight className="mega-menu__preview-cta-icon" />
          </a>
        </div>
      </div>
    </div>
  );
}
