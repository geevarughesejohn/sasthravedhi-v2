import Link from "next/link";
import type { ReactNode } from "react";

type CardProps = {
  title: string;
  description?: string;
  href?: string;
  meta?: string;
  children?: ReactNode;
  className?: string;
};

export function Card({
  title,
  description,
  href,
  meta,
  children,
  className = "",
}: CardProps) {
  const content = (
    <>
      {meta && (
        <p className="mb-2 text-xs font-semibold uppercase tracking-wider text-primary">
          {meta}
        </p>
      )}
      <h3 className="font-display text-xl font-semibold text-foreground">
        {title}
      </h3>
      {description && (
        <p className="mt-2 text-sm leading-relaxed text-text-muted">
          {description}
        </p>
      )}
      {children}
    </>
  );

  const classes = [
    "block rounded-xl border border-border bg-surface p-6 shadow-sm transition-shadow hover:shadow-md",
    href ? "hover:border-primary/30" : "",
    className,
  ]
    .filter(Boolean)
    .join(" ");

  if (href) {
    if (href.startsWith("http")) {
      return (
        <a
          href={href}
          target="_blank"
          rel="noopener noreferrer"
          className={classes}
        >
          {content}
        </a>
      );
    }

    return (
      <Link href={href} className={classes}>
        {content}
      </Link>
    );
  }

  return <article className={classes}>{content}</article>;
}
