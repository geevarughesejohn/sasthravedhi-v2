"use client";

import Image from "next/image";
import Link from "next/link";
import { useCallback, useEffect, useMemo, useState } from "react";
import type { LatestEventHighlight } from "@/lib/content/home";
import type { HeroEventImage } from "@/lib/hero-events";

type HighlightSlide = {
  src: string;
  title: string;
  href: string;
};

type HeroRecentHighlightProps = {
  highlight: LatestEventHighlight;
  eventPhotos: HeroEventImage[];
  intervalMs?: number;
};

export function HeroRecentHighlight({
  highlight,
  eventPhotos,
  intervalMs = 5000,
}: HeroRecentHighlightProps) {
  const slides = useMemo<HighlightSlide[]>(() => {
    if (eventPhotos.length > 0) {
      return eventPhotos.map((photo) => ({
        src: photo.src,
        title: photo.alt,
        href: "/media/events",
      }));
    }

    return [
      {
        src: highlight.imageSrc,
        title: highlight.title,
        href: highlight.href,
      },
    ];
  }, [eventPhotos, highlight]);

  const [active, setActive] = useState(0);
  const count = slides.length;
  const current = slides[active];

  const next = useCallback(() => {
    if (count <= 1) return;
    setActive((i) => (i + 1) % count);
  }, [count]);

  useEffect(() => {
    if (count <= 1) return;
    const timer = setInterval(next, intervalMs);
    return () => clearInterval(timer);
  }, [count, intervalMs, next]);

  useEffect(() => {
    setActive((index) => (index >= count ? 0 : index));
  }, [count]);

  return (
    <div className="relative mx-auto mt-2 w-full max-w-md sm:mt-4 lg:mx-0 lg:mt-16 lg:max-w-none">
      <div
        aria-hidden
        className="absolute -inset-2 rounded-2xl bg-gradient-to-br from-gold/35 via-primary/30 to-white/10 opacity-70 blur-xl"
      />

      <Link
        href={current.href}
        className="group relative block overflow-hidden rounded-2xl border border-white/20 bg-black/40 shadow-2xl ring-1 ring-white/10"
      >
        <div className="relative aspect-[4/3] w-full sm:aspect-[3/2] lg:aspect-[4/3]">
          {slides.map((slide, index) => (
            <div
              key={slide.src}
              className={[
                "absolute inset-0 transition-opacity duration-700 ease-out",
                index === active ? "opacity-100" : "opacity-0",
              ].join(" ")}
            >
              <Image
                src={slide.src}
                alt={slide.title}
                fill
                className="object-cover object-center transition-transform duration-700 group-hover:scale-[1.02]"
                sizes="(max-width: 1024px) 448px, 45vw"
                priority={index === 0}
              />
            </div>
          ))}

          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />

          <div className="absolute left-3 top-3 z-10">
            <span className="rounded-full border border-white/20 bg-black/50 px-2.5 py-1 text-[10px] font-bold uppercase tracking-wider text-white/90 backdrop-blur-sm">
              {highlight.label}
            </span>
          </div>

          <div className="absolute inset-x-0 bottom-0 z-10 p-4">
            <p className="font-display line-clamp-2 text-lg font-bold leading-snug text-white drop-shadow-md sm:text-xl">
              {current.title}
            </p>
            <p className="mt-1.5 inline-flex items-center gap-1.5 text-xs font-semibold text-gold transition-colors group-hover:text-yellow-200">
              See event highlights
              <span aria-hidden className="transition-transform group-hover:translate-x-0.5">
                →
              </span>
            </p>
          </div>

          {count > 1 && (
            <div className="absolute bottom-4 right-4 z-10 flex gap-1.5">
              {slides.map((slide, index) => (
                <button
                  key={slide.src}
                  type="button"
                  aria-label={`Show ${slide.title}`}
                  aria-current={index === active ? "true" : undefined}
                  onClick={(event) => {
                    event.preventDefault();
                    setActive(index);
                  }}
                  className={[
                    "h-1.5 rounded-full transition-all",
                    index === active
                      ? "w-5 bg-gold"
                      : "w-1.5 bg-white/45 hover:bg-white/75",
                  ].join(" ")}
                />
              ))}
            </div>
          )}
        </div>
      </Link>
    </div>
  );
}
