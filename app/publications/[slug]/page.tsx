import { notFound } from "next/navigation";
import { PublicationLayout } from "@/components/content/PublicationLayout";
import {
  getAllPublicationSlugs,
  getPublication,
} from "@/lib/content/publications";
import { createPageMetadata } from "@/lib/metadata";

type PageProps = {
  params: Promise<{ slug: string }>;
};

export async function generateStaticParams() {
  return getAllPublicationSlugs().map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: PageProps) {
  const { slug } = await params;
  const publication = getPublication(slug);
  if (!publication) return {};

  return createPageMetadata({
    title: publication.title,
    description: publication.description,
    path: `/publications/${slug}`,
  });
}

export default async function PublicationDetailPage({ params }: PageProps) {
  const { slug } = await params;
  const publication = getPublication(slug);

  if (!publication) notFound();

  return <PublicationLayout publication={publication} />;
}
