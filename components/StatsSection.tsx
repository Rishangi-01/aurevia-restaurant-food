
"use client";

import Image from "next/image";
import { useEffect, useState } from "react";
import { motion, useInView, useReducedMotion } from "framer-motion";
import {
  ConciergeBell,
  Utensils,
  ChefHat,
  Trophy,
} from "lucide-react";
import { useRef } from "react";
import { restaurantStatsData } from "@/data";

const statIcons = {
  "concierge-bell": ConciergeBell,
  utensils: Utensils,
  "chef-hat": ChefHat,
  trophy: Trophy,
};

function AnimatedCounter({
  value,
  suffix,
  start,
}: {
  value: number;
  suffix: string;
  start: boolean;
}) {
  const [count, setCount] = useState(0);
  const reduceMotion = useReducedMotion();

  useEffect(() => {
    if (!start) return;

    if (reduceMotion) {
      setCount(value);
      return;
    }

    let frame = 0;
    const duration = 1800;
    let animationFrame = 0;
    let startTime: number | null = null;

    const animate = (timestamp: number) => {
      if (startTime === null) startTime = timestamp;

      const progress = Math.min(
        (timestamp - startTime) / duration,
        1
      );

      const eased = 1 - Math.pow(1 - progress, 4);

      setCount(Math.floor(eased * value));

      if (progress < 1) {
        animationFrame = requestAnimationFrame(animate);
      } else {
        setCount(value);
      }
    };

    animationFrame = requestAnimationFrame(animate);

    return () => cancelAnimationFrame(animationFrame);
  }, [start, value, reduceMotion]);

  return (
    <span>
      {count}
      {suffix}
    </span>
  );
}

export default function StatsSection() {
  const stats = restaurantStatsData.items;
  const sectionRef = useRef<HTMLDivElement>(null);

  const isInView = useInView(sectionRef, {
    once: true,
    amount: 0.3,
  });

  const reduceMotion = useReducedMotion();

  return (
    <section
      ref={sectionRef}
      className="relative isolate flex min-h-[420px] w-full items-center overflow-hidden bg-[#260609] py-16 lg:min-h-[480px] lg:py-20 px-6 sm:px-10 lg:px-16"
    >
      {/* ================= BACKGROUND IMAGE ================= */}

      <div className="absolute inset-0 -z-20">
        <Image
          src={restaurantStatsData.backgroundImage}
          alt={restaurantStatsData.backgroundAlt}
          fill
          sizes="100vw"
          className="object-cover object-center"
        />
      </div>

      {/* Background overlay */}
      <div className="absolute inset-0 -z-10 bg-[#1b0807]/55" />

      {/* ================= MAIN BURGUNDY PANEL ================= */}

      <motion.div
        initial={{
          opacity: 0,
          y: 50,
          scale: 0.97,
        }}
        whileInView={{
          opacity: 1,
          y: 0,
          scale: 1,
        }}
        viewport={{
          once: true,
          amount: 0.2,
        }}
        transition={{
          duration: reduceMotion ? 0 : 0.9,
          ease: "easeOut",
        }}
        className="relative mx-auto w-full max-w-[1600px] border border-[#d6ae70] bg-gradient-to-br from-[#65101c] via-[#4e0b15] to-[#650d1b] px-4 py-10 shadow-[0_15px_50px_rgba(0,0,0,0.35)] sm:px-8 sm:py-12 lg:px-12 lg:py-14"
      >

        {/* Outer decorative border */}
        <div className="pointer-events-none absolute inset-[7px] border border-[#d8b477]/90 sm:inset-[12px]" />

        {/* Decorative corner accents */}
        <div className="pointer-events-none absolute left-[7px] top-[7px] h-8 w-8 rounded-tl-[22px] border-l-2 border-t-2 border-[#e2c18d] sm:left-[12px] sm:top-[12px]" />

        <div className="pointer-events-none absolute right-[7px] top-[7px] h-8 w-8 rounded-tr-[22px] border-r-2 border-t-2 border-[#e2c18d] sm:right-[12px] sm:top-[12px]" />

        <div className="pointer-events-none absolute bottom-[7px] left-[7px] h-8 w-8 rounded-bl-[22px] border-b-2 border-l-2 border-[#e2c18d] sm:bottom-[12px] sm:left-[12px]" />

        <div className="pointer-events-none absolute bottom-[7px] right-[7px] h-8 w-8 rounded-br-[22px] border-b-2 border-r-2 border-[#e2c18d] sm:bottom-[12px] sm:right-[12px]" />

        {/* ================= STATISTICS GRID ================= */}

        <div className="relative z-10 grid grid-cols-2 lg:grid-cols-4">

          {stats.map((stat, index) => {
            const Icon = statIcons[stat.icon];
            const number = Number.parseInt(stat.value, 10);
            const suffix = stat.value.slice(String(number).length);

            return (
              <motion.div
                key={stat.icon}
                initial={{
                  opacity: 0,
                  y: 35,
                }}
                animate={
                  isInView
                    ? {
                        opacity: 1,
                        y: 0,
                      }
                    : {}
                }
                transition={{
                  duration: reduceMotion ? 0 : 0.7,
                  delay: reduceMotion ? 0 : index * 0.15,
                }}
                whileHover={
                  reduceMotion
                    ? undefined
                    : {
                        y: -7,
                      }
                }
                className={`group relative flex flex-col items-center justify-center px-2 py-7 text-center sm:px-5 sm:py-9 lg:py-0 ${
                  index < 2
                    ? "border-b border-[#d7b477]/30 lg:border-b-0"
                    : ""
                } ${
                  index % 2 === 0
                    ? "border-r border-[#d7b477]/30 lg:border-r-0"
                    : ""
                } ${
                  index !== 3
                    ? "lg:border-r lg:border-[#d7b477]/50"
                    : ""
                }`}
              >

                {/* ICON */}
                <motion.div
                  animate={
                    isInView && !reduceMotion
                      ? {
                          scale: [0.8, 1.12, 1],
                        }
                      : {}
                  }
                  transition={{
                    duration: 0.8,
                    delay: index * 0.15 + 0.2,
                  }}
                  className="mb-3 text-[#e8c58b] transition-colors duration-300 group-hover:text-[#fff0c8] sm:mb-5"
                >
                  <Icon
                    size={58}
                    strokeWidth={1.5}
                    className="h-10 w-10 sm:h-14 sm:w-14 lg:h-[68px] lg:w-[68px]"
                  />
                </motion.div>

                {/* NUMBER */}
                <h3 className="font-serif text-5xl font-medium leading-none tracking-wide text-white sm:text-6xl lg:text-[76px]">
                  <AnimatedCounter
                    value={number}
                    suffix={suffix}
                    start={isInView}
                  />
                </h3>

                {/* LABEL */}
                <p className="mt-4 text-[10px] font-bold tracking-[2px] text-[#f3d79f] sm:mt-5 sm:text-sm sm:tracking-[3px] lg:text-[18px]">
                  {stat.label}
                </p>

                {/* GOLD DECORATIVE DIVIDER */}
                <div className="mt-5 flex w-full max-w-[145px] items-center justify-center gap-1 sm:mt-7 sm:max-w-[180px]">
                  <span className="h-[1.5px] flex-1 bg-gradient-to-r from-transparent to-[#e8c58b]" />

                  <motion.span
                    animate={
                      isInView && !reduceMotion
                        ? { rotate: [45, 135, 45] }
                        : {}
                    }
                    transition={{
                      duration: 3,
                      repeat: Infinity,
                      ease: "easeInOut",
                    }}
                    className="h-3 w-3 shrink-0 rotate-45 border-2 border-[#e8c58b] sm:h-4 sm:w-4"
                  />

                  <span className="h-[1.5px] flex-1 bg-gradient-to-l from-transparent to-[#e8c58b]" />
                </div>

              </motion.div>
            );
          })}

        </div>
      </motion.div>

    </section>
  );
}
