import { motion, useReducedMotion } from "framer-motion";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ArrowRight, Users, Briefcase } from "lucide-react";
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
      {/* Animated background shapes */}
      {!prefersReduced && (
        <div className="absolute inset-0 overflow-hidden">
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
        <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-16 max-w-7xl mx-auto">
          {/* Left: Text content */}
          <div className="flex-1 text-center lg:text-left">
            <motion.div {...anim(0)} className="mb-6">
              <span className="inline-block px-4 py-1.5 text-xs font-medium tracking-wider uppercase text-muted-foreground border border-border rounded-full">
                Staffing & Recruiting
              </span>
            </motion.div>

            <motion.h1
              {...anim(0.15)}
              className="text-4xl sm:text-5xl md:text-6xl font-bold text-foreground leading-[1.1] tracking-tight mb-6"
            >
              Find the right job or talent
              <span className="block text-muted-foreground mt-2">— quickly & reliably</span>
            </motion.h1>

            <motion.p
              {...anim(0.3)}
              className="text-lg md:text-xl text-muted-foreground max-w-xl mb-10 leading-relaxed mx-auto lg:mx-0"
            >
              Requsyol matches verified candidates with top employers across industries.
              Fast placements, compliance handled, dedicated support every step.
            </motion.p>

            <motion.div {...anim(0.45)} className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <Link to="/candidates">
                <Button size="lg" className="gap-2 text-base px-8 py-6 group">
                  <Users size={20} />
                  Find Work
                  <ArrowRight size={16} className="transition-transform group-hover:translate-x-1" />
                </Button>
              </Link>
              <Link to="/employers">
                <Button size="lg" variant="outline" className="gap-2 text-base px-8 py-6 group">
                  <Briefcase size={20} />
                  Hire Talent
                  <ArrowRight size={16} className="transition-transform group-hover:translate-x-1" />
                </Button>
              </Link>
            </motion.div>
          </div>

          {/* Right: Hero visual */}
          <motion.div
            className="flex-1 flex items-center justify-center w-full max-w-lg lg:max-w-none"
            initial={prefersReduced ? undefined : { opacity: 0, x: 60, scale: 0.95 }}
            animate={prefersReduced ? undefined : { opacity: 1, x: 0, scale: 1 }}
            transition={{ duration: 1, delay: 0.3, ease: [0.25, 0.46, 0.45, 0.94] }}
          >
            <div className="relative w-full">
              {/* Glow backdrop */}
              <div className="absolute inset-0 rounded-3xl bg-primary/10 blur-3xl scale-110" />
              <img
                src={heroVisual}
                alt="Professional staffing and recruiting solutions"
                className="relative w-full h-auto rounded-2xl object-cover drop-shadow-2xl"
              />
            </div>
          </motion.div>
        </div>
      </div>

      {/* Scroll indicator */}
      {!prefersReduced && (
        <motion.div
          className="absolute bottom-8 left-1/2 -translate-x-1/2"
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
        >
          <div className="w-6 h-10 border-2 border-muted-foreground/30 rounded-full flex justify-center pt-2">
            <div className="w-1.5 h-1.5 bg-muted-foreground/50 rounded-full" />
          </div>
        </motion.div>
      )}
    </section>
  );
};

export default HeroSection;
