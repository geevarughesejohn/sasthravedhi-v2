import { PublicationCategoryPage } from "@/components/content/PublicationCategoryPage";
import { categoryMeta } from "@/lib/content/publications";
import { createPageMetadata } from "@/lib/metadata";

export const metadata = createPageMetadata({
  title: categoryMeta.featured.title,
  description: categoryMeta.featured.description,
  path: categoryMeta.featured.path,
});

export default function FeaturedPublicationsPage() {
  return <PublicationCategoryPage category="featured" />;
}
