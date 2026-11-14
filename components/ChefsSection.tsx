
"use client";

import Image from "next/image";
import { motion, useReducedMotion } from "framer-motion";
import { ChefHat } from "lucide-react";
import { restaurantTeamData, restaurantWhyChooseUsData } from "@/data";

export default function ChefsSection() {
  const reduceMotion = useReducedMotion();
  const titleWords = restaurantTeamData.title.split(" ");
  const titleHighlight = titleWords.pop();
  const titlePrefix = titleWords.join(" ");

  return (
    <section
      id="chefs"
      className="relative isolate overflow-hidden bg-[#fcf8f3] pb-20 pt-16 sm:pb-24 sm:pt-20 lg:pb-28 lg:pt-24 w-full px-6 sm:px-10 lg:px-16"
    >



      <motion.div
        initial={
          reduceMotion
            ? false
            : { opacity: 0, x: -35, rotate: -12 }
        }
        whileInView={{
          opacity: 1,
          x: 0,
          rotate: 0,
        }}
        viewport={{ once: true }}
        transition={{ duration: 1 }}
        className="pointer-events-none absolute left-0 top-0 z-0 h-[115px] w-[130px] sm:h-[155px] sm:w-[175px] lg:h-[195px] lg:w-[210px]"
      >
        <Image
          src={restaurantWhyChooseUsData.leavesImage}
          alt=""
          fill
          sizes="210px"
          className="object-contain object-left-top"
        />
      </motion.div>



      <motion.div
        initial={
          reduceMotion
            ? false
            : { opacity: 0, x: 35, rotate: 12 }
        }
        whileInView={{
          opacity: 1,
          x: 0,
          rotate: 0,
        }}
        viewport={{ once: true }}
        transition={{ duration: 1 }}
        className="pointer-events-none absolute right-0 top-0 z-0 h-[115px] w-[135px] sm:h-[155px] sm:w-[185px] lg:h-[190px] lg:w-[220px]"
      >
        <Image
          src={restaurantWhyChooseUsData.tomatoesImage}
          alt=""
          fill
          sizes="220px"
          className="object-contain object-right-top"
        />
      </motion.div>



      <div className="relative z-10 mx-auto mb-12 max-w-[1000px] text-center sm:mb-14 lg:mb-16">


        <motion.div
          initial={{ opacity: 0, y: -20, scale: 0.7 }}
          whileInView={{ opacity: 1, y: 0, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="mb-3 flex justify-center"
        >
          <ChefHat
            size={65}
            strokeWidth={1.8}
            className="text-[#bd842e] sm:h-[72px] sm:w-[72px]"
          />
        </motion.div>


        <motion.div
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.1 }}
          className="flex items-center justify-center gap-4"
        >
          <span className="h-[1.5px] w-12 bg-[#bd842e] sm:w-24" />

          <p className="text-xs font-bold uppercase tracking-[5px] text-[#701522] sm:text-base sm:tracking-[7px]">
            {restaurantTeamData.eyebrow}
          </p>

          <span className="h-[1.5px] w-12 bg-[#bd842e] sm:w-24" />
        </motion.div>


        <motion.h2
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="mt-4 font-serif text-5xl font-bold leading-tight text-[#701522] sm:text-6xl md:text-7xl lg:text-[76px]"
        >
          {titlePrefix}{" "}
          <span className="italic text-[#bd842e]">
            {titleHighlight}
          </span>
        </motion.h2>


        <motion.div
          initial={{ opacity: 0, scaleX: 0.3 }}
          whileInView={{ opacity: 1, scaleX: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.9, delay: 0.3 }}
          className="mx-auto mt-5 flex max-w-[445px] items-center justify-center gap-3"
        >
          <span className="h-[1.5px] flex-1 bg-[#bd842e]" />

          <span className="h-3 w-3 rotate-45 bg-[#bd842e]" />

          <span className="h-5 w-5 rotate-45 border-[3px] border-[#bd842e]" />

          <span className="h-3 w-3 rotate-45 bg-[#bd842e]" />

          <span className="h-[1.5px] flex-1 bg-[#bd842e]" />
        </motion.div>
      </div>



      <div className="relative z-10 mx-auto grid max-w-[1600px] grid-cols-1 gap-x-6 gap-y-12 sm:grid-cols-2 lg:grid-cols-3 lg:gap-x-6 lg:gap-y-8">

        {restaurantTeamData.members.map((chef, index) => (
          <motion.div
            key={chef.name}
            initial={
              reduceMotion
                ? false
                : {
                    opacity: 0,
                    y: 55,
                  }
            }
            whileInView={{
              opacity: 1,
              y: 0,
            }}
            viewport={{
              once: true,
              amount: 0.15,
            }}
            transition={{
              duration: reduceMotion ? 0 : 0.8,
              delay: reduceMotion ? 0 : index * 0.15,
              ease: [0.22, 1, 0.36, 1],
            }}
            whileHover={
              reduceMotion
                ? undefined
                : { y: -8 }
            }
            className="group relative mx-auto w-full max-w-[450px] overflow-hidden rounded-[25px] border-[1.5px] border-[#d49a2e] bg-[#fcf8f3] shadow-[0_8px_24px_rgba(89,27,20,0.07)] transition-shadow duration-500 hover:shadow-[0_20px_40px_rgba(89,27,20,0.15)]"
          >



            <div className="relative h-[340px] overflow-hidden bg-[#ead8c7] sm:h-[320px] lg:h-[350px]">

              <Image
                src={chef.image}
                alt={chef.imageAlt}
                fill
                sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                className="object-cover object-center transition-transform duration-700 ease-out group-hover:scale-110"
              />


              <div className="absolute inset-0 bg-gradient-to-t from-[#3a100c]/15 via-transparent to-transparent opacity-70" />


              <div className="pointer-events-none absolute inset-0 border-b border-[#d49a2e]/40" />

            </div>



            <div className="relative z-10 -mt-1 flex min-h-[198px] flex-col items-center rounded-t-[24px] bg-gradient-to-b from-[#fffaf4] to-[#fcf5ec] px-4 pb-7 pt-3 text-center sm:min-h-[200px] sm:px-5">


              <h3 className="font-serif text-[27px] font-bold leading-tight text-[#701522] transition-colors duration-300 group-hover:text-[#bd842e] sm:text-[29px]">
                {chef.name}
              </h3>


              <div className="mt-2 rounded-full bg-gradient-to-r from-[#bd842e] via-[#d29a39] to-[#a96e17] px-7 py-1.5 shadow-sm">
                <p className="text-[12px] font-bold tracking-[2px] text-white sm:text-[13px]">
                  {chef.role}
                </p>
              </div>


              <div className="mt-4 flex w-[72px] items-center justify-center gap-1">
                <span className="h-[1px] flex-1 bg-[#bd842e]" />

                <motion.span
                  animate={
                    reduceMotion
                      ? undefined
                      : { rotate: [45, 135, 45] }
                  }
                  transition={{
                    duration: 3,
                    repeat: Infinity,
                    ease: "easeInOut",
                  }}
                  className="h-2.5 w-2.5 rotate-45 bg-[#bd842e]"
                />

                <span className="h-[1px] flex-1 bg-[#bd842e]" />
              </div>


              <p className="mt-4 max-w-[360px] text-[14px] leading-[1.65] text-[#292929] sm:text-[15px] lg:text-base">
                {chef.description}
              </p>

            </div>

          </motion.div>
        ))}

      </div>



      <div className="pointer-events-none absolute -bottom-12 left-[-5%] -z-0 h-24 w-[110%] rounded-[50%] bg-[#f8eadb]/80 blur-sm" />

    </section>
  );
}
