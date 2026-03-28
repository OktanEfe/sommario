import FranchiseHero from "@/components/sections/franchise/FranchiseHero";
import FranchiseSteps from "@/components/sections/franchise/FranchiseSteps";
import FranchiseAdvantages from "@/components/sections/franchise/FranchiseAdvantages";
import FranchiseForm from "@/components/sections/franchise/FranchiseForm";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Franchise",
  description:
    "Sommario Roastery franchise fırsatlarını keşfedin. Güçlü marka yapısı, modern kahve konsepti ve büyüme odaklı iş modeliyle iş ortaklığı için bizimle iletişime geçin.",
  keywords: [
    "Sommario franchise",
    "kahve franchise",
    "cafe franchise",
    "bayilik",
    "kahve bayilik",
    "iş ortaklığı",
    "franchise başvuru",
  ],
  alternates: {
    canonical: "https://sommario.com.tr/franchise",
  },
  openGraph: {
    title: "Franchise | Sommario Roastery",
    description:
      "Modern kahve konsepti ve güçlü marka yapısıyla Sommario Roastery franchise fırsatlarını keşfedin.",
    url: "https://sommario.com.tr/franchise",
    type: "website",
  },
  twitter: {
    title: "Franchise | Sommario Roastery",
    description:
      "Modern kahve konsepti ve güçlü marka yapısıyla Sommario Roastery franchise fırsatlarını keşfedin.",
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