"use client";

import { motion, type Variants } from "framer-motion";
import { Building, Mail, Phone } from "lucide-react";

const containerVariants: Variants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.1,
    },
  },
};

const itemVariants: Variants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: "easeOut" },
  },
};

export function Contact() {
  return (
    <div id="kontakt" className="relative isolate bg-gray-900">
      <div className="mx-auto grid max-w-7xl grid-cols-1 lg:grid-cols-2 lg:pt-32">
        <motion.div
          className="relative px-6 pt-16 pb-8 sm:pt-24 lg:static lg:px-8 lg:py-16"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          variants={containerVariants}
        >
          <div className="mx-auto max-w-xl lg:mx-0 lg:max-w-lg">
            <motion.h2
              variants={itemVariants}
              className="text-3xl font-bold tracking-tight text-white"
            >
              Nehmen Sie Kontakt auf
            </motion.h2>
            <motion.p
              variants={itemVariants}
              className="mt-6 text-lg leading-8 text-gray-300"
            >
              Unser Team ist bereit, Ihre Fragen zu beantworten, eine Demo zu
              planen oder individuelle Enterprise-Lösungen zu besprechen. Wir
              freuen uns darauf, von Ihnen zu hören.
            </motion.p>
            <dl className="mt-10 space-y-4 text-base leading-7 text-gray-300">
              <motion.div variants={itemVariants} className="flex gap-x-4">
                <dt className="flex-none">
                  <span className="sr-only">Adresse</span>
                  <Building
                    className="h-7 w-6 text-gray-400"
                    aria-hidden="true"
                  />
                </dt>
                <dd>Musterstraße 1, 12345 Musterstadt, Deutschland</dd>
              </motion.div>
              <motion.div variants={itemVariants} className="flex gap-x-4">
                <dt className="flex-none">
                  <span className="sr-only">Telefon</span>
                  <Phone className="h-7 w-6 text-gray-400" aria-hidden="true" />
                </dt>
                <dd>
                  <a className="hover:text-white" href="tel:+49123456789">
                    +49 (0) 123 456 789
                  </a>
                </dd>
              </motion.div>
              <motion.div variants={itemVariants} className="flex gap-x-4">
                <dt className="flex-none">
                  <span className="sr-only">E-Mail</span>
                  <Mail className="h-7 w-6 text-gray-400" aria-hidden="true" />
                </dt>
                <dd>
                  <a
                    className="hover:text-white"
                    href="mailto:hallo@inlocon.de"
                  >
                    hallo@inlocon.de
                  </a>
                </dd>
              </motion.div>
            </dl>
          </div>
        </motion.div>

        <motion.form
          action="#"
          method="POST"
          className="px-6 pt-16 pb-8 sm:pb-12 lg:px-8 lg:py-16"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={containerVariants}
        >
          <div className="mx-auto max-w-xl lg:mr-0 lg:max-w-lg">
            <div className="grid grid-cols-1 gap-x-8 gap-y-6 sm:grid-cols-2">
              <motion.div variants={itemVariants}>
                <label
                  htmlFor="first-name"
                  className="block text-sm leading-6 font-semibold text-white"
                >
                  Vorname
                </label>
                <div className="mt-2.5">
                  <input
                    type="text"
                    name="first-name"
                    id="first-name"
                    autoComplete="given-name"
                    className="block w-full rounded-md border-0 bg-white/5 px-3.5 py-2 text-white shadow-sm ring-1 ring-white/10 ring-inset focus:ring-2 focus:ring-blue-500 focus:ring-inset sm:text-sm sm:leading-6"
                  />
                </div>
              </motion.div>
              <motion.div variants={itemVariants}>
                <label
                  htmlFor="last-name"
                  className="block text-sm leading-6 font-semibold text-white"
                >
                  Nachname
                </label>
                <div className="mt-2.5">
                  <input
                    type="text"
                    name="last-name"
                    id="last-name"
                    autoComplete="family-name"
                    className="block w-full rounded-md border-0 bg-white/5 px-3.5 py-2 text-white shadow-sm ring-1 ring-white/10 ring-inset focus:ring-2 focus:ring-blue-500 focus:ring-inset sm:text-sm sm:leading-6"
                  />
                </div>
              </motion.div>
              <motion.div variants={itemVariants} className="sm:col-span-2">
                <label
                  htmlFor="email"
                  className="block text-sm leading-6 font-semibold text-white"
                >
                  E-Mail
                </label>
                <div className="mt-2.5">
                  <input
                    type="email"
                    name="email"
                    id="email"
                    autoComplete="email"
                    className="block w-full rounded-md border-0 bg-white/5 px-3.5 py-2 text-white shadow-sm ring-1 ring-white/10 ring-inset focus:ring-2 focus:ring-blue-500 focus:ring-inset sm:text-sm sm:leading-6"
                  />
                </div>
              </motion.div>
              <motion.div variants={itemVariants} className="sm:col-span-2">
                <label
                  htmlFor="message"
                  className="block text-sm leading-6 font-semibold text-white"
                >
                  Ihre Nachricht
                </label>
                <div className="mt-2.5">
                  <textarea
                    name="message"
                    id="message"
                    rows={4}
                    className="block w-full rounded-md border-0 bg-white/5 px-3.5 py-2 text-white shadow-sm ring-1 ring-white/10 ring-inset focus:ring-2 focus:ring-blue-500 focus:ring-inset sm:text-sm sm:leading-6"
                    defaultValue={""}
                  />
                </div>
              </motion.div>
              <motion.div
                variants={itemVariants}
                className="flex items-center gap-x-3 sm:col-span-2"
              >
                <input
                  id="privacy-policy"
                  name="privacy-policy"
                  type="checkbox"
                  className="h-4 w-4 rounded border-gray-300 text-blue-600 focus:ring-blue-600"
                />
                <label
                  htmlFor="privacy-policy"
                  className="text-sm leading-6 text-gray-300"
                >
                  Ich stimme der{" "}
                  <a
                    href="#"
                    className="font-semibold text-blue-400 hover:text-blue-300"
                  >
                    Datenschutzerklärung
                  </a>{" "}
                  zu.
                </label>
              </motion.div>
            </div>
            <motion.div
              variants={itemVariants}
              className="mt-8 flex justify-end"
            >
              <button
                type="submit"
                className="rounded-md bg-blue-600 px-6 py-3 text-base font-semibold text-white shadow-lg transition-transform hover:scale-105 focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 focus:outline-none"
              >
                Nachricht senden
              </button>
            </motion.div>
          </div>
        </motion.form>
      </div>
    </div>
  );
}
