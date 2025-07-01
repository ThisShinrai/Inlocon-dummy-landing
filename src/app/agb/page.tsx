"use client";

import { motion } from "framer-motion";

export default function AGBPage() {
  return (
    <div className="bg-gray-900 text-white min-h-screen">
      <div className="mx-auto max-w-7xl px-6 lg:px-8 pt-32 py-24 sm:py-32">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <h1 className="text-4xl font-bold tracking-tight sm:text-6xl">Allgemeine Geschäftsbedingungen (AGB)</h1>
          <div className="mt-10 text-gray-300">
            <h2 className="text-2xl font-bold">1. Geltungsbereich</h2>
            <p className="mt-2">Diese Allgemeinen Geschäftsbedingungen (nachfolgend „AGB“) der Inlocon AG (nachfolgend „Anbieter“) gelten für alle Verträge, die ein Kunde (nachfolgend „Kunde“) mit dem Anbieter hinsichtlich der vom Anbieter auf seiner Website dargestellten Waren und/oder Leistungen abschließt. Hiermit wird der Einbeziehung eigener Bedingungen des Kunden widersprochen, es sei denn, es ist etwas anderes vereinbart.</p>
            <h2 className="mt-8 text-2xl font-bold">2. Vertragsschluss</h2>
            <p className="mt-2">Die auf der Website des Anbieters dargestellten Leistungen stellen keine verbindlichen Angebote seitens des Anbieters dar, sondern dienen zur Abgabe eines verbindlichen Angebots durch den Kunden.</p>
            <p className="mt-2">Der Kunde kann das Angebot über das auf der Website des Anbieters integrierte Online-Bestellformular abgeben. Dabei gibt der Kunde, nachdem er die ausgewählten Leistungen in den virtuellen Warenkorb gelegt und den elektronischen Bestellprozess durchlaufen hat, durch Klicken des den Bestellvorgang abschließenden Buttons ein rechtlich verbindliches Vertragsangebot in Bezug auf die im Warenkorb enthaltenen Leistungen ab.</p>
            <h2 className="mt-8 text-2xl font-bold">3. Preise und Zahlungsbedingungen</h2>
            <p className="mt-2">Sofern sich aus der Produktbeschreibung des Anbieters nichts anderes ergibt, handelt es sich bei den angegebenen Preisen um Gesamtpreise, die die gesetzliche Umsatzsteuer enthalten.</p>
            <p className="mt-2">Die Zahlungsmöglichkeiten werden dem Kunden im Online-Shop des Anbieters mitgeteilt.</p>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
