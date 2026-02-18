import { motion } from "framer-motion";
import ScrollReveal from "@/components/animations/ScrollReveal";
import CountUp from "@/components/animations/CountUp";
import { ShieldCheck, Clock, FileCheck, Wallet, Headphones, Search } from "lucide-react";

const avatars = [
  { initials: "SM", bg: "linear-gradient(135deg, hsl(216 60% 45%), hsl(230 70% 35%))" },
  { initials: "JR", bg: "linear-gradient(135deg, hsl(260 55% 45%), hsl(280 65% 35%))" },
  { initials: "AL", bg: "linear-gradient(135deg, hsl(170 55% 35%), hsl(190 65% 28%))" },
];

const stats = [
  {
    value: 5000,
    suffix: "+",
    label: "Candidates Placed",
    watermark: "5K",
    bg: "linear-gradient(135deg, hsl(162 60% 10%), hsl(162 50% 8%))",
    border: "hsl(162 50% 20%)",
    glow: "hsl(162 70% 35%)",
    textColor: "hsl(162 70% 65%)",
  },
  {
    value: 48,
    suffix: "hrs",
    label: "Avg. Time to Place",
    watermark: "48",
    bg: "linear-gradient(135deg, hsl(262 55% 12%), hsl(262 45% 9%))",
    border: "hsl(262 45% 22%)",
    glow: "hsl(262 70% 40%)",
    textColor: "hsl(262 80% 75%)",
  },
  {
    value: 98,
    suffix: "%",
    label: "Client Satisfaction",
    watermark: "98",
    bg: "linear-gradient(135deg, hsl(218 60% 10%), hsl(218 50% 8%))",
    border: "hsl(218 50% 20%)",
    glow: "hsl(218 80% 45%)",
    textColor: "hsl(218 90% 70%)",
  },
  {
    value: 15,
    suffix: "+",
    label: "Industries Served",
    watermark: "15",
    bg: "linear-gradient(135deg, hsl(38 60% 10%), hsl(38 50% 8%))",
    border: "hsl(38 50% 22%)",
    glow: "hsl(38 90% 50%)",
    textColor: "hsl(38 95% 65%)",
  },
];

const benefits = [
  { icon: ShieldCheck, title: "Verified Professionals", desc: "Pre-screened, qualified candidates ready from day one." },
  { icon: FileCheck, title: "Full Compliance", desc: "GDPR-compliant document screening handled for you." },
  { icon: Clock, title: "Fast Placements", desc: "Positions filled in days, not weeks." },
  { icon: Search, title: "Thousands of Opportunities", desc: "Access roles across multiple industries and locations." },
  { icon: Wallet, title: "Competitive Pay", desc: "Fair, transparent pay rates with timely payments." },
  { icon: Headphones, title: "Dedicated Support", desc: "Personal guidance from registration through placement." },
];

const ValueProposition = () => {
  return (
    <section className="py-28 bg-background overflow-hidden">
      <div className="container mx-auto px-4 max-w-6xl">

        {/* Section Label */}
        <ScrollReveal>
          <p className="text-center text-xs font-semibold tracking-[0.25em] uppercase text-muted-foreground mb-4">
            Why Choose Requsyol
          </p>
        </ScrollReveal>

        {/* Featured Quote Block */}
        <ScrollReveal delay={0.1}>
          <div className="relative rounded-2xl border border-border bg-card/40 backdrop-blur-sm px-8 py-12 md:px-16 md:py-16 text-center mb-6 overflow-hidden">
            {/* Subtle background glow */}
            <div
              className="absolute inset-0 opacity-20 pointer-events-none"
              style={{
                background: "radial-gradient(ellipse 60% 50% at 50% 0%, hsl(var(--primary) / 0.4), transparent)",
              }}
            />

            {/* Stacked Avatars */}
            <div className="flex justify-center mb-8">
              {avatars.map((av, i) => (
                <motion.div
                  key={av.initials}
                  initial={{ scale: 0, opacity: 0 }}
                  whileInView={{ scale: 1, opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ type: "spring", stiffness: 300, damping: 20, delay: 0.2 + i * 0.1 }}
                  className="w-12 h-12 rounded-full flex items-center justify-center text-sm font-bold text-white border-2 border-background shadow-lg"
                  style={{
                    background: av.bg,
                    marginLeft: i === 0 ? 0 : "-12px",
                    zIndex: avatars.length - i,
                    position: "relative",
                  }}
                >
                  {av.initials}
                </motion.div>
              ))}
            </div>

            {/* Quote */}
            <blockquote className="font-serif text-2xl md:text-3xl lg:text-4xl italic text-foreground leading-snug max-w-3xl mx-auto mb-6">
              "Requsyol placed our{" "}
              <strong className="not-italic font-semibold">entire warehouse team in 48 hours</strong>,
              helping us hit our deadline and{" "}
              <strong className="not-italic font-semibold">keep projects on track.</strong>"
            </blockquote>

            <p className="text-sm text-muted-foreground tracking-wide">
              — Sarah Mitchell, Operations Director,{" "}
              <span className="text-foreground/70 font-medium">Swift Logistics</span>
            </p>
          </div>
        </ScrollReveal>

        {/* Jewel-Tone Stat Cards */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 mb-16">
          {stats.map((stat, i) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.6, delay: 0.1 + i * 0.12, ease: [0.25, 0.46, 0.45, 0.94] }}
              whileHover={{ scale: 1.03, y: -4 }}
              className="relative rounded-xl overflow-hidden p-6 md:p-8 cursor-default"
              style={{
                background: stat.bg,
                border: `1px solid ${stat.border}`,
                boxShadow: `0 0 0 0 ${stat.glow}`,
              }}
            >
              {/* Watermark digit */}
              <motion.span
                className="absolute -bottom-4 -right-2 text-[7rem] md:text-[9rem] font-black leading-none select-none pointer-events-none"
                style={{ color: stat.glow, opacity: 0.12 }}
                animate={{ rotate: [0, 3, 0, -3, 0] }}
                transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
              >
                {stat.watermark}
              </motion.span>

              {/* Top glow line */}
              <div
                className="absolute top-0 left-0 right-0 h-px"
                style={{ background: `linear-gradient(90deg, transparent, ${stat.glow}, transparent)` }}
              />

              {/* Content */}
              <div className="relative z-10">
                <div
                  className="text-4xl md:text-5xl font-black tracking-tight mb-1"
                  style={{ color: stat.textColor }}
                >
                  <CountUp end={stat.value} suffix={stat.suffix} duration={2.2} />
                </div>
                <p className="text-xs md:text-sm font-medium uppercase tracking-widest mt-4" style={{ color: `${stat.textColor}99` }}>
                  {stat.label}
                </p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Benefits Grid */}
        <ScrollReveal delay={0.1}>
          <div className="border-t border-border pt-16">
            <p className="text-center text-xs font-semibold tracking-[0.25em] uppercase text-muted-foreground mb-10">
              What You Get
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {benefits.map((b, i) => (
                <motion.div
                  key={b.title}
                  initial={{ opacity: 0, y: 24 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-40px" }}
                  transition={{ duration: 0.5, delay: i * 0.08 }}
                  className="group flex gap-4 p-5 rounded-xl border border-border/50 bg-card/30 hover:border-border hover:bg-card/60 transition-all duration-300"
                >
                  <div className="shrink-0 w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                    <b.icon size={18} className="text-primary" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-foreground text-sm mb-1">{b.title}</h3>
                    <p className="text-xs text-muted-foreground leading-relaxed">{b.desc}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </ScrollReveal>

      </div>
    </section>
  );
};

export default ValueProposition;
