import { munnottIssues } from "@/lib/content/munnott";

/** Magazine cover cards derived from munnott issues */
export const munnottMagazines = munnottIssues.map((issue) => ({
  slug: issue.slug === "latest" ? "june-2025" : issue.slug,
  title: "Sasthram Munnot",
  month: issue.month,
  cover: issue.coverImage,
  href:
    issue.slug === "latest"
      ? "/sasthram-munnott/latest"
      : `/sasthram-munnott/issues/${issue.slug}`,
  purchaseUrl: issue.purchaseUrl,
}));

export const otherMagazines = [
  {
    title: "Scitech Keralam",
    description: "Science magazine for young adults.",
  },
  {
    title: "Kutty Sasthram",
    description: "Popular science for children.",
  },
];
