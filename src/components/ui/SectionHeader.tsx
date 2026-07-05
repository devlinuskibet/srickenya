type SectionHeaderProps = {
  label: string;
  title: string;
  align?: "left" | "center";
  theme?: "dark" | "light";
  labelColor?: string;
};

export default function SectionHeader({
  label,
  title,
  align = "left",
  theme = "dark",
  labelColor,
}: SectionHeaderProps) {
  const isCenter = align === "center";
  const isLight = theme === "light";

  const headingClass = isLight ? "section-heading-white" : "section-heading";

  let dividerClass = "divider-gold";
  if (isCenter) dividerClass = "divider-gold-center";
  if (isLight && isCenter) dividerClass = "divider-light-center";

  return (
    <div style={{ textAlign: isCenter ? "center" : "left", marginBottom: 48 }}>
      <div className="section-label" style={labelColor ? { color: labelColor } : undefined}>
        {label}
      </div>
      <h2 className={headingClass}>{title}</h2>
      <div className={dividerClass} />
    </div>
  );
}
