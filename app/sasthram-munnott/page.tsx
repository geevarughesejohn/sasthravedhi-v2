import Link from "next/link";
import { CTA } from "@/components/ui/CTA";
import { MagazineCover } from "@/components/ui/VisualCard";
import { PageHero } from "@/components/ui/PageHero";
import { Section } from "@/components/ui/Section";
import {
  archiveIssues,
  getArticlesForIssue,
  latestIssue,
  munnottIntro,
  relatedMagazines,
} from "@/lib/content/munnott";
import { createPageMetadata } from "@/lib/metadata";

export const metadata = createPageMetadata({
  title: "Sasthram Munnott",
  description: munnottIntro.description,
  path: "/sasthram-munnott",
});

export default function SasthramMunnottPage() {
  const latestArticles = getArticlesForIssue("latest");
  const allIssues = [latestIssue, ...archiveIssues];

  return (
    <>
      <PageHero
        title={munnottIntro.title}
        description={munnottIntro.description}
        breadcrumbs={[
          { label: "Home", href: "/" },
          { label: "Sasthram Munnott" },
        ]}
        actions={
          <>
            <CTA href="/sasthram-munnott/latest" variant="secondary">
              Read Latest Issue
            </CTA>
            <CTA href="/sasthram-munnott/archive" variant="ghost">
              Browse Archive
            </CTA>
          </>
        }
      />

      <Section eyebrow="2025 issues" title="Magazine covers">
        <div className="grid grid-cols-2 gap-4 md:grid-cols-3 lg:grid-cols-6">
          {allIssues.map((issue) => (
            <MagazineCover
              key={issue.slug}
              title="Sasthram Munnot"
              issue={issue.month}
              href={
                issue.slug === "latest"
                  ? "/sasthram-munnott/latest"
                  : `/sasthram-munnott/issues/${issue.slug}`
              }
              imageSrc={issue.coverImage}
            />
          ))}
        </div>
        <div className="mt-8 flex flex-wrap gap-3">
          {relatedMagazines.map((mag) => (
            <span
              key={mag.title}
              className="rounded-full border border-border bg-surface px-4 py-2 text-sm"
            >
              <strong className="text-primary">{mag.title}</strong>
              <span className="text-text-muted"> — {mag.description}</span>
            </span>
          ))}
        </div>
      </Section>

      <Section
        eyebrow="Latest"
        title={latestIssue.theme}
        description={latestIssue.editorNote}
        muted
      >
        <div className="grid gap-4 md:grid-cols-3">
          {latestArticles.slice(0, 3).map((article) => (
            <Link
              key={article.slug}
              href={`/sasthram-munnott/articles/${article.slug}`}
              className="rounded-xl border border-border bg-surface p-5 transition-shadow hover:shadow-md"
            >
              <p className="font-semibold text-foreground">{article.title}</p>
              <p className="mt-2 text-sm text-text-muted">{article.excerpt}</p>
            </Link>
          ))}
        </div>
        <div className="mt-6">
          <CTA href="/sasthram-munnott/latest" variant="ghost">
            View latest issue →
          </CTA>
        </div>
      </Section>
    </>
  );
}
