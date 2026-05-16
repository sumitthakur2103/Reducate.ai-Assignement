"use client";

import { AnimatePresence, motion } from "framer-motion";
import { ChevronLeft, ChevronRight, Quote } from "lucide-react";
import Image from "next/image";
import { useCallback, useEffect, useState } from "react";
import SectionReveal from "./SectionReveal";

interface Testimonial {
  id: number;
  name: string;
  course: string;
  quote: string;
  avatar: string;
}

const testimonials: Testimonial[] = [
  {
    id: 1,
    name: "Priya Sharma",
    course: "B.Tech — Computer Science",
    quote:
      "The incubation lab and hackathon culture here turned my side project into a funded startup. JG gave me mentors who believed in me before I believed in myself.",
    avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=Priya",
  },
  {
    id: 2,
    name: "Arjun Mehta",
    course: "MBA — Finance",
    quote:
      "Live consulting projects with Fortune 500 partners prepared me for interviews better than any textbook. I received three offers before graduation.",
    avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=Arjun",
  },
  {
    id: 3,
    name: "Sneha Reddy",
    course: "BA LLB — Corporate Law",
    quote:
      "Moot courts, internships at top law firms, and faculty who are practicing advocates — this program is as real-world as it gets.",
    avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=Sneha",
  },
  {
    id: 4,
    name: "Rahul Verma",
    course: "B.Des — Product Design",
    quote:
      "Studio critiques, design sprints, and industry juries pushed my portfolio to a level I never imagined. I'm now at a leading product company.",
    avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=Rahul",
  },
  {
    id: 5,
    name: "Ananya Iyer",
    course: "B.Pharm",
    quote:
      "Hospital rotations and research mentorship helped me publish my first paper. The placement cell connected me with top pharma recruiters.",
    avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=Ananya",
  },
];

export default function Testimonials() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [direction, setDirection] = useState(0);

  const goTo = useCallback(
    (index: number) => {
      setDirection(index > activeIndex ? 1 : -1);
      setActiveIndex(index);
    },
    [activeIndex],
  );

  const next = useCallback(() => {
    setDirection(1);
    setActiveIndex((prev) => (prev + 1) % testimonials.length);
  }, []);

  const prev = useCallback(() => {
    setDirection(-1);
    setActiveIndex(
      (prev) => (prev - 1 + testimonials.length) % testimonials.length,
    );
  }, []);

  // Auto-advance carousel
  useEffect(() => {
    const timer = setInterval(next, 6000);
    return () => clearInterval(timer);
  }, [next]);

  const active = testimonials[activeIndex];

  const slideVariants = {
    enter: (dir: number) => ({
      x: dir > 0 ? 80 : -80,
      opacity: 0,
    }),
    center: {
      x: 0,
      opacity: 1,
    },
    exit: (dir: number) => ({
      x: dir > 0 ? -80 : 80,
      opacity: 0,
    }),
  };

  return (
    <section
      id="testimonials"
      className="section-padding relative overflow-hidden"
    >
      <motion.div
        className="pointer-events-none absolute left-1/2 top-0 h-px w-2/3 -translate-x-1/2 bg-gradient-to-r from-transparent via-gold-500/30 to-transparent"
        aria-hidden
      />

      <motion.div
        className="mx-auto max-w-7xl"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-80px" }}
      >
        <SectionReveal className="mb-14 text-center md:mb-16">
          <p className="mb-3 text-sm font-semibold uppercase tracking-[0.2em] text-gold-400">
            Student Stories
          </p>
          <h2 className="font-display text-3xl font-bold text-cream sm:text-4xl lg:text-5xl">
            Voices From Our <span className="text-gradient-gold">Campus</span>
          </h2>
        </SectionReveal>

        {/* Featured carousel */}
        <div className="relative mx-auto max-w-3xl">
          <div className="relative min-h-[320px] overflow-hidden rounded-2xl border border-white/10 bg-navy-900/60 p-8 sm:p-12">
            <Quote
              className="absolute right-8 top-8 h-12 w-12 text-gold-500/10"
              aria-hidden
            />

            <AnimatePresence mode="wait" custom={direction}>
              <motion.div
                key={active.id}
                custom={direction}
                variants={slideVariants}
                initial="enter"
                animate="center"
                exit="exit"
                transition={{ duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
                className="flex flex-col items-center text-center"
              >
                <div className="relative h-20 w-20 overflow-hidden rounded-full ring-2 ring-gold-500/40 ring-offset-2 ring-offset-navy-900">
                  <Image
                    src={active.avatar}
                    alt={`Portrait of ${active.name}`}
                    fill
                    className="object-cover bg-navy-800"
                    unoptimized
                  />
                </div>
                <blockquote className="mt-8 font-display text-xl leading-relaxed text-cream/90 sm:text-2xl">
                  &ldquo;{active.quote}&rdquo;
                </blockquote>
                <footer className="mt-8">
                  <cite className="not-italic">
                    <p className="font-semibold text-cream">{active.name}</p>
                    <p className="mt-1 text-sm text-gold-400/90">
                      {active.course}
                    </p>
                  </cite>
                </footer>
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Controls */}
          <motion.div
            className="mt-8 flex items-center justify-center gap-4"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
          >
            <button
              type="button"
              onClick={prev}
              className="flex h-11 w-11 items-center justify-center rounded-full border border-white/10 text-cream transition-all hover:border-gold-500/40 hover:bg-gold-500/10 hover:text-gold-400"
              aria-label="Previous testimonial"
            >
              <ChevronLeft className="h-5 w-5" />
            </button>

            <motion.div
              className="flex gap-2"
              role="tablist"
              aria-label="Testimonial slides"
            >
              {testimonials.map((t, i) => (
                <button
                  key={t.id}
                  type="button"
                  role="tab"
                  aria-selected={i === activeIndex}
                  aria-label={`Show testimonial from ${t.name}`}
                  onClick={() => goTo(i)}
                  className={`h-2 rounded-full transition-all ${
                    i === activeIndex
                      ? "w-8 bg-gold-500"
                      : "w-2 bg-white/20 hover:bg-white/40"
                  }`}
                />
              ))}
            </motion.div>

            <button
              type="button"
              onClick={next}
              className="flex h-11 w-11 items-center justify-center rounded-full border border-white/10 text-cream transition-all hover:border-gold-500/40 hover:bg-gold-500/10 hover:text-gold-400"
              aria-label="Next testimonial"
            >
              <ChevronRight className="h-5 w-5" />
            </button>
          </motion.div>
        </div>

        {/* Card grid preview (desktop) */}
        <motion.div
          className="mt-16 hidden gap-4 lg:grid lg:grid-cols-5"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={{
            hidden: {},
            visible: { transition: { staggerChildren: 0.08 } },
          }}
        >
          {testimonials.map((t, i) => (
            <motion.button
              key={t.id}
              type="button"
              variants={{
                hidden: { opacity: 0, y: 16 },
                visible: { opacity: 1, y: 0 },
              }}
              onClick={() => goTo(i)}
              className={`rounded-xl border p-4 text-left transition-all hover:border-gold-500/30 ${
                i === activeIndex
                  ? "border-gold-500/40 bg-gold-500/10"
                  : "border-white/8 bg-navy-900/40"
              }`}
              aria-label={`View testimonial from ${t.name}`}
            >
              <motion.div
                className="relative mx-auto h-12 w-12 overflow-hidden rounded-full"
                whileHover={{ scale: 1.05 }}
              >
                <Image
                  src={t.avatar}
                  alt=""
                  fill
                  className="object-cover"
                  unoptimized
                />
              </motion.div>
              <p className="mt-3 truncate text-sm font-medium text-cream">
                {t.name}
              </p>
              <p className="truncate text-xs text-cream/45">{t.course}</p>
            </motion.button>
          ))}
        </motion.div>
      </motion.div>
    </section>
  );
}
