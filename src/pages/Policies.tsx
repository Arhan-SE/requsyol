import { useEffect } from "react";
import Layout from "@/components/layout/Layout";
import ScrollReveal from "@/components/animations/ScrollReveal";
import { Link, useLocation } from "react-router-dom";
import { Shield, Heart, HardHat, Ban, Link2, Users } from "lucide-react";

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
    id: "terms-general",
    title: "General Terms",
    paragraphs: [
      { label: "1.1", text: "This website is the property of Requsyol Ltd. The company registration number is 12121221 (Registered in England and Wales) and the registered office is Suite 23, 2nd Floor, Unimix House, Abbey Road, Park Royal, London, NW10 7TR." },
      { label: "1.2", text: "Requsyol Ltd does not make any representation whatsoever about any job vacancy advertisement that is accessed on this website, because it involves collating the information provided by third parties. Accordingly, it is up to the user to satisfy themselves as to the suitability of any agency, employer or job found directly, or indirectly, through this website." },
      { label: "1.3", text: "The user agrees that the Internet or Requsyol Ltd's systems, services and equipment can from time to time be inoperative in full or in part. This can be caused by, but not limited to, mechanical breakdown, hardware or software problems or upgrades, repairs and maintenance, connectivity problems and any other events that are beyond the control of Requsyol Ltd. You agree that Requsyol Ltd is not held liable for any failure or inability to provide any of its services via the website at such times." },
    ],
  },
  {
    id: "terms-cv",
    title: "CV Service",
    paragraphs: [
      "By sending your CV to Requsyol Ltd you are entering into an agreement that:",
      { label: "2.1", text: "Requsyol Ltd can change, adapt, modify or reword any CV in such a way and to such extent that Requsyol Ltd considers the information on your CV in order to produce a CV in the style and format that Requsyol Ltd uses to distribute these CVs." },
      { label: "2.2", text: "Requsyol Ltd will not be liable to you in any situation in consequence of or arising out of any change, adaptation, modification or rewording referred to in clause 2.1." },
    ],
  },
  {
    id: "terms-amendments",
    title: "Amendments to the Terms and Conditions of Use",
    paragraphs: [
      { label: "3.1", text: "Requsyol Ltd reserves the right to make changes to, or withdraw any of the services contained or described on this website at any time without notice or consent." },
      { label: "3.2", text: "The services that Requsyol Ltd offers to candidates and employers are entirely gratuitous and as such Requsyol Ltd shall not be obliged to continue or maintain any such services offered. Without prejudice to your statutory rights, Requsyol Ltd does reserve the right to suspend or indeed cancel the provision of any of its services to any particular candidate or any employer for any reason." },
      { label: "3.3", text: "Requsyol Ltd reserves the right to change these Terms and Conditions of Use at any time by changing them on the website. It is the users' responsibility to make sure that they are aware of any changes in said conditions." },
    ],
  },
  {
    id: "terms-submitted",
    title: "Submitted Information",
    paragraphs: [
      { label: "4.1", text: "It is the responsibility of the applicant who is submitting any information, including but not limited to CVs, work resumes, written enquiries and emails, to make sure that any such information is legally acceptable. This includes compliance with laws regarding copyright, libel, obscenity, fraud, misrepresentation, and discrimination." },
      { label: "4.2", text: "Requsyol Ltd is committed to ensuring that any information sent by you is kept confidential. However, Requsyol Ltd does not accept any responsibility or expressed liability for the use of any CV that has been forwarded to any related party or company that the applicant has contacted using information obtained on this website." },
    ],
  },
  {
    id: "terms-associated",
    title: "Associated Companies",
    paragraphs: [
      { label: "5.1", text: "By submitting information to Requsyol Ltd, you agree to allow this information to be shared with any associated company for the purpose of providing the applicant with the same recruitment services detailed in these terms." },
      { label: "5.2", text: "All information used by any associate company will be bound by these terms and used in accordance with Requsyol Ltd's Privacy Policy." },
    ],
  },
  {
    id: "terms-copyright",
    title: "Copyright and Intellectual Property Rights",
    paragraphs: [
      { label: "6.1", text: "Copyright law protects the entire contents of this website. Requsyol Ltd and its branding are protected; you are not allowed to modify, publish, exploit or sell any of the content of this site without express permission." },
    ],
  },
  {
    id: "terms-privacy",
    title: "Privacy Policy",
    paragraphs: [
      "Requsyol Ltd is committed to ensuring the privacy and security of personal information. All information submitted is used in accordance with our Privacy Policy. By submitting information, you agree to both these Terms and Conditions and the Privacy Policy.",
    ],
  },
  {
    id: "terms-internet",
    title: "The Internet and Liability",
    paragraphs: [
      { label: "8.1", text: "The Internet is not a fully secure environment. Requsyol Ltd will not be liable for any loss resulting from the transmission of computer viruses or unauthorized interception of data before it reaches our site." },
      { label: "8.2", text: "Requsyol Ltd does not accept liability for any loss (including loss of business or profits) arising from the use of this website, whether in contract, tort, or otherwise." },
    ],
  },
  {
    id: "terms-general-liability",
    title: "General Liability",
    paragraphs: [
      { label: "9.1", text: "By accessing this site, you are governed by English Law, and any dispute will be subject to this jurisdiction." },
      { label: "9.2", text: "Requsyol Ltd does not accept any liability for any loss arising from accepting a vacancy or applicant introduced through this website." },
    ],
  },
  {
    id: "terms-candidate-registration",
    title: "Candidate Registration and Documentation",
    paragraphs: [
      { label: "10.1", text: "Submission of Documents: By registering with Requsyol Ltd, candidates agree to provide necessary right-to-work and identification documents. These may be provided in person for scanning or sent via email. You agree that all information provided is accurate and authentic." },
      { label: "10.2", text: "Storage and Security: Requsyol Ltd is committed to the safe and secure storage of your personal records. All digital and physical copies of your documents are stored on secure systems and are used solely for recruitment, compliance, and payroll purposes." },
      { label: "10.3", text: "Disclosure of Information: Your documents will remain confidential and will not be shared with third parties, except in the following circumstances: (1) Where a Client has specifically requested documentation as part of the hiring or vetting process. (2) In the event of a Formal Audit conducted by or on behalf of Requsyol Ltd or the Client's company to ensure legal and regulatory compliance." },
      { label: "10.4", text: "Data Retention: To comply with UK employment and audit regulations, Requsyol Ltd will retain your registered documents for a maximum period of 5 years from the date of your registration. After this period, your data will be securely deleted." },
      { label: "10.5", text: "Withdrawal of Consent and Deletion: Candidates have the right to withdraw their consent and request the removal of their data at any time. To ensure this request is legally documented: Requests must be sent via email to hr@requsyol.co.uk. Note: For security and compliance reasons, requests made via telephone or in-person visits will not be considered valid or processed as these requests must be documented for our records." },
    ],
  },
  {
    id: "terms-payroll",
    title: "Payroll and Holiday Entitlements",
    paragraphs: [
      { label: "11.1", text: "General Enquiries: Requsyol Ltd is responsible for the accurate processing of payroll and holiday pay for its registered candidates." },
      { label: "11.2", text: "Contact for Discrepancies: For any queries specifically regarding your pay, tax, or holiday entitlement, please contact our payroll department directly via email at loyster.pascoal@requsyol.co.uk." },
      { label: "11.3", text: "Processing Times: All payroll queries should be submitted in writing to ensure a tracked resolution. Please allow a reasonable timeframe for these queries to be investigated with our finance department." },
    ],
  },
];


const equalOpportunityParagraphs = [
  "Requsyol Ltd is dedicated to fostering a culture of equality and fairness, both in our recruitment services and as an employer. We believe that providing equal opportunities to all members of the community and our workforce is a fundamental value that drives our success.",
  "Our employees are the core of our commitment to quality. We strive to ensure that those who manage and deliver our services reflect the diverse backgrounds, needs, and perspectives of the individuals and businesses we serve.",
  "To maintain a high standard of service, Requsyol Ltd is committed to:",
  { label: "Empowering our People", text: "Developing a motivated and inclusive workforce through transparent communication and continuous professional development for staff at all levels." },
  { label: "Shared Responsibility", text: "Ensuring every individual within Requsyol Ltd takes ownership of promoting and applying our equal opportunities standards in their specific service areas." },
  { label: "Merit-Based Selection", text: "Implementing fair recruitment processes that identify and hire individuals based solely on their skills, experience, and ability to perform." },
  { label: "Community Representation", text: "Building a team that reflects the rich diversity of the local communities in which we operate." },
  "We maintain a zero-tolerance approach toward discrimination, harassment, or victimisation. All our quality standards and operational policies are designed to uphold this commitment to a fair and inclusive workplace.",
];

const ethicalTradingParagraphs = [
  { label: "Commitment to Ethical Standards", text: "Requsyol Ltd is committed to a policy of ethical trading in both the provision of our services and as an employer. We uphold the principle of freedom of opportunity in employment and recognise the right of all sections of our workforce to collective bargaining and the right to join or form a trade union." },
  { label: "Health, Safety, and the Working Environment", text: "In an organisation where our clients manage the daily environment of our workforce, we are dedicated to ensuring a safe and healthy working environment for all our Temporary Workers. We collaborate closely with our clients to prevent accidents and dangerous occurrences, ensuring all workers are fully aware of potential hazards through comprehensive risk assessments and relevant training." },
  "All workers are provided with written terms and conditions of employment. Requsyol Ltd ensures that workers are paid at or above the National Minimum Wage, working hours consistently comply with the Working Time Regulations, detailed payslips are provided for every pay period outlining hourly rates, hours worked, and statutory deductions, and no unauthorised deductions are made from pay without the express written consent of the worker.",
  { label: "Equality and Professional Conduct", text: "We enforce a strict policy against discrimination in recruitment, wages, compensation, access to training, promotion, or termination. Decisions are never based on race, colour, ethnic or national origin, religion, age, gender, disability, marital status, sexual orientation, union membership, or political affiliation. Requsyol Ltd maintains a zero-tolerance policy toward physical abuse, the threat of physical abuse, sexual or other harassment, verbal abuse, or any other form of intimidatory action." },
  { label: "Grievance Procedure", text: "Should a worker have a grievance or cause for complaint, the correct procedure is to contact our Head Office on\n07990 324644 or 07440570375\nand ask to speak with a Senior Manager, providing them with full details of the matter. The standards detailed above represent our minimum operating criteria, and we aim to exceed these standards whenever and wherever possible." },
];

const environmentalPolicyParagraphs = [
  "Requsyol Ltd is committed to operating in an environmentally responsible and sustainable manner, minimising our environmental impact across all business activities.",
  "We recognise our responsibility to our clients, workers, suppliers, and the wider community to operate in a way that supports environmental sustainability.",
  "As a recruitment agency serving the food production, warehousing, logistics, and hospitality sectors, our direct environmental footprint is limited. Our leased office premises in Park Royal, London, are managed by the landlord, with waste collections handled by Spectrum Recycling Ltd. Our primary impacts arise indirectly through business travel (Scope 3 emissions), supplier relationships, and the clients we support.",
  { label: "Our Commitments", text: "We will comply with all applicable UK environmental legislation, including the Environmental Protection Act 1990, the Waste (England and Wales) Regulations 2011, and the Climate Change Act 2008. We minimise travel-related emissions by conducting at least 50% of meetings virtually and planning journeys efficiently. We train all staff on environmental responsibilities with 100% induction completion tracked and recorded. We assess key suppliers on environmental criteria before engagement, with documented evaluations. We promote responsible waste management through proper segregation and verification of landlord arrangements. We monitor performance through quarterly internal audits, monthly KPI tracking, and annual management review. We drive continuous improvement by reviewing targets, expanding supplier assessments, and enhancing data tracking." },
  "Environmental responsibility sits at Director level, with day-to-day oversight by the Operations Manager. A legal register is maintained and reviewed at least annually. No environmental fines, notices, or prosecutions have been received.",
  "The Directors of Requsyol Ltd are fully committed to the implementation of this policy and to providing the necessary resources to ensure its effectiveness.",
  "This policy applies to all Requsyol Ltd operations and is supported by documented procedures, training records, and performance data. It is reviewed annually as part of our Environmental Management System.",
];

const SectionDivider = ({ label, id }: { label: string; id?: string }) => (
  <div id={id} className="relative -mx-6 flex items-center justify-center gap-4 py-10 px-6">
    <div className="h-px flex-1 divider-line" />
    <span className="text-[10px] uppercase tracking-[0.35em] text-muted-foreground font-sans whitespace-nowrap">
      + {label} +
    </span>
    <div className="h-px flex-1 divider-line" />
  </div>
);

const Policies = () => {
  const { hash } = useLocation();

  useEffect(() => {
    if (hash) {
      const el = document.querySelector(hash);
      if (el) {
        setTimeout(() => el.scrollIntoView({ behavior: "smooth", block: "start" }), 100);
      }
    } else {
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  }, [hash]);

  return (
    <Layout>
      {/* Hero */}
      <div className="pt-28 sm:pt-36 pb-12 md:pt-44 md:pb-24 px-6">
        <div className="container mx-auto max-w-5xl">
          <ScrollReveal>
            <h1
              className="font-barlow font-black uppercase text-[clamp(3rem,10vw,7rem)] leading-[0.88] tracking-tight text-transparent bg-clip-text"
              style={{ backgroundImage: "linear-gradient(135deg, #56A8D6 0%, hsl(var(--logo-orange)) 50%, #2F7FB2 100%)" }}
            >
              Policies.
            </h1>
          </ScrollReveal>
          <ScrollReveal delay={0.1}>
            <p className="mt-6 max-w-xl text-sm leading-relaxed text-muted-foreground md:text-base">
              Our commitment to transparency, ethics, and the highest professional standards, documented for your peace of mind.
            </p>
          </ScrollReveal>
        </div>
      </div>

      <div className="container mx-auto max-w-5xl px-6">
        {/* ── Business Code of Conduct ── */}
        <SectionDivider label="BUSINESS CODE OF CONDUCT & ETHICS" id="code-of-conduct" />


          <div className="space-y-0">
            {conductSections.map((section, index) => (
                <ScrollReveal key={section.title} delay={index * 0.04}>
                  <article className="group py-10 md:py-14">
                    <div className="grid gap-6 md:grid-cols-[auto_1fr] md:gap-10">
                      {/* Number */}
                      <span className="font-barlow font-black text-4xl text-muted-foreground/20 md:text-6xl">
                        {String(index + 1).padStart(2, "0")}
                      </span>

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
            ))}
          </div>

        {/* ── Legal Policies ── */}
        <SectionDivider label="LEGAL" id="legal" />

        <div className="space-y-0">
          {legalSections.map((section, index) => (
            <ScrollReveal key={section.id} delay={index * 0.04}>
            <section id={section.id} className="py-10 md:py-14">
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

        {/* ── Equal Opportunity & Diversity ── */}
        <SectionDivider label="EQUAL OPPORTUNITY & EQUAL DIVERSITY" id="equal-opportunity" />
        <ScrollReveal>
          <div className="py-10 md:py-14 space-y-4">
            {equalOpportunityParagraphs.map((p, i) =>
              typeof p === "string" ? (
                <p key={i} className="text-sm leading-[1.8] text-muted-foreground md:text-[0.9375rem]">{p}</p>
              ) : (
                <p key={i} className="text-sm leading-[1.8] text-muted-foreground md:text-[0.9375rem]">
                  <span className="font-semibold text-foreground">{p.label}:</span> {p.text}
                </p>
              )
            )}
          </div>
        </ScrollReveal>

        {/* ── Ethical Trading Policy Statement ── */}
        <SectionDivider label="ETHICAL TRADING POLICY STATEMENT" id="ethical-trading" />
        <ScrollReveal>
          <div className="py-10 md:py-14 space-y-4">
            {ethicalTradingParagraphs.map((p, i) =>
              typeof p === "string" ? (
                <p key={i} className="text-sm leading-[1.8] text-muted-foreground md:text-[0.9375rem]">{p}</p>
              ) : (
                <p key={i} className="text-sm leading-[1.8] text-muted-foreground md:text-[0.9375rem]">
                  <span className="font-semibold text-foreground">{p.label}:</span> {p.text}
                </p>
              )
            )}
          </div>
        </ScrollReveal>

        {/* ── Environmental Policy Statement ── */}
        <SectionDivider label="ENVIRONMENTAL POLICY STATEMENT" id="environmental-policy" />
        <ScrollReveal>
          <div className="py-10 md:py-14 space-y-4">
            {environmentalPolicyParagraphs.map((p, i) =>
              typeof p === "string" ? (
                <p key={i} className="text-sm leading-[1.8] text-muted-foreground md:text-[0.9375rem]">{p}</p>
              ) : (
                <p key={i} className="text-sm leading-[1.8] text-muted-foreground md:text-[0.9375rem]">
                  <span className="font-semibold text-foreground">{p.label}:</span> {p.text}
                </p>
              )
            )}
          </div>
        </ScrollReveal>

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
