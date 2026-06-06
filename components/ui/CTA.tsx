import Link from "next/link";
import type { ComponentPropsWithoutRef } from "react";

type CTAVariant = "primary" | "secondary" | "ghost";

const variants: Record<CTAVariant, string> = {
  primary:
    "bg-accent text-white hover:bg-accent-hover border-transparent shadow-sm",
  secondary:
    "bg-primary text-white hover:bg-primary-dark border-transparent shadow-sm",
  ghost:
    "bg-transparent text-primary hover:bg-primary-light border-border hover:border-primary/30",
};

type CTAProps = ComponentPropsWithoutRef<"a"> & {
  href: string;
  variant?: CTAVariant;
  external?: boolean;
};

export function CTA({
  href,
  variant = "primary",
  external,
  className = "",
  children,
  ...props
}: CTAProps) {
  const classes = [
    "inline-flex items-center justify-center gap-2 rounded-lg border px-5 py-2.5 text-sm font-semibold transition-colors",
    variants[variant],
    className,
  ]
    .filter(Boolean)
    .join(" ");

  if (external) {
    return (
      <a href={href} className={classes} target="_blank" rel="noopener noreferrer" {...props}>
        {children}
      </a>
    );
  }

  return (
    <Link href={href} className={classes} {...props}>
      {children}
    </Link>
  );
}
