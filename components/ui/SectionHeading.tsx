interface SectionHeadingProps {
  eyebrow: string;
  title: string;
  description: string;
  align?: "left" | "center";
  size?: "page" | "section";
  maxWidth?: "default" | "wide";
  tone?: "light" | "dark";
}

export function SectionHeading({
  eyebrow,
  title,
  description,
  align = "left",
  size = "section",
  maxWidth = "default",
  tone = "light",
}: SectionHeadingProps) {
  const wrapperClass =
    align === "center"
      ? "mx-auto text-center"
      : "text-left";
  const widthClass = maxWidth === "wide" ? "max-w-4xl" : "max-w-3xl";
  const titleClass = size === "page" ? "display-page" : "display-section";
  const eyebrowClass =
    tone === "dark" ? "text-on-dark-label" : "text-[var(--color-sage-deep)]";
  const headingClass = tone === "dark" ? "text-on-dark" : "text-on-light";
  const bodyClass =
    tone === "dark" ? "text-on-dark-muted" : "text-on-light-muted";

  return (
    <div className={`${wrapperClass} ${widthClass}`}>
      <p className={`eyebrow ${eyebrowClass}`}>{eyebrow}</p>
      <h2 className={`display-title balanced-text mt-3 font-semibold ${headingClass} ${titleClass}`}>
        {title}
      </h2>
      <p className={`body-copy-lg mt-5 ${bodyClass}`}>
        {description}
      </p>
    </div>
  );
}
