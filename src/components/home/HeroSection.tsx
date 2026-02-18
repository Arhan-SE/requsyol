import { motion, useReducedMotion } from "framer-motion";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ArrowRight, Users, Briefcase, ChevronDown } from "lucide-react";
import heroVisual from "@/assets/hero-visual.jpeg";

const HeroSection = () => {
  const prefersReduced = useReducedMotion();
  const anim = (delay: number) =>
    prefersReduced
      ? {}
      : {
          initial: { opacity: 0, y: 40 },
          animate: { opacity: 1, y: 0 },
          transition: { duration: 0.8, delay, ease: [0.25, 0.46, 0.45, 0.94] as const },
        };

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20">
      {/* Background image with overlay */}
      <div className="absolute inset-0">
        <img
          src={heroVisual}
          alt=""
          aria-hidden="true"
          className="w-full h-full object-cover object-center"
        />
        <div className="absolute inset-0 bg-background/75" />
        <div className="absolute bottom-0 left-0 right-0 h-48 bg-gradient-to-t from-background to-transparent" />
      </div>

      {/* Animated background shapes */}
      {!prefersReduced && (
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <motion.div
            className="absolute -top-1/4 -right-1/4 w-[600px] h-[600px] rounded-full bg-primary/5 blur-3xl"
            animate={{ scale: [1, 1.2, 1], rotate: [0, 90, 0] }}
            transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
          />
          <motion.div
            className="absolute -bottom-1/4 -left-1/4 w-[500px] h-[500px] rounded-full bg-secondary/10 blur-3xl"
            animate={{ scale: [1.2, 1, 1.2], rotate: [0, -90, 0] }}
            transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
          />
        </div>
      )}

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          {/* Pulsing trust badge */}
          <motion.div {...anim(0)} className="mb-8 flex justify-center">
            <div className="inline-flex items-center gap-2.5 px-4 py-2 rounded-full border border-border/50 bg-card/30 backdrop-blur-sm text-sm text-muted-foreground">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
                <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500" />
              </span>
              Trusted by <span className="text-foreground font-semibold">300+ Companies</span> across the UK
            </div>
          </motion.div>

          <motion.h1
            {...anim(0.15)}
            className="text-4xl sm:text-5xl md:text-7xl font-bold text-foreground leading-[1.1] tracking-tight mb-6"
          >
            Talent Meets Opportunity
          </motion.h1>

          <motion.p
            {...anim(0.3)}
            className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto mb-10 leading-relaxed"
          >
            The shortest path between exceptional talent and the companies that need them most.
          </motion.p>

          <motion.div {...anim(0.45)} className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/candidates">
              <Button
                size="lg"
                className="gap-2 text-base px-8 py-6 group shadow-lg shadow-primary/20 hover:shadow-primary/40 transition-shadow duration-300"
              >
                <Users size={20} />
                Find Work
                <ArrowRight size={16} className="transition-transform group-hover:translate-x-1" />
              </Button>
            </Link>
            <Link to="/employers">
              <Button
                size="lg"
                variant="outline"
                className="gap-2 text-base px-8 py-6 group hover:bg-foreground/5 transition-all duration-300"
              >
                <Briefcase size={20} />
                Hire Talent
                <ArrowRight size={16} className="transition-transform group-hover:translate-x-1" />
              </Button>
            </Link>
          </motion.div>
        </div>
      </div>

      {/* Separator line with center dot */}
      <div className="absolute bottom-20 left-0 right-0 flex items-center justify-center gap-0 px-8 pointer-events-none">
        <div className="flex-1 h-px bg-gradient-to-r from-transparent via-border/40 to-border/40 max-w-xs" />
        <div className="w-1.5 h-1.5 rounded-full bg-border/60 mx-4" />
        <div className="flex-1 h-px bg-gradient-to-l from-transparent via-border/40 to-border/40 max-w-xs" />
      </div>

      {/* Animated scroll indicator */}
      {!prefersReduced && (
        <motion.div
          className="absolute bottom-6 left-1/2 -translate-x-1/2 text-muted-foreground/50"
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
        >
          <ChevronDown size={22} />
        </motion.div>
      )}
    </section>
  );
};

export default HeroSection;
