
"use client";

import Image from "next/image";
import { motion, useReducedMotion } from "framer-motion";
import { restaurantGalleryData } from "@/data";

export default function GallerySection() {
  const reduceMotion = useReducedMotion();

  return (
    <section
      id="gallery"
      className="relative overflow-hidden bg-[#fcf8f3] px-5 py-16 sm:px-8 sm:py-20 lg:px-12 lg:py-24 w-full"
    >

      <div className="mx-auto max-w-[1450px]">

        <div className="mb-12 text-center sm:mb-14 lg:mb-16">

          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="mb-5 flex items-center justify-center gap-5"
          >
            <span className="h-[1.5px] w-12 bg-[#c28a35] sm:w-[75px]" />

            <span className="text-xs font-bold uppercase tracking-[5px] text-[#741421] sm:text-sm sm:tracking-[7px]">
              {restaurantGalleryData.title[0]}
            </span>

            <span className="h-[1.5px] w-12 bg-[#c28a35] sm:w-[75px]" />
          </motion.div>

          
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.1 }}
            className="font-serif text-4xl font-bold leading-tight text-[#701522] sm:text-5xl md:text-6xl lg:text-[68px]"
          >
            {restaurantGalleryData.heading[0]}{" "}
            <span className="italic text-[#bd842e]">
              {restaurantGalleryData.heading[1]}
            </span>
          </motion.h2>

          
          <motion.div
            initial={{ opacity: 0, scaleX: 0.3 }}
            whileInView={{ opacity: 1, scaleX: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.25 }}
            className="mx-auto mt-6 flex max-w-[430px] items-center justify-center gap-1"
          >
            <span className="h-[1.5px] flex-1 bg-[#bd842e]" />

            <span className="h-3 w-3 rotate-45 border-2 border-[#bd842e]" />

            <span className="h-5 w-5 rotate-45 border-2 border-[#bd842e]" />

            <span className="h-3 w-3 rotate-45 border-2 border-[#bd842e]" />

            <span className="h-[1.5px] flex-1 bg-[#bd842e]" />
          </motion.div>
        </div>


        <div className="relative mx-auto max-w-[1350px] p-3 sm:p-4">


          <div className="pointer-events-none absolute left-0 top-0 z-20 h-24 w-24 border-l-[4px] border-t-[4px] border-[#bd842e] sm:h-32 sm:w-32" />


          <div className="pointer-events-none absolute bottom-0 right-0 z-20 h-24 w-24 border-b-[4px] border-r-[4px] border-[#bd842e] sm:h-32 sm:w-32" />


          <div className="relative z-10 grid auto-rows-[145px] grid-cols-2 gap-3 sm:auto-rows-[190px] sm:gap-4 md:auto-rows-[220px] lg:auto-rows-[260px] lg:grid-cols-4 lg:gap-[18px]">

            {restaurantGalleryData.items.map((image, index) => (
              <motion.div
                key={image.src}
                initial={
                  reduceMotion
                    ? false
                    : {
                        opacity: 0,
                        y: 45,
                        scale: 0.96,
                      }
                }
                whileInView={{
                  opacity: 1,
                  y: 0,
                  scale: 1,
                }}
                viewport={{
                  once: true,
                  amount: 0.15,
                }}
                transition={{
                  duration: reduceMotion ? 0 : 0.8,
                  delay: reduceMotion ? 0 : image.delay,
                  ease: [0.22, 1, 0.36, 1],
                }}
                whileHover={
                  reduceMotion
                    ? undefined
                    : {
                        y: -5,
                      }
                }
                className={`group relative isolate cursor-pointer overflow-hidden rounded-[18px] bg-[#ead9c5] shadow-[0_5px_20px_rgba(75,35,20,0.07)] ${image.className}`}
              >

                {/* IMAGE */}
                <Image
                  src={image.src}
                  alt={image.alt}
                  fill
                  sizes={
                    index === 0
                      ? "(max-width: 640px) 100vw, (max-width: 1024px) 100vw, 50vw"
                      : "(max-width: 640px) 50vw, (max-width: 1024px) 50vw, 25vw"
                  }
                  className={`object-cover transition-transform duration-700 ease-out group-hover:scale-110 ${image.imageClass}`}
                />

                {/* IMAGE OVERLAY */}
                <div className="absolute inset-0 bg-gradient-to-t from-[#260d09]/30 via-transparent to-transparent opacity-60 transition-opacity duration-500 group-hover:opacity-100" />

                {/* GOLD HOVER BORDER */}
                <div className="pointer-events-none absolute inset-0 rounded-[18px] border border-[#d5a44f]/0 transition-all duration-500 group-hover:border-[3px] group-hover:border-[#d5a44f]/80" />

                {/* HOVER SHINE */}
                <div className="pointer-events-none absolute -left-full top-0 h-full w-1/2 -skew-x-12 bg-gradient-to-r from-transparent via-white/20 to-transparent transition-all duration-1000 group-hover:left-[150%]" />

              </motion.div>
            ))}

          </div>
        </div>
      </div>
    </section>
  );
}
