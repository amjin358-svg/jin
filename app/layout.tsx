import type { Metadata } from "next";
import { Outfit, Source_Sans_3 } from "next/font/google";
import { SiteFooter } from "@/components/organisms/SiteFooter";
import { SiteHeader } from "@/components/organisms/SiteHeader";
import { BRAND } from "@/lib/constants";
import "@/styles/globals.css";

const display = Outfit({
  variable: "--font-display",
  subsets: ["latin"],
  weight: ["500", "600", "700"],
});

const body = Source_Sans_3({
  variable: "--font-body",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://globalvistagroup.com"),
  title: {
    default: `${BRAND.shortName} ${BRAND.product} | ${BRAND.name}`,
    template: `%s | ${BRAND.shortName} ${BRAND.product}`,
  },
  description: BRAND.description,
  keywords: [
    "Global Vista Group",
    "GVG",
    "Global Trade OS",
    "B2B trading platform",
    "import export",
    "OEM ODM",
    "global procurement",
    "logistics",
    "customs documentation",
  ],
  openGraph: {
    title: `${BRAND.shortName} ${BRAND.product}`,
    description: BRAND.description,
    siteName: BRAND.name,
    type: "website",
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: `${BRAND.shortName} ${BRAND.product}`,
    description: BRAND.description,
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${display.variable} ${body.variable} antialiased`}>
        <SiteHeader />
        <main id="main">{children}</main>
        <SiteFooter />
      </body>
    </html>
  );
}
