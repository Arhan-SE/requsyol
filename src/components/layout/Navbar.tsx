import { Link, useLocation } from "react-router-dom";
import { motion } from "framer-motion";
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
  const headerStateClassName = "bg-transparent border-transparent shadow-none";

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
            {navLinks.map((link) => {
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
            <img src={logo} alt="Requsyol" className="h-32 w-auto" />
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

        <div className="grid lg:hidden grid-cols-[auto_auto_1fr] items-center gap-4 px-5 py-4">
          <nav className="flex flex-col items-start gap-1 text-[11px] tracking-[0.12em] uppercase font-bold">
            {navLinks.map((link) => {
              const isActive = location.pathname === link.path;
              return (
                <Link
                  key={link.path}
                  to={link.path}
                  className={`transition-colors whitespace-nowrap leading-snug ${
                    isActive ? "text-foreground" : "text-muted-foreground hover:text-foreground"
                  }`}
                >
                  {link.label}
                </Link>
              );
            })}
          </nav>

          <Link to="/" className="flex items-center justify-center">
            <img src={logo} alt="Requsyol" className="h-16 w-auto" />
          </Link>

          <div className="flex items-center justify-end">
            <Link
              to="/contact"
              className="border border-border px-3 py-2 text-[11px] tracking-[0.15em] uppercase font-bold text-foreground hover:bg-foreground hover:text-background transition-all duration-200 whitespace-nowrap"
            >
              Let's Talk
            </Link>
          </div>
        </div>
      </motion.header>
    </>
  );
};

export default Navbar;
