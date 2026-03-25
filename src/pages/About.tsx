import { Fragment, useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Layout from "@/components/layout/Layout";
import ScrollReveal from "@/components/animations/ScrollReveal";
import aboutBg from "@/assets/about-bg.mp4";
import processBg from "@/assets/process-bg.mp4";
import gdpr from "@/assets/certificates/GDPR logo.jpeg";
import sedex from "@/assets/certificates/sedex logo.png";
import alp from "@/assets/certificates/ALP Logo.png";
import croner from "@/assets/certificates/croner-logo.png";
import gla from "@/assets/certificates/gla logo.png";

const certLogos = [
  { src: gdpr, alt: "GDPR", whiteBg: true, large: false },
  { src: sedex, alt: "Sedex", whiteBg: true, large: false },
  { src: alp, alt: "ALP Member", whiteBg: true, large: false },
  { src: croner, alt: "Croner", whiteBg: true, large: false },
  { src: gla, alt: "GLA", whiteBg: true, large: true },
];

const mission = {
  quote: "MAKE CREATIVE SIMPLE",
  title: "Our mission",
  body: `Requsyol's mission is to provide top-tier services to businesses of all sizes. We believe that companies should have the opportunity to spend less time managing employee relations and worrying about HR compliance and regulations and spend more time on initiatives that improve their bottom line.
Our ultimate goal is to deliver the best human resource services to all companies we work with while adhering to our high professionalism, quality, and standards. This entails keeping up with changing norms, rules, and job markets. Our careful balancing of internal HR standards and the retention of expert personnel contribute to the organization's success.`,
};

const processSteps = [
  {
    color: "#3BBFB6",
    title: "Meet & Discuss",
    description:
      "We sit down to understand your business, your team's culture, and the exact skill sets you need to thrive. Every placement starts with listening.",
    stat: { value: "5,000+", label: "Candidates Placed" },
  },
  {
    color: "#5B9FE0",
    title: "Strategize",
    description:
      "Together we build a tailored recruitment strategy that aligns with your timelines, budget, and growth targets. No guesswork, just a clear path forward.",
    stat: { value: "4 hrs", label: "Average Time to Place" },
  },
  {
    color: "#9B59B6",
    title: "Agree on Staff & Timeline",
    description:
      "We define the exact roles, headcount, and delivery schedule, setting clear expectations from day one so there are no surprises on either side.",
    stat: { value: "15+", label: "Industries Served" },
  },
  {
    color: "#E91E8C",
    title: "Source Candidates",
    description:
      "Our extensive network and rigorous vetting covers face-to-face interviews, RTW checks, DBS, and sector-specific credentials. Only the most qualified candidates are shortlisted.",
    stat: { value: "98%", label: "Client Satisfaction" },
  },
  {
    color: "#F4863A",
    title: "Interview & Hire",
    description:
      "We deliver a curated shortlist of fully vetted, top-matched candidates ready for your team to interview and hire with complete confidence.",
    stat: { value: "100%", label: "Dedicated Support" },
  },
];

const STEP_DURATION = 4000;

const OurProcessSection = () => {
  const [activeIdx, setActiveIdx] = useState(0);
  const active = processSteps[activeIdx];

  useEffect(() => {
    const timer = setTimeout(() => {
      setActiveIdx((prev) => (prev + 1) % processSteps.length);
    }, STEP_DURATION);
    return () => clearTimeout(timer);
  }, [activeIdx]);

  return (
    <section className="relative border-t border-border py-24 px-6 overflow-hidden">
      <video
        autoPlay
        loop
        muted
        playsInline
        className="absolute inset-0 h-full w-full object-cover"
        src={processBg}
      />
      <div className="absolute inset-0 bg-background/80" />
      <div className="relative z-10 container mx-auto max-w-6xl">

        {/* Section header */}
        <ScrollReveal>
          <p className="text-[10px] uppercase tracking-[0.35em] text-muted-foreground mb-4">
            Our Process
          </p>
          <h2 className="font-barlow font-black uppercase text-foreground text-[clamp(2.2rem,5vw,4rem)] leading-[0.9] tracking-tight mb-16">
            We help companies<br />to sustain success.
          </h2>
        </ScrollReveal>

        <div className="grid md:grid-cols-[280px_1fr] gap-10 md:gap-16 items-start">

          {/* ── Left: step list ── */}
          <div className="relative">
            <div className="absolute left-[23px] top-10 bottom-10 w-px bg-border hidden md:block" />

            {processSteps.map((step, i) => {
              const isActive = i === activeIdx;
              return (
                <button
                  key={i}
                  onClick={() => setActiveIdx(i)}
                  className="relative w-full flex items-start gap-4 py-5 text-left group"
                >
                  {/* Circle with step number */}
                  <div
                    className="relative z-10 flex-shrink-0 w-12 h-12 rounded-full border-2 flex items-center justify-center transition-all duration-300"
                    style={{
                      backgroundColor: isActive ? step.color : "transparent",
                      borderColor: isActive ? step.color : "rgba(255,255,255,0.12)",
                    }}
                  >
                    <span
                      className="font-barlow font-black text-sm leading-none"
                      style={{ color: isActive ? "#fff" : "rgba(255,255,255,0.3)" }}
                    >
                      {i + 1}
                    </span>
                  </div>

                  {/* Label + title */}
                  <div className="pt-1 min-w-0 flex-1">
                    <p
                      className="text-[10px] uppercase tracking-[0.25em] mb-1 transition-colors duration-300 font-sans"
                      style={{ color: isActive ? step.color : "rgba(255,255,255,0.3)" }}
                    >
                      Step {i + 1}
                    </p>
                    <p
                      className="text-sm font-semibold leading-snug transition-colors duration-300"
                      style={{ color: isActive ? "#fff" : "rgba(255,255,255,0.4)" }}
                    >
                      {step.title}
                    </p>
                    {/* Progress bar */}
                    <div className="mt-2.5 h-px w-full overflow-hidden rounded-full" style={{ backgroundColor: "rgba(255,255,255,0.06)" }}>
                      {isActive && (
                        <motion.div
                          key={activeIdx}
                          className="h-full origin-left"
                          style={{ backgroundColor: step.color }}
                          initial={{ scaleX: 0 }}
                          animate={{ scaleX: 1 }}
                          transition={{ duration: STEP_DURATION / 1000, ease: "linear" }}
                        />
                      )}
                    </div>
                  </div>
                </button>
              );
            })}
          </div>

          {/* ── Right: detail card ── */}
          <AnimatePresence mode="wait">
            <motion.div
              key={activeIdx}
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -10 }}
              transition={{ duration: 0.3, ease: "easeOut" }}
              className="rounded-2xl border border-border bg-card overflow-hidden"
            >
              {/* Colored accent bar */}
              <div className="h-1 w-full" style={{ backgroundColor: active.color }} />

              <div className="relative p-8 md:p-10">
                {/* Watermark number */}
                <span className="absolute top-2 right-6 font-barlow font-black leading-none select-none pointer-events-none text-[7rem] md:text-[9rem] text-white/[0.035]">
                  {String(activeIdx + 1).padStart(2, "0")}
                </span>

                {/* Title */}
                <h3 className="font-barlow font-black uppercase text-foreground text-2xl md:text-3xl leading-[0.95] tracking-tight mb-7">
                  {active.title}
                </h3>

                {/* Description */}
                <p className="text-muted-foreground text-[0.9375rem] leading-[1.85] mb-10 max-w-md">
                  {active.description}
                </p>

                {/* Stat strip */}
                <div className="flex items-baseline gap-3 pt-7 border-t border-border">
                  <span
                    className="font-barlow font-black text-4xl md:text-5xl leading-none"
                    style={{ color: active.color }}
                  >
                    {active.stat.value}
                  </span>
                  <span className="text-sm text-muted-foreground font-sans tracking-wide">
                    {active.stat.label}
                  </span>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>

        </div>
      </div>
    </section>
  );
};

const About = () => {
  return (
    <Layout>
      <section className="relative min-h-screen overflow-hidden">
        <video
          autoPlay
          loop
          muted
          playsInline
          className="absolute inset-0 h-full w-full object-cover"
          src={aboutBg}
        />
        <div className="absolute inset-0 bg-black/60" />
        <div className="relative z-10 flex min-h-screen flex-col items-center justify-center px-4 py-24 text-center text-white">
          <div className="flex items-center gap-4 w-full max-w-3xl mb-4">
            <div className="h-px flex-1 divider-line" />
            <p className="text-[11px] uppercase tracking-[0.4em] text-muted-foreground whitespace-nowrap">About Requsyol</p>
            <div className="h-px flex-1 divider-line" />
          </div>
          <p className="mt-6 max-w-3xl leading-[1.8] text-sm sm:text-base md:text-lg text-white/80">
            {mission.body.split("\n").map((paragraph, idx) => (
              <span key={idx} className="block">
                {paragraph}
              </span>
            ))}
          </p>
        </div>
      </section>

      <section className="py-16 border-t border-border">
        <div className="container mx-auto px-6">
          <ScrollReveal>
            <p className="text-center text-[10px] uppercase tracking-[0.35em] text-muted-foreground mb-10">
              Accreditations &amp; Memberships
            </p>
          </ScrollReveal>
          <div className="marquee-shell marquee-shell--certs">
            <div className="marquee-track marquee-track-logos">
              {[...certLogos, ...certLogos, ...certLogos].map((logo, i) => (
                <Fragment key={`${logo.alt}-${i}`}>
                  <div className="marquee-bracket" aria-hidden>[</div>
                  <div className="marquee-item" style={{}}>
                    <img
                      src={logo.src}
                      alt={logo.alt}
                      className="marquee-logo"
                      loading="lazy"
                      style={logo.large ? { width: "85%", height: "85%", objectFit: "contain", transform: "scale(2.4)" } : {}}
                    />
                  </div>
                  <div className="marquee-bracket" aria-hidden>]</div>
                </Fragment>
              ))}
            </div>
            <div className="marquee-fade marquee-fade-left" aria-hidden />
            <div className="marquee-fade marquee-fade-right" aria-hidden />
          </div>
        </div>
      </section>

      {/* Our Process */}
      <OurProcessSection />
    </Layout>
  );
};

export default About;
