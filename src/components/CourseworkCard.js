"use client";

import { motion } from "framer-motion";

export default function CourseworkCard({ title, institution, description, tags }) {
  return (
    <motion.div
      whileHover={{ scale: 1.02 }}
      className="border rounded-lg p-4 shadow-sm hover:shadow-md transition bg-white dark:bg-neutral-800"
    >
      <h3 className="text-lg font-semibold mb-1">{title}</h3>
      <p className="text-sm text-neutral-500 dark:text-neutral-300 mb-2">{institution}</p>
      <p className="text-sm text-neutral-700 dark:text-neutral-200 mb-3">{description}</p>
      <div className="flex flex-wrap gap-2">
        {tags.map((t) => (
          <span
            key={t}
            className="px-2 py-1 text-xs bg-gray-100 dark:bg-neutral-700 rounded"
          >
            {t}
          </span>
        ))}
      </div>
    </motion.div>
  );
}
