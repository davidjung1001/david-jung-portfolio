"use client";

import Link from "next/link";
import { useState } from "react";
import { motion } from "framer-motion";

export default function ProjectCard({ title, summary, tech, images = [], slug }) {
  const [showAllTech, setShowAllTech] = useState(false);
  const [currentImage, setCurrentImage] = useState(0);

  const displayedTech = showAllTech ? tech : tech.slice(0, 3);

  const nextImage = (e) => {
    e.preventDefault();
    setCurrentImage((prev) => (prev + 1) % images.length);
  };

  const prevImage = (e) => {
    e.preventDefault();
    setCurrentImage((prev) => (prev - 1 + images.length) % images.length);
  };

  return (
    <motion.div
      whileHover={{ scale: 1.02 }}
      className="border rounded-lg overflow-hidden shadow-sm hover:shadow-md transition bg-white dark:bg-neutral-800"
    >
      <Link href={`/projects/${slug}`} className="block">
        {images.length > 0 && (
          <div className="relative w-full h-48 overflow-hidden">
            <img
              src={images[currentImage]}
              alt={`${title} screenshot`}
              className="w-full h-full object-cover"
            />
            {images.length > 1 && (
              <>
                <button
                  onClick={prevImage}
                  className="absolute left-2 top-1/2 -translate-y-1/2 bg-black/30 text-white px-2 py-1 rounded"
                >
                  ◀
                </button>
                <button
                  onClick={nextImage}
                  className="absolute right-2 top-1/2 -translate-y-1/2 bg-black/30 text-white px-2 py-1 rounded"
                >
                  ▶
                </button>
              </>
            )}
          </div>
        )}

        <div className="p-4">
          <h3 className="text-xl font-semibold mb-1">{title}</h3>
          <p className="text-sm text-neutral-600 dark:text-neutral-300 mb-2">{summary}</p>

          {/* Tech Stack */}
          <div className="flex flex-wrap gap-2 mb-2">
            {displayedTech.map((t) => (
              <span key={t} className="px-2 py-1 text-xs bg-gray-100 dark:bg-neutral-700 rounded">
                {t}
              </span>
            ))}
          </div>

          {/* Toggle button */}
          {tech.length > 3 && (
            <button
              onClick={(e) => {
                e.preventDefault();
                setShowAllTech(!showAllTech);
              }}
              className="text-blue-500 text-xs hover:underline"
            >
              {showAllTech ? "Show Less" : `View All (${tech.length})`}
            </button>
          )}
        </div>
      </Link>
    </motion.div>
  );
}
