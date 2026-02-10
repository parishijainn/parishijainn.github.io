"use client";

import * as React from "react";
import { motion, useReducedMotion, useScroll, useTransform } from "framer-motion";

import { cn } from "@/lib/utils";

export function HeroBackground({ className }: { className?: string }) {
  const reduce = useReducedMotion();
  const { scrollY } = useScroll();
  const y = useTransform(scrollY, [0, 900], [0, -28]);

  const Blob = reduce ? "div" : motion.div;

  if (reduce) {
    return (
      <div className={cn("pointer-events-none absolute inset-0 -z-10", className)}>
        <div className="absolute inset-0 bg-mesh animate-none" />
        <div className="absolute inset-0 bg-noise" />

        {/* Static, soft shapes (no motion) */}
        <div className="absolute -top-20 left-[-120px] h-[360px] w-[360px] rounded-full bg-accentSoft2 blur-3xl opacity-30" />
        <div className="absolute top-10 right-[-160px] h-[420px] w-[420px] rounded-full bg-accentSoft blur-3xl opacity-30" />
        <div className="absolute bottom-[-180px] left-[35%] h-[460px] w-[460px] rounded-full bg-accentSoft2 blur-3xl opacity-25" />
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

      {/* Dedicated motion layer: slow drifting blobs (visible motion within seconds) */}
      <Blob
        aria-hidden="true"
        className="absolute -top-24 left-[-140px] h-[380px] w-[380px] rounded-full bg-accentSoft2 blur-3xl opacity-35"
        {...(!reduce
          ? {
              animate: { x: [0, 40, 0], y: [0, 18, 0], scale: [1, 1.06, 1] },
              transition: { duration: 22, ease: "easeInOut", repeat: Infinity },
            }
          : {})}
      />
      <Blob
        aria-hidden="true"
        className="absolute top-10 right-[-180px] h-[440px] w-[440px] rounded-full bg-accentSoft blur-3xl opacity-30"
        {...(!reduce
          ? {
              animate: { x: [0, -44, 0], y: [0, 22, 0], scale: [1, 1.05, 1] },
              transition: { duration: 26, ease: "easeInOut", repeat: Infinity },
            }
          : {})}
      />
      <Blob
        aria-hidden="true"
        className="absolute bottom-[-200px] left-[28%] h-[520px] w-[520px] rounded-full bg-accentSoft2 blur-3xl opacity-25"
        {...(!reduce
          ? {
              animate: { x: [0, 28, 0], y: [0, -22, 0], scale: [1, 1.07, 1] },
              transition: { duration: 30, ease: "easeInOut", repeat: Infinity },
            }
          : {})}
      />
      <Blob
        aria-hidden="true"
        className="absolute bottom-10 right-[18%] h-[300px] w-[300px] rounded-full bg-accentSoft blur-3xl opacity-22"
        {...(!reduce
          ? {
              animate: { x: [0, -18, 0], y: [0, -16, 0], scale: [1, 1.08, 1] },
              transition: { duration: 20, ease: "easeInOut", repeat: Infinity },
            }
          : {})}
      />

      {/* Subtle overlay layers */}
      <div aria-hidden="true" className="absolute inset-0 bg-aurora" />
      <div aria-hidden="true" className="absolute inset-0 bg-noise" />
    </div>
  );
}

