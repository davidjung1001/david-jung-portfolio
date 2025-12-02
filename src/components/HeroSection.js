"use client";

import { motion } from "framer-motion";

export default function HeroSection() {
  return (
    <motion.section
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      className="text-center py-24"
    >
      <h1 className="text-5xl font-bold mb-4">Hello, I’m David Jung</h1>
      <p className="text-lg text-neutral-600 dark:text-neutral-300 mb-6">
        Thank you for visiting my portfolio! I build modern web applications and interactive tools.
      </p>
      <div className="flex justify-center gap-4">
        <a
          href="/projects"
          className="px-6 py-3 bg-black text-white rounded hover:bg-blue-600 transition"
        >
          View Projects
        </a>
        <a
          href="/resume.pdf"
          target="_blank"
          className="px-6 py-3 border rounded hover:bg-gray-100 dark:hover:bg-neutral-800 transition"
        >
          Download Resume
        </a>
      </div>
    </motion.section>
  );
}
