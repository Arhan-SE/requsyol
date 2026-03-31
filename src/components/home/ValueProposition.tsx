import { motion } from "framer-motion";
import CountUp from "@/components/animations/CountUp";
import DeferredBackgroundVideo from "@/components/media/DeferredBackgroundVideo";
import valuePropBg from "@/assets/videos/value-prop-bg.mp4";

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
      transition={{ duration: 0.8, ease: "easeOut" }}
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
      transition={{ duration: 0.8, ease: "easeOut" }}
      style={{ transformOrigin: "center" }}
    />
    <span className="text-muted-foreground text-sm font-light">+</span>
  </motion.div>
);

const stats = [
  { value: 5000, suffix: "+", label: "Candidates Placed" },
  { value: 4, suffix: "hrs", label: "Avg. Time to Place" },
  { value: 98, suffix: "%", label: "Client Satisfaction" },
  { value: 15, suffix: "+", label: "Industries Served" },
];

const ValueProposition = () => {
  return (
    <section className="bg-background flex-1 flex flex-col">
      <div className="relative overflow-hidden flex-1 flex flex-col">
        <DeferredBackgroundVideo src={valuePropBg} className="w-full h-full object-cover" />
        <div className="absolute inset-0 bg-background/0" />

        <div className="relative z-10 flex flex-col flex-1">
          <SectionDivider label="Why Choose Us" />
          <div className="container mx-auto px-6 py-16 sm:py-20 lg:py-24 space-y-12 flex-1 flex flex-col justify-center">
            <div className="space-y-3 text-center max-w-3xl mx-auto">
              <h2 className="font-display font-black uppercase text-foreground leading-tight" style={{ fontSize: "clamp(2.8rem, 7vw, 4.6rem)" }}>
                Trusted hiring.<br />Premium delivery.
              </h2>
            </div>
          </div>
          <div className="h-px divider-line" />
        </div>
      </div>
    </section>
  );
};

export default ValueProposition;
