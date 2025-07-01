"use client";

import {
  BuildingOffice2Icon,
  MagnifyingGlassIcon,
  DocumentCheckIcon,
} from "@heroicons/react/24/outline";
import { motion, type Variants } from "framer-motion";

const features = [
  {
    name: "1. Branche & Region definieren",
    description:
      "Geben Sie Ihre Branche und die gewünschte Region an, um nur relevante Ausschreibungen zu finden und keine Zeit zu verschwenden.",
    icon: BuildingOffice2Icon,
  },
  {
    name: "2. Passende Aufträge finden",
    description:
      "Nutzen Sie präzise Such- und Filterfunktionen, um die Ergebnisse nach Ihren individuellen Bedürfnissen und Kriterien zu verfeinern.",
    icon: MagnifyingGlassIcon,
  },
  {
    name: "3. Erfolgreich bewerben",
    description:
      "Erhalten Sie alle nötigen Vergabeunterlagen und Informationen, um sich ohne Umwege auf die passenden Aufträge zu bewerben.",
    icon: DocumentCheckIcon,
  },
];

const containerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.2 },
  },
};

const itemVariants: Variants = {
  hidden: { y: 20, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
    transition: { duration: 0.6, ease: "easeOut" },
  },
};

export function HowItWorks() {
  return (
    <div className="bg-gray-900 py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <motion.div
          className="mx-auto max-w-2xl lg:text-center"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          variants={containerVariants}
        >
          <motion.p
            variants={itemVariants}
            className="text-base leading-7 font-semibold text-blue-400"
          >
            Ihr Weg zum Auftrag
          </motion.p>
          <motion.h2
            variants={itemVariants}
            className="mt-2 text-3xl font-bold tracking-tight text-white sm:text-4xl"
          >
            In 3 einfachen Schritten zum Erfolg
          </motion.h2>
          <motion.p
            variants={itemVariants}
            className="mt-6 text-lg leading-8 text-gray-300"
          >
            Unsere Plattform ist darauf ausgelegt, Ihnen den Prozess der
            Auftragssuche so einfach und effizient wie möglich zu gestalten.
          </motion.p>
        </motion.div>
        <motion.div
          className="mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-none"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={containerVariants}
        >
          <dl className="grid max-w-xl grid-cols-1 gap-x-8 gap-y-16 lg:max-w-none lg:grid-cols-3">
            {features.map((feature) => (
              <motion.div
                key={feature.name}
                className="flex flex-col rounded-2xl bg-white/5 p-8 shadow-lg ring-1 ring-white/10 transition-all duration-300 hover:ring-blue-400/50"
                variants={itemVariants}
              >
                <dt className="flex items-center gap-x-3 text-lg leading-7 font-semibold text-white">
                  <feature.icon
                    className="h-8 w-8 flex-none rounded-lg bg-blue-900/30 p-1.5 text-blue-400"
                    aria-hidden="true"
                  />
                  {feature.name}
                </dt>
                <dd className="mt-4 flex flex-auto flex-col text-base leading-7 text-gray-400">
                  <p className="flex-auto">{feature.description}</p>
                </dd>
              </motion.div>
            ))}
          </dl>
        </motion.div>
      </div>
    </div>
  );
}
