import type { ReactNode } from "react";
import { Breadcrumb, type BreadcrumbItem } from "./Breadcrumb";

type PageHeroProps = {
  eyebrow?: string;
  title: string;
  description?: string;
  breadcrumbs?: BreadcrumbItem[];
  actions?: ReactNode;
  className?: string;
};

export function PageHero({
  eyebrow,
  title,
  description,
  breadcrumbs,
  actions,
  className = "",
}: PageHeroProps) {
  return (
    <div
      className={["border-b border-border bg-surface", className]
        .filter(Boolean)
        .join(" ")}
    >
      <div className="mx-auto max-w-6xl px-4 py-12 sm:px-6 lg:px-8 md:py-16">
        {breadcrumbs && breadcrumbs.length > 0 && (
          <Breadcrumb items={breadcrumbs} />
        )}
        {eyebrow && (
          <p className="mb-3 text-sm font-semibold uppercase tracking-wider text-accent">
            {eyebrow}
          </p>
        )}
        <h1 className="font-display max-w-3xl text-4xl font-semibold tracking-tight text-foreground md:text-5xl">
          {title}
        </h1>
        {description && (
          <p className="mt-4 max-w-2xl text-lg leading-relaxed text-text-muted">
            {description}
          </p>
        )}
        {actions && <div className="mt-8 flex flex-wrap gap-3">{actions}</div>}
      </div>
    </div>
  );
}
