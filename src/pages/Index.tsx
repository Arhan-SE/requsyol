import Layout from "@/components/layout/Layout";
import HeroSection from "@/components/home/HeroSection";
import ValueProposition from "@/components/home/ValueProposition";
import IndustryCarousel from "@/components/home/IndustryCarousel";
import TestimonialsSection from "@/components/home/TestimonialsSection";
import FinalCTA from "@/components/home/FinalCTA";

const Index = () => {
  return (
    <Layout>
      <div className="relative">
        {/* Each section sticks and gets covered by the next */}
        <div className="sticky top-0 z-[1]">
          <HeroSection />
        </div>
        <div className="sticky top-0 z-[2]">
          <ValueProposition />
        </div>
        <div className="sticky top-0 z-[3]">
          <IndustryCarousel />
        </div>
        <div className="sticky top-0 z-[4]">
          <TestimonialsSection />
        </div>
        <div className="relative z-[5]">
          <FinalCTA />
        </div>
      </div>
    </Layout>
  );
};

export default Index;
