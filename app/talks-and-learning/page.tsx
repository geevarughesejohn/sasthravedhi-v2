import { Card } from "@/components/ui/Card";
import { PageHero } from "@/components/ui/PageHero";
import { Section } from "@/components/ui/Section";
import {
  learningResources,
  readingCircle,
  talksIntro,
  videoArchive,
  wednesdayTalks,
} from "@/lib/content/talks";
import { createPageMetadata } from "@/lib/metadata";

export const metadata = createPageMetadata({
  title: talksIntro.title,
  description: talksIntro.description,
  path: "/talks-and-learning",
});

export default function TalksAndLearningPage() {
  return (
    <>
      <PageHero
        title={talksIntro.title}
        description={talksIntro.description}
        breadcrumbs={[
          { label: "Home", href: "/" },
          { label: "Talks & Learning" },
        ]}
      />

      <Section eyebrow="Weekly" title="Wednesday Talks">
        <div className="grid gap-4 md:grid-cols-3">
          {wednesdayTalks.slice(0, 3).map((talk) => (
            <Card
              key={talk.slug}
              title={talk.title}
              description={talk.description}
              meta={`${talk.speaker} · ${talk.date}`}
              href="/talks-and-learning/wednesday-talks"
            />
          ))}
        </div>
      </Section>

      <Section eyebrow="Community" title={readingCircle.title} muted>
        <p className="max-w-2xl text-text-muted">{readingCircle.description}</p>
        <div className="mt-6">
          <Card
            title="Current selection"
            description={readingCircle.currentBook}
            meta={readingCircle.schedule}
            href="/talks-and-learning/reading-circle"
          />
        </div>
      </Section>

      <Section eyebrow="On demand" title="Video archive">
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {videoArchive.map((video) => (
            <Card
              key={video.slug}
              title={video.title}
              description={video.description}
              meta={`${video.duration} · ${video.speaker}`}
              href="/talks-and-learning/videos"
            />
          ))}
        </div>
      </Section>

      <Section eyebrow="Explore" title="Learning resources" muted>
        <div className="grid gap-4 sm:grid-cols-2">
          {learningResources.map((resource) => (
            <Card
              key={resource.title}
              title={resource.title}
              description={resource.description}
              meta={resource.type}
              href={resource.href}
            />
          ))}
        </div>
      </Section>
    </>
  );
}
