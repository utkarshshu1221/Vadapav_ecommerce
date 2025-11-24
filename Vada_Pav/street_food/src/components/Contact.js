"use client";

import { motion } from "framer-motion";

export default function Contact() {
  return (
    <section id="visit" className="py-20 bg-black">
      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 items-center">
        <motion.div initial={{ opacity: 0, x: -40 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.8 }}>
          <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d0!2d85.056801!3d25.615615!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x398dxyz…!2sYour%20Location!5e0!3m2!1sen!2sin!4v1700000000000" width="100%" height="400" style={{ border: 0 }} allowFullScreen="" loading="lazy" className="rounded-lg shadow-lg border-solid border-2 border-white-700"></iframe>
        </motion.div>
        <motion.div initial={{ opacity: 0, y: 40 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.8 }}>
          <h2 className="text-4xl font-bold text-white mb-6">Visit Us</h2>
          <ul className="space-y-4 text-lg text-white">
            <li className="flex items-center gap-3">📍 123 Street, Danapur, Bihar</li>
            <li className="flex items-center gap-3">📞 +91 98765 43210</li>
            <li className="flex items-center gap-3">⏰ Mon–Sat: 11am – 10pm</li>
          </ul>
          <a href="https://wa.me/919876543210" className="mt-6 inline-block bg-green-500 hover:bg-green-600 text-white px-6 py-3 rounded-lg">Chat on WhatsApp</a>
        </motion.div>
      </div>
    </section>
  );
}
