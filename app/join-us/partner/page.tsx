import { JoinPageContent } from "@/components/content/JoinAboutTemplates";
import { partnerContent } from "@/lib/content/org";
import { createPageMetadata } from "@/lib/metadata";

export const metadata = createPageMetadata({
  title: partnerContent.title,
  description: partnerContent.intro,
  path: "/join-us/partner",
});

export default function PartnerPage() {
  return (
    <JoinPageContent
      title={partnerContent.title}
      intro={partnerContent.intro}
      items={partnerContent.partnerships}
      note={partnerContent.note}
      breadcrumbs={[
        { label: "Join Us", href: "/join-us/membership" },
        { label: partnerContent.title },
      ]}
    />
  );
}
