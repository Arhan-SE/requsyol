import { motion } from "framer-motion";
import ScrollReveal from "@/components/animations/ScrollReveal";
import CountUp from "@/components/animations/CountUp";
import { ShieldCheck, Clock, FileCheck, Wallet, Headphones, Search } from "lucide-react";
import DeferredBackgroundVideo from "@/components/media/DeferredBackgroundVideo";
import valuePropBg from "@/assets/value-prop-bg.mp4";

const stats = [
  { value: 5000, suffix: "+", label: "Candidates Placed" },
  { value: 48, suffix: "hrs", label: "Avg. Time to Place" },
  { value: 98, suffix: "%", label: "Client Satisfaction" },
  { value: 15, suffix: "+", label: "Industries Served" },
];

const benefits = [
  { icon: ShieldCheck, title: "Verified Professionals", desc: "Pre-screened, qualified candidates ready from day one." },
  { icon: FileCheck, title: "Full Compliance", desc: "GDPR-compliant document screening handled for you." },
  { icon: Clock, title: "Fast Placements", desc: "Positions filled in days, not weeks." },
  { icon: Search, title: "Thousands of Opportunities", desc: "Access roles across multiple industries and locations." },
  { icon: Wallet, title: "Competitive Pay", desc: "Fair, transparent pay rates with timely payments." },
  { icon: Headphones, title: "Dedicated Support", desc: "Personal guidance from registration through placement." },
];

const SectionDivider = ({ label }: { label: string }) => (
  <motion.div
    className="flex items-center gap-0 w-full px-10 py-16"
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
      transition={{ duration: 0.8, ease: "easeOut" }}
      style={{ transformOrigin: "center" }}
    />
    <span className="text-[10px] tracking-[0.35em] uppercase text-muted-foreground font-sans px-2">{label}</span>
    <motion.div
      className="flex-1 h-px bg-border mx-3"
      initial={{ scaleX: 0 }}
      whileInView={{ scaleX: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      style={{ transformOrigin: "center" }}
    />
    <span className="text-muted-foreground text-sm font-light">+</span>
  </motion.div>
);

const ValueProposition = () => {
  return (
    <section className="bg-background">
      <SectionDivider label="Why Choose Us" />
      <div className="relative overflow-hidden pt-8 md:pt-12">
      <DeferredBackgroundVideo src={valuePropBg} />
      <div className="absolute inset-0 bg-background/80" />
      <div className="relative z-10">

      {/* Giant headline */}
      <div className="container mx-auto px-6 pb-12">
        <ScrollReveal>
          <h2
            className="font-barlow font-black uppercase text-foreground text-center leading-[0.9] mb-4"
            style={{ fontSize: "clamp(2.8rem, 8vw, 7rem)" }}
          >
            Why Companies
            <br />
            Trust Requsyol.
          </h2>
          <p className="text-center text-muted-foreground text-sm tracking-wide max-w-lg mx-auto mt-6 font-sans">
            Connecting verified candidates with top employers across the UK — fast, reliable, compliant.
          </p>
        </ScrollReveal>
      </div>

      {/* Benefits list */}
      <SectionDivider label="What You Get" />
      <div className="container mx-auto px-6 pb-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-0 border border-border">
          {benefits.map((b, i) => (
            <motion.div
              key={b.title}
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true, margin: "-30px" }}
              transition={{ duration: 0.5, delay: i * 0.07 }}
              className={`flex gap-5 p-8 group hover:bg-foreground/[0.03] transition-colors duration-300 ${
                i % 3 !== 2 ? "border-r border-border" : ""
              } ${i < 3 ? "border-b border-border" : ""}`}
            >
              <div className="shrink-0 mt-0.5">
                <span className="text-muted-foreground text-sm font-light">+</span>
              </div>
              <div>
                <h3 className="text-sm font-semibold text-foreground mb-1.5 tracking-wide uppercase">{b.title}</h3>
                <p className="text-xs text-muted-foreground leading-relaxed">{b.desc}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Stats strip */}
      <div className="border-t border-b border-border">
        <div className="grid grid-cols-2 lg:grid-cols-4">
          {stats.map((stat, i) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{ duration: 0.6, delay: i * 0.1 }}
              className={`flex flex-col items-center justify-center py-14 px-8 ${
                i < stats.length - 1 ? "border-r border-border" : ""
              } ${i >= 2 ? "border-t lg:border-t-0 border-border" : ""}`}
            >
              <div className="font-barlow font-black text-foreground leading-none mb-3" style={{ fontSize: "clamp(3rem, 7vw, 5.5rem)" }}>
                <CountUp end={stat.value} suffix={stat.suffix} duration={2.2} />
              </div>
              <p className="text-[10px] tracking-[0.3em] uppercase text-muted-foreground text-center font-sans">
                {stat.label}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
      </div>
      </div>
    </section>
  );
};

export default ValueProposition;
