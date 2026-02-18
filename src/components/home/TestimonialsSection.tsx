import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

const testimonials = [
  {
    quote: "Requsyol found us the perfect warehouse team within 48 hours. Their screening process saved us weeks of recruitment time.",
    name: "Sarah Mitchell",
    role: "Operations Director",
    company: "Swift Logistics",
    type: "Employer",
  },
  {
    quote: "I was placed in a great role within a week of registering. The support team kept me informed every step of the way.",
    name: "James Okafor",
    role: "Warehouse Operative",
    company: "Candidate",
    type: "Candidate",
  },
  {
    quote: "Reliable, professional, and compliant. Requsyol has been our go-to staffing partner for over two years.",
    name: "David Chen",
    role: "HR Manager",
    company: "BuildRight Construction",
    type: "Employer",
  },
];

const DURATION = 7000;

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
      transition={{ duration: 0.8 }}
      style={{ transformOrigin: "center" }}
    />
    <span className="text-[10px] tracking-[0.35em] uppercase text-muted-foreground font-sans px-2">{label}</span>
    <motion.div
      className="flex-1 h-px bg-border mx-3"
      initial={{ scaleX: 0 }}
      whileInView={{ scaleX: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8 }}
      style={{ transformOrigin: "center" }}
    />
    <span className="text-muted-foreground text-sm font-light">+</span>
  </motion.div>
);

const TestimonialsSection = () => {
  const [current, setCurrent] = useState(0);
  const [tick, setTick] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrent((c) => (c + 1) % testimonials.length);
      setTick(0);
    }, DURATION);

    const progress = setInterval(() => {
      setTick((t) => t + 1);
    }, 60);

    return () => {
      clearInterval(timer);
      clearInterval(progress);
    };
  }, [current]);

  const progressPercent = Math.min((tick / (DURATION / 60)) * 100, 100);

  return (
    <section className="bg-background">
      <SectionDivider label="Client Stories" />

      <div className="container mx-auto px-6 pb-20">
        {/* Giant editorial quote */}
        <div className="max-w-4xl mx-auto text-center">
          <AnimatePresence mode="wait">
            <motion.div
              key={current}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.6 }}
            >
              {/* Giant opening quote mark */}
              <div
                className="font-serif text-foreground/[0.08] leading-none select-none mb-4"
                style={{ fontSize: "clamp(6rem, 15vw, 12rem)" }}
                aria-hidden="true"
              >
                "
              </div>

              <blockquote
                className="font-serif italic text-foreground leading-snug mb-8 -mt-8"
                style={{ fontSize: "clamp(1.4rem, 3.5vw, 2.5rem)" }}
              >
                {testimonials[current].quote}
              </blockquote>

              <div className="flex flex-col items-center gap-1">
                <p className="text-xs tracking-[0.3em] uppercase text-foreground font-sans font-medium">
                  {testimonials[current].name}
                </p>
                <p className="text-[10px] tracking-[0.2em] uppercase text-muted-foreground font-sans">
                  {testimonials[current].role} — {testimonials[current].company}
                </p>
                <span className="mt-2 inline-block border border-border px-4 py-1 text-[9px] tracking-[0.3em] uppercase text-muted-foreground font-sans">
                  {testimonials[current].type}
                </span>
              </div>
            </motion.div>
          </AnimatePresence>

          {/* Progress bar navigation */}
          <div className="flex gap-2 items-center justify-center mt-12">
            {testimonials.map((_, i) => (
              <button
                key={i}
                onClick={() => { setCurrent(i); setTick(0); }}
                aria-label={`Go to testimonial ${i + 1}`}
                className="relative h-[2px] bg-border/30 overflow-hidden transition-all duration-300"
                style={{ width: i === current ? 80 : 28 }}
              >
                {i === current && (
                  <motion.div
                    className="absolute inset-y-0 left-0 bg-foreground"
                    style={{ width: `${progressPercent}%` }}
                  />
                )}
                {i !== current && (
                  <div className="absolute inset-0 bg-muted-foreground/20" />
                )}
              </button>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
