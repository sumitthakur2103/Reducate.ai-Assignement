"use client";

import { AnimatePresence, motion } from "framer-motion";
import { GraduationCap, Menu, X } from "lucide-react";
import Link from "next/link";
import { useEffect, useState } from "react";

const navLinks = [
  { href: "#about", label: "About" },
  { href: "#programs", label: "Programs" },
  { href: "#testimonials", label: "Stories" },
  { href: "#apply", label: "Apply" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = mobileOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [mobileOpen]);

  const handleNavClick = () => setMobileOpen(false);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${
        scrolled ? "glass-nav shadow-lg shadow-black/20" : "bg-transparent"
      }`}
    >
      <nav
        className="mx-auto flex max-w-7xl items-center justify-between px-5 py-4 sm:px-8 lg:px-12"
        aria-label="Main navigation"
      >
        <Link
          href="#hero"
          className="group flex items-center gap-2.5 transition-opacity hover:opacity-90"
          onClick={handleNavClick}
        >
          <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-gold-500/15 ring-1 ring-gold-500/30 transition-all group-hover:bg-gold-500/25 group-hover:shadow-glow">
            <GraduationCap className="h-5 w-5 text-gold-400" aria-hidden />
          </span>
          <span className="font-display text-xl font-semibold tracking-tight text-cream">
            JG<span className="text-gold-400">University</span>
          </span>
        </Link>

        {/* Desktop links */}
        <ul className="hidden items-center gap-8 md:flex">
          {navLinks.map((link) => (
            <li key={link.href}>
              <Link
                href={link.href}
                className="relative text-sm font-medium text-cream/75 transition-colors hover:text-gold-400 after:absolute after:-bottom-1 after:left-0 after:h-px after:w-0 after:bg-gold-400 after:transition-all hover:after:w-full"
              >
                {link.label}
              </Link>
            </li>
          ))}
          <li>
            <Link
              href="#apply"
              className="rounded-full bg-gold-500 px-5 py-2.5 text-sm font-semibold text-navy-950 transition-all hover:bg-gold-400 hover:shadow-glow"
            >
              Apply Now
            </Link>
          </li>
        </ul>

        {/* Mobile menu button */}
        <button
          type="button"
          className="flex h-11 w-11 items-center justify-center rounded-lg border border-white/10 text-cream transition-colors hover:border-gold-500/40 hover:bg-white/5 md:hidden"
          onClick={() => setMobileOpen((prev) => !prev)}
          aria-expanded={mobileOpen}
          aria-controls="mobile-menu"
          aria-label={mobileOpen ? "Close menu" : "Open menu"}
        >
          {mobileOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </nav>

      {/* Mobile drawer */}
      <AnimatePresence>
        {mobileOpen && (
          <>
            <motion.div
              className="fixed inset-0 top-[72px] bg-navy-950/80 backdrop-blur-sm md:hidden"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setMobileOpen(false)}
              aria-hidden
            />
            <motion.div
              id="mobile-menu"
              className="glass-nav fixed inset-x-0 top-[72px] border-t border-white/5 md:hidden"
              initial={{ opacity: 0, y: -16 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -16 }}
              transition={{ duration: 0.25, ease: [0.22, 1, 0.36, 1] }}
            >
              <ul className="flex flex-col gap-1 px-5 py-6">
                {navLinks.map((link, i) => (
                  <motion.li
                    key={link.href}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: i * 0.05 }}
                  >
                    <Link
                      href={link.href}
                      onClick={handleNavClick}
                      className="block rounded-lg px-4 py-3.5 text-base font-medium text-cream/90 transition-colors hover:bg-white/5 hover:text-gold-400"
                    >
                      {link.label}
                    </Link>
                  </motion.li>
                ))}
                <motion.li
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: navLinks.length * 0.05 }}
                  className="mt-2 px-4"
                >
                  <Link
                    href="#apply"
                    onClick={handleNavClick}
                    className="block rounded-full bg-gold-500 py-3.5 text-center text-base font-semibold text-navy-950 transition-all hover:bg-gold-400"
                  >
                    Apply Now
                  </Link>
                </motion.li>
              </ul>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </header>
  );
}
