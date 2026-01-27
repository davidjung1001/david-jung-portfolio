"use client";

import Head from "next/head";
import HeroSection from "@/components/HeroSection";
import ProjectCard from "@/components/ProjectCard";
import ExperienceCard from "@/components/ExperienceCard";
import CourseworkCard from "@/components/CourseworkCard";

import { projects } from "@/lib/projects";
import { experience } from "@/lib/experience";
import { coursework } from "@/lib/coursework";

export default function HomePage() {
  const featuredProjects = projects.slice(0, 3);
  const recentExperience = experience.slice(0, 4);
  const relevantCoursework = coursework; // Show all coursework

  return (
    <>
      <Head>
        <title>David Jung&apos;s Portfolio</title>
        <meta name="description" content="David Jung's personal portfolio showcasing projects, experience, and coursework." />
      </Head>
      <HeroSection />

      {/* Experience Section */}
      <div className="max-w-5xl mx-auto px-4 py-16">
        <section className="mt-16">
          <h2 className="text-3xl font-semibold mb-6">Portfolio</h2>
          <div className="grid gap-8 md:grid-cols-2">
            {recentExperience.map((e, index) => (
              <ExperienceCard key={e.slug || `${e.title}-${e.company}-${index}`} {...e} />
            ))}
          </div>
        </section>
        
        {/* Coursework Section */}
        <section className="mt-16">
          <h2 className="text-3xl font-semibold mb-6">Relevant Coursework</h2>
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {relevantCoursework.map((c, index) => (
              <CourseworkCard key={`${c.title}-${c.institution}-${index}`} {...c} />
            ))}
          </div>
        </section>
      </div>
    </>
  );
}