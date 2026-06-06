import { ContactForm } from "@/components/contact/ContactForm";
import { PageHero } from "@/components/ui/PageHero";
import { Section } from "@/components/ui/Section";
import { contactContent } from "@/lib/content/org";
import { createPageMetadata } from "@/lib/metadata";

export const metadata = createPageMetadata({
  title: "Contact",
  description: contactContent.intro,
  path: "/contact",
});

export default function ContactPage() {
  return (
    <>
      <PageHero
        title={contactContent.title}
        description={contactContent.intro}
        breadcrumbs={[{ label: "Home", href: "/" }, { label: "Contact" }]}
      />

      <Section>
        <div className="grid gap-10 lg:grid-cols-2">
          <div className="space-y-6">
            {contactContent.channels.map((channel) => (
              <div key={channel.label}>
                <h2 className="text-sm font-semibold uppercase tracking-wider text-primary">
                  {channel.label}
                </h2>
                <p className="mt-2 text-text-muted">{channel.value}</p>
              </div>
            ))}
          </div>
          <ContactForm />
        </div>
      </Section>
    </>
  );
}
