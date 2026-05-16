"use client";

import { motion, useInView, useMotionValue, useSpring } from "framer-motion";
import { useEffect, useRef } from "react";

interface AnimatedCounterProps {
  value: number;
  suffix?: string;
  label: string;
}

/** Counts up when scrolled into view */
export default function AnimatedCounter({
  value,
  suffix = "",
  label,
}: AnimatedCounterProps) {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });
  const motionValue = useMotionValue(0);
  const spring = useSpring(motionValue, { stiffness: 50, damping: 20 });
  const displayRef = useRef<HTMLSpanElement>(null);

  useEffect(() => {
    if (isInView) motionValue.set(value);
  }, [isInView, motionValue, value]);

  useEffect(() => {
    return spring.on("change", (latest) => {
      if (displayRef.current) {
        displayRef.current.textContent = `${Math.round(latest)}${suffix}`;
      }
    });
  }, [spring, suffix]);

  return (
    <motion.div
      ref={ref}
      className="text-center"
      initial={{ opacity: 0, scale: 0.9 }}
      animate={isInView ? { opacity: 1, scale: 1 } : {}}
      transition={{ duration: 0.5 }}
    >
      <span
        ref={displayRef}
        className="font-display text-4xl font-bold text-gold-400 sm:text-5xl"
      >
        0{suffix}
      </span>
      <p className="mt-2 text-sm font-medium uppercase tracking-wider text-cream/60">
        {label}
      </p>
    </motion.div>
  );
}
