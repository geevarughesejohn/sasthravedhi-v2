import { notFound } from "next/navigation";
import { ArticleLayout } from "@/components/content/MunnottTemplates";
import {
  getAllMunnottArticleSlugs,
  getMunnottArticle,
  getMunnottIssue,
} from "@/lib/content/munnott";
import { createPageMetadata } from "@/lib/metadata";

type PageProps = {
  params: Promise<{ slug: string }>;
};

export async function generateStaticParams() {
  return getAllMunnottArticleSlugs().map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: PageProps) {
  const { slug } = await params;
  const article = getMunnottArticle(slug);
  if (!article) return {};

  return createPageMetadata({
    title: article.title,
    description: article.excerpt,
    path: `/sasthram-munnott/articles/${slug}`,
  });
}

export default async function MunnottArticlePage({ params }: PageProps) {
  const { slug } = await params;
  const article = getMunnottArticle(slug);

  if (!article) notFound();

  const issue = getMunnottIssue(article.issueSlug);
  if (!issue) notFound();

  return <ArticleLayout article={article} issue={issue} />;
}
