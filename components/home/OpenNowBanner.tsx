import Link from "next/link";
import type { AnnouncementContent } from "@/lib/content/home";

type OpenNowBannerProps = {
  announcement: AnnouncementContent;
};

export function OpenNowBanner({ announcement }: OpenNowBannerProps) {
  return (
    <section
      aria-labelledby="open-now-heading"
      className="border-b border-border bg-surface"
    >
      <div className="mx-auto max-w-6xl px-4 py-5 sm:px-6 lg:px-8">
        <div className="flex flex-col gap-4 rounded-xl border border-gold/35 bg-gradient-to-r from-gold/10 via-accent-light/80 to-primary-light/40 p-4 shadow-sm sm:flex-row sm:items-center sm:gap-5 sm:p-5">
          <div className="flex min-w-0 flex-1 items-start gap-3 sm:items-center">
            <p className="inline-flex shrink-0 items-center gap-1.5 rounded-full border border-gold/50 bg-gold/15 px-3 py-1 text-[11px] font-bold uppercase tracking-wider text-primary-dark">
              <span className="inline-block h-1.5 w-1.5 animate-pulse rounded-full bg-gold" />
              {announcement.badge}
            </p>
            <div className="min-w-0">
              <h2
                id="open-now-heading"
                className="font-display text-base font-bold leading-snug text-foreground sm:text-lg"
              >
                {announcement.title}
              </h2>
              <p className="mt-0.5 line-clamp-2 text-sm text-text-muted sm:line-clamp-1">
                {announcement.summary}
              </p>
            </div>
          </div>

          <Link
            href={announcement.href}
            className="inline-flex shrink-0 items-center justify-center gap-2 rounded-lg border border-transparent bg-primary px-5 py-2.5 text-sm font-semibold text-white shadow-sm transition-colors hover:bg-primary-dark sm:self-center"
          >
            {announcement.ctaLabel}
            <span aria-hidden>→</span>
          </Link>
        </div>
      </div>
    </section>
  );
}
