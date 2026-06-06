import { EngageSectionPage } from "@/components/content/EngageSectionPage";
import { engageSections } from "@/lib/content/engage";
import { createPageMetadata } from "@/lib/metadata";

export const metadata = createPageMetadata({
  title: engageSections.policy.title,
  description: engageSections.policy.description,
  path: engageSections.policy.path,
});

export default function PolicyPage() {
  return <EngageSectionPage type="policy" />;
}
