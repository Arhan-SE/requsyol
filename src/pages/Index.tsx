import Layout from "@/components/layout/Layout";
import HeroSection from "@/components/home/HeroSection";
import ValueProposition from "@/components/home/ValueProposition";
import IndustryCarousel from "@/components/home/IndustryCarousel";
import TestimonialsSection from "@/components/home/TestimonialsSection";
import FinalCTA from "@/components/home/FinalCTA";
import useSmoothScroll from "@/hooks/useSmoothScroll";

const Index = () => {
  useSmoothScroll();

  return (
    <Layout>
      <div className="sticky top-0 z-[1]">
        <HeroSection />
      </div>
      <div className="relative z-[2]">
        <div className="min-h-screen flex flex-col">
          <ValueProposition />
        </div>
        <IndustryCarousel />
        <TestimonialsSection />
        <FinalCTA />
      </div>
    </Layout>
  );
};

export default Index;
