import { useRef, useEffect } from "react";
import { motion, useReducedMotion } from "framer-motion";
import { Link } from "react-router-dom";
import { ChevronDown } from "lucide-react";
import heroBg from "@/assets/hero-bg.mp4";

const words = ["WE FIND.", "WE MATCH.", "WE DELIVER."];

const HeroSection = () => {
  const prefersReduced = useReducedMotion();
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;
    video.muted = true;
    video.play().catch(() => {});
  }, []);

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background image with near-black overlay */}
      <div className="absolute inset-0">
        <video
          ref={videoRef}
          src={heroBg}
          autoPlay
          loop
          muted
          playsInline
          preload="auto"
          aria-hidden="true"
          className="w-full h-full object-cover object-center"
        />
        <div className="absolute inset-0 bg-background/75" />
        <div className="absolute bottom-0 left-0 right-0 h-40 bg-gradient-to-t from-background to-transparent" />
      </div>

      <div className="container mx-auto px-6 relative z-10 text-center pt-32 pb-24">
        {/* Massive stacked headline */}
        <div className="overflow-hidden mb-10">
          {words.map((word, i) => (
            <motion.div
              key={word}
              className="font-barlow font-black uppercase leading-[0.88] text-foreground"
              style={{ fontSize: "clamp(3.5rem, 11vw, 10rem)" }}
              initial={prefersReduced ? {} : { opacity: 0, y: 80 }}
              animate={prefersReduced ? {} : { opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.1 + i * 0.15, ease: [0.25, 0.46, 0.45, 0.94] }}
            >
              {word}
            </motion.div>
          ))}
        </div>

        {/* Subtitle */}
        <motion.p
          className="text-sm tracking-[0.22em] uppercase text-muted-foreground mb-14 font-sans"
          initial={prefersReduced ? {} : { opacity: 0 }}
          animate={prefersReduced ? {} : { opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.55 }}
        >
          The shortest path between exceptional talent and the companies that need them.
        </motion.p>

        {/* Bracketed CTA links */}
        <motion.div
          className="flex flex-col sm:flex-row gap-6 justify-center items-center"
          initial={prefersReduced ? {} : { opacity: 0, y: 20 }}
          animate={prefersReduced ? {} : { opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.7 }}
        >
          <Link
            to="/candidates"
            className="group inline-flex items-center gap-3 text-xs tracking-[0.28em] uppercase font-medium text-foreground border border-border px-8 py-4 hover:bg-foreground hover:text-background transition-all duration-300"
          >
            [ Find Work ]
          </Link>
          <Link
            to="/employers"
            className="group inline-flex items-center gap-3 text-xs tracking-[0.28em] uppercase font-medium text-muted-foreground hover:text-foreground transition-colors duration-300"
          >
            [ Hire Talent ]
          </Link>
        </motion.div>

        {/* Thin separator line */}
        <div className="absolute bottom-20 left-0 right-0 flex items-center justify-center px-8 pointer-events-none">
          <div className="flex-1 h-px bg-border/30 max-w-xs" />
          <div className="w-1 h-1 rounded-full bg-border/50 mx-4" />
          <div className="flex-1 h-px bg-border/30 max-w-xs" />
        </div>
      </div>

      {/* Animated scroll indicator */}
      {!prefersReduced && (
        <motion.div
          className="absolute bottom-7 left-1/2 -translate-x-1/2 text-muted-foreground/40"
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
        >
          <ChevronDown size={20} />
        </motion.div>
      )}
    </section>
  );
};

export default HeroSection;
