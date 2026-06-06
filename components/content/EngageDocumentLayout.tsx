import Link from "next/link";
import type { EngageDocument } from "@/lib/content/engage";
import { engageSections } from "@/lib/content/engage";
import { Breadcrumb, type BreadcrumbItem } from "@/components/ui/Breadcrumb";

type EngageDocumentLayoutProps = {
  document: EngageDocument;
};

export function EngageDocumentLayout({ document }: EngageDocumentLayoutProps) {
  const section = engageSections[document.type];

  const breadcrumbs: BreadcrumbItem[] = [
    { label: "Home", href: "/" },
    { label: "Engage", href: "/engage" },
    { label: section.title, href: section.path },
    { label: document.title },
  ];

  return (
    <article>
      <header className="border-b border-border bg-surface">
        <div className="mx-auto max-w-3xl px-4 py-12 sm:px-6 lg:px-8 md:py-16">
          <Breadcrumb items={breadcrumbs} />
          <p className="mt-4 text-sm font-semibold uppercase tracking-wider text-primary">
            {section.title} · {document.date}
          </p>
          <h1 className="font-display mt-3 text-4xl font-semibold tracking-tight text-foreground md:text-5xl">
            {document.title}
          </h1>
          <p className="mt-4 text-lg leading-relaxed text-text-muted">
            {document.excerpt}
          </p>
        </div>
      </header>

      <div className="mx-auto max-w-3xl px-4 py-12 sm:px-6 lg:px-8">
        <div className="space-y-5 text-lg leading-relaxed text-foreground">
          {document.body.map((paragraph) => (
            <p key={paragraph.slice(0, 32)}>{paragraph}</p>
          ))}
        </div>

        <footer className="mt-12 border-t border-border pt-8">
          <Link
            href={section.path}
            className="text-sm font-semibold text-primary hover:underline"
          >
            ← Back to {section.title}
          </Link>
        </footer>
      </div>
    </article>
  );
}
