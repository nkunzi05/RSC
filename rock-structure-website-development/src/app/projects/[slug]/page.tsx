import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { company, getProject, projects } from "@/lib/content";

type ProjectPageProps = {
  params: Promise<{ slug: string }>;
};

export function generateStaticParams() {
  return projects.map((project) => ({ slug: project.slug }));
}

export async function generateMetadata({ params }: ProjectPageProps): Promise<Metadata> {
  const { slug } = await params;
  const project = getProject(slug);
  if (!project) return { title: "Project not found" };
  return {
    title: project.title,
    description: project.description || `${project.title} — ${project.category}.`,
    openGraph: {
      title: project.title,
      description: project.description || `${project.title} — ${project.category}.`,
      images: [{ url: project.image, alt: project.alt }],
    },
  };
}

export default async function ProjectDetailPage({ params }: ProjectPageProps) {
  const { slug } = await params;
  const project = getProject(slug);
  if (!project) notFound();

  const currentIndex = projects.findIndex((item) => item.slug === project.slug);
  const previous = projects[(currentIndex - 1 + projects.length) % projects.length];
  const next = projects[(currentIndex + 1) % projects.length];
  const gallery = project.gallery || [];

  return (
    <>
      <section className="project-detail-hero" aria-labelledby="project-title">
        <div className="shell">
          <p className="eyebrow">{project.category}</p>
          <h1 id="project-title">{project.title}</h1>
          <div className="project-detail-meta">
            <span>Project archive</span>
            <span aria-hidden="true">/</span>
            <Link href="/projects">Back to all projects</Link>
          </div>
        </div>
      </section>

      <section className="shell detail-feature" aria-label={`${project.title} featured image`}>
        <Image src={project.image} alt={project.alt} fill priority sizes="(max-width: 720px) 100vw, 1360px" className="cover-image" />
      </section>

      {project.description ? (
        <section className="shell project-detail-copy" aria-labelledby="project-description-title">
          <h2 id="project-description-title">The work</h2>
          <p>{project.description}</p>
        </section>
      ) : null}

      {gallery.length > 0 ? (
        <section className="section-tight" aria-labelledby="gallery-title">
          <div className="shell">
            <div className="section-header">
              <div>
                <p className="eyebrow">{project.category}</p>
                <h2 id="gallery-title" className="section-heading">Project gallery</h2>
              </div>
            </div>
            <div className="gallery">
              {gallery.map((image, index) => (
                <div className="gallery-item" key={image}>
                  <Image src={image} alt={`${project.title}, project gallery image ${index + 1}`} fill sizes="(max-width: 720px) 50vw, 33vw" className="cover-image" loading="lazy" />
                </div>
              ))}
            </div>
          </div>
        </section>
      ) : null}

      <section className="section-tight" aria-label="Project navigation">
        <div className="shell detail-nav">
          <Link className="detail-nav-link" href={`/projects/${previous.slug}`}>
            <span className="eyebrow">Previous project</span>
            <p>{previous.title}</p>
          </Link>
          <Link className="detail-nav-link next" href={`/projects/${next.slug}`}>
            <span className="eyebrow">Next project</span>
            <p>{next.title}</p>
          </Link>
        </div>
      </section>

      <section className="section section-dark" aria-labelledby="project-cta-title">
        <div className="shell cta-band">
          <h2 id="project-cta-title">Talk to {company.shortName} about your next project.</h2>
          <Link className="button button-light" href="/contact">Make an enquiry</Link>
        </div>
      </section>
    </>
  );
}
