import { MediaSectionPage } from "@/components/content/MediaSectionPage";
import { mediaSections } from "@/lib/content/media";
import { createPageMetadata } from "@/lib/metadata";

export const metadata = createPageMetadata({
  title: mediaSections.news.title,
  description: mediaSections.news.description,
  path: mediaSections.news.path,
});

export default function NewsCoveragePage() {
  return <MediaSectionPage type="news" />;
}
