
"use client";

import Image from "next/image";
import { motion, useReducedMotion } from "framer-motion";
import { restaurantContactData, restaurantSiteData } from "@/data";

const contactDetails = [...restaurantContactData.cards]
  .sort(
    (first, second) =>
      ["address", "phones", "emails"].indexOf(first.field) -
      ["address", "phones", "emails"].indexOf(second.field),
  )
  .map((item) => ({
    ...item,
    lines:
      item.field === "address"
        ? restaurantSiteData.addressLines
        : item.field === "phones"
          ? restaurantSiteData.phones
          : restaurantSiteData.emails,
  }));
const contactTextBreak = restaurantContactData.text.indexOf(" We’re ");
const contactIntro =
  contactTextBreak < 0
    ? restaurantContactData.text
    : restaurantContactData.text.slice(0, contactTextBreak);
const contactContinuation =
  contactTextBreak < 0
    ? ""
    : restaurantContactData.text.slice(contactTextBreak + 1);

export default function ContactSection() {
  const reduceMotion = useReducedMotion();

  const fadeUp = {
    hidden: { opacity: 0, y: 35 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: "easeOut" as const },
    },
  };

  return (
    <section
      id="contact"
      className="relative isolate overflow-hidden bg-[#fcf7f1] bg-no-repeat py-16 sm:py-20 lg:py-24 lg:bg-size-[100%_100%] px-6 sm:px-10 lg:px-16"
      style={{
        backgroundImage: `url('${restaurantContactData.form.backgroundImage}')`,
      }}
    >

      {/* Background overlay */}
      <div className="absolute inset-0 -z-10 bg-[#fffaf5]/10" />

      {/* =====================================
          SECTION HEADING
      ===================================== */}

      <motion.div
        initial={reduceMotion ? false : "hidden"}
        whileInView="visible"
        viewport={{ once: true }}
        variants={fadeUp}
        className="relative z-10 mx-auto mb-12 max-w-3xl text-center sm:mb-16"
      >
        {/* Subtitle */}
        <div className="mb-3 flex items-center justify-center gap-5">
          <span className="h-[2px] w-12 bg-[#c38b36] sm:w-16" />

          <p className="text-xs font-bold uppercase tracking-[5px] text-[#741b29] sm:text-base sm:tracking-[7px]">
            {restaurantContactData.eyebrow}
          </p>

          <span className="h-[2px] w-12 bg-[#c38b36] sm:w-16" />
        </div>

        {/* Decorative ornament */}
        <div className="mb-1 text-sm tracking-[5px] text-[#d5a65c]">
          ── ❖ ──
        </div>

        {/* Heading */}
        <h2 className="font-serif text-5xl font-bold leading-tight text-[#741b29] sm:text-6xl md:text-7xl lg:text-[82px]">
          {restaurantContactData.title.join(" ")}
        </h2>

        {/* Description */}
        <p className="mx-auto mt-4 max-w-2xl text-sm leading-7 text-[#393331] sm:text-base md:text-lg">
          {contactIntro}
          {contactContinuation && (
            <>
              <br className="hidden sm:block" />
              {contactContinuation}
            </>
          )}
        </p>
      </motion.div>

      {/* =====================================
          MAIN CONTACT CONTENT
      ===================================== */}

      <div className="relative z-10 mx-auto grid max-w-[1600px] grid-cols-1 items-center gap-8 lg:grid-cols-[0.95fr_1.5fr_0.95fr] lg:gap-0">

        {/* =====================================
            LEFT CONTACT INFORMATION
        ===================================== */}

        <motion.div
          initial={reduceMotion ? false : { opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.9 }}
          className="relative z-20 rounded-[30px] border border-[#d8b77e]/70 bg-white/45 p-6 shadow-[0_12px_35px_rgba(112,25,35,0.04)] backdrop-blur-sm sm:p-8 lg:-mr-1 lg:rounded-r-none lg:border-r-0 lg:bg-white/20 lg:shadow-none"
        >
          <div className="space-y-6">

            {contactDetails.map((item, index) => (
              <motion.div
                key={item.title}
                initial={reduceMotion ? false : { opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{
                  duration: 0.6,
                  delay: reduceMotion ? 0 : index * 0.15,
                }}
                className="group flex items-start gap-4 border-b border-[#e9ddcf] pb-6 last:border-0 last:pb-0"
              >

                {/* Icon Circle */}
                <div className="flex h-[65px] w-[65px] shrink-0 items-center justify-center rounded-full bg-gradient-to-br from-[#8b2938] to-[#64101f] text-[30px] text-white shadow-[0_5px_15px_rgba(112,21,34,0.18)] transition-all duration-500 group-hover:-translate-y-1 group-hover:scale-105 group-hover:shadow-lg sm:h-[70px] sm:w-[70px]">
                  <span>{item.symbol}</span>
                </div>

                {/* Details */}
                <div className="pt-1">
                  <h3 className="mb-1 font-serif text-xl font-bold text-[#501019] sm:text-[25px]">
                    {item.title}
                  </h3>

                  {item.lines.map((line, i) => (
                    <p
                      key={i}
                      className="break-words text-sm leading-7 text-[#393331] sm:text-base"
                    >
                      {line}
                    </p>
                  ))}
                </div>

              </motion.div>
            ))}

          </div>
        </motion.div>

        {/* =====================================
            CENTER CONTACT FORM
        ===================================== */}

        <motion.div
          initial={reduceMotion ? false : { opacity: 0, y: 55, scale: 0.96 }}
          whileInView={{ opacity: 1, y: 0, scale: 1 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.9, delay: 0.15 }}
          className="relative z-30 rounded-[30px] border-[3px] border-[#c58d48] bg-gradient-to-br from-[#812534] via-[#701b29] to-[#5e101d] p-6 shadow-[0_18px_45px_rgba(91,17,29,0.22)] sm:p-8 md:p-10 lg:-mr-1 lg:rounded-[40px] lg:p-10"
        >

          {/* Inner decorative border */}
          <div className="pointer-events-none absolute inset-[5px] rounded-[25px] border border-[#e2b86f]/30 lg:rounded-[34px]" />

          <form
            className="relative z-10"
            onSubmit={(e) => {
              e.preventDefault();
              // Connect your contact API or email service here.
            }}
          >

            {/* Input Grid */}
            <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">

              {/* Name */}
              <div className="group relative">
                <span className="absolute left-5 top-1/2 -translate-y-1/2 text-[25px] text-[#742532]">
                  {restaurantContactData.form.fields.firstName.symbol}
                </span>

                <input
                  type="text"
                  name="name"
                  placeholder={restaurantContactData.form.fields.firstName.placeholder}
                  required
                  className="h-[66px] w-full rounded-[15px] border border-[#eadfd7] bg-[#fffdfb] pl-16 pr-4 text-base text-[#292020] outline-none transition-all duration-300 placeholder:text-[#5e5553] focus:border-[#d6a34f] focus:ring-4 focus:ring-[#d6a34f]/20"
                />
              </div>

              {/* Email */}
              <div className="group relative">
                <span className="absolute left-5 top-1/2 -translate-y-1/2 text-[24px] text-[#742532]">
                  {restaurantContactData.form.fields.email.symbol}
                </span>

                <input
                  type="email"
                  name="email"
                  placeholder={restaurantContactData.form.fields.email.placeholder}
                  required
                  className="h-[66px] w-full rounded-[15px] border border-[#eadfd7] bg-[#fffdfb] pl-16 pr-4 text-base text-[#292020] outline-none transition-all duration-300 placeholder:text-[#5e5553] focus:border-[#d6a34f] focus:ring-4 focus:ring-[#d6a34f]/20"
                />
              </div>

              {/* Phone */}
              <div className="group relative sm:col-span-2">
                <span className="absolute left-5 top-1/2 -translate-y-1/2 text-[25px] text-[#742532]">
                  {restaurantContactData.form.fields.phone.symbol}
                </span>

                <input
                  type="tel"
                  name="phone"
                  placeholder={restaurantContactData.form.fields.phone.placeholder}
                  required
                  className="h-[66px] w-full rounded-[15px] border border-[#eadfd7] bg-[#fffdfb] pl-16 pr-4 text-base text-[#292020] outline-none transition-all duration-300 placeholder:text-[#5e5553] focus:border-[#d6a34f] focus:ring-4 focus:ring-[#d6a34f]/20"
                />
              </div>

              {/* Message */}
              <div className="group relative sm:col-span-2">
                <span className="absolute left-5 top-5 text-[25px] text-[#742532]">
                  {restaurantContactData.form.fields.message.symbol}
                </span>

                <textarea
                  name="message"
                  rows={5}
                  placeholder={restaurantContactData.form.fields.message.placeholder}
                  required
                  className="min-h-[165px] w-full resize-none rounded-[15px] border border-[#eadfd7] bg-[#fffdfb] py-5 pl-16 pr-5 text-base text-[#292020] outline-none transition-all duration-300 placeholder:text-[#5e5553] focus:border-[#d6a34f] focus:ring-4 focus:ring-[#d6a34f]/20"
                />
              </div>

            </div>

            {/* Submit Button */}
            <motion.button
              type="submit"
              whileHover={reduceMotion ? undefined : { scale: 1.03 }}
              whileTap={reduceMotion ? undefined : { scale: 0.97 }}
              className="mt-6 w-full rounded-xl border border-[#e6bd72] bg-gradient-to-r from-[#d5a04d] to-[#f0c878] px-6 py-4 font-semibold uppercase tracking-[2px] text-[#57111d] shadow-lg transition-all duration-300 hover:shadow-[0_8px_25px_rgba(0,0,0,0.2)]"
            >
              {restaurantContactData.form.submitLabel} <span className="ml-2">→</span>
            </motion.button>

          </form>
        </motion.div>

        {/* =====================================
            RIGHT RESTAURANT IMAGE
        ===================================== */}

        <motion.div
          initial={reduceMotion ? false : { opacity: 0, x: 55 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 1 }}
          className="relative z-10 mx-auto h-[330px] w-full max-w-[520px] overflow-hidden rounded-[30px] shadow-[0_15px_35px_rgba(65,20,20,0.15)] sm:h-[420px] lg:-ml-1 lg:h-[480px] lg:rounded-l-[65px]"
        >

          <Image
            src={restaurantContactData.hero.image.src}
            alt={restaurantContactData.hero.image.alt}
            fill
            priority={false}
            sizes="(max-width: 768px) 100vw, 35vw"
            className="object-cover transition-transform duration-1000 hover:scale-110"
          />

        </motion.div>

      </div>

    </section>
  );
}
