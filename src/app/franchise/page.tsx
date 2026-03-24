import FranchiseHero from "@/components/sections/franchise/FranchiseHero";
import FranchiseSteps from "@/components/sections/franchise/FranchiseSteps";
import FranchiseAdvantages from "@/components/sections/franchise/FranchiseAdvantages";
import FranchiseForm from "@/components/sections/franchise/FranchiseForm";

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