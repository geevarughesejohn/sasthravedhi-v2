import Image from "next/image";
import Link from "next/link";
import type { MunnottArticle, MunnottIssue } from "@/lib/content/munnott";
import type { BreadcrumbItem } from "@/components/ui/Breadcrumb";
import { Breadcrumb } from "@/components/ui/Breadcrumb";
import { Card } from "@/components/ui/Card";
import { CTA } from "@/components/ui/CTA";

type ArticleLayoutProps = {
  article: MunnottArticle;
  issue: MunnottIssue;
};

export function ArticleLayout({ article, issue }: ArticleLayoutProps) {
  const breadcrumbs: BreadcrumbItem[] = [
    { label: "Home", href: "/" },
    { label: "Sasthram Munnott", href: "/sasthram-munnott" },
    {
      label: issue.coverLabel ?? issue.month,
      href:
        issue.slug === "latest"
          ? "/sasthram-munnott/latest"
          : `/sasthram-munnott/issues/${issue.slug}`,
    },
    { label: article.title },
  ];

  return (
    <article>
      <header className="border-b border-border bg-surface">
        <div className="mx-auto max-w-3xl px-4 py-12 sm:px-6 lg:px-8 md:py-16">
          <Breadcrumb items={breadcrumbs} />
          <p className="mt-4 text-sm font-semibold uppercase tracking-wider text-accent">
            {article.type === "editorial" ? "Editorial" : "Article"}
          </p>
          <h1 className="font-display mt-3 text-4xl font-semibold tracking-tight text-foreground md:text-5xl">
            {article.title}
          </h1>
          <p className="mt-4 text-text-muted">
            {article.author} · {article.readMinutes} min read · {issue.month}
          </p>
          <p className="mt-4 text-lg leading-relaxed text-text-muted">
            {article.excerpt}
          </p>
        </div>
      </header>

      <div className="mx-auto max-w-3xl px-4 py-12 sm:px-6 lg:px-8">
        <div className="prose-spacing space-y-5 text-lg leading-relaxed text-foreground">
          {article.body.map((paragraph) => (
            <p key={paragraph.slice(0, 32)}>{paragraph}</p>
          ))}
        </div>

        <footer className="mt-12 border-t border-border pt-8">
          <Link
            href={
              issue.slug === "latest"
                ? "/sasthram-munnott/latest"
                : `/sasthram-munnott/issues/${issue.slug}`
            }
            className="text-sm font-semibold text-primary hover:underline"
          >
            ← Back to {issue.theme}
          </Link>
        </footer>
      </div>
    </article>
  );
}

type IssueLayoutProps = {
  issue: MunnottIssue;
  articles: MunnottArticle[];
};

export function IssueLayout({ issue, articles }: IssueLayoutProps) {
  return (
    <>
      <header className="border-b border-border bg-surface">
        <div className="mx-auto max-w-6xl px-4 py-12 sm:px-6 lg:px-8 md:py-16">
          <Breadcrumb
            items={[
              { label: "Home", href: "/" },
              { label: "Sasthram Munnott", href: "/sasthram-munnott" },
              {
                label:
                  issue.slug === "latest"
                    ? "Latest Issue"
                    : issue.month,
              },
            ]}
          />
          <div className="mt-8 grid gap-10 lg:grid-cols-[220px_1fr] lg:items-start">
            <div className="relative mx-auto aspect-[3/4] w-full max-w-[220px] overflow-hidden rounded-2xl border border-border shadow-lg">
              <Image
                src={issue.coverImage}
                alt={issue.theme}
                fill
                className="object-cover"
                sizes="220px"
                priority
              />
            </div>
            <div>
              <p className="text-sm font-semibold uppercase tracking-wider text-accent">
                {issue.coverLabel ?? issue.month}
              </p>
              <h1 className="font-display mt-3 max-w-3xl text-4xl font-semibold tracking-tight text-foreground md:text-5xl">
                {issue.theme}
              </h1>
              <p className="mt-4 max-w-2xl text-lg leading-relaxed text-text-muted">
                {issue.editorNote}
              </p>
              {issue.purchaseUrl && (
                <div className="mt-6 flex flex-wrap gap-3">
                  <CTA href={issue.purchaseUrl} variant="secondary" external>
                    Buy on Amazon
                  </CTA>
                  <CTA href="/sasthram-munnott/archive" variant="ghost">
                    Browse Archive
                  </CTA>
                </div>
              )}
            </div>
          </div>
        </div>
      </header>

      <section className="py-16 md:py-20">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <h2 className="font-display mb-8 text-2xl font-semibold">
            In this issue
          </h2>
          {articles.length > 0 ? (
            <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
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
          ) : (
            <div className="rounded-2xl border border-border bg-surface-muted p-8 text-center">
              <p className="text-text-muted">
                Read the full magazine by purchasing this issue.
              </p>
              {issue.purchaseUrl && (
                <div className="mt-4">
                  <CTA href={issue.purchaseUrl} variant="secondary" external>
                    Buy on Amazon
                  </CTA>
                </div>
              )}
              <p className="mt-4 text-sm text-text-muted">
                <Link href="/sasthram-munnott/archive" className="text-primary hover:underline">
                  Browse the archive
                </Link>
              </p>
            </div>
          )}
        </div>
      </section>
    </>
  );
}
