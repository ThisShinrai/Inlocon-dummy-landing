"use client";

import { motion } from "framer-motion";

export default function UeberUnsPage() {
  return (
    <div className="bg-gray-900 text-white min-h-screen">
      <div className="mx-auto max-w-7xl px-6 lg:px-8 pt-32 py-24 sm:py-32">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <h1 className="text-4xl font-bold tracking-tight sm:text-6xl">Über Uns</h1>
          <p className="mt-6 text-lg leading-8 text-gray-300">
            Hier erfahren Sie mehr über Inlocon, unsere Mission und das Team hinter der Plattform.
          </p>
          <div className="mt-10">
            <h2 className="text-2xl font-bold">Unsere Mission</h2>
            <p className="mt-4 text-gray-400">
              Wir haben es uns zur Aufgabe gemacht, die Vergabe öffentlicher Aufträge für Unternehmen jeder Größe zugänglich und transparent zu machen. Wir glauben, dass jeder die Chance haben sollte, am öffentlichen Sektor teilzuhaben und von den damit verbundenen Möglichkeiten zu profitieren.
            </p>
            <h2 className="mt-8 text-2xl font-bold">Unser Team</h2>
            <p className="mt-4 text-gray-400">
              Wir sind ein Team von erfahrenen Entwicklern, Designern und Branchenexperten, die sich mit Leidenschaft für die Digitalisierung des öffentlichen Auftragswesens einsetzen. Gemeinsam arbeiten wir daran, Inlocon zur führenden Plattform für öffentliche Ausschreibungen in Deutschland zu machen.
            </p>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
