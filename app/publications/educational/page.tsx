import { PublicationCategoryPage } from "@/components/content/PublicationCategoryPage";
import { categoryMeta } from "@/lib/content/publications";
import { createPageMetadata } from "@/lib/metadata";

export const metadata = createPageMetadata({
  title: categoryMeta.educational.title,
  description: categoryMeta.educational.description,
  path: categoryMeta.educational.path,
});

export default function EducationalPage() {
  return <PublicationCategoryPage category="educational" />;
}
