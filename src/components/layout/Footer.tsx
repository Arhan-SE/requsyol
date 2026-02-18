import { Link } from "react-router-dom";
import { Mail, Phone, MapPin } from "lucide-react";

const Footer = () => {
  return (
    <footer className="relative border-t border-border">
      {/* Gradient top edge blending from page into footer */}
      <div className="absolute -top-16 left-0 right-0 h-16 bg-gradient-to-b from-transparent to-card/60 pointer-events-none" />

      <div className="bg-card">
        <div className="container mx-auto px-4 py-16">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
            {/* Brand */}
            <div>
              <h3 className="text-xl font-bold text-foreground mb-1 flex items-center gap-0.5">
                Requsyo<span className="italic text-primary">l</span>
              </h3>
              <p className="text-xs text-primary/60 tracking-widest uppercase mb-4 font-medium">
                Staffing & Recruitment
              </p>
              <p className="text-muted-foreground text-sm leading-relaxed">
                Connecting verified candidates with top employers across industries. Fast, reliable staffing solutions.
              </p>
            </div>

            {/* Quick Links */}
            <div>
              <h4 className="font-semibold text-foreground mb-4">Quick Links</h4>
              <div className="flex flex-col gap-2">
                {[
                  { label: "Home", path: "/" },
                  { label: "For Candidates", path: "/candidates" },
                  { label: "For Employers", path: "/employers" },
                  { label: "About Us", path: "/about" },
                  { label: "FAQ", path: "/faq" },
                ].map((link) => (
                  <Link
                    key={link.path}
                    to={link.path}
                    className="text-sm text-muted-foreground hover:text-foreground transition-colors"
                  >
                    {link.label}
                  </Link>
                ))}
              </div>
            </div>

            {/* Legal */}
            <div>
              <h4 className="font-semibold text-foreground mb-4">Legal</h4>
              <div className="flex flex-col gap-2">
                {[
                  { label: "Privacy Policy", path: "/policies#privacy" },
                  { label: "Terms & Conditions", path: "/policies#terms" },
                  { label: "GDPR", path: "/policies#gdpr" },
                ].map((link) => (
                  <Link
                    key={link.path}
                    to={link.path}
                    className="text-sm text-muted-foreground hover:text-foreground transition-colors"
                  >
                    {link.label}
                  </Link>
                ))}
              </div>
            </div>

            {/* Contact */}
            <div>
              <h4 className="font-semibold text-foreground mb-4">Contact</h4>
              <div className="flex flex-col gap-3">
                {[
                  { icon: Mail, label: "info@requsyol.co.uk" },
                  { icon: Phone, label: "+44 (0) 123 456 7890" },
                  { icon: MapPin, label: "London, United Kingdom" },
                ].map(({ icon: Icon, label }) => (
                  <div key={label} className="flex items-center gap-3 text-sm text-muted-foreground">
                    <div className="flex items-center justify-center w-7 h-7 rounded-full bg-foreground/5 border border-border/40 flex-shrink-0">
                      <Icon size={13} />
                    </div>
                    <span>{label}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className="border-t border-border mt-12 pt-8 text-center text-sm text-muted-foreground">
            © {new Date().getFullYear()} Requsyol. All rights reserved.
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
