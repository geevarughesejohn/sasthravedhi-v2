import { engageDocuments } from "@/lib/content/engage";
import { munnottArticles } from "@/lib/content/munnott";
import { mediaItems } from "@/lib/content/media";
import { programs } from "@/lib/content/programs";
import { publications } from "@/lib/content/publications";
import { wednesdayTalks } from "@/lib/content/talks";

export type SearchResult = {
  title: string;
  description: string;
  href: string;
  type: string;
};

export const staticPages: SearchResult[] = [
  {
    title: "Sasthra Vedhi",
    description: "Home — Kerala's platform for scientific thinking and public education.",
    href: "/",
    type: "Page",
  },
  {
    title: "Sasthram Munnott",
    description: "Flagship science magazine.",
    href: "/sasthram-munnott",
    type: "Magazine",
  },
  {
    title: "Yuva Sasthra Vedhi",
    description: "Youth wing of the science movement.",
    href: "/yuva-sasthra-vedhi",
    type: "Youth",
  },
  {
    title: "Science in Action",
    description: "Camps, outreach, and environmental programs.",
    href: "/science-in-action",
    type: "Programs",
  },
  {
    title: "Publications",
    description: "Books and educational materials.",
    href: "/publications",
    type: "Library",
  },
  {
    title: "Talks & Learning",
    description: "Wednesday Talks and reading circles.",
    href: "/talks-and-learning",
    type: "Learning",
  },
  {
    title: "Engage",
    description: "Resolutions, statements, and campaigns.",
    href: "/engage",
    type: "Engage",
  },
  {
    title: "Media Center",
    description: "Photos, videos, and event highlights.",
    href: "/media",
    type: "Media",
  },
  {
    title: "Membership",
    description: "Join Sasthra Vedhi as a member.",
    href: "/join-us/membership",
    type: "Join",
  },
  {
    title: "Contact",
    description: "Get in touch with Sasthra Vedhi.",
    href: "/contact",
    type: "Page",
  },
];

export function buildSearchIndex(): SearchResult[] {
  return [
    ...staticPages,
    ...publications.map((item) => ({
      title: item.title,
      description: item.description,
      href: `/publications/${item.slug}`,
      type: item.categoryLabel,
    })),
    ...munnottArticles.map((item) => ({
      title: item.title,
      description: item.excerpt,
      href: `/sasthram-munnott/articles/${item.slug}`,
      type: item.type === "editorial" ? "Editorial" : "Article",
    })),
    ...programs.map((item) => ({
      title: item.title,
      description: item.summary,
      href: `/science-in-action/${item.slug}`,
      type: "Program",
    })),
    ...engageDocuments.map((item) => ({
      title: item.title,
      description: item.excerpt,
      href: `/engage/documents/${item.slug}`,
      type: "Engage",
    })),
    ...wednesdayTalks.map((item) => ({
      title: item.title,
      description: item.description,
      href: "/talks-and-learning/wednesday-talks",
      type: "Talk",
    })),
    ...mediaItems.map((item) => ({
      title: item.title,
      description: item.description,
      href: `/media/${item.type === "photo" ? "gallery" : item.type === "video" ? "videos" : item.type === "event" ? "events" : "news"}`,
      type: "Media",
    })),
  ];
}

export function searchContent(query: string): SearchResult[] {
  const normalized = query.trim().toLowerCase();
  if (!normalized) return [];

  return buildSearchIndex().filter((item) => {
    const haystack = `${item.title} ${item.description} ${item.type}`.toLowerCase();
    return haystack.includes(normalized);
  });
}
