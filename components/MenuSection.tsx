
"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { ChefHat } from "lucide-react";
import { restaurantMenuData } from "@/data";

const containerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.12,
    },
  },
};

const itemVariants = {
  hidden: {
    opacity: 0,
    y: 35,
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.7,
      ease: "easeOut" as const,
    },
  },
};

function MenuItem({
  item,
}: {
  item: (typeof restaurantMenuData.items)[number];
}) {
  return (
    <motion.div
      variants={itemVariants}
      whileHover={{ y: -5 }}
      className="group flex min-w-0 items-center gap-4 sm:gap-5"
    >
      {/* FOOD IMAGE */}
      <div className="relative h-[90px] w-[90px] shrink-0 overflow-hidden rounded-[20px] shadow-[0_5px_15px_rgba(80,35,15,0.12)] sm:h-[120px] sm:w-[145px] lg:h-[120px] lg:w-[155px]">
        <Image
          src={item.homeImage}
          alt={item.homeImageAlt ?? item.title}
          fill
          sizes="(max-width: 640px) 115px, 155px"
          className="object-cover transition-transform duration-700 group-hover:scale-110"
        />

        <div className="absolute inset-0 bg-[#721525]/0 transition-colors duration-500 group-hover:bg-[#721525]/10" />
      </div>

      {/* FOOD DETAILS */}
      <div className="min-w-0 flex-1">
        {/* NAME + PRICE */}
        <div className="flex min-w-0 items-baseline gap-1 lg:gap-2">
          <h3 className="shrink-0 font-serif text-[14px] font-bold leading-tight text-[#701522] transition-colors duration-300 group-hover:text-[#b58538] sm:text-xl lg:text-[23px]">
            {item.title}
          </h3>

          <div className="relative bottom-1 min-w-[10px] flex-1 border-b-2 border-dotted border-[#c18c42]" />

          <span className="shrink-0 font-serif text-md font-bold text-[#701522] sm:text-xl lg:text-[25px]">
            {item.price}
          </span>
        </div>

        {/* DESCRIPTION */}
        <p className="mt-2 text-[13px] leading-[1.55] text-[#363636] sm:text-sm lg:text-[16px] lg:leading-[1.55]">
          {item.text}
        </p>
      </div>
    </motion.div>
  );
}

export default function MenuSection() {
  const leftItems = restaurantMenuData.items.slice(0, 3);
  const rightItems = restaurantMenuData.items.slice(3, 6);

  return (
    <section
      id="menu"
      className="relative isolate overflow-hidden bg-[#fdf8f2] py-12 sm:py-16 lg:py-18 w-full px-6 sm:px-10 lg:px-16"
    >

      <motion.div
        initial={{ opacity: 0, x: -35, rotate: -15 }}
        whileInView={{ opacity: 1, x: 0, rotate: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 1 }}
        className="pointer-events-none absolute -left-3 top-4 z-0 h-[125px] w-[155px] sm:left-4 sm:top-5 sm:h-[155px] sm:w-[190px] lg:left-7 lg:top-5 lg:h-[175px] lg:w-[205px]"
      >
        <Image
          src={restaurantMenuData.decorationImages.leaves}
          alt=""
          fill
          sizes="205px"
          className="object-contain"
        />
      </motion.div>

      <motion.div
        initial={{ opacity: 0, x: 45, y: -20 }}
        whileInView={{ opacity: 1, x: 0, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 1 }}
        className="pointer-events-none absolute -right-8 -top-8 z-0 h-[155px] w-[240px] overflow-hidden rounded-bl-[70px] sm:h-[190px] sm:w-[300px] lg:h-[220px] lg:w-[360px]"
      >
        <Image
          src={restaurantMenuData.decorationImages.decoration}
          alt=""
          fill
          sizes="360px"
          className="object-cover"
        />
      </motion.div>

      {/* ================= SECTION HEADING ================= */}

      <div className="relative z-10 mx-auto mb-14 max-w-[1200px] text-center sm:mb-16">

        {/* CHEF ICON */}
        <motion.div
          initial={{ opacity: 0, scale: 0.5, y: -15 }}
          whileInView={{ opacity: 1, scale: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="mb-4 flex justify-center"
        >
          <ChefHat
            size={48}
            strokeWidth={1.7}
            className="text-[#c18c37]"
          />
        </motion.div>

        {/* SUBTITLE */}
        <motion.p
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.1 }}
          className="text-xs font-bold uppercase tracking-[6px] text-[#701522] sm:text-sm sm:tracking-[8px]"
        >
          {restaurantMenuData.eyebrow}
        </motion.p>

        {/* SMALL GOLD LINE */}
        <motion.div
          initial={{ width: 0 }}
          whileInView={{ width: 190 }}
          viewport={{ once: true }}
          transition={{ duration: 1, delay: 0.3 }}
          className="mx-auto mt-5 h-[2px] bg-[#c18c37]"
        />

        {/* MAIN TITLE */}
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.9, delay: 0.2 }}
          className="mt-5 font-serif font-bold leading-tight text-[#701522] text-3xl sm:text-4xl md:text-6xl lg:text-[68px]"
        >
          {restaurantMenuData.title}{" "}
          <span className="italic text-[#bd8b3f]">
            {restaurantMenuData.highlight}
          </span>
        </motion.h2>

        {/* DECORATIVE DIVIDER */}
        <div className="mx-auto mt-7 flex max-w-[410px] items-center justify-center">
          <span className="h-[1.5px] flex-1 bg-[#c18c37]" />
          <div className="mx-2 flex items-center gap-1">
            <span className="h-3 w-3 rotate-45 border-2 border-[#c18c37]" />
            <span className="h-4 w-4 rotate-45 border-2 border-[#c18c37]" />
            <span className="h-3 w-3 rotate-45 border-2 border-[#c18c37]" />
          </div>
          <span className="h-[1.5px] flex-1 bg-[#c18c37]" />
        </div>
      </div>

      {/* ================= MENU ITEMS ================= */}

      <motion.div
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.1 }}
        className="relative z-10 mx-auto grid max-w-[1600px] gap-8 lg:grid-cols-2 lg:gap-0"
      >

        <div className="flex flex-col gap-7 sm:gap-8 lg:pr-8 xl:pr-10">
          {leftItems.map((item) => (
            <MenuItem key={item.slug} item={item} />
          ))}
        </div>

        <div className="border-l-[1.5px] border-[#c18c37] flex flex-col gap-7 border-t border-[#c18c37]/40 pt-8 sm:gap-8 lg:border-t-0 lg:pl-8 lg:pt-0 xl:pl-10">
          {rightItems.map((item) => (
            <MenuItem key={item.slug} item={item} />
          ))}
        </div>

      </motion.div>


      <div className="pointer-events-none absolute -bottom-16 -left-[5%] -z-0 h-32 w-[65%] rounded-[50%] bg-[#f5e5d7] opacity-75 blur-[1px]" />

      <div className="pointer-events-none absolute -bottom-20 -right-[5%] -z-0 h-40 w-[65%] rounded-[50%] bg-[#f5e5d7] opacity-75 blur-[1px]" />

    </section>
  );
}
