import { Hero } from "@/components/sections/Hero";
import { ModernStats } from "@/components/sections/ModernStats";
import { Categories } from "@/components/sections/Categories";
import { FeaturedProducts } from "@/components/sections/FeaturedProducts";
import { AboutStory } from "@/components/sections/AboutStory";
import { Services } from "@/components/sections/Services";
import { Locations } from "@/components/sections/Locations";
import { Contact } from "@/components/sections/Contact";
import { VisionMission } from "@/components/sections/VisionMission";
import { Testimonials } from "@/components/sections/Testimonials";

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      <Hero />
      <ModernStats />
      <Categories />
      <Services />
      <FeaturedProducts />
      <Locations />
      <VisionMission />
      <AboutStory />
      <Testimonials />
      <Contact />
    </div>
  );
}
