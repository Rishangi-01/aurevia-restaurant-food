
"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { Swiper, SwiperSlide } from "swiper/react";
import {
  Autoplay,
  Navigation,
  Pagination,
  EffectFade,
} from "swiper/modules";
import { restaurantHeroData } from "@/data";

import { ChevronLeft, ChevronRight } from "lucide-react";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/effect-fade";

export default function HeroSlider() {
  return (
    <section id="home" className="relative w-full overflow-hidden bg-[#270509]">

      <Swiper
        modules={[
          Autoplay,
          Navigation,
          Pagination,
          EffectFade,
        ]}
        effect="fade"
        fadeEffect={{
          crossFade: true,
        }}
        loop={true}
        speed={1200}
        autoplay={{
          delay: 4500,
          disableOnInteraction: false,
          pauseOnMouseEnter: true,
        }}
        navigation={{
          prevEl: ".aurevia-prev",
          nextEl: ".aurevia-next",
        }}
        pagination={{
          clickable: true,
          el: ".aurevia-pagination",
        }}
        className="aurevia-swiper group relative h-[600px] w-full sm:h-[650px] lg:h-[calc(100vh-90px)] lg:min-h-[620px] lg:max-h-[850px]"
      >

        {restaurantHeroData.slides.map((slide, index) => (
          <SwiperSlide key={slide.image} className="relative">

            {({ isActive }) => (
              <div className="relative flex h-full w-full items-center justify-center overflow-hidden">

                
                <motion.div
                  className="absolute inset-0"
                  initial={false}
                  animate={{
                    scale: isActive ? 1.06 : 1,
                  }}
                  transition={{
                    duration: 6,
                    ease: "linear",
                  }}
                >
                  <Image
                    src={slide.image}
                    alt={slide.imageAlt}
                    fill
                    priority={index === 0}
                    sizes="100vw"
                    className="object-cover object-center"
                  />
                </motion.div>

                
                <div className="absolute inset-0 bg-gradient-to-b from-[#210207]/55 via-[#39050c]/45 to-[#1c0305]/40" />

                <div className="absolute inset-0 bg-black/10" />

                
                <div className="relative z-10 mx-auto flex w-full max-w-5xl flex-col items-center px-6 pb-12 text-center sm:px-12 lg:pb-16">

                  
                  <motion.p
                    initial={false}
                    animate={
                      isActive
                        ? { opacity: 1, y: 0 }
                        : { opacity: 0, y: 25 }
                    }
                    transition={{
                      duration: 0.8,
                      delay: 0.2,
                    }}
                    className="mb-1 font-[cursive] text-4xl italic text-[#e9b95e] sm:text-5xl md:text-6xl lg:text-[88px]"
                    style={{
                      fontFamily: "'Brush Script MT', cursive",
                    }}
                  >
                    {slide.eyebrow}
                  </motion.p>

                  
                  <motion.h1
                    initial={false}
                    animate={
                      isActive
                        ? { opacity: 1, y: 0, scale: 1 }
                        : { opacity: 0, y: 35, scale: 0.95 }
                    }
                    transition={{
                      duration: 1,
                      delay: 0.35,
                    }}
                    className="font-serif text-7xl font-medium leading-none tracking-wide text-[#fffaf0] sm:text-8xl md:text-9xl lg:text-[150px]"
                  >
                    {slide.title[0]}
                  </motion.h1>

                  
                  <motion.div
                    initial={false}
                    animate={
                      isActive
                        ? { opacity: 1, y: 0 }
                        : { opacity: 0, y: 25 }
                    }
                    transition={{
                      duration: 0.8,
                      delay: 0.55,
                    }}
                    className="mt-2 flex w-full max-w-[670px] items-center justify-center gap-4 sm:gap-7"
                  >
                    <span className="h-[2px] flex-1 bg-[#e7b75c]" />

                    <span className="font-serif text-3xl tracking-[2px] text-white sm:text-4xl md:text-5xl lg:text-6xl">
                      {slide.title[1]}
                    </span>

                    <span className="h-[2px] flex-1 bg-[#e7b75c]" />
                  </motion.div>

                  
                  <motion.p
                    initial={false}
                    animate={
                      isActive
                        ? { opacity: 1, y: 0 }
                        : { opacity: 0, y: 25 }
                    }
                    transition={{
                      duration: 0.8,
                      delay: 0.75,
                    }}
                    className="mt-5 max-w-[800px] text-base font-medium leading-7 tracking-wide text-white/95 sm:text-lg md:text-xl lg:text-[28px] lg:leading-[1.6]"
                  >
                    {slide.text}
                  </motion.p>

                </div>
              </div>
            )}
          </SwiperSlide>
        ))}

      </Swiper>

      <button
        type="button"
        aria-label={restaurantHeroData.previousLabel}
        className="aurevia-prev absolute left-4 top-1/2 z-20 flex h-11 w-11 -translate-y-1/2 cursor-pointer items-center justify-center rounded-full bg-[#fffaf0] text-[#831329] shadow-lg transition-all duration-300 hover:scale-110 hover:bg-[#97152e] hover:text-white sm:left-7 sm:h-14 sm:w-14 lg:left-8 lg:h-16 lg:w-16"
      >
        <ChevronLeft size={32} strokeWidth={2.5} />
      </button>
      <button
        type="button"
        aria-label={restaurantHeroData.nextLabel}
        className="aurevia-next absolute right-4 top-1/2 z-20 flex h-11 w-11 -translate-y-1/2 cursor-pointer items-center justify-center rounded-full bg-[#fffaf0] text-[#831329] shadow-lg transition-all duration-300 hover:scale-110 hover:bg-[#97152e] hover:text-white sm:right-7 sm:h-14 sm:w-14 lg:right-8 lg:h-16 lg:w-16"
      >
        <ChevronRight size={32} strokeWidth={2.5} />
      </button>
      {/* <div className="aurevia-pagination absolute bottom-7 left-0 z-20 flex w-full items-center justify-center gap-3" />

      <div className="pointer-events-none absolute bottom-0 left-0 z-10 h-[3px] w-full bg-gradient-to-r from-transparent via-[#d6a64e] to-transparent opacity-80" /> */}

    </section>
  );
}
