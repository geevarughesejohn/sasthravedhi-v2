import { notFound } from "next/navigation";
import { EngageDocumentLayout } from "@/components/content/EngageDocumentLayout";
import {
  getAllEngageDocumentSlugs,
  getEngageDocument,
} from "@/lib/content/engage";
import { createPageMetadata } from "@/lib/metadata";

type PageProps = {
  params: Promise<{ slug: string }>;
};

export async function generateStaticParams() {
  return getAllEngageDocumentSlugs().map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: PageProps) {
  const { slug } = await params;
  const document = getEngageDocument(slug);
  if (!document) return {};

  return createPageMetadata({
    title: document.title,
    description: document.excerpt,
    path: `/engage/documents/${slug}`,
  });
}

export default async function EngageDocumentPage({ params }: PageProps) {
  const { slug } = await params;
  const document = getEngageDocument(slug);

  if (!document) notFound();

  return <EngageDocumentLayout document={document} />;
}
