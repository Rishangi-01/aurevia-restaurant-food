
"use client";

import Image from "next/image";
import { useState } from "react";
import { motion, AnimatePresence, useReducedMotion } from "framer-motion";
import {
  X,
  ChevronLeft,
  ChevronRight,
  ZoomIn,
} from "lucide-react";
import { restaurantGalleryData } from "@/data";

export default function GallerySection() {
  const reduceMotion = useReducedMotion();
  const [selectedIndex, setSelectedIndex] = useState<number | null>(null);

  const images = restaurantGalleryData.items;

  const closeLightbox = () => setSelectedIndex(null);

  const showNext = () => {
    if (selectedIndex === null) return;
    setSelectedIndex((selectedIndex + 1) % images.length);
  };

  const showPrevious = () => {
    if (selectedIndex === null) return;
    setSelectedIndex(
      (selectedIndex - 1 + images.length) % images.length
    );
  };

  return (
    <section
      id="gallery"
      className="relative w-full overflow-hidden bg-[#fcf8f3] px-6 py-12 sm:px-10 sm:py-16 lg:px-16 lg:py-18"
    >
      <div className="mx-auto max-w-[1600px]">

        {/* SECTION HEADER */}
        <div className="mb-12 text-center sm:mb-14 lg:mb-16">
          <motion.div
            initial={reduceMotion ? false : { opacity: 0, y: 20 }}
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
            initial={reduceMotion ? false : { opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.1 }}
            className="font-serif text-3xl font-bold leading-tight text-[#701522] sm:text-4xl md:text-6xl lg:text-[68px]"
          >
            {restaurantGalleryData.heading[0]}{" "}
            <span className="italic text-[#bd842e]">
              {restaurantGalleryData.heading[1]}
            </span>
          </motion.h2>

          <motion.div
            initial={reduceMotion ? false : { opacity: 0, scaleX: 0.3 }}
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

        {/* GALLERY GRID */}
        <div className="relative mx-auto max-w-[1600px] p-3 sm:p-4">

          {/* CORNER DECORATIONS */}
          <div className="pointer-events-none absolute left-0 top-0 z-20 h-24 w-24 border-l-[4px] border-t-[4px] border-[#bd842e] sm:h-32 sm:w-32" />

          <div className="pointer-events-none absolute bottom-0 right-0 z-20 h-24 w-24 border-b-[4px] border-r-[4px] border-[#bd842e] sm:h-32 sm:w-32" />

          <div className="relative z-10 grid auto-rows-[145px] grid-cols-2 gap-3 sm:auto-rows-[190px] sm:gap-4 md:auto-rows-[220px] lg:auto-rows-[260px] lg:grid-cols-4 lg:gap-[18px]">

            {images.map((image, index) => (
              <motion.button
                key={image.src}
                type="button"
                aria-label={`View gallery image ${index + 1}`}
                onClick={() => setSelectedIndex(index)}
                initial={
                  reduceMotion
                    ? false
                    : { opacity: 0, y: 45, scale: 0.96 }
                }
                whileInView={{
                  opacity: 1,
                  y: 0,
                  scale: 1,
                }}
                viewport={{ once: true, amount: 0.15 }}
                transition={{
                  duration: reduceMotion ? 0 : 0.8,
                  delay: reduceMotion ? 0 : image.delay,
                  ease: [0.22, 1, 0.36, 1],
                }}
                whileHover={reduceMotion ? undefined : { y: -5 }}
                whileTap={reduceMotion ? undefined : { scale: 0.98 }}
                className={`group relative isolate block w-full cursor-pointer overflow-hidden rounded-[18px] bg-[#ead9c5] text-left shadow-[0_5px_20px_rgba(75,35,20,0.07)] focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-[#bd842e] ${image.className}`}
              >
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

                {/* OVERLAY */}
                <div className="absolute inset-0 bg-gradient-to-t from-[#260d09]/40 via-transparent to-transparent opacity-60 transition-opacity duration-500 group-hover:opacity-100" />

                {/* GOLD BORDER */}
                <div className="pointer-events-none absolute inset-0 rounded-[18px] border border-[#d5a44f]/0 transition-all duration-500 group-hover:border-[3px] group-hover:border-[#d5a44f]/80" />

                {/* HOVER SHINE */}
                <div className="pointer-events-none absolute -left-full top-0 h-full w-1/2 -skew-x-12 bg-gradient-to-r from-transparent via-white/20 to-transparent transition-all duration-1000 group-hover:left-[150%]" />

                {/* ZOOM ICON */}
                <div className="absolute bottom-4 right-4 flex h-10 w-10 translate-y-3 items-center justify-center rounded-full border border-white/50 bg-[#741421]/80 text-white opacity-0 backdrop-blur-md transition-all duration-500 group-hover:translate-y-0 group-hover:opacity-100">
                  <ZoomIn size={20} />
                </div>
              </motion.button>
            ))}

          </div>
        </div>
      </div>

      {/* LIGHTBOX */}
      <AnimatePresence>
        {selectedIndex !== null && (
          <motion.div
            key="gallery-lightbox"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 z-[9999] flex items-center justify-center bg-black/95 px-4 py-8 backdrop-blur-md"
            onClick={closeLightbox}
            role="dialog"
            aria-modal="true"
            aria-label="Gallery image preview"
          >
            {/* CLOSE BUTTON */}
            <button
              type="button"
              onClick={closeLightbox}
              aria-label="Close image preview"
              className="absolute right-5 top-5 z-50 flex h-11 w-11 items-center justify-center rounded-full border border-white/30 bg-white/10 text-white transition-all hover:rotate-90 hover:bg-[#741421]"
            >
              <X size={24} />
            </button>

            {/* PREVIOUS */}
            <button
              type="button"
              onClick={(e) => {
                e.stopPropagation();
                showPrevious();
              }}
              aria-label="Previous image"
              className="absolute left-3 top-1/2 z-50 flex h-11 w-11 -translate-y-1/2 items-center justify-center rounded-full border border-white/30 bg-white/10 text-white backdrop-blur-md transition-all hover:bg-[#741421] sm:left-8 sm:h-14 sm:w-14"
            >
              <ChevronLeft size={30} />
            </button>

            {/* IMAGE */}
            <motion.div
              key={selectedIndex}
              initial={reduceMotion ? false : { opacity: 0, scale: 0.92, y: 15 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95 }}
              transition={{ duration: reduceMotion ? 0 : 0.35 }}
              className="relative flex h-full max-h-[82vh] w-full max-w-[1200px] items-center justify-center"
              onClick={(e) => e.stopPropagation()}
            >
              <Image
                src={images[selectedIndex].src}
                alt={images[selectedIndex].alt}
                fill
                priority
                sizes="100vw"
                className="object-contain"
              />
            </motion.div>

            {/* NEXT */}
            <button
              type="button"
              onClick={(e) => {
                e.stopPropagation();
                showNext();
              }}
              aria-label="Next image"
              className="absolute right-3 top-1/2 z-50 flex h-11 w-11 -translate-y-1/2 items-center justify-center rounded-full border border-white/30 bg-white/10 text-white backdrop-blur-md transition-all hover:bg-[#741421] sm:right-8 sm:h-14 sm:w-14"
            >
              <ChevronRight size={30} />
            </button>

            {/* IMAGE COUNTER */}
            <div className="absolute bottom-5 left-1/2 z-50 -translate-x-1/2 rounded-full border border-white/20 bg-white/10 px-5 py-2 text-sm font-medium tracking-widest text-white backdrop-blur-md">
              {selectedIndex + 1} / {images.length}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
