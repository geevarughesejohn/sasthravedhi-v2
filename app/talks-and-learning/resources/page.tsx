import { Card } from "@/components/ui/Card";
import { PageHero } from "@/components/ui/PageHero";
import { Section } from "@/components/ui/Section";
import { learningResources } from "@/lib/content/talks";
import { createPageMetadata } from "@/lib/metadata";

export const metadata = createPageMetadata({
  title: "Learning Resources",
  description: "Curated paths to readings, talks, and publications from Sasthra Vedhi.",
  path: "/talks-and-learning/resources",
});

export default function LearningResourcesPage() {
  return (
    <>
      <PageHero
        title="Learning Resources"
        description="Start here to explore magazines, publications, talks, and community learning programs."
        breadcrumbs={[
          { label: "Home", href: "/" },
          { label: "Talks & Learning", href: "/talks-and-learning" },
          { label: "Learning Resources" },
        ]}
      />

      <Section>
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
