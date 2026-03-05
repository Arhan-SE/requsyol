import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { motion, AnimatePresence, useReducedMotion } from "framer-motion";
import { X, Menu, ArrowUpRight } from "lucide-react";
import logo from "@/assets/Requsyol_png.png";

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

  return (
    <>
      <motion.header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          scrolled || mobileOpen ? "border-b border-border bg-background/90 backdrop-blur-sm" : "bg-transparent"
        }`}
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.6, ease: [0.25, 0.46, 0.45, 0.94] }}
      >
        <div className="hidden lg:grid grid-cols-3 items-center px-8 py-4">
          <nav className="flex flex-row items-center gap-6">
            {desktopLinks.map((link) => {
              const isActive = location.pathname === link.path;
              return (
                <Link
                  key={link.path}
                  to={link.path}
                  className={`text-xs tracking-[0.18em] uppercase font-medium transition-colors whitespace-nowrap ${
                    isActive ? "text-foreground" : "text-muted-foreground hover:text-foreground"
                  }`}
                >
                  {link.label}
                </Link>
              );
            })}
          </nav>

          <Link to="/" className="flex items-center justify-center">
            <img src={logo} alt="Requsyol" className="h-20 w-auto" />
          </Link>

          <div className="flex items-start justify-end gap-2">
            <Link
              to="/contact"
              className="border border-border px-5 py-2.5 text-xs tracking-[0.18em] uppercase font-medium text-foreground hover:bg-foreground hover:text-background transition-all duration-200"
            >
              Let's Talk
            </Link>
            <button
              onClick={() => setMobileOpen((open) => !open)}
              className="border border-border px-5 py-2.5 text-xs tracking-[0.18em] uppercase font-medium text-foreground hover:bg-foreground hover:text-background transition-all duration-200 flex items-center gap-2"
              aria-label="Toggle menu"
              aria-expanded={mobileOpen}
              aria-controls="site-navigation-panel"
            >
              {mobileOpen ? <X size={13} /> : <Menu size={13} />}
              Menu
            </button>
          </div>
        </div>

        <div className="lg:hidden flex items-center justify-between px-5 py-4">
          <Link to="/">
            <img src={logo} alt="Requsyol" className="h-14 w-auto" />
          </Link>
          <button
            onClick={() => setMobileOpen((open) => !open)}
            className="border border-border p-2 text-foreground"
            aria-label="Toggle menu"
            aria-expanded={mobileOpen}
            aria-controls="site-navigation-panel"
          >
            {mobileOpen ? <X size={18} /> : <Menu size={18} />}
          </button>
        </div>
      </motion.header>

      <AnimatePresence>
        {mobileOpen && (
          <>
            <motion.button
              type="button"
              aria-label="Close navigation menu"
              className="fixed inset-0 z-[55] bg-background/70 backdrop-blur-sm"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: prefersReducedMotion ? 0 : 0.25 }}
              onClick={() => setMobileOpen(false)}
            />

            <motion.aside
              id="site-navigation-panel"
              className="fixed inset-y-0 right-0 z-[60] flex w-full max-w-md flex-col border-l border-border bg-background px-6 py-6 sm:px-8"
              initial={prefersReducedMotion ? { opacity: 1 } : { x: "100%" }}
              animate={prefersReducedMotion ? { opacity: 1 } : { x: 0 }}
              exit={prefersReducedMotion ? { opacity: 0 } : { x: "100%" }}
              transition={{ duration: prefersReducedMotion ? 0.15 : 0.45, ease: [0.22, 1, 0.36, 1] }}
            >
              <div className="flex items-center justify-between border-b border-border pb-5">
                <span className="text-[0.65rem] uppercase tracking-[0.35em] text-muted-foreground">Navigation</span>
                <button
                  onClick={() => setMobileOpen(false)}
                  className="border border-border p-2 text-foreground transition-colors hover:bg-foreground hover:text-background"
                  aria-label="Close menu"
                >
                  <X size={18} />
                </button>
              </div>

              <nav className="flex flex-1 flex-col justify-center gap-2 py-8">
                {menuLinks.map((link, index) => {
                  const isActive = location.pathname === link.path;

                  return (
                    <motion.div
                      key={link.path}
                      initial={prefersReducedMotion ? { opacity: 1 } : { opacity: 0, x: 28 }}
                      animate={prefersReducedMotion ? { opacity: 1 } : { opacity: 1, x: 0 }}
                      exit={prefersReducedMotion ? { opacity: 0 } : { opacity: 0, x: 12 }}
                      transition={{
                        duration: prefersReducedMotion ? 0.15 : 0.35,
                        delay: prefersReducedMotion ? 0 : 0.08 + index * 0.06,
                        ease: [0.25, 0.46, 0.45, 0.94],
                      }}
                    >
                      <Link
                        to={link.path}
                        className="group flex items-center justify-between gap-6 border-b border-border/60 py-4 sm:py-5"
                      >
                        <motion.span
                          className={`text-4xl sm:text-5xl font-semibold uppercase leading-none tracking-[0.06em] transition-colors ${
                            isActive ? "text-foreground" : "text-muted-foreground group-hover:text-foreground"
                          }`}
                          whileHover={prefersReducedMotion ? undefined : { x: 10 }}
                          transition={{ duration: 0.25 }}
                        >
                          {link.label}
                        </motion.span>

                        <motion.div
                          className="flex items-center gap-3 text-foreground"
                          whileHover={prefersReducedMotion ? undefined : { x: 4 }}
                          transition={{ duration: 0.25 }}
                        >
                          <span
                            className={`h-px w-10 origin-left bg-foreground transition-transform duration-300 ${
                              isActive ? "scale-x-100" : "scale-x-50 group-hover:scale-x-100"
                            }`}
                          />
                          <ArrowUpRight className="h-5 w-5 transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1" />
                        </motion.div>
                      </Link>
                    </motion.div>
                  );
                })}
              </nav>

              <div className="border-t border-border pt-5">
                <p className="text-xs uppercase tracking-[0.25em] text-muted-foreground">Recruitment, compliance, and workforce solutions.</p>
              </div>
            </motion.aside>
          </>
        )}
      </AnimatePresence>
    </>
  );
};

export default Navbar;
