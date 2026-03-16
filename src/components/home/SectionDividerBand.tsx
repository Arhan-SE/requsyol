import { motion, type Variants } from "framer-motion";

type SectionDividerBandProps = {
  label?: string;
};

const lineVariants: Variants = {
  initial: { scaleX: 0, opacity: 0.35 },
  animate: {
    scaleX: 1,
    opacity: 0.7,
    transition: { duration: 0.9, ease: [0.25, 0.46, 0.45, 0.94] },
  },
};

const SectionDividerBand = ({ label = "Work" }: SectionDividerBandProps) => {
  return (
    <section className="relative bg-background text-foreground">
      <div className="container mx-auto px-6 py-10 flex items-center justify-center gap-6">
        <div className="flex-1 max-w-4xl flex items-center gap-6">
          <motion.div
            className="h-px w-full origin-center divider-line"
            variants={lineVariants}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true, amount: 0.6 }}
          />
          <span className="text-[11px] uppercase tracking-[0.28em] whitespace-nowrap font-sans text-foreground">
            {label}
          </span>
          <motion.div
            className="h-px w-full origin-center divider-line"
            variants={lineVariants}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true, amount: 0.6 }}
          />
        </div>
      </div>
    </section>
  );
};

export default SectionDividerBand;
