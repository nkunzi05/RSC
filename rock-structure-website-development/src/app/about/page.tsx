import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { company } from "@/lib/content";

export const metadata: Metadata = {
  title: "About",
  description: "Company background, vision, mission, values and offices for Rock Structure Construction (Pvt) Ltd.",
};

export default function AboutPage() {
  return (
    <>
      <section className="page-hero" aria-labelledby="about-page-title">
        <div className="shell page-hero-grid">
          <div>
            <p className="eyebrow">About / Company background</p>
            <h1 id="about-page-title">A Zimbabwean construction company with the work in view.</h1>
          </div>
          <p>{company.mission}</p>
        </div>
      </section>

      <section className="section" aria-labelledby="background-title">
        <div className="shell about-grid">
          <p className="eyebrow">Company background</p>
          <div className="about-copy">
            <h2 id="background-title">Building construction, roads and the systems around them.</h2>
            <p>{company.background}</p>
            <p>{company.capabilities}</p>
            <div className="about-image">
              <Image
                src="https://rockstructure.construction/wp-content/uploads/2021/11/company-background-section-784x700.jpg"
                alt="Construction work shown on Rock Structure Construction's company background page"
                fill
                sizes="(max-width: 720px) 100vw, 65vw"
                className="cover-image"
              />
            </div>
          </div>
        </div>
      </section>

      <section className="section section-rule" aria-labelledby="vision-title">
        <div className="shell about-grid">
          <p className="eyebrow">Vision statement</p>
          <div className="about-copy">
            <h2 id="vision-title">High quality services and products.</h2>
            <p>Rock Structure construction strives to be a world class construction company serving customers with high quality services and products. This is to be achieved through continuous training of personnel to meet the current, technological, environmental and economic standards. It is also achieved through the provision of high quality machines and tools to meet the current trends.</p>
            <p className="about-quote">{company.mission}</p>
          </div>
        </div>
      </section>

      <section className="section section-rule" aria-labelledby="mission-title">
        <div className="shell about-grid">
          <p className="eyebrow">Mission statement</p>
          <div className="about-copy">
            <h2 id="mission-title">Dynamic services of the highest standards.</h2>
            <p>Rock Structure (Pvt) Limited is driven by the desire to provide dynamic services of the highest standards to its customers while serving the needs of shareholders.</p>
            <div className="about-image">
              <Image
                src="https://rockstructure.construction/wp-content/uploads/2021/11/our-values-section-1037x950.jpg"
                alt="Our values image from Rock Structure Construction's About page"
                fill
                sizes="(max-width: 720px) 100vw, 65vw"
                className="cover-image"
              />
            </div>
          </div>
        </div>
      </section>

      <section className="section section-rule" aria-labelledby="values-title">
        <div className="shell about-grid">
          <p className="eyebrow">Our values</p>
          <div className="about-copy">
            <h2 id="values-title">Standards, fair prices and required deadlines.</h2>
            <p>{company.values}</p>
          </div>
        </div>
      </section>

      <section className="section" aria-labelledby="about-offices-title">
        <div className="shell">
          <div className="section-header">
            <div>
              <p className="eyebrow">Where we are</p>
              <h2 id="about-offices-title" className="section-heading">Harare and Chinhoyi.</h2>
            </div>
            <Link className="text-link" href="/contact">Contact details</Link>
          </div>
          <div className="office-grid">
            <article className="office-card">
              <p className="eyebrow">Harare office</p>
              <h3>Harare</h3>
              <p>{company.harare}</p>
            </article>
            <article className="office-card">
              <p className="eyebrow">Chinhoyi office</p>
              <h3>Chinhoyi</h3>
              <p>{company.chinhoyi}</p>
            </article>
          </div>
        </div>
      </section>
    </>
  );
}
