import { Link } from "wouter";

const WHATSAPP_LINK = "https://wa.me/447974209963";

export default function About() {
  return (
    <main>
      {/* Page Header */}
      <section className="py-20 bg-[hsl(350,30%,97%)] border-b border-[hsl(350,20%,88%)]">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <p className="section-label mb-4">Clare Sheridan</p>
          <h1
            className="font-serif text-[hsl(220,15%,22%)] text-4xl lg:text-5xl font-medium tracking-wide"
            style={{ fontFamily: "'Playfair Display', Georgia, serif" }}
          >
            About Me
          </h1>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-14 lg:gap-20 items-start">
            {/* Left: Image */}
            <div className="relative">
              <div className="relative overflow-hidden" style={{ paddingTop: "130%" }}>
                <img
                  src="/images/about-clare.jpg"
                  alt="Clare, The Colour Stylist"
                  className="absolute inset-0 w-full h-full object-cover"
                  style={{ objectPosition: "center top" }}
                />
              </div>
              <div
                className="absolute -bottom-5 -left-5 w-36 h-36 -z-10 hidden lg:block"
                style={{ backgroundColor: "hsl(350,35%,88%)" }}
              />
            </div>
            {/* Right: Text */}
            <div className="pt-2">
              <h2
                className="font-serif text-[hsl(220,15%,22%)] text-3xl font-medium mb-6 tracking-wide"
                style={{ fontFamily: "'Playfair Display', Georgia, serif" }}
              >
                Hi, I'm Clare
              </h2>
              <div className="space-y-5 text-[hsl(220,15%,42%)] text-base leading-relaxed mb-10">
                <p>
                  A certified colour and image consultant based in Marlow. With 15 years' experience as a fashion buyer, I bring a practical, real-world approach to colour and style.
                </p>
                <p>
                  I offer one-to-one and small group personalised colour analysis sessions, designed to help you discover the colours that make you glow and feel confident in what you wear.
                </p>
                <p>
                  I work with women at all stages of life, often at a point of change — whether that's midlife, a new chapter, or a desire to feel more like yourself again.
                </p>
                <p>
                  My approach is relaxed, considered and personal, creating a space where you can feel at ease while discovering what truly suits you.
                </p>
              </div>

              {/* Quote */}
              <blockquote className="border-l-2 border-[hsl(185,42%,33%)] pl-5 mb-10">
                <p className="text-[hsl(220,15%,35%)] text-base italic leading-relaxed" style={{ fontFamily: "'Playfair Display', Georgia, serif" }}>
                  "Colour analysis changed the way I think about getting dressed — and I want that for every client."
                </p>
              </blockquote>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Strip */}
      <section className="py-16 bg-[hsl(350,30%,97%)] border-y border-[hsl(350,20%,88%)]">
        <div className="max-w-7xl mx-auto px-6 lg:px-12 text-center">
          <p className="text-[hsl(220,15%,40%)] text-base leading-relaxed mb-6 max-w-xl mx-auto">
            Explore the services or get in touch via WhatsApp to find out which session is right for you.
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            <Link href="/services" className="btn-teal no-underline">
              Explore Services
            </Link>
            <a
              href={WHATSAPP_LINK}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-outline no-underline flex items-center gap-2"
            >
              <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z"/>
                <path d="M12 0C5.373 0 0 5.373 0 12c0 2.124.558 4.118 1.533 5.848L0 24l6.335-1.524A11.935 11.935 0 0012 24c6.627 0 12-5.373 12-12S18.627 0 12 0zm0 22c-1.875 0-3.635-.5-5.157-1.372l-.371-.22-3.824.92.955-3.727-.236-.38A9.94 9.94 0 012 12C2 6.477 6.477 2 12 2s10 4.477 10 10-4.477 10-10 10z"/>
              </svg>
              Contact via WhatsApp
            </a>
          </div>
        </div>
      </section>
    </main>
  );
}
