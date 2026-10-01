"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useRef, useState, useSyncExternalStore } from "react";
import { company } from "@/lib/content";

const links = [
  { href: "/services", label: "Services" },
  { href: "/products", label: "Products" },
  { href: "/projects", label: "Projects" },
  { href: "/about", label: "About" },
  { href: "/contact", label: "Contact" },
];

function subscribeToScroll(onChange: () => void) {
  window.addEventListener("scroll", onChange, { passive: true });
  return () => window.removeEventListener("scroll", onChange);
}

function getScrollSnapshot() {
  return window.scrollY > 48;
}

function getServerScrollSnapshot() {
  return false;
}

export function Header() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const menuButton = useRef<HTMLButtonElement>(null);
  const scrolled = useSyncExternalStore(subscribeToScroll, getScrollSnapshot, getServerScrollSnapshot);
  const isHome = pathname === "/";
  const isOverHero = isHome && !scrolled && !open;

  useEffect(() => {
    if (!open) return;

    function handleEscape(event: KeyboardEvent) {
      if (event.key === "Escape") {
        setOpen(false);
        menuButton.current?.focus();
      }
    }

    document.addEventListener("keydown", handleEscape);
    return () => document.removeEventListener("keydown", handleEscape);
  }, [open]);

  return (
    <header className={`site-header ${isHome ? "is-home" : ""} ${isOverHero ? "is-over-hero" : ""} ${open ? "is-menu-open" : ""}`}>
      <div className="shell header-inner">
        <Link className="brand" href="/" aria-label={`${company.name} home`} onClick={() => setOpen(false)}>
          <span className="brand-mark">
            <Image
              src={company.headerLogo}
              alt={company.name}
              width={42}
              height={42}
              sizes="42px"
              priority
              className="brand-logo"
            />
          </span>
          <span className="brand-copy" aria-hidden="true">
            <span className="brand-name">Rock Structure</span>
            <span className="brand-descriptor">Construction</span>
          </span>
        </Link>

        <div className="header-actions">
          <Link className="header-cta" href="/contact" onClick={() => setOpen(false)}>
            <span className="cta-label-full">Get in touch</span>
            <span className="cta-label-short">Enquire</span>
            <span aria-hidden="true">↗</span>
          </Link>
          <button
            ref={menuButton}
            type="button"
            className="menu-toggle"
            aria-label={open ? "Close navigation" : "Open navigation"}
            aria-expanded={open}
            aria-controls="site-navigation"
            onClick={() => setOpen((value) => !value)}
          >
            <span className="menu-line" />
            <span className="menu-line" />
          </button>
        </div>

        <nav id="site-navigation" className={`site-nav ${open ? "is-open" : ""}`} aria-label="Primary navigation">
          {links.map((link) => {
            const active = pathname === link.href || pathname.startsWith(`${link.href}/`);
            return (
              <Link
                key={link.href}
                href={link.href}
                className={`nav-link ${active ? "is-active" : ""}`}
                aria-current={active ? "page" : undefined}
                onClick={() => setOpen(false)}
              >
                {link.label}
              </Link>
            );
          })}
        </nav>
      </div>
    </header>
  );
}
