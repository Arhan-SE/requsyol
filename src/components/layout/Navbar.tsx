import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";
import logo from "@/assets/Requsyol_png.png";

const navLinks = [
  { label: "Home", path: "/" },
  { label: "About", path: "/about" },
  { label: "Our Services", path: "/services" },
  { label: "Policies", path: "/policies" },
  { label: "Contact Us", path: "/contact" },
];

const Navbar = () => {
  const location = useLocation();
  const [menuOpen, setMenuOpen] = useState(false);
  const headerStateClassName = "bg-transparent border-transparent shadow-none";

  const closeMenu = () => setMenuOpen(false);

  return (
    <>
      <motion.header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${headerStateClassName}`}
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.6, ease: [0.25, 0.46, 0.45, 0.94] }}
      >
        {/* Desktop nav */}
        <div className="hidden lg:grid grid-cols-[1fr_auto_1fr] items-start gap-6 px-8 py-5">
          <nav className="flex flex-col gap-0.5 pt-1">
            {navLinks.map((link) => {
              const isActive = location.pathname === link.path;
              return (
                <Link
                  key={link.path}
                  to={link.path}
                  className={`text-[11px] tracking-[0.15em] uppercase font-bold transition-colors whitespace-nowrap leading-snug ${
                    isActive ? "text-muted-foreground" : "text-foreground"
                  }`}
                >
                  {link.label}
                </Link>
              );
            })}
          </nav>

          <Link to="/" className="flex items-center justify-center self-center">
            <img src={logo} alt="Requsyol" className="h-40 w-auto" />
          </Link>

          <div className="flex items-start justify-end gap-2 pt-1">
            <Link
              to="/contact"
              className="border border-border px-5 py-2 text-[11px] tracking-[0.15em] uppercase font-bold text-foreground hover:bg-foreground hover:text-background transition-all duration-200"
            >
              Let's Talk
            </Link>
          </div>
        </div>

        {/* Mobile nav bar */}
        <div className="lg:hidden flex items-center justify-between px-4 sm:px-6 py-3">
          <Link to="/" className="flex items-center" onClick={closeMenu}>
            <img src={logo} alt="Requsyol" className="h-32 sm:h-40 w-auto" />
          </Link>

          <button
            onClick={() => setMenuOpen((o) => !o)}
            aria-label={menuOpen ? "Close menu" : "Open menu"}
            className="flex items-center justify-center w-10 h-10 border border-border text-foreground hover:bg-foreground hover:text-background transition-all duration-200"
          >
            {menuOpen ? <X size={18} /> : <Menu size={18} />}
          </button>
        </div>

        {/* Mobile dropdown menu */}
        <AnimatePresence>
          {menuOpen && (
            <motion.div
              key="mobile-menu"
              initial={{ opacity: 0, y: -8 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -8 }}
              transition={{ duration: 0.2, ease: "easeOut" }}
              className="lg:hidden bg-background/95 backdrop-blur-sm border-t border-border"
            >
              <nav className="flex flex-col px-4 sm:px-6 py-4 gap-1">
                {navLinks.map((link) => {
                  const isActive = location.pathname === link.path;
                  return (
                    <Link
                      key={link.path}
                      to={link.path}
                      onClick={closeMenu}
                      className={`text-[11px] tracking-[0.18em] uppercase font-bold py-3 border-b border-border/40 last:border-0 transition-colors ${
                        isActive ? "text-muted-foreground" : "text-foreground"
                      }`}
                    >
                      {link.label}
                    </Link>
                  );
                })}
                <Link
                  to="/contact"
                  onClick={closeMenu}
                  className="mt-4 border border-border px-5 py-3 text-[11px] tracking-[0.15em] uppercase font-bold text-foreground hover:bg-foreground hover:text-background transition-all duration-200 text-center"
                >
                  Let's Talk
                </Link>
              </nav>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.header>
    </>
  );
};

export default Navbar;
