import Image from "next/image";
import Link from "next/link";
import type { Project } from "@/lib/content";

type ProjectCardProps = {
  project: Project;
  priority?: boolean;
  compact?: boolean;
};

export function ProjectCard({ project, priority = false, compact = false }: ProjectCardProps) {
  return (
    <article className={`project-card ${compact ? "project-card-compact" : ""}`}>
      <Link href={`/projects/${project.slug}`} className="project-card-link">
        <div className="project-card-image">
          <Image
            src={project.image}
            alt={project.alt}
            fill
            priority={priority}
            sizes="(max-width: 700px) 100vw, (max-width: 1100px) 50vw, 33vw"
            className="cover-image"
          />
          <span className="project-card-arrow" aria-hidden="true">↗</span>
        </div>
        <div className="project-card-caption">
          <p className="eyebrow">{project.category}</p>
          <h3>{project.title}</h3>
        </div>
      </Link>
    </article>
  );
}
