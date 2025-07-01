"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import { useState } from "react";
import { Mail, Lock } from "lucide-react";

export default function LoginPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const [focus, setFocus] = useState<string | null>(null);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setTimeout(() => setLoading(false), 1200);
  };

  return (
    <div className="relative flex min-h-screen items-center justify-center overflow-hidden bg-gray-900">
      {/* Hintergrundbild */}
      <div className="absolute inset-0 -z-10">
        <Image
          src="/images/thisisengineering-BU8lpW2Bn30-unsplash.jpg"
          alt="Professioneller Hintergrund"
          className="h-full w-full scale-105 object-cover object-center blur-md brightness-80"
          layout="fill"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-br from-gray-900/95 via-gray-900/90 to-blue-950/80 md:from-gray-900/90 md:via-gray-900/80 md:to-blue-950/70" />
      </div>
      {/* Dezenter Glow um das Panel */}
      <motion.div
        className="pointer-events-none absolute z-0 h-[260px] w-[260px] rounded-3xl bg-blue-900/20 opacity-40 blur-2xl md:h-[420px] md:w-[420px]"
        initial={{ scale: 0.98, opacity: 0 }}
        animate={{ scale: 1, opacity: 0.4 }}
        transition={{ duration: 1.6, ease: "easeOut" }}
        style={{ top: "50%", left: "50%", transform: "translate(-50%, -50%)" }}
      />
      {/* Login Panel */}
      <motion.div
        className="relative z-10 mx-4 w-full space-y-8 rounded-2xl border border-gray-700 bg-gray-800/95 p-6 shadow-2xl backdrop-blur-lg md:mx-0 md:max-w-md md:bg-gray-800/90 md:p-10"
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
      >
        <div className="flex flex-col items-center">
          <motion.h2
            className="text-center text-2xl font-semibold tracking-tight text-white"
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.15 }}
          >
            Willkommen zurück
          </motion.h2>
          <motion.p
            className="mt-2 text-center text-base font-normal text-gray-300"
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.22 }}
          >
            Melden Sie sich bei Ihrem Inlocon-Konto an
          </motion.p>
        </div>
        <form
          className="mt-6 space-y-5 md:mt-8 md:space-y-6"
          onSubmit={handleSubmit}
        >
          <div className="-space-y-px rounded-md shadow-sm">
            <div className="relative">
              <label htmlFor="email" className="sr-only">
                E-Mail-Adresse
              </label>
              <span className="pointer-events-none absolute top-1/2 left-3 -translate-y-1/2 text-gray-500">
                <motion.span
                  animate={
                    focus === "email"
                      ? { scale: 1.08, color: "#3b82f6" }
                      : { scale: 1, color: "#6b7280" }
                  }
                  transition={{ type: "spring", stiffness: 300, damping: 22 }}
                >
                  <Mail className="h-5 w-5 md:h-4 md:w-4" />
                </motion.span>
              </span>
              <input
                id="email"
                name="email"
                type="email"
                autoComplete="email"
                required
                className="relative block w-full rounded-md border-0 bg-white/5 px-10 py-3 text-base font-medium text-white placeholder-gray-400 shadow-sm ring-1 ring-white/10 transition ring-inset focus:ring-2 focus:ring-blue-500 focus:ring-inset md:px-9 md:py-2 md:text-sm md:leading-6"
                placeholder="E-Mail-Adresse"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                onFocus={() => setFocus("email")}
                onBlur={() => setFocus(null)}
              />
            </div>
            <div className="relative mt-5 md:mt-4">
              <label htmlFor="password" className="sr-only">
                Passwort
              </label>
              <span className="pointer-events-none absolute top-1/2 left-3 -translate-y-1/2 text-gray-500">
                <motion.span
                  animate={
                    focus === "password"
                      ? { scale: 1.08, color: "#3b82f6" }
                      : { scale: 1, color: "#6b7280" }
                  }
                  transition={{ type: "spring", stiffness: 300, damping: 22 }}
                >
                  <Lock className="h-5 w-5 md:h-4 md:w-4" />
                </motion.span>
              </span>
              <input
                id="password"
                name="password"
                type="password"
                autoComplete="current-password"
                required
                className="relative block w-full rounded-md border-0 bg-white/5 px-10 py-3 text-base font-medium text-white placeholder-gray-400 shadow-sm ring-1 ring-white/10 transition ring-inset focus:ring-2 focus:ring-blue-500 focus:ring-inset md:px-9 md:py-2 md:text-sm md:leading-6"
                placeholder="Passwort"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                onFocus={() => setFocus("password")}
                onBlur={() => setFocus(null)}
              />
            </div>
          </div>
          <div>
            <button
              type="submit"
              disabled={loading}
              className="group relative mt-2 flex w-full justify-center rounded-md border border-transparent bg-blue-600 px-4 py-3 text-base font-medium text-white shadow-lg transition hover:bg-blue-700 focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 focus:outline-none disabled:cursor-not-allowed disabled:opacity-60 md:mt-0 md:py-3.5 md:text-sm"
            >
              {loading ? "Wird eingeloggt..." : "Login"}
            </button>
          </div>
        </form>
        <div className="mt-5 text-center md:mt-6">
          <span className="text-sm text-gray-400 md:text-base">
            Noch kein Konto?{" "}
          </span>
          <Link href="/register" className="text-blue-400 hover:underline">
            Jetzt registrieren
          </Link>
        </div>
      </motion.div>
    </div>
  );
}
