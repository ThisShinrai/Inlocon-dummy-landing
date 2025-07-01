"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { Search, MapPin, Building, Calendar, ArrowRight } from "lucide-react";
import { motion, AnimatePresence, type Variants } from "framer-motion";

// Mock data for demonstration purposes. In a real application, this would come from an API.
const mockAusschreibungen = [
  {
    id: 1,
    titel: "Neubau einer Kindertagesstätte",
    ort: "München",
    firma: "Stadtwerke München",
    datum: "20. Juli 2025",
  },
  {
    id: 2,
    titel: "IT-Infrastruktur für Schulzentrum",
    ort: "Berlin",
    firma: "Senatsverwaltung für Bildung",
    datum: "18. Juli 2025",
  },
  {
    id: 3,
    titel: "Sanierung der A8, Abschnitt Leonberg",
    ort: "Stuttgart",
    firma: "Autobahn GmbH des Bundes",
    datum: "15. Juli 2025",
  },
  {
    id: 4,
    titel: "Grünflächenpflege für den Stadtpark",
    ort: "Hamburg",
    firma: "Bezirksamt Hamburg-Nord",
    datum: "12. Juli 2025",
  },
];

// Animation variants for the container element.
const containerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.1, delayChildren: 0.1 },
  },
};

// Animation variants for individual items within the container.
const itemVariants: Variants = {
  hidden: { y: 20, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
    transition: { duration: 0.6, ease: "easeOut" },
  },
};

export function LivePreview() {
  // State to control the blurring overlay.
  const [isBlurred, setIsBlurred] = useState(false);
  // State to track if the component is in the viewport.
  const [isInView, setIsInView] = useState(false);

  // Effect to apply blur after a short delay when the component enters the viewport.
  useEffect(() => {
    if (isInView) {
      const timer = setTimeout(() => {
        setIsBlurred(true);
      }, 500); // 0.5 seconds delay before blurring
      return () => clearTimeout(timer);
    }
  }, [isInView]); // Re-run effect when `isInView` changes.

  return (
    <div id="demo" className="bg-gray-900 py-10 sm:py-16 md:py-24">
      <div className="mx-auto max-w-7xl px-2 sm:px-4 lg:px-8">
        <motion.div
          className="mx-auto max-w-xl text-center md:max-w-2xl"
          initial="hidden"
          whileInView="visible"
          // Callback when the element enters the viewport.
          onViewportEnter={() => setIsInView(true)}
          viewport={{ once: true, amount: 0.2 }}
          variants={containerVariants}
        >
          <motion.h2
            variants={itemVariants}
            className="text-2xl font-bold tracking-tight text-white sm:text-3xl md:text-4xl"
          >
            Live-Vorschau: Finden Sie jetzt Ihren Auftrag
          </motion.h2>
          <motion.p
            variants={itemVariants}
            className="mt-4 text-base leading-7 text-gray-300 sm:mt-6 sm:text-lg sm:leading-8"
          >
            Erhalten Sie einen echten Einblick in unsere Datenbank. Die
            aktuellsten Ausschreibungen, gefiltert für Sie.
          </motion.p>
        </motion.div>

        <motion.div
          className="relative mx-auto mt-10 max-w-2xl rounded-2xl border border-white/10 bg-white/5 shadow-lg sm:mt-14 md:mt-16 md:max-w-4xl md:rounded-3xl"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.1 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <div className="p-4 sm:p-6 md:p-8">
            {/* Search Form */}
            <form
              className="flex flex-col gap-3 sm:grid sm:grid-cols-3 sm:gap-4"
              role="search"
              aria-label="Ausschreibungen durchsuchen"
            >
              <div className="relative">
                <input
                  type="text"
                  placeholder="Stichwort, z.B. 'Architekt'"
                  aria-label="Stichwort"
                  className="w-full rounded-md border-white/10 bg-white/10 py-3 pr-4 pl-10 text-base text-white placeholder-gray-400 shadow-sm focus:border-blue-400 focus:ring-blue-400 focus:outline-none"
                />
                <Search className="pointer-events-none absolute top-1/2 left-3 h-5 w-5 -translate-y-1/2 text-gray-400" />
              </div>
              <div className="relative">
                <input
                  type="text"
                  placeholder="Ort oder PLZ"
                  aria-label="Ort oder PLZ"
                  className="w-full rounded-md border-white/10 bg-white/10 py-3 pr-4 pl-10 text-base text-white placeholder-gray-400 shadow-sm focus:border-blue-400 focus:ring-blue-400 focus:outline-none"
                />
                <MapPin className="pointer-events-none absolute top-1/2 left-3 h-5 w-5 -translate-y-1/2 text-gray-400" />
              </div>
              <button
                type="submit"
                className="w-full rounded-md bg-blue-600 px-4 py-3 text-base font-semibold text-white shadow-sm transition-colors hover:bg-blue-500 focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 focus:outline-none"
              >
                Suche starten
              </button>
            </form>
          </div>

          {/* Results Table with Blur Effect */}
          <div className="relative mt-2 border-t border-white/10 sm:mt-4">
            <div className="divide-y divide-white/10">
              {mockAusschreibungen.map((item) => (
                <div
                  key={item.id}
                  className="flex flex-col gap-2 p-4 sm:grid sm:grid-cols-12 sm:gap-x-8 sm:gap-y-4 sm:p-6"
                >
                  <div className="sm:col-span-8">
                    <h3 className="text-base font-semibold text-white sm:text-lg">
                      {item.titel}
                    </h3>
                    <div className="mt-1 flex flex-wrap items-center gap-x-4 gap-y-1 text-xs text-gray-400 sm:text-sm">
                      <div className="flex items-center gap-x-1">
                        <Building className="h-4 w-4" />
                        <span>{item.firma}</span>
                      </div>
                      <div className="flex items-center gap-x-1">
                        <MapPin className="h-4 w-4" />
                        <span>{item.ort}</span>
                      </div>
                      <div className="flex items-center gap-x-1">
                        <Calendar className="h-4 w-4" />
                        <span>{item.datum}</span>
                      </div>
                    </div>
                  </div>
                  <div className="mt-2 sm:col-span-4 sm:mt-0 sm:text-right">
                    <span className="inline-flex items-center rounded-md bg-green-500/10 px-2.5 py-1 text-xs font-medium text-green-400 sm:text-sm">
                      Verfügbar
                    </span>
                  </div>
                </div>
              ))}
            </div>

            <AnimatePresence>
              {/* Blurring overlay that appears after a delay, prompting user to register. */}
              {isBlurred && (
                <motion.div
                  className="absolute inset-0 flex flex-col items-center justify-center bg-gray-900/80 px-4 backdrop-blur-md"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 1.0, ease: "easeInOut" }}
                >
                  <div className="max-w-xs text-center sm:max-w-md">
                    <h3 className="text-lg font-bold text-white sm:text-2xl">
                      Sehen Sie alle Details und 5.000+ weitere Aufträge
                    </h3>
                    <p className="mt-2 text-sm text-gray-300 sm:text-base">
                      Registrieren Sie sich kostenlos, um vollen Zugriff zu
                      erhalten.
                    </p>
                    <Link
                      href="/app"
                      className="mt-6 inline-flex w-full items-center justify-center gap-x-2 rounded-md bg-blue-600 px-4 py-3 text-base font-semibold text-white shadow-lg transition-transform hover:scale-105 focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 focus:outline-none sm:w-auto sm:px-6"
                    >
                      Alle Ausschreibungen ansehen
                      <ArrowRight className="h-5 w-5" />
                    </Link>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
