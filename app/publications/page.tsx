import { Card } from "@/components/ui/Card";
import { CTA } from "@/components/ui/CTA";
import { PageHero } from "@/components/ui/PageHero";
import { Section } from "@/components/ui/Section";
import { VisualCard } from "@/components/ui/VisualCard";
import {
  categoryMeta,
  getFeaturedPublications,
  publications,
  publicationsIntro,
} from "@/lib/content/publications";
import { createPageMetadata } from "@/lib/metadata";

export const metadata = createPageMetadata({
  title: publicationsIntro.title,
  description: publicationsIntro.description,
  path: "/publications",
});

export default function PublicationsPage() {
  const categories = Object.entries(categoryMeta) as [
    keyof typeof categoryMeta,
    (typeof categoryMeta)[keyof typeof categoryMeta],
  ][];
  const featured = getFeaturedPublications();

  return (
    <>
      <PageHero
        title={publicationsIntro.title}
        description={publicationsIntro.description}
        breadcrumbs={[{ label: "Home", href: "/" }, { label: "Publications" }]}
      />

      <Section eyebrow="Book series" title="Visionary Indian Leaders">
        <p className="mb-8 max-w-3xl text-lg text-text-muted">
          {publicationsIntro.seriesBlurb}
        </p>
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {featured.slice(0, 8).map((item) => (
            <VisualCard
              key={item.slug}
              title={item.title}
              description={item.description}
              href={`/publications/${item.slug}`}
              imageSrc={item.coverImage!}
              meta={item.author ?? item.categoryLabel}
            />
          ))}
        </div>
      </Section>

      <Section eyebrow="Browse by type" title="Categories" muted>
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {categories.map(([key, meta]) => (
            <Card
              key={key}
              title={meta.title}
              description={meta.description}
              href={meta.path}
            />
          ))}
        </div>
      </Section>

      <Section eyebrow="Library" title="All publications">
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {publications.map((item) => (
            <Card
              key={item.slug}
              title={item.title}
              description={item.description}
              meta={item.categoryLabel}
              href={`/publications/${item.slug}`}
            />
          ))}
        </div>
        <div className="mt-8">
          <CTA href="/contact" variant="ghost">
            Contact us for publications without online purchase links
          </CTA>
        </div>
      </Section>
    </>
  );
}
