import { Link } from "wouter";

const WHATSAPP_LINK = "https://wa.me/447974209963";
const INSTAGRAM_LINK = "https://www.instagram.com/the.colour.stylist/";

export default function Footer() {
  return (
    <footer className="bg-[hsl(220,15%,22%)] text-white">
      <div className="max-w-7xl mx-auto px-6 lg:px-12 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 mb-14">
          {/* Brand */}
          <div className="lg:col-span-1">
            <div className="mb-4">
              <img
                src="/images/logo-primary.png"
                alt="The Colour Stylist"
                className="h-8 w-auto object-contain opacity-80"
                style={{ filter: "brightness(0) invert(1)" }}
              />
            </div>
            <p className="text-sm text-white/60 leading-relaxed mt-4">
              Professional colour analysis in Marlow, designed to help you feel confident in what you wear.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-xs tracking-[0.18em] uppercase text-white/40 mb-5">Navigation</h4>
            <ul className="space-y-3">
              {[
                { label: "Home", href: "/" },
                { label: "About", href: "/about" },
                { label: "What is Colour Analysis", href: "/what-is-colour-analysis" },
                { label: "Testimonials", href: "/testimonials" },
                { label: "Contact", href: "/contact" },
              ].map((link) => (
                <li key={link.href}>
                  <Link href={link.href} className="text-sm text-white/65 hover:text-white transition-colors duration-200 no-underline">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-xs tracking-[0.18em] uppercase text-white/40 mb-5">Services</h4>
            <ul className="space-y-3">
              {[
                { label: "Colour Analysis in Person", href: "/services/colour-analysis-in-person" },
                { label: "Colour Analysis with Friends", href: "/services/colour-analysis-with-friends" },
                { label: "Wardrobe Declutter", href: "/services/wardrobe-declutter" },
              ].map((link) => (
                <li key={link.href}>
                  <Link href={link.href} className="text-sm text-white/65 hover:text-white transition-colors duration-200 no-underline">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-xs tracking-[0.18em] uppercase text-white/40 mb-5">Get in Touch</h4>
            <ul className="space-y-3">
              <li>
                <a href={WHATSAPP_LINK} target="_blank" rel="noopener noreferrer"
                  className="text-sm text-white/65 hover:text-white transition-colors duration-200 no-underline flex items-center gap-2">
                  <svg width="13" height="13" viewBox="0 0 24 24" fill="currentColor" className="flex-shrink-0 opacity-70">
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z"/>
                    <path d="M12 0C5.373 0 0 5.373 0 12c0 2.124.558 4.118 1.533 5.848L0 24l6.335-1.524A11.935 11.935 0 0012 24c6.627 0 12-5.373 12-12S18.627 0 12 0zm0 22c-1.875 0-3.635-.5-5.157-1.372l-.371-.22-3.824.92.955-3.727-.236-.38A9.94 9.94 0 012 12C2 6.477 6.477 2 12 2s10 4.477 10 10-4.477 10-10 10z"/>
                  </svg>
                  +44 7974 209963
                </a>
              </li>
              <li>
                <a href="mailto:clare@thecolourstylist.com"
                  className="text-sm text-white/65 hover:text-white transition-colors duration-200 no-underline flex items-center gap-2">
                  <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="flex-shrink-0 opacity-70">
                    <path d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"/>
                  </svg>
                  clare@thecolourstylist.com
                </a>
              </li>
              <li>
                <span className="text-sm text-white/65 flex items-center gap-2">
                  <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="flex-shrink-0 opacity-70">
                    <path d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"/>
                    <path d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"/>
                  </svg>
                  Marlow, Buckinghamshire, UK
                </span>
              </li>
              <li>
                <a href={INSTAGRAM_LINK} target="_blank" rel="noopener noreferrer"
                  className="text-sm text-white/65 hover:text-white transition-colors duration-200 no-underline flex items-center gap-2">
                  <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="flex-shrink-0 opacity-70">
                    <rect x="2" y="2" width="20" height="20" rx="5" ry="5"/>
                    <path d="M16 11.37A4 4 0 1112.63 8 4 4 0 0116 11.37z"/>
                    <path d="M17.5 6.5h.01"/>
                  </svg>
                  @the.colour.stylist
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-white/10 pt-8 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-xs text-white/35 tracking-wide">
            &copy; {new Date().getFullYear()} The Colour Stylist. All rights reserved.
          </p>
          <p className="text-xs text-white/25">
            Marlow, Buckinghamshire, UK
          </p>
        </div>
      </div>
    </footer>
  );
}
