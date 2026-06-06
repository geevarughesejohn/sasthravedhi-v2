import Link from "next/link";
import { Card } from "@/components/ui/Card";
import { PageHero } from "@/components/ui/PageHero";
import { Section } from "@/components/ui/Section";
import { MediaGrid } from "@/components/content/MediaSectionPage";
import { mediaIntro, mediaItems, mediaSections } from "@/lib/content/media";
import { createPageMetadata } from "@/lib/metadata";

export const metadata = createPageMetadata({
  title: mediaIntro.title,
  description: mediaIntro.description,
  path: "/media",
});

export default function MediaPage() {
  const sections = Object.entries(mediaSections) as [
    keyof typeof mediaSections,
    (typeof mediaSections)[keyof typeof mediaSections],
  ][];

  return (
    <>
      <PageHero
        title={mediaIntro.title}
        description={mediaIntro.description}
        breadcrumbs={[{ label: "Home", href: "/" }, { label: "Media" }]}
      />

      <Section eyebrow="Browse" title="Sections">
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {sections.map(([key, section]) => (
            <Card
              key={key}
              title={section.title}
              description={section.description}
              href={section.path}
            />
          ))}
        </div>
      </Section>

      <Section eyebrow="Highlights" title="Recent media" muted>
        <MediaGrid items={mediaItems.slice(0, 6)} />
        <p className="mt-8 text-sm text-text-muted">
          Browse{" "}
          <Link href="/media/gallery" className="text-primary hover:underline">
            Photo Gallery
          </Link>
          ,{" "}
          <Link href="/media/videos" className="text-primary hover:underline">
            Videos
          </Link>
          , and{" "}
          <Link href="/media/events" className="text-primary hover:underline">
            Event Highlights
          </Link>
          .
        </p>
      </Section>
    </>
  );
}
