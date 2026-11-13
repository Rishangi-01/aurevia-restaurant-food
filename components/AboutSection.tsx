
"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import {
  Leaf,
  ChefHat,
  Utensils,
} from "lucide-react";

const features = [
  {
    icon: Leaf,
    title: "Fresh",
    subtitle: "Ingredients",
  },
  {
    icon: ChefHat,
    title: "Expert",
    subtitle: "Chefs",
  },
  {
    icon: Utensils,
    title: "Comfortable",
    subtitle: "Dining",
  },
];

const fadeUp = {
  hidden: { opacity: 0, y: 45 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.8, ease: "easeOut" as const },
  },
};

export default function AboutSection() {
  return (
    <section
      id="about"
      className="relative overflow-hidden bg-[#fcf9f5] px-5 py-20 sm:px-8 lg:px-12 lg:py-28 w-full"
    >
      {/* Background decorative elements */}
      <div className="pointer-events-none absolute -left-24 top-20 h-72 w-72 rounded-full bg-[#c49348]/[0.06] blur-3xl" />

      <div className="pointer-events-none absolute -right-24 bottom-10 h-80 w-80 rounded-full bg-[#791625]/[0.04] blur-3xl" />

      <div className="relative mx-auto grid max-w-[1450px] items-center gap-16 lg:grid-cols-[0.9fr_1.1fr] lg:gap-12 xl:gap-20">

        {/* ================= LEFT CONTENT ================= */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={{
            hidden: {},
            visible: {
              transition: { staggerChildren: 0.18 },
            },
          }}
          className="relative z-10"
        >
          {/* Section label */}
          <motion.div variants={fadeUp} className="mb-9">
            <p className="text-center text-sm font-bold uppercase tracking-[8px] text-[#651521] sm:text-left">
              About Us
            </p>

            {/* Gold decorative divider */}
            <div className="mt-6 flex items-center justify-center gap-1 sm:justify-start">
              <span className="h-[1.5px] w-14 bg-[#c08b3e]" />
              <span className="h-3 w-3 rotate-45 border-2 border-[#c08b3e]" />
              <span className="h-4 w-4 rotate-45 border-2 border-[#c08b3e]" />
              <span className="h-3 w-3 rotate-45 border-2 border-[#c08b3e]" />
              <span className="h-[1.5px] w-14 bg-[#c08b3e]" />
            </div>
          </motion.div>

          {/* Heading */}
          <motion.h2
            variants={fadeUp}
            className="text-center font-serif text-5xl font-bold leading-[1.12] tracking-tight text-[#651521] sm:text-6xl sm:text-left lg:text-[62px] xl:text-[76px]"
          >
            Every Flavor
            <span className="mt-1 block font-medium italic text-[#b3833e]">
              Tells a Story
            </span>
          </motion.h2>

          {/* Description */}
          <motion.p
            variants={fadeUp}
            className="mx-auto mt-8 max-w-[550px] text-center text-base leading-8 text-[#393939] sm:mx-0 sm:text-left sm:text-lg lg:text-[19px] lg:leading-[1.8]"
          >
            At Aurevia, we believe dining is more than just a meal — it’s an
            experience. We bring together the finest ingredients, expert
            recipes, and a warm ambience to create unforgettable moments
            for every guest.
          </motion.p>

          
          <motion.div
            variants={fadeUp}
            className="mt-12 grid grid-cols-3 divide-x divide-[#d4a04e]/80"
          >
            {features.map((feature, index) => {
              const Icon = feature.icon;

              return (
                <motion.div
                  key={feature.title}
                  whileHover={{ y: -8 }}
                  transition={{ duration: 0.3 }}
                  className="flex cursor-default flex-col items-center px-2 text-center sm:px-5"
                >
                  <Icon
                    size={46}
                    strokeWidth={1.5}
                    className="mb-4 text-[#701a27] transition-transform duration-300 hover:scale-110 sm:h-12 sm:w-12 lg:h-14 lg:w-14"
                  />

                  <h3 className="font-serif text-base font-bold leading-tight text-[#4d1720] sm:text-xl lg:text-2xl">
                    {feature.title}
                    <span className="block">{feature.subtitle}</span>
                  </h3>
                </motion.div>
              );
            })}
          </motion.div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 70 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 1, ease: "easeOut" }}
          className="relative mx-auto w-full max-w-[700px] pb-4 pt-4 lg:pb-0 lg:pt-0"
        >

          <motion.div
            whileHover={{ scale: 1 }}
            transition={{ duration: 0.5 }}
            className="relative ml-auto mr-3 h-[350px] w-[100%] overflow-hidden sm:mr-5 sm:h-[460px] lg:h-[730px]"
          >
            <Image
              src="/images/about-restaurant.png"
              alt="Elegant Aurevia restaurant interior"
              fill
              priority
              sizes="(max-width: 768px) 90vw, 50vw"
              className="object-cover transition-transform duration-700 hover:scale-110"
            />
          </motion.div>

        </motion.div>
      </div>
    </section>
  );
}
