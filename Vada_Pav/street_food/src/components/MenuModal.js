"use client";

import { useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import MenuCard from "./MenuCard";

export default function MenuModal({ items, isOpen, onClose }) {
  const panelRef = useRef(null);

  // Lock body scroll
  useEffect(() => {
    document.body.style.overflow = isOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [isOpen]);

  // Escape key to close
  useEffect(() => {
    if (!isOpen) return;
    const handler = (e) => {
      if (e.key === "Escape") onClose();
    };
    window.addEventListener("keydown", handler);
    return () => window.removeEventListener("keydown", handler);
  }, [isOpen, onClose]);

  // Basic focus management
  useEffect(() => {
    if (isOpen && panelRef.current) {
      panelRef.current.focus();
    }
  }, [isOpen]);

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          role="dialog"
          aria-modal="true"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/70 backdrop-blur"
          onClick={onClose}
        >
          <motion.div
            ref={panelRef}
            tabIndex={-1}
            initial={{ scale: 0.96, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.96, opacity: 0 }}
            onClick={(e) => e.stopPropagation()}
            className="relative w-[95vw] max-w-5xl max-h-[85vh] overflow-y-auto rounded-2xl bg-white shadow-2xl p-6"
          >
            {/* Close button */}
            <button
              aria-label="Close"
              onClick={onClose}
              className="absolute top-4 right-4 text-gray-700 hover:text-red-600"
            >
              ✕
            </button>

            <h2 className="text-2xl font-bold text-center mb-6">Full Menu</h2>

            {/* Cards reused inside modal */}
            <div className="grid grid-cols-2 md:grid-cols-3 gap-6">
              {items.map((item) => (
                <MenuCard
                  key={item._id}
                  image={item.imageUrl}
                  name={item.name}
                  price={item.price}
                  description={item.description}
                  onAction={() => {
                    // You can route, add-to-cart, or open per-item modal
                    // Example: console.log("View item:", item.name);
                  }}
                  actionLabel="View"
                />
              ))}
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
