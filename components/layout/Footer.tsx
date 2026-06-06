import Link from "next/link";
import { Logo } from "@/components/ui/Logo";
import { NewsletterForm } from "./NewsletterForm";
import { footerNav } from "@/lib/navigation";
import { site } from "@/lib/site";
import type { Dictionary } from "@/lib/i18n/types";

type FooterProps = {
  dictionary: Dictionary;
};

export function Footer({ dictionary }: FooterProps) {
  const columns = [
    { title: dictionary.footer.read, links: footerNav.read },
    { title: dictionary.footer.participate, links: footerNav.participate },
    { title: dictionary.footer.organization, links: footerNav.organization },
    { title: dictionary.footer.connect, links: footerNav.connect },
  ];

  return (
    <footer className="border-t border-border bg-primary-dark text-white">
      <div className="mx-auto max-w-6xl px-4 py-12 sm:px-6 lg:px-8">
        <div className="grid gap-10 lg:grid-cols-5">
          <div className="lg:col-span-2">
            <Logo showWordmark className="[&_span]:text-white [&_img]:ring-white/25" />
            <p className="mt-4 font-malayalam text-sm leading-relaxed text-sky-100/90">
              {site.taglineMl}
            </p>
            <p className="mt-2 max-w-sm text-sm leading-relaxed text-sky-100/75">
              {site.description}
            </p>
            <p className="mt-4 text-xs text-sky-100/60">
              {site.address}
              <br />
              {site.email} · {site.emailAlt}
            </p>
            <div className="mt-6">
              <NewsletterForm
              placeholder={dictionary.footer.newsletterPlaceholder}
              buttonLabel={dictionary.footer.newsletterButton}
              title={dictionary.footer.newsletterTitle}
            />
            </div>
          </div>

          {columns.map((column) => (
            <div key={column.title}>
              <h2 className="text-sm font-semibold uppercase tracking-wider text-sky-100/90">
                {column.title}
              </h2>
              <ul className="mt-4 space-y-2">
                {column.links.map((link) => (
                  <li key={link.href}>
                    <Link
                      href={link.href}
                      className="text-sm text-sky-100/75 transition-colors hover:text-white"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="mt-10 flex flex-col gap-3 border-t border-white/10 pt-6 text-xs text-sky-100/60 sm:flex-row sm:items-center sm:justify-between">
          <p>© {new Date().getFullYear()} {dictionary.footer.copyright}</p>
          <div className="flex gap-4">
            <Link href="/search" className="hover:text-white">
              Search
            </Link>
            <Link href="/contact" className="hover:text-white">
              Contact
            </Link>
            <Link href="/about" className="hover:text-white">
              About
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
