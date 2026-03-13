import Layout from "@/components/layout/Layout";
import ScrollReveal from "@/components/animations/ScrollReveal";
import { MapPin, Clock, Mail, Briefcase } from "lucide-react";
import careersBg from "@/assets/careers-bg.mp4";

interface Job {
  title: string;
  location: string;
  type: "Full-time" | "Part-time" | "Temporary" | "Contract";
  description: string;
}

const jobs: Job[] = [
  {
    title: "Warehouse Operative",
    location: "Park Royal, London",
    type: "Full-time",
    description:
      "Picking, packing, and dispatch duties in a fast-paced warehouse environment. Must be physically fit and reliable.",
  },
  {
    title: "Production Line Worker",
    location: "Wembley, London",
    type: "Temporary",
    description:
      "Assemble and inspect products on a production line. Previous manufacturing experience is an advantage.",
  },
  {
    title: "HGV Class 1 Driver",
    location: "Nationwide",
    type: "Full-time",
    description:
      "Long-distance deliveries across the UK. Valid Class 1 licence and CPC card required.",
  },
  {
    title: "Kitchen Porter",
    location: "Central London",
    type: "Part-time",
    description:
      "Support kitchen teams with cleaning, dishwashing, and food preparation in a busy hospitality venue.",
  },
  {
    title: "Construction Labourer",
    location: "West London",
    type: "Contract",
    description:
      "General site duties including material handling, site clearance, and assisting tradespeople. CSCS card preferred.",
  },
  {
    title: "Retail Sales Assistant",
    location: "Ealing, London",
    type: "Part-time",
    description:
      "Customer-facing role assisting shoppers, restocking shelves, and maintaining store presentation.",
  },
];

const mailtoLink = (jobTitle: string) =>
  `mailto:hr@requsyol.co.uk?subject=${encodeURIComponent(`CV Submission - ${jobTitle}`)}`;

const Careers = () => {
  return (
    <Layout>
      {/* Hero */}
      <section className="relative pt-32 pb-16 border-b border-border overflow-hidden">
        <video
          autoPlay
          loop
          muted
          playsInline
          aria-hidden="true"
          className="absolute inset-0 w-full h-full object-cover"
          src={careersBg}
        />
        <div className="absolute inset-0 bg-background/0" />
        <div className="container mx-auto px-6 relative z-10">
          <ScrollReveal>
            <p className="text-[10px] tracking-[0.35em] uppercase text-muted-foreground font-sans mb-4">
              Join Our Network
            </p>
          </ScrollReveal>
          <ScrollReveal delay={0.1}>
            <h1 className="font-barlow font-black text-4xl md:text-6xl tracking-[0.08em] uppercase text-foreground leading-tight max-w-3xl">
              Career Opportunities
            </h1>
          </ScrollReveal>
          <ScrollReveal delay={0.2}>
            <p className="mt-6 text-sm md:text-base text-muted-foreground max-w-2xl leading-relaxed font-sans">
              Browse our current vacancies below. If you find a role that suits
              you, click "Submit CV" to send your application directly to our
              recruitment team.
            </p>
          </ScrollReveal>
        </div>
      </section>

      {/* Job Listings */}
      <section className="py-16">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {jobs.map((job, index) => (
              <ScrollReveal key={job.title} delay={index * 0.08}>
                <div className="border border-border p-6 md:p-8 flex flex-col h-full hover:border-foreground/30 transition-colors duration-300">
                  <div className="flex items-start justify-between gap-4 mb-4">
                    <h2 className="font-barlow font-bold text-lg md:text-xl tracking-[0.1em] uppercase text-foreground">
                      {job.title}
                    </h2>
                    <span className="text-[10px] tracking-[0.2em] uppercase text-muted-foreground border border-border px-3 py-1 whitespace-nowrap font-sans">
                      {job.type}
                    </span>
                  </div>

                  <div className="flex items-center gap-4 mb-4">
                    <span className="flex items-center gap-1.5 text-xs text-muted-foreground font-sans">
                      <MapPin size={12} />
                      {job.location}
                    </span>
                    <span className="flex items-center gap-1.5 text-xs text-muted-foreground font-sans">
                      <Clock size={12} />
                      {job.type}
                    </span>
                  </div>

                  <p className="text-sm text-muted-foreground leading-relaxed font-sans mb-6 flex-1">
                    {job.description}
                  </p>

                  <a
                    href={mailtoLink(job.title)}
                    className="border border-border px-6 py-3 text-xs tracking-[0.2em] uppercase font-medium text-foreground hover:bg-foreground hover:text-background transition-all duration-200 text-center font-sans inline-flex items-center justify-center gap-2"
                  >
                    <Mail size={13} />
                    Submit CV
                  </a>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* General CTA */}
      <section className="border-t border-border py-20">
        <div className="container mx-auto px-6 text-center">
          <ScrollReveal>
            <Briefcase size={28} className="mx-auto text-muted-foreground mb-6" />
          </ScrollReveal>
          <ScrollReveal delay={0.1}>
            <h2 className="font-barlow font-black text-2xl md:text-3xl tracking-[0.1em] uppercase text-foreground mb-4">
              Don't See Your Role?
            </h2>
          </ScrollReveal>
          <ScrollReveal delay={0.2}>
            <p className="text-sm text-muted-foreground max-w-lg mx-auto mb-8 leading-relaxed font-sans">
              We're always looking for reliable, hard-working candidates. Send
              us your CV for future opportunities and we'll be in touch when a
              matching role becomes available.
            </p>
          </ScrollReveal>
          <ScrollReveal delay={0.3}>
            <a
              href="mailto:hr@requsyol.co.uk?subject=Speculative%20CV%20Submission"
              className="border border-border px-8 py-3.5 text-xs tracking-[0.2em] uppercase font-medium text-foreground hover:bg-foreground hover:text-background transition-all duration-200 inline-flex items-center gap-2 font-sans"
            >
              <Mail size={13} />
              Submit Your CV
            </a>
          </ScrollReveal>
        </div>
      </section>
    </Layout>
  );
};

export default Careers;
