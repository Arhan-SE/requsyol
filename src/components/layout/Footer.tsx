import { useState, useRef } from "react";
import { Link } from "react-router-dom";
import { Mail, Phone, MapPin, Building2 } from "lucide-react";
import SocialLinks from "@/components/layout/SocialLinks";

const Footer = () => {
  const reqRef = useRef<HTMLDivElement>(null);
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
  const [isHovering, setIsHovering] = useState(false);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const rect = reqRef.current?.getBoundingClientRect();
    if (!rect) return;
    setMousePos({ x: e.clientX - rect.left, y: e.clientY - rect.top });
  };

  const handleMouseEnter = (e: React.MouseEvent<HTMLDivElement>) => {
    const rect = reqRef.current?.getBoundingClientRect();
    if (!rect) return;
    setMousePos({ x: e.clientX - rect.left, y: e.clientY - rect.top });
    setIsHovering(true);
  };

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
                { label: "Business Code And Ethics", path: "/policies#code-of-conduct" },
                { label: "Legal", path: "/policies#legal" },
                { label: "Privacy Policy", path: "/policies#terms-privacy" },
                { label: "⁠Equal Opportunity And Equal Diversity", path: "/policies#equal-opportunity" },
                { label: "⁠Ethical Trading Policy Statement.", path: "/policies#ethical-trading" },
              ].map((link) => (
                <Link
                  key={link.label}
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
                  <p><span className="text-muted-foreground/60">Registrations:</span> +44 7990 324644</p>
                  <p><span className="text-muted-foreground/60">Business Enquiries:</span> +44 7466 989804</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="pt-8 pb-8 border-t border-border flex flex-col gap-3">
          <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
            <p className="font-sans text-[10px] uppercase tracking-[0.2em] footer-text-gradient cursor-pointer">
              © {new Date().getFullYear()} Requsyol. All Rights Reserved.
            </p>
            <p className="font-sans text-[10px] uppercase tracking-[0.2em] footer-text-gradient cursor-pointer">
              UK Staffing & Recruitment
            </p>
          </div>
          <p className="font-sans text-[10px] uppercase tracking-[0.15em] footer-text-gradient cursor-pointer">
            Requsyol Recruitment Ltd are licensed members of the Gangmasters and Labour Abuse Authority. License No REQU0004
          </p>
        </div>
      </div>

      <div
        ref={reqRef}
        className="relative overflow-hidden pb-4"
        onMouseMove={handleMouseMove}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={() => setIsHovering(false)}
      >
        <div
          className="text-center font-barlow leading-none uppercase font-black select-none"
          style={{
            fontSize: "clamp(6rem, 20vw, 18rem)",
            backgroundImage: `radial-gradient(circle 380px at ${mousePos.x}px ${mousePos.y}px, #56A8D6 0%, #F28230 35%, #2F7FB2 65%, transparent 100%)`,
            WebkitBackgroundClip: "text",
            backgroundClip: "text",
            WebkitTextFillColor: "transparent",
            color: "transparent",
            opacity: isHovering ? 1 : 0.22,
            transition: "opacity 0.45s ease",
          }}
        >
          REQUSYOL
        </div>
      </div>
    </footer>
  );
};

export default Footer;
