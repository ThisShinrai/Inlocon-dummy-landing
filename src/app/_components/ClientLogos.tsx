"use client";

import Image from "next/image";
import { useRef, useEffect, useState } from "react";
import { motion } from "framer-motion";

const logos = [
  { src: "/images/svg/Siemens-logo.svg", alt: "Siemens Logo" },
  { src: "/images/svg/Strabag_SE_Logo_2008.svg", alt: "Strabag Logo" },
  { src: "/images/svg/db-logo.svg", alt: "Deutsche Bahn Logo" },
  { src: "/images/svg/Schindlerlogo.svg", alt: "Schindler Logo" },
  { src: "/images/svg/Knauf.svg", alt: "Knauf Logo" },
];

export function ClientLogos() {
  // We duplicate the logos four times to create a seamless loop.
  // This is a common technique for creating infinite scroll animations.
  const scrollingLogos = [...logos, ...logos, ...logos, ...logos];
  const containerRef = useRef<HTMLDivElement>(null);
  const [width, setWidth] = useState(0);

  useEffect(() => {
    if (containerRef.current) {
      // We calculate the width of a single set of logos (1/4 of the total width).
      // This is used to determine the distance the animation needs to travel.
      setWidth(containerRef.current.scrollWidth / 4);
    }
  }, []);

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1, ease: "easeOut" }}
      className="relative overflow-hidden border-t border-b border-gray-200 bg-white pt-6 pb-8 shadow-sm sm:pt-8 sm:pb-10"
      style={{ boxShadow: "0 2px 24px 0 rgba(0,0,0,0.04)" }}
    >
      <div className="w-full px-0">
        <div className="relative mt-4 flex h-10 items-center px-0 select-none sm:h-12 lg:h-14">
          <motion.div
            ref={containerRef}
            className="absolute top-0 left-0 flex gap-6 sm:gap-8 lg:gap-12"
            // The animation moves the container from its original position (0) to the left by the width of one logo set.
            animate={width ? { x: [0, -width] } : false}
            transition={{
              repeat: Infinity,
              repeatType: "loop",
              duration: 60,
              ease: "linear",
            }}
            style={{ width: width * 4 }}
          >
            {scrollingLogos.map((logo, idx) => (
              <div
                key={logo.alt + idx}
                className="relative flex h-8 w-24 flex-shrink-0 items-center justify-center sm:h-10 sm:w-32 lg:h-12 lg:w-40"
              >
                <Image
                  className="max-h-8 w-full object-contain opacity-60 grayscale transition-all duration-500 hover:opacity-100 hover:grayscale-0 sm:max-h-10 lg:max-h-12"
                  src={logo.src}
                  alt={logo.alt}
                  fill
                  sizes="(max-width: 640px) 96px, (max-width: 1024px) 128px, 160px"
                  style={{ objectFit: "contain" }}
                  // We prioritize the first set of logos to improve initial page load performance.
                  priority={idx < logos.length}
                />
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </motion.div>
  );
}
