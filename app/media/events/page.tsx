import { MediaSectionPage } from "@/components/content/MediaSectionPage";
import { mediaSections } from "@/lib/content/media";
import { createPageMetadata } from "@/lib/metadata";

export const metadata = createPageMetadata({
  title: mediaSections.event.title,
  description: mediaSections.event.description,
  path: mediaSections.event.path,
});

export default function EventHighlightsPage() {
  return <MediaSectionPage type="event" />;
}
