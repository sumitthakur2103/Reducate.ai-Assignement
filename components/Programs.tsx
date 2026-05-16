"use client";

import { motion } from "framer-motion";
import {
  Briefcase,
  Clock,
  Cpu,
  FlaskConical,
  Gavel,
  Palette,
  Scale,
  Stethoscope,
  type LucideIcon,
} from "lucide-react";
import SectionReveal from "./SectionReveal";

interface Program {
  icon: LucideIcon;
  name: string;
  description: string;
  duration: string;
}

const programs: Program[] = [
  {
    icon: Cpu,
    name: "B.Tech",
    description:
      "Computer Science, AI/ML, and core engineering with industry capstone projects.",
    duration: "4 Years",
  },
  {
    icon: Briefcase,
    name: "MBA",
    description:
      "Leadership, finance, and strategy with live consulting engagements.",
    duration: "2 Years",
  },
  {
    icon: Gavel,
    name: "LL.B / BA LLB",
    description:
      "Constitutional law, corporate practice, and moot court excellence.",
    duration: "3–5 Years",
  },
  {
    icon: Stethoscope,
    name: "B.Pharm",
    description: "Pharmaceutical sciences with hospital and R&D lab rotations.",
    duration: "4 Years",
  },
  {
    icon: Palette,
    name: "B.Des",
    description:
      "Product design, UX, and visual communication in studio-led studios.",
    duration: "4 Years",
  },
  {
    icon: FlaskConical,
    name: "B.Sc (Hons)",
    description:
      "Physics, Chemistry, and Biotechnology with research mentorship.",
    duration: "3 Years",
  },
  {
    icon: Scale,
    name: "B.Com (Hons)",
    description:
      "Accounting, analytics, and fintech for modern commerce careers.",
    duration: "3 Years",
  },
  {
    icon: Clock,
    name: "Executive PG",
    description:
      "Weekend programs for working professionals seeking career acceleration.",
    duration: "1 Year",
  },
];

const cardVariants = {
  hidden: { opacity: 0, y: 24 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.08, duration: 0.5, ease: [0.22, 1, 0.36, 1] },
  }),
};

export default function Programs() {
  return (
    <section id="programs" className="section-padding relative bg-navy-900/40">
      <div className="mx-auto max-w-7xl">
        <SectionReveal className="mb-14 text-center md:mb-20">
          <p className="mb-3 text-sm font-semibold uppercase tracking-[0.2em] text-gold-400">
            Programs
          </p>
          <h2 className="font-display text-3xl font-bold text-cream sm:text-4xl lg:text-5xl">
            Degrees That Open{" "}
            <span className="text-gradient-gold">Every Door</span>
          </h2>
          <p className="mx-auto mt-5 max-w-2xl text-cream/60">
            Choose from undergraduate, postgraduate, and professional programs
            designed with industry advisory boards.
          </p>
        </SectionReveal>

        <motion.div
          className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-60px" }}
        >
          {programs.map((program, index) => (
            <motion.article
              key={program.name}
              custom={index}
              variants={cardVariants}
              className="group relative overflow-hidden rounded-2xl border border-white/8 bg-navy-950/60 p-6 transition-all duration-300 hover:-translate-y-2 hover:border-gold-500/30 hover:shadow-card-hover"
            >
              <motion.div
                className="absolute -right-8 -top-8 h-24 w-24 rounded-full bg-gold-500/5 transition-all group-hover:bg-gold-500/15"
                aria-hidden
              />

              <span className="relative flex h-12 w-12 items-center justify-center rounded-xl bg-gold-500/10 ring-1 ring-gold-500/25 transition-all group-hover:bg-gold-500/20 group-hover:shadow-glow">
                <program.icon className="h-6 w-6 text-gold-400" aria-hidden />
              </span>

              <h3 className="relative mt-5 font-display text-xl font-semibold text-cream">
                {program.name}
              </h3>
              <p className="relative mt-2 text-sm leading-relaxed text-cream/55">
                {program.description}
              </p>
              <span className="relative mt-4 inline-block rounded-full bg-white/5 px-3 py-1 text-xs font-medium text-gold-300/90 ring-1 ring-white/10">
                {program.duration}
              </span>
            </motion.article>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
