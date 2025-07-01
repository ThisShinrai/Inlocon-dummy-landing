"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import { Mail, Lock, User2, CheckCircle2 } from "lucide-react";

const steps = [
  {
    label: "Name",
    placeholder: "Ihr Name",
    type: "text",
    icon: <User2 className="h-5 w-5 md:h-4 md:w-4" />,
    name: "name",
    autoComplete: "name",
  },
  {
    label: "E-Mail",
    placeholder: "E-Mail-Adresse",
    type: "email",
    icon: <Mail className="h-5 w-5 md:h-4 md:w-4" />,
    name: "email",
    autoComplete: "email",
  },
  {
    label: "Passwort",
    placeholder: "Passwort",
    type: "password",
    icon: <Lock className="h-5 w-5 md:h-4 md:w-4" />,
    name: "password",
    autoComplete: "new-password",
  },
  {
    label: "Datenschutz",
    type: "checkbox",
    name: "privacy",
    text: "Ich stimme der Datenschutzerklärung zu.",
  },
];

export default function RegisterWizard() {
  const [step, setStep] = useState(0);
  const [form, setForm] = useState({
    name: "",
    email: "",
    password: "",
    privacy: false,
  });
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const [focus, setFocus] = useState<string | null>(null);
  const [error, setError] = useState("");

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value, type, checked } = e.target;
    setForm((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? checked : value,
    }));
  };

  const validateStep = () => {
    if (step === 0 && !form.name.trim())
      return "Bitte geben Sie Ihren Namen ein.";
    if (step === 1 && !/^\S+@\S+\.\S+$/.test(form.email))
      return "Bitte geben Sie eine gültige E-Mail-Adresse ein.";
    if (step === 2 && form.password.length < 6)
      return "Das Passwort muss mindestens 6 Zeichen lang sein.";
    if (step === 3 && !form.privacy)
      return "Bitte stimmen Sie der Datenschutzerklärung zu.";
    return "";
  };

  const handleNext = async (e?: React.FormEvent) => {
    if (e) e.preventDefault();
    setError("");
    const err = validateStep();
    if (err) {
      setError(err);
      return;
    }
    if (step === steps.length - 1) {
      setLoading(true);
      setTimeout(() => {
        setLoading(false);
        setSuccess(true);
      }, 1200);
      return;
    }
    setStep((s) => s + 1);
  };

  const handleBack = () => {
    setError("");
    setStep((s) => Math.max(0, s - 1));
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
      {/* Glow */}
      <motion.div
        className="pointer-events-none absolute z-0 h-[260px] w-[260px] rounded-3xl bg-blue-900/20 opacity-40 blur-2xl md:h-[420px] md:w-[420px]"
        initial={{ scale: 0.98, opacity: 0 }}
        animate={{ scale: 1, opacity: 0.4 }}
        transition={{ duration: 1.6, ease: "easeOut" }}
        style={{ top: "50%", left: "50%", transform: "translate(-50%, -50%)" }}
      />
      {/* Panel */}
      <motion.div
        className="relative z-10 mx-4 w-full space-y-8 rounded-2xl border border-gray-700 bg-gray-800/95 p-6 shadow-2xl backdrop-blur-lg md:mx-0 md:max-w-md md:bg-gray-800/90 md:p-10"
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
      >
        <AnimatePresence mode="wait">
          {!success ? (
            <motion.form
              key={step}
              className="space-y-7"
              initial={{ opacity: 0, x: 40 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -40 }}
              transition={{ duration: 0.4, ease: [0.4, 0, 0.2, 1] }}
              onSubmit={handleNext}
            >
              <div className="mb-2 flex flex-col items-center">
                <h2 className="text-center text-2xl font-semibold tracking-tight text-white">
                  Registrieren
                </h2>
                <p className="mt-2 text-center text-base font-normal text-gray-300">
                  Erstellen Sie Ihr Inlocon-Konto
                </p>
              </div>
              {/* Wizard Steps */}
              <div className="mx-auto mb-4 flex w-full max-w-xs items-center justify-center gap-2">
                {steps.map((s, i) => (
                  <div
                    key={s.label}
                    className={`h-2 rounded-full transition-all duration-300 ${i <= step ? "bg-blue-500" : "bg-gray-700"} ${i === step ? "w-8" : "w-4"}`}
                  ></div>
                ))}
              </div>
              {/* Step Content */}
              {step < 3 && steps[step] && (
                <div className="relative flex items-center">
                  <span className="absolute top-0 bottom-0 left-3 my-auto flex h-5 items-center">
                    <motion.span
                      animate={
                        focus === steps[step]?.name
                          ? { scale: 1.08, color: "#3b82f6" }
                          : { scale: 1, color: "#6b7280" }
                      }
                      transition={{
                        type: "spring",
                        stiffness: 300,
                        damping: 22,
                      }}
                    >
                      {steps[step]?.icon}
                    </motion.span>
                  </span>
                  <input
                    id={steps[step]?.name}
                    name={steps[step]?.name}
                    type={steps[step]?.type}
                    autoComplete={steps[step]?.autoComplete}
                    required
                    className="block h-12 w-full rounded-md border-0 bg-white/5 pl-10 text-base font-medium text-white placeholder-gray-400 shadow-sm ring-1 ring-white/10 transition ring-inset focus:ring-2 focus:ring-blue-500 focus:ring-inset"
                    placeholder={steps[step]?.placeholder}
                    value={
                      steps[step]?.name
                        ? (form[
                            steps[step]?.name as keyof typeof form
                          ] as string)
                        : ""
                    }
                    onChange={handleChange}
                    onFocus={() =>
                      steps[step]?.name && setFocus(steps[step]?.name)
                    }
                    onBlur={() => setFocus(null)}
                  />
                </div>
              )}
              {step === 3 && (
                <div className="mt-2 flex items-center gap-x-3">
                  <input
                    id="privacy"
                    name="privacy"
                    type="checkbox"
                    checked={form.privacy}
                    onChange={handleChange}
                    className="h-5 w-5 rounded border-gray-300 text-blue-600 focus:ring-blue-600"
                  />
                  <label
                    htmlFor="privacy"
                    className="text-sm leading-6 text-gray-300 select-none"
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
                </div>
              )}
              {error && (
                <div className="mt-2 text-center text-sm text-red-500">
                  {error}
                </div>
              )}
              <div className="mt-4 flex justify-between gap-2">
                {step > 0 && (
                  <button
                    type="button"
                    onClick={handleBack}
                    className="rounded-lg px-4 py-2 text-sm font-semibold text-gray-400 transition hover:bg-gray-800 hover:text-white"
                    disabled={loading}
                  >
                    Zurück
                  </button>
                )}
                <button
                  type="submit"
                  className="w-full rounded-lg bg-gradient-to-tr from-blue-600 to-blue-500 px-6 py-3 text-sm font-bold text-white shadow-lg transition hover:scale-105 hover:from-blue-700 hover:to-blue-600 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500"
                  disabled={loading}
                >
                  {loading
                    ? "Wird registriert..."
                    : step === steps.length - 1
                      ? "Registrieren"
                      : "Weiter"}
                </button>
              </div>
              <div className="mt-5 text-center">
                <span className="text-sm text-gray-400">
                  Bereits ein Konto?{" "}
                </span>
                <Link href="/login" className="text-blue-400 hover:underline">
                  Jetzt einloggen
                </Link>
              </div>
            </motion.form>
          ) : (
            <motion.div
              key="success"
              className="flex flex-col items-center justify-center py-10"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ type: "spring", stiffness: 180, damping: 18 }}
            >
              <motion.div
                initial={{ scale: 0, rotate: -30 }}
                animate={{ scale: [0, 1.2, 1], rotate: [0, 10, 0] }}
                transition={{
                  type: "tween",
                  ease: "easeOut",
                  duration: 0.7,
                  delay: 0.2,
                }}
                className="mb-4"
              >
                <CheckCircle2 className="h-16 w-16 text-green-500 drop-shadow-xl" />
              </motion.div>
              <motion.h3
                className="mb-2 text-2xl font-bold text-white"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.3 }}
              >
                Erfolgreich registriert!
              </motion.h3>
              <motion.p
                className="mb-4 text-center text-lg text-gray-300"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.4 }}
              >
                Willkommen bei Inlocon!
                <br />
                Sie werden jetzt weitergeleitet ...
              </motion.p>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.div>
    </div>
  );
}
