import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { motion, AnimatePresence, useReducedMotion } from "framer-motion";
import { X, Menu } from "lucide-react";
import logo from "@/assets/Requsyol_png.png";
import SocialLinks from "@/components/layout/SocialLinks";

const desktopLinks = [
  { label: "Home", path: "/" },
  { label: "About", path: "/about" },
  { label: "Our Services", path: "/services" },
];

const menuLinks = [
  { label: "Home", path: "/" },
  { label: "About", path: "/about" },
  { label: "Our Services", path: "/services" },
  { label: "Policies", path: "/policies" },
  { label: "Contact Us", path: "/contact" },
];

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const location = useLocation();
  const prefersReducedMotion = useReducedMotion();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    setMobileOpen(false);
  }, [location.pathname]);

  useEffect(() => {
    const previousOverflow = document.body.style.overflow;

    if (mobileOpen) {
      document.body.style.overflow = "hidden";
    }

    return () => {
      document.body.style.overflow = previousOverflow;
    };
  }, [mobileOpen]);

  const headerStateClassName = scrolled || mobileOpen
    ? "border-b border-border bg-background/92 backdrop-blur-md"
    : "border-b border-transparent bg-background/45 backdrop-blur-sm";

  return (
    <>
      <motion.header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${headerStateClassName}`}
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.6, ease: [0.25, 0.46, 0.45, 0.94] }}
      >
        <div className="hidden lg:grid grid-cols-[1fr_auto_1fr] items-start gap-6 px-8 py-5">
          <nav className="flex flex-col gap-0.5 pt-1">
            {desktopLinks.map((link) => {
              const isActive = location.pathname === link.path;
              return (
                <Link
                  key={link.path}
                  to={link.path}
                  className={`text-[11px] tracking-[0.15em] uppercase font-bold transition-colors whitespace-nowrap leading-snug ${
                    isActive ? "text-foreground" : "text-muted-foreground hover:text-foreground"
                  }`}
                >
                  {link.label}
                </Link>
              );
            })}
          </nav>

          <Link to="/" className="flex items-center justify-center self-center">
            <img src={logo} alt="Requsyol" className="h-28 w-auto" />
          </Link>

          <div className="flex items-start justify-end gap-2 pt-1">
            <Link
              to="/contact"
              className="border border-border px-5 py-2 text-[11px] tracking-[0.15em] uppercase font-bold text-foreground hover:bg-foreground hover:text-background transition-all duration-200"
            >
              Let's Talk
            </Link>
            <button
              onClick={() => setMobileOpen((open) => !open)}
              className="border border-border px-5 py-2 text-[11px] tracking-[0.15em] uppercase font-bold text-foreground hover:bg-foreground hover:text-background transition-all duration-200"
              aria-label="Toggle menu"
              aria-expanded={mobileOpen}
              aria-controls="site-navigation-panel"
            >
              Menu
            </button>
          </div>
        </div>

        <div className="grid lg:hidden grid-cols-[1fr_auto_1fr] items-start gap-4 px-5 py-4">
          <nav className="flex flex-col gap-0.5 pt-1">
            {desktopLinks.map((link) => {
              const isActive = location.pathname === link.path;
              return (
                <Link
                  key={link.path}
                  to={link.path}
                  className={`text-[11px] tracking-[0.15em] uppercase font-bold transition-colors whitespace-nowrap leading-snug ${
                    isActive ? "text-foreground" : "text-muted-foreground hover:text-foreground"
                  }`}
                >
                  {link.label}
                </Link>
              );
            })}
          </nav>

          <Link to="/" className="flex items-center justify-center self-center">
            <img src={logo} alt="Requsyol" className="h-20 w-auto" />
          </Link>

          <div className="flex items-start justify-end">
            <button
              onClick={() => setMobileOpen((open) => !open)}
              className="border border-border p-2.5 text-foreground hover:bg-foreground hover:text-background transition-all duration-200"
              aria-label="Toggle menu"
              aria-expanded={mobileOpen}
              aria-controls="site-navigation-panel"
            >
              {mobileOpen ? <X size={18} /> : <Menu size={18} />}
            </button>
          </div>
        </div>
      </motion.header>

      <AnimatePresence>
        {mobileOpen && (
          <>
            <motion.button
              type="button"
              aria-label="Close navigation menu"
              className="fixed inset-0 z-[55] bg-background/75 backdrop-blur-sm"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: prefersReducedMotion ? 0 : 0.25 }}
              onClick={() => setMobileOpen(false)}
            />

            <motion.aside
              id="site-navigation-panel"
              className="fixed inset-y-0 right-0 z-[60] flex w-full max-w-md flex-col bg-background px-6 py-6 sm:px-8"
              initial={prefersReducedMotion ? { opacity: 1 } : { x: "100%" }}
              animate={prefersReducedMotion ? { opacity: 1 } : { x: 0 }}
              exit={prefersReducedMotion ? { opacity: 0 } : { x: "100%" }}
              transition={{ duration: prefersReducedMotion ? 0.15 : 0.45, ease: [0.22, 1, 0.36, 1] }}
            >
              <div className="flex items-center justify-between pb-5">
                <span className="text-[0.65rem] uppercase tracking-[0.35em] text-muted-foreground">Navigation</span>
                <button
                  onClick={() => setMobileOpen(false)}
                  className="border border-border p-2 text-foreground transition-colors hover:bg-foreground hover:text-background"
                  aria-label="Close menu"
                >
                  <X size={18} />
                </button>
              </div>

              <nav className="flex flex-1 flex-col justify-center gap-1 py-4">
                {menuLinks.map((link, index) => {
                  const isActive = location.pathname === link.path;

                  return (
                    <motion.div
                      key={link.path}
                      initial={prefersReducedMotion ? { opacity: 1 } : { opacity: 0, x: 20 }}
                      animate={prefersReducedMotion ? { opacity: 1 } : { opacity: 1, x: 0 }}
                      exit={prefersReducedMotion ? { opacity: 0 } : { opacity: 0, x: 12 }}
                      transition={{
                        duration: prefersReducedMotion ? 0.15 : 0.35,
                        delay: prefersReducedMotion ? 0 : 0.08 + index * 0.05,
                        ease: [0.25, 0.46, 0.45, 0.94],
                      }}
                    >
                      <Link
                        to={link.path}
                        className="group block py-2"
                      >
                        <motion.span
                          className={`block font-barlow text-[clamp(2.75rem,8vw,4.5rem)] font-black uppercase leading-[0.84] tracking-[0.02em] transition-opacity ${
                            isActive ? "text-foreground opacity-100" : "text-muted-foreground opacity-80 group-hover:text-foreground group-hover:opacity-100"
                          }`}
                          whileHover={prefersReducedMotion ? undefined : { x: 10 }}
                          transition={{ duration: 0.22 }}
                        >
                          {link.label}
                        </motion.span>
                      </Link>
                    </motion.div>
                  );
                })}
              </nav>

              <div className="pt-5">
                <SocialLinks />
              </div>
            </motion.aside>
          </>
        )}
      </AnimatePresence>
    </>
  );
};

export default Navbar;
