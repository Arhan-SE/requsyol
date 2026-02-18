import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { X, Menu } from "lucide-react";

const navLinks = [
  { label: "Work", path: "/candidates" },
  { label: "Employers", path: "/employers" },
  { label: "About", path: "/about" },
  { label: "Contact", path: "/contact" },
  { label: "FAQ", path: "/faq" },
];

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => setMobileOpen(false), [location]);

  return (
    <motion.header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled ? "border-b border-border" : ""
      } bg-background/90 backdrop-blur-sm`}
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6, ease: [0.25, 0.46, 0.45, 0.94] }}
    >
      {/* Desktop — 3-column layout */}
      <div className="hidden lg:grid grid-cols-3 items-center px-8 py-4">
        {/* LEFT — stacked nav links */}
        <nav className="flex flex-col gap-0.5">
          {navLinks.map((link) => {
            const isActive = location.pathname === link.path;
            return (
              <Link
                key={link.path}
                to={link.path}
                className={`text-xs tracking-[0.18em] uppercase font-medium transition-colors leading-tight py-0.5 ${
                  isActive ? "text-foreground" : "text-muted-foreground hover:text-foreground"
                }`}
              >
                {link.label}
              </Link>
            );
          })}
        </nav>

        {/* CENTER — boxed logo */}
        <Link to="/" className="flex flex-col items-center justify-center">
          <div className="border border-border px-6 py-3 text-center">
            <div className="font-barlow font-black text-2xl tracking-[0.22em] uppercase text-foreground leading-none">
              REQUSYOL
            </div>
            <div className="text-[9px] tracking-[0.28em] uppercase text-muted-foreground mt-1 font-sans">
              Staffing & Recruitment
            </div>
          </div>
        </Link>

        {/* RIGHT — outlined CTA buttons */}
        <div className="flex items-start justify-end gap-2">
          <Link
            to="/contact"
            className="border border-border px-5 py-2.5 text-xs tracking-[0.18em] uppercase font-medium text-foreground hover:bg-foreground hover:text-background transition-all duration-200"
          >
            Let's Talk
          </Link>
          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            className="border border-border px-5 py-2.5 text-xs tracking-[0.18em] uppercase font-medium text-foreground hover:bg-foreground hover:text-background transition-all duration-200 flex items-center gap-2"
            aria-label="Toggle menu"
          >
            {mobileOpen ? <X size={13} /> : <Menu size={13} />}
            Menu
          </button>
        </div>
      </div>

      {/* Mobile header */}
      <div className="lg:hidden flex items-center justify-between px-5 py-4">
        <Link to="/" className="border border-border px-4 py-2">
          <span className="font-barlow font-black text-lg tracking-[0.18em] uppercase text-foreground">
            REQUSYOL
          </span>
        </Link>
        <button
          onClick={() => setMobileOpen(!mobileOpen)}
          className="border border-border p-2 text-foreground"
          aria-label="Toggle menu"
        >
          {mobileOpen ? <X size={18} /> : <Menu size={18} />}
        </button>
      </div>

      {/* Full-screen dropdown menu (desktop & mobile) */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.nav
            className="border-t border-border bg-background"
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3 }}
          >
            <div className="flex flex-col px-8 py-6 gap-1">
              {navLinks.map((link) => (
                <Link
                  key={link.path}
                  to={link.path}
                  className={`text-sm tracking-[0.18em] uppercase font-medium py-3 border-b border-border/40 transition-colors ${
                    location.pathname === link.path
                      ? "text-foreground"
                      : "text-muted-foreground hover:text-foreground"
                  }`}
                >
                  {link.label}
                </Link>
              ))}
              <Link
                to="/contact"
                className="mt-4 border border-border px-6 py-3 text-xs tracking-[0.2em] uppercase font-medium text-foreground hover:bg-foreground hover:text-background transition-all duration-200 text-center"
              >
                Let's Talk
              </Link>
            </div>
          </motion.nav>
        )}
      </AnimatePresence>
    </motion.header>
  );
};

export default Navbar;
