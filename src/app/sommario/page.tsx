import StoryHero from "@/components/sections/sommario/StoryHero";
import Values from "@/components/sections/sommario/Values";
import CoffeePour from "@/components/sections/sommario/CoffeePour"; 
import History from "@/components/sections/sommario/History";     
import Process from "@/components/sections/sommario/Process";
import Manifesto from "@/components/sections/sommario/Manifesto";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Sommario Hakkında",
  description:
    "Sommario Roastery’nin hikayesini, kahveye yaklaşımını, marka felsefesini ve kaliteli kahve anlayışını yakından keşfedin.",
  keywords: [
    "Sommario hakkında",
    "Sommario Roastery",
    "kahve markası",
    "marka hikayesi",
    "kahve felsefesi",
    "nitelikli kahve anlayışı",
  ],
  alternates: {
    canonical: "https://sommario.com.tr/sommario",
  },
  openGraph: {
    title: "Sommario Hakkında | Sommario Roastery",
    description:
      "Sommario Roastery’nin hikayesini, marka yaklaşımını ve kahveye verdiği değeri yakından keşfedin.",
    url: "https://sommario.com.tr/sommario",
    type: "website",
  },
  twitter: {
    title: "Sommario Hakkında | Sommario Roastery",
    description:
      "Sommario Roastery’nin hikayesini, marka yaklaşımını ve kahveye verdiği değeri yakından keşfedin.",
  },
};
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