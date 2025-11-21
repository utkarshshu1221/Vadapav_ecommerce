"use client";

import Image from "next/image";
import { motion } from "framer-motion";

export default function MenuCard({
  image,
  name,
  price,
  description,
  onAction,
  actionLabel = "View",
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 16 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      whileHover={{ scale: 1.02 }}
      className="group relative rounded-xl shadow-lg overflow-hidden bg-white"
    >
      {/* Image container with zoom-out on hover (start slightly zoomed-in) */}
      <div className="relative h-56 md:h-64">
        <div className="absolute inset-0">
          <Image
            src={image}
            alt={name}
            fill
            priority={false}
            sizes="(max-width: 768px) 50vw, (max-width: 1200px) 33vw, 300px"
            className="object-cover transition-transform duration-500 will-change-transform scale-110 group-hover:scale-100"
          />
        </div>

        {/* Dark overlay for text readability */}
        <div className="absolute inset-0 bg-black/30 opacity-70 group-hover:opacity-80 transition-opacity duration-300" />

        {/* Overlay content */}
        <div className="absolute inset-0 flex flex-col justify-end items-center p-4 text-center">
          <h3 className="text-white font-bold text-lg">{name}</h3>
          <p className="text-white/90 text-sm mt-1">₹ {price}</p>
          {description ? (
            <p className="text-white/80 text-xs mt-2 line-clamp-2">
              {description}
            </p>
          ) : null}

          {/* Action button (appears on hover on desktop, always visible on mobile) */}
          <button
            onClick={onAction}
            className="mt-3 bg-red-600 hover:bg-red-700 text-white px-4 py-2 rounded-lg transition-colors duration-200
                       group-hover:opacity-100 opacity-0 md:opacity-0 md:group-hover:opacity-100"
          >
            {actionLabel}
          </button>
        </div>
      </div>
    </motion.div>
  );
}
