
"use client";

import { motion, useReducedMotion } from "framer-motion";

export default function DiningExperience() {
  const reduceMotion = useReducedMotion();

  return (
    <section
      id="dining-experience"
      className="relative isolate flex min-h-[380px] w-full items-center overflow-hidden bg-[#fcf5ed] bg-cover bg-center bg-no-repeat sm:min-h-[430px] lg:min-h-[480px] xl:min-h-[550px] lg:bg-size-[100%_100%]"
      style={{
        backgroundImage:
          "url('/images/dining-experience-bg.png')",
      }}
    >
      {/* CONTENT AREA */}
      <div className="relative z-10 ml-auto flex w-full items-center justify-center px-5 py-16 sm:px-8 lg:w-[66%] lg:justify-center lg:px-8 lg:py-20 xl:w-[65%]">

        <div className="mx-auto w-full max-w-[850px] text-center">

          {/* CHEF DECORATIVE HEADING */}
          <motion.div
            initial={reduceMotion ? false : { opacity: 0, y: -25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="mb-6 flex items-center justify-center gap-5 sm:mb-8 sm:gap-7"
          >
          </motion.div>

          {/* MAIN HEADING */}
          <motion.h2
            initial={
              reduceMotion
                ? false
                : { opacity: 0, y: 35 }
            }
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{
              duration: 0.9,
              delay: 0.15,
              ease: "easeOut",
            }}
            className="font-serif text-3xl font-bold leading-[1.2] tracking-tight text-[#3c1013] sm:text-4xl md:text-5xl lg:text-[49px] xl:text-[56px]"
          >
            Experience Exceptional{" "}
            <span className="italic text-[#781b2d]">
              Dining
            </span>
          </motion.h2>

          {/* GOLD DECORATIVE DIVIDER */}
          <motion.div
            initial={reduceMotion ? false : { opacity: 0, scaleX: 0.3 }}
            whileInView={{ opacity: 1, scaleX: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="mx-auto my-6 flex max-w-[340px] items-center justify-center gap-2 sm:my-3 sm:max-w-[400px]"
          >
            <span className="h-[2px] flex-1 bg-gradient-to-r from-transparent to-[#bd842e]" />

            <span className="h-4 w-4 rotate-45 border-[3px] border-[#bd842e]" />

            <span className="h-[2px] flex-1 bg-gradient-to-l from-transparent to-[#bd842e]" />
          </motion.div>

          {/* DESCRIPTION */}
          <motion.p
            initial={
              reduceMotion
                ? false
                : { opacity: 0, y: 25 }
            }
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{
              duration: 0.9,
              delay: 0.4,
            }}
            className="mx-auto max-w-[650px] text-base leading-[1.7] text-[#352525] sm:text-lg md:text-xl lg:text-[22px]"
          >
            Savor delicious food, a warm ambiance, and
            hospitality that makes every visit special.
          </motion.p>

        </div>
      </div>

      {/* SUBTLE CONTENT FADE FOR MOBILE */}
      <div className="pointer-events-none absolute inset-0 -z-0 bg-gradient-to-r from-transparent via-[#fcf5ed]/10 to-[#fcf5ed]/20 lg:hidden" />

    </section>
  );
}
