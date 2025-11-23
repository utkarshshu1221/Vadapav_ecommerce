"use client";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";

export default function SocialFeed({ items }) {
  const [lightboxIndex, setLightboxIndex] = useState(null);

  return (
    <section className="py-20 px-6 md:px-12 bg-gradient-to-r from-orange-50 to-yellow-50">
      <h2 className="text-4xl font-extrabold text-center text-orange-600 mb-14 shadow-md">
        Social Feed
      </h2>

      {/* Grid of cards */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        {items.map((item, idx) => (
          <motion.div
            key={idx}
            whileHover={{ scale: 1.05 }}
            className="rounded-lg shadow-lg ring-1 ring-gray-200 overflow-hidden bg-white cursor-pointer"
            onClick={() => setLightboxIndex(idx)}
          >
            {/* Instagram Post */}
            {item.type === "instagram" && item.imageUrl && (
              <Image
                src={item.imageUrl}
                alt={item.platform}
                width={400}
                height={400}
                className="object-cover w-full h-56"
              />
            )}

            {/* Instagram Reel */}
            {item.type === "instagram" && item.videoUrl && (
              <video
                src={item.videoUrl}
                className="w-full h-56 object-cover"
                muted
                loop
              />
            )}

            {/* YouTube Thumbnail (just text preview) */}
            {item.type === "youtube" && (
              <div className="relative group cursor-pointer">
                {/* Thumbnail */}
                <Image
                  src={item.imageUrl} // YouTube thumbnail URL
                  alt={item.text}
                  width={400}
                  height={225}
                  className="object-cover w-full h-56"
                />
                {/* Overlay play icon */}
                <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition">
                  <span className="text-4xl text-white bg-black/50 rounded-full px-3 py-1">
                    ▶
                  </span>
                </div>
                {/* Caption */}
                <div className="p-3 text-center">
                  <p className="text-sm font-semibold">{item.text}</p>
                  <p className="text-xs text-gray-500">{item.platform}</p>
                </div>
              </div>
            )}

            {/* Google Review Card */}
            {item.type === "google" && (
              <div className="p-4 bg-white rounded-lg shadow-md">
                {/* Optional Google logo or static image */}
                <Image
                  src="/google-logo.png" // store a logo in /public
                  alt="Google Review"
                  width={80}
                  height={30}
                  className="mb-2"
                />
                <p className="text-sm text-gray-700">{item.text}</p>
                <p className="mt-2 text-sm font-semibold text-yellow-700">
                  — {item.author}
                </p>
              </div>
            )}
          </motion.div>
        ))}
      </div>

      {/* Lightbox Modal */}
      <AnimatePresence>
        {lightboxIndex !== null && (
          <motion.div
            className="fixed inset-0 bg-black/70 flex items-center justify-center z-50"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setLightboxIndex(null)}
          >
            <motion.div
              className="bg-white rounded-lg shadow-xl max-w-3xl w-full overflow-hidden relative"
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              onClick={(e) => e.stopPropagation()}
            >
              {/* Close button */}
              <button
                onClick={() => setLightboxIndex(null)}
                className="absolute top-2 right-2 text-gray-600 hover:text-black"
              >
                ✕
              </button>

              {/* Content */}
              {items[lightboxIndex].type === "instagram" &&
                items[lightboxIndex].imageUrl && (
                  <Image
                    src={items[lightboxIndex].imageUrl}
                    alt={items[lightboxIndex].platform}
                    width={800}
                    height={600}
                    className="object-contain w-full h-auto"
                  />
                )}

              {items[lightboxIndex].type === "instagram" &&
                items[lightboxIndex].videoUrl && (
                  <video
                    src={items[lightboxIndex].videoUrl}
                    controls
                    className="w-full h-[400px] object-contain"
                  />
                )}

              {items[lightboxIndex].type === "youtube" && (
                <iframe
                  src={items[lightboxIndex].url}
                  title="YouTube video"
                  className="w-full h-[400px]"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                />
              )}

              {items[lightboxIndex].type === "google" && (
                <div className="p-6">
                  <p className="text-gray-700">{items[lightboxIndex].text}</p>
                  <p className="mt-2 text-sm font-semibold text-yellow-700">
                    — {items[lightboxIndex].author}
                  </p>
                  <a
                    href={items[lightboxIndex].url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-600 underline text-sm"
                  >
                    View on Google
                  </a>
                </div>
              )}
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
