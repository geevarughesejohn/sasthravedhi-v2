import { HomePageContent } from "@/components/home/HomePageContent";
import { getHeroEventImages } from "@/lib/hero-events";
import { createPageMetadata } from "@/lib/metadata";
import { site } from "@/lib/site";

export const metadata = createPageMetadata({
  title: site.name,
  description: site.description,
  path: "/",
});

export default function Home() {
  const heroEventImages = getHeroEventImages();

  return <HomePageContent heroEventImages={heroEventImages} />;
}
