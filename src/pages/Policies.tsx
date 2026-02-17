import Layout from "@/components/layout/Layout";
import ScrollReveal from "@/components/animations/ScrollReveal";

const Policies = () => {
  return (
    <Layout>
      <div className="pt-28 pb-16">
        <div className="container mx-auto px-4 max-w-3xl">
          <ScrollReveal>
            <h1 className="text-3xl md:text-4xl font-bold text-foreground text-center mb-12">Policies</h1>
          </ScrollReveal>

          <div className="space-y-16">
            <ScrollReveal>
              <section id="privacy">
                <h2 className="text-2xl font-bold text-foreground mb-4">Privacy Policy</h2>
                <div className="prose prose-sm text-muted-foreground space-y-4">
                  <p>Requsyol is committed to protecting your privacy. This policy explains how we collect, use, and safeguard your personal information.</p>
                  <p><strong>Information We Collect:</strong> We collect personal details provided through our registration and inquiry forms, including name, contact information, address, and uploaded documents.</p>
                  <p><strong>How We Use It:</strong> Your information is used solely for recruitment and staffing purposes — matching candidates with employers and facilitating placements.</p>
                  <p><strong>Data Security:</strong> All data is stored securely and access is restricted to authorized personnel. We employ industry-standard encryption and security measures.</p>
                  <p><strong>Your Rights:</strong> You have the right to access, correct, or delete your personal data at any time. Contact us at info@requsyol.co.uk to exercise these rights.</p>
                </div>
              </section>
            </ScrollReveal>

            <ScrollReveal>
              <section id="gdpr">
                <h2 className="text-2xl font-bold text-foreground mb-4">GDPR Compliance</h2>
                <div className="prose prose-sm text-muted-foreground space-y-4">
                  <p>Requsyol complies with the General Data Protection Regulation (GDPR) and the UK Data Protection Act 2018.</p>
                  <p><strong>Lawful Basis:</strong> We process your data based on legitimate interest (recruitment services) and your explicit consent when provided.</p>
                  <p><strong>Data Retention:</strong> We retain candidate and employer data for the duration necessary to provide our services, typically up to 2 years after last activity unless you request earlier deletion.</p>
                  <p><strong>Data Portability:</strong> You may request a copy of your personal data in a machine-readable format at any time.</p>
                </div>
              </section>
            </ScrollReveal>

            <ScrollReveal>
              <section id="terms">
                <h2 className="text-2xl font-bold text-foreground mb-4">Terms & Conditions</h2>
                <div className="prose prose-sm text-muted-foreground space-y-4">
                  <p>By using the Requsyol website and services, you agree to these terms and conditions.</p>
                  <p><strong>Services:</strong> Requsyol provides staffing and recruitment services connecting candidates with employers. We act as an intermediary and do not guarantee placement or employment.</p>
                  <p><strong>Accuracy:</strong> You are responsible for providing accurate and up-to-date information. Providing false information may result in removal from our services.</p>
                  <p><strong>Liability:</strong> Requsyol is not liable for any employment outcomes, workplace conditions, or disputes between candidates and employers beyond our direct control.</p>
                  <p><strong>Changes:</strong> We reserve the right to modify these terms at any time. Continued use of our services constitutes acceptance of updated terms.</p>
                </div>
              </section>
            </ScrollReveal>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Policies;
