import CareerHero from "@/components/sections/kariyer/CareerHero";
import CareerPhilosophy from "@/components/sections/kariyer/CareerPhilosophy";
import RecruitmentProcess from "@/components/sections/kariyer/RecruitmentProcess";
import PartnerBenefits from "@/components/sections/kariyer/PartnerBenefits";
import ApplicationCards from "@/components/sections/kariyer/ApplicationCards"; 
import CareerFAQ from "@/components/sections/kariyer/CareerFAQ";
import CareerForm from "@/components/sections/kariyer/CareerForm";

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