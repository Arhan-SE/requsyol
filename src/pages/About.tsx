import { Fragment } from "react";
import Layout from "@/components/layout/Layout";
import ScrollReveal from "@/components/animations/ScrollReveal";
import aboutBg from "@/assets/about-bg.mp4";
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
  body: `Requsyol’s mission is to provide top-tier services to businesses of all sizes. We believe that companies should have the opportunity to spend less time managing employee relations and worrying about HR compliance and regulations and spend more time on initiatives that improve their bottom line.
Our ultimate goal is to deliver the best human resource services to all companies we work with while adhering to our high professionalism, quality, and standards. This entails keeping up with changing norms, rules, and job markets. Our careful balancing of internal HR standards and the retention of expert personnel contribute to the organization’s success.`,
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
                  <div
                    className="marquee-item"
                    style={{}}
                  >
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
    </Layout>
  );
};

export default About;
