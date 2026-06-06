import { CTA } from "@/components/ui/CTA";
import { Card } from "@/components/ui/Card";
import { PageHero } from "@/components/ui/PageHero";
import { Section } from "@/components/ui/Section";
import { ysvContent } from "@/lib/content/ysv";
import { createPageMetadata } from "@/lib/metadata";

export const metadata = createPageMetadata({
  title: "Yuva Sasthra Vedhi",
  description: ysvContent.description,
  path: "/yuva-sasthra-vedhi",
});

export default function YuvaSasthraVedhiPage() {
  return (
    <>
      <PageHero
        title={ysvContent.title}
        description={ysvContent.description}
        breadcrumbs={[
          { label: "Home", href: "/" },
          { label: "Yuva Sasthra Vedhi" },
        ]}
        actions={
          <CTA href="/yuva-sasthra-vedhi/join" variant="primary">
            Join Yuva Sasthra Vedhi
          </CTA>
        }
      />

      <Section eyebrow="What we do" title={ysvContent.tagline}>
        <div className="grid gap-4 md:grid-cols-3">
          {ysvContent.activities.map((activity) => (
            <Card
              key={activity.title}
              title={activity.title}
              description={activity.description}
            />
          ))}
        </div>
      </Section>

      <Section
        eyebrow="Get involved"
        title="Campus to community"
        description="Student chapters, leadership programs, and innovation challenges connect young people to the wider science movement."
        muted
      >
        <div className="grid gap-4 sm:grid-cols-2">
          <Card
            title="Student Chapters"
            description="Start or join a chapter at your institution."
            href="/yuva-sasthra-vedhi/chapters"
          />
          <Card
            title="Activities"
            description="Discussions, outreach, and youth-led programs."
            href="/yuva-sasthra-vedhi/activities"
          />
          <Card
            title="Leadership Programs"
            description="Develop skills in science communication and organizing."
            href="/yuva-sasthra-vedhi/leadership"
          />
          <Card
            title="Innovation Challenges"
            description="Compete and collaborate on evidence-based projects."
            href="/yuva-sasthra-vedhi/challenges"
          />
        </div>
      </Section>
    </>
  );
}
