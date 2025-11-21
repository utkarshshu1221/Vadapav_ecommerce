"use client";

import { useState } from "react";
import MenuCard from "./MenuCard";
import MenuModal from "./MenuModal";

export default function MenuPreview({ items = [] }) {
  const [isOpen, setIsOpen] = useState(false);

  const popular = items.slice(0, 6);

  return (
    <section className="py-16 bg-orange-700 px-4" id="menu">
      <h2 className="text-3xl font-bold text-center mb-8">POPULAR ITEMS</h2>

      {/* Grid of popular items */}
      <div className="grid grid-cols-2 md:grid-cols-3 gap-6">
        {popular.map((item) => (
          <MenuCard
            key={item._id}
            image={item.imageUrl}
            name={item.name}
            price={item.price}
            description={item.description}
            onAction={() => setIsOpen(true)}
            actionLabel="View"
          />
        ))}
      </div>

      {/* View full menu */}
      <div className="text-center mt-8">
        <button
          onClick={() => setIsOpen(true)}
          className="bg-green-600 hover:bg-green-700 text-white px-6 py-3 rounded-lg"
        >
          View Full Menu
        </button>
      </div>

      {/* Modal */}
      <MenuModal items={items} isOpen={isOpen} onClose={() => setIsOpen(false)} />
    </section>
  );
}
