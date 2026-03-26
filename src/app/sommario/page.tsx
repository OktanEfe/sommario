import StoryHero from "@/components/sections/sommario/StoryHero";
import Values from "@/components/sections/sommario/Values";
import CoffeePour from "@/components/sections/sommario/CoffeePour"; 
import History from "@/components/sections/sommario/History";     
import Process from "@/components/sections/sommario/Process";
import Manifesto from "@/components/sections/sommario/Manifesto";

export default function SommarioPage() {
  return (
    <main className="flex flex-col w-full bg-white">
      <StoryHero />
      <Process />
      <History /> 
     
      <CoffeePour /> 

      <Values />
       
      <Manifesto />
    </main>
  );
}