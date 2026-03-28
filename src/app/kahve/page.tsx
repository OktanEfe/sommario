import CoffeeHistory from "@/components/sections/kahve/CoffeeHistory";
import SommarioSelection from "@/components/sections/kahve/SommarioSelection";
import RoastingArt from "@/components/sections/kahve/RoastingArt";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Kahve Çeşitleri",
  description:
    "Sommario Roastery’nin özenle seçilmiş kahve çeşitlerini keşfedin. Çekirdekten fincana uzanan kaliteli kahve deneyimini yakından inceleyin.",
  keywords: [
    "kahve çeşitleri",
    "Sommario kahve",
    "kahve çekirdekleri",
    "filtre kahve",
    "espresso çekirdeği",
    "özel kahve çeşitleri",
  ],
  alternates: {
    canonical: "https://sommario.com.tr/kahve",
  },
  openGraph: {
    title: "Kahve Çeşitleri | Sommario Roastery",
    description:
      "Özenle seçilmiş çekirdekler ve karakteristik tat profilleriyle Sommario kahve çeşitlerini keşfedin.",
    url: "https://sommario.com.tr/kahve",
    type: "website",
  },
  twitter: {
    title: "Kahve Çeşitleri | Sommario Roastery",
    description:
      "Özenle seçilmiş çekirdekler ve karakteristik tat profilleriyle Sommario kahve çeşitlerini keşfedin.",
  },
};
export default function KahvePage() {
  return (
    <main className="flex flex-col w-full">
      <CoffeeHistory />
      <SommarioSelection />
      <RoastingArt />
    </main>
  );
}