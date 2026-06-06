import Link from "next/link";
import type { Program } from "@/lib/content/programs";
import { Breadcrumb, type BreadcrumbItem } from "@/components/ui/Breadcrumb";
import { CTA } from "@/components/ui/CTA";
import { Section } from "@/components/ui/Section";

type ProgramLayoutProps = {
  program: Program;
};

export function ProgramLayout({ program }: ProgramLayoutProps) {
  const breadcrumbs: BreadcrumbItem[] = [
    { label: "Home", href: "/" },
    { label: "Science in Action", href: "/science-in-action" },
    { label: program.title },
  ];

  return (
    <>
      <header className="border-b border-border bg-surface">
        <div className="mx-auto max-w-6xl px-4 py-12 sm:px-6 lg:px-8 md:py-16">
          <Breadcrumb items={breadcrumbs} />
          <p className="mt-4 text-sm font-semibold uppercase tracking-wider text-accent">
            Science in Action
          </p>
          <h1 className="font-display mt-3 max-w-3xl text-4xl font-semibold tracking-tight text-foreground md:text-5xl">
            {program.title}
          </h1>
          <p className="mt-4 max-w-2xl text-lg leading-relaxed text-text-muted">
            {program.summary}
          </p>
        </div>
      </header>

      <Section>
        <div className="grid gap-10 lg:grid-cols-[minmax(0,1.4fr)_minmax(0,1fr)]">
          <div className="space-y-5 text-lg leading-relaxed text-foreground">
            {program.body.map((paragraph) => (
              <p key={paragraph.slice(0, 32)}>{paragraph}</p>
            ))}
          </div>
          <aside className="rounded-xl border border-border bg-surface-muted p-6">
            <h2 className="font-display text-lg font-semibold">Highlights</h2>
            <ul className="mt-4 space-y-3">
              {program.highlights.map((item) => (
                <li key={item} className="flex gap-2 text-sm text-text-muted">
                  <span className="font-semibold text-primary">·</span>
                  {item}
                </li>
              ))}
            </ul>
            <div className="mt-6">
              <CTA href="/contact" variant="ghost" className="w-full">
                Get involved
              </CTA>
            </div>
          </aside>
        </div>
      </Section>

      <Section muted>
        <Link
          href="/science-in-action"
          className="text-sm font-semibold text-primary hover:underline"
        >
          ← All Science in Action programs
        </Link>
      </Section>
    </>
  );
}
