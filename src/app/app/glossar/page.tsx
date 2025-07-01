"use client";

import { motion } from "framer-motion";
import { glossaryTerms } from "~/data/mockData";

export default function GlossaryPage() {
  return (
    <div className="bg-gray-900 text-white min-h-screen pt-32 pb-16">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-4xl font-bold tracking-tight sm:text-6xl mb-8"
        >
          Glossar
        </motion.h1>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {glossaryTerms.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-white/5 p-6 rounded-lg shadow-lg border border-white/10"
            >
              <h2 className="text-2xl font-bold text-blue-400 mb-2">{item.term}</h2>
              <p className="text-gray-300 leading-relaxed">{item.definition}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}
