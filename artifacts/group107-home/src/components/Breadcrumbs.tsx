/**
 * @block breadcrumbs
 * @root <nav class="breadcrumbs">
 * @repeatable breadcrumbs__item — 1 to N
 * @static-compatible yes
 */

interface BreadcrumbItem {
  label: string;
  url?: string;
}

export default function Breadcrumbs({ items }: { items: BreadcrumbItem[] }) {
  return (
    <nav className="breadcrumbs" aria-label="Breadcrumb" data-block="breadcrumbs">
      <div className="breadcrumbs__inner" data-element="inner">
        {items.map((item, i) => (
          <div key={i} className="breadcrumbs__item" data-element="item">
            <a
              href={item.url ?? "#"}
              className="breadcrumbs__crumb"
              data-element="crumb"
              data-current={item.url ? "false" : "true"}
              aria-current={item.url ? undefined : "page"}
            >
              {item.label}
            </a>
            <span className="breadcrumbs__sep" aria-hidden="true">/</span>
          </div>
        ))}
      </div>
    </nav>
  );
}
