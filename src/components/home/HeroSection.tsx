import { motion, useReducedMotion } from "framer-motion";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ArrowRight, Users, Briefcase } from "lucide-react";
import heroVisual from "@/assets/hero-visual.jpeg";

const HeroSection = () => {
  const prefersReduced = useReducedMotion();
  const anim = (delay: number) =>
  prefersReduced ?
  {} :
  {
    initial: { opacity: 0, y: 40 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.8, delay, ease: [0.25, 0.46, 0.45, 0.94] as const }
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20">
      {/* Background image with overlay */}
      <div className="absolute inset-0">
        <img
          src={heroVisual}
          alt=""
          aria-hidden="true"
          className="w-full h-full object-cover object-center" />

        {/* Dark overlay for readability */}
        <div className="absolute inset-0 bg-background/75" />
        {/* Gradient fade at bottom */}
        <div className="absolute bottom-0 left-0 right-0 h-48 bg-gradient-to-t from-background to-transparent" />
      </div>

      {/* Animated background shapes on top of image */}
      {!prefersReduced &&
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <motion.div
          className="absolute -top-1/4 -right-1/4 w-[600px] h-[600px] rounded-full bg-primary/5 blur-3xl"
          animate={{ scale: [1, 1.2, 1], rotate: [0, 90, 0] }}
          transition={{ duration: 20, repeat: Infinity, ease: "linear" }} />

          <motion.div
          className="absolute -bottom-1/4 -left-1/4 w-[500px] h-[500px] rounded-full bg-secondary/10 blur-3xl"
          animate={{ scale: [1.2, 1, 1.2], rotate: [0, -90, 0] }}
          transition={{ duration: 25, repeat: Infinity, ease: "linear" }} />

        </div>
      }

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div {...anim(0)} className="mb-6">
            


          </motion.div>

          <motion.h1
            {...anim(0.15)}
            className="text-4xl sm:text-5xl md:text-7xl font-bold text-foreground leading-[1.1] tracking-tight mb-6">

            Talent Meets Opportunity
          </motion.h1>

          <motion.p
            {...anim(0.3)}
            className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto mb-10 leading-relaxed">
            The shortest path between exceptional talent and the companies that need them most.



          </motion.p>

          <motion.div {...anim(0.45)} className="flex flex-col sm:flex-row gap-4 justify-center">
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
      </div>

      {/* Scroll indicator */}
      {!prefersReduced &&
      <motion.div
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 2, repeat: Infinity }}>

          <div className="w-6 h-10 border-2 border-muted-foreground/30 rounded-full flex justify-center pt-2">
            
          </div>
        </motion.div>
      }
    </section>);

};

export default HeroSection;