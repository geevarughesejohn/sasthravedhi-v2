import { notFound } from "next/navigation";
import { IssueLayout } from "@/components/content/MunnottTemplates";
import {
  getAllMunnottIssueSlugs,
  getArticlesForIssue,
  getMunnottIssue,
} from "@/lib/content/munnott";
import { createPageMetadata } from "@/lib/metadata";

type PageProps = {
  params: Promise<{ slug: string }>;
};

export async function generateStaticParams() {
  return getAllMunnottIssueSlugs()
    .filter((slug) => slug !== "latest")
    .map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: PageProps) {
  const { slug } = await params;
  const issue = getMunnottIssue(slug);
  if (!issue) return {};

  return createPageMetadata({
    title: `${issue.theme} — Sasthram Munnott`,
    description: issue.editorNote,
    path: `/sasthram-munnott/issues/${slug}`,
  });
}

export default async function MunnottIssuePage({ params }: PageProps) {
  const { slug } = await params;
  const issue = getMunnottIssue(slug);

  if (!issue || issue.slug === "latest") notFound();

  const articles = getArticlesForIssue(issue.slug);

  return <IssueLayout issue={issue} articles={articles} />;
}
