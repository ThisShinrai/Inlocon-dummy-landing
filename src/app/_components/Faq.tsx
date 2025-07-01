"use client";

import { useState } from "react";
import { PlusIcon } from "@heroicons/react/24/outline";
import { motion, AnimatePresence, type Variants } from "framer-motion";

const faqs = [
  {
    id: 1,
    question: "Wie aktuell sind die Daten in Inlocon?",
    answer:
      "Unsere Datenbank wird mehrmals täglich mit tausenden neuen Ausschreibungen aus allen relevanten öffentlichen und privaten Quellen in Deutschland aktualisiert. Sie arbeiten immer mit den neuesten Daten.",
  },
  {
    id: 2,
    question: "Kann ich Inlocon kostenlos testen?",
    answer:
      "Ja, Sie können Inlocon 14 Tage lang uneingeschränkt und kostenlos testen. In der Testphase stehen Ihnen alle Funktionen des Professional-Plans zur Verfügung. Es ist keine Kündigung notwendig.",
  },
  {
    id: 3,
    question: "Welche Branchen werden abgedeckt?",
    answer:
      "Wir decken alle Branchen ab, von Bau und Handwerk über IT-Dienstleistungen bis hin zu Lieferungen und Beratungsleistungen. Dank unserer detaillierten Filter finden Sie genau die Aufträge, die zu Ihrem Geschäft passen.",
  },
  {
    id: 4,
    question: "Aus welchen Quellen stammen die Ausschreibungen?",
    answer:
      "Wir aggregieren Daten von hunderten offiziellen Vergabeplattformen von Bund, Ländern und Kommunen sowie von öffentlichen Unternehmen und Sektorenauftraggebern. Alles an einem Ort.",
  },
  {
    id: 5,
    question: "Gibt es eine Kündigungsfrist?",
    answer:
      "Nein. Unsere Abonnements sind flexibel und monatlich kündbar. Sie haben die volle Kontrolle und gehen keine langfristigen Verpflichtungen ein.",
  },
  {
    id: 6,
    question: "Kann ich Inlocon im Team nutzen?",
    answer:
      "Ja, unser Enterprise-Plan bietet umfassende Team-Management-Funktionen, inklusive individueller Zugänge und Rollenverteilung. Sprechen Sie uns für eine maßgeschneiderte Lösung an.",
  },
  {
    id: 7,
    question: "Bieten Sie Support beim Einstieg an?",
    answer:
      "Absolut. Unser Enterprise-Plan beinhaltet ein persönliches Onboarding. Aber auch für alle anderen Pläne steht unser Kundenservice bereit, um Ihnen den Einstieg so einfach wie möglich zu machen.",
  },
];



const itemVariants: Variants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
      ease: "easeOut",
    },
  },
};

const FaqItem = ({ faq }: { faq: (typeof faqs)[0] }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <motion.div
      layout
      className="group overflow-hidden rounded-xl bg-white transition-colors"
      transition={{
        layout: { type: "tween", duration: 0.5, ease: [0.4, 0, 0.2, 1] },
      }}
    >
      <motion.dt layout="position">
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="flex w-full items-center justify-between px-2 py-5 text-left text-gray-900 transition-colors group-hover:bg-gray-50 hover:bg-gray-50 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-400 sm:px-4 sm:py-6"
          aria-expanded={isOpen}
          aria-controls={`faq-answer-${faq.id}`}
        >
          <span className="text-base leading-6 font-semibold sm:text-lg sm:leading-7">
            {faq.question}
          </span>
          <motion.span
            className="ml-4 flex h-6 items-center"
            animate={{ rotate: isOpen ? 45 : 0 }}
            transition={{ duration: 0.4, ease: [0.4, 0, 0.2, 1] }}
          >
            <PlusIcon className="h-6 w-6 text-black" aria-hidden="true" />
          </motion.span>
        </button>
      </motion.dt>
      <AnimatePresence initial={false}>
        {isOpen && (
          <motion.dd
            className="px-2 pb-5 sm:px-4 sm:pb-6"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ opacity: { duration: 0.15 } }}
            id={`faq-answer-${faq.id}`}
            aria-live="polite"
          >
            <div className="pt-3 text-sm leading-6 text-gray-700 sm:pt-4 sm:text-base sm:leading-7">
              {faq.answer}
            </div>
          </motion.dd>
        )}
      </AnimatePresence>
    </motion.div>
  );
};

export function Faq() {
  return (
    <div id="faq" className="bg-white py-10 sm:py-16 md:py-24">
      <div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-4xl text-center">
          <motion.h2
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.5 }}
            variants={itemVariants}
            className="text-base leading-7 font-semibold text-blue-600"
          >
            Fragen & Antworten
          </motion.h2>
          <motion.p
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.5 }}
            variants={itemVariants}
            className="mt-2 text-xl font-bold tracking-tight text-gray-900 sm:text-3xl sm:text-5xl"
          >
            Alles, was Sie wissen müssen
          </motion.p>
        </div>
        <div className="mx-auto mt-8 max-w-4xl sm:mt-14">
          <dl className="space-y-6 sm:space-y-8">
            {faqs.map((faq) => (
              <FaqItem key={faq.id} faq={faq} />
            ))}
          </dl>
        </div>
      </div>
    </div>
  );
}
