"use client";

import Image from "next/image";
import { motion } from "framer-motion";

export default function InstagramFeed({ posts }) {
  return (
    <section className="py-20 bg-white">
      <h2 className="text-3xl font-bold text-center mb-12">From Instagram</h2>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        {posts.map((post, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <Image
              src={post.imageUrl}
              alt="Instagram post"
              width={300}
              height={300}
              className="rounded-lg object-cover"
            />
          </motion.div>
        ))}
      </div>
    </section>
  );
}
