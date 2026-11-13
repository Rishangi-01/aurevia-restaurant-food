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

export default function Home() {
  return (
    <div className="flex flex-col flex-1 items-center justify-center bg-zinc-50 font-sans dark:bg-black">
      <HeroSlider />
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
