import type { ReactNode } from "react";

type SectionProps = {
  id?: string;
  eyebrow?: string;
  title?: string;
  description?: string;
  actions?: ReactNode;
  children: ReactNode;
  className?: string;
  muted?: boolean;
};

export function Section({
  id,
  eyebrow,
  title,
  description,
  actions,
  children,
  className = "",
  muted = false,
}: SectionProps) {
  return (
    <section
      id={id}
      className={[
        "py-16 md:py-20",
        muted ? "bg-surface-muted" : "bg-background",
        className,
      ]
        .filter(Boolean)
        .join(" ")}
    >
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        {(eyebrow || title || description || actions) && (
          <header
            className={[
              "mb-10",
              actions
                ? "flex flex-col gap-6 sm:flex-row sm:items-end sm:justify-between"
                : "",
            ].join(" ")}
          >
            <div className="max-w-2xl">
              {eyebrow && (
                <p className="mb-2 text-sm font-semibold uppercase tracking-wider text-accent">
                  {eyebrow}
                </p>
              )}
              {title && (
                <h2 className="font-display text-3xl font-semibold tracking-tight text-foreground md:text-4xl">
                  {title}
                </h2>
              )}
              {description && (
                <p className="mt-3 text-lg leading-relaxed text-text-muted">
                  {description}
                </p>
              )}
            </div>
            {actions && <div className="shrink-0">{actions}</div>}
          </header>
        )}
        {children}
      </div>
    </section>
  );
}
