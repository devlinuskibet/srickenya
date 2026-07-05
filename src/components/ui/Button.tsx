import React from "react";

type ButtonVariant = "primary" | "navy" | "outline";

type ButtonProps = React.ButtonHTMLAttributes<HTMLButtonElement> & {
  variant?: ButtonVariant;
  fullWidth?: boolean;
};

export default function Button({
  variant = "primary",
  fullWidth = false,
  className = "",
  style,
  children,
  ...props
}: ButtonProps) {
  const variantClass = `btn-${variant}`;
  const widthStyle = fullWidth ? { width: "100%", textAlign: "center" as const } : {};

  return (
    <button className={`${variantClass} ${className}`.trim()} style={{ ...widthStyle, ...style }} {...props}>
      {children}
    </button>
  );
}
