// components/Hero.jsx
"use client";

import Image from "next/image";
import { motion } from "framer-motion";

const container = {
  hidden: { opacity: 0, y: 20 },
  show: {
    opacity: 1,
    y: 0,
    transition: { type: "spring", stiffness: 180, damping: 20, delay: 0.15 },
  },
};

export default function Hero() {
  const scrollTo = (id) => {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  return (
    <section id="top" className="relative h-screen w-full">
      {/* Background image */}
      <div className="absolute inset-0">
        <Image
          src="/badapav.jpg"
          alt="Street food vibes of Mumbai"
          fill
          priority
          sizes="100vw"
          className="object-cover"
        />
        {/* Overlay gradient for readability */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/50 via-black/40 to-black/60" />
      </div>

      {/* Content */}
      <div className="relative mx-auto flex h-full max-w-6xl items-center justify-center px-4">
        <motion.div
          initial="hidden"
          animate="show"
          variants={container}
          className="text-center"
        >
          <h1 className="text-4xl font-extrabold tracking-tight sm:text-5xl md:text-6xl">
            Mumbai’s Soul in Every Bite
          </h1>

          <p className="mt-3 text-base text-white/80 sm:text-lg">
            Authentic flavors, fresh ingredients, and street-side warmth.
          </p>

          {/* Buttons */}
          <div className="mt-6 flex flex-col items-center justify-center gap-3 sm:flex-row">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.98 }}
              onClick={() => scrollTo("visit")}
              className="w-full sm:w-auto rounded-md bg-red-600 px-5 py-3 text-sm font-semibold shadow-sm hover:bg-red-700 transition-colors"
            >
              Visit Us
            </motion.button>

            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.98 }}
              onClick={() => scrollTo("menu")}
              className="w-full sm:w-auto rounded-md bg-yellow-500 px-5 py-3 text-sm font-semibold text-black shadow-sm hover:bg-yellow-600 transition-colors"
            >
              View Menu
            </motion.button>

            <motion.button
              whileHover={{ scale: 1.0 }} // disabled; no hover scale
              className="w-full sm:w-auto rounded-md bg-white/20 px-5 py-3 text-sm font-semibold text-white shadow-sm cursor-not-allowed"
              disabled
            >
              Order Online (Coming Soon)
            </motion.button>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
