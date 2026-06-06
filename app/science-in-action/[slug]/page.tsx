import { notFound } from "next/navigation";
import { ProgramLayout } from "@/components/content/ProgramLayout";
import { getAllProgramSlugs, getProgram } from "@/lib/content/programs";
import { createPageMetadata } from "@/lib/metadata";

type PageProps = {
  params: Promise<{ slug: string }>;
};

export async function generateStaticParams() {
  return getAllProgramSlugs().map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: PageProps) {
  const { slug } = await params;
  const program = getProgram(slug);
  if (!program) return {};

  return createPageMetadata({
    title: program.title,
    description: program.summary,
    path: `/science-in-action/${slug}`,
  });
}

export default async function ProgramPage({ params }: PageProps) {
  const { slug } = await params;
  const program = getProgram(slug);

  if (!program) notFound();

  return <ProgramLayout program={program} />;
}
