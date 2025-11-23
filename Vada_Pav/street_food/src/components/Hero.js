// components/Hero.jsx
"use client";

import { useEffect, useRef, useState } from "react";
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

  // Hover state to scale background image
  const [isHover, setIsHover] = useState(false);

  // Scroll-based vertical offset (temporary bob on scroll)
  const [scrollYOffset, setScrollYOffset] = useState(0);
  const lastY = useRef(0);

  useEffect(() => {
    let timeout = null;
    const onScroll = () => {
      const y = window.scrollY || 0;
      const dir = y > lastY.current ? 8 : -8; // pixels to move up or down
      setScrollYOffset(dir);
      lastY.current = y;
      if (timeout) clearTimeout(timeout);
      timeout = setTimeout(() => setScrollYOffset(0), 140);
    };

    window.addEventListener("scroll", onScroll, { passive: true });
    return () => {
      window.removeEventListener("scroll", onScroll);
      if (timeout) clearTimeout(timeout);
    };
  }, []);

  return (
    <section id="top" className="relative h-screen w-full">
      {/* Background image */}
      <div className="absolute inset-0">
        <motion.div
          className="absolute inset-0"
          style={{ willChange: "transform" }}
          animate={{ scale: isHover ? 1.06 : 1 }}
          transition={{ type: "spring", stiffness: 120, damping: 18 }}
        >
          <Image
            src="/badapav.jpg"
            alt="Street food vibes of Mumbai"
            fill
            priority
            sizes="100vw"
            className="object-cover"
          />
        </motion.div>
        {/* Overlay gradient for readability */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/50 via-black/40 to-black/60" />
      </div>

      {/* Content */}
      <div className="relative mx-auto flex h-full max-w-6xl items-center justify-center px-4">
        <motion.div
          initial="hidden"
          animate="show"
          variants={container}
          className="w-full flex items-center justify-center"
        >
          {/* Transparent centered card that reacts to hover and scroll */}
          <motion.div
            role="region"
            aria-label="Hero card"
            onMouseEnter={() => setIsHover(true)}
            onMouseLeave={() => setIsHover(false)}
            tabIndex={-1}
            className="max-w-3xl w-[min(90%,900px)] mx-auto rounded-2xl bg-white/10 backdrop-blur-md border border-white/10 px-8 py-8 text-center text-white shadow-lg cursor-default"
            animate={{ y: scrollYOffset }}
            whileHover={{ y: -8 }}
            transition={{ type: "spring", stiffness: 200, damping: 22 }}
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
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.98 }}
                onClick={() => scrollTo("visit")}
                className="w-full sm:w-auto rounded-md bg-red-600 px-5 py-3 text-sm font-semibold shadow-sm hover:bg-red-700 transition-colors"
              >
                Visit Us
              </motion.button>

              <motion.button
                whileHover={{ scale: 1.03 }}
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
        </motion.div>
      </div>
    </section>
  );
}
