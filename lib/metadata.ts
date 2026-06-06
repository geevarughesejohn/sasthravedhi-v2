import type { Metadata } from "next";
import { site } from "@/lib/site";

export function createPageMetadata({
  title,
  description,
  path,
}: {
  title: string;
  description: string;
  path: string;
}): Metadata {
  const url = `${site.url}${path}`;

  return {
    title,
    description,
    alternates: { canonical: url },
    openGraph: {
      title,
      description,
      url,
      siteName: site.name,
      type: "website",
      locale: "en_IN",
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
    },
  };
}

export const rootMetadata: Metadata = {
  metadataBase: new URL(site.url),
  title: {
    default: site.name,
    template: `%s | ${site.name}`,
  },
  description: site.description,
  icons: {
    icon: "/favicon.png",
    apple: "/images/brand/logo.png",
  },
  openGraph: {
    siteName: site.name,
    type: "website",
    locale: "en_IN",
    images: ["/images/brand/logo.png"],
  },
};
