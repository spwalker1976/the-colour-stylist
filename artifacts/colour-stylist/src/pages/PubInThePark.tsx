import { useEffect } from "react";
import { Link } from "wouter";

export default function PubInThePark() {
  useEffect(() => {
    document.title = "Colour Analysis Marlow | Pub in the Park | The Colour Stylist";
    const meta = document.querySelector('meta[name="description"]');
    if (meta) {
      meta.setAttribute("content", "Visit The Colour Stylist at Pub in the Park Marlow for free mini colour analysis sessions and an exclusive event offer.");
    } else {
      const newMeta = document.createElement("meta");
      newMeta.name = "description";
      newMeta.content = "Visit The Colour Stylist at Pub in the Park Marlow for free mini colour analysis sessions and an exclusive event offer.";
      document.head.appendChild(newMeta);
    }
  }, []);

  return (
    <main>
      {/* Hero */}
      <section className="relative h-[50vh] md:h-auto md:min-h-[70vh] flex items-end bg-[hsl(220,15%,22%)] overflow-hidden">
        <img
          src="/images/pub-in-the-park-marlow-fashion-stand.jpg"
          alt="Fashion stand and Pub in the Park Marlow banner by the river"
          className="absolute inset-0 w-full h-full object-cover object-center"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent" />
        <div className="relative z-10 max-w-3xl mx-auto px-6 py-16 w-full">
          <p className="text-white/70 uppercase tracking-[0.2em] text-xs font-medium mb-4">
            Pub in the Park · Marlow · 16–17 May 2026
          </p>
          <h1
            className="text-white text-4xl md:text-5xl leading-tight mb-4"
            style={{ fontFamily: "var(--app-font-serif)" }}
          >
            Colour Analysis at<br />Pub in the Park Marlow
          </h1>
          <p className="text-white/85 text-lg md:text-xl" style={{ fontFamily: "var(--app-font-serif)" }}>
            Discover the colours that make you glow
          </p>
        </div>
      </section>

      {/* Intro */}
      <section className="bg-[hsl(350,30%,97%)] py-16 px-6">
        <div className="max-w-2xl mx-auto text-center space-y-5">
          <p className="text-[hsl(220,15%,35%)] text-lg leading-relaxed">
            Free mini taster sessions available at Pub in the Park, Marlow.
          </p>
          <p className="text-[hsl(220,15%,35%)] text-lg leading-relaxed">
            Find Clare on the <strong className="text-[hsl(220,15%,22%)]">Toria Lee Accessories</strong> stand on{" "}
            <strong className="text-[hsl(220,15%,22%)]">Saturday 16th and Sunday 17th May</strong>.
          </p>
        </div>
      </section>

      {/* Offer */}
      <section className="bg-white py-16 md:py-28 px-6">
        <div className="max-w-2xl md:max-w-4xl mx-auto">
          <div className="border md:border-2 border-[hsl(350,20%,82%)] bg-[hsl(350,30%,97%)] rounded-sm px-8 md:px-20 py-10 md:py-20 text-center space-y-5 md:space-y-10">
            <p className="uppercase tracking-[0.18em] text-xs text-[hsl(185,42%,33%)] font-semibold">
              Exclusive Event Offer
            </p>
            <h2
              className="text-[hsl(220,15%,22%)] text-2xl md:text-6xl font-normal md:font-bold leading-snug"
              style={{ fontFamily: "var(--app-font-serif)" }}
            >
              Enjoy 10% off a personalised<br className="hidden md:block" /> colour analysis session
            </h2>
            <p className="text-[hsl(220,15%,40%)] text-base leading-relaxed">
              Quote <strong className="text-[hsl(220,15%,22%)]">"Pub in the Park"</strong> when you book.
            </p>
            <div className="inline-block bg-white border border-[hsl(185,42%,33%)] md:border-2 rounded-sm px-6 md:px-14 py-4 md:py-8">
              <p className="text-[hsl(185,42%,33%)] text-2xl md:text-7xl font-semibold md:font-bold" style={{ fontFamily: "var(--app-font-serif)" }}>
                £135
              </p>
              <p className="text-[hsl(220,15%,50%)] text-sm md:text-base mt-1">
                usually £150
              </p>
            </div>
            <p className="text-[hsl(220,15%,50%)] text-sm">
              Offer valid for bookings in May and June 2026.
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
          <p className="text-white/60 text-sm tracking-wide uppercase">
            Limited availability each day.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center pt-2">
            <a
              href="https://wa.me/447974209963"
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
