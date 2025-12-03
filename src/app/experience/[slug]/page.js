import { experience } from "@/lib/experience";

export default async function ExperienceDetail({ params }) {
  const { slug } = await params;
  const exp = experience.find((e) => e.slug === slug);

  if (!exp) {
    return <div className="text-center py-12">Experience not found</div>;
  }

  return (
    <div className="max-w-4xl mx-auto py-12 px-4">
      {/* Main header image */}
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

      {/* Project Walkthrough with Images and Captions */}
      {exp.images && exp.images.length > 0 && (
        <div className="mb-6">
          <h2 className="text-2xl font-semibold mb-4">Project Walkthrough</h2>
          <div className="space-y-8">
            {exp.images.map((item, index) => (
              <div key={index} className="rounded-lg overflow-hidden border border-gray-200 dark:border-neutral-700">
                <img
                  src={item.src}
                  alt={`${exp.title} - Image ${index + 1}`}
                  className="w-full h-auto"
                />
                <div className="p-4 bg-gray-50 dark:bg-neutral-800">
                  <p className="text-gray-700 dark:text-gray-300">{item.caption}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* External Link */}
      {exp.link && (
        <a href={exp.link} target="_blank" rel="noopener noreferrer" className="inline-block px-4 py-2 bg-black text-white rounded hover:bg-blue-600 transition">
          View Deployed Project!
        </a>
      )}
    </div>
  );
}