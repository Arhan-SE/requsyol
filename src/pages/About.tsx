import Layout from "@/components/layout/Layout";
import ScrollReveal from "@/components/animations/ScrollReveal";
import { Card, CardContent } from "@/components/ui/card";
import { Target, Users, Shield, Award } from "lucide-react";
import aboutBg from "@/assets/about-bg.mp4";

const values = [
  { icon: Target, title: "Mission-Driven", desc: "We exist to connect talent with opportunity — fast, fairly, and with full transparency." },
  { icon: Users, title: "People First", desc: "Every candidate and client is treated with respect. We build lasting relationships, not just placements." },
  { icon: Shield, title: "Compliance & Trust", desc: "Full GDPR compliance, rigorous document checks, and right-to-work verification on every placement." },
  { icon: Award, title: "Quality Assured", desc: "Pre-screened, verified professionals matched to your exact requirements." },
];

const About = () => {
  return (
    <Layout>
      <div className="relative pt-28 pb-16 overflow-hidden">
        <video
          autoPlay
          loop
          muted
          playsInline
          aria-hidden="true"
          className="absolute inset-0 w-full h-full object-cover"
          src={aboutBg}
        />
        <div className="absolute inset-0 bg-background" />
        <div className="container mx-auto px-4 relative z-10">
          <ScrollReveal>
            <div className="max-w-3xl mx-auto text-center mb-16">
              <h1 className="text-3xl md:text-5xl font-bold text-foreground mb-6">About Requsyol</h1>
              <p className="text-lg text-muted-foreground leading-relaxed">
                Requsyol is a staffing and recruiting agency dedicated to bridging the gap between 
                skilled professionals and the businesses that need them. With deep industry expertise 
                and a commitment to compliance, we deliver fast, reliable workforce solutions across 
                the UK.
              </p>
            </div>
          </ScrollReveal>

          <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto mb-16">
            {values.map((v, i) => (
              <ScrollReveal key={v.title} delay={i * 0.1}>
                <Card className="bg-card/50 h-full">
                  <CardContent className="p-6">
                    <v.icon size={28} className="text-primary mb-4" />
                    <h3 className="text-lg font-semibold text-foreground mb-2">{v.title}</h3>
                    <p className="text-sm text-muted-foreground">{v.desc}</p>
                  </CardContent>
                </Card>
              </ScrollReveal>
            ))}
          </div>

          <ScrollReveal>
            <div className="max-w-3xl mx-auto text-center">
              <h2 className="text-2xl font-bold text-foreground mb-4">Why Requsyol?</h2>
              <p className="text-muted-foreground leading-relaxed">
                Unlike traditional agencies, we combine speed with quality. Our pre-screening process
                means employers get verified candidates ready to hit the ground running, while our
                candidates benefit from thousands of opportunities across manufacturing, logistics,
                hospitality, construction, and more.
              </p>
            </div>
          </ScrollReveal>
        </div>
      </div>
    </Layout>
  );
};

export default About;
