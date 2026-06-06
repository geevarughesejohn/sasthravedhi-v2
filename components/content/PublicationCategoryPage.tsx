import { Card } from "@/components/ui/Card";
import { PageHero } from "@/components/ui/PageHero";
import { Section } from "@/components/ui/Section";
import { VisualCard } from "@/components/ui/VisualCard";
import {
  categoryMeta,
  getPublicationsByCategory,
  type PublicationCategory,
} from "@/lib/content/publications";

type PublicationCategoryPageProps = {
  category: PublicationCategory;
};

export function PublicationCategoryPage({ category }: PublicationCategoryPageProps) {
  const meta = categoryMeta[category];
  const items = getPublicationsByCategory(category);

  return (
    <>
      <PageHero
        title={meta.title}
        description={meta.description}
        breadcrumbs={[
          { label: "Home", href: "/" },
          { label: "Publications", href: "/publications" },
          { label: meta.title },
        ]}
      />
      <Section>
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {items.map((item) =>
            item.coverImage ? (
              <VisualCard
                key={item.slug}
                title={item.title}
                description={item.description}
                href={`/publications/${item.slug}`}
                imageSrc={item.coverImage}
                meta={item.author ?? item.categoryLabel}
              />
            ) : (
              <Card
                key={item.slug}
                title={item.title}
                description={item.description}
                meta={item.year ? String(item.year) : item.categoryLabel}
                href={`/publications/${item.slug}`}
              />
            ),
          )}
        </div>
      </Section>
    </>
  );
}
