import { MagazineCover } from "@/components/ui/VisualCard";
import { PageHero } from "@/components/ui/PageHero";
import { Section } from "@/components/ui/Section";
import { archiveIssues, munnottIntro } from "@/lib/content/munnott";
import { createPageMetadata } from "@/lib/metadata";

export const metadata = createPageMetadata({
  title: "Archive — Sasthram Munnott",
  description: `Browse past issues of ${munnottIntro.title}.`,
  path: "/sasthram-munnott/archive",
});

export default function MunnottArchivePage() {
  return (
    <>
      <PageHero
        title="Archive"
        description="Past issues of Sasthram Munnot — January through June 2025. Purchase available issues on Amazon."
        breadcrumbs={[
          { label: "Home", href: "/" },
          { label: "Sasthram Munnott", href: "/sasthram-munnott" },
          { label: "Archive" },
        ]}
      />

      <Section>
        <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-5">
          {archiveIssues.map((issue) => (
            <MagazineCover
              key={issue.slug}
              title="Sasthram Munnot"
              issue={issue.month}
              href={`/sasthram-munnott/issues/${issue.slug}`}
              imageSrc={issue.coverImage}
            />
          ))}
        </div>
      </Section>
    </>
  );
}
