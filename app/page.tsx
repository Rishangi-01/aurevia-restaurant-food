import { Suspense } from "react";
import AboutSection from "@/components/AboutSection";
import ChefsSection from "@/components/ChefsSection";
import ContactSection from "@/components/ContactSection";
import DiningExperience from "@/components/DiningExperience";
import GallerySection from "@/components/GallerySection";
import HeroSlider from "@/components/HeroSlider";
import MenuSection from "@/components/MenuSection";
import StatsSection from "@/components/StatsSection";
import TestimonialsSection from "@/components/TestimonialsSection";
import WhyChooseUs from "@/components/WhyChooseUs";
import { restaurantSiteData } from "@/data";

export default function Home() {
  return (
    <div className="flex flex-col flex-1 items-center justify-center bg-zinc-50 font-sans dark:bg-black">
      <Suspense
        fallback={
          <div
            aria-hidden="true"
            className="h-[600px] w-full bg-cover bg-center sm:h-[650px] lg:h-[calc(100vh-90px)] lg:min-h-[620px] lg:max-h-[850px]"
            style={{
              backgroundImage:
                `linear-gradient(rgba(33, 2, 7, 0.55), rgba(28, 3, 5, 0.4)), url('${restaurantSiteData.heroImage}')`,
            }}
          />
        }
      >
        <HeroSlider />
      </Suspense>
      <AboutSection />
      <MenuSection />
      <StatsSection />
      <WhyChooseUs />
      <GallerySection />
      <ChefsSection />
      <DiningExperience />
      <TestimonialsSection />
      <ContactSection />
    </div>
  );
}
