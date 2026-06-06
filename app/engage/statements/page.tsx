import { EngageSectionPage } from "@/components/content/EngageSectionPage";
import { engageSections } from "@/lib/content/engage";
import { createPageMetadata } from "@/lib/metadata";

export const metadata = createPageMetadata({
  title: engageSections.statement.title,
  description: engageSections.statement.description,
  path: engageSections.statement.path,
});

export default function StatementsPage() {
  return <EngageSectionPage type="statement" />;
}
