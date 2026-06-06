import { MediaSectionPage } from "@/components/content/MediaSectionPage";
import { mediaSections } from "@/lib/content/media";
import { createPageMetadata } from "@/lib/metadata";

export const metadata = createPageMetadata({
  title: mediaSections.video.title,
  description: mediaSections.video.description,
  path: mediaSections.video.path,
});

export default function MediaVideosPage() {
  return <MediaSectionPage type="video" />;
}
