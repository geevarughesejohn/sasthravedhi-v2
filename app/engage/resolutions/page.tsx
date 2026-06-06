import { EngageSectionPage } from "@/components/content/EngageSectionPage";
import { engageSections } from "@/lib/content/engage";
import { createPageMetadata } from "@/lib/metadata";

export const metadata = createPageMetadata({
  title: engageSections.resolution.title,
  description: engageSections.resolution.description,
  path: engageSections.resolution.path,
});

export default function ResolutionsPage() {
  return <EngageSectionPage type="resolution" />;
}
