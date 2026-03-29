import { stores } from '@/data/stores';
import { StoreCard } from '@/components/sections/magazalarimiz/StoreCard';
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Mağazalarımız",
  description: "Sommario Roastery mağazalarını keşfet. İzmit ve çevresindeki şubelerimizi bul, yol tarifi al.",
  keywords: ["Sommario mağaza", "İzmit kahve", "Kocaeli kahveci", "Sommario şube", "kahve dükkanı İzmit"],
  alternates: { canonical: "https://sommario.com.tr/magazalarimiz" },
  openGraph: {
    title: "Mağazalarımız | Sommario Roastery",
    description: "Sommario Roastery mağazalarını keşfet. İzmit ve çevresindeki şubelerimizi bul.",
    url: "https://sommario.com.tr/magazalarimiz",
    type: "website",
  },
  twitter: {
    title: "Mağazalarımız | Sommario Roastery",
    description: "Sommario Roastery mağazalarını keşfet. İzmit ve çevresindeki şubelerimizi bul.",
  },
};

export default function MagazalarPage() {
  return (
    <section className="py-32 md:py-40 bg-white">
      <div className="max-w-[1280px] mx-auto px-6 md:px-8">
        <div className="mb-16 md:mb-20 space-y-4">
          <span className="text-[10px] tracking-[0.5em] uppercase text-[#004A30] font-bold">
            Lokasyonlar
          </span>
          <h1 className="text-5xl md:text-6xl font-light tracking-tighter text-[#231F20]">
            Mağazalarımız
          </h1>
          <p className="text-[16px] md:text-[18px] text-black/45 font-light max-w-2xl leading-relaxed">
            Sommario deneyimini yaşayabileceğiniz noktaları keşfedin. Şubelerimizin adres, iletişim ve çalışma saatlerine buradan ulaşabilirsiniz.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6 md:gap-8">
          {stores.map((store) => (
            <StoreCard key={store.id} store={store} />
          ))}
        </div>
      </div>
    </section>
  );
}