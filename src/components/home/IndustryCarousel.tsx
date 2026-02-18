import { motion } from "framer-motion";
import { Factory, Utensils, Building2, Truck, ShoppingBag, Hammer, HeartPulse, Warehouse } from "lucide-react";

const industries = [
  { icon: Factory, name: "Manufacturing" },
  { icon: Utensils, name: "Hospitality" },
  { icon: Building2, name: "Construction" },
  { icon: Truck, name: "Logistics" },
  { icon: ShoppingBag, name: "Retail" },
  { icon: Hammer, name: "Trades" },
  { icon: HeartPulse, name: "Healthcare" },
  { icon: Warehouse, name: "Warehousing" },
];

const doubled = [...industries, ...industries];

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
      transition={{ duration: 0.8, ease: "easeOut" }}
      style={{ transformOrigin: "center" }}
    />
    <span className="text-[10px] tracking-[0.35em] uppercase text-muted-foreground font-sans px-2">{label}</span>
    <motion.div
      className="flex-1 h-px bg-border mx-3"
      initial={{ scaleX: 0 }}
      whileInView={{ scaleX: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      style={{ transformOrigin: "center" }}
    />
    <span className="text-muted-foreground text-sm font-light">+</span>
  </motion.div>
);

const IndustryCarousel = () => {
  return (
    <section className="bg-background overflow-hidden">
      <SectionDivider label="Sectors We Cover" />

      {/* Giant section headline */}
      <div className="container mx-auto px-6 pb-12 text-center">
        <motion.h2
          className="font-barlow font-black uppercase text-foreground leading-[0.9]"
          style={{ fontSize: "clamp(2.5rem, 7vw, 6rem)" }}
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
        >
          Industries We Serve.
        </motion.h2>
        <p className="text-muted-foreground text-xs tracking-[0.2em] uppercase mt-4 font-sans">
          Staffing solutions across a wide range of sectors
        </p>
      </div>

      {/* Edge-faded scrolling track */}
      <div
        className="relative py-4"
        style={{
          maskImage: "linear-gradient(to right, transparent 0%, black 8%, black 92%, transparent 100%)",
          WebkitMaskImage: "linear-gradient(to right, transparent 0%, black 8%, black 92%, transparent 100%)",
        }}
      >
        <motion.div
          className="flex gap-0"
          animate={{ x: ["0%", "-50%"] }}
          transition={{ duration: 40, repeat: Infinity, ease: "linear" }}
        >
          {doubled.map((industry, i) => (
            <div
              key={i}
              className="flex-shrink-0 w-48 h-40 border-r border-border flex flex-col items-center justify-center gap-4 group hover:bg-foreground/[0.04] transition-colors duration-300 cursor-default"
            >
              <industry.icon
                size={28}
                className="text-muted-foreground group-hover:text-foreground transition-colors duration-300"
              />
              <span className="text-[10px] tracking-[0.25em] uppercase text-muted-foreground group-hover:text-foreground transition-colors duration-300 font-sans">
                {industry.name}
              </span>
            </div>
          ))}
        </motion.div>
      </div>

      <div className="h-px bg-border" />
    </section>
  );
};

export default IndustryCarousel;
