'use client';

import { useEffect, useState } from 'react';
import Image from 'next/image';
import { motion, useScroll } from 'framer-motion';

export default function About() {
  const { scrollY } = useScroll();
  const [direction, setDirection] = useState('down'); // 'up' | 'down'
  const [lastY, setLastY] = useState(0);

  // Detect scroll direction
  useEffect(() => {
    const unsubscribe = scrollY.on('change', (current) => {
      setDirection(current < lastY ? 'up' : 'down');
      setLastY(current);
    });
    return () => unsubscribe();
  }, [scrollY, lastY]);

  // Variants for direction-aware entrance
  const textVariants = {
    hidden: (dir) => ({
      opacity: 0,
      y: dir === 'up' ? -20 : 20,
    }),
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] },
    },
  };

  // Image subtle overlay for depth
  const overlayVariants = {
    initial: { opacity: 0 },
    hover: { opacity: 0.08, transition: { duration: 0.3 } },
  };

  return (
    <section
      aria-labelledby="about-title"
      className="bg-gradient-to-r from-orange-700 to-yellow-600 bottom border-2 border-white/20"
    >
      <div className="max-w-6xl mx-auto py-20 px-6 grid md:grid-cols-2 gap-12 items-center">
        {/* Image column */}
        <motion.div
          className="group relative"
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ margin: '-10%', once: true, amount: 0.2 }}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
        >
          {/* Smooth zoom-out on hover: default slightly zoomed-in */}
          <motion.div
            className="relative overflow-hidden rounded-2xl shadow-xl"
            initial={{ scale: 1.05 }}
            whileHover={{ scale: 1.0 }}
            transition={{ duration: 0.3, ease: 'easeOut' }}
          >
            <Image
              src="/vada-pav.jpg"
              alt="Freshly prepared Hare Krishna Bada Pav served street-style"
              width={1024}
              height={768}
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 600px"
              priority={false}
              className="h-auto w-full object-cover"
            />
            {/* Optional depth overlay */}
            <motion.div
              className="absolute inset-0 bg-black"
              variants={overlayVariants}
              initial="initial"
              whileHover="hover"
              aria-hidden="true"
            />
          </motion.div>
        </motion.div>

        {/* Text column */}
        <motion.div
          aria-describedby="about-title"
          className="space-y-8"
          custom={direction}
          variants={textVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ margin: '-10%', amount: 0.25 }}
        >
          <div className="space-y-4">
            <h2 id="about-title" className="text-4xl font-bold tracking-tight text-gray-900">
              Our Journey
            </h2>
            <p className="text-white font-semibold leading-relaxed">
              Established in 2024, Hare Krishna Bada Pav began as a humble street-side stall in Mumbai with a mission:
              to bring the essence of Krishna&apos;s simplicity and Mumbai&apos;s irresistible street flavors into every bite.
              We started with a few local favorites, but our love for experimentation led us to create a fusion of
              traditional and modern snacks.
            </p>
          </div>

          {/* Menu highlights */}
          <div className="grid sm:grid-cols-2 gap-6">
            <div className="rounded-xl bg-white/70 backdrop-blur p-6 shadow-sm border border-white">
              <h3 className="text-lg font-semibold text-gray-900">Vada Pav</h3>
              <p className="text-gray-600 leading-relaxed">
                Bombay Classic, Cheese Burst, Ulta Vada, Tandoori Afghani
              </p>
            </div>
            <div className="rounded-xl bg-white/70 backdrop-blur p-6 shadow-sm border border-white">
              <h3 className="text-lg font-semibold text-gray-900">Pav Bhaji</h3>
              <p className="text-gray-600 leading-relaxed">
                Kolhapuri Tadka, Basil Butter, Jain Special
              </p>
            </div>
            <div className="rounded-xl bg-white/70 backdrop-blur p-6 shadow-sm border border-white">
              <h3 className="text-lg font-semibold text-gray-900">Burgers</h3>
              <p className="text-gray-600 leading-relaxed">
                Masala Veg, Corn &amp; Cheese, Street-Style Paneer
              </p>
            </div>
            <div className="rounded-xl bg-white/70 backdrop-blur p-6 shadow-sm border border-white">
              <h3 className="text-lg font-semibold text-gray-900">Sides</h3>
              <p className="text-gray-600 leading-relaxed">
                French Fries, Loaded Nachos, Buttered Toast Pavs
              </p>
            </div>
          </div>

          {/* Quotes */}
          <div className="space-y-5">
            <blockquote className="italic text-white-800 font-bold border-l-4 border-orange-300 pl-4">
              “Every bite tells a story — from Mumbai’s local stations to your table.”
            </blockquote>
            <blockquote className="italic text-white-800 font-bold border-l-4 border-orange-300 pl-4">
              “Not just food — it’s a memory wrapped in pav.”
            </blockquote>
            <blockquote className="italic text-white-800  border-l-4 border-orange-300 pl-4">
              “Bite it, love it, repeat it. That’s the Hare Krishna way.”
            </blockquote>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
