import { motion } from "framer-motion";
import CountUp from "@/components/animations/CountUp";
import DeferredBackgroundVideo from "@/components/media/DeferredBackgroundVideo";
import valuePropBg from "@/assets/value-prop-bg.mp4";

const stats = [
  { value: 5000, suffix: "+", label: "Candidates Placed" },
  { value: 4, suffix: "hrs", label: "Avg. Time to Place" },
  { value: 98, suffix: "%", label: "Client Satisfaction" },
  { value: 15, suffix: "+", label: "Industries Served" },
];

const ValueProposition = () => {
  return (
    <section className="bg-background">
      <div className="relative overflow-hidden">
        <DeferredBackgroundVideo src={valuePropBg} className="w-full h-full object-cover" />
        <div className="absolute inset-0 bg-background/30" />

        <div className="relative z-10 container mx-auto px-6 py-16 sm:py-20 lg:py-24 space-y-12">
          <div className="space-y-4 text-center max-w-3xl mx-auto">
            <p className="text-[11px] tracking-[0.3em] uppercase text-muted-foreground">Why Choose Us</p>
            <h2 className="font-barlow font-black uppercase text-foreground leading-tight" style={{ fontSize: "clamp(2.6rem, 7vw, 4.5rem)" }}>
              Trusted hiring, premium delivery.
            </h2>
            <p className="text-base text-muted-foreground max-w-2xl mx-auto">
              The essentials that matter: verified talent, faster placements, and a partnership built on clarity.
            </p>
          </div>

          <div className="grid gap-6 sm:grid-cols-2">
            {[
              {
                title: "Verified talent",
                desc: "Pre-screened professionals who meet your standards from day one.",
              },
              {
                title: "Compliance handled",
                desc: "Documentation and screening managed so your team can move quickly.",
              },
              {
                title: "4-hour response",
                desc: "Average time to place: 4 hours. Speed without sacrificing fit.",
              },
              {
                title: "Clear partnership",
                desc: "Transparent process, reliable support, and steady delivery.",
              },
            ].map((item) => (
              <div key={item.title} className="rounded-2xl border border-border/60 bg-background/80 p-6 shadow-sm">
                <p className="text-[12px] tracking-[0.2em] uppercase text-muted-foreground mb-2">{item.title}</p>
                <p className="text-base leading-relaxed text-foreground/90">{item.desc}</p>
              </div>
            ))}
          </div>

          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 border border-border/70 rounded-2xl overflow-hidden bg-background/80">
            {stats.map((stat, i) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-40px" }}
                transition={{ duration: 0.6, delay: i * 0.08 }}
                className="flex flex-col items-center justify-center gap-3 py-10 px-6"
              >
                <div className="font-barlow font-black text-foreground leading-none" style={{ fontSize: "clamp(2.8rem, 6vw, 4.5rem)" }}>
                  <CountUp end={stat.value} suffix={stat.suffix} duration={2} />
                </div>
                <p className="text-[10px] tracking-[0.3em] uppercase text-muted-foreground text-center font-sans">
                  {stat.label}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ValueProposition;
