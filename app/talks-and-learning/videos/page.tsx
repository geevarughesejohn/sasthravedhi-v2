import { CTA } from "@/components/ui/CTA";
import { Card } from "@/components/ui/Card";
import { PageHero } from "@/components/ui/PageHero";
import { Section } from "@/components/ui/Section";
import { VideoEmbed } from "@/components/ui/VideoEmbed";
import { videoArchive } from "@/lib/content/talks";
import { createPageMetadata } from "@/lib/metadata";

export const metadata = createPageMetadata({
  title: "Video Archive",
  description: "Recorded Wednesday Talks and lectures from Sasthra Vedhi.",
  path: "/talks-and-learning/videos",
});

export default function VideosPage() {
  const featured = videoArchive.find((v) => v.videoUrl);

  return (
    <>
      <PageHero
        title="Video Archive"
        description="Recorded talks, lectures, and sessions from Sasthra Vedhi programs."
        breadcrumbs={[
          { label: "Home", href: "/" },
          { label: "Talks & Learning", href: "/talks-and-learning" },
          { label: "Video Archive" },
        ]}
      />

      {featured?.videoUrl && (
        <Section eyebrow="Featured" title={featured.title}>
          <VideoEmbed url={featured.videoUrl} title={featured.title} />
          <p className="mt-4 text-text-muted">{featured.description}</p>
        </Section>
      )}

      <Section eyebrow="Archive" title="All recordings" muted>
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {videoArchive.map((video) => (
            <Card
              key={video.slug}
              title={video.title}
              description={video.description}
              meta={`${video.duration} · ${video.speaker}`}
              href={video.externalUrl ?? video.videoUrl}
            />
          ))}
        </div>
        <div className="mt-8">
          <CTA
            href="https://sasthravedhi.in/sasthravedhionlinetalks/"
            variant="secondary"
            external
          >
            View all Wednesday Talks
          </CTA>
        </div>
      </Section>
    </>
  );
}
