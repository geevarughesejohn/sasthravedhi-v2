import type { Metadata, Viewport } from "next";
import { DM_Sans, Lora, Noto_Sans_Malayalam } from "next/font/google";
import { SiteShell } from "@/components/layout/SiteShell";
import { getLocale } from "@/lib/i18n/get-locale";
import { rootMetadata } from "@/lib/metadata";
import "./globals.css";

const dmSans = DM_Sans({
  variable: "--font-sans",
  subsets: ["latin"],
});

const lora = Lora({
  variable: "--font-display",
  subsets: ["latin"],
});

const notoMalayalam = Noto_Sans_Malayalam({
  variable: "--font-malayalam",
  subsets: ["malayalam", "latin"],
  weight: ["400", "500", "600", "700"],
});

export const metadata: Metadata = rootMetadata;

export const viewport: Viewport = {
  themeColor: "#0358cc",
};

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const locale = await getLocale();

  return (
    <html
      lang={locale}
      className={`${dmSans.variable} ${lora.variable} ${notoMalayalam.variable} h-full antialiased`}
    >
      <body className="flex min-h-full flex-col bg-background text-foreground">
        <SiteShell>{children}</SiteShell>
      </body>
    </html>
  );
}
