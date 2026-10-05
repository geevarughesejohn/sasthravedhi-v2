import type { Metadata } from "next";
import { Poppins, Inter, Anek_Malayalam } from "next/font/google";
import "./globals.css";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";

const poppins = Poppins({ subsets: ["latin"], weight: ["400", "600", "700"], variable: '--font-poppins' });
const inter = Inter({ subsets: ["latin"], variable: '--font-inter' });
const anek = Anek_Malayalam({ subsets: ["malayalam"], variable: '--font-anek' });

export const metadata: Metadata = {
  metadataBase: new URL('https://sasthravedhi.in'),
  title: "Sasthravedhi | Science Organisation",
  description: "A modern Next.js 16 App Router site for Kerala science organisation.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${poppins.variable} ${inter.variable} ${anek.variable}`}>
      <body className="font-inter flex flex-col min-h-screen">
        <Header />
        <main className="flex-grow">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
