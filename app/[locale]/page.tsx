import { Hero } from "@/components/sections/Hero";
import { Stats } from "@/components/sections/Stats";
import { Categories } from "@/components/sections/Categories";
import { FeaturedProducts } from "@/components/sections/FeaturedProducts";
import { AboutStory } from "@/components/sections/AboutStory";
import { Features } from "@/components/sections/Features";
import { Testimonials } from "@/components/sections/Testimonials";
import { CTA } from "@/components/sections/CTA";

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      <Hero />
      <Stats />
      <Categories />
      <FeaturedProducts />
      <AboutStory />
      <Features />
      <Testimonials />
      <CTA />
    </div>
  );
}
