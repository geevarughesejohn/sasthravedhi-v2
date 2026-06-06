import Image from "next/image";
import { CTA } from "@/components/ui/CTA";
import { Card } from "@/components/ui/Card";
import { PageHero } from "@/components/ui/PageHero";
import { Section } from "@/components/ui/Section";
import { getArticlesForIssue, latestIssue } from "@/lib/content/munnott";
import { createPageMetadata } from "@/lib/metadata";

export const metadata = createPageMetadata({
  title: "Latest Issue — Sasthram Munnott",
  description: latestIssue.editorNote,
  path: "/sasthram-munnott/latest",
});

export default function LatestIssuePage() {
  const articles = getArticlesForIssue("latest");

  return (
    <>
      <PageHero
        eyebrow={`${latestIssue.coverLabel} · ${latestIssue.month}`}
        title={latestIssue.theme}
        description={latestIssue.editorNote}
        breadcrumbs={[
          { label: "Home", href: "/" },
          { label: "Sasthram Munnott", href: "/sasthram-munnott" },
          { label: "Latest Issue" },
        ]}
        actions={
          <CTA href="/sasthram-munnott/archive" variant="ghost">
            Browse Archive
          </CTA>
        }
      />

      <Section>
        <div className="grid gap-10 lg:grid-cols-[240px_1fr] lg:items-start">
          <div className="relative mx-auto aspect-[3/4] w-full max-w-[240px] overflow-hidden rounded-2xl border border-border shadow-xl">
            <Image
              src={latestIssue.coverImage}
              alt={latestIssue.theme}
              fill
              className="object-cover"
              sizes="240px"
              priority
            />
          </div>
          <div>
            <h2 className="font-display text-2xl font-semibold">In this issue</h2>
            <div className="mt-6 grid gap-4 md:grid-cols-2">
              {articles.map((article) => (
                <Card
                  key={article.slug}
                  title={article.title}
                  description={article.excerpt}
                  meta={`${article.author} · ${article.type}`}
                  href={`/sasthram-munnott/articles/${article.slug}`}
                />
              ))}
            </div>
          </div>
        </div>
      </Section>
    </>
  );
}
