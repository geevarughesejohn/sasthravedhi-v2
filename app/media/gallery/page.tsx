import { MediaSectionPage } from "@/components/content/MediaSectionPage";
import { mediaSections } from "@/lib/content/media";
import { createPageMetadata } from "@/lib/metadata";

export const metadata = createPageMetadata({
  title: mediaSections.photo.title,
  description: mediaSections.photo.description,
  path: mediaSections.photo.path,
});

export default function GalleryPage() {
  return <MediaSectionPage type="photo" />;
}
