import CoffeeHistory from "@/components/sections/kahve/CoffeeHistory";
import SommarioSelection from "@/components/sections/kahve/SommarioSelection";
import RoastingArt from "@/components/sections/kahve/RoastingArt";

export default function KahvePage() {
  return (
    <main className="flex flex-col w-full">
      <CoffeeHistory />
      <SommarioSelection />
      <RoastingArt />
    </main>
  );
}