import { JoinPageContent } from "@/components/content/JoinAboutTemplates";
import { volunteerContent } from "@/lib/content/org";
import { createPageMetadata } from "@/lib/metadata";

export const metadata = createPageMetadata({
  title: volunteerContent.title,
  description: volunteerContent.intro,
  path: "/join-us/volunteer",
});

export default function VolunteerPage() {
  return (
    <JoinPageContent
      title={volunteerContent.title}
      intro={volunteerContent.intro}
      items={volunteerContent.roles}
      note={volunteerContent.note}
      breadcrumbs={[
        { label: "Join Us", href: "/join-us/membership" },
        { label: volunteerContent.title },
      ]}
    />
  );
}
