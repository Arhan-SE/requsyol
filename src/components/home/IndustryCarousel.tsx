import { motion } from "framer-motion";
import ScrollReveal from "@/components/animations/ScrollReveal";
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

// Double the array for infinite scroll effect
const doubled = [...industries, ...industries];

const IndustryCarousel = () => {
  return (
    <section className="py-24 overflow-hidden">
      <div className="container mx-auto px-4">
        <ScrollReveal>
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">Industries We Serve</h2>
            <p className="text-muted-foreground">Staffing solutions across a wide range of sectors</p>
          </div>
        </ScrollReveal>
      </div>

      <div className="relative group">
        <motion.div
          className="flex gap-6 py-4"
          animate={{ x: ["0%", "-50%"] }}
          transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
          whileHover={{ animationPlayState: "paused" }}
        >
          {doubled.map((industry, i) => (
            <div
              key={i}
              className="flex-shrink-0 w-48 h-32 bg-card border border-border rounded-lg flex flex-col items-center justify-center gap-3 hover:border-primary/30 transition-colors cursor-default"
            >
              <industry.icon size={32} className="text-muted-foreground" />
              <span className="text-sm font-medium text-foreground">{industry.name}</span>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default IndustryCarousel;
