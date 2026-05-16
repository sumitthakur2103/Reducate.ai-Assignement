"use client";

import { motion } from "framer-motion";
import { ArrowRight, Sparkles } from "lucide-react";
import Link from "next/link";
import MagicRings from "@/components/MagicRings.jsx";
const stagger = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.12, delayChildren: 0.2 },
  },
};

const fadeUp = {
  hidden: { opacity: 0, y: 32 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] },
  },
};

export default function Hero() {
  return (
    <section
      id="hero"
      className="relative flex min-h-screen items-center overflow-hidden pt-24"
    >
      {/* Magic Rings Background */}
      <div className="absolute inset-0 -z-10 overflow-hidden">
        <MagicRings
          color="#D4AF37"
          colorTwo="#7C3AED"
          ringCount={4}
          speed={0.8}
          attenuation={12}
          lineThickness={2}
          baseRadius={0.25}
          radiusStep={0.08}
          scaleRate={0.12}
          opacity={0.7}
          blur={0}
          noiseAmount={0.02}
          rotation={0}
          ringGap={1.4}
          fadeIn={0.7}
          fadeOut={0.5}
          followMouse={false}
          mouseInfluence={0.08}
          hoverScale={1.05}
          parallax={0.04}
          clickBurst={false}
        />
      </div>
      {/* Background layers */}
      <motion.div
        className="absolute inset-0 bg-mesh-hero opacity-40"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1.2 }}
      />
      <motion.div
        className="absolute -left-32 top-1/4 h-96 w-96 rounded-full bg-gold-500/10 blur-2xl animate-blob-float"
        aria-hidden
      />
      <motion.div
        className="absolute -right-24 bottom-1/4 h-[28rem] w-[28rem] rounded-full bg-navy-600/50 blur-3xl animate-blob-float-delayed"
        aria-hidden
      />

      {/* Geometric grid overlay */}
      <motion.div
        className="hero-grid pointer-events-none absolute inset-0 opacity-[0.04]"
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.04 }}
        transition={{ delay: 0.5, duration: 1 }}
        aria-hidden
      />

      <div className="relative mx-auto max-w-7xl px-5 pb-20 sm:px-8 lg:px-12">
        <motion.div
          className="max-w-4xl"
          variants={stagger}
          initial="hidden"
          animate="visible"
        >
          <motion.div
            variants={fadeUp}
            className="mb-6 inline-flex items-center gap-2 rounded-full border border-gold-500/25 bg-gold-500/10 px-4 py-1.5 text-sm text-gold-300"
          >
            <Sparkles className="h-4 w-4" aria-hidden />
            <span>Admissions Open 2026–27</span>
          </motion.div>

          <motion.h1
            variants={fadeUp}
            className="font-display text-4xl font-bold leading-[1.1] tracking-tight text-cream sm:text-5xl md:text-6xl lg:text-7xl"
          >
            Where Ambition Meets{" "}
            <span className="text-gradient-gold">World-Class</span> Education
          </motion.h1>

          <motion.p
            variants={fadeUp}
            className="mt-6 max-w-2xl text-lg leading-relaxed text-cream/70 sm:text-xl"
          >
            JG University empowers the next generation of innovators, leaders,
            and changemakers through rigorous academics, industry partnerships,
            and a campus built for discovery.
          </motion.p>

          <motion.div
            variants={fadeUp}
            className="mt-10 flex flex-col gap-4 sm:flex-row sm:items-center"
          >
            <Link
              href="#apply"
              className="group inline-flex min-h-[52px] items-center justify-center gap-2 rounded-full bg-gold-500 px-8 py-3.5 text-base font-semibold text-navy-950 transition-all hover:bg-gold-400 hover:shadow-glow"
              aria-label="Apply now for admission"
            >
              Apply Now
              <ArrowRight
                className="h-4 w-4 transition-transform group-hover:translate-x-1"
                aria-hidden
              />
            </Link>
            <Link
              href="#programs"
              className="inline-flex min-h-[52px] items-center justify-center rounded-full border border-cream/20 px-8 py-3.5 text-base font-semibold text-cream transition-all hover:border-gold-500/50 hover:bg-white/5 hover:text-gold-300"
              aria-label="Explore academic programs"
            >
              Explore Programs
            </Link>
          </motion.div>

          <motion.div
            variants={fadeUp}
            className="mt-16 flex flex-wrap gap-8 border-t border-white/10 pt-10"
          >
            {[
              { value: "NAAC A+", label: "Accredited" },
              { value: "40+", label: "Industry Partners" },
              { value: "12", label: "Research Centers" },
            ].map((item) => (
              <motion.div key={item.label} variants={fadeUp}>
                <p className="font-display text-2xl font-semibold text-gold-400">
                  {item.value}
                </p>
                <p className="text-sm text-cream/50">{item.label}</p>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </div>

      {/* Bottom fade */}
      <motion.div
        className="pointer-events-none absolute inset-x-0 bottom-0 h-32 bg-gradient-to-t from-navy-950 to-transparent"
        aria-hidden
      />
    </section>
  );
}
