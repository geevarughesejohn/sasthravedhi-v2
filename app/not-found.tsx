import Link from "next/link";
import { CTA } from "@/components/ui/CTA";

export default function NotFound() {
  return (
    <div className="mx-auto flex max-w-lg flex-1 flex-col items-center justify-center px-4 py-24 text-center">
      <p className="text-sm font-semibold uppercase tracking-wider text-accent">
        404
      </p>
      <h1 className="font-display mt-3 text-4xl font-semibold text-foreground">
        Page not found
      </h1>
      <p className="mt-4 text-text-muted">
        The page you are looking for may have moved or is not yet published.
      </p>
      <div className="mt-8 flex flex-wrap justify-center gap-3">
        <CTA href="/" variant="secondary">
          Go home
        </CTA>
        <Link
          href="/search"
          className="inline-flex items-center text-sm font-semibold text-primary hover:underline"
        >
          Search the site
        </Link>
      </div>
    </div>
  );
}
