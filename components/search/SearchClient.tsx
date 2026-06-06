"use client";

import Link from "next/link";
import { useSearchParams } from "next/navigation";
import { useMemo } from "react";
import type { SearchResult } from "@/lib/search/index";
import { searchContent } from "@/lib/search/index";

function ResultList({ results, query }: { results: SearchResult[]; query: string }) {
  if (!query) {
    return (
      <p className="text-text-muted">
        Enter a keyword to search publications, articles, programs, and pages.
      </p>
    );
  }

  if (results.length === 0) {
    return (
      <p className="text-text-muted">
        No results for &ldquo;{query}&rdquo;. Try a different keyword.
      </p>
    );
  }

  return (
    <ul className="divide-y divide-border rounded-xl border border-border bg-surface">
      {results.map((result) => (
        <li key={`${result.href}-${result.title}`}>
          <Link
            href={result.href}
            className="block px-6 py-4 transition-colors hover:bg-surface-muted"
          >
            <p className="font-semibold text-foreground">{result.title}</p>
            <p className="mt-1 text-sm text-text-muted">{result.description}</p>
            <p className="mt-2 text-xs font-medium text-primary">{result.type}</p>
          </Link>
        </li>
      ))}
    </ul>
  );
}

export function SearchResults() {
  const searchParams = useSearchParams();
  const query = searchParams.get("q") ?? "";

  const results = useMemo(() => searchContent(query), [query]);

  return (
    <div role="status" aria-live="polite">
      {query && (
        <p className="mb-4 text-sm text-text-muted">
          {results.length} result{results.length === 1 ? "" : "s"} for &ldquo;{query}&rdquo;
        </p>
      )}
      <ResultList results={results} query={query} />
    </div>
  );
}

export function SearchForm({ defaultQuery = "" }: { defaultQuery?: string }) {
  return (
    <form action="/search" method="get" role="search" className="max-w-xl">
      <label htmlFor="site-search" className="sr-only">
        Search the site
      </label>
      <div className="flex gap-2">
        <input
          id="site-search"
          name="q"
          type="search"
          defaultValue={defaultQuery}
          placeholder="Search publications, articles, programs…"
          className="min-w-0 flex-1 rounded-lg border border-border bg-surface px-4 py-2.5 text-sm"
          autoComplete="off"
        />
        <button
          type="submit"
          className="rounded-lg bg-primary px-5 py-2.5 text-sm font-semibold text-white hover:bg-primary-dark"
        >
          Search
        </button>
      </div>
    </form>
  );
}
