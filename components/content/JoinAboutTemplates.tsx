import type { ReactNode } from "react";
import { CTA } from "@/components/ui/CTA";
import { PageHero } from "@/components/ui/PageHero";
import { Section } from "@/components/ui/Section";

type JoinPageProps = {
  title: string;
  intro: string;
  items: string[];
  note: string;
  breadcrumbs: { label: string; href?: string }[];
};

export function JoinPageContent({
  title,
  intro,
  items,
  note,
  breadcrumbs,
}: JoinPageProps) {
  return (
    <>
      <PageHero
        title={title}
        description={intro}
        breadcrumbs={[
          { label: "Home", href: "/" },
          ...breadcrumbs,
        ]}
        actions={<CTA href="/contact" variant="primary">Contact Us</CTA>}
      />

      <Section>
        <ul className="max-w-3xl space-y-4">
          {items.map((item) => (
            <li
              key={item}
              className="flex gap-3 rounded-lg border border-border bg-surface p-4 text-text-muted"
            >
              <span className="font-semibold text-primary">·</span>
              {item}
            </li>
          ))}
        </ul>
      </Section>

      <Section muted>
        <p className="max-w-2xl text-text-muted">{note}</p>
      </Section>
    </>
  );
}

type AboutSubpageProps = {
  title: string;
  intro: string;
  children: ReactNode;
  breadcrumbs: { label: string; href?: string }[];
};

export function AboutSubpage({
  title,
  intro,
  children,
  breadcrumbs,
}: AboutSubpageProps) {
  return (
    <>
      <PageHero
        title={title}
        description={intro}
        breadcrumbs={[
          { label: "Home", href: "/" },
          { label: "About", href: "/about" },
          ...breadcrumbs,
        ]}
      />
      <Section>{children}</Section>
    </>
  );
}
