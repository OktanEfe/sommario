import CoffeeHistory from "@/components/sections/kahve/CoffeeHistory";
import SommarioSelection from "@/components/sections/kahve/SommarioSelection";
import RoastingArt from "@/components/sections/kahve/RoastingArt";


import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Kahve",
  description: "Sommario Roastery'nin özel harman kahve çekirdekleri, demleme yöntemleri ve kahve kültürü hakkında her şey.",
  keywords: ["specialty coffee", "özel harman kahve", "kahve çekirdeği", "demleme yöntemleri", "Sommario kahve"],
  alternates: { canonical: "https://sommario.com.tr/kahve" },
  openGraph: {
    title: "Kahve | Sommario Roastery",
    description: "Sommario Roastery'nin özel harman kahve çekirdekleri ve kahve kültürü.",
    url: "https://sommario.com.tr/kahve",
    type: "website",
  },
  twitter: {
    title: "Kahve | Sommario Roastery",
    description: "Sommario Roastery'nin özel harman kahve çekirdekleri ve kahve kültürü.",
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