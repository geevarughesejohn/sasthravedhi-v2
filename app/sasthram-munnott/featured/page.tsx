import { Card } from "@/components/ui/Card";
import { PageHero } from "@/components/ui/PageHero";
import { Section } from "@/components/ui/Section";
import { getFeaturedArticles } from "@/lib/content/munnott";
import { createPageMetadata } from "@/lib/metadata";

export const metadata = createPageMetadata({
  title: "Featured Articles — Sasthram Munnott",
  description: "Highlighted science writing from Sasthram Munnott.",
  path: "/sasthram-munnott/featured",
});

export default function FeaturedArticlesPage() {
  const articles = getFeaturedArticles();

  return (
    <>
      <PageHero
        title="Featured Articles"
        description="Standout popular science writing from recent issues of Sasthram Munnott."
        breadcrumbs={[
          { label: "Home", href: "/" },
          { label: "Sasthram Munnott", href: "/sasthram-munnott" },
          { label: "Featured Articles" },
        ]}
      />

      <Section>
        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
          {articles.map((article) => (
            <Card
              key={article.slug}
              title={article.title}
              description={article.excerpt}
              meta={`${article.author} · ${article.readMinutes} min`}
              href={`/sasthram-munnott/articles/${article.slug}`}
            />
          ))}
        </div>
      </Section>
    </>
  );
}
