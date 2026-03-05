import Layout from "@/components/layout/Layout";
import ScrollReveal from "@/components/animations/ScrollReveal";
import { Link } from "react-router-dom";
import { ArrowUpRight, BriefcaseBusiness, ShieldCheck, Users2 } from "lucide-react";

const services = [
  {
    icon: Users2,
    title: "Talent Sourcing",
    description:
      "Pre-screened candidates for fast-moving roles across logistics, hospitality, warehousing, construction, and support operations.",
    points: ["CV screening", "Role matching", "Availability checks"],
  },
  {
    icon: BriefcaseBusiness,
    title: "Workforce Scaling",
    description:
      "Flexible recruitment support for urgent hiring spikes, project-based staffing, and ongoing workforce planning.",
    points: ["Short-term cover", "Volume hiring", "Ongoing placement support"],
  },
  {
    icon: ShieldCheck,
    title: "Compliance Support",
    description:
      "Structured verification workflows designed to help employers hire with confidence and keep onboarding efficient.",
    points: ["Right-to-work checks", "Document verification", "Placement readiness"],
  },
];

const sectors = ["Logistics", "Warehousing", "Hospitality", "Construction", "Facilities", "Manufacturing"];

const Services = () => {
  return (
    <Layout>
      <div className="pt-28 pb-16">
        <div className="container mx-auto px-4">
          <ScrollReveal>
            <section className="border-y border-border py-10 md:py-14">
              <p className="mb-4 text-xs uppercase tracking-[0.35em] text-muted-foreground">What we do</p>
              <div className="grid gap-8 lg:grid-cols-[1.4fr_0.8fr] lg:items-end">
                <div>
                  <h1 className="text-5xl font-semibold uppercase leading-none tracking-[0.08em] text-foreground md:text-7xl lg:text-8xl">
                    Our Services
                  </h1>
                </div>
                <p className="max-w-xl text-sm leading-relaxed text-muted-foreground md:text-base">
                  Requsyol delivers focused recruitment support for employers that need dependable people,
                  faster onboarding, and a cleaner hiring process from first brief to final placement.
                </p>
              </div>
            </section>
          </ScrollReveal>

          <section className="grid gap-6 py-12 md:grid-cols-3 md:py-16">
            {services.map((service, index) => (
              <ScrollReveal key={service.title} delay={index * 0.08}>
                <article className="flex h-full flex-col border border-border bg-card/30 p-6">
                  <service.icon className="mb-8 h-8 w-8 text-foreground" />
                  <h2 className="mb-4 text-2xl font-semibold uppercase tracking-[0.08em] text-foreground">
                    {service.title}
                  </h2>
                  <p className="mb-8 text-sm leading-relaxed text-muted-foreground">{service.description}</p>
                  <ul className="mt-auto space-y-3 border-t border-border pt-6 text-xs uppercase tracking-[0.22em] text-muted-foreground">
                    {service.points.map((point) => (
                      <li key={point}>{point}</li>
                    ))}
                  </ul>
                </article>
              </ScrollReveal>
            ))}
          </section>

          <section className="grid gap-10 border-y border-border py-12 lg:grid-cols-[0.9fr_1.1fr] lg:gap-16 md:py-16">
            <ScrollReveal>
              <div>
                <p className="mb-4 text-xs uppercase tracking-[0.35em] text-muted-foreground">How we support</p>
                <h2 className="text-3xl font-semibold uppercase leading-tight tracking-[0.08em] text-foreground md:text-5xl">
                  Built for hiring teams that need speed without losing control.
                </h2>
              </div>
            </ScrollReveal>

            <ScrollReveal delay={0.1}>
              <div className="space-y-6 text-muted-foreground">
                <p className="text-base leading-relaxed">
                  We help businesses define the brief, screen suitable people, and move candidates forward with a process that feels measured and responsive.
                </p>
                <p className="text-base leading-relaxed">
                  Whether you need one dependable hire or support across multiple openings, our focus stays on fit, readiness, and communication at every step.
                </p>
                <div className="flex flex-wrap gap-3 pt-2">
                  {sectors.map((sector) => (
                    <span
                      key={sector}
                      className="border border-border px-3 py-2 text-xs uppercase tracking-[0.2em] text-foreground"
                    >
                      {sector}
                    </span>
                  ))}
                </div>
              </div>
            </ScrollReveal>
          </section>

          <ScrollReveal>
            <section className="flex flex-col gap-6 py-12 md:flex-row md:items-center md:justify-between md:py-16">
              <div>
                <p className="mb-3 text-xs uppercase tracking-[0.35em] text-muted-foreground">Start a conversation</p>
                <p className="max-w-2xl text-sm leading-relaxed text-muted-foreground md:text-base">
                  Tell us what kind of support you need and we’ll shape the right recruitment approach around it.
                </p>
              </div>
              <Link
                to="/contact"
                className="group inline-flex items-center gap-3 border border-border px-5 py-3 text-xs font-medium uppercase tracking-[0.22em] text-foreground transition-colors hover:bg-foreground hover:text-background"
              >
                Contact Us
                <ArrowUpRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1" />
              </Link>
            </section>
          </ScrollReveal>
        </div>
      </div>
    </Layout>
  );
};

export default Services;
