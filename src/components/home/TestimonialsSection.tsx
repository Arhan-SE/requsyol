import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import DeferredBackgroundVideo from "@/components/media/DeferredBackgroundVideo";
import testimonialsBg from "@/assets/testimonials-bg.mp4";

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
      className="flex-1 h-px bg-logo-cyan/60 mx-3"
      initial={{ scaleX: 0 }}
      whileInView={{ scaleX: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8 }}
      style={{ transformOrigin: "center" }}
    />
    <span className="text-[10px] tracking-[0.35em] uppercase text-muted-foreground font-sans px-2">{label}</span>
    <motion.div
      className="flex-1 h-px bg-logo-cyan/60 mx-3"
      initial={{ scaleX: 0 }}
      whileInView={{ scaleX: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8 }}
      style={{ transformOrigin: "center" }}
    />
    <span className="text-muted-foreground text-sm font-light">+</span>
  </motion.div>
);

const TestimonialsSection = () => {
  return (
    <section className="min-h-screen flex flex-col">
      <div className="relative overflow-hidden flex-1 flex flex-col">
        <DeferredBackgroundVideo src={testimonialsBg} className="w-full h-full object-cover" />
        <div className="absolute inset-0 bg-background/20" />
        <div className="relative z-10 flex flex-col flex-1">
          <SectionDivider label="Client Stories" />

          <div className="flex-1 flex items-center justify-center px-6 pb-24">
            <div className="max-w-3xl mx-auto text-center">
              <motion.h2
                className="font-barlow font-light uppercase text-foreground leading-[0.95] tracking-tight"
                style={{ fontSize: "clamp(3rem, 7vw, 6rem)" }}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.7 }}
              >
                Trusted by the<br />businesses we serve.
              </motion.h2>

              <motion.div
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.7, delay: 0.3 }}
                className="mt-10"
              >
                <Link
                  to="/testimonials"
                  className="inline-block border-2 border-white px-8 py-3 text-[11px] tracking-[0.3em] uppercase text-white font-sans hover:bg-white hover:text-black transition-all duration-300"
                >
                  [ Read Client Stories ]
                </Link>
              </motion.div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
