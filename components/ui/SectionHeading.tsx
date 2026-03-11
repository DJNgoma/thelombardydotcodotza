interface SectionHeadingProps {
  eyebrow: string;
  title: string;
  description: string;
  align?: "left" | "center";
  size?: "page" | "section";
  maxWidth?: "default" | "wide";
}

export function SectionHeading({
  eyebrow,
  title,
  description,
  align = "left",
  size = "section",
  maxWidth = "default",
}: SectionHeadingProps) {
  const wrapperClass =
    align === "center"
      ? "mx-auto text-center"
      : "text-left";
  const widthClass = maxWidth === "wide" ? "max-w-4xl" : "max-w-3xl";
  const titleClass = size === "page" ? "display-page" : "display-section";

  return (
    <div className={`${wrapperClass} ${widthClass}`}>
      <p className="eyebrow">{eyebrow}</p>
      <h2 className={`display-title balanced-text mt-3 font-semibold text-on-light ${titleClass}`}>
        {title}
      </h2>
      <p className="body-copy-lg text-on-light-muted mt-5">
        {description}
      </p>
    </div>
  );
}
