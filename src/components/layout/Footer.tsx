import { Link } from "react-router-dom";
import { Mail, Phone, MapPin, Building2 } from "lucide-react";
import logo from "@/assets/Requsyol_png.png";
import SocialLinks from "@/components/layout/SocialLinks";

const Footer = () => {
  return (
    <footer className="bg-background border-t border-border">
      <div className="flex items-center px-6 py-6">
        <span className="text-muted-foreground text-sm font-light">+</span>
        <div className="flex-1 h-px bg-border mx-3" />
        <span className="text-[10px] tracking-[0.35em] uppercase text-muted-foreground font-sans px-2">Requsyol</span>
        <div className="flex-1 h-px bg-border mx-3" />
        <span className="text-muted-foreground text-sm font-light">+</span>
      </div>

      <div className="container mx-auto px-6 py-12">
        <div className="grid grid-cols-1 gap-12 border-b border-border pb-12 md:grid-cols-4">
          <div className="md:col-span-1">
            <img src={logo} alt="Requsyol" className="mb-5 h-20 w-auto rounded-lg border-0 object-fill shadow-lg opacity-100" />
            <p className="mb-6 text-xs font-sans leading-relaxed text-muted-foreground">
              Connecting verified candidates with top employers across industries. Fast, reliable staffing solutions.
            </p>
            <SocialLinks />
          </div>

          <div>
            <h4 className="mb-5 font-sans text-[10px] uppercase tracking-[0.3em] text-muted-foreground">Quick Links</h4>
            <div className="flex flex-col gap-3">
              {[
                { label: "Home", path: "/" },
                { label: "For Candidates", path: "/candidates" },
                { label: "For Employers", path: "/employers" },
                { label: "Careers", path: "/careers" },
                { label: "About Us", path: "/about" },
                { label: "FAQ", path: "/faq" },
              ].map((link) => (
                <Link
                  key={link.path}
                  to={link.path}
                  className="text-xs font-sans uppercase tracking-wide text-muted-foreground transition-colors hover:text-foreground"
                >
                  {link.label}
                </Link>
              ))}
            </div>
          </div>

          <div>
            <h4 className="mb-5 font-sans text-[10px] uppercase tracking-[0.3em] text-muted-foreground">Legal</h4>
            <div className="flex flex-col gap-3">
              {[
                { label: "Privacy Policy", path: "/policies#privacy" },
                { label: "Terms & Conditions", path: "/policies#terms" },
                { label: "GDPR", path: "/policies#gdpr" },
              ].map((link) => (
                <Link
                  key={link.path}
                  to={link.path}
                  className="text-xs font-sans uppercase tracking-wide text-muted-foreground transition-colors hover:text-foreground"
                >
                  {link.label}
                </Link>
              ))}
            </div>
          </div>

          <div>
            <h4 className="mb-5 font-sans text-[10px] uppercase tracking-[0.3em] text-muted-foreground">Contact</h4>
            <div className="flex flex-col gap-4">
              <div className="flex items-start gap-3 text-xs font-sans text-muted-foreground">
                <MapPin size={12} className="mt-0.5 flex-shrink-0" />
                <div>
                  <p>Suite 23/2nd Floor, Unimix House,</p>
                  <p>Abbey Road, Park Royal. NW10 7TR.</p>
                </div>
              </div>
              <div className="flex items-center gap-3 text-xs font-sans text-muted-foreground">
                <Building2 size={12} className="flex-shrink-0" />
                <span>Company No: 12121221</span>
              </div>
              <div className="flex items-start gap-3 text-xs font-sans text-muted-foreground">
                <Mail size={12} className="mt-0.5 flex-shrink-0" />
                <div>
                  <p>marketing@requsyol.co.uk</p>
                  <p>hr@requsyol.co.uk</p>
                </div>
              </div>
              <div className="flex items-start gap-3 text-xs font-sans text-muted-foreground">
                <Phone size={12} className="mt-0.5 flex-shrink-0" />
                <div className="flex flex-col gap-1">
                  <p><span className="text-muted-foreground/60">Business:</span> +44-7432402246</p>
                  <p><span className="text-muted-foreground/60">Registration:</span> +44-7487583669</p>
                  <p><span className="text-muted-foreground/60">Finance:</span> +44-7466989804</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="flex flex-col items-center justify-between gap-4 pt-8 sm:flex-row">
          <p className="font-sans text-[10px] uppercase tracking-[0.2em] text-muted-foreground">
            © {new Date().getFullYear()} Requsyol. All Rights Reserved.
          </p>
          <p className="font-sans text-[10px] uppercase tracking-[0.2em] text-muted-foreground">
            UK Staffing & Recruitment
          </p>
        </div>
      </div>

      <div className="relative overflow-hidden pb-4">
        <div
          className="pointer-events-none select-none text-center font-barlow text-foreground/[0.06] leading-none uppercase font-black"
          style={{ fontSize: "clamp(6rem, 20vw, 18rem)" }}
        >
          REQUSYOL
        </div>
      </div>
    </footer>
  );
};

export default Footer;
