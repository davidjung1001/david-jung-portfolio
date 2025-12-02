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
  const recentExperience = experience.slice(0, 3);
  const relevantCoursework = coursework.slice(0, 4);

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
          <h2 className="text-3xl font-semibold mb-6">Experience</h2>
          <div className="grid gap-6 sm:grid-cols-2">
            {recentExperience.map((e) => (
              <ExperienceCard key={e.slug || e.title + e.company} {...e} />
            ))}
          </div>
        </section>


        {/* Projects Section */}
        <section className="mt-16">
          <h2 className="text-3xl font-semibold mb-6">Featured Projects</h2>
          <div className="grid gap-6 sm:grid-cols-2">
            {featuredProjects.map((p) => (
              <ProjectCard key={p.slug} {...p} />
            ))}
          </div>
        </section>


        {/* Coursework Section */}
        <section className="mt-16">
          <h2 className="text-3xl font-semibold mb-6">Relevant Coursework</h2>
          <div className="grid gap-6 sm:grid-cols-2">
            {relevantCoursework.map((c) => (
              <CourseworkCard key={c.title + c.institution} {...c} />
            ))}
          </div>
        </section>
      </div>
    </>
  );
}
