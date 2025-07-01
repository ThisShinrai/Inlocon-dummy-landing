"use client";

import { motion } from "framer-motion";

export default function DatenschutzPage() {
  return (
    <div className="bg-gray-900 text-white min-h-screen">
      <div className="mx-auto max-w-7xl px-6 lg:px-8 pt-32 py-24 sm:py-32">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <h1 className="text-4xl font-bold tracking-tight sm:text-6xl">Datenschutzerklärung</h1>
          <div className="mt-10 text-gray-300">
            <h2 className="text-2xl font-bold">1. Datenschutz auf einen Blick</h2>
            <h3 className="mt-4 text-xl font-bold">Allgemeine Hinweise</h3>
            <p className="mt-2">Die folgenden Hinweise geben einen einfachen Überblick darüber, was mit Ihren personenbezogenen Daten passiert, wenn Sie unsere Website besuchen. Personenbezogene Daten sind alle Daten, mit denen Sie persönlich identifiziert werden können.</p>
            <h3 className="mt-4 text-xl font-bold">Datenerfassung auf unserer Website</h3>
            <p className="mt-2">Die Datenverarbeitung auf dieser Website erfolgt durch den Websitebetreiber. Dessen Kontaktdaten können Sie dem Impressum dieser Datenschutzerklärung entnehmen.</p>
            <h2 className="mt-8 text-2xl font-bold">2. Hosting und Content Delivery Networks (CDN)</h2>
            <h3 className="mt-4 text-xl font-bold">Externes Hosting</h3>
            <p className="mt-2">Diese Website wird bei einem externen Dienstleister gehostet (Hoster). Die personenbezogenen Daten, die auf dieser Website erfasst werden, werden auf den Servern des Hosters gespeichert. Hierbei kann es sich v. a. um IP-Adressen, Kontaktanfragen, Metadaten und Kommunikationsdaten, Vertragsdaten, Kontaktdaten, Namen, Websitezugriffe und sonstige Daten, die über eine Website generiert werden, handeln.</p>
            <p className="mt-2">Der Einsatz des Hosters erfolgt zum Zwecke der Vertragserfüllung gegenüber unseren potenziellen und bestehenden Kunden (Art. 6 Abs. 1 lit. b DSGVO) und im Interesse einer sicheren, schnellen und effizienten Bereitstellung unseres Online-Angebots durch einen professionellen Anbieter (Art. 6 Abs. 1 lit. f DSGVO). Sofern eine entsprechende Einwilligung abgefragt wurde, erfolgt die Verarbeitung ausschließlich auf Grundlage von Art. 6 Abs. 1 lit. a DSGVO und § 25 Abs. 1 TTDSG, soweit die Einwilligung die Speicherung von Cookies oder den Zugriff auf Informationen im Endgerät des Nutzers (z. B. Device-Fingerprinting) im Sinne des TTDSG umfasst. Die Einwilligung ist jederzeit widerrufbar.</p>
            <p className="mt-2">Unser Hoster wird Ihre Daten nur insoweit verarbeiten, wie dies zur Erfüllung seiner Leistungspflichten erforderlich ist und unsere Weisungen bzgl. dieser Daten befolgen.</p>
            <p className="mt-2">Wir setzen folgenden Hoster ein:</p>
            <p className="mt-2">[Name und Adresse des Hosters]</p>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
