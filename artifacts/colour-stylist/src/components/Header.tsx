import { useState } from "react";
import { Link, useLocation } from "wouter";

const WHATSAPP_LINK = "https://wa.me/447974209963";

const services = [
  { label: "Colour Analysis in Person", href: "/services/colour-analysis-in-person" },
  { label: "Colour Analysis with Friends", href: "/services/colour-analysis-with-friends" },
  { label: "Wardrobe Declutter", href: "/services/wardrobe-declutter" },
];

const navLinks = [
  { label: "Home", href: "/" },
  { label: "Services", href: "/services", hasDropdown: true },
  { label: "About", href: "/about" },
  { label: "What is Colour Analysis", href: "/what-is-colour-analysis" },
  { label: "Testimonials", href: "/testimonials" },
  { label: "Contact", href: "/contact" },
];

export default function Header() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);
  const [mobileServicesOpen, setMobileServicesOpen] = useState(false);
  const [location] = useLocation();

  return (
    <header className="sticky top-0 z-50 bg-white border-b border-[hsl(350,20%,88%)]" style={{ boxShadow: "0 1px 8px rgba(0,0,0,0.04)" }}>
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <Link href="/" className="flex flex-col leading-none no-underline">
            <span className="font-serif text-xl tracking-wide text-[hsl(220,15%,25%)]" style={{ fontFamily: "'Playfair Display', Georgia, serif", letterSpacing: "0.06em" }}>
              The Colour Stylist
            </span>
            <span className="text-[10px] tracking-[0.22em] uppercase text-[hsl(185,42%,33%)] font-sans mt-0.5" style={{ letterSpacing: "0.22em" }}>
              Colour &amp; Image Consulting
            </span>
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden lg:flex items-center gap-8">
            {navLinks.map((link) =>
              link.hasDropdown ? (
                <div
                  key={link.label}
                  className="relative"
                  onMouseEnter={() => setServicesOpen(true)}
                  onMouseLeave={() => setServicesOpen(false)}
                >
                  <button
                    className={`text-[0.8125rem] tracking-[0.08em] uppercase font-sans font-medium transition-colors duration-200 flex items-center gap-1 ${
                      location.startsWith("/services") ? "text-[hsl(185,42%,33%)]" : "text-[hsl(220,15%,35%)] hover:text-[hsl(185,42%,33%)]"
                    }`}
                    style={{ letterSpacing: "0.08em" }}
                  >
                    {link.label}
                    <svg width="10" height="6" viewBox="0 0 10 6" fill="none" className="mt-0.5 opacity-60">
                      <path d="M1 1l4 4 4-4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
                    </svg>
                  </button>
                  {servicesOpen && (
                    <div className="absolute top-full left-0 mt-2 w-64 bg-white border border-[hsl(350,20%,88%)] shadow-lg py-2 z-50">
                      {services.map((s) => (
                        <Link
                          key={s.href}
                          href={s.href}
                          className="block px-5 py-3 text-[0.8rem] text-[hsl(220,15%,35%)] hover:text-[hsl(185,42%,33%)] hover:bg-[hsl(350,30%,97%)] transition-colors duration-150 no-underline"
                          style={{ letterSpacing: "0.02em" }}
                        >
                          {s.label}
                        </Link>
                      ))}
                    </div>
                  )}
                </div>
              ) : (
                <Link
                  key={link.label}
                  href={link.href}
                  className={`text-[0.8125rem] tracking-[0.08em] uppercase font-sans font-medium no-underline transition-colors duration-200 ${
                    location === link.href ? "text-[hsl(185,42%,33%)]" : "text-[hsl(220,15%,35%)] hover:text-[hsl(185,42%,33%)]"
                  }`}
                  style={{ letterSpacing: "0.08em" }}
                >
                  {link.label}
                </Link>
              )
            )}
          </nav>

          {/* Desktop CTA */}
          <a
            href={WHATSAPP_LINK}
            target="_blank"
            rel="noopener noreferrer"
            className="hidden lg:inline-flex items-center gap-2 btn-teal text-xs"
          >
            <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor">
              <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z"/>
              <path d="M12 0C5.373 0 0 5.373 0 12c0 2.124.558 4.118 1.533 5.848L0 24l6.335-1.524A11.935 11.935 0 0012 24c6.627 0 12-5.373 12-12S18.627 0 12 0zm0 22c-1.875 0-3.635-.5-5.157-1.372l-.371-.22-3.824.92.955-3.727-.236-.38A9.94 9.94 0 012 12C2 6.477 6.477 2 12 2s10 4.477 10 10-4.477 10-10 10z"/>
            </svg>
            WhatsApp
          </a>

          {/* Mobile Hamburger */}
          <button
            className="lg:hidden p-2 text-[hsl(220,15%,35%)]"
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-label="Toggle menu"
          >
            {mobileOpen ? (
              <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                <path d="M6 18L18 6M6 6l12 12"/>
              </svg>
            ) : (
              <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                <path d="M3 12h18M3 6h18M3 18h18"/>
              </svg>
            )}
          </button>
        </div>

        {/* Mobile Menu */}
        {mobileOpen && (
          <div className="lg:hidden border-t border-[hsl(350,20%,88%)] py-4">
            <nav className="flex flex-col gap-1">
              {navLinks.map((link) =>
                link.hasDropdown ? (
                  <div key={link.label}>
                    <button
                      className="w-full flex items-center justify-between px-2 py-3 text-[0.8125rem] tracking-[0.08em] uppercase font-medium text-[hsl(220,15%,35%)]"
                      onClick={() => setMobileServicesOpen(!mobileServicesOpen)}
                    >
                      {link.label}
                      <svg width="10" height="6" viewBox="0 0 10 6" fill="none" className={`transition-transform ${mobileServicesOpen ? "rotate-180" : ""}`}>
                        <path d="M1 1l4 4 4-4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
                      </svg>
                    </button>
                    {mobileServicesOpen && (
                      <div className="pl-4 border-l border-[hsl(350,20%,88%)] ml-2 mb-1">
                        {services.map((s) => (
                          <Link
                            key={s.href}
                            href={s.href}
                            className="block py-2.5 px-2 text-[0.8rem] text-[hsl(220,15%,45%)] hover:text-[hsl(185,42%,33%)] no-underline"
                            onClick={() => setMobileOpen(false)}
                          >
                            {s.label}
                          </Link>
                        ))}
                      </div>
                    )}
                  </div>
                ) : (
                  <Link
                    key={link.label}
                    href={link.href}
                    className={`block px-2 py-3 text-[0.8125rem] tracking-[0.08em] uppercase font-medium no-underline ${
                      location === link.href ? "text-[hsl(185,42%,33%)]" : "text-[hsl(220,15%,35%)]"
                    }`}
                    onClick={() => setMobileOpen(false)}
                  >
                    {link.label}
                  </Link>
                )
              )}
              <div className="pt-3 mt-2 border-t border-[hsl(350,20%,88%)]">
                <a
                  href={WHATSAPP_LINK}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-teal block text-center text-xs"
                >
                  Contact via WhatsApp
                </a>
              </div>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
}
