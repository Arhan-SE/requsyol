import Layout from "@/components/layout/Layout";
import ScrollReveal from "@/components/animations/ScrollReveal";
import { Link } from "react-router-dom";
import { Shield, Scale, Heart, HardHat, Ban, Link2, Users } from "lucide-react";

const conductSections = [
  {
    icon: Shield,
    title: "Social Accountability and Professional Integrity",
    body: "At Requsyol, we are committed to ensuring that every member of our staff operates lawfully, ethically, and in the best interests of the company, our colleagues, and our clients. Our Code of Conduct serves as the fundamental framework for our professional standards. If an employee is ever uncertain as to whether their actions align with these principles, they are encouraged to seek immediate guidance from their Line Manager or the Human Resources department. This proactive approach ensures we maintain a motivated workforce that upholds the highest levels of integrity at all times.",
  },
  {
    icon: Heart,
    title: "Anti-Harassment and Bullying Policy",
    body: "The core purpose of this policy is to ensure that all staff members are treated with dignity and respect, fostering an environment entirely free from harassment and bullying. This mandate extends to conduct both within and outside the physical workplace, including business travel, corporate events, and work-related social functions. Our protection covers interactions between staff members as well as dealings with third parties, such as customers, suppliers, or visitors to our premises.\n\nWe expect every individual to consider whether their words or actions could be perceived as offensive, as even unintentional harassment is considered unacceptable. Requsyol treats all allegations of such behaviour with the utmost seriousness, addressing them promptly, sensitively, and with the necessary confidentiality. Any breach of this policy may be treated as misconduct under our Disciplinary Procedure; in severe instances, it may constitute gross misconduct leading to summary dismissal. Furthermore, staff members should be aware that they may be held legally liable for the harassment of colleagues or clients and could be ordered to pay compensation by a court or employment tribunal.",
  },
  {
    icon: HardHat,
    title: "Workplace Health and Safety",
    body: "Requsyol is dedicated to providing a clean, safe, and healthy work environment for all. While the company provides the necessary infrastructure, each employee shares the responsibility for maintaining a safe workplace by adhering to established health and safety practices. This includes the timely reporting of accidents, injuries, and any unsafe conditions or behaviours. We maintain a zero-tolerance stance regarding violence and threatening behaviour. To ensure the safety of the collective, all employees must report to work in a fit state to perform their duties, strictly free from the influence of alcohol or illegal substances.",
  },
  {
    icon: Ban,
    title: "Defining and Preventing Bullying",
    body: "Bullying is defined as offensive, intimidating, malicious, or insulting behaviour that involves a misuse of power intended to make a person feel vulnerable, undermined, or threatened. We recognise that \"power\" is not limited to those in positions of formal authority but can also refer to personal strength or the ability to coerce others through intimidation. Requsyol is committed to identifying and eradicating such dynamics to protect the psychological well-being of our team.",
  },
  {
    icon: Link2,
    title: "Modern Slavery and Ethical Sourcing",
    body: "Requsyol acknowledges that human trafficking and forced labour remain significant global risks. We are committed to a proactive strategy in tackling hidden labour exploitation and ensuring that any form of modern slavery is eradicated from every stage of our operational journey. We hold ourselves and our partners to the highest standards, choosing only to work with organisations that share our dedication to eliminating these threats within the United Kingdom and beyond.",
  },
  {
    icon: Users,
    title: "Equal Opportunities Policy",
    body: "We are committed to promoting equality of opportunity for all staff and job applicants. Requsyol aims to create a merit-based working environment where every individual can utilise their skills free from discrimination, victimisation, or harassment. We do not discriminate on the basis of age, disability, gender reassignment, marital or civil partner status, pregnancy or maternity, race, colour, nationality, ethnic or national origin, religion or belief, sex, or sexual orientation. All professional decisions, from recruitment to promotion, are based solely on individual merit and the ability to perform the role.",
  },
];

const legalSections = [
  {
    id: "privacy",
    title: "Privacy Policy",
    paragraphs: [
      "Requsyol is committed to protecting your privacy. This policy explains how we collect, use, and safeguard your personal information.",
      { label: "Information We Collect", text: "We collect personal details provided through our registration and inquiry forms, including name, contact information, address, and uploaded documents." },
      { label: "How We Use It", text: "Your information is used solely for recruitment and staffing purposes — matching candidates with employers and facilitating placements." },
      { label: "Data Security", text: "All data is stored securely and access is restricted to authorized personnel. We employ industry-standard encryption and security measures." },
      { label: "Your Rights", text: "You have the right to access, correct, or delete your personal data at any time. Contact us at info@requsyol.co.uk to exercise these rights." },
    ],
  },
  {
    id: "gdpr",
    title: "GDPR Compliance",
    paragraphs: [
      "Requsyol complies with the General Data Protection Regulation (GDPR) and the UK Data Protection Act 2018.",
      { label: "Lawful Basis", text: "We process your data based on legitimate interest (recruitment services) and your explicit consent when provided." },
      { label: "Data Retention", text: "We retain candidate and employer data for the duration necessary to provide our services, typically up to 2 years after last activity unless you request earlier deletion." },
      { label: "Data Portability", text: "You may request a copy of your personal data in a machine-readable format at any time." },
    ],
  },
  {
    id: "terms",
    title: "Terms & Conditions",
    paragraphs: [
      "By using the Requsyol website and services, you agree to these terms and conditions.",
      { label: "Services", text: "Requsyol provides staffing and recruitment services connecting candidates with employers. We act as an intermediary and do not guarantee placement or employment." },
      { label: "Accuracy", text: "You are responsible for providing accurate and up-to-date information. Providing false information may result in removal from our services." },
      { label: "Liability", text: "Requsyol is not liable for any employment outcomes, workplace conditions, or disputes between candidates and employers beyond our direct control." },
      { label: "Changes", text: "We reserve the right to modify these terms at any time. Continued use of our services constitutes acceptance of updated terms." },
    ],
  },
];

const SectionDivider = ({ label }: { label: string }) => (
  <div className="flex items-center py-10">
    <span className="text-muted-foreground text-sm font-light">+</span>
    <div className="flex-1 h-px bg-border mx-3" />
    <span className="text-[10px] tracking-[0.35em] uppercase text-muted-foreground font-sans px-2">
      {label}
    </span>
    <div className="flex-1 h-px bg-border mx-3" />
    <span className="text-muted-foreground text-sm font-light">+</span>
  </div>
);

const Policies = () => {
  return (
    <Layout>
      {/* Hero */}
      <div className="pt-36 pb-16 md:pt-44 md:pb-24 px-6">
        <div className="container mx-auto max-w-5xl">
          <ScrollReveal>
            <h1 className="font-barlow font-black uppercase text-[clamp(3rem,10vw,7rem)] leading-[0.88] tracking-tight text-foreground">
              Policies.
            </h1>
          </ScrollReveal>
          <ScrollReveal delay={0.1}>
            <p className="mt-6 max-w-xl text-sm leading-relaxed text-muted-foreground md:text-base">
              Our commitment to transparency, ethics, and the highest professional standards — documented for your peace of mind.
            </p>
          </ScrollReveal>
        </div>
      </div>

      <div className="container mx-auto max-w-5xl px-6">
        {/* ── Business Code of Conduct ── */}
        <SectionDivider label="CODE OF CONDUCT & ETHICS" />

        <ScrollReveal>
          <div className="mb-10">
            <div className="flex items-center gap-3 mb-4">
              <Scale size={20} className="text-primary" />
              <h2 className="font-barlow font-black uppercase text-3xl tracking-tight text-foreground sm:text-4xl md:text-5xl">
                Business Code of Conduct & Ethics
              </h2>
            </div>
          </div>
        </ScrollReveal>

        <div className="space-y-0">
          {conductSections.map((section, index) => {
            const Icon = section.icon;
            return (
              <ScrollReveal key={section.title} delay={index * 0.04}>
                <article className="group border-b border-border py-10 md:py-14">
                  <div className="grid gap-6 md:grid-cols-[auto_1fr] md:gap-10">
                    {/* Number + Icon */}
                    <div className="flex items-start gap-4">
                      <span className="font-barlow font-black text-4xl text-muted-foreground/20 md:text-6xl">
                        {String(index + 1).padStart(2, "0")}
                      </span>
                      <div className="mt-1 flex h-10 w-10 items-center justify-center rounded-full border border-border bg-muted/30 md:mt-2 md:h-12 md:w-12">
                        <Icon size={18} className="text-foreground" />
                      </div>
                    </div>

                    {/* Content */}
                    <div>
                      <h3 className="font-barlow font-black uppercase text-2xl leading-[0.95] tracking-tight text-foreground sm:text-3xl md:text-4xl mb-5">
                        {section.title}
                      </h3>
                      {section.body.split("\n\n").map((paragraph, pIdx) => (
                        <p
                          key={pIdx}
                          className="text-sm leading-[1.8] text-muted-foreground md:text-[0.9375rem] mb-4 last:mb-0"
                        >
                          {paragraph}
                        </p>
                      ))}
                    </div>
                  </div>
                </article>
              </ScrollReveal>
            );
          })}
        </div>

        {/* ── Legal Policies ── */}
        <SectionDivider label="LEGAL" />

        <div className="space-y-0">
          {legalSections.map((section, index) => (
            <ScrollReveal key={section.id} delay={index * 0.04}>
              <section id={section.id} className="border-b border-border py-10 md:py-14">
                <div className="grid gap-6 md:grid-cols-[auto_1fr] md:gap-10">
                  <span className="font-barlow font-black text-4xl text-muted-foreground/20 md:text-6xl">
                    {String(index + 1).padStart(2, "0")}
                  </span>
                  <div>
                    <h2 className="font-barlow font-black uppercase text-2xl leading-[0.95] tracking-tight text-foreground sm:text-3xl md:text-4xl mb-6">
                      {section.title}
                    </h2>
                    <div className="space-y-4">
                      {section.paragraphs.map((p, pIdx) =>
                        typeof p === "string" ? (
                          <p key={pIdx} className="text-sm leading-[1.8] text-muted-foreground md:text-[0.9375rem]">
                            {p}
                          </p>
                        ) : (
                          <p key={pIdx} className="text-sm leading-[1.8] text-muted-foreground md:text-[0.9375rem]">
                            <span className="font-semibold text-foreground">{p.label}:</span> {p.text}
                          </p>
                        )
                      )}
                    </div>
                  </div>
                </div>
              </section>
            </ScrollReveal>
          ))}
        </div>

        {/* CTA */}
        <div className="py-20 text-center">
          <ScrollReveal>
            <p className="text-xs tracking-[0.3em] uppercase text-muted-foreground mb-6">
              Questions about our policies?
            </p>
            <Link
              to="/contact"
              className="inline-block border border-border px-8 py-3 text-xs tracking-[0.18em] uppercase font-medium text-foreground hover:bg-foreground hover:text-background transition-all duration-200"
            >
              Contact Us
            </Link>
          </ScrollReveal>
        </div>
      </div>
    </Layout>
  );
};

export default Policies;
