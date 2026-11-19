"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { restaurantFooterData, restaurantSiteData } from "@/data";
import Image from "next/image";
import { Phone, Mail, MapPin } from "lucide-react";
import {
  FaInstagram,
  FaYoutube,
  FaFacebookF,
  FaLinkedinIn,
} from "react-icons/fa";


const quickLinks = restaurantFooterData.columns[0].links;
const services = restaurantFooterData.columns[1].links;
const socialLinks = restaurantSiteData.socials;
const footerContacts = [...restaurantFooterData.contactDetails].sort(
  (first, second) => {
    const displayOrder: Record<string, number> = {
      "map-pin": 0,
      phone: 1,
      mail: 2,
    };
    return displayOrder[first.icon] - displayOrder[second.icon];
  },
);
const restaurantLabel = restaurantSiteData.alt
  .replace(restaurantSiteData.name, "")
  .trim();

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

const contactIcons = {
  Phone,
  Mail,
  MapPin,
};

const socialIcons = {
  FaFacebookF,
  FaInstagram, 
  FaYoutube,
  FaLinkedinIn
}

export default function Footer() {
  return (
    <footer
      className="relative isolate overflow-hidden text-white"
      style={{
        backgroundImage: `linear-gradient(rgba(20, 7, 4, 0.48), rgba(20, 7, 4, 0.55)), url('${restaurantSiteData.bgImage}')`,
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
          <motion.div variants={itemVariants} className="lg:pr-8">
            <Link href="/" className="group inline-flex flex-col items-center">
              <Image
                src={restaurantSiteData.logoWhite}
                alt={restaurantSiteData.alt}
                width={450}
                height={115}
                priority
                className="h-auto w-[230px] object-contain sm:w-[280px] lg:w-[320px] xl:w-[275px]"
              />
            </Link>

            <p className="mt-7 max-w-[380px] text-[15px] leading-7 text-white/85 sm:text-base">
              {restaurantFooterData.about}
            </p>

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
                  {(() => {
                    const Icon =
                      socialIcons[
                        social.icon as keyof typeof socialIcons
                      ];

                    return Icon ? <Icon size={22} strokeWidth={1.8} /> : null;
                  })()}
                </motion.a>
              ))}
            </div>
          </motion.div>

          <motion.div
            variants={itemVariants}
            className="border-l border-[#e5bd71]/40 pl-6 lg:pl-10"
          >
            <h3 className="font-serif text-2xl font-bold text-white sm:text-3xl">
              {restaurantFooterData.columns[0].title}
            </h3>

            <div className="mb-6 mt-5 h-[2px] w-24 bg-gradient-to-r from-[#f5d58c] to-transparent" />

            <ul className="space-y-4">
              {quickLinks.map((link) => (
                <li key={link.label}>
                  <Link
                    href={link.href}
                    className="group flex items-center gap-3 text-[15px] text-white/85 transition-all duration-300 hover:translate-x-2 hover:text-[#f5d58c] sm:text-base"
                  >
                    <span className="text-xl text-[#f5d58c] transition-transform duration-300 group-hover:translate-x-1">
                      ›
                    </span>
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </motion.div>

          <motion.div
            variants={itemVariants}
            className="border-l border-[#e5bd71]/40 pl-6 lg:pl-10"
          >
            <h3 className="font-serif text-2xl font-bold text-white sm:text-3xl">
              {restaurantFooterData.columns[1].title}
            </h3>

            <div className="mb-6 mt-5 h-[2px] w-24 bg-gradient-to-r from-[#f5d58c] to-transparent" />

            <ul className="space-y-4">
              {services.map((service) => (
                <li key={service.label}>
                  <Link
                    href={service.href}
                    className="group flex items-center gap-3 text-[15px] text-white/85 transition-all duration-300 hover:translate-x-2 hover:text-[#f5d58c] sm:text-base"
                  >
                    <span className="text-xl text-[#f5d58c] transition-transform duration-300 group-hover:translate-x-1">
                      ›
                    </span>
                    {service.label}
                  </Link>
                </li>
              ))}
            </ul>
          </motion.div>

          <motion.div
            variants={itemVariants}
            className="border-l border-[#e5bd71]/40 pl-6 lg:pl-10"
          >
            <h3 className="font-serif text-2xl font-bold text-white sm:text-3xl">
              {restaurantFooterData.contactTitle}
            </h3>

            <div className="mb-6 mt-5 h-[2px] w-24 bg-gradient-to-r from-[#f5d58c] to-transparent" />

            <div className="space-y-6">
              {footerContacts.map((contact) => (
                <a
                  key={contact.icon}
                  href={contact.href}
                  target={contact.icon === "map-pin" ? "_blank" : undefined}
                  rel={
                    contact.icon === "map-pin"
                      ? "noopener noreferrer"
                      : undefined
                  }
                  className={
                    contact.icon === "map-pin"
                      ? "group flex items-start gap-4"
                      : "group flex items-center gap-4"
                  }
                >
                  <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-[#f5d58c] text-xl text-[#381015] transition-all duration-300 group-hover:scale-110">
                    {(() => {
                      const Icon =
                        contactIcons[contact.icon as keyof typeof contactIcons];

                      return Icon ? <Icon size={22} strokeWidth={1.8} /> : null;
                    })()}
                  </span>
                  <span
                    className={
                      contact.icon === "mail"
                        ? "break-all text-[14px] text-white/90 transition-colors group-hover:text-[#f5d58c] sm:text-base"
                        : contact.icon === "map-pin"
                          ? "text-[14px] leading-6 text-white/90 transition-colors group-hover:text-[#f5d58c] sm:text-base"
                          : "text-[14px] text-white/90 transition-colors group-hover:text-[#f5d58c] sm:text-base"
                    }
                  >
                    {contact.icon === "map-pin"
                      ? restaurantSiteData.addressLines.map((line, index) => (
                          <span key={line}>
                            {index > 0 && <br />}
                            {line}
                          </span>
                        ))
                      : contact.value}
                  </span>
                </a>
              ))}
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
            {restaurantFooterData.copyright}
          </p>

          <p className="text-xs tracking-wide text-[#f5d58c]/80">
            {restaurantFooterData.tagline}
          </p>
        </motion.div>
      </div>
    </footer>
  );
}
