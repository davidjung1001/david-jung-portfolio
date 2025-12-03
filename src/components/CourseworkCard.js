"use client";

import { motion } from "framer-motion";
import { useState } from "react";
import { ChevronDown, ChevronUp } from "lucide-react";

export default function CourseworkCard({ title, institution, description, tags, projects }) {
  const [expanded, setExpanded] = useState(false);

  return (
    <motion.div
      whileHover={{ scale: 1.02 }}
      className="border rounded-lg p-4 shadow-sm hover:shadow-md transition bg-white dark:bg-neutral-800"
    >
      <h3 className="text-lg font-semibold mb-1">{title}</h3>
      <p className="text-sm text-neutral-500 dark:text-neutral-300 mb-2">{institution}</p>
      <p className="text-sm text-neutral-700 dark:text-neutral-200 mb-3">{description}</p>
      
      <div className="flex flex-wrap gap-2 mb-3">
        {tags.map((t) => (
          <span
            key={t}
            className="px-2 py-1 text-xs bg-gray-100 dark:bg-neutral-700 rounded"
          >
            {t}
          </span>
        ))}
      </div>

      {/* Projects Section */}
      {projects && projects.length > 0 && (
        <div className="mt-3 pt-3 border-t border-gray-200 dark:border-neutral-700">
          <button
            onClick={() => setExpanded(!expanded)}
            className="flex items-center justify-between w-full text-sm font-medium text-neutral-700 dark:text-neutral-200 hover:text-black dark:hover:text-white transition"
          >
            <span>Projects ({projects.length})</span>
            {expanded ? <ChevronUp size={16} /> : <ChevronDown size={16} />}
          </button>

          {expanded && (
            <div className="mt-3 space-y-3">
              {projects.map((project, idx) => (
                <div key={idx} className="pl-3 border-l-2 border-gray-300 dark:border-neutral-600">
                  <h4 className="text-sm font-semibold text-neutral-800 dark:text-neutral-100">
                    {project.name}
                  </h4>
                  <p className="text-xs text-neutral-600 dark:text-neutral-400 mt-1">
                    {project.description}
                  </p>
                  {project.tech && (
                    <div className="flex flex-wrap gap-1 mt-2">
                      {project.tech.map((t) => (
                        <span
                          key={t}
                          className="px-1.5 py-0.5 text-xs bg-blue-50 dark:bg-blue-900/30 text-blue-700 dark:text-blue-300 rounded"
                        >
                          {t}
                        </span>
                      ))}
                    </div>
                  )}
                </div>
              ))}
            </div>
          )}
        </div>
      )}
    </motion.div>
  );
}