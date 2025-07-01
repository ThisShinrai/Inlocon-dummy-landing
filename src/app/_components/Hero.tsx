"use client";

import Link from "next/link";
import Image from "next/image";
import { motion, type Variants } from "framer-motion";

// Animation variants for the container element.
// Controls the staggering of child animations.
const containerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
      delayChildren: 0.1,
    },
  },
};

// Animation variants for the individual items within the container.
// Creates a subtle "rise and fade in" effect.
const itemVariants: Variants = {
  hidden: { y: 20, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
    transition: {
      duration: 0.6,
      ease: [0.16, 1, 0.3, 1],
    },
  },
};

export function Hero() {
  return (
    <div className="relative bg-gray-900 pt-16 pb-16 sm:pt-24 sm:pb-24 lg:pt-32 lg:pb-32">
      <div className="mx-auto grid max-w-7xl grid-cols-1 gap-y-16 lg:grid-cols-2 lg:gap-x-12 lg:px-8">
        <motion.div
          className="flex flex-col justify-center px-6 pt-12 text-center lg:px-0 lg:text-left"
          // The `variants` prop connects the animation variants to this element.
          variants={containerVariants}
          // `initial` sets the initial animation state.
          initial="hidden"
          // `animate` defines the animation state to transition to.
          animate="visible"
        >
          <motion.div variants={itemVariants}>
            <span className="inline-flex items-center rounded-full bg-blue-600/10 px-3 py-1 text-sm font-medium text-blue-400">
              Ihre Chance im öffentlichen Sektor
            </span>
          </motion.div>
          <motion.h1
            className="mt-6 text-4xl font-extrabold tracking-tight text-white sm:text-5xl md:text-6xl"
            variants={itemVariants}
          >
            Verwandeln Sie Ausschreibungen in Aufträge.
          </motion.h1>
          <motion.p
            className="mt-6 max-w-lg text-lg text-gray-300 sm:mx-auto md:text-xl lg:mx-0"
            variants={itemVariants}
          >
            Mit über 5.000 neuen Ausschreibungen täglich ist Inlocon die
            führende Plattform, um im öffentlichen Sektor erfolgreich zu sein.
          </motion.p>
          <motion.div
            className="mt-10 flex flex-col items-center justify-center gap-y-4 lg:items-start"
            variants={itemVariants}
          >
            <Link
              href="/kostenlos-testen"
              className="w-full rounded-md bg-blue-600 px-8 py-3 text-center text-base font-medium text-white shadow-lg transition-transform hover:scale-105 md:px-10 md:py-4 md:text-lg"
            >
              14 Tage kostenlos testen
            </Link>
            <Link
              href="#demo"
              className="w-full text-center text-base leading-6 font-medium text-white"
            >
              Live Preview <span aria-hidden="true">→</span>
            </Link>
          </motion.div>
        </motion.div>

        <motion.div
          className="relative hidden h-96 w-full overflow-hidden rounded-3xl shadow-2xl lg:block lg:h-auto"
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
        >
          <Image
            className="h-full w-full object-cover"
            src="/images/thisisengineering-lSgfUoyyDwI-unsplash.jpg"
            alt="Professionelle Arbeitsumgebung mit Bauplänen"
            fill
            priority
          />
        </motion.div>
      </div>
    </div>
  );
}
