import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import DeferredBackgroundVideo from "@/components/media/DeferredBackgroundVideo";
import testimonialsBg from "@/assets/testimonials-bg.mp4";

const testimonials = [
  {
    quote: "Hello, I'm very pleased to work with Requsyol. Queency is amazing in her role! Flexible, quickly reacts to requests and always with a smile on her face. I'm impressed how fast the agency is sourcing candidates and arranging interviews. They are also dealing with all staff's enquiries which makes my life easier. Definitely recommend Requsyol!",
    name: "D B",
    role: "Pharmaceutical Operations Manager",
    company: "",
  },
  {
    quote: "I have worked with Requsyol for several years. They are very efficient and provide an exceptional personalised service being able to understand the needs of our organization and what we are looking for in terms of candidates and future employees. I found a detailed understanding of the market from their part providing our managers with advice every step of the way throughout the recruitment process. Requsyol is a proactive and tireless contributor who would make a great addition to any team and to anyone.",
    name: "Casmiro Sequeira",
    role: "Managing Director",
    company: "CBK Freight Limited",
  },
  {
    quote: "I am very happy to have Requsyol to cover the personnel needs in our business. Knowing that they are aligned with our expectations gives us the peace of mind and confidence that we have the right personnel to meet our objectives. The direct, effective and personalized treatment they provide us is their added value compared to other recruitment agencies. Finally, the way they manage their internal processes saves us management time, since we have accurate and real-time information.",
    name: "Sebastian Portugal",
    role: "HR Officer Operations",
    company: "Katkin",
  },
  {
    quote: "Requsyol have been superb, finding great people that fit the brief to join our growing team. Queency took the time and trouble to get to know us and our business needs, and the extra mile she puts in is really evident in the support we have received!",
    name: "J H",
    role: "",
    company: "London",
  },
  {
    quote: "We have worked with Requsyol from the beginning of our start up journey – they have helped us with interim resource and on recruitment for our operations. They have been an excellent partner – flexible, hard working and deliver good quality people recommendations filtered for a quick hire/start-up process. We definitely plan to have Requsyol as our partner for the next stage of our growth.",
    name: "Andrew Dougal",
    role: "Co-Founder / Operations",
    company: "",
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
    <section className="relative bg-background overflow-hidden">
      <DeferredBackgroundVideo src={testimonialsBg} />
      <div className="absolute inset-0 bg-background/80" />
      <div className="relative z-10">
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
                  {[testimonials[current].role, testimonials[current].company].filter(Boolean).join(" — ")}
                </p>
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
      </div>
    </section>
  );
};

export default TestimonialsSection;
