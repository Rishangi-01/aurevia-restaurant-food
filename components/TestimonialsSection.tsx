
"use client";

import Image from "next/image";
import { motion, useReducedMotion } from "framer-motion";
import { Star, MapPin } from "lucide-react";

const testimonials = [
  {
    id: 1,
    name: "William Joe",
    location: "New York",
    image: "/images/customer-william.png",
    alt: "William Joe",
    review:
      "The taste of food was really amazing. Every dish was fresh, beautifully presented and full of flavor. I will definitely visit again!",
  },
  {
    id: 2,
    name: "Theresa Tin",
    location: "Chicago",
    image: "/images/customer-theresa.png",
    alt: "Theresa Tin",
    review:
      "Hygienic food & a warm environment. The staff was very friendly and the overall dining experience was wonderful. Highly recommended!",
  },
  {
    id: 3,
    name: "Michel Byrd",
    location: "Denmark",
    image: "/images/customer-michel.png",
    alt: "Michel Byrd",
    review:
      "A perfect place for a family dinner! The food was delicious, service was quick, and the ambience was just great. Truly a memorable experience.",
  },
];

export default function TestimonialsSection() {
  const reduceMotion = useReducedMotion();

  return (
    <section
      id="testimonials"
      className="relative isolate overflow-hidden bg-[#fcf8f3] px-5 pb-24 pt-16 sm:px-8 sm:pb-28 sm:pt-20 lg:px-12 lg:pb-32 lg:pt-24 w-full"
    >


      <motion.div
        initial={reduceMotion ? false : { opacity: 0, x: -35, rotate: -15 }}
        whileInView={{ opacity: 1, x: 0, rotate: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 1 }}
        className="pointer-events-none absolute left-0 top-14 z-0 h-[100px] w-[110px] sm:top-16 sm:h-[145px] sm:w-[155px] lg:h-[175px] lg:w-[180px]"
      >
        <Image
          src="/images/testimonial-herbs.png"
          alt=""
          fill
          sizes="180px"
          className="object-contain object-left"
        />
      </motion.div>

      {/* =====================================
          TOP RIGHT FOOD IMAGE
      ===================================== */}

      <motion.div
        initial={reduceMotion ? false : { opacity: 0, x: 35, y: -20 }}
        whileInView={{ opacity: 1, x: 0, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 1 }}
        className="pointer-events-none absolute right-0 top-0 z-0 h-[115px] w-[140px] sm:h-[155px] sm:w-[190px] lg:h-[190px] lg:w-[225px]"
      >
        <Image
          src="/images/testimonial-food.png"
          alt=""
          fill
          sizes="225px"
          className="object-cover object-top"
        />
      </motion.div>

      {/* =====================================
          BOTTOM LEFT PASTA IMAGE
      ===================================== */}

      <motion.div
        initial={reduceMotion ? false : { opacity: 0, x: -30, y: 30 }}
        whileInView={{ opacity: 1, x: 0, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 1 }}
        className="pointer-events-none absolute bottom-0 left-0 z-0 h-[130px] w-[155px] sm:h-[185px] sm:w-[210px] lg:h-[230px] lg:w-[260px]"
      >
        <Image
          src="/images/testimonial-pasta.png"
          alt=""
          fill
          sizes="260px"
          className="object-contain object-left-bottom"
        />
      </motion.div>

      {/* =====================================
          SECTION HEADING
      ===================================== */}

      <div className="relative z-10 mx-auto mb-16 max-w-[1050px] text-center sm:mb-20">

        {/* QUOTE ICON */}
        <motion.div
          initial={reduceMotion ? false : { opacity: 0, scale: 0.5, y: -15 }}
          whileInView={{ opacity: 1, scale: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="mb-1 font-serif text-[75px] font-bold leading-[0.8] text-[#c68b14] sm:text-[85px]"
        >
          “
        </motion.div>

        {/* SUBTITLE */}
        <motion.div
          initial={reduceMotion ? false : { opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.1 }}
          className="flex items-center justify-center gap-5"
        >
          <span className="h-[1.5px] w-12 bg-[#bd842e] sm:w-16" />

          <p className="text-xs font-bold uppercase tracking-[5px] text-[#701522] sm:text-base sm:tracking-[7px]">
            Testimonials
          </p>

          <span className="h-[1.5px] w-12 bg-[#bd842e] sm:w-16" />
        </motion.div>

        {/* MAIN HEADING */}
        <motion.h2
          initial={reduceMotion ? false : { opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="mt-5 font-serif text-4xl font-bold leading-tight text-[#701522] sm:text-5xl md:text-6xl lg:text-[64px]"
        >
          What Our Guests{" "}
          <span className="italic text-[#c18a24]">
            Say
          </span>
        </motion.h2>

        {/* GOLD DIVIDER */}
        <motion.div
          initial={reduceMotion ? false : { opacity: 0, scaleX: 0.3 }}
          whileInView={{ opacity: 1, scaleX: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="mx-auto mt-7 flex max-w-[430px] items-center justify-center gap-1"
        >
          <span className="h-[1.5px] flex-1 bg-[#bd842e]" />

          <span className="h-3 w-3 rotate-45 border-2 border-[#bd842e]" />

          <span className="h-4 w-4 rotate-45 border-2 border-[#bd842e]" />

          <span className="h-3 w-3 rotate-45 border-2 border-[#bd842e]" />

          <span className="h-[1.5px] flex-1 bg-[#bd842e]" />
        </motion.div>
      </div>

      {/* =====================================
          TESTIMONIAL CARDS
      ===================================== */}

      <div className="relative z-10 mx-auto grid max-w-[1250px] grid-cols-1 gap-x-7 gap-y-16 sm:grid-cols-2 lg:grid-cols-3 lg:gap-x-7 lg:gap-y-10">

        {testimonials.map((item, index) => (
          <motion.div
            key={item.id}
            initial={
              reduceMotion
                ? false
                : { opacity: 0, y: 55 }
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
              reduceMotion ? undefined : { y: -8 }
            }
            className="group relative mx-auto flex min-h-[390px] w-full max-w-[420px] flex-col items-center rounded-[27px] border-[1.5px] border-[#dda33e] bg-white/45 px-5 pb-7 pt-[88px] text-center shadow-[0_8px_25px_rgba(112,21,34,0.04)] transition-all duration-500 hover:bg-white/80 hover:shadow-[0_18px_40px_rgba(112,21,34,0.12)] sm:min-h-[405px] sm:px-6 sm:pt-[90px] lg:min-h-[420px]"
          >

            {/* =================================
                CUSTOMER PROFILE IMAGE
            ================================= */}

            <motion.div
              whileHover={
                reduceMotion
                  ? undefined
                  : { scale: 1.08, rotate: 4 }
              }
              transition={{ duration: 0.4 }}
              className="absolute -top-[68px] left-1/2 h-[135px] w-[135px] -translate-x-1/2 overflow-hidden rounded-full border-[4px] border-[#d69b2d] bg-[#ead8c7] p-[3px] shadow-[0_5px_15px_rgba(112,21,34,0.15)] sm:h-[145px] sm:w-[145px]"
            >
              <div className="relative h-full w-full overflow-hidden rounded-full">
                <Image
                  src={item.image}
                  alt={item.alt}
                  fill
                  sizes="145px"
                  className="object-cover transition-transform duration-700 group-hover:scale-110"
                />
              </div>
            </motion.div>

            {/* =================================
                STAR RATING
            ================================= */}

            <div className="mb-3 mt-1 flex items-center justify-center gap-0.5">
              {Array.from({ length: 5 }).map((_, i) => (
                <Star
                  key={i}
                  size={27}
                  strokeWidth={1}
                  fill="#E9A10B"
                  className="text-[#E9A10B] sm:h-[29px] sm:w-[29px]"
                />
              ))}
            </div>

            {/* =================================
                REVIEW TEXT
            ================================= */}

            <div className="relative flex flex-1 items-center">

              {/* OPEN QUOTE */}
              <span className="absolute -left-1 -top-5 font-serif text-5xl font-bold leading-none text-[#efd7b9] sm:-left-2">
                “
              </span>

              <p className="relative z-10 font-serif text-[17px] leading-[1.55] text-[#211b19] sm:text-[18px] lg:text-[19px]">
                {item.review}
              </p>

              {/* CLOSE QUOTE */}
              <span className="absolute -bottom-7 -right-1 font-serif text-5xl font-bold leading-none text-[#efd7b9] sm:-right-2">
                ”
              </span>

            </div>

            {/* GOLD SEPARATOR */}
            <div className="mt-7 h-[1.5px] w-24 bg-[#c18a24]" />

            {/* CUSTOMER NAME */}
            <h3 className="mt-4 font-serif text-[23px] font-bold text-[#701522] transition-colors duration-300 group-hover:text-[#bd842e] sm:text-[25px]">
              {item.name}
            </h3>

            {/* CUSTOMER LOCATION */}
            <div className="mt-2 flex items-center justify-center gap-2">
              <MapPin
                size={21}
                fill="#c18a24"
                strokeWidth={1.5}
                className="text-[#c18a24]"
              />

              <span className="text-base font-medium text-[#292929]">
                {item.location}
              </span>
            </div>

            {/* BOTTOM GOLD ACCENT */}
            <span className="absolute bottom-0 left-1/2 h-[3px] w-0 -translate-x-1/2 rounded-full bg-[#bd842e] transition-all duration-500 group-hover:w-1/2" />

          </motion.div>
        ))}

      </div>

      {/* =====================================
          BOTTOM DECORATIVE WAVE
      ===================================== */}

      <div className="pointer-events-none absolute -bottom-12 left-[-5%] -z-0 h-28 w-[110%] rounded-[50%] bg-[#f8e9d9]/70 blur-sm" />

    </section>
  );
}
