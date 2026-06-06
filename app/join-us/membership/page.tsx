import Link from "next/link";
import { CTA } from "@/components/ui/CTA";
import { PageHero } from "@/components/ui/PageHero";
import { Section } from "@/components/ui/Section";
import { membershipContent } from "@/lib/content/org";
import { createPageMetadata } from "@/lib/metadata";

export const metadata = createPageMetadata({
  title: "Membership",
  description: membershipContent.intro,
  path: "/join-us/membership",
});

export default function MembershipPage() {
  return (
    <>
      <PageHero
        title={membershipContent.title}
        description={membershipContent.intro}
        breadcrumbs={[
          { label: "Home", href: "/" },
          { label: "Join Us", href: "/join-us/membership" },
          { label: "Membership" },
        ]}
        actions={
          <>
            <CTA href={membershipContent.registerUrl} variant="primary" external>
              Register Online
            </CTA>
            <CTA href="/contact" variant="ghost">
              Contact Us
            </CTA>
          </>
        }
      />

      <Section eyebrow="Benefits" title="Why become a member">
        <ul className="max-w-3xl space-y-4">
          {membershipContent.benefits.map((benefit) => (
            <li
              key={benefit}
              className="flex gap-3 rounded-lg border border-border bg-surface p-4 text-text-muted"
            >
              <span className="font-semibold text-primary">✓</span>
              {benefit}
            </li>
          ))}
        </ul>
      </Section>

      <Section eyebrow="Registration" title="How to join" muted>
        <p className="max-w-2xl text-text-muted">{membershipContent.note}</p>
        <div className="mt-6 flex flex-wrap gap-3">
          <CTA href={membershipContent.registerUrl} variant="secondary" external>
            Register at sasthravedhi.in
          </CTA>
          <CTA href="/contact" variant="ghost">
            Contact Us
          </CTA>
          <Link
            href="/yuva-sasthra-vedhi/join"
            className="inline-flex items-center text-sm font-semibold text-primary hover:underline"
          >
            Join Yuva Sasthra Vedhi instead →
          </Link>
        </div>
      </Section>
    </>
  );
}
