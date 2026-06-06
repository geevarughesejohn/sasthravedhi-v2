import { PageHero } from "@/components/ui/PageHero";
import { Section } from "@/components/ui/Section";
import { readingCircle } from "@/lib/content/talks";
import { createPageMetadata } from "@/lib/metadata";

export const metadata = createPageMetadata({
  title: readingCircle.title,
  description: readingCircle.description,
  path: "/talks-and-learning/reading-circle",
});

export default function ReadingCirclePage() {
  return (
    <>
      <PageHero
        title={readingCircle.title}
        description={readingCircle.description}
        breadcrumbs={[
          { label: "Home", href: "/" },
          { label: "Talks & Learning", href: "/talks-and-learning" },
          { label: "Reading Circle" },
        ]}
      />

      <Section eyebrow="Now reading" title="Current selection">
        <p className="text-lg text-text-muted">{readingCircle.currentBook}</p>
        <p className="mt-2 text-sm text-text-muted">{readingCircle.schedule}</p>
        <p className="mt-4 text-sm font-medium text-primary">
          {readingCircle.contactNote}
        </p>
      </Section>

      <Section eyebrow="Past selections" title="Recent themes" muted>
        <ul className="max-w-2xl space-y-3">
          {readingCircle.pastBooks.map((book) => (
            <li
              key={book}
              className="rounded-lg border border-border bg-surface px-4 py-3 text-text-muted"
            >
              {book}
            </li>
          ))}
        </ul>
      </Section>
    </>
  );
}
