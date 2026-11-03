"use client";
import React, { useEffect, useState } from "react";

const navLinks = [
  { name: "Home", href: "#top" },
  { name: "About Us", href: "#about" },
  { name: "Products", href: "#products" },
  { name: "Swap Projects", href: "#projects" },
  { name: "Brands", href: "#brands" },
  { name: "Contact Us", href: "#contact" },
];

function Arrow({ className = "" }) {
  return (
    <svg aria-hidden="true" className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8} d="M5 12h14m-6-6 6 6-6 6" />
    </svg>
  );
}

function Header() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // lock page scroll while the mobile menu is open
  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <>
      {/* Utility bar */}
      <div className="hidden bg-ink text-paper/70 md:block">
        <div className="mx-auto flex h-9 max-w-7xl items-center justify-between px-6 lg:px-8">
          <p className="eyebrow text-[0.66rem]!">
            Wholesale windows, doors &amp; glass <span className="mx-2 text-gold">/</span> USA · Canada · Europe
          </p>
          <div className="eyebrow flex items-center gap-6 text-[0.66rem]!">
            <a href="tel:+18772127927" className="transition-colors hover:text-champagne">
              877-212-SWAP
            </a>
            <a href="mailto:SWAP@swapwindows.com" className="transition-colors hover:text-champagne">
              SWAP@swapwindows.com
            </a>
          </div>
        </div>
      </div>

      <header
        className={`sticky top-0 z-50 border-b transition-all duration-300 ${
          scrolled || open
            ? "border-ink/10 bg-paper/85 shadow-[0_10px_30px_-20px_rgba(6,24,46,0.35)] backdrop-blur-xl"
            : "border-transparent bg-paper"
        }`}
      >
        <div className="mx-auto flex h-20 max-w-7xl items-center justify-between px-6 lg:px-8">
          {/* Logo */}
          <a href="#top" aria-label="SWAP Windows home" className="relative z-[60] shrink-0">
            <img src="/logo.webp" alt="SWAP Windows" className="h-11 w-auto" />
          </a>

          {/* Desktop nav */}
          <nav className="hidden items-center gap-9 lg:flex" aria-label="Primary">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="link-draw py-1 text-[0.82rem] font-semibold tracking-wide text-ink/75 transition-colors hover:text-navy"
              >
                {link.name}
              </a>
            ))}
          </nav>

          {/* CTA */}
          <a
            href="#contact"
            className="group hidden items-center gap-3 rounded-xl bg-navy py-2.5 pr-2.5 pl-6 text-[0.82rem] font-semibold text-paper transition-colors duration-300 hover:bg-ink lg:inline-flex"
          >
            Get a Quote
            <span className="grid size-8 place-items-center rounded-xl bg-gold text-ink transition-transform duration-300 group-hover:rotate-[-45deg]">
              <Arrow className="size-4" />
            </span>
          </a>

          {/* Mobile burger */}
          <button
            type="button"
            onClick={() => setOpen((v) => !v)}
            aria-label={open ? "Close menu" : "Open menu"}
            aria-expanded={open}
            className="relative z-[60] grid size-11 place-items-center rounded-xl border border-ink/15 lg:hidden"
          >
            <span className="relative block h-3 w-5">
              <span
                className={`absolute left-0 h-px w-5 bg-ink transition-all duration-300 ${
                  open ? "top-1.5 rotate-45" : "top-0"
                }`}
              />
              <span
                className={`absolute top-1.5 left-0 h-px w-5 bg-ink transition-opacity duration-200 ${
                  open ? "opacity-0" : "opacity-100"
                }`}
              />
              <span
                className={`absolute left-0 h-px w-5 bg-ink transition-all duration-300 ${
                  open ? "top-1.5 -rotate-45" : "top-3"
                }`}
              />
            </span>
          </button>
        </div>
      </header>

      {/* Mobile full-screen menu */}
      <div
        className={`fixed inset-0 z-40 flex flex-col bg-ink px-6 pt-28 pb-10 text-paper transition-all duration-500 lg:hidden ${
          open ? "visible opacity-100" : "invisible opacity-0"
        }`}
      >
        <nav className="flex flex-1 flex-col justify-center gap-1" aria-label="Mobile">
          {navLinks.map((link, i) => (
            <a
              key={link.name}
              href={link.href}
              onClick={() => setOpen(false)}
              className="group flex items-baseline gap-4 border-b border-white/10 py-3.5"
              style={{
                transitionDelay: open ? `${i * 55}ms` : "0ms",
              }}
            >
              <span className="eyebrow text-gold">0{i + 1}</span>
              <span className="font-display text-[2.4rem] leading-none transition-colors group-hover:text-champagne">
                {link.name}
              </span>
            </a>
          ))}
        </nav>
        <a
          href="#contact"
          onClick={() => setOpen(false)}
          className="mt-6 flex items-center justify-center gap-3 rounded-xl bg-gold py-4 text-sm font-bold text-ink"
        >
          Get a Quote <Arrow className="size-4" />
        </a>
      </div>
    </>
  );
}

export default Header;
