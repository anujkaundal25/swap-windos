"use client";
import React, { useState } from "react";
import Reveal from "@/componenets/ui/Reveal";

const categories = ["All Projects", "Steel", "Wood", "Aluminum", "PVC"];

const projectsData = [
  {
    id: 1,
    title: "Steel Security Doors",
    description: "Heavy-duty steel framed modern entry doors",
    category: "Steel",
    image: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=900&q=80",
  },
  {
    id: 2,
    title: "Custom Wood Windows",
    description: "Handcrafted timber casement windows with thermal glass",
    category: "Wood",
    image: "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=900&q=80",
  },
  {
    id: 3,
    title: "Aluminum Glass Walls",
    description: "Floor-to-ceiling slim profile sliding door systems",
    category: "Aluminum",
    image: "https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?auto=format&fit=crop&w=1200&q=80",
    tall: true,
  },
  {
    id: 4,
    title: "PVC Energy-Efficient Doors",
    description: "Weather-resistant multi-chamber profile patio doors",
    category: "PVC",
    image: "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?auto=format&fit=crop&w=900&q=80",
  },
  {
    id: 5,
    title: "Architectural Steel Framing",
    description: "Industrial aesthetic internal glass partitions",
    category: "Steel",
    image: "https://images.unsplash.com/photo-1600585154526-990dced4db0d?auto=format&fit=crop&w=900&q=80",
  },
];

function Projects() {
  const [activeCategory, setActiveCategory] = useState("All Projects");

  const filteredProjects =
    activeCategory === "All Projects"
      ? projectsData
      : projectsData.filter((item) => item.category === activeCategory);

  const countFor = (c) =>
    c === "All Projects" ? projectsData.length : projectsData.filter((p) => p.category === c).length;

  return (
    <section id="projects" className="relative bg-paper-2 py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        {/* Heading */}
        <div className="flex flex-col gap-10 lg:flex-row lg:items-end lg:justify-between">
          <Reveal>
            <p className="eyebrow flex items-center gap-3 text-gold">
              <span className="h-px w-10 bg-gold" />
              03 — Selected work
            </p>
            <h2 className="mt-6 text-[clamp(2.4rem,5vw,4.4rem)] leading-[1.02] text-navy">
              Choose your <em className="text-gold">style</em>.
            </h2>
          </Reveal>

          {/* Filter tabs */}
          <Reveal delay={120}>
            <div role="tablist" aria-label="Filter projects by material" className="flex flex-wrap gap-2">
              {categories.map((category) => {
                const isActive = activeCategory === category;
                return (
                  <button
                    key={category}
                    role="tab"
                    aria-selected={isActive}
                    onClick={() => setActiveCategory(category)}
                    className={`eyebrow inline-flex items-center gap-2 rounded-full border px-4 py-2.5 text-[0.68rem]! transition-all duration-300 ${
                      isActive
                        ? "border-navy bg-navy text-paper"
                        : "border-ink/20 text-ink/70 hover:border-navy hover:text-navy"
                    }`}
                  >
                    {category}
                    <span className={isActive ? "text-champagne" : "text-gold"}>{countFor(category)}</span>
                  </button>
                );
              })}
            </div>
          </Reveal>
        </div>

        {/* Grid */}
        <div className="mt-14 grid grid-cols-1 gap-5 md:auto-rows-[290px] md:grid-cols-3">
          {filteredProjects.map((project, i) => (
            <article
              key={`${activeCategory}-${project.id}`}
              className={`card-in group relative h-80 overflow-hidden rounded-sm bg-navy md:h-auto ${
                project.tall ? "md:row-span-2" : ""
              }`}
              style={{ "--d": `${i * 70}ms` }}
            >
              <img
                src={project.image}
                alt={project.title}
                loading="lazy"
                className="h-full w-full object-cover transition-transform duration-[1200ms] ease-out group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-linear-to-t from-ink/90 via-ink/15 to-transparent" />

              {/* window-frame outline on hover */}
              <div className="pointer-events-none absolute inset-4 border border-white/0 transition-all duration-500 group-hover:inset-3 group-hover:border-white/60" />

              {/* <div className="absolute inset-x-0 bottom-0 flex items-end justify-between gap-4 p-6 text-paper">
                <div>
                  <p className="eyebrow text-[0.62rem]! text-champagne">{project.category}</p>
                  <h3 className="mt-1.5 text-[1.7rem] leading-[1.05]">{project.title}</h3>
                  <p className="mt-2 max-w-xs text-xs leading-5 text-paper/70 transition-all duration-500 lg:translate-y-2 lg:opacity-0 lg:group-hover:translate-y-0 lg:group-hover:opacity-100">
                    {project.description}
                  </p>
                </div>
                <a
                  href="#contact"
                  aria-label={`View ${project.title}`}
                  className="grid size-11 shrink-0 place-items-center rounded-full bg-gold text-ink transition-all duration-300 group-hover:rotate-[-45deg] group-hover:bg-champagne"
                >
                  <svg aria-hidden="true" className="size-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8} d="M5 12h14m-6-6 6 6-6 6" />
                  </svg>
                </a>
              </div> */}
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Projects;
