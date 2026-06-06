import { EngageSectionPage } from "@/components/content/EngageSectionPage";
import { engageSections } from "@/lib/content/engage";
import { createPageMetadata } from "@/lib/metadata";

export const metadata = createPageMetadata({
  title: engageSections["science-society"].title,
  description: engageSections["science-society"].description,
  path: engageSections["science-society"].path,
});

export default function ScienceAndSocietyPage() {
  return <EngageSectionPage type="science-society" />;
}
