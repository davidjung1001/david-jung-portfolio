"use client";
import Link from "next/link";
import { motion } from "framer-motion";
import { useState } from "react";
import { ChevronDown } from "lucide-react";

export default function ExperienceCard({
  title,
  company,
  period,
  image,
  summary,
  tech,
  slug,
}) {
  const [showAllTech, setShowAllTech] = useState(false);

  const displayedTech = showAllTech ? tech : tech.slice(0, 3);

  return (
    <motion.div
      whileHover={{ scale: 1.02 }}
      className="border rounded-lg overflow-hidden shadow-sm hover:shadow-md transition bg-white dark:bg-neutral-800"
    >
      <Link
        href={`/experience/${slug || title.toLowerCase().replace(/\s+/g, "-")}`}
        className="block"
      >
        {image && <img src={image} alt={title} className="w-full h-48 object-cover" />}
        <div className="p-4">
          <h3 className="text-xl font-semibold mb-1">{title}</h3>
          <p className="text-sm text-neutral-500 dark:text-neutral-300 mb-2">
            {company} {period && `• ${period}`}
          </p>
          <p className="text-sm text-neutral-700 dark:text-neutral-200 mb-3">{summary}</p>

          {/* Tech Stack */}
          <div className="flex flex-wrap gap-2 items-center">
            {displayedTech.map((t) => (
              <span
                key={t}
                className="px-2 py-1 text-xs bg-gray-100 dark:bg-neutral-700 rounded"
              >
                {t}
              </span>
            ))}

            {/* Inline "..." dropdown */}
            {tech.length > 3 && !showAllTech && (
              <button
                type="button"
                onClick={(e) => {
                  e.preventDefault();
                  setShowAllTech(true);
                }}
                className="flex items-center text-xs text-gray-500 hover:text-gray-700 dark:hover:text-gray-300"
              >
                ... <ChevronDown size={12} />
              </button>
            )}
          </div>
        </div>
      </Link>
    </motion.div>
  );
}
