import Link from "next/link";
import { CTA } from "@/components/ui/CTA";
import { PageHero } from "@/components/ui/PageHero";
import { Section } from "@/components/ui/Section";
import { ysvContent } from "@/lib/content/ysv";
import { createPageMetadata } from "@/lib/metadata";

export const metadata = createPageMetadata({
  title: "Join Yuva Sasthra Vedhi",
  description: ysvContent.joinNote,
  path: "/yuva-sasthra-vedhi/join",
});

export default function JoinYsvPage() {
  return (
    <>
      <PageHero
        title="Join Yuva Sasthra Vedhi"
        description={ysvContent.joinNote}
        breadcrumbs={[
          { label: "Home", href: "/" },
          { label: "Yuva Sasthra Vedhi", href: "/yuva-sasthra-vedhi" },
          { label: "Join" },
        ]}
      />

      <Section eyebrow="How to join" title="Three simple steps">
        <ol className="max-w-2xl space-y-4">
          {ysvContent.joinSteps.map((step, index) => (
            <li key={step} className="flex gap-4">
              <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-primary text-sm font-bold text-white">
                {index + 1}
              </span>
              <p className="pt-1 text-lg text-text-muted">{step}</p>
            </li>
          ))}
        </ol>
      </Section>

      <Section eyebrow="Express interest" title="Get in touch" muted>
        <p className="max-w-2xl text-text-muted">
          Registration details will be finalized during content migration. For
          now, contact us to express interest in joining Yuva Sasthra Vedhi.
        </p>
        <div className="mt-6 flex flex-wrap gap-3">
          <CTA href="/contact" variant="primary">
            Contact Us
          </CTA>
          <Link
            href="/yuva-sasthra-vedhi"
            className="inline-flex items-center text-sm font-semibold text-primary hover:underline"
          >
            ← Back to Yuva Sasthra Vedhi
          </Link>
        </div>
      </Section>
    </>
  );
}
