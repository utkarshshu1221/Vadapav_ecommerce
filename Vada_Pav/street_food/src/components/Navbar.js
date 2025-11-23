// components/Navbar.jsx
"use client";

import { useState, useCallback } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";

const navLinks = [
  { label: "Home", target: "top" },
  { label: "Menu", target: "menu" },
  { label: "About", target: "about" }, // Optional: Add a section later
  { label: "Contact", target: "visit" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);

  const scrollTo = useCallback((id) => {
    setOpen(false);
    if (id === "top") {
      window.scrollTo({ top: 0, behavior: "smooth" });
      return;
    }
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
  }, []);

  return (
    <header className="fixed top-0 z-50 w-full">
      <div className="backdrop-blur-md bg-black/40">
        <nav className="mx-auto flex items-center justify-between px-4 py-3">
          {/* Left: Logo + Brand */}
          <div className="flex items-center gap-3 cursor-pointer" onClick={() => scrollTo("top")}>
            <Image
              src="/images.png"
              alt="Hare Krishna Bada Pav"
              width={40}
              height={40}
              className="rounded-md"
              priority
            />
            <span className="font-bold tracking-wide">
              Hare Krishna Bada Pav
            </span>
          </div>

          {/* Center: Desktop links */}
          <div className="hidden md:flex items-center gap-6">
            {navLinks.map((link) => (
              <button
                key={link.target}
                onClick={() => scrollTo(link.target)}
                className="text-sm font-medium text-white/90 hover:text-white transition-colors"
              >
                {link.label}
              </button>
            ))}
          </div>

          {/* Right: Order Online */}
          <div className="hidden md:flex">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.98 }}
              onClick={() => scrollTo("visit")}
              className="rounded-md bg-red-600 px-3 py-2 text-sm font-semibold shadow-sm hover:bg-red-700 transition-colors"
            >
              Visit Us
            </motion.button>
          </div>

          {/* Mobile: Hamburger */}
          <button
            onClick={() => setOpen((o) => !o)}
            className="md:hidden inline-flex items-center justify-center rounded-md p-2 text-white hover:bg-white/10 transition-colors"
            aria-label="Toggle navigation"
            aria-expanded={open}
          >
            <svg width="24" height="24" fill="none" stroke="currentColor">
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d={open ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"}
              />
            </svg>
          </button>
        </nav>

        {/* Mobile dropdown */}
        <AnimatePresence>
          {open && (
            <motion.div
              initial={{ height: 0, opacity: 0, y: -8 }}
              animate={{ height: "auto", opacity: 1, y: 0 }}
              exit={{ height: 0, opacity: 0, y: -8 }}
              transition={{ type: "spring", stiffness: 220, damping: 24 }}
              className="md:hidden overflow-hidden border-t border-white/10"
            >
              <div className="flex flex-col gap-2 px-4 py-3 bg-black/50">
                {navLinks.map((link) => (
                  <button
                    key={link.target}
                    onClick={() => scrollTo(link.target)}
                    className="w-full rounded-md px-3 py-2 text-left text-sm font-medium text-white/90 hover:bg-white/10 transition-colors"
                  >
                    {link.label}
                  </button>
                ))}
                <motion.button
                  whileHover={{ scale: 1.03 }}
                  whileTap={{ scale: 0.98 }}
                  onClick={() => scrollTo("visit")}
                  className="mt-2 w-full rounded-md bg-red-600 px-3 py-2 text-sm font-semibold shadow-sm hover:bg-red-700 transition-colors"
                >
                  Visit Us
                </motion.button>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </header>
  );
}
