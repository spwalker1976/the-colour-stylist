import { Link } from "wouter";

const WHATSAPP_LINK = "https://wa.me/447974209963";

interface ContactStripProps {
  heading?: string;
  subtext?: string;
}

export default function ContactStrip({
  heading = "Ready to get in touch?",
  subtext = "If you'd like to enquire about a session, the easiest way to reach me is via WhatsApp.",
}: ContactStripProps) {
  return (
    <section className="py-20 bg-[hsl(185,42%,33%)]">
      <div className="max-w-7xl mx-auto px-6 lg:px-12 text-center">
        <h2
          className="font-serif text-white text-3xl lg:text-4xl font-medium mb-4 tracking-wide"
          style={{ fontFamily: "'Playfair Display', Georgia, serif" }}
        >
          {heading}
        </h2>
        <p className="text-white/75 text-sm leading-relaxed max-w-md mx-auto mb-8">
          {subtext}
        </p>
        <div className="flex flex-wrap gap-4 justify-center">
          <a
            href={WHATSAPP_LINK}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-white text-[hsl(185,42%,33%)] border border-white px-7 py-3 text-[0.8rem] tracking-[0.1em] uppercase font-medium transition-colors duration-200 hover:bg-white/90 no-underline"
          >
            <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor">
              <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z"/>
              <path d="M12 0C5.373 0 0 5.373 0 12c0 2.124.558 4.118 1.533 5.848L0 24l6.335-1.524A11.935 11.935 0 0012 24c6.627 0 12-5.373 12-12S18.627 0 12 0zm0 22c-1.875 0-3.635-.5-5.157-1.372l-.371-.22-3.824.92.955-3.727-.236-.38A9.94 9.94 0 012 12C2 6.477 6.477 2 12 2s10 4.477 10 10-4.477 10-10 10z"/>
            </svg>
            Contact me via WhatsApp
          </a>
          <Link
            href="/contact"
            className="inline-flex items-center gap-2 bg-transparent text-white border border-white/60 px-7 py-3 text-[0.8rem] tracking-[0.1em] uppercase font-medium transition-colors duration-200 hover:border-white no-underline"
          >
            View Contact Page
          </Link>
        </div>
      </div>
    </section>
  );
}
