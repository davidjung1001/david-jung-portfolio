"use client";
import Link from "next/link";
import { motion } from "framer-motion";
import { useState } from "react";
import { ChevronDown, ArrowRight } from "lucide-react";

export default function ExperienceCard({
  title,
  company,
  period,
  image,
  images,
  summary,
  tech,
  slug,
}) {
  const [showAllTech, setShowAllTech] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0);

  const displayedTech = showAllTech ? tech : tech.slice(0, 3);
  
  // Handle both formats: array of objects {src, caption} or just strings
  const hasMultipleImages = images && images.length > 1;
  const displayImages = hasMultipleImages 
    ? images.map(img => typeof img === 'string' ? img : img.src)
    : (image ? [image] : []);

  const handleImageClick = (e) => {
    if (!hasMultipleImages) return;
    e.preventDefault();
    setCurrentIndex((prev) => (prev + 1) % displayImages.length);
  };

  return (
    <motion.div
      whileHover={{ scale: 1.02 }}
      className="border rounded-lg overflow-hidden shadow-sm hover:shadow-md transition bg-white dark:bg-neutral-800 relative"
    >
      {/* Image carousel */}
      {displayImages.length > 0 && (
        <div 
          className="relative cursor-pointer" 
          onClick={handleImageClick}
        >
          <img 
            src={displayImages[currentIndex]} 
            alt={`${title} - ${currentIndex + 1}`} 
            className="w-full h-48 object-cover" 
          />

          {/* Dots indicator */}
          {hasMultipleImages && (
            <div className="absolute bottom-2 left-0 right-0 flex justify-center gap-1">
              {displayImages.map((_, idx) => (
                <div
                  key={idx}
                  className={`w-2 h-2 rounded-full transition ${
                    idx === currentIndex
                      ? "bg-white"
                      : "bg-white/50"
                  }`}
                />
              ))}
            </div>
          )}
        </div>
      )}

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

      {/* View Details Arrow - Bottom Right */}
      <Link
        href={`/experience/${slug || title.toLowerCase().replace(/\s+/g, "-")}`}
        className="absolute bottom-3 right-3 p-2 bg-black text-white dark:bg-white dark:text-black rounded-full hover:bg-gray-800 dark:hover:bg-gray-200 transition"
      >
        <ArrowRight size={16} />
      </Link>
    </motion.div>
  );
}