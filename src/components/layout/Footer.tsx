import { Link } from "react-router-dom";
import { Mail, Phone, MapPin } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-background border-t border-border">
      {/* Section divider label */}
      <div className="flex items-center px-6 py-6">
        <span className="text-muted-foreground text-sm font-light">+</span>
        <div className="flex-1 h-px bg-border mx-3" />
        <span className="text-[10px] tracking-[0.35em] uppercase text-muted-foreground font-sans px-2">Requsyol</span>
        <div className="flex-1 h-px bg-border mx-3" />
        <span className="text-muted-foreground text-sm font-light">+</span>
      </div>

      <div className="container mx-auto px-6 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 border-b border-border pb-12">
          {/* Brand */}
          <div className="md:col-span-1">
            <div className="font-barlow font-black text-2xl tracking-[0.2em] uppercase text-foreground mb-1">
              REQUSYOL
            </div>
            <p className="text-[10px] tracking-[0.3em] uppercase text-muted-foreground mb-5 font-sans">
              Staffing & Recruitment
            </p>
            <p className="text-xs text-muted-foreground leading-relaxed font-sans">
              Connecting verified candidates with top employers across industries. Fast, reliable staffing solutions.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-[10px] tracking-[0.3em] uppercase text-muted-foreground mb-5 font-sans">Quick Links</h4>
            <div className="flex flex-col gap-3">
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
                  className="text-xs text-muted-foreground hover:text-foreground transition-colors tracking-wide font-sans uppercase"
                >
                  {link.label}
                </Link>
              ))}
            </div>
          </div>

          {/* Legal */}
          <div>
            <h4 className="text-[10px] tracking-[0.3em] uppercase text-muted-foreground mb-5 font-sans">Legal</h4>
            <div className="flex flex-col gap-3">
              {[
                { label: "Privacy Policy", path: "/policies#privacy" },
                { label: "Terms & Conditions", path: "/policies#terms" },
                { label: "GDPR", path: "/policies#gdpr" },
              ].map((link) => (
                <Link
                  key={link.path}
                  to={link.path}
                  className="text-xs text-muted-foreground hover:text-foreground transition-colors tracking-wide font-sans uppercase"
                >
                  {link.label}
                </Link>
              ))}
            </div>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-[10px] tracking-[0.3em] uppercase text-muted-foreground mb-5 font-sans">Contact</h4>
            <div className="flex flex-col gap-4">
              {[
                { icon: Mail, label: "info@requsyol.co.uk" },
                { icon: Phone, label: "+44 (0) 123 456 7890" },
                { icon: MapPin, label: "London, United Kingdom" },
              ].map(({ icon: Icon, label }) => (
                <div key={label} className="flex items-center gap-3 text-xs text-muted-foreground font-sans">
                  <Icon size={12} className="flex-shrink-0" />
                  <span>{label}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-[10px] tracking-[0.2em] uppercase text-muted-foreground font-sans">
            © {new Date().getFullYear()} Requsyol. All Rights Reserved.
          </p>
          <p className="text-[10px] tracking-[0.2em] uppercase text-muted-foreground font-sans">
            UK Staffing & Recruitment
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
