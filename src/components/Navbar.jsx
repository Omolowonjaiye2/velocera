import React from "react";
import { useEffect, useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { Menu, Search, X } from "lucide-react";
import logo from "../assets/velocera-logo.png";
import { motion, AnimatePresence } from "framer-motion";

const links = [
  ["/", "Home"],
  ["/cars", "Cars"],
  ["/compare", "Compare"],
  ["/brand", "Brand"]
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [open]);

  return (
    <header className={`navbar ${scrolled ? "navbar--scrolled" : ""}`}>
      <div className="container nav-inner">
        <Link className="brand-logo" to="/" onClick={() => setOpen(false)} aria-label="VÉLOCÉRA home">
          <img src={logo} alt="VÉLOCÉRA" />
        </Link>

        <nav className="desktop-nav" aria-label="Primary navigation">
          {links.map(([to, label]) => (
            <NavLink key={to} to={to} className={({ isActive }) => isActive ? "active" : ""}>
              {label}
            </NavLink>
          ))}
        </nav>

        <div className="nav-actions">
          <Link to="/cars" className="icon-button" aria-label="Search cars">
            <Search size={19} strokeWidth={1.5} />
          </Link>
          <button className="icon-button mobile-menu-button" aria-label="Open menu" onClick={() => setOpen(true)}>
            <Menu size={22} strokeWidth={1.5} />
          </button>
        </div>
      </div>

      <AnimatePresence>
        {open && (
          <motion.div
            className="mobile-menu"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0}}
          >
            <button className="mobile-close icon-button" aria-label="Close menu" onClick={() => setOpen(false)}>
              <X size={24} />
            </button>
            <div className="mobile-menu__inner">
              <p className="eyebrow">VÉLOCÉRA / NAVIGATION</p>
              {links.map(([to, label], index) => (
                <motion.div
                  key={to}
                  initial={{ y: 25, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ delay: index * 0.07 }}
                >
                  <Link to={to} onClick={() => setOpen(false)}>{label}</Link>
                </motion.div>
              ))}
              <div className="mobile-menu__meta">
                <span>ENGINEERED TO EXCITE</span>
                <span>EST. 2026</span>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}