import { useState, useEffect, Fragment } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Layout from "@/components/layout/Layout";
import ScrollReveal from "@/components/animations/ScrollReveal";

import testimonialsBg from "@/assets/testimonial-page-bg.mp4";
import clubCultured from "@/assets/clients/club-cultured.png";
import cbkFreight from "@/assets/clients/cbk-freight.png";
import urbanLegend from "@/assets/clients/urban-legend.png";
import bakeryClient from "@/assets/clients/bakery-client.png";
import dingDong from "@/assets/clients/ding-dong.png";
import chandra from "@/assets/clients/Chandra-Logo.png";
import flatIron from "@/assets/clients/flat-iron.png";

const clientLogos = [
  { src: clubCultured, alt: "Club Cultured" },
  { src: cbkFreight, alt: "CBK Freight" },
  { src: urbanLegend, alt: "Urban Legend" },
  { src: bakeryClient, alt: "Bakery Client" },
  { src: dingDong, alt: "Ding Dong" },
  { src: chandra, alt: "Chandra", large: true },
  { src: flatIron, alt: "Flat Iron" },
];

const testimonials = [
  {
    quote: "Requsyol react quickly, always answer questions with a smile and handle candidate sourcing, interviews, and staff queries so I can focus on operations. Their response time and professionalism make them easy to recommend.",
    name: "D B",
    role: "Pharmaceutical Operations Manager",
    company: "",
  },
  {
    quote: "We have partnered with Requsyol for years because they truly understand our needs. They guide us through the market outlook, advise our hiring managers, and deliver well‑screened talent without missing a beat. Their hands‑on support ensures we never waste time.",
    name: "Casmiro Sequeira",
    role: "Managing Director",
    company: "CBK Freight Limited",
  },
  {
    quote: "Requsyol keeps us confident that the right staff are in place by aligning with our objectives. Their personal touch and clear communication save us management time, while their internal reporting keeps everything transparent.",
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
    quote: "From the earliest days of our start‑up journey, Requsyol have delivered interim and permanent hires with flexibility, energy, and straight‑talk. Their recommendations are always tailored for a quick, confident hire, so they remain our partner for the next growth phase.",
    name: "Andrew Dougal",
    role: "Co-Founder / Operations",
    company: "",
  },
  {
    quote: "I'm working with Requsyol agency for a few years, with Miss Queency. I'm very happy with their support, their professional team. They're a very helpful team. Anytime you have any issues, they are very good for us. I appreciate and suggest that you can start a service and make your professional workplace with Requsyol agency.",
    name: "Shahab",
    role: "Client",
    company: "",
  },
  {
    quote: "We started working with them last year, around Christmas and all the help we needed from there was absolutely amazing. Every single time, all the stuff what I needed for us to be fulfilled — all the expectations were even above. They managed to give us all requirements we needed for the staff, for the people, and everything was amazing. I would really recommend contacting them. Absolutely amazing. I have just amazing feedback about them.",
    name: "",
    role: "Client",
    company: "",
  },
];

const DURATION = 7000;

const Testimonials = () => {
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

  const prev = () => { setCurrent((c) => (c - 1 + testimonials.length) % testimonials.length); setTick(0); };
  const next = () => { setCurrent((c) => (c + 1) % testimonials.length); setTick(0); };

  return (
    <Layout>
      <div className="pt-24 sm:pt-28 pb-16">
        <div className="container mx-auto px-4">
          <ScrollReveal>
            <section className="pt-20 pb-12 md:pb-16">
              <h1
                className="font-barlow font-black uppercase text-5xl leading-[0.9] tracking-tight text-transparent bg-clip-text sm:text-7xl md:text-9xl lg:text-[10rem]"
                style={{ backgroundImage: "linear-gradient(135deg, #56A8D6 0%, hsl(var(--logo-orange)) 50%, #2F7FB2 100%)" }}
              >
                Client
                <br />
                Stories.
              </h1>
              <p className="mt-8 max-w-2xl text-sm leading-relaxed text-muted-foreground md:text-base">
                Real results from the businesses and people we've helped. Here's what our clients
                have to say about working with Requsyol.
              </p>
            </section>
          </ScrollReveal>
        </div>

        <section className="relative overflow-hidden w-screen left-1/2 -translate-x-1/2" style={{ height: "clamp(480px, 60vh, 680px)" }}>
          <video
            autoPlay
            loop
            muted
            playsInline
            className="absolute inset-0 h-full w-full object-cover"
            src={testimonialsBg}
          />
          <div className="absolute inset-0 bg-background/75" />
          <div className="relative z-10 h-full max-w-4xl mx-auto px-4 flex flex-col justify-between py-12 md:py-16">
            <AnimatePresence mode="wait">
              <motion.div
                key={current}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.6 }}
                className="flex flex-col items-center text-center flex-1 min-h-0"
              >
                <div
                  className="font-serif text-foreground/[0.08] leading-none select-none mb-2 shrink-0"
                  style={{ fontSize: "clamp(4rem, 10vw, 8rem)" }}
                  aria-hidden="true"
                >
                  "
                </div>

                <blockquote
                  className="font-serif italic text-foreground leading-snug mb-6 -mt-6 overflow-y-auto flex-1 min-h-0"
                  style={{ fontSize: "clamp(1rem, 2.2vw, 1.6rem)" }}
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

            <div className="flex gap-6 items-center justify-center mt-6 shrink-0">
              <button
                onClick={prev}
                aria-label="Previous testimonial"
                className="text-muted-foreground hover:text-foreground transition-colors duration-200 text-lg tracking-widest"
              >
                ←
              </button>

              <div className="flex gap-2 items-center">
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

              <button
                onClick={next}
                aria-label="Next testimonial"
                className="text-muted-foreground hover:text-foreground transition-colors duration-200 text-lg tracking-widest"
              >
                →
              </button>
            </div>
          </div>
        </section>

        <div className="container mx-auto px-4">
          {/* Our Clients */}
          <div className="flex items-center justify-center gap-4 py-6">
            <div className="h-px flex-1 divider-line" />
            <span className="text-[10px] uppercase tracking-[0.35em] text-muted-foreground">
              + &nbsp;&nbsp; OUR CLIENTS &nbsp;&nbsp; +
            </span>
            <div className="h-px flex-1 divider-line" />
          </div>

          <section className="py-10 md:py-14 overflow-hidden">
            <div className="marquee-shell marquee-shell--clients">
              <div className="marquee-track marquee-track-logos">
                {[...clientLogos, ...clientLogos, ...clientLogos].map((logo, i) => (
                  <Fragment key={`${logo.alt}-${i}`}>
                    <div className="marquee-bracket" aria-hidden>[</div>
                    <div className="marquee-item">
                      <img src={logo.src} alt={logo.alt} className="marquee-logo" loading="lazy" style={logo.large ? { transform: "scale(2.4)", objectFit: "contain" } : {}} />
                    </div>
                    <div className="marquee-bracket" aria-hidden>]</div>
                  </Fragment>
                ))}
              </div>
              <div className="marquee-fade marquee-fade-left" aria-hidden />
              <div className="marquee-fade marquee-fade-right" aria-hidden />
            </div>
          </section>
        </div>
      </div>
    </Layout>
  );
};

export default Testimonials;
