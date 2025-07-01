"use client";

import Link from "next/link";
import { Check, Star, Users, Briefcase } from "lucide-react";
import { motion, type Variants } from "framer-motion";

// Array defining the different pricing tiers and their features.
const tiers = [
  {
    name: "Starter",
    id: "tier-starter",
    href: "/kostenlos-testen",
    price: { monthly: "0€" },
    description:
      "Für Einzelkämpfer und kleine Büros, die einen ersten Einblick gewinnen wollen.",
    features: [
      "Vorschau auf 5 passende Ausschreibungen",
      "Tägliche E-Mail-Benachrichtigungen",
      "Standard Support",
    ],
    icon: Star,
    mostPopular: false,
  },
  {
    name: "Professional",
    id: "tier-pro",
    href: "/kostenlos-testen",
    price: { monthly: "39€" },
    description:
      "Die Komplettlösung für professionelle Unternehmen, die wachsen wollen.",
    features: [
      "Unbegrenzter Zugriff auf alle Ausschreibungen",
      "Datenexport (PDF, CSV)",
      "Projekte und Favoriten speichern",
      "Priorisierter Kundenservice",
      "Vollständiger Zugriff auf Kontaktdaten",
      "Erweiterte Filteroptionen",
    ],
    icon: Briefcase,
    mostPopular: true,
  },
  {
    name: "Enterprise",
    id: "tier-enterprise",
    href: "#kontakt",
    price: "Individuell",
    description:
      "Maßgeschneidert für große Teams mit spezifischen Anforderungen.",
    features: [
      "Alle Vorteile des Professional-Plans",
      "Team-Management für mehrere Nutzer",
      "Dedizierte API-Schnittstelle",
      "Persönliches Onboarding & Support",
      "Individuelle Datenintegrationen",
    ],
    icon: Users,
    mostPopular: false,
  },
];

// Helper function to conditionally join CSS class names.
function classNames(...classes: (string | boolean)[]) {
  return classes.filter(Boolean).join(" ");
}

// Animation variants for the main container of the section.
const containerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.2 }, // Stagger the animation of child elements.
  },
};

// Animation variants for individual items within the container.
const itemVariants: Variants = {
  hidden: { y: 20, opacity: 0 }, // Initial state: slightly below and invisible.
  visible: {
    y: 0,
    opacity: 1,
    transition: { duration: 0.5, ease: "easeOut" }, // Animation duration and easing.
  },
};

export function Pricing() {
  return (
    <div id="preise" className="bg-gray-900 py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <motion.div
          className="mx-auto max-w-4xl text-center"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
          variants={containerVariants}
        >
          <motion.h2
            variants={itemVariants}
            className="text-base leading-7 font-semibold text-blue-400"
          >
            Faire Preise, unschätzbarer Wert
          </motion.h2>
          <motion.p
            variants={itemVariants}
            className="mt-2 text-4xl font-bold tracking-tight text-white sm:text-5xl"
          >
            Der perfekte Plan für Ihr Wachstum
          </motion.p>
        </motion.div>
        <motion.p
          variants={itemVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
          className="mx-auto mt-6 max-w-2xl text-center text-lg leading-8 text-gray-300"
        >
          Investieren Sie in Ihre Zukunft. Alle Pläne sind flexibel und
          transparent.
        </motion.p>

        <div className="isolate mx-auto mt-16 grid max-w-md grid-cols-1 gap-8 lg:mx-0 lg:max-w-none lg:grid-cols-3">
          {tiers.map((tier) => (
            <motion.div
              key={tier.id}
              variants={itemVariants}
              className={classNames(
                tier.mostPopular
                  ? "bg-blue-600 ring-2 ring-blue-500"
                  : "bg-white/5 ring-1 ring-white/10",
                "rounded-3xl p-8 transition-all duration-300 hover:ring-blue-400",
              )}
            >
              <div className="flex items-center justify-between gap-x-4">
                <h3
                  className={classNames(
                    tier.mostPopular ? "text-white" : "text-white",
                    "text-2xl leading-8 font-semibold",
                  )}
                >
                  {tier.name}
                </h3>
                {tier.mostPopular ? (
                  <p className="rounded-full bg-white/10 px-3 py-1 text-xs leading-5 font-semibold text-white">
                    Beliebt
                  </p>
                ) : null}
              </div>
              <p
                className={classNames(
                  tier.mostPopular ? "text-white" : "text-gray-300",
                  "mt-4 text-sm leading-6",
                )}
              >
                {tier.description}
              </p>
              <p className="mt-6 flex items-baseline gap-x-1">
                {typeof tier.price === "string" ? (
                  <span
                    className={classNames(
                      tier.mostPopular ? "text-white" : "text-white",
                      "text-4xl font-bold tracking-tight",
                    )}
                  >
                    {tier.price}
                  </span>
                ) : (
                  <>
                    <span
                      className={classNames(
                        tier.mostPopular ? "text-white" : "text-white",
                        "text-4xl font-bold tracking-tight",
                      )}
                    >
                      {tier.price.monthly}
                    </span>
                    <span
                      className={classNames(
                        tier.mostPopular ? "text-blue-200" : "text-gray-400",
                        "text-sm leading-6 font-semibold",
                      )}
                    >
                      /Monat
                    </span>
                  </>
                )}
              </p>
              <Link
                href={tier.href}
                aria-describedby={tier.id}
                className={classNames(
                  tier.mostPopular
                    ? "bg-white text-blue-600 shadow-sm hover:bg-blue-50 focus-visible:outline-white"
                    : "bg-white/10 text-white hover:bg-white/20 focus-visible:outline-white",
                  "mt-6 block rounded-md px-3 py-2 text-center text-sm leading-6 font-semibold focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2",
                )}
              >
                {tier.name === "Enterprise"
                  ? "Kontakt aufnehmen"
                  : "Plan wählen"}
              </Link>
              <ul
                role="list"
                className={classNames(
                  tier.mostPopular ? "text-white" : "text-gray-300",
                  "mt-8 space-y-3 text-sm leading-6",
                )}
              >
                {tier.features.map((feature) => (
                  <li key={feature} className="flex gap-x-3">
                    <Check
                      className={classNames(
                        tier.mostPopular ? "text-white" : "text-blue-400",
                        "h-6 w-5 flex-none",
                      )}
                      aria-hidden="true"
                    />
                    {feature}
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}

