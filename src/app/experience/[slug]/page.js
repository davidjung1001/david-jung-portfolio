"use client";

import { experience } from "@/lib/experience";

export default function ExperienceDetail({ params }) {
  const { slug } = params;

  // Find the experience by explicit slug
  const exp = experience.find((e) => e.slug === slug);

  if (!exp) return <div className="text-center py-12">Experience not found</div>;

  return (
    <div className="max-w-4xl mx-auto py-12 px-4">
      {exp.image && (
        <img
          src={exp.image}
          alt={exp.title}
          className="w-full h-64 object-cover rounded-lg mb-6"
        />
      )}

      <h1 className="text-4xl font-bold mb-2">{exp.title}</h1>
      <p className="text-sm text-neutral-500 dark:text-neutral-300 mb-4">
        {exp.company} {exp.period && `• ${exp.period}`}
      </p>

      {/* Summary */}
      <p className="text-gray-700 dark:text-gray-200 mb-4">{exp.summary}</p>

      {/* Tech Stack */}
      <div className="mb-6">
        <h2 className="text-2xl font-semibold mb-2">Tech Stack / Skills</h2>
        <div className="flex flex-wrap gap-2">
          {exp.tech.map((t) => (
            <span
              key={t}
              className="px-3 py-1 bg-gray-100 dark:bg-neutral-800 rounded text-sm"
            >
              {t}
            </span>
          ))}
        </div>
      </div>

      {/* More Details */}
      <div className="mb-6">
        <h2 className="text-2xl font-semibold mb-2">Details</h2>
        <pre className="text-gray-700 dark:text-gray-300 whitespace-pre-line">
          {exp.moreDetails}
        </pre>
      </div>

      {/* External Link */}
      {exp.link && (
        <a
          href={exp.link}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block px-4 py-2 bg-black text-white rounded hover:bg-blue-600 transition"
        >
          View Live / Company
        </a>
      )}
    </div>
  );
}
