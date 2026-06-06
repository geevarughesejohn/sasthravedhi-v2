import Image from "next/image";
import Link from "next/link";

type MagazineCoverProps = {
  title: string;
  issue: string;
  href: string;
  imageSrc: string;
  className?: string;
};

export function MagazineCover({
  title,
  issue,
  href,
  imageSrc,
  className = "",
}: MagazineCoverProps) {
  return (
    <Link
      href={href}
      className={[
        "group relative overflow-hidden rounded-2xl border border-border bg-surface shadow-md transition-all hover:-translate-y-1 hover:shadow-xl",
        className,
      ].join(" ")}
    >
      <div className="relative aspect-[3/4] overflow-hidden bg-surface-muted">
        <Image
          src={imageSrc}
          alt={title}
          fill
          className="object-cover transition-transform duration-500 group-hover:scale-105"
          sizes="(max-width: 768px) 50vw, 25vw"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/10 to-transparent" />
        <div className="absolute inset-x-0 bottom-0 p-4 text-white">
          <p className="text-xs font-semibold uppercase tracking-wider text-white/80">
            {issue}
          </p>
          <p className="mt-1 font-display text-lg font-semibold leading-tight">
            {title}
          </p>
        </div>
      </div>
    </Link>
  );
}

type VisualCardProps = {
  title: string;
  description?: string;
  href?: string;
  imageSrc: string;
  meta?: string;
  className?: string;
};

export function VisualCard({
  title,
  description,
  href,
  imageSrc,
  meta,
  className = "",
}: VisualCardProps) {
  const content = (
    <>
      <div className="relative aspect-[16/10] overflow-hidden">
        <Image
          src={imageSrc}
          alt={title}
          fill
          className="object-cover transition-transform duration-500 group-hover:scale-105"
          sizes="(max-width: 768px) 100vw, 33vw"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
        {meta && (
          <span className="absolute left-4 top-4 rounded-full bg-white/90 px-3 py-1 text-xs font-semibold text-primary">
            {meta}
          </span>
        )}
      </div>
      <div className="p-5">
        <h3 className="font-display text-xl font-semibold text-foreground">
          {title}
        </h3>
        {description && (
          <p className="mt-2 text-sm leading-relaxed text-text-muted">
            {description}
          </p>
        )}
      </div>
    </>
  );

  const classes = [
    "group block overflow-hidden rounded-2xl border border-border bg-surface shadow-sm transition-shadow hover:shadow-lg",
    className,
  ].join(" ");

  if (href) {
    return (
      <Link href={href} className={classes}>
        {content}
      </Link>
    );
  }

  return <article className={classes}>{content}</article>;
}
