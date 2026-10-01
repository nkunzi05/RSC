import Image from "next/image";
import Link from "next/link";
import { ProjectCard } from "@/components/ProjectCard";
import { company, homeHero, projects, services } from "@/lib/content";

const featuredProjects = projects.slice(0, 6);

export default function HomePage() {
  return (
    <>
      <section className="hero" aria-labelledby="hero-title">
        <div className="hero-image">
          <Image
            src={homeHero.image}
            alt={homeHero.imageAlt}
            fill
            priority
            sizes="100vw"
            className="cover-image hero-photo"
          />
        </div>
        <div className="hero-content">
          <p className="hero-kicker">{homeHero.eyebrow}</p>
          <h1 id="hero-title" className="hero-title">
            {homeHero.headlineLead}{" "}
            <span className="hero-emphasis">{homeHero.headlineEmphasis}</span>
            <span className="hero-title-ending">{" "}{homeHero.headlineEnd}</span>
          </h1>
          <p className="hero-copy">{homeHero.description}</p>
          <Link className="hero-cta" href={homeHero.ctaHref}>
            {homeHero.ctaLabel}
            <span aria-hidden="true">↗</span>
          </Link>
        </div>
        <div className="shell hero-footer">
          <Link className="hero-project-link" href={homeHero.projectHref}>
            <span className="hero-project-prefix">Featured project</span>
            <span className="hero-project-name">{homeHero.projectLabel} <span aria-hidden="true">↗</span></span>
          </Link>
          <a className="hero-scroll" href="#introduction">
            <span>Explore</span>
            <span aria-hidden="true">↓</span>
          </a>
        </div>
      </section>

      <section id="introduction" className="section" aria-labelledby="introduction-title">
        <div className="shell intro-grid">
          <p className="eyebrow">01 / The company</p>
          <div className="intro-copy">
            <h2 id="introduction-title">Construction work, from the ground up.</h2>
            <p>{company.background}</p>
            <p>{company.capabilities}</p>
            <p className="intro-note">{company.mission}</p>
            <Link className="text-link" href="/about">Who we are</Link>
          </div>
        </div>
      </section>

      <section className="section section-rule" aria-labelledby="services-title">
        <div className="shell">
          <div className="section-header">
            <div>
              <p className="eyebrow">02 / What we do</p>
              <h2 id="services-title" className="section-heading">Seven ways into the work.</h2>
            </div>
            <Link className="text-link" href="/services">All services</Link>
          </div>
          <div className="services-list">
            {services.map((service) => (
              <Link key={service.number} href="/services" className="service-row">
                <span className="service-number">{service.number}</span>
                <h3 className="service-title">{service.title}</h3>
                <p className="service-description">{service.description}</p>
                <span className="service-arrow" aria-hidden="true">↗</span>
                <span className="service-row-media" aria-hidden="true">
                  <Image src={service.image} alt="" fill sizes="235px" className="cover-image" />
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="section" aria-labelledby="projects-title">
        <div className="shell">
          <div className="section-header">
            <div>
              <p className="eyebrow">03 / Selected work</p>
              <h2 id="projects-title" className="section-heading">The work speaks clearly.</h2>
            </div>
            <Link className="text-link" href="/projects">View project archive</Link>
          </div>
          <div className="project-grid">
            {featuredProjects.map((project, index) => (
              <ProjectCard key={project.slug} project={project} priority={index < 2} />
            ))}
          </div>
        </div>
      </section>

      <section className="section section-dark" aria-labelledby="about-teaser-title">
        <div className="shell intro-grid">
          <p className="eyebrow">04 / Who we are</p>
          <div className="intro-copy">
            <h2 id="about-teaser-title">A wholly owned Zimbabwean company.</h2>
            <p>{company.background}</p>
            <p>{company.values}</p>
            <Link className="text-link" href="/about">Read about Rock Structure</Link>
          </div>
        </div>
      </section>

      <section className="section section-rule" aria-labelledby="offices-title">
        <div className="shell">
          <div className="section-header">
            <div>
              <p className="eyebrow">05 / Where we are</p>
              <h2 id="offices-title" className="section-heading">Two offices in Zimbabwe.</h2>
            </div>
            <Link className="text-link" href={company.maps} target="_blank" rel="noreferrer">Open Google Maps</Link>
          </div>
          <div className="office-grid">
            <article className="office-card">
              <p className="eyebrow">Harare office</p>
              <h3>Harare</h3>
              <p>{company.harare}</p>
              <Link className="text-link" href={company.maps} target="_blank" rel="noreferrer">Find this office</Link>
            </article>
            <article className="office-card">
              <p className="eyebrow">Chinhoyi office</p>
              <h3>Chinhoyi</h3>
              <p>{company.chinhoyi}</p>
              <Link className="text-link" href={company.maps} target="_blank" rel="noreferrer">Find this office</Link>
            </article>
          </div>
        </div>
      </section>

      <section className="section section-dark" aria-labelledby="home-cta-title">
        <div className="shell cta-band">
          <h2 id="home-cta-title">Have a project to put on solid ground?</h2>
          <Link className="button button-light" href="/contact">Start an enquiry</Link>
        </div>
      </section>
    </>
  );
}
