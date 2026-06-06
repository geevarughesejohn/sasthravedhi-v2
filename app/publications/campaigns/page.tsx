import { PublicationCategoryPage } from "@/components/content/PublicationCategoryPage";
import { categoryMeta } from "@/lib/content/publications";
import { createPageMetadata } from "@/lib/metadata";

export const metadata = createPageMetadata({
  title: categoryMeta.campaigns.title,
  description: categoryMeta.campaigns.description,
  path: categoryMeta.campaigns.path,
});

export default function CampaignsPage() {
  return <PublicationCategoryPage category="campaigns" />;
}
