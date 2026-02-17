import ScrollReveal from "@/components/animations/ScrollReveal";
import { Card, CardContent } from "@/components/ui/card";
import { ShieldCheck, Clock, FileCheck, Wallet, Headphones, Search } from "lucide-react";

const employerBenefits = [
  { icon: ShieldCheck, title: "Verified Professionals", desc: "Pre-screened, qualified candidates ready to work from day one." },
  { icon: FileCheck, title: "Full Compliance", desc: "GDPR-compliant document screening and right-to-work checks handled." },
  { icon: Clock, title: "Fast Placements", desc: "Rapid turnaround — positions filled in days, not weeks." },
];

const workerBenefits = [
  { icon: Search, title: "Thousands of Opportunities", desc: "Access roles across multiple industries and locations." },
  { icon: Wallet, title: "Competitive Pay", desc: "Fair, transparent pay rates with timely payments." },
  { icon: Headphones, title: "Dedicated Support", desc: "Personal guidance from registration through placement and beyond." },
];

const BenefitCard = ({ icon: Icon, title, desc, delay }: { icon: any; title: string; desc: string; delay: number }) => (
  <ScrollReveal delay={delay}>
    <Card className="group hover:border-primary/30 transition-all duration-300 bg-card/50 backdrop-blur-sm h-full">
      <CardContent className="p-6">
        <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors">
          <Icon size={24} className="text-primary" />
        </div>
        <h3 className="font-semibold text-foreground mb-2">{title}</h3>
        <p className="text-sm text-muted-foreground leading-relaxed">{desc}</p>
      </CardContent>
    </Card>
  </ScrollReveal>
);

const ValueProposition = () => {
  return (
    <section className="py-24 bg-card/30">
      <div className="container mx-auto px-4">
        <ScrollReveal>
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">Why Choose Requsyol?</h2>
            <p className="text-muted-foreground max-w-xl mx-auto">
              Whether you're looking for work or hiring talent, we've got you covered.
            </p>
          </div>
        </ScrollReveal>

        <div className="grid lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
          {/* Employers */}
          <div>
            <ScrollReveal>
              <h3 className="text-xl font-semibold text-foreground mb-6 flex items-center gap-2">
                <span className="w-2 h-2 bg-primary rounded-full" />
                For Employers
              </h3>
            </ScrollReveal>
            <div className="grid gap-4">
              {employerBenefits.map((b, i) => (
                <BenefitCard key={b.title} {...b} delay={i * 0.1} />
              ))}
            </div>
          </div>

          {/* Workers */}
          <div>
            <ScrollReveal>
              <h3 className="text-xl font-semibold text-foreground mb-6 flex items-center gap-2">
                <span className="w-2 h-2 bg-secondary rounded-full" />
                For Workers
              </h3>
            </ScrollReveal>
            <div className="grid gap-4">
              {workerBenefits.map((b, i) => (
                <BenefitCard key={b.title} {...b} delay={i * 0.1} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ValueProposition;
