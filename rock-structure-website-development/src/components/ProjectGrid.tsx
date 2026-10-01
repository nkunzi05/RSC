"use client";

import { useMemo, useState } from "react";
import { projectFilters, projects } from "@/lib/content";
import { ProjectCard } from "@/components/ProjectCard";

const filterOptions = Array.from(
  new Set(["All", ...projectFilters.slice(1), ...projects.map((project) => project.category)]),
);

export function ProjectGrid() {
  const [activeFilter, setActiveFilter] = useState("All");
  const filteredProjects = useMemo(
    () => activeFilter === "All" ? projects : projects.filter((project) => project.category === activeFilter),
    [activeFilter],
  );

  return (
    <div>
      <div className="filter-bar" aria-label="Filter projects by category">
        {filterOptions.map((filter) => (
          <button
            type="button"
            key={filter}
            className={`filter-button ${activeFilter === filter ? "is-active" : ""}`}
            onClick={() => setActiveFilter(filter)}
            aria-pressed={activeFilter === filter}
          >
            {filter}
          </button>
        ))}
      </div>
      <p className="result-count" aria-live="polite">
        Showing {filteredProjects.length} {filteredProjects.length === 1 ? "project" : "projects"}
      </p>
      <div className="project-grid archive-grid">
        {filteredProjects.map((project) => (
          <ProjectCard key={project.slug} project={project} />
        ))}
      </div>
    </div>
  );
}
