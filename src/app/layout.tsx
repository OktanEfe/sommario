import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import "./globals.css";
import { Inter } from "next/font/google";
import SmoothScroll from "@/components/providers/SmoothScroll";
import PageTransition from "@/components/providers/PageTransition";

const inter = Inter({
  subsets: ["latin"],
  weight: ["400", "500", "700"],
  display: "swap",
});

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
              <PageTransition>{children}</PageTransition>
            </main>
            <Footer />
          </SmoothScroll>
        </div>
      </body>
    </html>
  );
}
