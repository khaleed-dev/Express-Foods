import type { Metadata } from "next";
import Script from "next/script";
import { Montserrat, Merriweather, Source_Code_Pro } from "next/font/google";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";

const plausibleDomain = process.env.NEXT_PUBLIC_PLAUSIBLE_DOMAIN;

const montserrat = Montserrat({
  variable: "--font-montserrat",
  subsets: ["latin"],
  display: "swap",
});

const merriweather = Merriweather({
  variable: "--font-merriweather",
  subsets: ["latin"],
  weight: ["300", "400", "700", "900"],
  display: "swap",
});

const sourceCodePro = Source_Code_Pro({
  variable: "--font-source-code-pro",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://expressfoods.com"),
  title: {
    default: "Express Foods — Premium Egyptian Fruits & Vegetables for Global Markets",
    template: "%s | Express Foods",
  },
  description:
    "Express Foods sources, certifies, and ships the finest fresh and frozen produce from Egypt to the world's most demanding buyers.",
};

export default function SiteLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${montserrat.variable} ${merriweather.variable} ${sourceCodePro.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col font-sans">
        <Navbar />
        <main className="flex-1">{children}</main>
        <Footer />
        {plausibleDomain && (
          <Script
            defer
            data-domain={plausibleDomain}
            src="https://plausible.io/js/script.js"
            strategy="afterInteractive"
          />
        )}
      </body>
    </html>
  );
}
