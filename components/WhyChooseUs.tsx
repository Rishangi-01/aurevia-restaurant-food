
"use client";

import Image from "next/image";
import { motion, useReducedMotion } from "framer-motion";
import {
  ConciergeBell,
  Armchair,
  ChefHat,
  PartyPopper,
} from "lucide-react";

const features = [
  {
    id: 1,
    title: "Hygienic Food",
    description:
      "Fresh, safe and hygienically prepared meals for your health.",
    icon: ConciergeBell,
  },
  {
    id: 2,
    title: "Fresh Environment",
    description:
      "A clean, comfortable and welcoming dining atmosphere.",
    icon: Armchair,
  },
  {
    id: 3,
    title: "Skilled Chefs",
    description:
      "Experienced chefs who bring taste and creativity to every dish.",
    icon: ChefHat,
  },
  {
    id: 4,
    title: "Event & Party",
    description:
      "Perfect place for birthdays, family gatherings and special celebrations.",
    icon: PartyPopper,
  },
];

export default function WhyChooseUs() {
  const reduceMotion = useReducedMotion();

  return (
    <section
      id="why-choose-us"
      className="relative isolate overflow-hidden bg-[#fcf8f3] px-5 pb-36 pt-20 sm:px-8 sm:pb-40 sm:pt-24 lg:px-12 lg:pb-48 lg:pt-28 w-full"
    >

      <motion.div
        initial={{ opacity: 0, x: -40, rotate: -15 }}
        whileInView={{ opacity: 1, x: 0, rotate: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 1 }}
        className="pointer-events-none absolute left-0 top-0 z-0 h-[125px] w-[145px] sm:h-[165px] sm:w-[185px] lg:left-2 lg:h-[190px] lg:w-[205px]"
      >
        <Image
          src="/images/strength-leaves.png"
          alt=""
          fill
          sizes="205px"
          className="object-contain object-left-top"
        />
      </motion.div>


      <motion.div
        initial={{ opacity: 0, x: 40, rotate: 12 }}
        whileInView={{ opacity: 1, x: 0, rotate: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 1 }}
        className="pointer-events-none absolute right-0 top-0 z-0 h-[125px] w-[165px] sm:h-[165px] sm:w-[210px] lg:right-2 lg:h-[195px] lg:w-[245px]"
      >
        <Image
          src="/images/strength-tomatoes.png"
          alt=""
          fill
          sizes="245px"
          className="object-contain object-right-top"
        />
      </motion.div>


      <div className="relative z-10 mx-auto mb-16 max-w-[1100px] text-center sm:mb-20">


        <motion.div
          initial={{ opacity: 0, y: -20, scale: 0.7 }}
          whileInView={{ opacity: 1, y: 0, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="mb-4 flex justify-center"
        >
          <ChefHat
            size={55}
            strokeWidth={1.7}
            className="text-[#bd811d]"
          />
        </motion.div>


        <motion.div
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.1 }}
          className="flex items-center justify-center gap-5"
        >
          <span className="hidden h-[1.5px] w-16 bg-[#c18a36] sm:block" />

          <p className="text-xs font-bold uppercase tracking-[5px] text-[#701522] sm:text-base sm:tracking-[7px]">
            Why Choose Us
          </p>

          <span className="hidden h-[1.5px] w-16 bg-[#c18a36] sm:block" />
        </motion.div>


        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="mt-6 font-serif text-5xl font-bold leading-tight text-[#701522] sm:text-6xl md:text-7xl lg:text-[82px]"
        >
          Our{" "}
          <span className="italic text-[#bd842e]">
            Strength
          </span>
        </motion.h2>


        <motion.div
          initial={{ opacity: 0, scaleX: 0.3 }}
          whileInView={{ opacity: 1, scaleX: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.9, delay: 0.3 }}
          className="mx-auto mt-6 flex max-w-[430px] items-center justify-center gap-1"
        >
          <span className="h-[1.5px] flex-1 bg-[#bd842e]" />

          <span className="h-3 w-3 rotate-45 border-2 border-[#bd842e]" />

          <span className="h-5 w-5 rotate-45 border-2 border-[#bd842e]" />

          <span className="h-3 w-3 rotate-45 border-2 border-[#bd842e]" />

          <span className="h-[1.5px] flex-1 bg-[#bd842e]" />
        </motion.div>
      </div>


      <div className="relative z-10 mx-auto grid max-w-[1400px] grid-cols-1 gap-x-5 gap-y-16 sm:grid-cols-2 sm:gap-x-6 lg:grid-cols-4 lg:gap-x-5 lg:gap-y-10">

        {features.map((feature, index) => {
          const Icon = feature.icon;

          return (
            <motion.div
              key={feature.id}
              initial={{
                opacity: 0,
                y: 55,
              }}
              whileInView={{
                opacity: 1,
                y: 0,
              }}
              viewport={{
                once: true,
                amount: 0.2,
              }}
              transition={{
                duration: reduceMotion ? 0 : 0.75,
                delay: reduceMotion ? 0 : index * 0.13,
                ease: "easeOut",
              }}
              whileHover={
                reduceMotion
                  ? undefined
                  : {
                      y: -10,
                    }
              }
              className="group relative flex min-h-[270px] flex-col items-center rounded-[25px] border border-[#efd9c5] bg-white/70 px-5 pb-8 pt-24 text-center shadow-[0_8px_22px_rgba(112,21,34,0.04)] transition-all duration-500 hover:border-[#c18a36]/70 hover:bg-white hover:shadow-[0_18px_40px_rgba(112,21,34,0.12)] sm:min-h-[285px] lg:min-h-[295px] lg:px-4 lg:pt-24"
            >


              <motion.div
                whileHover={
                  reduceMotion
                    ? undefined
                    : {
                        scale: 1.09,
                        rotate: 5,
                      }
                }
                transition={{ duration: 0.35 }}
                className="absolute -top-10 flex h-[110px] w-[110px] items-center justify-center rounded-full border-[3px] border-[#d9a33f] bg-gradient-to-br from-[#a51d2d] via-[#831323] to-[#580b17] shadow-[0_7px_20px_rgba(90,10,25,0.2)] sm:h-[120px] sm:w-[120px]"
              >
                <div className="absolute inset-[5px] rounded-full border border-[#e6c47e]/50" />

                <Icon
                  size={55}
                  strokeWidth={1.45}
                  className="relative z-10 text-[#fff7e8] sm:h-[60px] sm:w-[60px]"
                />
              </motion.div>

              <h3 className="font-serif text-[23px] font-bold leading-tight text-[#701522] transition-colors duration-300 group-hover:text-[#b17a26] sm:text-[25px] lg:text-[26px]">
                {feature.title}
              </h3>

              <motion.div
                initial={{ width: 35 }}
                whileInView={{ width: 62 }}
                viewport={{ once: true }}
                transition={{
                  duration: 0.7,
                  delay: 0.35 + index * 0.12,
                }}
                className="mt-5 h-[2.5px] rounded-full bg-[#c18a36]"
              />

              <p className="mx-auto mt-4 max-w-[260px] text-[15px] leading-[1.75] text-[#292929] sm:text-base">
                {feature.description}
              </p>

              <span className="absolute bottom-0 left-1/2 h-[3px] w-0 -translate-x-1/2 rounded-full bg-[#b98330] transition-all duration-500 group-hover:w-1/2" />

            </motion.div>
          );
        })}

      </div>

      <div className="pointer-events-none absolute bottom-0 left-0 -z-10 h-[190px] w-full sm:h-[230px] lg:h-[280px]">

        <Image
          src="/images/strength-bg.png"
          alt=""
          fill
          sizes="100vw"
          className="object-cover object-center"
        />

        <div className="absolute inset-0 bg-gradient-to-b from-[#fcf8f3] via-[#fcf8f3]/35 to-transparent" />

        <div className="absolute inset-0 bg-gradient-to-t from-[#2d130c]/25 to-transparent" />
      </div>

      <div className="pointer-events-none absolute -bottom-12 left-[-5%] -z-0 h-24 w-[110%] rounded-[50%] bg-[#f9eadb]/60 blur-sm" />

    </section>
  );
}
