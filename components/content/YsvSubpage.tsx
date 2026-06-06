import type { ReactNode } from "react";
import { CTA } from "@/components/ui/CTA";
import { PageHero } from "@/components/ui/PageHero";
import { Section } from "@/components/ui/Section";

type YsvSubpageProps = {
  title: string;
  description: string;
  breadcrumbLabel: string;
  children: ReactNode;
};

export function YsvSubpage({
  title,
  description,
  breadcrumbLabel,
  children,
}: YsvSubpageProps) {
  return (
    <>
      <PageHero
        title={title}
        description={description}
        breadcrumbs={[
          { label: "Home", href: "/" },
          { label: "Yuva Sasthra Vedhi", href: "/yuva-sasthra-vedhi" },
          { label: breadcrumbLabel },
        ]}
        actions={
          <CTA href="/yuva-sasthra-vedhi/join" variant="primary">
            Join Yuva Sasthra Vedhi
          </CTA>
        }
      />
      <Section>{children}</Section>
    </>
  );
}
