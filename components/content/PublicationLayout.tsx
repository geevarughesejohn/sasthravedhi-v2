import Image from "next/image";
import Link from "next/link";
import type { Publication } from "@/lib/content/publications";
import { categoryMeta } from "@/lib/content/publications";
import { Breadcrumb, type BreadcrumbItem } from "@/components/ui/Breadcrumb";
import { CTA } from "@/components/ui/CTA";

type PublicationLayoutProps = {
  publication: Publication;
};

export function PublicationLayout({ publication }: PublicationLayoutProps) {
  const category = categoryMeta[publication.category];

  const breadcrumbs: BreadcrumbItem[] = [
    { label: "Home", href: "/" },
    { label: "Publications", href: "/publications" },
    { label: category.title, href: category.path },
    { label: publication.title },
  ];

  return (
    <article>
      <header className="border-b border-border bg-surface">
        <div className="mx-auto max-w-6xl px-4 py-12 sm:px-6 lg:px-8 md:py-16">
          <Breadcrumb items={breadcrumbs} />
          <div className="mt-8 grid gap-10 lg:grid-cols-[240px_1fr] lg:items-start">
            {publication.coverImage && (
              <div className="relative mx-auto aspect-[2/3] w-full max-w-[240px] overflow-hidden rounded-2xl border border-border shadow-lg">
                <Image
                  src={publication.coverImage}
                  alt={publication.title}
                  fill
                  className="object-cover"
                  sizes="240px"
                  priority
                />
              </div>
            )}
            <div>
              <p className="text-sm font-semibold uppercase tracking-wider text-primary">
                {publication.categoryLabel}
                {publication.year ? ` · ${publication.year}` : ""}
                {publication.license ? ` · ${publication.license}` : ""}
              </p>
              <h1 className="font-display mt-3 text-4xl font-semibold tracking-tight text-foreground md:text-5xl">
                {publication.title}
              </h1>
              {publication.author && (
                <p className="mt-4 text-text-muted">{publication.author}</p>
              )}
              <p className="mt-4 max-w-2xl text-lg leading-relaxed text-text-muted">
                {publication.description}
              </p>
              {publication.purchaseUrl && (
                <div className="mt-6">
                  <CTA href={publication.purchaseUrl} variant="secondary" external>
                    Buy on Amazon
                  </CTA>
                </div>
              )}
            </div>
          </div>
        </div>
      </header>

      <div className="mx-auto max-w-3xl px-4 py-12 sm:px-6 lg:px-8">
        <div className="space-y-5 text-lg leading-relaxed text-foreground">
          {publication.body.map((paragraph) => (
            <p key={paragraph.slice(0, 32)}>{paragraph}</p>
          ))}
        </div>

        <footer className="mt-12 border-t border-border pt-8">
          <Link
            href={category.path}
            className="text-sm font-semibold text-primary hover:underline"
          >
            ← Back to {category.title}
          </Link>
        </footer>
      </div>
    </article>
  );
}
