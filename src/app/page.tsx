import Hero from "@/components/sections/Hero";
import FeaturedDrinks from "@/components/sections/FeaturedDrinks";
import About from "@/components/sections/About";
import NavigationCards from "@/components/sections/NavigationCards";
import ContactCTA from "@/components/sections/ContactCTA";

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