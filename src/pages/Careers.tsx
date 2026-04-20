import Layout from "@/components/layout/Layout";
import ScrollReveal from "@/components/animations/ScrollReveal";
import { MapPin, Clock, Mail, Briefcase } from "lucide-react";
import careersBg from "@/assets/videos/careers-bg.mp4";

interface Job {
  title: string;
  location: string;
  type: "Full-time" | "Part-time";
  description: string;
}

const jobs: Job[] = [
  {
    title: "Recruitment Consultant",
    location: "Park Royal, London",
    type: "Full-time",
    description:
      "Manage the end-to-end recruitment process for a portfolio of clients across multiple sectors. You will source and screen candidates, conduct interviews, and build lasting relationships with both clients and candidates.",
  },
  {
    title: "Aviation Staffing Specialist",
    location: "London (Various Airports)",
    type: "Full-time",
    description:
      "Specialize in recruitment for the aviation industry with expertise in CAA compliance, GSAT, IDC, and Blue ID vetting. Place pre-vetted staff at airports and airlines while ensuring all regulatory requirements are met.",
  },
  {
    title: "Staffing Coordinator",
    location: "Park Royal, London",
    type: "Full-time",
    description:
      "Coordinate daily staffing operations across multiple clients. Manage rotas, confirm placements, handle timesheet management, and communicate between candidates and client teams to ensure seamless service delivery.",
  },
  {
    title: "Compliance & Vetting Officer",
    location: "Park Royal, London",
    type: "Full-time",
    description:
      "Conduct DBS checks, CRC verifications, and Right-to-Work assessments for all candidates. Ensure strict compliance with immigration and employment law while maintaining accurate records and audit trails.",
  },
  {
    title: "Account Manager",
    location: "Park Royal, London",
    type: "Full-time",
    description:
      "Build and maintain long-term relationships with key clients. Understand their staffing needs, provide workforce solutions, manage SLAs, and drive client satisfaction and retention across multiple sectors.",
  },
  {
    title: "HR & Operations Administrator",
    location: "Park Royal, London",
    type: "Full-time",
    description:
      "Support HR and operations teams with payroll processing, candidate onboarding, induction management, and administrative tasks. Maintain databases and ensure smooth internal processes.",
  },
  {
    title: "Hospitality & Events Recruitment Lead",
    location: "London",
    type: "Part-time",
    description:
      "Manage recruitment for hospitality and events sectors. Source skilled candidates, coordinate placements for ad-hoc events, and build a reliable network of hospitality professionals.",
  },
];

const mailtoLink = (jobTitle: string) =>
  `mailto:hr@requsyol.co.uk?subject=${encodeURIComponent(`CV Submission - ${jobTitle}`)}`;

const Careers = () => {
  return (
    <Layout>
      {/* Hero */}
      <section className="relative pt-24 sm:pt-32 pb-16 border-b border-border overflow-hidden">
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
