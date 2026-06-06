import { Card } from "@/components/ui/Card";
import { PageHero } from "@/components/ui/PageHero";
import { Section } from "@/components/ui/Section";
import { programs, programsIntro } from "@/lib/content/programs";
import { createPageMetadata } from "@/lib/metadata";

export const metadata = createPageMetadata({
  title: programsIntro.title,
  description: programsIntro.description,
  path: "/science-in-action",
});

export default function ScienceInActionPage() {
  return (
    <>
      <PageHero
        title={programsIntro.title}
        description={programsIntro.description}
        breadcrumbs={[
          { label: "Home", href: "/" },
          { label: "Science in Action" },
        ]}
      />

      <Section eyebrow="Programs" title="On the ground across Kerala">
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {programs.map((program) => (
            <Card
              key={program.slug}
              title={program.title}
              description={program.description}
              href={`/science-in-action/${program.slug}`}
            />
          ))}
        </div>
      </Section>
    </>
  );
}
