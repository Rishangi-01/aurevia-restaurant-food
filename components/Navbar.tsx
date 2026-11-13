
"use client";

import { useState } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, ChevronRight } from "lucide-react";

const navLinks = [
  { name: "Home", href: "/", active: true },
  { name: "About Us", href: "/about" },
  { name: "Menu", href: "/menu" },
  { name: "Gallery", href: "/gallery" },
  { name: "Chefs", href: "/chefs" },
  { name: "Contact Us", href: "/contact" },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 w-full bg-white shadow-[0_2px_15px_rgba(0,0,0,0.06)]">

      <nav className="mx-auto flex h-[82px] max-w-[1900px] items-center justify-between px-5 sm:px-8 lg:h-[90px] lg:px-12 xl:px-16">

        <Link
          href="/"
          className="group flex shrink-0 items-center"
          aria-label="Aurevia Restaurant Home"
        >
          <div className="flex flex-col items-center">

            <motion.span
              initial={{ opacity: 0, y: -12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7 }}
              className="font-serif text-[38px] font-bold italic leading-[0.9] tracking-[-2px] text-[#94152c] sm:text-[44px] lg:text-[50px]"
            >
              Aurevia
            </motion.span>

            <div className="mt-2 flex w-full items-center gap-2">
              <span className="h-[1.5px] flex-1 bg-[#b58a55]" />

              <span className="whitespace-nowrap font-serif text-[9px] font-bold tracking-[5px] text-[#48291f] sm:text-[10px]">
                RESTAURANT
              </span>

              <span className="h-[1.5px] flex-1 bg-[#b58a55]" />
            </div>

          </div>
        </Link>

        {/* DESKTOP DIVIDER */}
        <div className="mx-7 hidden h-[58px] w-[2px] bg-[#dfc9b3] lg:block xl:mx-10" />

        {/* DESKTOP NAVIGATION */}
        <div className="hidden flex-1 items-center justify-between lg:flex">

          {navLinks.map((link, index) => (
            <motion.div
              key={link.name}
              initial={{ opacity: 0, y: -15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.5,
                delay: index * 0.1,
              }}
            >
              <Link
                href={link.href}
                className={`group relative flex items-center justify-center overflow-hidden rounded-[17px] px-5 py-3 text-[19px] font-semibold transition-all duration-300 xl:px-7 xl:text-[23px]
                  ${
                    link.active
                      ? "bg-[#97152e] text-white shadow-[0_5px_15px_rgba(151,21,46,0.18)]"
                      : "text-[#3b211b] hover:text-[#97152e]"
                  }`}
              >
                {!link.active && (
                  <span className="absolute bottom-2 left-1/2 h-[2px] w-0 -translate-x-1/2 bg-[#97152e] transition-all duration-300 group-hover:w-1/2" />
                )}

                <span className="relative z-10">{link.name}</span>
              </Link>
            </motion.div>
          ))}

        </div>

        {/* MOBILE MENU BUTTON */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          aria-label={isOpen ? "Close navigation menu" : "Open navigation menu"}
          aria-expanded={isOpen}
          className="flex h-11 w-11 items-center justify-center rounded-xl border border-[#eadbd5] text-[#97152e] transition-all hover:bg-[#97152e] hover:text-white lg:hidden"
        >
          <AnimatePresence mode="wait" initial={false}>
            <motion.span
              key={isOpen ? "close" : "open"}
              initial={{ opacity: 0, rotate: -90 }}
              animate={{ opacity: 1, rotate: 0 }}
              exit={{ opacity: 0, rotate: 90 }}
              transition={{ duration: 0.2 }}
            >
              {isOpen ? <X size={25} /> : <Menu size={25} />}
            </motion.span>
          </AnimatePresence>
        </button>

      </nav>

      {/* MOBILE NAVIGATION */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.35, ease: "easeInOut" }}
            className="overflow-hidden border-t border-[#f0e5df] bg-white lg:hidden"
          >
            <div className="mx-auto flex max-w-7xl flex-col gap-2 px-5 py-5 sm:px-8">

              {navLinks.map((link, index) => (
                <motion.div
                  key={link.name}
                  initial={{ opacity: 0, x: -15 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.06 }}
                >
                  <Link
                    href={link.href}
                    onClick={() => setIsOpen(false)}
                    className={`flex items-center justify-between rounded-xl px-5 py-3.5 font-serif text-lg font-semibold transition-all duration-300 ${
                      link.active
                        ? "bg-[#97152e] text-white"
                        : "text-[#3b211b] hover:bg-[#faf2ef] hover:text-[#97152e]"
                    }`}
                  >
                    {link.name}

                    <ChevronRight
                      size={19}
                      className={
                        link.active
                          ? "text-white"
                          : "text-[#b58a55]"
                      }
                    />
                  </Link>
                </motion.div>
              ))}

            </div>
          </motion.div>
        )}
      </AnimatePresence>

    </header>
  );
}