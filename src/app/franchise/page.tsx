import FranchiseHero from "@/components/sections/franchise/FranchiseHero";
import FranchiseSteps from "@/components/sections/franchise/FranchiseSteps";
import FranchiseAdvantages from "@/components/sections/franchise/FranchiseAdvantages";
import FranchiseForm from "@/components/sections/franchise/FranchiseForm";


import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Franchise",
  description: "Sommario Roastery franchise fırsatları. Kendi kahve dükkanını aç, güçlü marka desteğiyle büyü.",
  keywords: ["franchise", "kahve franchise", "Sommario franchise", "kahve dükkanı aç", "yatırım fırsatı"],
  alternates: { canonical: "https://sommario.com.tr/franchise" },
  openGraph: {
    title: "Franchise | Sommario Roastery",
    description: "Sommario Roastery franchise fırsatları. Kendi kahve dükkanını aç, güçlü marka desteğiyle büyü.",
    url: "https://sommario.com.tr/franchise",
    type: "website",
  },
  twitter: {
    title: "Franchise | Sommario Roastery",
    description: "Sommario Roastery franchise fırsatları. Kendi kahve dükkanını aç, güçlü marka desteğiyle büyü.",
  },
};
export default function FranchisePage() {
  return (
    <main className="flex flex-col w-full bg-white">
      <FranchiseHero />
      <FranchiseSteps />
      <FranchiseAdvantages />
      <FranchiseForm />
    </main>
  );
}