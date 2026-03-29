import CareerHero from "@/components/sections/kariyer/CareerHero";
import CareerPhilosophy from "@/components/sections/kariyer/CareerPhilosophy";
import RecruitmentProcess from "@/components/sections/kariyer/RecruitmentProcess";
import PartnerBenefits from "@/components/sections/kariyer/PartnerBenefits";
import ApplicationCards from "@/components/sections/kariyer/ApplicationCards"; 
import CareerFAQ from "@/components/sections/kariyer/CareerFAQ";
import CareerForm from "@/components/sections/kariyer/CareerForm";

import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Kariyer",
  description: "Sommario Roastery ekibine katıl. Barista, mağaza sorumlusu ve daha fazlası için kariyer fırsatları.",
  keywords: ["Sommario kariyer", "barista iş ilanı", "kahve sektörü kariyer", "iş başvurusu", "İzmit iş ilanı"],
  alternates: { canonical: "https://sommario.com.tr/kariyer" },
  openGraph: {
    title: "Kariyer | Sommario Roastery",
    description: "Sommario Roastery ekibine katıl. Barista ve mağaza sorumlusu pozisyonları için başvur.",
    url: "https://sommario.com.tr/kariyer",
    type: "website",
  },
  twitter: {
    title: "Kariyer | Sommario Roastery",
    description: "Sommario Roastery ekibine katıl. Barista ve mağaza sorumlusu pozisyonları için başvur.",
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
      <CareerForm />
    </main>
  );
}