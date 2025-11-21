"use client";

import { motion } from "framer-motion";

export default function Testimonials({ testimonials }) {
  return (
    <section className="py-20 bg-gray-50">
      <h2 className="text-3xl font-bold text-center mb-12">What People Say</h2>
      <div className="flex overflow-x-scroll gap-6 px-6">
        {testimonials.map((t, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="min-w-[300px] bg-white rounded-lg shadow-lg p-6"
          >
            <p className="text-gray-700 italic">“{t.text}”</p>
            <div className="mt-4 font-bold text-red-600">{t.author}</div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
