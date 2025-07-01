"use client";

import { motion } from "framer-motion";

export default function ImpressumPage() {
  return (
    <div className="bg-gray-900 text-white min-h-screen">
      <div className="mx-auto max-w-7xl px-6 lg:px-8 pt-32 py-24 sm:py-32">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <h1 className="text-4xl font-bold tracking-tight sm:text-6xl">Impressum</h1>
          <div className="mt-10 text-gray-300">
            <p>Inlocon AG</p>
            <p>Musterstraße 1</p>
            <p>12345 Musterstadt</p>
            <p>Deutschland</p>
            <br />
            <p>Vertreten durch:</p>
            <p>Max Mustermann (Vorstand)</p>
            <br />
            <p>Kontakt:</p>
            <p>Telefon: +49 (0) 123 456 789</p>
            <p>E-Mail: hallo@inlocon.de</p>
            <br />
            <p>Registereintrag:</p>
            <p>Eintragung im Handelsregister.</p>
            <p>Registergericht: Amtsgericht Musterstadt</p>
            <p>Registernummer: HRB 12345</p>
            <br />
            <p>Umsatzsteuer-ID:</p>
            <p>Umsatzsteuer-Identifikationsnummer gemäß §27a Umsatzsteuergesetz:</p>
            <p>DE123456789</p>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
