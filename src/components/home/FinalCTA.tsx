import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import ScrollReveal from "@/components/animations/ScrollReveal";
import DeferredBackgroundVideo from "@/components/media/DeferredBackgroundVideo";
import finalCtaBg from "@/assets/videos/final-cta-bg.mp4";

const SectionDivider = ({ label }: { label: string }) => (
  <motion.div
    className="flex items-center gap-0 w-full px-4 sm:px-10 py-8 sm:py-16"
    initial={{ opacity: 0 }}
    whileInView={{ opacity: 1 }}
    viewport={{ once: true }}
    transition={{ duration: 0.8 }}
  >
    <span className="text-muted-foreground text-sm font-light">+</span>
  <motion.div
    className="flex-1 h-px mx-3 divider-line"
    initial={{ scaleX: 0 }}
    whileInView={{ scaleX: 1 }}
    viewport={{ once: true }}
    transition={{ duration: 0.8 }}
    style={{ transformOrigin: "center" }}
  />
    <span
      className="text-[13px] tracking-[0.35em] uppercase font-sans px-2"
      style={{
        background: "linear-gradient(90deg, #56A8D6 0%, hsl(var(--logo-orange)) 55%, #2F7FB2 100%)",
        WebkitBackgroundClip: "text",
        WebkitTextFillColor: "transparent",
        backgroundClip: "text",
      }}
    >{label}</span>
  <motion.div
    className="flex-1 h-px mx-3 divider-line"
    initial={{ scaleX: 0 }}
    whileInView={{ scaleX: 1 }}
    viewport={{ once: true }}
    transition={{ duration: 0.8 }}
    style={{ transformOrigin: "center" }}
  />
    <span className="text-muted-foreground text-sm font-light">+</span>
  </motion.div>
);

const FinalCTA = () => {
  return (
    <section className="bg-background">
      <div className="relative overflow-hidden">
      <DeferredBackgroundVideo
        src={finalCtaBg}
        className="w-full h-full object-cover scale-[1.35]"
      />
      <div className="absolute inset-0 bg-background/0" />
      <div className="relative z-10">
      <SectionDivider label="Get Started" />

      <div className="container mx-auto px-6 py-20 text-center relative z-10">
        {/* Massive headline */}
        <ScrollReveal>
          <h2
            className="font-barlow font-black uppercase text-foreground leading-[0.88] mb-10"
            style={{ fontSize: "clamp(2rem, 6vw, 5rem)" }}
          >
            Ready To
            <br />
            Get Started.
          </h2>
        </ScrollReveal>

        <ScrollReveal delay={0.2}>
          {/* Bracketed CTA links side by side */}
          <div className="flex flex-col sm:flex-row gap-3 sm:gap-6 justify-center items-center">
            <Link
              to="/contact"
              className="border-2 border-white px-6 sm:px-10 py-3 sm:py-4 text-xs tracking-[0.28em] uppercase font-medium text-white hover:bg-white hover:text-black transition-all duration-300 font-sans"
            >
              [ Contact Us ]
            </Link>
          </div>
        </ScrollReveal>
      </div>

      {/* Bottom border */}
      <div className="h-px divider-line" />
      </div>
      </div>
    </section>
  );
};

export default FinalCTA;
