import { CTA } from "@/components/ui/CTA";
import { PageHero } from "@/components/ui/PageHero";
import { Section } from "@/components/ui/Section";
import { aboutContent } from "@/lib/content/org";
import { createPageMetadata } from "@/lib/metadata";

export const metadata = createPageMetadata({
  title: "About Sasthra Vedhi",
  description: aboutContent.intro,
  path: "/about",
});

export default function AboutPage() {
  return (
    <>
      <PageHero
        title="About Sasthra Vedhi"
        description={aboutContent.intro}
        breadcrumbs={[{ label: "Home", href: "/" }, { label: "About" }]}
        actions={
          <CTA href="/join-us/membership" variant="primary">
            Join the Movement
          </CTA>
        }
      />

      <Section eyebrow="Mission" title="What drives us">
        <p className="max-w-3xl text-lg leading-relaxed text-text-muted">
          {aboutContent.mission}
        </p>
      </Section>

      <Section eyebrow="Vision" title="Where we are headed" muted>
        <p className="max-w-3xl text-lg leading-relaxed text-text-muted">
          {aboutContent.vision}
        </p>
      </Section>

      <Section eyebrow="Objectives" title="What we work for">
        <ul className="max-w-3xl space-y-3">
          {aboutContent.objectives.map((objective) => (
            <li
              key={objective}
              className="flex gap-3 text-text-muted leading-relaxed"
            >
              <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-accent" />
              {objective}
            </li>
          ))}
        </ul>
      </Section>

      <Section eyebrow="History" title="Decades of public science" muted>
        <p className="max-w-3xl leading-relaxed text-text-muted">
          {aboutContent.history}
        </p>
        <div className="mt-8 flex flex-wrap gap-3">
          <CTA href="/about/history" variant="ghost">
            Full history
          </CTA>
          <CTA href="/about/leadership" variant="ghost">
            Leadership
          </CTA>
          <CTA href="/about/vision-mission" variant="ghost">
            Vision & Mission
          </CTA>
        </div>
      </Section>
    </>
  );
}
