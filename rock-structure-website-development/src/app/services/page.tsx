import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { company, services } from "@/lib/content";

export const metadata: Metadata = {
  title: "Services",
  description: "Building, roads, driveways, dams, irrigation, water and sewer reticulation, and architectural designs from Rock Structure Construction.",
};

const additionalWork = [
  "Excavations",
  "Marking Out",
  "Concreting",
  "Brick & Block Laying",
  "Plastering",
  "Iron Mongery",
  "Roof Tiling",
  "Floor & Wall Tiling",
  "Glazing",
  "Carpentry Works",
  "Painting",
  "Plumbing",
  "Flooring",
  "Scheming",
  "Aluminium Works",
];

export default function ServicesPage() {
  return (
    <>
      <section className="page-hero" aria-labelledby="services-page-title">
        <div className="shell page-hero-grid">
          <div>
            <p className="eyebrow">Services / 07 areas</p>
            <h1 id="services-page-title">The work between the drawing and the finished place.</h1>
          </div>
          <p>{company.mission}</p>
        </div>
      </section>

      <section className="section" aria-labelledby="service-list-title">
        <div className="shell">
          <div className="section-header">
            <div>
              <p className="eyebrow">What the company does</p>
              <h2 id="service-list-title" className="section-heading">Construction, civil work and design.</h2>
            </div>
          </div>
          <div className="service-gallery">
            {services.map((service, index) => (
              <article key={service.number} className={`service-tile ${index === 0 ? "service-tile-lead" : ""}`}>
                <div className="service-tile-image">
                  <Image
                    src={service.image}
                    alt={service.alt}
                    fill
                    priority={index < 2}
                    sizes={index === 0 ? "(max-width: 720px) 100vw, 66vw" : "(max-width: 720px) 100vw, 33vw"}
                    className="cover-image"
                  />
                </div>
                <div className="service-tile-copy">
                  <span className="service-number">{service.number}</span>
                  <h3 className="service-title">{service.title}</h3>
                  <p>{service.description}</p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section section-rule" aria-labelledby="additional-work-title">
        <div className="shell intro-grid">
          <p className="eyebrow">Also listed on the site</p>
          <div className="intro-copy">
            <h2 id="additional-work-title">The detail work matters too.</h2>
            <p>The current services page also lists the following work:</p>
            <div className="tag-list" aria-label="Additional services">
              {additionalWork.map((item) => <span key={item}>{item}</span>)}
            </div>
          </div>
        </div>
      </section>

      <section className="section section-dark" aria-labelledby="service-cta-title">
        <div className="shell cta-band">
          <h2 id="service-cta-title">Tell us what needs building.</h2>
          <Link className="button button-light" href="/contact">Contact the team</Link>
        </div>
      </section>
    </>
  );
}
