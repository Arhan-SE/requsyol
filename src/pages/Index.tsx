import Layout from "@/components/layout/Layout";
import HeroSection from "@/components/home/HeroSection";
import ValueProposition from "@/components/home/ValueProposition";
import IndustryCarousel from "@/components/home/IndustryCarousel";
import StatsSection from "@/components/home/StatsSection";
import TestimonialsSection from "@/components/home/TestimonialsSection";
import FinalCTA from "@/components/home/FinalCTA";

const Index = () => {
  return (
    <Layout>
      <HeroSection />
      <ValueProposition />
      <IndustryCarousel />
      <StatsSection />
      <TestimonialsSection />
      <FinalCTA />
    </Layout>
  );
};

export default Index;
