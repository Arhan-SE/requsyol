import { Link } from "react-router-dom";
import { Mail, Phone, MapPin, Building2 } from "lucide-react";
import SocialLinks from "@/components/layout/SocialLinks";

const Footer = () => {
  return (
    <footer className="bg-background">
       <div className="flex items-center px-6 py-6">
         <span className="text-[11px] font-black tracking-[0.12em] text-[hsl(var(--logo-orange))]">+</span>
         <div className="flex-1 h-px mx-3 bg-gradient-to-r from-[#56A8D6] via-[hsl(var(--logo-orange))] to-[#2F7FB2]" />
         <span className="text-[10px] tracking-[0.35em] uppercase font-sans px-2 text-transparent bg-clip-text bg-gradient-to-r from-[#56A8D6] to-[#2F7FB2]">
           Requsyol
         </span>
         <div className="flex-1 h-px mx-3 bg-gradient-to-r from-[#56A8D6] via-[hsl(var(--logo-orange))] to-[#2F7FB2]" />
         <span className="text-[11px] font-black tracking-[0.12em] text-[hsl(var(--logo-orange))]">+</span>
       </div>

      <div className="container mx-auto px-6 py-12">
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 sm:gap-10 border-b border-border pb-12 md:grid-cols-[2fr_1fr_1fr_1fr] md:gap-12">
          <div className="md:col-span-1">
            <h4 className="mb-5 font-sans text-[10px] uppercase tracking-[0.3em] text-logo-cyan">Follow Us On</h4>
            <SocialLinks />
          </div>

          <div>
              <h4 className="mb-5 font-sans text-[10px] uppercase tracking-[0.3em] text-logo-cyan">Quick Links</h4>
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
                  onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
                  className="text-xs font-sans uppercase tracking-wide text-muted-foreground transition-colors hover:text-foreground"
                >
                  {link.label}
                </Link>
              ))}
            </div>
          </div>

          <div>
              <h4 className="mb-5 font-sans text-[10px] uppercase tracking-[0.3em] text-logo-cyan">Legal</h4>
            <div className="flex flex-col gap-3">
              {[
                { label: "Privacy Policy", path: "/policies#privacy" },
                { label: "Terms & Conditions", path: "/policies#terms" },
                { label: "GDPR", path: "/policies#gdpr" },
                { label: "Untitled", path: "/legal/untitled-1" },
                { label: "Untitled", path: "/legal/untitled-2" },
                { label: "Untitled", path: "/legal/untitled-3" },
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
              <h4 className="mb-5 font-sans text-[10px] uppercase tracking-[0.3em] text-logo-cyan">Contact</h4>
            <div className="flex flex-col gap-4">
              <div className="flex items-start gap-3 text-xs font-sans text-muted-foreground">
                <MapPin size={12} className="mt-0.5 flex-shrink-0" />
                <div>
                  <p>Suite 23, 2nd Floor, Unimix House,</p>
                  <p>Park Royal, London NW10 7TR</p>
                </div>
              </div>
              <div className="flex items-center gap-3 text-xs font-sans text-muted-foreground">
                <Building2 size={12} className="flex-shrink-0" />
                <span>Company No: 12121221</span>
              </div>
              <div className="flex items-start gap-3 text-xs font-sans text-muted-foreground">
                <Mail size={12} className="mt-0.5 flex-shrink-0" />
                <div>
                  <p>hr@requsyol.co.uk</p>
                  <p>Loyster.pascoal@requsyol.co.uk</p>
                </div>
              </div>
              <div className="flex items-start gap-3 text-xs font-sans text-muted-foreground">
                <Phone size={12} className="mt-0.5 flex-shrink-0" />
                <div className="flex flex-col gap-1">
                  <p className="whitespace-nowrap"><span className="text-muted-foreground/60">Queency:</span> +44 7990 324644</p>
                  <p className="whitespace-nowrap"><span className="text-muted-foreground/60">Loyster:</span> +44 7466 989804</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="pt-8 pb-8 border-t border-border flex flex-col gap-3">
          <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
            <p className="font-sans text-[10px] uppercase tracking-[0.2em] text-[hsl(var(--logo-orange))]">
              © {new Date().getFullYear()} Requsyol. All Rights Reserved.
            </p>
            <p className="font-sans text-[10px] uppercase tracking-[0.2em] text-transparent bg-clip-text bg-gradient-to-r from-[#56A8D6] to-[#2F7FB2]">
              UK Staffing & Recruitment
            </p>
          </div>
          <p className="font-sans text-[10px] uppercase tracking-[0.15em] text-muted-foreground">
            Requsyol Recruitment Ltd are licensed members of the Gangmasters and Labour Abuse Authority. License No REQU0004
          </p>
        </div>
      </div>

      <div className="relative overflow-hidden pb-4">
         <div
           className="pointer-events-none select-none text-center font-barlow leading-none uppercase font-black text-transparent bg-clip-text bg-gradient-to-b from-[#8CC8E8] via-[#5BAAD6] to-[#2F7FB2]"
           style={{
             fontSize: "clamp(6rem, 20vw, 18rem)",
           }}
         >
           REQUSYOL
         </div>
      </div>
    </footer>
  );
};

export default Footer;
