import Layout from "@/components/layout/Layout";
import HeroSection from "@/components/home/HeroSection";
import ValueProposition from "@/components/home/ValueProposition";
import IndustryCarousel from "@/components/home/IndustryCarousel";
import TestimonialsSection from "@/components/home/TestimonialsSection";
import FinalCTA from "@/components/home/FinalCTA";
import SectionDividerBand from "@/components/home/SectionDividerBand";

const Index = () => {
  return (
    <Layout>
      <div className="sticky top-0 z-[1]">
        <HeroSection />
      </div>
      <div className="relative z-[2]">
        <SectionDividerBand label="Why Choose Us" />
        <ValueProposition />
        <IndustryCarousel />
        <TestimonialsSection />
        <FinalCTA />
      </div>
    </Layout>
  );
};

export default Index;
