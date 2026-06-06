import { JoinPageContent } from "@/components/content/JoinAboutTemplates";
import { supportContent } from "@/lib/content/org";
import { createPageMetadata } from "@/lib/metadata";

export const metadata = createPageMetadata({
  title: supportContent.title,
  description: supportContent.intro,
  path: "/join-us/support",
});

export default function SupportPage() {
  return (
    <JoinPageContent
      title={supportContent.title}
      intro={supportContent.intro}
      items={supportContent.ways}
      note={supportContent.note}
      breadcrumbs={[
        { label: "Join Us", href: "/join-us/membership" },
        { label: supportContent.title },
      ]}
    />
  );
}
