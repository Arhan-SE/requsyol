import { Fragment, useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Layout from "@/components/layout/Layout";
import ScrollReveal from "@/components/animations/ScrollReveal";
import aboutBg from "@/assets/videos/about-bg.mp4";
import processBg from "@/assets/videos/process-bg.mp4";
import gdpr from "@/assets/certificates/GDPR logo.jpeg";
import sedex from "@/assets/certificates/sedex logo.png";
import alp from "@/assets/certificates/ALP Logo.png";
import croner from "@/assets/certificates/croner-logo.png";
import glaa from "@/assets/certificates/GLAA logo.png";
const certLogos = [
  { src: gdpr, alt: "GDPR", whiteBg: true, large: false },
  { src: sedex, alt: "Sedex", whiteBg: true, large: false },
  { src: alp, alt: "ALP Member", whiteBg: true, large: false },
  { src: croner, alt: "Croner", whiteBg: true, large: false },
  { src: glaa, alt: "GLAA", whiteBg: true, large: false, rounded: true },
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
    mainTitle: "Operational Staffing Review",
    subtitle: "(The Audit)",
    description:
      "We sit down to understand your business, your team's culture, and the exact skill sets you need to thrive. Every placement starts with listening.",
    stat: { value: "5,000+", label: "Candidates Placed" },
  },
  {
    color: "#5B9FE0",
    mainTitle: "Strategic Mapping",
    subtitle: "(The Plan)",
    description:
      "Together we build a tailored recruitment strategy that aligns with your timelines, budget, and growth targets. No guesswork, just a clear path forward.",
    stat: { value: "4 hrs", label: "Average Time to Place" },
  },
  {
    color: "#9B59B6",
    mainTitle: "Proactive Talent Sourcing",
    mobileTitle: "Proactive Talent\nSourcing",
    subtitle: "(The Search)",
    description:
      "We actively headhunt top-tier talent using our deep industry networks to meet your specific needs for part-time, full-time, or flexible staffing. By engaging both active and passive candidates not found on standard job boards, we ensure you have access to the best professionals in the market.",
    stat: { value: "15+", label: "Industries Served" },
  },
  {
    color: "#E91E8C",
    mainTitle: "Candidate Vetting & Delivery",
    subtitle: "(Compliance & Quality)",
    description:
      "Our extensive network and rigorous vetting covers face-to-face interviews, RTW checks, DBS, and sector-specific credentials. Only the most qualified candidates are shortlisted.",
    stat: { value: "98%", label: "Client Satisfaction" },
  },
  {
    color: "#F4863A",
    mainTitle: "Post-Placement Support",
    mobileTitle: "Post-Placement\nSupport",
    subtitle: "(The Follow-up)",
    description:
      "We provide end-to-end support to ensure seamless integration. This includes performance feedback, compliance monitoring, and full administrative management covering rotas, timesheets, and payroll. We act as an extension of your team to ensure your staffing remains efficient and fully optimised.",
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
      <div className="absolute inset-0 bg-black/50" />
      <div className="relative z-10 container mx-auto max-w-6xl">

        {/* Section header */}
        <ScrollReveal>
          <p className="text-[10px] uppercase tracking-[0.35em] text-muted-foreground mb-4">
            Our Process
          </p>
          <h2 className="font-barlow font-black uppercase text-foreground text-[clamp(2.2rem,5vw,4rem)] leading-[0.9] tracking-tight mb-8 md:mb-16">
            We help companies<br />to sustain success.
          </h2>
        </ScrollReveal>

        {/* ── Mobile layout: step number pills + content card side by side ── */}
        <div className="md:hidden flex gap-3 items-start">

          {/* Step numbers column */}
          <div className="flex flex-col gap-3 pt-1 flex-shrink-0">
            {processSteps.map((step, i) => {
              const isActive = i === activeIdx;
              return (
                <button
                  key={i}
                  onClick={() => setActiveIdx(i)}
                  className="flex items-center justify-center w-10 h-10 rounded-full border-2 transition-all duration-300"
                  style={{
                    backgroundColor: isActive ? step.color : "transparent",
                    borderColor: isActive ? step.color : "rgba(255,255,255,0.2)",
                  }}
                >
                  <span
                    className="font-barlow font-black text-sm leading-none"
                    style={{ color: isActive ? "#fff" : "rgba(255,255,255,0.4)" }}
                  >
                    {i + 1}
                  </span>
                </button>
              );
            })}
          </div>

          {/* Content card */}
          <div className="flex-1 min-w-0">
            <AnimatePresence mode="wait">
              <motion.div
                key={activeIdx}
                initial={{ opacity: 0, x: 10 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -10 }}
                transition={{ duration: 0.3, ease: "easeOut" }}
                className="rounded-2xl border border-border bg-card overflow-hidden"
              >
                <div className="relative p-5">
                  <span className="absolute top-2 right-4 font-barlow font-black leading-none select-none pointer-events-none text-[4rem] text-white/[0.035]">
                    {String(activeIdx + 1).padStart(2, "0")}
                  </span>
                  <p
                    className="text-[10px] uppercase tracking-[0.25em] mb-1 font-sans"
                    style={{ color: active.color }}
                  >
                    Step {activeIdx + 1}
                  </p>
                  <h3 className="font-barlow font-black uppercase text-foreground text-xl leading-[0.95] tracking-tight mb-1 whitespace-pre-line">
                    {active.mobileTitle ?? active.mainTitle}
                  </h3>
                  <p
                    className="text-xs leading-snug mb-4"
                    style={{ color: active.color }}
                  >
                    {active.subtitle}
                  </p>
                  <p className="text-muted-foreground text-sm leading-[1.85] mb-5">
                    {active.description}
                  </p>
                  <div className="flex items-baseline gap-3 pt-4 border-t border-border">
                    <span
                      className="font-barlow font-black text-3xl leading-none"
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

        {/* ── Desktop layout: step list + detail card ── */}
        <div className="hidden md:grid md:grid-cols-[280px_1fr] gap-16 items-start">

          {/* Left: step list */}
          <div className="relative">
            <div className="absolute left-[23px] top-10 bottom-10 w-px bg-border" />

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
                      {step.mainTitle}
                    </p>
                    <p
                      className="text-xs leading-snug transition-colors duration-300 mt-0.5"
                      style={{ color: isActive ? step.color : "rgba(255,255,255,0.25)" }}
                    >
                      {step.subtitle}
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

          {/* Right: detail card */}
          <AnimatePresence mode="wait">
            <motion.div
              key={activeIdx}
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -10 }}
              transition={{ duration: 0.3, ease: "easeOut" }}
              className="rounded-2xl border border-border bg-card overflow-hidden"
            >
              <div className="relative p-6 md:p-10">
                {/* Watermark number */}
                <span className="absolute top-2 right-6 font-barlow font-black leading-none select-none pointer-events-none text-[5rem] md:text-[9rem] text-white/[0.035]">
                  {String(activeIdx + 1).padStart(2, "0")}
                </span>

                {/* Title */}
                <h3 className="font-barlow font-black uppercase text-foreground text-2xl md:text-3xl leading-[0.95] tracking-tight mb-7">
                  {active.mainTitle}
                </h3>

                {/* Description */}
                <p className="text-muted-foreground text-[0.9375rem] leading-[1.85] mb-6 md:mb-10 max-w-md">
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

      {/* About content section */}
      <section className="bg-background border-t border-border px-6 py-28 md:py-36">
        <div className="container mx-auto max-w-5xl">

          {/* Bridging the Gap — center */}
          <ScrollReveal>
            <div className="max-w-2xl mx-auto text-center">
              <h2 className="font-barlow font-black uppercase text-foreground text-[clamp(2rem,5vw,3.25rem)] leading-[1.05] tracking-tight mb-8 md:mb-10">
                Bridging the Gap Between<br />Ambition and Excellence
              </h2>
              <p className="text-muted-foreground leading-[2] text-sm sm:text-base mb-6 md:mb-8">
                Established in 2019, Requsyol was founded on the belief that the struggle to find reliable talent and the quest for a workplace that truly values its people are two sides of the same coin. We do not just fill vacancies; we build professional partnerships that last.
              </p>
              <p className="text-muted-foreground leading-[2] text-sm sm:text-base">
                As one of the UK's fastest growing and most prominent head hunting firms, we have spent the last several years reimagining recruitment. By combining cutting edge technology like our Geo Tracked time management app with a deeply human approach to screening, we ensure that every placement is a perfect fit.
              </p>
            </div>
          </ScrollReveal>

          {/* Divider */}
          <div className="flex items-center my-16 md:my-20">
            <span className="text-[11px] font-black tracking-[0.12em] text-[hsl(var(--logo-orange))]">+</span>
            <div className="flex-1 h-px mx-3 divider-line" />
            <span className="text-[11px] font-black tracking-[0.12em] text-[hsl(var(--logo-orange))]">+</span>
          </div>

          {/* Mission and Vision — center */}
          <ScrollReveal>
            <div className="max-w-2xl mx-auto text-center">
              <p className="text-sm uppercase tracking-[0.35em] text-logo-cyan mb-8 md:mb-12">Our Mission and Vision</p>
              <p className="text-muted-foreground leading-[2.1] text-sm sm:text-base mb-8 md:mb-10 tracking-wide">
                Our mission is to provide top tier services to businesses of all sizes. We believe that companies should have the opportunity to spend less time managing employee relations or worrying about HR compliance and regulations and more time on initiatives that improve their bottom line.
              </p>
              <p className="text-muted-foreground leading-[2.1] text-sm sm:text-base tracking-wide">
                Our ultimate goal is to deliver the best human resource services to every company we work with while adhering to our high standards of professionalism, quality, and ethics. In an ever evolving landscape, we pride ourselves on keeping up with changing norms, rules, and job markets to ensure your business stays ahead of the curve.
              </p>
            </div>
          </ScrollReveal>

          {/* Divider */}
          <div className="flex items-center my-16 md:my-20">
            <span className="text-[11px] font-black tracking-[0.12em] text-[hsl(var(--logo-orange))]">+</span>
            <div className="flex-1 h-px mx-3 divider-line" />
            <span className="text-[11px] font-black tracking-[0.12em] text-[hsl(var(--logo-orange))]">+</span>
          </div>

          {/* Professional Standards — center */}
          <ScrollReveal>
            <div className="max-w-2xl mx-auto text-center">
              <p className="text-sm uppercase tracking-[0.35em] text-logo-cyan mb-6 md:mb-8">Our Professional Standards</p>
              <p className="text-muted-foreground leading-[2] text-sm sm:text-base mb-10 md:mb-12">
                We understand that an organisation's success depends on the careful balancing of internal HR standards and the retention of expert personnel. To achieve this, we go the extra mile:
              </p>
              <div className="grid sm:grid-cols-2 gap-5 md:gap-6 text-left">
                {[
                  { title: "Verified Talent", body: "Every worker in our pool is screened by experts and ready for action." },
                  { title: "Legal Peace of Mind", body: "We take full responsibility for documentation, GDPR, and legal compliance." },
                  { title: "Performance Tracking", body: "Worker profiles are rated based on punctuality, skills, and professionalism to ensure consistent quality." },
                  { title: "Comprehensive Management", body: "From sourcing and induction to end to end payroll and pension contributions, we handle the heavy lifting." },
                ].map(({ title, body }) => (
                  <div key={title} className="border border-border p-6 md:p-8">
                    <p className="text-[10px] uppercase tracking-[0.25em] text-logo-cyan mb-3">{title}</p>
                    <p className="text-muted-foreground text-sm leading-[1.9]">{body}</p>
                  </div>
                ))}
              </div>
            </div>
          </ScrollReveal>

          {/* Divider */}
          <div className="flex items-center my-16 md:my-20">
            <span className="text-[11px] font-black tracking-[0.12em] text-[hsl(var(--logo-orange))]">+</span>
            <div className="flex-1 h-px mx-3 divider-line" />
            <span className="text-[11px] font-black tracking-[0.12em] text-[hsl(var(--logo-orange))]">+</span>
          </div>

          {/* Why Choose Requsyol — center */}
          <ScrollReveal>
            <div className="max-w-2xl mx-auto text-center">
              <p className="text-sm uppercase tracking-[0.35em] text-logo-cyan mb-6 md:mb-8">Why Choose Requsyol</p>
              <p className="text-muted-foreground leading-[2] text-sm sm:text-base">
                Since our journey began in 2019, we have provided bespoke recruitment solutions that empower businesses to scale and individuals to thrive. Whether you need hourly, part time, or full time support, we provide the reliable foundation your business deserves. Our careful attention to basic education, qualifications, and background checks means you can hire with total confidence every time.
              </p>
            </div>
          </ScrollReveal>

        </div>
      </section>

      {/* Our Process */}
      <OurProcessSection />

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
                      style={logo.large ? { width: "85%", height: "85%", objectFit: "contain", transform: "scale(2.4)" } : logo.rounded ? { borderRadius: "50%", width: "100px", height: "100px", objectFit: "contain", border: "2px solid hsl(189, 78%, 54%)" } : {}}
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
    </Layout>
  );
};

export default About;
