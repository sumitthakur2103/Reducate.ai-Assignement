"use client";

import { motion } from "framer-motion";
import { Download, Send } from "lucide-react";
import Link from "next/link";
import SectionReveal from "./SectionReveal";

export default function CTA() {
  return (
    <section id="apply" className="section-padding">
      <SectionReveal>
        <div className="relative mx-auto max-w-7xl overflow-hidden rounded-3xl">
          {/* Background */}
          <div className="absolute inset-0 bg-cta-gradient" aria-hidden />
          <motion.div
            className="absolute -left-20 top-0 h-64 w-64 rounded-full bg-gold-500/20 blur-3xl"
            animate={{ x: [0, 40, 0], y: [0, 20, 0] }}
            transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
            aria-hidden
          />
          <motion.div
            className="absolute -right-10 bottom-0 h-48 w-48 rounded-full bg-gold-500/15 blur-2xl"
            animate={{ x: [0, -30, 0], y: [0, -15, 0] }}
            transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
            aria-hidden
          />

          {/* Pattern overlay */}
          <div
            className="cta-pattern absolute inset-0 opacity-[0.06]"
            aria-hidden
          />

          <div className="relative px-8 py-16 text-center sm:px-12 sm:py-20 lg:py-24">
            <motion.p
              className="mb-4 text-sm font-semibold uppercase tracking-[0.25em] text-gold-300"
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              Admissions 2026
            </motion.p>

            <motion.h2
              className="font-display text-3xl font-bold text-cream sm:text-4xl lg:text-5xl"
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
            >
              Start Your Journey{" "}
              <span className="text-gradient-gold">Today</span>
            </motion.h2>

            <motion.p
              className="mx-auto mt-5 max-w-xl text-lg text-cream/70"
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.15 }}
            >
              Applications are now open. Take the first step toward a future
              built on excellence, innovation, and impact.
            </motion.p>

            <motion.div
              className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
            >
              <Link
                href="#hero"
                className="group inline-flex min-h-[52px] w-full items-center justify-center gap-2 rounded-full bg-gold-500 px-8 py-3.5 text-base font-semibold text-navy-950 transition-all hover:bg-gold-400 hover:shadow-glow sm:w-auto"
                aria-label="Apply for admission"
              >
                <Send className="h-4 w-4" aria-hidden />
                Apply Now
              </Link>
              <Link
                href="#programs"
                className="inline-flex min-h-[52px] w-full items-center justify-center gap-2 rounded-full border-2 border-cream/30 px-8 py-3.5 text-base font-semibold text-cream transition-all hover:border-gold-400 hover:bg-white/5 hover:text-gold-300 sm:w-auto"
                aria-label="Download university brochure"
              >
                <Download className="h-4 w-4" aria-hidden />
                Download Brochure
              </Link>
            </motion.div>
          </div>
        </div>
      </SectionReveal>
    </section>
  );
}
