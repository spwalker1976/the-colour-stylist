import { useState, useRef } from "react";
import { Link, useLocation } from "wouter";

const WHATSAPP_LINK = "https://wa.me/447974209963";

const services = [
  { label: "Colour Analysis in Person", href: "/services/colour-analysis-in-person" },
  { label: "Colour Analysis with Friends", href: "/services/colour-analysis-with-friends" },
  { label: "Wardrobe Declutter", href: "/services/wardrobe-declutter" },
];

const navLinks = [
  { label: "About", href: "/about" },
  { label: "What is Colour Analysis", href: "/what-is-colour-analysis" },
  { label: "Testimonials", href: "/testimonials" },
  { label: "Contact", href: "/contact" },
];

const WhatsAppIcon = ({ size = 13 }: { size?: number }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z"/>
    <path d="M12 0C5.373 0 0 5.373 0 12c0 2.124.558 4.118 1.533 5.848L0 24l6.335-1.524A11.935 11.935 0 0012 24c6.627 0 12-5.373 12-12S18.627 0 12 0zm0 22c-1.875 0-3.635-.5-5.157-1.372l-.371-.22-3.824.92.955-3.727-.236-.38A9.94 9.94 0 012 12C2 6.477 6.477 2 12 2s10 4.477 10 10-4.477 10-10 10z"/>
  </svg>
);

export default function Header() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [mobileServicesOpen, setMobileServicesOpen] = useState(false);
  const [location] = useLocation();
  const closeTimer = useRef<ReturnType<typeof setTimeout> | null>(null);

  const openDropdown = () => {
    if (closeTimer.current) clearTimeout(closeTimer.current);
    setDropdownOpen(true);
  };

  const scheduleClose = () => {
    closeTimer.current = setTimeout(() => setDropdownOpen(false), 200);
  };

  const closeMobile = () => {
    setMobileOpen(false);
    setMobileServicesOpen(false);
  };

  const isServicesActive = location.startsWith("/services");

  const navClass = (href: string) =>
    `text-[0.8rem] tracking-[0.08em] uppercase font-medium no-underline transition-colors duration-200 ${
      location === href ? "text-[hsl(185,42%,33%)]" : "text-[hsl(220,15%,38%)] hover:text-[hsl(185,42%,33%)]"
    }`;

  return (
    <header
      className="sticky top-0 z-50 bg-white border-b border-[hsl(350,20%,88%)]"
      style={{ boxShadow: "0 1px 12px rgba(0,0,0,0.05)" }}
    >
      <div className="max-w-7xl mx-auto px-5 lg:px-12">
        <div className="flex items-center justify-between h-[72px] lg:h-[160px]">

          {/* Logo image */}
          <Link href="/" className="shrink-0 no-underline" aria-label="The Colour Stylist — Home">
            <img
              src="/images/logo-primary.png"
              alt="The Colour Stylist"
              className="h-[2.75rem] lg:h-[9rem] w-auto object-contain"
              style={{ maxWidth: "380px" }}
            />
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden lg:flex items-center gap-7 xl:gap-9" aria-label="Main navigation">

            {/* Services with dropdown */}
            <div
              className="relative"
              onMouseEnter={openDropdown}
              onMouseLeave={scheduleClose}
            >
              <Link
                href="/services"
                className={`text-[0.8rem] tracking-[0.08em] uppercase font-medium no-underline transition-colors duration-200 flex items-center gap-1.5 ${
                  isServicesActive ? "text-[hsl(185,42%,33%)]" : "text-[hsl(220,15%,38%)] hover:text-[hsl(185,42%,33%)]"
                }`}
              >
                Services
                <svg
                  width="9" height="5" viewBox="0 0 10 6" fill="none" aria-hidden="true"
                  className={`mt-px opacity-50 transition-transform duration-200 ${dropdownOpen ? "rotate-180" : ""}`}
                >
                  <path d="M1 1l4 4 4-4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </Link>

              {dropdownOpen && <div className="absolute top-full left-0 w-full h-3" />}

              {dropdownOpen && (
                <div
                  className="absolute top-[calc(100%+0.75rem)] left-0 bg-white border border-[hsl(350,20%,88%)] py-2 z-50"
                  style={{ boxShadow: "0 8px 24px rgba(0,0,0,0.08)", minWidth: "250px" }}
                  onMouseEnter={openDropdown}
                  onMouseLeave={scheduleClose}
                >
                  <Link
                    href="/services"
                    className="block px-5 py-2.5 text-[0.775rem] font-medium text-[hsl(185,42%,33%)] hover:bg-[hsl(350,30%,97%)] transition-colors no-underline border-b border-[hsl(350,20%,92%)] mb-1"
                    onClick={() => setDropdownOpen(false)}
                  >
                    All Services
                  </Link>
                  {services.map((s) => (
                    <Link
                      key={s.href}
                      href={s.href}
                      className="block px-5 py-2.5 text-[0.8rem] text-[hsl(220,15%,38%)] hover:text-[hsl(185,42%,33%)] hover:bg-[hsl(350,30%,97%)] transition-colors no-underline"
                      onClick={() => setDropdownOpen(false)}
                    >
                      {s.label}
                    </Link>
                  ))}
                </div>
              )}
            </div>

            {navLinks.map((link) => (
              <Link key={link.href} href={link.href} className={navClass(link.href)}>
                {link.label}
              </Link>
            ))}
          </nav>

          {/* Desktop WhatsApp CTA */}
          <div className="hidden lg:flex shrink-0">
            <a
              href={WHATSAPP_LINK}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-teal text-xs flex items-center gap-2"
            >
              <WhatsAppIcon />
              Get in touch
            </a>
          </div>

          {/* Mobile: WhatsApp icon + Hamburger */}
          <div className="lg:hidden flex items-center gap-1">
            <a
              href={WHATSAPP_LINK}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Contact via WhatsApp"
              className="flex items-center gap-1.5 px-3 py-2 rounded text-[hsl(185,42%,33%)] hover:bg-[hsl(185,42%,33%)]/8 transition-colors text-[0.7rem] tracking-[0.06em] uppercase font-medium"
            >
              <WhatsAppIcon size={17} />
              <span className="hidden xs:inline">WhatsApp</span>
            </a>
            <button
              className="p-2 text-[hsl(220,15%,35%)] hover:text-[hsl(185,42%,33%)] transition-colors"
              onClick={() => setMobileOpen(!mobileOpen)}
              aria-label={mobileOpen ? "Close menu" : "Open menu"}
              aria-expanded={mobileOpen}
            >
              {mobileOpen ? (
                <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round">
                  <path d="M6 18L18 6M6 6l12 12"/>
                </svg>
              ) : (
                <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round">
                  <path d="M3 7h18M3 12h18M3 17h18"/>
                </svg>
              )}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {mobileOpen && (
          <nav className="lg:hidden border-t border-[hsl(350,20%,88%)] pb-5 pt-2" aria-label="Mobile navigation">
            <div className="flex flex-col">
              <Link
                href="/"
                className={`block px-1 py-3.5 text-[0.8rem] tracking-[0.08em] uppercase font-medium no-underline border-b border-[hsl(350,20%,92%)] ${location === "/" ? "text-[hsl(185,42%,33%)]" : "text-[hsl(220,15%,35%)]"}`}
                onClick={closeMobile}
              >
                Home
              </Link>

              <div className="border-b border-[hsl(350,20%,92%)]">
                <button
                  className={`w-full flex items-center justify-between px-1 py-3.5 text-[0.8rem] tracking-[0.08em] uppercase font-medium ${isServicesActive ? "text-[hsl(185,42%,33%)]" : "text-[hsl(220,15%,35%)]"}`}
                  onClick={() => setMobileServicesOpen(!mobileServicesOpen)}
                  aria-expanded={mobileServicesOpen}
                >
                  <span>Services</span>
                  <svg width="9" height="5" viewBox="0 0 10 6" fill="none" aria-hidden="true"
                    className={`opacity-50 transition-transform duration-200 ${mobileServicesOpen ? "rotate-180" : ""}`}>
                    <path d="M1 1l4 4 4-4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </button>
                {mobileServicesOpen && (
                  <div className="pb-2 pl-3 border-l-2 border-[hsl(185,42%,33%)]/20 ml-1 mb-1">
                    <Link href="/services" className={`block py-2.5 px-2 text-[0.8rem] font-medium no-underline ${location === "/services" ? "text-[hsl(185,42%,33%)]" : "text-[hsl(185,42%,33%)]/80 hover:text-[hsl(185,42%,33%)]"}`} onClick={closeMobile}>
                      All Services
                    </Link>
                    {services.map((s) => (
                      <Link key={s.href} href={s.href}
                        className={`block py-2.5 px-2 text-[0.8rem] no-underline ${location === s.href ? "text-[hsl(185,42%,33%)]" : "text-[hsl(220,15%,45%)] hover:text-[hsl(185,42%,33%)]"}`}
                        onClick={closeMobile}>
                        {s.label}
                      </Link>
                    ))}
                  </div>
                )}
              </div>

              {navLinks.map((link) => (
                <Link key={link.href} href={link.href}
                  className={`block px-1 py-3.5 text-[0.8rem] tracking-[0.08em] uppercase font-medium no-underline border-b border-[hsl(350,20%,92%)] ${location === link.href ? "text-[hsl(185,42%,33%)]" : "text-[hsl(220,15%,35%)]"}`}
                  onClick={closeMobile}>
                  {link.label}
                </Link>
              ))}

              <div className="pt-4 mt-1">
                <a href={WHATSAPP_LINK} target="_blank" rel="noopener noreferrer"
                  className="btn-teal flex items-center justify-center gap-2 text-xs w-full"
                  onClick={closeMobile}>
                  <WhatsAppIcon />
                  Contact me via WhatsApp
                </a>
              </div>
            </div>
          </nav>
        )}
      </div>
    </header>
  );
}
