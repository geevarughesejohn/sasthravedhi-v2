import { CTA } from "@/components/ui/CTA";
import { Card } from "@/components/ui/Card";
import { PageHero } from "@/components/ui/PageHero";
import { Section } from "@/components/ui/Section";
import { wednesdayTalks, wednesdayTalksIntro } from "@/lib/content/talks";
import { createPageMetadata } from "@/lib/metadata";

export const metadata = createPageMetadata({
  title: wednesdayTalksIntro.title,
  description: wednesdayTalksIntro.description,
  path: "/talks-and-learning/wednesday-talks",
});

export default function WednesdayTalksPage() {
  const upcoming = wednesdayTalks.filter((talk) => talk.status === "upcoming");
  const recorded = wednesdayTalks.filter((talk) => talk.status === "recorded");

  return (
    <>
      <PageHero
        title={wednesdayTalksIntro.title}
        description={wednesdayTalksIntro.description}
        breadcrumbs={[
          { label: "Home", href: "/" },
          { label: "Talks & Learning", href: "/talks-and-learning" },
          { label: "Wednesday Talks" },
        ]}
        actions={
          <CTA href={wednesdayTalksIntro.signupUrl} variant="secondary" external>
            Join a Talk
          </CTA>
        }
      />

      {upcoming.length > 0 && (
        <Section eyebrow="Next session" title="Upcoming">
          <div className="grid gap-4 md:grid-cols-2">
            {upcoming.map((talk) => (
              <Card
                key={talk.slug}
                title={talk.title}
                description={talk.description}
                meta={`${talk.speaker} · ${talk.date}`}
              />
            ))}
          </div>
          <p className="mt-4 text-sm text-text-muted">
            {wednesdayTalksIntro.signupNote}
          </p>
        </Section>
      )}

      <Section eyebrow="Archive" title="Recent sessions" muted>
        <ul className="divide-y divide-border rounded-xl border border-border bg-surface">
          {recorded.map((talk) => (
            <li key={talk.slug} className="px-6 py-4">
              <p className="font-semibold text-foreground">{talk.title}</p>
              <p className="mt-1 text-sm text-text-muted">{talk.description}</p>
              <p className="mt-2 text-xs font-medium text-primary">
                {talk.speaker} · {talk.date}
              </p>
            </li>
          ))}
        </ul>
        <div className="mt-6">
          <CTA href="/talks-and-learning/videos" variant="ghost">
            Watch video archive →
          </CTA>
        </div>
      </Section>
    </>
  );
}
