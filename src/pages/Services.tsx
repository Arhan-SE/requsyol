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
    bullets: [
      { label: "Hospitality & Hotels", text: "Front desk receptionists, housekeepers, servers, chefs, porters, and baristas." },
      { label: "Airports & Airlines", text: "Customer service, security, baggage handling, and maintenance (fully compliant with CAA regulations)." },
      { label: "Logistics & Industrial", text: "Warehouse operatives, forklift drivers, delivery drivers, and general production staff." },
      { label: "Events & Ad-hoc", text: "Temporary waiting staff and security personnel for events of any scale." },
    ],
  },
  {
    number: "02",
    title: 'The Requsyol\n"Rigorous Vetting"\nProcess',
    description:
      "We mitigate your risk by ensuring every candidate is 100% compliant before they ever step foot on your site.",
    bullets: [
      { label: "Face-to-Face Interviews", text: "Every candidate is interviewed in person to assess soft skills and work history." },
      { label: "Full Compliance & RTW", text: "We handle all Right-to-Work (RTW) checks, including Passport and Visa verification." },
      { label: "Background Verification", text: "Comprehensive referencing, DBS, and Criminal Record Checks (CRC)." },
      { label: "Aviation Security", text: "For our airport partners, we manage GSAT completion, IDC verification, and Blue ID onboarding." },
    ],
  },
  {
    number: "03",
    title: "Custom Induction\n& Training",
    description:
      'We ensure our staff "blends in" from day one. We don\'t just send people; we prepare them.',
    bullets: [
      { label: "Tailored Onboarding", text: "We educate staff on your specific policies, procedures, and workplace culture." },
      { label: "Health & Safety", text: "Full briefing on safety regulations, workplace conduct, and dress codes." },
      { label: "Process Integration", text: "Training that ensures new hires understand your unique way of working." },
    ],
  },
  {
    number: "04",
    title: "End-to-End\nWorkforce\nManagement",
    description:
      "We act as your external HR and Payroll department, streamlining your back-office operations.",
    bullets: [
      { label: "Payroll & Finance", text: "Full administration of payroll, taxes, and pensions." },
      { label: "HR Administration", text: "Management of employee records, contracts, and compliance data." },
      { label: "Daily Administration", text: "We check timesheets, manage rotas, and monitor daily staffing levels." },
    ],
  },
  {
    number: "05",
    title: "Technology-Driven\nTransparency",
    description:
      "Our digital tools give you real-time oversight of your workforce.",
    bullets: [
      { label: "Client Portal", text: "Secure access to all holiday data, time-off information, and digital records (including RTW and passport data)." },
    ],
  },
];

const clientLogos = [
  { src: clubCultured, alt: "Club Cultured" },
  { src: cbkFreight, alt: "CBK Freight" },
  { src: urbanLegend, alt: "Urban Legend" },
  { src: bakeryClient, alt: "Bakery Client" },
  { src: dingDong, alt: "Ding Dong" },
];

const SectionDivider = ({ label }: { label: string }) => (
  <div className="flex items-center gap-4 py-6">
    <div className="h-px flex-1 bg-border" />
    <span className="text-[10px] uppercase tracking-[0.35em] text-muted-foreground">
      + &nbsp;&nbsp; {label} &nbsp;&nbsp; +
    </span>
    <div className="h-px flex-1 bg-border" />
  </div>
);

const Services = () => {
  return (
    <Layout>
      <div className="pt-28 pb-16">
        <div className="container mx-auto px-4">
          {/* Hero */}
          <ScrollReveal>
            <section className="border-b border-border pb-12 md:pb-16">
              <h1 className="font-barlow font-black uppercase text-6xl leading-[0.9] tracking-tight text-foreground sm:text-8xl md:text-9xl lg:text-[10rem]">
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

          {/* Section divider */}
          <SectionDivider label="SERVICES" />

          {/* Service blocks */}
          <section>
            {services.map((service, index) => (
              <ScrollReveal key={service.number} delay={index * 0.05}>
                <article className="border-b border-border py-10 md:py-14">
                  {/* Number + Title row */}
                  <div className="grid gap-4 md:grid-cols-[auto_1fr] md:items-start md:gap-8">
                    <span className="font-barlow font-black text-5xl text-muted-foreground/30 md:text-7xl lg:text-8xl">
                      {service.number}
                    </span>
                    <h2 className="font-barlow font-black uppercase text-4xl leading-[0.95] tracking-tight text-foreground whitespace-pre-line sm:text-5xl md:text-6xl lg:text-7xl">
                      {service.title}
                    </h2>
                  </div>

                  {/* Description + bullets */}
                  <div className="mt-8 grid gap-6 md:grid-cols-2">
                    <p className="text-sm leading-relaxed text-muted-foreground md:text-base md:col-start-2">
                      {service.description}
                    </p>
                    <ul className="space-y-4 md:col-start-2">
                      {service.bullets.map((bullet) => (
                        <li key={bullet.label} className="text-sm leading-relaxed text-muted-foreground">
                          <span className="font-semibold text-foreground">{bullet.label}:</span>{" "}
                          {bullet.text}
                        </li>
                      ))}
                    </ul>
                  </div>
                </article>
              </ScrollReveal>
            ))}
          </section>

          {/* Requsyol Promise */}
          <ScrollReveal>
            <section className="border-b border-border py-12 md:py-16">
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
          <SectionDivider label="OUR CLIENTS" />

          <section className="py-10 md:py-14 overflow-hidden">
            <div className="marquee-track">
              {[...clientLogos, ...clientLogos, ...clientLogos].map((logo, i) => (
                <div
                  key={`${logo.alt}-${i}`}
                  className="mx-6 flex h-20 w-36 flex-shrink-0 items-center justify-center rounded-sm bg-foreground/5 p-4 md:mx-10 md:h-24 md:w-44"
                >
                  <img
                    src={logo.src}
                    alt={logo.alt}
                    className="max-h-full max-w-full object-contain grayscale brightness-200 opacity-70"
                    loading="lazy"
                  />
                </div>
              ))}
            </div>
          </section>

          {/* Final CTA */}
          <ScrollReveal>
            <section className="flex flex-col gap-6 border-t border-border py-12 md:flex-row md:items-center md:justify-between md:py-16">
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
