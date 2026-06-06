import Link from "next/link";
import { Card } from "@/components/ui/Card";
import { PageHero } from "@/components/ui/PageHero";
import { Section } from "@/components/ui/Section";
import {
  engageDocuments,
  engageIntro,
  engageSections,
} from "@/lib/content/engage";
import { createPageMetadata } from "@/lib/metadata";

export const metadata = createPageMetadata({
  title: engageIntro.title,
  description: engageIntro.description,
  path: "/engage",
});

export default function EngagePage() {
  const sections = Object.entries(engageSections) as [
    keyof typeof engageSections,
    (typeof engageSections)[keyof typeof engageSections],
  ][];

  return (
    <>
      <PageHero
        title={engageIntro.title}
        description={engageIntro.description}
        breadcrumbs={[{ label: "Home", href: "/" }, { label: "Engage" }]}
      />

      <Section eyebrow="Browse" title="Sections">
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
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

      <Section eyebrow="Recent" title="Latest documents" muted>
        <ul className="divide-y divide-border rounded-xl border border-border bg-surface">
          {engageDocuments.slice(0, 5).map((doc) => (
            <li key={doc.slug}>
              <Link
                href={`/engage/documents/${doc.slug}`}
                className="block px-6 py-4 transition-colors hover:bg-surface-muted"
              >
                <p className="font-semibold text-foreground">{doc.title}</p>
                <p className="mt-1 text-sm text-text-muted">
                  {engageSections[doc.type].title} · {doc.date}
                </p>
              </Link>
            </li>
          ))}
        </ul>
      </Section>
    </>
  );
}
