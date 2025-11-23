"use client";
import { useEffect, useRef, useState } from "react";
import { motion, useInView } from "framer-motion";

// --------- Scroll Direction Hook ----------
function useScrollDirection() {
  const [direction, setDirection] = useState("down");
  const lastY = useRef(0);

  useEffect(() => {
    const onScroll = () => {
      const y = window.scrollY || 0;
      setDirection(y > lastY.current ? "down" : "up");
      lastY.current = y;
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return direction;
}

// --------- Variants ----------
function getLineVariants(scrollDirection) {
  return {
    initial: { opacity: 0, y: scrollDirection === "down" ? 20 : -20 },
    animate: { opacity: 1, y: 0 },
  };
}

const containerVariants = {
  initial: {},
  animate: {
    transition: { staggerChildren: 0.12, delayChildren: 0.05 },
  },
};

const cardVariants = {
  initial: { opacity: 0, scale: 0.98, y: 20 },
  animate: {
    opacity: 1,
    scale: 1,
    y: 0,
    transition: { type: "spring", stiffness: 220, damping: 22 },
  },
};

export default function TestimonialsSection({ testimonials = [] }) {
  const scrollDirection = useScrollDirection();

  return (
    <section
      className="bg-gradient-to-r from-orange-700 to-yellow-600 py-20 px-6 md:px-12"
      aria-label="Customer testimonials for Hare Krishna Bada Pav"
    >

      {/* Centered heading box between heading and testimonials */}
      <div
        role="button"
        tabIndex={0}
        className="mx-auto my-4 w-[min(60%,640px)] rounded-2xl 
             bg-gradient-to-b from-[#fff3e0] to-[#fffbe6]
             ring-1 ring-orange-200 
             shadow-[inset_0_-3px_8px_rgba(0,0,0,0.07),0_3px_6px_rgba(255,140,0,0.12)]
             px-6 py-4 text-center text-orange-700 font-medium
             hover:bg-orange-50/80 transition-colors duration-200 cursor-pointer"
        aria-label="Featured testimonials"
      >
        <h2 className="text-3xl md:text-4xl font-extrabold text-orange-600 mb-3">
          What our customers say
        </h2>

        <div
          className="mx-auto mt-1 mb-2 h-1 w-28 rounded-full 
               bg-gradient-to-r from-orange-500 to-yellow-400 shadow-md"
          aria-hidden="true"
        />
      </div>

      <div
        className="overflow-x-auto flex gap-8 snap-x snap-mandatory pb-2"
        role="list"
      >
        {testimonials.map((t, idx) => (
          <TestimonialCard
            key={idx}
            text={t.text}
            author={t.author}
            avatarSrc={t.avatarSrc}
            scrollDirection={scrollDirection}
          />
        ))}
      </div>
    </section>
  );
}

function TestimonialCard({ text, author, avatarSrc, scrollDirection }) {
  const ref = useRef(null);
  const inView = useInView(ref, { margin: "0px 0px -20% 0px", once: false });

  const lines = text
    .split("\n")
    .map((line) => line.trim())
    .filter(Boolean);

  const lineVariants = getLineVariants(scrollDirection);

  return (
    <motion.article
      ref={ref}
      role="listitem"
      className="min-w-[300px] bg-white/80 backdrop-blur-lg rounded-xl shadow-xl ring-2 ring-orange-200 p-8 flex flex-col items-center hover:scale-105 transition-transform duration-300 snap-start"
      variants={cardVariants}
      initial="initial"
      animate={inView ? "animate" : "initial"}
    >
      <span className="text-4xl text-orange-500 mb-2" aria-hidden="true">“</span>

      {/* Optional avatar/icon */}
      <div className="mb-4">
        {avatarSrc ? (
          <img
            src={avatarSrc}
            alt={`Photo of ${author}`}
            className="h-16 w-16 rounded-full ring-2 ring-orange-200 shadow-sm hover:scale-110 hover:rotate-1 transition-transform duration-300 object-cover"
          />
        ) : (
          <div
            className="h-16 w-16 rounded-full bg-yellow-100 ring-2 ring-orange-200 shadow-sm flex items-center justify-center hover:scale-110 hover:rotate-1 transition-transform duration-300"
            aria-hidden="true"
          >
            <span className="text-xl text-yellow-700">🍔</span>
          </div>
        )}
      </div>

      {/* Line-by-line animated text */}
      <motion.div
        variants={containerVariants}
        initial="initial"
        animate={inView ? "animate" : "initial"}
        className="text-center space-y-2"
      >
        {lines.map((line, i) => (
          <motion.p
            key={i}
            variants={lineVariants}
            className="text-base text-neutral-800 leading-relaxed"
          >
            {line}
          </motion.p>
        ))}
      </motion.div>

      <p className="text-lg font-semibold text-yellow-700 mt-4">{author}</p>
    </motion.article>
  );
}
