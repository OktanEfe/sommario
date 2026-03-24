import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer"
import "./globals.css";
import { Inter } from 'next/font/google'; 
import SmoothScroll from "@/components/providers/SmoothScroll";


const inter = Inter({ 
  subsets: ['latin'],
  weight: ['400', '500', '700'], 
  display: 'swap',
});

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="tr" className={inter.className}>
      {
      }
      <body className="bg-white antialiased text-raisin overflow-x-hidden">
        <Navbar />
        <main className="pt-24">

           <SmoothScroll>
          {children}
        </SmoothScroll>
        </main>
        <Footer />
      </body>
    </html>
  );
}