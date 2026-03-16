import { useRef, useEffect, useState } from "react";
import { motion, useReducedMotion, AnimatePresence } from "framer-motion";
import { Link } from "react-router-dom";
import { ChevronDown } from "lucide-react";
import heroBg from "@/assets/hero-bg.mp4";

const words = ["WE FIND.", "WE MATCH.", "WE DELIVER."];

const HeroSection = () => {
  const prefersReduced = useReducedMotion();
  const videoRef = useRef<HTMLVideoElement>(null);
  const [videoReady, setVideoReady] = useState(false);

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;
    video.muted = true;
    video.play().catch(() => {});
  }, []);

  // Content appears only after video is ready, with a small extra delay
  const contentDelay = videoReady ? 0.3 : 100;

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-background">
      {/* Background video */}
      <div className="absolute inset-0">
        <motion.div
          className="w-full h-full"
          initial={{ opacity: 0 }}
          animate={{ opacity: videoReady ? 1 : 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
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
            onCanPlayThrough={() => setVideoReady(true)}
          />
        </motion.div>
        <div className="absolute inset-0 bg-black/50" />
        <div className="absolute bottom-0 left-0 right-0 h-40 bg-gradient-to-t from-background/0 to-transparent" />
      </div>

      {/* Loading indicator while video loads */}
      <AnimatePresence>
        {!videoReady && (
          <motion.div
            className="absolute inset-0 z-20 flex items-center justify-center bg-background"
            exit={{ opacity: 0 }}
            transition={{ duration: 0.6 }}
          >
            <motion.div
              className="w-8 h-8 border-2 border-muted-foreground/30 border-t-foreground rounded-full"
              animate={{ rotate: 360 }}
              transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
            />
          </motion.div>
        )}
      </AnimatePresence>

      <div className="container mx-auto px-6 relative z-10 text-center pt-32 pb-24">
        {/* Massive stacked headline */}
        <div className="overflow-hidden mb-10">
          {words.map((word, i) => (
            <motion.div
              key={word}
              className="font-display font-black uppercase leading-[0.88] text-foreground"
              style={{ fontSize: "clamp(3rem, 10vw, 8rem)" }}
              initial={prefersReduced ? {} : { opacity: 0, y: 80 }}
              animate={prefersReduced ? {} : videoReady ? { opacity: 1, y: 0 } : { opacity: 0, y: 80 }}
              transition={{ duration: 0.7, delay: contentDelay + i * 0.15, ease: [0.25, 0.46, 0.45, 0.94] }}
            >
              {word}
            </motion.div>
          ))}
        </div>

        {/* Bracketed CTA links */}
        <motion.div
          className="flex flex-col sm:flex-row gap-3 sm:gap-6 justify-center items-center"
          initial={prefersReduced ? {} : { opacity: 0, y: 20 }}
          animate={prefersReduced ? {} : videoReady ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.7, delay: contentDelay + 0.6 }}
        >
          <Link
            to="/candidates"
            className="group inline-flex items-center gap-3 text-xs tracking-[0.28em] uppercase font-medium text-white border-2 border-white px-6 sm:px-8 py-3 sm:py-4 hover:bg-white hover:text-black transition-all duration-300"
          >
            [ Find Work ]
          </Link>
          <Link
            to="/employers"
            className="group inline-flex items-center gap-3 text-xs tracking-[0.28em] uppercase font-medium text-white border-2 border-white px-6 sm:px-8 py-3 sm:py-4 hover:bg-white hover:text-black transition-all duration-300"
          >
            [ Hire Talent ]
          </Link>
        </motion.div>

        {/* Thin separator line */}
        <motion.div
          className="absolute bottom-20 left-0 right-0 flex items-center justify-center px-8 pointer-events-none"
          initial={{ opacity: 0 }}
          animate={videoReady ? { opacity: 1 } : { opacity: 0 }}
          transition={{ duration: 0.6, delay: contentDelay + 0.7 }}
        >
          <div className="flex-1 h-px divider-line max-w-xs" />
          <div className="w-1 h-1 rounded-full bg-logo-cyan-dark/60 mx-4" />
          <div className="flex-1 h-px divider-line max-w-xs" />
        </motion.div>
      </div>

      {/* Animated scroll indicator */}
      {!prefersReduced && videoReady && (
        <motion.div
          className="absolute bottom-7 left-1/2 -translate-x-1/2 text-muted-foreground/40"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1, y: [0, 8, 0] }}
          transition={{ opacity: { duration: 0.5 }, y: { duration: 2, repeat: Infinity, ease: "easeInOut" } }}
        >
          <ChevronDown size={20} />
        </motion.div>
      )}
    </section>
  );
};

export default HeroSection;
