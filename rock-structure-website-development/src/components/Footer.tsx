import Link from "next/link";
import { company } from "@/lib/content";

export function Footer() {
  return (
    <footer className="site-footer">
      <div className="shell footer-grid">
        <div>
          <p className="footer-kicker">{company.tagline}</p>
          <p className="footer-name">Rock Structure<br />Construction</p>
        </div>
        <div className="footer-column">
          <p className="footer-label">Contact</p>
          <Link href={company.phoneHref}>{company.phone}</Link>
          <Link href={`mailto:${company.email}`}>{company.email}</Link>
          <Link href={company.whatsappHref} target="_blank" rel="noreferrer">WhatsApp</Link>
        </div>
        <div className="footer-column">
          <p className="footer-label">Offices</p>
          <p>Harare<br />{company.harare}</p>
          <p>Chinhoyi<br />{company.chinhoyi}</p>
        </div>
        <div className="footer-column">
          <p className="footer-label">Elsewhere</p>
          <Link href={company.facebook} target="_blank" rel="noreferrer">Facebook</Link>
          <Link href={company.instagram} target="_blank" rel="noreferrer">Instagram</Link>
          <Link href={company.maps} target="_blank" rel="noreferrer">Google Maps</Link>
        </div>
      </div>
      <div className="shell footer-bottom">
        <p>© {company.name}</p>
        <p>Zimbabwe</p>
      </div>
    </footer>
  );
}
