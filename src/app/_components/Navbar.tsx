"use client";

import Link from "next/link";
import { useState, useEffect } from "react";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";
import { motion, AnimatePresence } from "framer-motion";
import { usePathname } from "next/navigation"; // Import usePathname

export function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const pathname = usePathname(); // Get current pathname

  // Determine if we are in the app section
  const isInApp = pathname.startsWith("/app");

  // Define navigation links based on whether we are in the app section or on the landing page
  const currentNavLinks = isInApp
    ? [
        { name: "Dashboard", href: "/app" },
        { name: "Glossar", href: "/app/glossar" },
      ]
    : [
        { name: "Funktionen", href: "#power-proof" },
        { name: "Demo", href: "#demo" },
        { name: "Preise", href: "#preise" },
        { name: "FAQ", href: "#faq" },
        { name: "Glossar", href: "/app/glossar" },
      ];

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [mobileMenuOpen]);

  return (
    <>
      <header
        className={`fixed top-0 right-0 left-0 z-50 transition-all duration-300 ${
          isScrolled
            ? "bg-gray-900/80 shadow-lg backdrop-blur-xl"
            : "bg-transparent"
        }`}
      >
        <nav
          className="mx-auto flex max-w-7xl items-center justify-between p-4 sm:p-6 lg:px-8"
          aria-label="Global"
        >
          <Link href="/" className="-m-1.5 flex items-center p-1.5">
            <span className="text-2xl font-bold tracking-tight text-white">
              Inlocon
            </span>
          </Link>

          {/* Desktop Navigation Links */}
          <div className="hidden flex-1 justify-center gap-x-10 lg:flex">
            {currentNavLinks.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className="rounded-md px-2 py-1 text-base leading-6 font-semibold text-white/90 transition-colors hover:text-blue-400 focus-visible:ring-2 focus-visible:ring-blue-400 focus-visible:ring-offset-2 focus-visible:outline-none"
              >
                {item.name}
              </Link>
            ))}
          </div>

          {/* Desktop Action Buttons */}
          <div className="hidden items-center gap-x-2 lg:flex">
            {isInApp ? (
              <>
                <Link
                  href="/app/create-tender"
                  className="ml-2 rounded-lg bg-blue-600 px-5 py-2 text-base font-semibold text-white shadow-lg transition-transform hover:scale-105 hover:bg-blue-700 focus-visible:ring-2 focus-visible:ring-blue-600 focus-visible:ring-offset-2 focus-visible:outline-none"
                >
                  Neue Ausschreibung
                </Link>
                <Link
                  href="/"
                  className="ml-2 rounded-lg bg-gray-700 px-5 py-2 text-base font-semibold text-white shadow-lg transition-transform hover:scale-105 hover:bg-gray-600 focus-visible:ring-2 focus-visible:ring-gray-500 focus-visible:ring-offset-2 focus-visible:outline-none"
                >
                  Zur Landingpage
                </Link>
              </>
            ) : (
              <Link
                href="/app"
                className="ml-2 rounded-lg bg-blue-600 px-5 py-2 text-base font-semibold text-white shadow-lg transition-transform hover:scale-105 hover:bg-blue-700 focus-visible:ring-2 focus-visible:ring-blue-600 focus-visible:ring-offset-2 focus-visible:outline-none"
              >
                Zum Dashboard
              </Link>
            )}
          </div>

          {/* Mobile Hamburger Button */}
          <button
            type="button"
            className="rounded-md p-2.5 text-white focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-400 lg:hidden"
            onClick={() => setMobileMenuOpen(true)}
            aria-label="Menü öffnen"
          >
            <Bars3Icon className="h-7 w-7" aria-hidden="true" />
          </button>
        </nav>
      </header>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            key="mobile-menu"
            className="fixed inset-0 z-[100] flex flex-col bg-gray-900/90 backdrop-blur-md"
            initial={{ x: "100%", opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            exit={{ x: "100%", opacity: 0 }}
            transition={{ duration: 0.25, ease: [0.4, 0, 0.2, 1] }}
            role="dialog"
            aria-modal="true"
          >
            {/* Mobile Menu Header */}
            <div className="flex items-center justify-between border-b border-white/10 bg-gray-900/95 px-6 py-5">
              <span className="text-2xl font-bold tracking-tight">Inlocon</span>
              <button
                type="button"
                className="rounded-md p-2.5 text-gray-400 hover:text-white focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-400"
                onClick={() => setMobileMenuOpen(false)}
                aria-label="Menü schließen"
              >
                <XMarkIcon className="h-7 w-7" aria-hidden="true" />
              </button>
            </div>
            {/* Mobile Menu Items */}
            <nav className="flex flex-1 flex-col gap-3 overflow-y-auto px-6 py-8">
              {currentNavLinks.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className="block w-full rounded-xl bg-white/5 px-4 py-5 text-xl font-semibold text-white transition-colors hover:bg-blue-600/90 hover:text-white focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-400"
                >
                  {item.name}
                </Link>
              ))}
              {isInApp ? (
                <>
                  <Link
                    href="/app/create-tender"
                    onClick={() => setMobileMenuOpen(false)}
                    className="mt-4 block w-full rounded-xl bg-blue-600 px-4 py-5 text-center text-xl font-semibold text-white shadow-sm hover:bg-blue-700 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-600"
                  >
                    Neue Ausschreibung
                  </Link>
                  <Link
                    href="/"
                    onClick={() => setMobileMenuOpen(false)}
                    className="mt-2 block w-full rounded-xl border border-white/30 px-4 py-5 text-center text-xl font-semibold text-white hover:border-blue-400 hover:bg-white/10 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-600"
                  >
                    Zur Landingpage
                  </Link>
                </>
              ) : (
                <Link
                  href="/app"
                  onClick={() => setMobileMenuOpen(false)}
                  className="mt-4 block w-full rounded-xl bg-blue-600 px-4 py-5 text-center text-xl font-semibold text-white shadow-sm hover:bg-blue-700 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-600"
                >
                  Zum Dashboard
                </Link>
              )}
              <Link
                href="/login"
                onClick={() => setMobileMenuOpen(false)}
                className="mt-2 block w-full rounded-xl border border-white/30 px-4 py-5 text-center text-xl font-semibold text-white hover:border-blue-400 hover:bg-white/10 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-600"
              >
                Login
              </Link>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}