"use client";

import { motion } from "framer-motion";
import {
  Facebook,
  GraduationCap,
  Instagram,
  Linkedin,
  Mail,
  MapPin,
  Phone,
  Twitter,
  Youtube,
} from "lucide-react";
import Link from "next/link";

const quickLinks = [
  { href: "#about", label: "About Us" },
  { href: "#programs", label: "Programs" },
  { href: "#testimonials", label: "Student Stories" },
  { href: "#apply", label: "Admissions" },
];

const programLinks = [
  { href: "#programs", label: "B.Tech" },
  { href: "#programs", label: "MBA" },
  { href: "#programs", label: "Law" },
  { href: "#programs", label: "B.Pharm" },
  { href: "#programs", label: "B.Des" },
];

const socialLinks = [
  { href: "https://linkedin.com", icon: Linkedin, label: "LinkedIn" },
  { href: "https://twitter.com", icon: Twitter, label: "Twitter" },
  { href: "https://instagram.com", icon: Instagram, label: "Instagram" },
  { href: "https://facebook.com", icon: Facebook, label: "Facebook" },
  { href: "https://youtube.com", icon: Youtube, label: "YouTube" },
];

export default function Footer() {
  return (
    <footer className="border-t border-white/5 bg-navy-950">
      <div className="mx-auto max-w-7xl px-5 py-16 sm:px-8 lg:px-12">
        <motion.div
          className="grid gap-12 sm:grid-cols-2 lg:grid-cols-4"
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          {/* Brand */}
          <div className="sm:col-span-2 lg:col-span-1">
            <Link href="#hero" className="inline-flex items-center gap-2.5">
              <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-gold-500/15 ring-1 ring-gold-500/30">
                <GraduationCap className="h-5 w-5 text-gold-400" aria-hidden />
              </span>
              <span className="font-display text-xl font-semibold text-cream">
                JG<span className="text-gold-400">University</span>
              </span>
            </Link>
            <p className="mt-4 max-w-xs text-sm leading-relaxed text-cream/50">
              Empowering minds, shaping futures. A premier institution for
              excellence in higher education since 1998.
            </p>
            <div className="mt-6 flex gap-3">
              {socialLinks.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex h-10 w-10 items-center justify-center rounded-lg border border-white/10 text-cream/60 transition-all hover:border-gold-500/40 hover:bg-gold-500/10 hover:text-gold-400"
                  aria-label={`Follow us on ${social.label}`}
                >
                  <social.icon className="h-4 w-4" aria-hidden />
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="mb-4 text-sm font-semibold uppercase tracking-wider text-gold-400">
              Quick Links
            </h3>
            <ul className="space-y-3">
              {quickLinks.map((link) => (
                <li key={link.label}>
                  <Link
                    href={link.href}
                    className="text-sm text-cream/60 transition-colors hover:text-gold-400"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Programs */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            <h3 className="mb-4 text-sm font-semibold uppercase tracking-wider text-gold-400">
              Programs
            </h3>
            <ul className="space-y-3">
              {programLinks.map((link) => (
                <li key={link.label}>
                  <Link
                    href={link.href}
                    className="text-sm text-cream/60 transition-colors hover:text-gold-400"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Contact */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <h3 className="mb-4 text-sm font-semibold uppercase tracking-wider text-gold-400">
              Contact
            </h3>
            <ul className="space-y-4">
              <li className="flex gap-3 text-sm text-cream/60">
                <MapPin
                  className="mt-0.5 h-4 w-4 shrink-0 text-gold-500/70"
                  aria-hidden
                />
                <span>
                  JG University Campus, Knowledge Park,
                  <br />
                  Greater Noida, UP 201310
                </span>
              </li>
              <li>
                <a
                  href="tel:+911234567890"
                  className="flex gap-3 text-sm text-cream/60 transition-colors hover:text-gold-400"
                >
                  <Phone
                    className="h-4 w-4 shrink-0 text-gold-500/70"
                    aria-hidden
                  />
                  +91 123 456 7890
                </a>
              </li>
              <li>
                <a
                  href="mailto:admissions@jguniversity.edu"
                  className="flex gap-3 text-sm text-cream/60 transition-colors hover:text-gold-400"
                >
                  <Mail
                    className="h-4 w-4 shrink-0 text-gold-500/70"
                    aria-hidden
                  />
                  admissions@jguniversity.edu
                </a>
              </li>
            </ul>
          </motion.div>
        </motion.div>

        {/* Copyright */}
        <motion.div
          className="mt-14 flex flex-col items-center justify-between gap-4 border-t border-white/5 pt-8 sm:flex-row"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
        >
          <p className="text-center text-sm text-cream/40">
            © {new Date().getFullYear()} JG University. All rights reserved.
          </p>
          <div className="flex gap-6 text-sm text-cream/40">
            <Link href="#" className="transition-colors hover:text-gold-400">
              Privacy Policy
            </Link>
            <Link href="#" className="transition-colors hover:text-gold-400">
              Terms of Use
            </Link>
          </div>
        </motion.div>
      </div>
    </footer>
  );
}
