import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import ScrollReveal from "@/components/animations/ScrollReveal";
import { Quote, ChevronLeft, ChevronRight } from "lucide-react";

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

const DURATION = 6000;

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

  const prev = () => { setCurrent((c) => (c - 1 + testimonials.length) % testimonials.length); setTick(0); };
  const next = () => { setCurrent((c) => (c + 1) % testimonials.length); setTick(0); };

  const progressPercent = Math.min((tick / (DURATION / 60)) * 100, 100);

  return (
    <section className="py-24 relative overflow-hidden">
      {/* Section background */}
      <div className="absolute inset-0 bg-foreground/[0.02]" />
      {/* Radial glow behind card */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[400px] bg-primary/5 blur-[120px] rounded-full pointer-events-none" />

      <div className="container mx-auto px-4 relative z-10">
        <ScrollReveal>
          <div className="text-center mb-14">
            <p className="text-xs font-semibold tracking-[0.25em] uppercase text-primary/70 mb-3">
              Client Stories
            </p>
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">What People Say</h2>
            <p className="text-muted-foreground">Hear from our candidates and clients</p>
          </div>
        </ScrollReveal>

        <div className="max-w-3xl mx-auto relative">
          <AnimatePresence mode="wait">
            <motion.div
              key={current}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.5 }}
            >
              {/* Glassmorphism panel */}
              <div className="relative rounded-2xl border border-border/30 bg-card/20 backdrop-blur-xl overflow-hidden p-8 md:p-14">
                {/* Watermark quote icon */}
                <Quote
                  size={120}
                  className="absolute -top-4 -left-4 text-primary/5 select-none pointer-events-none"
                  strokeWidth={1}
                />

                <div className="relative text-center">
                  <p className="text-lg md:text-xl text-foreground leading-relaxed mb-10 font-serif italic">
                    "{testimonials[current].quote}"
                  </p>
                  <div className="flex flex-col items-center gap-2">
                    <p className="font-semibold text-foreground">{testimonials[current].name}</p>
                    <p className="text-sm text-muted-foreground">
                      {testimonials[current].role}, {testimonials[current].company}
                    </p>
                    <span className="mt-1 inline-block px-3 py-1 rounded-full border border-border/50 bg-foreground/5 text-xs text-muted-foreground tracking-wide">
                      {testimonials[current].type}
                    </span>
                  </div>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>

          {/* Controls */}
          <div className="flex items-center justify-center gap-6 mt-8">
            <button onClick={prev} className="p-2 text-muted-foreground hover:text-foreground transition-colors" aria-label="Previous">
              <ChevronLeft size={20} />
            </button>

            {/* Progress bar navigation */}
            <div className="flex gap-2 items-center">
              {testimonials.map((_, i) => (
                <button
                  key={i}
                  onClick={() => { setCurrent(i); setTick(0); }}
                  aria-label={`Go to testimonial ${i + 1}`}
                  className="relative h-[3px] rounded-full overflow-hidden bg-border/30 transition-all duration-300"
                  style={{ width: i === current ? 64 : 24 }}
                >
                  {i === current && (
                    <motion.div
                      className="absolute inset-y-0 left-0 bg-primary rounded-full"
                      style={{ width: `${progressPercent}%` }}
                    />
                  )}
                  {i !== current && (
                    <div className="absolute inset-0 bg-muted-foreground/30 rounded-full" />
                  )}
                </button>
              ))}
            </div>

            <button onClick={next} className="p-2 text-muted-foreground hover:text-foreground transition-colors" aria-label="Next">
              <ChevronRight size={20} />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
