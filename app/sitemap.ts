import type { MetadataRoute } from "next";
import { getAllEngageDocumentSlugs } from "@/lib/content/engage";
import { getAllMunnottArticleSlugs, getAllMunnottIssueSlugs } from "@/lib/content/munnott";
import { getAllProgramSlugs } from "@/lib/content/programs";
import { getAllPublicationSlugs } from "@/lib/content/publications";
import { sitemapRoutes } from "@/lib/routes";
import { site } from "@/lib/site";

export default function sitemap(): MetadataRoute.Sitemap {
  const staticEntries = sitemapRoutes.map((path) => ({
    url: `${site.url}${path}`,
    lastModified: new Date(),
  }));

  const dynamicEntries = [
    ...getAllPublicationSlugs().map((slug) => `/publications/${slug}`),
    ...getAllMunnottArticleSlugs().map((slug) => `/sasthram-munnott/articles/${slug}`),
    ...getAllMunnottIssueSlugs()
      .filter((slug) => slug !== "latest")
      .map((slug) => `/sasthram-munnott/issues/${slug}`),
    ...getAllProgramSlugs().map((slug) => `/science-in-action/${slug}`),
    ...getAllEngageDocumentSlugs().map((slug) => `/engage/documents/${slug}`),
  ].map((path) => ({
    url: `${site.url}${path}`,
    lastModified: new Date(),
  }));

  return [...staticEntries, ...dynamicEntries];
}
