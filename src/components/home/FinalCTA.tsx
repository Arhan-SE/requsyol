import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import ScrollReveal from "@/components/animations/ScrollReveal";
import finalCtaBg from "@/assets/final-cta-bg.mp4";

const SectionDivider = ({ label }: { label: string }) => (
  <motion.div
    className="flex items-center gap-0 w-full px-6 py-8"
    initial={{ opacity: 0 }}
    whileInView={{ opacity: 1 }}
    viewport={{ once: true }}
    transition={{ duration: 0.8 }}
  >
    <span className="text-muted-foreground text-sm font-light">+</span>
    <motion.div
      className="flex-1 h-px bg-border mx-3"
      initial={{ scaleX: 0 }}
      whileInView={{ scaleX: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8 }}
      style={{ transformOrigin: "center" }}
    />
    <span className="text-[10px] tracking-[0.35em] uppercase text-muted-foreground font-sans px-2">{label}</span>
    <motion.div
      className="flex-1 h-px bg-border mx-3"
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
    <section className="relative bg-background overflow-hidden">
      <video
        autoPlay
        loop
        muted
        playsInline
        aria-hidden="true"
        className="absolute inset-0 w-full h-full object-cover scale-[1.35]"
        src={finalCtaBg}
      />
      <div className="absolute inset-0 bg-background/80" />
      <div className="relative z-10">
      <SectionDivider label="Get Started" />

      <div className="container mx-auto px-6 py-20 text-center relative z-10">
        {/* Massive headline */}
        <ScrollReveal>
          <h2
            className="font-barlow font-black uppercase text-foreground leading-[0.88] mb-10"
            style={{ fontSize: "clamp(3rem, 10vw, 9rem)" }}
          >
            Ready To
            <br />
            Get Started.
          </h2>
        </ScrollReveal>

        <ScrollReveal delay={0.2}>
          <p className="text-sm text-muted-foreground tracking-wide max-w-md mx-auto mb-14 font-sans leading-relaxed">
            Whether you're looking for your next opportunity or need reliable talent, Requsyol is here to help.
          </p>

          {/* Bracketed CTA links side by side */}
          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
            <Link
              to="/candidates"
              className="border border-border px-10 py-4 text-xs tracking-[0.28em] uppercase font-medium text-foreground hover:bg-foreground hover:text-background transition-all duration-300 font-sans"
            >
              [ Find Work ]
            </Link>
            <Link
              to="/employers"
              className="border border-border px-10 py-4 text-xs tracking-[0.28em] uppercase font-medium text-foreground hover:bg-foreground hover:text-background transition-all duration-300 font-sans"
            >
              [ Hire Talent ]
            </Link>
          </div>
        </ScrollReveal>
      </div>

      {/* Bottom border */}
      <div className="h-px bg-border" />
      </div>
    </section>
  );
};

export default FinalCTA;
