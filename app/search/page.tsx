import { Suspense } from "react";
import { PageHero } from "@/components/ui/PageHero";
import { Section } from "@/components/ui/Section";
import { SearchForm, SearchResults } from "@/components/search/SearchClient";
import { createPageMetadata } from "@/lib/metadata";

export const metadata = createPageMetadata({
  title: "Search",
  description: "Search Sasthra Vedhi publications, articles, programs, and pages.",
  path: "/search",
});

type SearchPageProps = {
  searchParams: Promise<{ q?: string }>;
};

export default async function SearchPage({ searchParams }: SearchPageProps) {
  const { q } = await searchParams;

  return (
    <>
      <PageHero
        title="Search"
        description="Find publications, magazine articles, programs, and pages across the site."
        breadcrumbs={[{ label: "Home", href: "/" }, { label: "Search" }]}
      />
      <Section>
        <SearchForm defaultQuery={q ?? ""} />
        <div className="mt-8">
          <Suspense fallback={<p className="text-text-muted">Searching…</p>}>
            <SearchResults />
          </Suspense>
        </div>
      </Section>
    </>
  );
}
