"use client";

import { motion } from "framer-motion";
import { DollarSign, Search, Clock } from "lucide-react";

// Array of features to be displayed in the Benefits section.
const features = [
  {
    name: "Passende Aufträge finden",
    description:
      "Unser intelligenter Algorithmus filtert präzise die Ausschreibungen, die zu Ihrem Unternehmen passen.",
    icon: Search,
  },
  {
    name: "Zeit und Ressourcen sparen",
    description:
      "Wir liefern relevante Aufträge direkt in Ihr Postfach, damit Sie sich auf Ihr Kerngeschäft konzentrieren können.",
    icon: Clock,
  },
  {
    name: "Umsatz nachhaltig steigern",
    description:
      "Erhalten Sie Zugang zu qualifizierten Leads aus dem öffentlichen Sektor und sichern Sie sich Ihren nächsten Großauftrag.",
    icon: DollarSign,
  },
];

// Animation variants for the main container of the section.
const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2, // Stagger the animation of child elements.
    },
  },
};

// Animation variants for individual feature items.
const itemVariants = {
  hidden: { y: 20, opacity: 0 }, // Initial state: slightly below and invisible.
  visible: {
    y: 0,
    opacity: 1,
    transition: {
      duration: 0.5, // Animation duration.
    },
  },
};

export function Benefits() {
  return (
    <div id="power-proof" className="bg-gray-900 py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <motion.div
          className="mx-auto max-w-2xl lg:text-center"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
          variants={containerVariants}
        >
          <motion.h2
            variants={itemVariants}
            className="text-base leading-7 font-semibold text-blue-400"
          >
            Ihr schneller Weg zum Erfolg
          </motion.h2>
          <motion.p
            variants={itemVariants}
            className="mt-2 text-3xl font-bold tracking-tight text-white sm:text-4xl"
          >
            Alles, was Sie für die öffentliche Auftragsvergabe brauchen
          </motion.p>
          <motion.p
            variants={itemVariants}
            className="mt-6 text-lg leading-8 text-gray-300"
          >
            Wir nehmen Ihnen die Komplexität ab, damit Sie sich auf das
            konzentrieren können, was Sie am besten können: exzellente Arbeit
            leisten.
          </motion.p>
        </motion.div>
        <motion.div
          className="mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-none"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
          variants={containerVariants}
        >
          <dl className="grid max-w-xl grid-cols-1 gap-x-8 gap-y-16 lg:max-w-none lg:grid-cols-3">
            {features.map((feature) => (
              <motion.div
                key={feature.name}
                className="flex flex-col rounded-2xl bg-white/5 p-6 ring-1 ring-white/10 transition-all duration-300 hover:bg-white/10 hover:ring-white/20"
                variants={itemVariants}
              >
                <dt className="flex items-center gap-x-3 text-base leading-7 font-semibold text-white">
                  <feature.icon
                    className="h-8 w-8 flex-none text-blue-400"
                    aria-hidden="true"
                  />
                  {feature.name}
                </dt>
                <dd className="mt-4 flex flex-auto flex-col text-base leading-7 text-gray-300">
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
