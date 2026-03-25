import { Fragment } from "react";
import Layout from "@/components/layout/Layout";
import ScrollReveal from "@/components/animations/ScrollReveal";
import { Link } from "react-router-dom";
import { ArrowUpRight } from "lucide-react";

import clubCultured from "@/assets/clients/club-cultured.png";
import cbkFreight from "@/assets/clients/cbk-freight.png";
import urbanLegend from "@/assets/clients/urban-legend.png";
import bakeryClient from "@/assets/clients/bakery-client.png";
import dingDong from "@/assets/clients/ding-dong.png";

const services = [
  {
    number: "01",
    title: "Sector-Specific\nStaffing Solutions",
    description:
      'We don\'t believe in "one size fits all." We provide experts tailored to your specific industry requirements.',
    image: "https://images.unsplash.com/photo-1521791136064-7986c2920216?auto=format&fit=crop&w=1600&q=80",
    bullets: [],
  },
  {
    number: "02",
    title: 'The Requsyol\n"Rigorous Vetting"\nProcess',
    description:
      "We actively mitigate your operational risk by ensuring every candidate is 100% compliant before they ever step foot on your site. This begins with mandatory face-to-face interviews to assess soft skills and professional history, followed by exhaustive Right-to-Work (RTW) checks including Passport and Visa verification. To guarantee total peace of mind, we conduct comprehensive referencing and DBS checks as standard. For our aviation partners, this process extends to specialised security protocols, including GSAT completion, IDC verification, and Blue ID onboarding.",
    image: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?auto=format&fit=crop&w=1600&q=80",
    bullets: [],
  },
  {
    number: "03",
    title: "Custom Induction\n& Training",
    description:
      "Our goal is for our staff to blend seamlessly into your existing team from their very first hour. We do not simply deploy personnel; we prepare them to represent your specific brand. This involves a tailored onboarding programme where we educate staff on your unique policies, workplace culture, and operational procedures. Furthermore, every hire receives a comprehensive briefing on health and safety regulations, workplace conduct, and site-specific dress codes, ensuring they arrive fully integrated into your way of working.",
    image: "https://images.unsplash.com/photo-1524178232363-1fb2b075b655?auto=format&fit=crop&w=1600&q=80",
    bullets: [],
  },
  {
    number: "04",
    title: "End-to-End\nWorkforce\nManagement",
    description:
      "We function as an extension of your own business, acting as an external HR and Payroll department to streamline back-office operations. Our team handles the entire lifecycle of employment administration, from the management of contracts and compliance data to the full administration of payroll, taxes, and pensions. By taking daily responsibility for checking timesheets, managing rotas, and monitoring staffing levels, we remove the administrative burden from your management team so they can focus on core growth.",
    image: "https://images.unsplash.com/photo-1497032628192-86f99bcd76bc?auto=format&fit=crop&w=1600&q=80",
    bullets: [],
  },
  {
    number: "05",
    title: "Technology-Driven\nTransparency",
    description:
      "Our service is underpinned by a digital ecosystem that provides you with 24/7 oversight of your workforce. Through our secure Client Portal, you have instant access to holiday data, time-off requests, and stored compliance documents. We utilise live \"performance signals\" to highlight utilisation and shift gaps in real-time, while our predictive capacity tools allow us to forecast your future demand. This data-driven approach ensures you can pre-emptively adjust rosters and avoid the costly shortages that disrupt business continuity.",
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=1600&q=80",
    bullets: [],
  },
];

const clientLogos = [
  { src: clubCultured, alt: "Club Cultured" },
  { src: cbkFreight, alt: "CBK Freight" },
  { src: urbanLegend, alt: "Urban Legend" },
  { src: bakeryClient, alt: "Bakery Client" },
  { src: dingDong, alt: "Ding Dong" },
];

const Services = () => {
  return (
    <Layout>
      <div className="pt-20 sm:pt-28 pb-16">
        {/* Hero */}
        <div className="container mx-auto px-4">
          <ScrollReveal>
            <section className="pt-20 pb-12 md:pb-16">
              <h1
                className="font-barlow font-black uppercase text-5xl leading-[0.9] tracking-tight sm:text-7xl md:text-9xl lg:text-[10rem] text-transparent bg-clip-text"
                style={{ backgroundImage: "linear-gradient(135deg, #56A8D6 0%, hsl(var(--logo-orange)) 50%, #2F7FB2 100%)" }}
              >
                OUR
                <br />
                SERVICES.
              </h1>
              <p className="mt-8 max-w-2xl text-sm leading-relaxed text-muted-foreground md:text-base">
                At Requsyol, we provide more than just staff; we provide a full-scale operational
                solution. From rigorous vetting to end-to-end administration, we take the heavy
                lifting out of recruitment so you can focus on running your business.
              </p>
            </section>
          </ScrollReveal>
        </div>

        {/* Services overview — full bleed */}
        <section>
          {services.map((service, index) => (
            <ScrollReveal key={service.number} delay={index * 0.05}>
              <article
                className="relative overflow-hidden py-24 md:py-36 text-center"
                style={{
                  backgroundImage: `url(${service.image})`,
                  backgroundSize: "cover",
                  backgroundPosition: "center",
                }}
              >
                <div className="absolute inset-0 bg-black/70" />
                <div className="relative z-10 container mx-auto px-4 space-y-8">
                  <div className="flex flex-col items-center gap-6">
                    <span className="font-barlow text-4xl font-black text-muted-foreground/50 md:text-6xl">
                      {service.number}
                    </span>
                    <div>
                      <h2 className="font-barlow font-black uppercase text-2xl leading-[1.1] tracking-tight text-foreground sm:text-3xl md:text-4xl">
                        {service.title}
                      </h2>
                      <p className="mt-4 max-w-3xl text-base leading-relaxed text-muted-foreground md:text-lg mx-auto">
                        {service.description}
                      </p>
                    </div>
                  </div>
                </div>
              </article>
            </ScrollReveal>
          ))}
        </section>

        {/* Requsyol Promise */}
        <div className="container mx-auto px-4">
          <ScrollReveal>
            <section className="py-12 md:py-16">
              <h2 className="font-barlow font-black uppercase text-3xl leading-tight tracking-tight text-foreground sm:text-4xl md:text-5xl lg:text-6xl">
                THE REQUSYOL PROMISE
              </h2>
              <p className="mt-6 max-w-3xl text-sm leading-relaxed text-muted-foreground md:text-base">
                You don't need to worry about anything other than running your business. The staff
                you need will come right to you, fully prepared and ready to work.
              </p>
            </section>
          </ScrollReveal>

          {/* Our Clients */}
          <div className="flex items-center justify-center gap-4 py-6">
            <div className="h-px flex-1 divider-line" />
            <span className="text-[10px] uppercase tracking-[0.35em] text-muted-foreground">
              + &nbsp;&nbsp; OUR CLIENTS &nbsp;&nbsp; +
            </span>
            <div className="h-px flex-1 divider-line" />
          </div>

          <section className="py-10 md:py-14 overflow-hidden">
            <div className="marquee-shell marquee-shell--clients">
              <div className="marquee-track marquee-track-logos">
                {[...clientLogos, ...clientLogos, ...clientLogos].map((logo, i) => (
                  <Fragment key={`${logo.alt}-${i}`}>
                    <div className="marquee-bracket" aria-hidden>
                      [
                    </div>
                    <div className="marquee-item">
                      <img
                        src={logo.src}
                        alt={logo.alt}
                        className="marquee-logo"
                        loading="lazy"
                      />
                    </div>
                    <div className="marquee-bracket" aria-hidden>
                      ]
                    </div>
                  </Fragment>
                ))}
              </div>

              <div className="marquee-fade marquee-fade-left" aria-hidden />
              <div className="marquee-fade marquee-fade-right" aria-hidden />
            </div>
          </section>

          {/* Final CTA */}
          <ScrollReveal>
            <section className="flex flex-col gap-6 py-12 md:flex-row md:items-center md:justify-between md:py-16">
              <div>
                <p className="mb-3 text-xs uppercase tracking-[0.35em] text-muted-foreground">
                  Start a conversation
                </p>
                <p className="max-w-2xl text-sm leading-relaxed text-muted-foreground md:text-base">
                  Tell us what kind of support you need and we'll shape the right recruitment
                  approach around it.
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
