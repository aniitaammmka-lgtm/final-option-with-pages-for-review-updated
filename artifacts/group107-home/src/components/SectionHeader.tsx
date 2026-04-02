import AnimateIn from "./AnimateIn";

interface SectionHeaderProps {
  label: string;
  title: string;
  light?: boolean;
  className?: string;
}

export default function SectionHeader({ label, title, light = false, className }: SectionHeaderProps) {
  return (
    <div className={className}>
      <AnimateIn delay={0} direction="up">
        <div
          className={`section-header__label${light ? " section-header__label--light" : ""}`}
          data-field="label"
        >
          {label}
        </div>
      </AnimateIn>
      <AnimateIn delay={0.08} direction="up">
        <h2
          className={`section-header__title${light ? " section-header__title--light" : ""}`}
          data-field="title"
        >
          {title}
        </h2>
      </AnimateIn>
    </div>
  );
}
