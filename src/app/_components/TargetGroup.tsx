"use client";

import Link from "next/link";
import Image from "next/image";
import { motion, type Variants } from "framer-motion";

// Array defining different target groups with their details and associated images.
const targetGroups = [
  {
    name: "Architekten & Planer",
    description:
      "Finden Sie passende Projekte und Ausschreibungen für Ihre Planungsleistungen.",
    href: "#",
    imageUrl: "/images/thisisengineering-BU8lpW2Bn30-unsplash.jpg",
  },
  {
    name: "Dienstleister & Ausführende",
    description:
      "Erhalten Sie Zugang zu Aufträgen für Handwerk, Beratung und weitere Services.",
    href: "#",
    imageUrl: "/images/pexels-tima-miroshnichenko-6474134.jpg",
  },
  {
    name: "Hersteller & Händler",
    description:
      "Positionieren Sie Ihre Produkte und Materialien in den richtigen Bauvorhaben.",
    href: "#",
    imageUrl: "/images/marek-studzinski-dfJVFvTEmJk-unsplash.jpg",
  },
  {
    name: "Bauherren & Auftraggeber",
    description:
      "Behalten Sie den Überblick über den Markt und finden Sie die richtigen Partner.",
    href: "#",
    imageUrl: "/images/pexels-rquiros-2219024.jpg",
  },
];

// Animation variants for the main container of the section.
const containerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.2, delayChildren: 0.1 }, // Stagger the animation of child elements.
  },
};

// Animation variants for individual target group items.
const itemVariants: Variants = {
  hidden: { y: 20, opacity: 0 }, // Initial state: slightly below and invisible.
  visible: {
    y: 0,
    opacity: 1,
    transition: { duration: 0.6, ease: "easeOut" }, // Animation duration and easing.
  },
};

export function TargetGroup() {
  return (
    <section id="zielgruppen" className="bg-white py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <motion.div
          className="mx-auto max-w-2xl text-center"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          variants={containerVariants}
        >
          <motion.h2
            variants={itemVariants}
            className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl"
          >
            Für jede Rolle die passende Lösung
          </motion.h2>
          <motion.p
            variants={itemVariants}
            className="mt-6 text-lg leading-8 text-gray-600"
          >
            Egal ob Sie Aufträge suchen oder vergeben – Inlocon ist die zentrale
            Plattform für alle Akteure der Baubranche.
          </motion.p>
        </motion.div>
        <motion.div
          className="mx-auto mt-16 grid max-w-2xl grid-cols-1 gap-x-8 gap-y-12 sm:mt-20 md:grid-cols-2 lg:mx-0 lg:max-w-none lg:grid-cols-4"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={containerVariants}
        >
          {targetGroups.map((group) => (
            <motion.div
              key={group.name}
              variants={itemVariants}
              className="group relative flex flex-col items-start"
            >
              <div className="relative w-full">
                <Image
                  src={group.imageUrl}
                  alt={`Bild, das die Zielgruppe ${group.name} repräsentiert.`}
                  width={400}
                  height={300}
                  className="aspect-[16/10] w-full rounded-2xl object-cover shadow-lg transition-transform duration-300 ease-in-out group-hover:scale-105"
                />
                <div className="absolute inset-0 rounded-2xl ring-1 ring-gray-900/10 ring-inset" />
              </div>
              <div className="mt-6 max-w-xl">
                <h3 className="text-lg leading-6 font-semibold text-gray-900">
                  <Link href={group.href}>
                    <span className="absolute inset-0" />
                    {group.name}
                  </Link>
                </h3>
                <p className="mt-2 text-sm leading-6 text-gray-600">
                  {group.description}
                </p>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
