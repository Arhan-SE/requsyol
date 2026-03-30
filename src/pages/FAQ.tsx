import Layout from "@/components/layout/Layout";
import ScrollReveal from "@/components/animations/ScrollReveal";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";

const candidateFaqs = [
  { q: "How do I register as a candidate?", a: "Click on 'For Candidates' and complete the multi-step registration form with your personal details, address, and resume upload. Our team will review your application and be in touch." },
  { q: "Is there a fee for candidates?", a: "No, our services are completely free for candidates. Employers pay for our staffing solutions." },
  { q: "What industries do you recruit for?", a: "We recruit across manufacturing, logistics, hospitality, construction, retail, healthcare, warehousing, and trades." },
  { q: "How quickly can I be placed?", a: "Many candidates are placed within a week of registration. Urgent roles can be filled within 24-48 hours." },
  { q: "What documents do I need?", a: "You'll need valid ID, proof of right to work in the UK, and an up-to-date CV/resume." },
];

const employerFaqs = [
  { q: "How does your recruitment process work?", a: "Submit an inquiry with your staffing requirements. We'll match you with pre-screened, verified candidates and present the best options within your timeline." },
  { q: "What is your pricing structure?", a: "Our pricing is competitive and varies based on the role type, duration, and volume. Contact us for a tailored quote." },
  { q: "Do you handle compliance and right-to-work checks?", a: "Yes, all candidates undergo thorough compliance screening including right-to-work verification, identity checks, and relevant certifications." },
  { q: "Can you handle urgent staffing needs?", a: "Absolutely. We maintain a pool of ready-to-work, verified candidates who can start within 24-48 hours for urgent requirements." },
];

const FAQ = () => {
  return (
    <Layout>
      <div className="pt-28 pb-16">
        <div className="container mx-auto px-4 max-w-3xl">
          <ScrollReveal>
            <h1 className="text-3xl md:text-4xl font-bold text-foreground text-center mb-12">Frequently Asked Questions</h1>
          </ScrollReveal>

          <ScrollReveal>
            <h2 className="text-xl font-semibold text-foreground mb-4">For Candidates</h2>
            <Accordion type="single" collapsible className="mb-12">
              {candidateFaqs.map((faq, i) => (
                <AccordionItem key={i} value={`candidate-${i}`}>
                  <AccordionTrigger>{faq.q}</AccordionTrigger>
                  <AccordionContent className="text-muted-foreground">{faq.a}</AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </ScrollReveal>

          <ScrollReveal>
            <h2 className="text-xl font-semibold text-foreground mb-4">For Employers</h2>
            <Accordion type="single" collapsible>
              {employerFaqs.map((faq, i) => (
                <AccordionItem key={i} value={`employer-${i}`}>
                  <AccordionTrigger>{faq.q}</AccordionTrigger>
                  <AccordionContent className="text-muted-foreground">{faq.a}</AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </ScrollReveal>
        </div>
      </div>
    </Layout>
  );
};

export default FAQ;
