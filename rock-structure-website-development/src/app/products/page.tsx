import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { company, products } from "@/lib/content";

export const metadata: Metadata = {
  title: "Products",
  description: "Cement, purlines, steel windows, copper pipes, meter boxes, Glatex and quarry stones from Rock Structure Construction.",
};

export default function ProductsPage() {
  return (
    <>
      <section className="page-hero" aria-labelledby="products-page-title">
        <div className="shell page-hero-grid">
          <div>
            <p className="eyebrow">Products / Building supplies</p>
            <h1 id="products-page-title">Materials for the work at hand.</h1>
          </div>
          <p>{company.capabilities}</p>
        </div>
      </section>

      <section className="section" aria-labelledby="product-list-title">
        <div className="shell">
          <div className="section-header">
            <div>
              <p className="eyebrow">Seven products</p>
              <h2 id="product-list-title" className="section-heading">Supplies listed by Rock Structure.</h2>
            </div>
            <Link className="text-link" href="/contact?subject=Product%20quote">Request a quote</Link>
          </div>
          <div className="product-grid">
            {products.map((product) => (
              <article key={product.name} className="product-card">
                <div className="product-image">
                  <Image src={product.image} alt={product.alt} fill sizes="(max-width: 720px) 100vw, 50vw" className="cover-image" />
                </div>
                <div className="product-copy">
                  <p className="eyebrow">{product.group}</p>
                  <h2>{product.name}</h2>
                  <p>{product.description}</p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section section-rule" aria-labelledby="product-note-title">
        <div className="shell intro-grid">
          <p className="eyebrow">From the current products page</p>
          <div className="intro-copy">
            <h2 id="product-note-title">A wider list is available on request.</h2>
            <p>The source page groups products under Sub &amp; Superstructures, Carpentry, Iron Mongery, Plumbing, Electricals and Paints. The seven products above are the products selected for this site.</p>
            <Link className="text-link" href="/contact?subject=Product%20quote">Ask about availability</Link>
          </div>
        </div>
      </section>

      <section className="section section-dark" aria-labelledby="products-cta-title">
        <div className="shell cta-band">
          <h2 id="products-cta-title">Need materials for a project?</h2>
          <Link className="button button-light" href="/contact?subject=Product%20quote">Request a quote</Link>
        </div>
      </section>
    </>
  );
}
