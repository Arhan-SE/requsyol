import { motion } from "framer-motion";
import CountUp from "@/components/animations/CountUp";
import DeferredBackgroundVideo from "@/components/media/DeferredBackgroundVideo";
import valuePropBg from "@/assets/value-prop-bg.mp4";

const stats = [
  { value: 5000, suffix: "+", label: "Candidates Placed" },
  { value: 4, suffix: "hrs", label: "Avg. Time to Place" },
  { value: 98, suffix: "%", label: "Client Satisfaction" },
  { value: 15, suffix: "+", label: "Industries Served" },
];

const ValueProposition = () => {
  return (
    <section className="bg-background">
      <div className="relative overflow-hidden">
        <DeferredBackgroundVideo src={valuePropBg} className="w-full h-full object-cover" />
        <div className="absolute inset-0 bg-background/0" />

        <div className="relative z-10 container mx-auto px-6 py-16 sm:py-20 lg:py-24 space-y-12">
          <div className="space-y-3 text-center max-w-3xl mx-auto">
            <h2 className="font-display font-black uppercase text-foreground leading-tight" style={{ fontSize: "clamp(2.8rem, 7vw, 4.6rem)" }}>
              Trusted hiring. Premium delivery.
            </h2>
          </div>

          <div className="py-12 text-center">
            <motion.div
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{ duration: 0.6 }}
              className="inline-flex items-center gap-3 px-6 py-3 rounded-full bg-background/60 border border-border/60 backdrop-blur-sm"
            >
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ValueProposition;
