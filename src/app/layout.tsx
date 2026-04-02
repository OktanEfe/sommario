import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { Analytics } from '@vercel/analytics/react';
import Script from "next/script";


import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import SmoothScroll from "@/components/providers/SmoothScroll";
import PageTransition from "@/components/providers/PageTransition";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  metadataBase: new URL("https://sommario.com.tr"),
  title: {
    default: "Sommario Roastery | Premium Kahve Deneyimi",
    template: "%s | Sommario Roastery",
  },
  description:
    "Sommario Roastery; nitelikli kahve, özgün tatlar ve modern kahve kültürünü bir araya getiren özel bir kahve deneyimi sunar.",
  keywords: [
    "Sommario",
    "Sommario Roastery",
    "kahve",
    "nitelikli kahve",
    "özel kahve",
    "third wave coffee",
    "kahve dükkanı",
    "cafe",
    "franchise",
    "filtre kahve",
    "espresso",
    "kahve menüsü",
  ],
  authors: [{ name: "Sommario Roastery" }],
  creator: "Sommario Roastery",
  publisher: "Sommario Roastery",
  applicationName: "Sommario Roastery",
  category: "food",
  alternates: {
    canonical: "https://sommario.com.tr",
  },
  icons: {
    icon: [
      { url: "/favicon.ico" },
      { url: "/favicon-96x96.png", sizes: "96x96", type: "image/png" },
    ],
    apple: [
      { url: "/apple-touch-icon.png", sizes: "180x180", type: "image/png" },
    ],
  },
  manifest: "/site.webmanifest",
  openGraph: {
    title: "Sommario Roastery | Premium Kahve Deneyimi",
    description:
      "Sommario Roastery; nitelikli kahve, özgün tatlar ve modern kahve kültürünü bir araya getiren özel bir kahve deneyimi sunar.",
    url: "https://sommario.com.tr",
    siteName: "Sommario Roastery",
    locale: "tr_TR",
    type: "website",
    images: [
      {
        url: "/apple-touch-icon.png",
        width: 180,
        height: 180,
        alt: "Sommario Roastery",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Sommario Roastery | Premium Kahve Deneyimi",
    description:
      "Sommario Roastery; nitelikli kahve, özgün tatlar ve modern kahve kültürünü bir araya getiren özel bir kahve deneyimi sunar.",
    images: ["/apple-touch-icon.png"],
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="tr" className={`${inter.className} overflow-x-hidden`}>
      <body className="bg-white antialiased text-raisin overflow-x-hidden">
        <div className="relative w-full overflow-x-hidden">
          <SmoothScroll>
            <Navbar />
            <main className="pt-24 overflow-x-hidden">
              <PageTransition>
              {children}
              <Analytics />
              <Script
          src="https://www.googletagmanager.com/gtag/js?id=G-J22E595GCE"
          strategy="afterInteractive"
        />
        <Script id="google-analytics" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-J22E595GCE');
          `}
        </Script>

              </PageTransition>
            </main>
            <Footer />
          </SmoothScroll>
        </div>
      </body>
    </html>
  );
}