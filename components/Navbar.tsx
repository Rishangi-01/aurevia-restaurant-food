
"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, ChevronRight } from "lucide-react";
import { restaurantHeaderData, restaurantSiteData } from "@/data";
import Image from "next/image";

const navLinks = [...restaurantHeaderData.links, restaurantHeaderData.button].map(
  (link) => ({
    name: link.label,
    href: link.href,
    sectionId: link.href.startsWith("#") ? link.href.slice(1) : null,
  }),
);
const restaurantLabel = restaurantSiteData.alt
  .replace(restaurantSiteData.name, "")
  .trim();

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("home");
  const [mobileActiveSection, setMobileActiveSection] = useState("home");

  useEffect(() => {
    const updateActiveSection = () => {
      const scrollPosition = window.scrollY + 150;

      let currentSection = "home";

      navLinks.forEach((link) => {
        if (!link.sectionId) {
          return;
        }

        const section = document.getElementById(link.sectionId);
        const sectionTop = section
          ? section.getBoundingClientRect().top + window.scrollY
          : null;

        if (sectionTop !== null && sectionTop <= scrollPosition) {
          currentSection = link.sectionId;
        }
      });

      setActiveSection(currentSection);
      if (!window.location.hash) {
        setMobileActiveSection(currentSection);
      }
    };

    const syncMobileSectionToHash = () => {
      const sectionId = window.location.hash.slice(1);
      const matchingLink = navLinks.find((link) => link.sectionId === sectionId);
      const targetSectionId = matchingLink?.sectionId ?? "home";

      setMobileActiveSection(targetSectionId);
    };

    syncMobileSectionToHash();
    updateActiveSection();

    window.addEventListener("scroll", updateActiveSection, {
      passive: true,
    });
    window.addEventListener("resize", updateActiveSection);
    window.addEventListener("hashchange", syncMobileSectionToHash);
    window.addEventListener("hashchange", updateActiveSection);

    return () => {
      window.removeEventListener("scroll", updateActiveSection);
      window.removeEventListener("resize", updateActiveSection);
      window.removeEventListener("hashchange", syncMobileSectionToHash);
      window.removeEventListener("hashchange", updateActiveSection);
    };
  }, []);


  return (
    <header className="sticky top-0 z-50 w-full bg-white shadow-[0_2px_15px_rgba(0,0,0,0.06)]">

      <nav
        aria-label={restaurantHeaderData.ariaLabel}
        className="mx-auto flex h-[82px] max-w-[1600px] items-center justify-between lg:h-[90px] px-6 sm:px-10 lg:px-16"
      >

        <Link
          href="/"
          className="group flex shrink-0 items-center"
          aria-label={restaurantSiteData.alt}
        >
          <Image
            src={restaurantSiteData.logo}
            alt={restaurantSiteData.alt}
            width={450}
            height={115}
            priority
            className="h-auto w-[130px] object-contain sm:w-[280px] lg:w-[320px] xl:w-[215px]"
          />
        </Link>

        
        <div className="mx-7 hidden h-[58px] w-[2px] bg-[#dfc9b3] lg:block xl:mx-10" />

        
        <div className="hidden flex-1 items-center justify-between lg:flex">

          {navLinks.map((link, index) => {
            const isActive = activeSection === link.sectionId;

            return (
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
                  aria-current={isActive ? "page" : undefined}
                  className={`group relative flex items-center justify-center overflow-hidden rounded-[17px] px-5 py-3 text-[19px] font-semibold transition-all duration-300 xl:px-7 xl:text-[23px]
                    ${
                      isActive
                        ? "bg-[#97152e] text-white shadow-[0_5px_15px_rgba(151,21,46,0.18)]"
                        : "text-[#3b211b] hover:text-[#97152e]"
                    }`}
                >
                  {!isActive && (
                    <span className="absolute bottom-2 left-1/2 h-[2px] w-0 -translate-x-1/2 bg-[#97152e] transition-all duration-300 group-hover:w-1/2" />
                  )}

                  <span className="relative z-10">{link.name}</span>
                </Link>
              </motion.div>
            );
          })}

        </div>

        
        <button
          onClick={() => setIsOpen(!isOpen)}
          aria-label={
            isOpen
              ? restaurantSiteData.mobileMenu.closeLabel
              : restaurantSiteData.mobileMenu.openLabel
          }
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

              {navLinks.map((link, index) => {
                const isActive = mobileActiveSection === link.sectionId;

                return (
                  <motion.div
                    key={link.name}
                    initial={{ opacity: 0, x: -15 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.06 }}
                  >
                    <Link
                      href={link.href}
                      onClick={() => {
                        if (link.sectionId) {
                          setActiveSection(link.sectionId);
                          setMobileActiveSection(link.sectionId);
                        }
                        setIsOpen(false);
                      }}
                      aria-current={isActive ? "page" : undefined}
                      className={`flex items-center justify-between rounded-xl px-5 py-3.5 font-serif text-lg font-semibold transition-all duration-300 ${
                        isActive
                          ? "bg-[#97152e] text-white"
                          : "text-[#3b211b] hover:bg-[#faf2ef] hover:text-[#97152e]"
                      }`}
                    >
                      {link.name}

                      <ChevronRight
                        size={19}
                        className={
                          isActive
                            ? "text-white"
                            : "text-[#b58a55]"
                        }
                      />
                    </Link>
                  </motion.div>
                );
              })}

            </div>
          </motion.div>
        )}
      </AnimatePresence>

    </header>
  );
}