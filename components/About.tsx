"use client";

import { motion } from "framer-motion";
import { Award, Globe2, Users } from "lucide-react";
import AnimatedCounter from "./AnimatedCounter";
import SectionReveal from "./SectionReveal";

const highlights = [
  {
    icon: Users,
    title: "Student-Centered",
    text: "Personalized mentorship and small cohort learning.",
  },
  {
    icon: Globe2,
    title: "Global Outlook",
    text: "Exchange programs with 20+ partner universities worldwide.",
  },
  {
    icon: Award,
    title: "Excellence Driven",
    text: "Faculty from IITs, IIMs, and leading global institutions.",
  },
];

export default function About() {
  return (
    <section id="about" className="section-padding relative">
      <motion.div
        className="pointer-events-none absolute right-0 top-1/2 h-64 w-64 -translate-y-1/2 rounded-full bg-gold-500/5 blur-3xl"
        aria-hidden
      />

      <motion.div
        className="mx-auto max-w-7xl"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-80px" }}
        variants={{
          hidden: {},
          visible: { transition: { staggerChildren: 0.1 } },
        }}
      >
        <SectionReveal className="mb-14 text-center md:mb-20">
          <p className="mb-3 text-sm font-semibold uppercase tracking-[0.2em] text-gold-400">
            About Us
          </p>
          <h2 className="font-display text-3xl font-bold text-cream sm:text-4xl lg:text-5xl">
            Building Leaders for a{" "}
            <span className="text-gradient-gold">Changing World</span>
          </h2>
        </SectionReveal>

        <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
          {/* Text column */}
          <SectionReveal>
            <p className="text-lg leading-relaxed text-cream/70">
              Founded with a vision to democratize quality higher education, JG
              University blends rigorous academics with real-world experience.
              Our mission is to nurture curious minds who will shape industries,
              communities, and the future of India.
            </p>
            <p className="mt-5 text-lg leading-relaxed text-cream/60">
              From state-of-the-art labs to incubation centers and placement
              cells, every resource on campus is designed to help you grow —
              academically, professionally, and personally.
            </p>

            <ul className="mt-10 space-y-5">
              {highlights.map((item) => (
                <li key={item.title} className="flex gap-4">
                  <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-lg bg-gold-500/10 ring-1 ring-gold-500/20">
                    <item.icon className="h-5 w-5 text-gold-400" aria-hidden />
                  </span>
                  <motion.div
                    initial={{ opacity: 0, x: -12 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4 }}
                  >
                    <h3 className="font-semibold text-cream">{item.title}</h3>
                    <p className="mt-1 text-sm text-cream/55">{item.text}</p>
                  </motion.div>
                </li>
              ))}
            </ul>
          </SectionReveal>

          {/* Visual / stats column */}
          <SectionReveal delay={0.15}>
            <div className="relative overflow-hidden rounded-2xl border border-white/10 bg-navy-900/80 p-8 sm:p-10">
              <div
                className="about-glow absolute inset-0 opacity-30"
                aria-hidden
              />

              <div className="relative mb-10 flex items-center justify-center">
                <div className="relative h-48 w-48 sm:h-56 sm:w-56">
                  <div className="absolute inset-0 rounded-full border border-gold-500/20" />
                  <motion.div
                    className="absolute inset-4 rounded-full border border-dashed border-gold-500/30"
                    animate={{ rotate: 360 }}
                    transition={{
                      duration: 30,
                      repeat: Infinity,
                      ease: "linear",
                    }}
                    aria-hidden
                  />
                  <motion.div
                    className="absolute inset-0 flex items-center justify-center"
                    initial={{ scale: 0.8, opacity: 0 }}
                    whileInView={{ scale: 1, opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                  >
                    <span className="font-display text-5xl font-bold text-gold-400">
                      JG
                    </span>
                  </motion.div>
                </div>
              </div>

              <motion.div
                className="relative grid grid-cols-1 gap-8 sm:grid-cols-3"
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={{
                  hidden: {},
                  visible: { transition: { staggerChildren: 0.15 } },
                }}
              >
                <AnimatedCounter value={5000} suffix="+" label="Students" />
                <AnimatedCounter value={50} suffix="+" label="Courses" />
                <AnimatedCounter
                  value={100}
                  suffix="%"
                  label="Placement Support"
                />
              </motion.div>
            </div>
          </SectionReveal>
        </div>
      </motion.div>
    </section>
  );
}
