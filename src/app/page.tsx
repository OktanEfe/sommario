import Hero from "@/components/sections/Hero";
import FeaturedDrinks from "@/components/sections/FeaturedDrinks";
import About from "@/components/sections/About";
import NavigationCards from "@/components/sections/NavigationCards";
import ContactCTA from "@/components/sections/ContactCTA";

import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Sommario Roastery",
  description:
    "Sommario Roastery; özenle seçilmiş çekirdekler, özgün reçeteler ve modern atmosferiyle kahveyi özel bir deneyime dönüştürür.",
  keywords: [
    "Sommario Roastery",
    "Sommario",
    "kahve",
    "özel kahve",
    "kahve deneyimi",
    "nitelikli kahve",
    "modern cafe",
  ],
  alternates: {
    canonical: "https://sommario.com.tr",
  },
  openGraph: {
    title: "Sommario Roastery",
    description:
      "Özenle seçilmiş çekirdekler, özgün reçeteler ve modern atmosferiyle kahveyi özel bir deneyime dönüştüren Sommario Roastery’i keşfedin.",
    url: "https://sommario.com.tr",
    type: "website",
  },
  twitter: {
    title: "Sommario Roastery",
    description:
      "Özenle seçilmiş çekirdekler, özgün reçeteler ve modern atmosferiyle kahveyi özel bir deneyime dönüştüren Sommario Roastery’i keşfedin.",
  },
};
export default function Home() {
  return (
    <div className="flex flex-col w-full">
      <Hero />
      <About />
      <FeaturedDrinks /> 
      
      <NavigationCards />
      <ContactCTA /> 
    </div>
  );
}