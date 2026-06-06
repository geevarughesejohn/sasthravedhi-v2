import { EngageSectionPage } from "@/components/content/EngageSectionPage";
import { engageSections } from "@/lib/content/engage";
import { createPageMetadata } from "@/lib/metadata";

export const metadata = createPageMetadata({
  title: engageSections.campaign.title,
  description: engageSections.campaign.description,
  path: engageSections.campaign.path,
});

export default function CampaignsPage() {
  return <EngageSectionPage type="campaign" />;
}
