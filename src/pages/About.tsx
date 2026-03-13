import Layout from "@/components/layout/Layout";
import ScrollReveal from "@/components/animations/ScrollReveal";
import aboutBg from "@/assets/about-bg.mp4";
const mission = {
  quote: "MAKE CREATIVE SIMPLE",
  title: "Our mission",
  body: `Requsyol’s mission is to provide top-tier services to businesses of all sizes. We believe that companies should have the opportunity to spend less time managing employee relations and worrying about HR compliance and regulations and spend more time on initiatives that improve their bottom line.
Our ultimate goal is to deliver the best human resource services to all companies we work with while adhering to our high professionalism, quality, and standards. This entails keeping up with changing norms, rules, and job markets. Our careful balancing of internal HR standards and the retention of expert personnel contribute to the organization’s success.`,
};

const stories = [
  {
    title: "Integrity",
    quote: "Integrity",
    copy: "Our standards are built on compliance, proactive HR oversight, and a commitment to doing right by people and partners.",
  },
  {
    title: "Partnership",
    quote: "Partnership",
    copy: "We align with your culture, manage the people you need, and stay flexible so your business can move ahead without friction.",
  },
  {
    title: "Innovation",
    quote: "Innovation",
    copy: "Staying future-ready means tracking regulation, leveraging talent data, and delivering rapid, confident hires when you need them.",
  },
];

const About = () => {
  return (
    <Layout>
      <section className="relative h-screen overflow-hidden">
        <video
          autoPlay
          loop
          muted
          playsInline
          className="absolute inset-0 h-full w-full object-cover"
          src={aboutBg}
        />
        <div className="absolute inset-0 bg-black/60" />
        <div className="relative z-10 flex h-full flex-col items-center justify-center px-4 text-center text-white">
          <p className="text-[11px] uppercase tracking-[0.4em] text-muted-foreground mb-4">About Requsyol</p>
          <h1 className="text-4xl md:text-6xl font-black tracking-tight">{mission.quote}</h1>
          <p className="mt-6 max-w-3xl leading-[1.8] text-lg text-white/80">
            {mission.body.split("\n").map((paragraph, idx) => (
              <span key={idx} className="block">
                {paragraph}
              </span>
            ))}
          </p>
        </div>
      </section>

      {/* Section removed per request */}
    </Layout>
  );
};

export default About;
