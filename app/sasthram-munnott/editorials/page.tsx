import { Card } from "@/components/ui/Card";
import { PageHero } from "@/components/ui/PageHero";
import { Section } from "@/components/ui/Section";
import { getEditorials } from "@/lib/content/munnott";
import { createPageMetadata } from "@/lib/metadata";

export const metadata = createPageMetadata({
  title: "Editorials — Sasthram Munnott",
  description: "Editorial writing on science, society, and public responsibility.",
  path: "/sasthram-munnott/editorials",
});

export default function EditorialsPage() {
  const editorials = getEditorials();

  return (
    <>
      <PageHero
        title="Editorials"
        description="Editorial voices on scientific temper, public life, and the responsibilities of a science movement."
        breadcrumbs={[
          { label: "Home", href: "/" },
          { label: "Sasthram Munnott", href: "/sasthram-munnott" },
          { label: "Editorials" },
        ]}
      />

      <Section>
        <div className="grid gap-4 md:grid-cols-2">
          {editorials.map((article) => (
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
