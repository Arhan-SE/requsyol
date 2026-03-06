import { useState } from "react";
import { motion } from "framer-motion";
import { Factory, Utensils, Building2, Truck, ShoppingBag, Hammer, HeartPulse, Warehouse } from "lucide-react";
import DeferredBackgroundVideo from "@/components/media/DeferredBackgroundVideo";
import industriesBg from "@/assets/industries-bg.mp4";

const industries = [
  { icon: Factory, name: "Manufacturing", image: "https://images.unsplash.com/photo-1565043589221-1a6fd9ae45c7?auto=format&fit=crop&w=400&q=80" },
  { icon: Utensils, name: "Hospitality", image: "https://images.unsplash.com/photo-1555396273-367ea4eb4db5?auto=format&fit=crop&w=400&q=80" },
  { icon: Building2, name: "Construction", image: "https://images.unsplash.com/photo-1504307651254-35680f356dfd?auto=format&fit=crop&w=400&q=80" },
  { icon: Truck, name: "Logistics", image: "https://images.unsplash.com/photo-1601584115197-04ecc0da31d7?auto=format&fit=crop&w=400&q=80" },
  { icon: ShoppingBag, name: "Retail", image: "https://images.unsplash.com/photo-1441986300917-64674bd600d8?auto=format&fit=crop&w=400&q=80" },
  { icon: Hammer, name: "Trades", image: "https://images.unsplash.com/photo-1581578731548-c64695cc6952?auto=format&fit=crop&w=400&q=80" },
  { icon: HeartPulse, name: "Healthcare", image: "https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?auto=format&fit=crop&w=400&q=80" },
  { icon: Warehouse, name: "Warehousing", image: "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?auto=format&fit=crop&w=400&q=80" },
];

const doubled = [...industries, ...industries];

const SectionDivider = ({ label }: { label: string }) => (
  <motion.div
    className="flex items-center gap-0 w-full px-10 py-16"
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
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  return (
    <section className="bg-background">
      <SectionDivider label="Sectors We Cover" />
      <div className="relative overflow-hidden">
      <DeferredBackgroundVideo src={industriesBg} />
      <div className="absolute inset-0 bg-background/80" />
      <div className="relative z-10">

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
          transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
        >
          {doubled.map((industry, i) => {
            const isHovered = hoveredIndex === i;
            return (
              <motion.div
                key={i}
                className="relative flex-shrink-0 w-48 h-40 border-r border-border flex flex-col items-center justify-center gap-4 overflow-hidden cursor-default"
                onMouseEnter={() => setHoveredIndex(i)}
                onMouseLeave={() => setHoveredIndex(null)}
                animate={{ scale: isHovered ? 1.12 : 1, zIndex: isHovered ? 10 : 0 }}
                transition={{ duration: 0.18, ease: "easeOut" }}
              >
                {/* Background image */}
                <motion.img
                  src={industry.image}
                  alt=""
                  loading="lazy"
                  className="absolute inset-0 w-full h-full object-cover"
                  animate={{ opacity: isHovered ? 1 : 0 }}
                  transition={{ duration: 0.15 }}
                />
                {/* Dark overlay */}
                <motion.div
                  className="absolute inset-0 bg-black/55"
                  animate={{ opacity: isHovered ? 1 : 0 }}
                  transition={{ duration: 0.15 }}
                />
                {/* Icon */}
                <industry.icon
                  size={28}
                  className="relative z-10 transition-colors duration-150"
                  style={{ color: isHovered ? "white" : undefined }}
                />
                {/* Label */}
                <span
                  className="relative z-10 text-[10px] tracking-[0.25em] uppercase font-sans transition-colors duration-150"
                  style={{ color: isHovered ? "white" : undefined }}
                >
                  {industry.name}
                </span>
              </motion.div>
            );
          })}
        </motion.div>
      </div>

      <div className="h-px bg-border" />
      </div>
      </div>
    </section>
  );
};

export default IndustryCarousel;
