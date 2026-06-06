"use client";

import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import { CTA } from "@/components/ui/CTA";
import { MagazineCover } from "@/components/ui/VisualCard";
import { VideoEmbed } from "@/components/ui/VideoEmbed";
import type { ScienceIn60Content } from "@/lib/content/home";

type MagazineIssue = {
  slug: string;
  title: string;
  month: string;
  cover: string;
  href: string;
};

export function MagazineShelfAnimated({
  issues,
  totalCount,
}: {
  issues: MagazineIssue[];
  totalCount?: number;
}) {
  const count = totalCount ?? issues.length;
  const ref = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const node = ref.current;
    if (!node) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.15 },
    );

    observer.observe(node);
    return () => observer.disconnect();
  }, []);

  return (
    <div ref={ref} className="relative -mx-4 px-4 sm:-mx-6 sm:px-6">
      <div
        className="flex gap-4 overflow-x-auto pb-2 snap-x snap-mandatory scroll-smooth [-ms-overflow-style:none] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
        aria-label="Recent magazine issues"
      >
        {issues.map((issue, index) => (
          <div
            key={issue.slug}
            className={[
              "w-[132px] shrink-0 snap-start transition-all duration-700 ease-out sm:w-[150px] md:w-[168px]",
              visible
                ? "translate-y-0 opacity-100"
                : "translate-y-8 opacity-0",
            ].join(" ")}
            style={{ transitionDelay: visible ? `${index * 80}ms` : "0ms" }}
          >
            <MagazineCover
              title={issue.title}
              issue={issue.month}
              href={issue.href}
              imageSrc={issue.cover}
              className="shadow-md ring-1 ring-border/50"
            />
          </div>
        ))}
      </div>

      <div
        aria-hidden
        className="pointer-events-none absolute inset-y-0 right-0 w-20 bg-gradient-to-l from-background via-background/90 to-transparent sm:w-28"
      />

      <div className="mt-5 flex flex-wrap items-center justify-between gap-3 pr-6 sm:pr-8">
        <p className="text-sm text-text-muted">
          <span className="font-semibold text-foreground">{count} issues</span>
          {" · "}
          Scroll for more
        </p>
        <Link
          href="/sasthram-munnott/archive"
          className="text-sm font-semibold text-primary hover:underline"
        >
          View full archive →
        </Link>
      </div>
    </div>
  );
}

type ImpactStatItem = {
  label: string;
  numericValue: number;
  suffix?: string;
};

function CountUpValue({
  value,
  suffix = "",
  active,
}: {
  value: number;
  suffix?: string;
  active: boolean;
}) {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    if (!active) return;

    const duration = 1400;
    const start = performance.now();

    const tick = (now: number) => {
      const progress = Math.min((now - start) / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 3);
      setCurrent(Math.round(value * eased));
      if (progress < 1) requestAnimationFrame(tick);
    };

    requestAnimationFrame(tick);
  }, [active, value]);

  const formatted = value >= 1000 ? current.toLocaleString("en-IN") : String(current);

  return (
    <>
      {formatted}
      {suffix}
    </>
  );
}

export function ImpactStatsCountUp({ stats }: { stats: ImpactStatItem[] }) {
  const ref = useRef<HTMLDListElement>(null);
  const [active, setActive] = useState(false);

  useEffect(() => {
    const node = ref.current;
    if (!node) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setActive(true);
          observer.disconnect();
        }
      },
      { threshold: 0.3 },
    );

    observer.observe(node);
    return () => observer.disconnect();
  }, []);

  return (
    <dl ref={ref} className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
      {stats.map((item, index) => (
        <div
          key={item.label}
          className={[
            "rounded-2xl border border-border bg-gradient-to-br from-primary-light to-surface p-6 text-center shadow-sm transition-all duration-700",
            active ? "translate-y-0 opacity-100" : "translate-y-6 opacity-0",
          ].join(" ")}
          style={{ transitionDelay: active ? `${index * 100}ms` : "0ms" }}
        >
          <dd className="font-display text-3xl font-bold tabular-nums text-primary">
            <CountUpValue
              value={item.numericValue}
              suffix={item.suffix}
              active={active}
            />
          </dd>
          <dt className="mt-2 text-sm font-medium text-text-muted">{item.label}</dt>
        </div>
      ))}
    </dl>
  );
}

type ScienceIn60SpotlightProps = {
  data: ScienceIn60Content;
};

export function ScienceIn60Spotlight({ data }: ScienceIn60SpotlightProps) {
  return (
    <section className="relative overflow-hidden border-y border-white/10 bg-gradient-to-br from-[#011833] via-primary-dark to-primary text-white">
      <div
        aria-hidden
        className="pointer-events-none absolute -right-20 top-0 h-64 w-64 rounded-full bg-gold/20 blur-3xl"
      />
      <div
        aria-hidden
        className="pointer-events-none absolute -left-10 bottom-0 h-48 w-48 rounded-full bg-white/10 blur-3xl"
      />

      <div className="relative mx-auto grid max-w-6xl gap-10 px-4 py-14 sm:px-6 lg:grid-cols-2 lg:items-center lg:gap-12 lg:px-8 lg:py-20">
        <div>
          <p className="inline-flex items-center gap-2 rounded-full border border-gold/40 bg-gold/10 px-4 py-1 text-xs font-bold uppercase tracking-wider text-gold">
            <span className="inline-block h-2 w-2 animate-pulse rounded-full bg-gold" />
            Youth programme
          </p>
          <h2 className="font-display mt-5 text-4xl font-bold leading-tight md:text-5xl">
            Science in{" "}
            <span className="bg-gradient-to-r from-gold via-yellow-200 to-gold bg-clip-text text-transparent">
              60 seconds
            </span>
          </h2>
          <p className="mt-4 text-lg text-white/85">{data.tagline}</p>
          <p className="mt-3 max-w-lg text-sm leading-relaxed text-white/70">
            {data.description}
          </p>

          <div className="mt-8 flex flex-wrap gap-4">
            {data.stats.map((stat) => (
              <div
                key={stat.label}
                className="rounded-2xl border border-white/15 bg-white/10 px-5 py-3 backdrop-blur-sm"
              >
                <p className="font-display text-2xl font-bold text-gold">
                  {stat.value}
                </p>
                <p className="text-xs text-white/65">{stat.label}</p>
              </div>
            ))}
          </div>

          <div className="mt-8 flex flex-wrap gap-3">
            <CTA href={data.href} variant="primary">
              Explore the programme
            </CTA>
            <CTA
              href={data.href}
              variant="ghost"
              className="border-white/30 text-white hover:bg-white/10"
            >
              Submit your reel
            </CTA>
          </div>
        </div>

        <div className="relative mx-auto w-full max-w-sm lg:max-w-none">
          <div className="absolute -inset-3 rounded-[2rem] bg-gradient-to-br from-gold/40 via-primary to-white/20 opacity-60 blur-xl" />
          <div className="relative overflow-hidden rounded-[1.75rem] border-2 border-white/20 bg-black shadow-2xl ring-4 ring-white/10">
            <div className="flex items-center gap-2 border-b border-white/10 bg-black/80 px-4 py-2">
              <span className="h-2.5 w-2.5 rounded-full bg-red-400" />
              <span className="h-2.5 w-2.5 rounded-full bg-gold" />
              <span className="h-2.5 w-2.5 rounded-full bg-green-400" />
              <span className="ml-2 text-xs font-medium text-white/50">
                Now playing · muted
              </span>
            </div>
            <VideoEmbed
              url={data.videoUrl}
              title={data.title}
              autoplayMuted
              loop
              controls={false}
              className="aspect-[9/16] max-h-[420px] rounded-none border-0 shadow-none sm:aspect-video sm:max-h-none"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
