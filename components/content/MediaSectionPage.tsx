import Link from "next/link";
import { PageHero } from "@/components/ui/PageHero";
import { Section } from "@/components/ui/Section";
import { VideoEmbed } from "@/components/ui/VideoEmbed";
import { VisualCard } from "@/components/ui/VisualCard";
import {
  getMediaByType,
  mediaIntro,
  mediaSections,
  type MediaItem,
  type MediaType,
} from "@/lib/content/media";

function MediaItemCard({ item }: { item: MediaItem }) {
  if (item.type === "video" && item.videoUrl) {
    return (
      <div className="space-y-4">
        <VideoEmbed url={item.videoUrl} title={item.title} />
        <div>
          <p className="font-display text-lg font-semibold text-foreground">
            {item.title}
          </p>
          <p className="mt-1 text-sm text-text-muted">{item.description}</p>
        </div>
      </div>
    );
  }

  if (item.imageSrc) {
    return (
      <VisualCard
        title={item.title}
        description={item.description}
        href={item.externalUrl}
        imageSrc={item.imageSrc}
        meta={`${item.label} · ${item.date}`}
      />
    );
  }

  if (item.externalUrl) {
    return (
      <a
        href={item.externalUrl}
        target="_blank"
        rel="noopener noreferrer"
        className="block rounded-2xl border border-border bg-surface p-5 shadow-sm transition-shadow hover:shadow-md"
      >
        <span className="text-xs font-semibold uppercase tracking-wider text-accent">
          {item.label} · {item.date}
        </span>
        <p className="mt-2 font-display text-lg font-semibold text-foreground">
          {item.title}
        </p>
        <p className="mt-1 text-sm text-text-muted">{item.description}</p>
      </a>
    );
  }

  return (
    <div className="rounded-2xl border border-border bg-surface p-5">
      <span className="text-xs font-semibold uppercase tracking-wider text-accent">
        {item.label} · {item.date}
      </span>
      <p className="mt-2 font-display text-lg font-semibold">{item.title}</p>
      <p className="mt-1 text-sm text-text-muted">{item.description}</p>
    </div>
  );
}

export function MediaGrid({ items }: { items: MediaItem[] }) {
  return (
    <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
      {items.map((item) => (
        <MediaItemCard key={item.slug} item={item} />
      ))}
    </div>
  );
}

type MediaSectionPageProps = {
  type: MediaType;
};

export function MediaSectionPage({ type }: MediaSectionPageProps) {
  const section = mediaSections[type];
  const items = getMediaByType(type);

  return (
    <>
      <PageHero
        title={section.title}
        description={section.description}
        breadcrumbs={[
          { label: "Home", href: "/" },
          { label: "Media", href: "/media" },
          { label: section.title },
        ]}
      />
      <Section>
        <MediaGrid items={items} />
        {type === "video" && (
          <p className="mt-8 text-sm text-text-muted">
            More recordings at{" "}
            <Link
              href="/talks-and-learning/videos"
              className="text-primary hover:underline"
            >
              Talks video archive
            </Link>{" "}
            and{" "}
            <a
              href={mediaIntro.facebookPage}
              target="_blank"
              rel="noopener noreferrer"
              className="text-primary hover:underline"
            >
              Facebook
            </a>
            .
          </p>
        )}
        {type === "news" && (
          <p className="mt-8 text-sm text-text-muted">
            Follow{" "}
            <a
              href={mediaIntro.facebookPage}
              target="_blank"
              rel="noopener noreferrer"
              className="text-primary hover:underline"
            >
              Sasthra Vedhi on Facebook
            </a>{" "}
            for the latest posts and event photos.
          </p>
        )}
      </Section>
    </>
  );
}
