import type { Metadata } from "next";
import Link from "next/link";
import { ContactForm } from "@/components/ContactForm";
import { company } from "@/lib/content";

export const metadata: Metadata = {
  title: "Contact",
  description: "Contact Rock Structure Construction in Zimbabwe by phone, email or enquiry form.",
};

export default function ContactPage() {
  return (
    <>
      <section className="page-hero" aria-labelledby="contact-page-title">
        <div className="shell page-hero-grid">
          <div>
            <p className="eyebrow">Contact / Start a conversation</p>
            <h1 id="contact-page-title">Tell us what needs to be built.</h1>
          </div>
          <p>Call, email or send an enquiry. The sales team is ready to respond to your query.</p>
        </div>
      </section>

      <section className="section" aria-labelledby="contact-details-title">
        <div className="shell contact-layout">
          <div className="contact-details">
            <p className="eyebrow">Get in touch</p>
            <h2 id="contact-details-title">The right place to start.</h2>
            <div className="contact-item">
              <p className="footer-label">Phone</p>
              <p><Link href={company.phoneHref}>{company.phone}</Link></p>
              <div className="contact-quick-links">
                <Link href={company.phoneHref}>Call us</Link>
                <Link href={company.whatsappHref} target="_blank" rel="noreferrer">WhatsApp</Link>
              </div>
            </div>
            <div className="contact-item">
              <p className="footer-label">Email</p>
              <p><Link href={`mailto:${company.email}`}>{company.email}</Link></p>
            </div>
            <div className="contact-item">
              <p className="footer-label">Harare office</p>
              <p>{company.harare}</p>
            </div>
            <div className="contact-item">
              <p className="footer-label">Chinhoyi office</p>
              <p>{company.chinhoyi}</p>
            </div>
            <div className="contact-quick-links">
              <Link href={company.maps} target="_blank" rel="noreferrer">Google Maps</Link>
              <Link href={company.facebook} target="_blank" rel="noreferrer">Facebook</Link>
              <Link href={company.instagram} target="_blank" rel="noreferrer">Instagram</Link>
            </div>
          </div>
          <div>
            <div className="form-heading">
              <p className="eyebrow">Enquiry form</p>
              <h2>Send the details to the sales team.</h2>
              <p>Send an email via the contact form below. The sales team will be ready to respond to your queries.</p>
            </div>
            <ContactForm />
          </div>
        </div>
      </section>
    </>
  );
}
