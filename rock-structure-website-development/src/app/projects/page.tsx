import type { Metadata } from "next";
import { ProjectGrid } from "@/components/ProjectGrid";
import { company } from "@/lib/content";

export const metadata: Metadata = {
  title: "Projects",
  description: "A project archive of building, road, service station, renovation, drainage and infrastructure work by Rock Structure Construction.",
};

export default function ProjectsPage() {
  return (
    <>
      <section className="page-hero" aria-labelledby="projects-page-title">
        <div className="shell page-hero-grid">
          <div>
            <p className="eyebrow">Projects / Archive</p>
            <h1 id="projects-page-title">The places and infrastructure we have worked on.</h1>
          </div>
          <p>Rock Structure says it has completed more than 100 construction projects, including house construction, driveways, road construction and more.</p>
        </div>
      </section>
      <section className="section" aria-label="Project archive">
        <div className="shell">
          <ProjectGrid />
        </div>
      </section>
      <section className="section section-dark" aria-labelledby="projects-contact-title">
        <div className="shell cta-band">
          <h2 id="projects-contact-title">Have a project of your own?</h2>
          <a className="button button-light" href={`mailto:${company.email}`}>Email the team</a>
        </div>
      </section>
    </>
  );
}
