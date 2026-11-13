
"use client";

import Link from "next/link";
import { motion } from "framer-motion";

const quickLinks = [
  { name: "Home", href: "/" },
  { name: "About Us", href: "/about" },
  { name: "Our Menu", href: "/menu" },
  { name: "Gallery", href: "/gallery" },
  { name: "Contact Us", href: "/contact" },
];

const services = [
  "Dine In",
  "Takeaway",
  "Home Delivery",
  "Private Events",
  "Party Booking",
];

const socialLinks = [
  { name: "f", href: "#", label: "Facebook" },
  { name: "◎", href: "#", label: "Instagram" },
  { name: "▶", href: "#", label: "YouTube" },
  { name: "in", href: "#", label: "LinkedIn" },
];

const containerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.15,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 35 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.8, ease: "easeOut" as const },
  },
};

export default function Footer() {
  return (
    <footer
      className="relative isolate overflow-hidden text-white"
      style={{
        backgroundImage:
          "linear-gradient(rgba(20, 7, 4, 0.48), rgba(20, 7, 4, 0.55)), url('/images/footer-bg.png')",
        backgroundSize: "cover",
        backgroundPosition: "center top",
        backgroundRepeat: "no-repeat",
      }}
    >
      
      <div className="relative z-10 mx-auto max-w-[1600px] px-6 pb-12 pt-20 sm:px-10 lg:px-16 lg:pb-16 lg:pt-24">

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.15 }}
          className="grid grid-cols-1 gap-12 sm:grid-cols-2 lg:grid-cols-[1.5fr_0.85fr_0.95fr_1.4fr] lg:gap-10"
        >

          {/* Brand Column */}
          <motion.div variants={itemVariants} className="lg:pr-8">

            <Link href="/" className="group inline-flex flex-col items-center">
              <span className="mb-1 text-4xl text-[#f5d58c] transition-transform duration-500 group-hover:rotate-12">
                ♨
              </span>

              <span className="font-serif text-5xl tracking-tight text-white sm:text-6xl">
                Aurevia
              </span>

              <div className="mt-2 flex w-full items-center gap-3">
                <span className="h-[2px] flex-1 bg-gradient-to-r from-transparent to-[#e5bd71]" />
                <span className="text-xs font-semibold tracking-[0.35em] text-[#f5d58c]">
                  RESTAURANT
                </span>
                <span className="h-[2px] flex-1 bg-gradient-to-l from-transparent to-[#e5bd71]" />
              </div>
            </Link>

            <p className="mt-7 max-w-[380px] text-[15px] leading-7 text-white/85 sm:text-base">
              Aurevia brings you a perfect blend of delicious food, warm
              hospitality, and a memorable dining experience.
            </p>

            {/* Social Icons */}
            <div className="mt-7 flex items-center gap-4">
              {socialLinks.map((social, index) => (
                <motion.a
                  key={social.label}
                  href={social.href}
                  aria-label={social.label}
                  target="_blank"
                  rel="noopener noreferrer"
                  initial={{ opacity: 0, scale: 0.7 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ delay: index * 0.1, duration: 0.4 }}
                  whileHover={{
                    y: -7,
                    scale: 1.12,
                    backgroundColor: "#c28a35",
                    color: "#300d12",
                  }}
                  className="flex h-12 w-12 items-center justify-center rounded-full border border-[#e5bd71] text-lg font-bold text-[#f5d58c] transition-colors duration-300"
                >
                  {social.name}
                </motion.a>
              ))}
            </div>
          </motion.div>

          {/* Quick Links */}
          <motion.div
            variants={itemVariants}
            className="border-l border-[#e5bd71]/40 pl-6 lg:pl-10"
          >
            <h3 className="font-serif text-2xl font-bold text-white sm:text-3xl">
              Quick Links
            </h3>

            <div className="mb-6 mt-5 h-[2px] w-24 bg-gradient-to-r from-[#f5d58c] to-transparent" />

            <ul className="space-y-4">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="group flex items-center gap-3 text-[15px] text-white/85 transition-all duration-300 hover:translate-x-2 hover:text-[#f5d58c] sm:text-base"
                  >
                    <span className="text-xl text-[#f5d58c] transition-transform duration-300 group-hover:translate-x-1">
                      ›
                    </span>
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Services */}
          <motion.div
            variants={itemVariants}
            className="border-l border-[#e5bd71]/40 pl-6 lg:pl-10"
          >
            <h3 className="font-serif text-2xl font-bold text-white sm:text-3xl">
              Our Services
            </h3>

            <div className="mb-6 mt-5 h-[2px] w-24 bg-gradient-to-r from-[#f5d58c] to-transparent" />

            <ul className="space-y-4">
              {services.map((service) => (
                <li key={service}>
                  <Link
                    href="/contact"
                    className="group flex items-center gap-3 text-[15px] text-white/85 transition-all duration-300 hover:translate-x-2 hover:text-[#f5d58c] sm:text-base"
                  >
                    <span className="text-xl text-[#f5d58c] transition-transform duration-300 group-hover:translate-x-1">
                      ›
                    </span>
                    {service}
                  </Link>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Contact Information */}
          <motion.div
            variants={itemVariants}
            className="border-l border-[#e5bd71]/40 pl-6 lg:pl-10"
          >
            <h3 className="font-serif text-2xl font-bold text-white sm:text-3xl">
              Get in Touch
            </h3>

            <div className="mb-6 mt-5 h-[2px] w-24 bg-gradient-to-r from-[#f5d58c] to-transparent" />

            <div className="space-y-6">

              {/* Address */}
              <a
                href="https://www.google.com/maps/search/?api=1&query=123+Food+Street+New+Delhi"
                target="_blank"
                rel="noopener noreferrer"
                className="group flex items-start gap-4"
              >
                <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-[#f5d58c] text-xl text-[#381015] transition-all duration-300 group-hover:scale-110 group-hover:rotate-6">
                  ⌖
                </span>

                <span className="text-[14px] leading-6 text-white/90 transition-colors group-hover:text-[#f5d58c] sm:text-base">
                  123 Food Street, Connaught Place,
                  <br />
                  New Delhi, India - 110001
                </span>
              </a>

              {/* Phone */}
              <a href="tel:+919876543210" className="group flex items-center gap-4">
                <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-[#f5d58c] text-xl text-[#381015] transition-all duration-300 group-hover:scale-110">
                  ☎
                </span>

                <span className="text-[14px] text-white/90 transition-colors group-hover:text-[#f5d58c] sm:text-base">
                  +91 98765 43210
                </span>
              </a>

              {/* Email */}
              <a
                href="mailto:info@aureviarestaurant.com"
                className="group flex items-center gap-4"
              >
                <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-[#f5d58c] text-xl text-[#381015] transition-all duration-300 group-hover:scale-110"
                >
                  ✉
                </span>

                <span className="break-all text-[14px] text-white/90 transition-colors group-hover:text-[#f5d58c] sm:text-base">
                  info@aureviarestaurant.com
                </span>
              </a>

            </div>
          </motion.div>
        </motion.div>
      </div>

      
      <div className="relative px-5 py-7 sm:py-8">

        <motion.div
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="mx-auto flex max-w-[1600px] flex-col items-center gap-4 text-center"
        >
          <div className="flex items-center gap-5 text-[#f5d58c]">
            <span className="h-px w-16 bg-gradient-to-r from-transparent to-[#f5d58c] sm:w-28" />
            <span className="text-3xl">⚒</span>
            <span className="h-px w-16 bg-gradient-to-l from-transparent to-[#f5d58c] sm:w-28" />
          </div>

          <p className="text-sm text-white/90 sm:text-base">
            Copyright © 2026. All Rights Reserved. Powered By Lestow.
          </p>

          <p className="text-xs tracking-wide text-[#f5d58c]/80">
            Crafted with passion & love for great food.
          </p>
        </motion.div>
      </div>
    </footer>
  );
}
