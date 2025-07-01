"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import { Search, MapPin, Building, Calendar } from "lucide-react";
import { mockTenders } from "~/data/mockData";

export default function AppOverviewPage() {
  const [searchTerm, setSearchTerm] = useState("");
  const [locationFilter, setLocationFilter] = useState("");

  const filteredTenders = mockTenders.filter((tender) => {
    const matchesSearchTerm = tender.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                            tender.serviceDescription.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesLocation = tender.location.toLowerCase().includes(locationFilter.toLowerCase());
    return matchesSearchTerm && matchesLocation;
  });

  return (
    <div className="bg-gray-900 text-white min-h-screen pt-32 pb-16">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-4xl font-bold tracking-tight sm:text-6xl mb-8"
        >
          Alle Ausschreibungen
        </motion.h1>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="bg-white/5 p-6 rounded-lg shadow-lg mb-8"
        >
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div className="relative">
              <input
                type="text"
                placeholder="Stichwortsuche (Titel, Beschreibung)"
                className="w-full rounded-md border-white/10 bg-white/10 py-3 pr-4 pl-10 text-base text-white placeholder-gray-400 shadow-sm focus:border-blue-400 focus:ring-blue-400 focus:outline-none"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
              />
              <Search className="pointer-events-none absolute top-1/2 left-3 h-5 w-5 -translate-y-1/2 text-gray-400" />
            </div>
            <div className="relative">
              <input
                type="text"
                placeholder="Ort"
                className="w-full rounded-md border-white/10 bg-white/10 py-3 pr-4 pl-10 text-base text-white placeholder-gray-400 shadow-sm focus:border-blue-400 focus:ring-blue-400 focus:outline-none"
                value={locationFilter}
                onChange={(e) => setLocationFilter(e.target.value)}
              />
              <MapPin className="pointer-events-none absolute top-1/2 left-3 h-5 w-5 -translate-y-1/2 text-gray-400" />
            </div>
            <button
              type="button"
              className="w-full rounded-md bg-blue-600 px-4 py-3 text-base font-semibold text-white shadow-sm transition-colors hover:bg-blue-500 focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 focus:outline-none"
            >
              Filter anwenden
            </button>
          </div>
        </motion.div>

        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
          {filteredTenders.map((tender) => (
            <motion.div
              key={tender.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="bg-white/5 p-6 rounded-lg shadow-lg border border-white/10 hover:border-blue-500 transition-all duration-200"
            >
              <Link href={`/app/ausschreibung/${tender.id}`}>
                <h2 className="text-xl font-semibold text-white mb-2 hover:text-blue-400 transition-colors">{tender.title}</h2>
                <p className="text-gray-400 text-sm mb-4 line-clamp-3">{tender.subject}</p>
                <div className="flex items-center text-gray-400 text-sm mb-2">
                  <Building className="h-4 w-4 mr-2" />
                  <span>{tender.client.name}</span>
                </div>
                <div className="flex items-center text-gray-400 text-sm mb-2">
                  <MapPin className="h-4 w-4 mr-2" />
                  <span>{tender.location}</span>
                </div>
                <div className="flex items-center text-gray-400 text-sm">
                  <Calendar className="h-4 w-4 mr-2" />
                  <span>{tender.publishDate}</span>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>

        {filteredTenders.length === 0 && (
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="text-center text-gray-400 mt-10 text-lg"
          >
            Keine Ausschreibungen gefunden, die Ihren Kriterien entsprechen.
          </motion.p>
        )}
      </div>
    </div>
  );
}
