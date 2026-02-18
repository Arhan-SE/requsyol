import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import ScrollReveal from "@/components/animations/ScrollReveal";
import { Button } from "@/components/ui/button";
import { ArrowRight, Users, Briefcase } from "lucide-react";

const FinalCTA = () => {
  return (
    <section className="py-32 relative overflow-hidden">
      {/* Rich dark gradient background panel */}
      <div
        className="absolute inset-0"
        style={{
          background: "linear-gradient(135deg, hsl(222 47% 7%) 0%, hsl(216 40% 11%) 50%, hsl(230 45% 8%) 100%)",
        }}
      />

      {/* Glowing top border line */}
      <div
        className="absolute top-0 left-0 right-0 h-px"
        style={{
          background: "linear-gradient(90deg, transparent 0%, hsl(var(--primary) / 0.4) 30%, hsl(var(--primary) / 0.6) 50%, hsl(var(--primary) / 0.4) 70%, transparent 100%)",
        }}
      />

      {/* Pulsing background orb */}
      <div className="absolute inset-0 pointer-events-none">
        <motion.div
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[350px] bg-primary/8 blur-[100px] rounded-full"
          animate={{ scale: [1, 1.12, 1] }}
          transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
        />
      </div>

      {/* Decorative watermark quotation marks */}
      <div
        className="absolute top-0 left-6 font-serif text-[220px] leading-none text-foreground/[0.03] select-none pointer-events-none"
        aria-hidden="true"
      >
        "
      </div>
      <div
        className="absolute bottom-0 right-6 font-serif text-[220px] leading-none text-foreground/[0.03] select-none pointer-events-none rotate-180"
        aria-hidden="true"
      >
        "
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <ScrollReveal>
          <div className="max-w-3xl mx-auto text-center">
            <p className="text-xs font-semibold tracking-[0.25em] uppercase text-primary/70 mb-6">
              Get In Touch
            </p>
            <h2 className="text-3xl md:text-5xl font-bold text-foreground mb-6 leading-tight">
              Ready to{" "}
              <em className="font-serif font-bold not-italic" style={{ fontStyle: "italic" }}>
                Get Started?
              </em>
            </h2>
            <p className="text-lg text-muted-foreground mb-10 max-w-xl mx-auto leading-relaxed">
              Whether you're looking for your next opportunity or need reliable talent,
              Requsyol is here to help.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/candidates">
                <Button
                  size="lg"
                  className="gap-2 text-base px-8 py-6 group shadow-lg shadow-primary/25 hover:shadow-primary/40 transition-all duration-300"
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
                  className="gap-2 text-base px-8 py-6 group border-border/40 hover:border-border/80 hover:bg-foreground/5 transition-all duration-300"
                >
                  <Briefcase size={20} />
                  Hire Talent
                  <ArrowRight size={16} className="transition-transform group-hover:translate-x-1" />
                </Button>
              </Link>
            </div>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
};

export default FinalCTA;
