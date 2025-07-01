"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import { motion, AnimatePresence, type Variants } from "framer-motion";

const testimonials = [
  {
    body: "Inlocon hat unsere Akquise revolutioniert. Wir finden jetzt viel schneller passende Ausschreibungen und sparen dadurch enorm viel Zeit und Ressourcen.",
    author: {
      name: "Max Mustermann",
      handle: "Geschäftsführer, M-Bau GmbH",
      imageUrl: "/images/pexels-divinetechygirl-1181715.jpg",
    },
  },
  {
    body: "Die Plattform ist unglaublich intuitiv und die Qualität der Ausschreibungen ist erstklassig. Ein unverzichtbares Tool für jedes Architekturbüro.",
    author: {
      name: "Sabine Architektin",
      handle: "Inhaberin, Planwerk Architekten",
      imageUrl: "/images/pexels-divinetechygirl-1181715.jpg",
    },
  },
  {
    body: "Dank Inlocon haben wir Zugang zu Projekten, die wir sonst nie gefunden hätten. Der Support ist schnell und kompetent. Klare Empfehlung!",
    author: {
      name: "Jürgen Planer",
      handle: "Projektleiter, Ingenieurbüro Innovativ",
      imageUrl: "/images/pexels-canvastudio-3277806.jpg",
    },
  },
  {
    body: "Die Genauigkeit der Suchergebnisse ist beeindruckend. Wir verschwenden keine Zeit mehr mit irrelevanten Angeboten.",
    author: {
      name: "Anna Schmidt",
      handle: "Leitung Einkauf, S-Technik AG",
      imageUrl: "/images/pexels-polina-zimmerman-3747446.jpg",
    },
  },
];

const containerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.3, delayChildren: 0.2 },
  },
};



const testimonialVariants: Variants = {
  enter: {
    opacity: 0,
  },
  center: {
    opacity: 1,
  },
  exit: {
    opacity: 0,
  },
};

export function Testimonials() {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const timer = setTimeout(() => {
      let next = index + 1;
      if (next === testimonials.length) {
        next = 0;
      }
      setIndex(next);
    }, 7000); // 7 Sekunden

    return () => clearTimeout(timer);
  }, [index]);

  // Defensivprogrammierung: Sicherstellen, dass die Testimonials-Liste existiert und nicht leer ist.
  if (!testimonials || testimonials.length === 0) {
    return null;
  }

  const activeTestimonial = testimonials[index];

  // Zusätzliche Sicherheit, falls der Index aus irgendeinem Grund nicht synchron ist.
  if (!activeTestimonial) {
    return null;
  }

  return (
    <section className="bg-white py-14 sm:py-12 md:py-16">
      <motion.div
        className="mx-auto flex w-full max-w-md flex-col justify-center px-2 sm:max-w-xl sm:px-4 md:max-w-2xl lg:max-w-4xl lg:px-8"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        variants={containerVariants}
      >
        <div className="relative flex min-h-[160px] flex-col items-center justify-center sm:min-h-[200px] md:min-h-[220px]">
          {/* SVG-Deko nur ab sm sichtbar */}
          <svg
            className="absolute -top-4 -left-4 hidden h-12 w-12 text-gray-100 sm:block md:h-20 md:w-20"
            fill="currentColor"
            viewBox="0 0 200 200"
            aria-hidden="true"
          >
            <path
              transform="translate(0, 200) scale(1, -1)"
              d="M16.5 106.3C21.8 86.8 35.2 71.8 52.8 65.5C70.5 59.2 92.5 61.5 107.5 71.8C122.5 82.2 130.5 100.8 135.2 119.5C140 138.2 141.5 157.2 133.5 172.5C125.5 187.8 108.2 199.5 90.5 199.5C72.8 199.5 54.8 187.8 40.8 175.5C26.8 163.2 16.8 150.2 11.2 134.5C5.5 118.8 4.2 100.2 7.2 83.5C10.2 66.8 17.8 52.2 29.8 41.5C41.8 30.8 58.2 24.2 75.2 24.2C92.2 24.2 109.8 30.8 122.5 41.5C135.2 52.2 143.2 66.8 144.2 83.5"
              stroke="currentColor"
              strokeWidth="1"
              fill="none"
            />
          </svg>
          <AnimatePresence mode="wait">
            <motion.figure
              key={index}
              className="absolute inset-0 flex w-full flex-col items-center justify-center"
              variants={testimonialVariants}
              initial="enter"
              animate="center"
              exit="exit"
              transition={{ opacity: { duration: 0.5 } }}
            >
              <blockquote className="mt-0 mb-0 px-2 text-center text-lg leading-snug font-semibold tracking-tight text-gray-900 sm:px-0 sm:text-xl sm:leading-8 md:text-2xl">
                <p>“{activeTestimonial.body}”</p>
              </blockquote>
              <figcaption className="mt-4 mb-0 flex w-full flex-col items-center sm:mt-6">
                <div className="flex flex-col items-center justify-center gap-2 sm:flex-row sm:gap-4">
                  <Image
                    className="h-10 w-10 rounded-full border border-gray-200 object-cover shadow-sm sm:h-14 sm:w-14"
                    src={activeTestimonial.author.imageUrl}
                    alt={`Foto von ${activeTestimonial.author.name}`}
                    width={56}
                    height={56}
                  />
                  <div className="text-center sm:text-left">
                    <div className="text-base font-semibold text-gray-900 sm:text-lg">
                      {activeTestimonial.author.name}
                    </div>
                    <div className="text-xs text-gray-600 sm:text-sm">
                      {activeTestimonial.author.handle}
                    </div>
                  </div>
                </div>
              </figcaption>
            </motion.figure>
          </AnimatePresence>
        </div>
      </motion.div>
    </section>
  );
}
