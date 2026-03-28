import CareerHero from "@/components/sections/kariyer/CareerHero";
import CareerPhilosophy from "@/components/sections/kariyer/CareerPhilosophy";
import RecruitmentProcess from "@/components/sections/kariyer/RecruitmentProcess";
import PartnerBenefits from "@/components/sections/kariyer/PartnerBenefits";
import ApplicationCards from "@/components/sections/kariyer/ApplicationCards"; 
import CareerFAQ from "@/components/sections/kariyer/CareerFAQ";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Kariyer",
  description:
    "Sommario Roastery kariyer fırsatlarını inceleyin. Kahveye tutkuyla yaklaşan, dinamik ve gelişime açık ekip yapımızın bir parçası olun.",
  keywords: [
    "Sommario kariyer",
    "kahve sektörü iş ilanı",
    "barista iş ilanı",
    "cafe iş başvurusu",
    "kariyer fırsatları",
    "Sommario iş başvurusu",
  ],
  alternates: {
    canonical: "https://sommario.com.tr/kariyer",
  },
  openGraph: {
    title: "Kariyer | Sommario Roastery",
    description:
      "Dinamik ekibimizin bir parçası olun, Sommario Roastery kariyer fırsatlarını keşfedin.",
    url: "https://sommario.com.tr/kariyer",
    type: "website",
  },
  twitter: {
    title: "Kariyer | Sommario Roastery",
    description:
      "Dinamik ekibimizin bir parçası olun, Sommario Roastery kariyer fırsatlarını keşfedin.",
  },
};
export default function CareerPage() {
  return (
    <main className="flex flex-col w-full">
      <CareerHero />
      <CareerPhilosophy />
      <RecruitmentProcess />
      <PartnerBenefits />
      <ApplicationCards />
      <CareerFAQ />
    </main>
  );
}