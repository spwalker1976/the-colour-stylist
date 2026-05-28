import { useEffect } from "react";
import { Link } from "wouter";

const WHATSAPP_LINK = "https://wa.me/447974209963";

export default function PubInThePark() {
  useEffect(() => {
    document.title = "Introductory Offer | Colour Analysis Marlow | The Colour Stylist";
    const meta = document.querySelector('meta[name="description"]');
    if (meta) {
      meta.setAttribute("content", "An introductory colour analysis offer from The Colour Stylist in Marlow. Book a personalised 12-season colour analysis session for one or two people.");
    }
  }, []);

  return (
    <main>
      {/* Hero */}
      <section className="relative h-[50vh] md:h-auto md:min-h-[70vh] flex items-end bg-[hsl(220,15%,22%)] overflow-hidden">
        <img
          src="/images/pub-in-the-park-colour-analysis-session.jpg"
          alt="Personalised colour analysis session in Marlow"
          className="absolute inset-0 w-full h-full object-cover object-center"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent" />
        <div className="relative z-10 max-w-3xl mx-auto px-6 py-16 w-full">
          <p className="text-white/70 uppercase tracking-[0.2em] text-xs font-medium mb-4">
            The Colour Stylist · Marlow
          </p>
          <h1
            className="text-white text-4xl md:text-5xl leading-tight mb-4"
            style={{ fontFamily: "var(--app-font-serif)" }}
          >
            Discover the colours that<br />make you glow
          </h1>
          <p className="text-white/85 text-lg md:text-xl" style={{ fontFamily: "var(--app-font-serif)" }}>
            Personalised 12-season colour analysis in Marlow
          </p>
        </div>
      </section>

      {/* Offer */}
      <section className="bg-white py-16 md:py-28 px-6">
        <div className="max-w-2xl md:max-w-4xl mx-auto">
          <div className="border md:border-2 border-[hsl(350,20%,82%)] bg-[hsl(350,30%,97%)] rounded-sm px-8 md:px-20 py-10 md:py-20 text-center space-y-8 md:space-y-12">
            <p className="uppercase tracking-[0.18em] text-xs text-[hsl(185,42%,33%)] font-semibold">
              Introductory Offer
            </p>
            <h2
              className="text-[hsl(220,15%,22%)] text-2xl md:text-5xl font-normal leading-snug"
              style={{ fontFamily: "var(--app-font-serif)" }}
            >
              Discover the colours that make you glow with a personalised 12-season colour analysis session.
            </h2>

            {/* Pricing boxes */}
            <div className="flex flex-col sm:flex-row gap-5 justify-center items-stretch">
              <div className="flex-1 bg-white border border-[hsl(185,42%,33%)] rounded-sm px-6 py-8 text-center">
                <p className="text-[hsl(185,42%,33%)] text-5xl md:text-6xl font-semibold" style={{ fontFamily: "var(--app-font-serif)" }}>
                  £99
                </p>
                <p className="text-[hsl(220,15%,45%)] text-sm mt-3 leading-snug">
                  for one person
                </p>
              </div>
              <div className="flex-1 bg-white border border-[hsl(185,42%,33%)] rounded-sm px-6 py-8 text-center">
                <p className="text-[hsl(185,42%,33%)] text-5xl md:text-6xl font-semibold" style={{ fontFamily: "var(--app-font-serif)" }}>
                  £150
                </p>
                <p className="text-[hsl(220,15%,45%)] text-sm mt-3 leading-snug">
                  for two people together
                </p>
              </div>
            </div>

            <p className="text-[hsl(220,15%,45%)] text-base leading-relaxed max-w-xl mx-auto">
              Perfect for friends, sisters, mums and daughters, or anyone who would love to experience colour analysis together.
            </p>
          </div>
        </div>
      </section>

      {/* Booking */}
      <section className="bg-[hsl(220,15%,22%)] py-16 px-6 text-center">
        <div className="max-w-xl mx-auto space-y-6">
          <h2
            className="text-white text-2xl md:text-3xl"
            style={{ fontFamily: "var(--app-font-serif)" }}
          >
            Ready to find your colours?
          </h2>
          <p className="text-white/75 text-base leading-relaxed">
            To book, email or message via WhatsApp to secure your appointment.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center pt-2">
            <a
              href={WHATSAPP_LINK}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-teal inline-flex items-center justify-center gap-2 px-7 py-3 text-sm font-medium tracking-wide rounded-sm no-underline"
            >
              <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z"/>
                <path d="M12 0C5.373 0 0 5.373 0 12c0 2.123.553 4.116 1.52 5.845L0 24l6.335-1.503A11.954 11.954 0 0012 24c6.627 0 12-5.373 12-12S18.627 0 12 0zm0 21.818a9.818 9.818 0 01-5.006-1.371l-.36-.214-3.727.883.936-3.618-.236-.372A9.818 9.818 0 1112 21.818z"/>
              </svg>
              Message on WhatsApp
            </a>
            <a
              href="mailto:clare@thecolourstylist.com"
              className="inline-flex items-center justify-center gap-2 px-7 py-3 text-sm font-medium tracking-wide rounded-sm border border-white/40 text-white hover:border-white/70 transition-colors no-underline"
            >
              Email Clare
            </a>
          </div>
        </div>
      </section>

      {/* Back link */}
      <section className="bg-[hsl(350,30%,97%)] py-8 px-6 text-center">
        <Link href="/" className="text-[hsl(185,42%,33%)] text-sm underline underline-offset-4 hover:opacity-75 transition-opacity">
          ← Back to The Colour Stylist
        </Link>
      </section>
    </main>
  );
}
