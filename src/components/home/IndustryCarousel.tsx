import { motion } from "framer-motion";
import ScrollReveal from "@/components/animations/ScrollReveal";
import { Factory, Utensils, Building2, Truck, ShoppingBag, Hammer, HeartPulse, Warehouse } from "lucide-react";

const industries = [
  { icon: Factory, name: "Manufacturing", accent: "from-emerald-500/40 to-emerald-400/10" },
  { icon: Utensils, name: "Hospitality", accent: "from-amber-500/40 to-amber-400/10" },
  { icon: Building2, name: "Construction", accent: "from-orange-500/40 to-orange-400/10" },
  { icon: Truck, name: "Logistics", accent: "from-blue-500/40 to-blue-400/10" },
  { icon: ShoppingBag, name: "Retail", accent: "from-pink-500/40 to-pink-400/10" },
  { icon: Hammer, name: "Trades", accent: "from-violet-500/40 to-violet-400/10" },
  { icon: HeartPulse, name: "Healthcare", accent: "from-rose-500/40 to-rose-400/10" },
  { icon: Warehouse, name: "Warehousing", accent: "from-indigo-500/40 to-indigo-400/10" },
];

const doubled = [...industries, ...industries];

const IndustryCarousel = () => {
  return (
    <section className="py-24 overflow-hidden">
      <div className="container mx-auto px-4">
        <ScrollReveal>
          <div className="text-center mb-14">
            <p className="text-xs font-semibold tracking-[0.25em] uppercase text-primary/70 mb-3">
              Sector Expertise
            </p>
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">Industries We Serve</h2>
            <p className="text-muted-foreground">Staffing solutions across a wide range of sectors</p>
          </div>
        </ScrollReveal>
      </div>

      {/* Edge-faded scrolling track */}
      <div
        className="relative"
        style={{
          maskImage: "linear-gradient(to right, transparent 0%, black 8%, black 92%, transparent 100%)",
          WebkitMaskImage: "linear-gradient(to right, transparent 0%, black 8%, black 92%, transparent 100%)",
        }}
      >
        <motion.div
          className="flex gap-5 py-4"
          animate={{ x: ["0%", "-50%"] }}
          transition={{ duration: 36, repeat: Infinity, ease: "linear" }}
        >
          {doubled.map((industry, i) => (
            <div
              key={i}
              className="flex-shrink-0 w-52 h-44 relative rounded-xl overflow-hidden border border-border/40 bg-card/40 backdrop-blur-sm flex flex-col items-center justify-center gap-4 group cursor-default hover:border-border/80 transition-all duration-500"
            >
              {/* Glowing top-border accent */}
              <div className={`absolute top-0 left-0 right-0 h-[1px] bg-gradient-to-r ${industry.accent}`} />

              {/* Shimmer overlay on hover */}
              <div className="absolute inset-0 bg-gradient-to-br from-foreground/0 via-foreground/[0.03] to-foreground/0 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

              {/* Icon container with glow ring */}
              <div className="relative flex items-center justify-center w-14 h-14 rounded-full bg-foreground/5 border border-border/30 group-hover:border-border/60 transition-all duration-500">
                <industry.icon size={26} className="text-foreground/60 group-hover:text-foreground/90 transition-colors duration-300" />
              </div>

              <span className="text-sm font-medium text-muted-foreground group-hover:text-foreground transition-colors duration-300 tracking-wide">
                {industry.name}
              </span>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default IndustryCarousel;
