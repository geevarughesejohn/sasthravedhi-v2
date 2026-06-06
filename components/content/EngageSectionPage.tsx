import Link from "next/link";
import { PageHero } from "@/components/ui/PageHero";
import { Section } from "@/components/ui/Section";
import {
  engageSections,
  getEngageDocumentsByType,
  type EngageType,
} from "@/lib/content/engage";

type EngageSectionPageProps = {
  type: EngageType;
};

export function EngageSectionPage({ type }: EngageSectionPageProps) {
  const section = engageSections[type];
  const documents = getEngageDocumentsByType(type);

  return (
    <>
      <PageHero
        title={section.title}
        description={section.description}
        breadcrumbs={[
          { label: "Home", href: "/" },
          { label: "Engage", href: "/engage" },
          { label: section.title },
        ]}
      />

      <Section>
        {documents.length > 0 ? (
          <ul className="divide-y divide-border rounded-xl border border-border bg-surface">
            {documents.map((doc) => (
              <li key={doc.slug}>
                <Link
                  href={`/engage/documents/${doc.slug}`}
                  className="block px-6 py-5 transition-colors hover:bg-surface-muted"
                >
                  <p className="font-semibold text-foreground">{doc.title}</p>
                  <p className="mt-1 text-sm text-text-muted">{doc.excerpt}</p>
                  <p className="mt-2 text-xs font-medium text-primary">
                    {doc.date}
                  </p>
                </Link>
              </li>
            ))}
          </ul>
        ) : (
          <p className="text-text-muted">No documents in this section yet.</p>
        )}
      </Section>
    </>
  );
}
