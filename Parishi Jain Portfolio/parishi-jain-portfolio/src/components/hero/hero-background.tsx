"use client";

import * as React from "react";
import { motion, useReducedMotion, useScroll, useTransform } from "framer-motion";

import { cn } from "@/lib/utils";

export function HeroBackground({ className }: { className?: string }) {
  const reduce = useReducedMotion();
  const { scrollY } = useScroll();
  const y = useTransform(scrollY, [0, 900], [0, -28]);

  if (reduce) {
    return (
      <div className={cn("pointer-events-none absolute inset-0 -z-10", className)}>
        <div className="absolute inset-0 bg-mesh animate-none" />
        <div className="absolute inset-0 bg-noise" />
      </div>
    );
  }

  return (
    <div className={cn("pointer-events-none absolute inset-0 -z-10", className)}>
      <motion.div
        aria-hidden="true"
        className="absolute inset-0 bg-mesh"
        style={{ y }}
        animate={{ scale: [1, 1.02, 1], rotate: [0, 0.6, 0] }}
        transition={{ duration: 28, ease: "easeInOut", repeat: Infinity }}
      />
      <div aria-hidden="true" className="absolute inset-0 bg-aurora" />
      <div aria-hidden="true" className="absolute inset-0 bg-noise" />
    </div>
  );
}

