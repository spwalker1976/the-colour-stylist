import { Link } from "wouter";

const WHATSAPP_LINK = "https://wa.me/447974209963";

const benefits = [
  "Brighter complexion",
  "More flattering clothing choices",
  "Easier shopping",
  "Greater confidence in getting dressed",
  "Better understanding of makeup, hair and accessory tones",
];

export default function WhatIsColourAnalysis() {
  return (
    <main>
      {/* Hero */}
      <div className="relative h-[52vh] min-h-[340px] max-h-[500px] overflow-hidden">
        <img
          src="/images/what-is-colour-analysis.jpg"
          alt="What is colour analysis"
          className="absolute inset-0 w-full h-full object-cover"
          style={{ objectPosition: "center" }}
        />
        <div className="absolute inset-0 bg-[hsl(220,15%,22%)]/45" />
        <div className="relative z-10 flex flex-col justify-end h-full max-w-7xl mx-auto px-6 lg:px-12 pb-14">
          <h1
            className="font-serif text-white text-4xl lg:text-5xl font-medium leading-tight tracking-wide"
            style={{ fontFamily: "'Playfair Display', Georgia, serif" }}
          >
            What is Colour Analysis?
          </h1>
        </div>
      </div>

      {/* Main Content */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-14 lg:gap-20 items-start">
            {/* Left: Text */}
            <div>
              <p className="section-label mb-4">The Method</p>
              <h2
                className="font-serif text-[hsl(220,15%,22%)] text-2xl lg:text-3xl font-medium mb-3 tracking-wide"
                style={{ fontFamily: "'Playfair Display', Georgia, serif" }}
              >
                Understanding the 12 season system
              </h2>
              <div className="space-y-5 text-[hsl(220,15%,42%)] text-base leading-relaxed mt-6 mb-10">
                <p>
                  Colour analysis identifies the colours that naturally harmonise with your skin, hair and eye colour, helping you look brighter and healthier.
                </p>
                <p>
                  Using professional drapes, I assess how different colours interact with your natural undertone to determine your most flattering palette.
                </p>
                <p>
                  I work with the 12 season colour system, which refines the four core seasons into a more personalised palette tailored to you.
                </p>
              </div>
            </div>
            {/* Right: Image */}
            <div className="relative overflow-hidden" style={{ paddingTop: "100%" }}>
              <img
                src="/images/what-is-colour-analysis.jpg"
                alt="Colour analysis process"
                className="absolute inset-0 w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Benefits */}
      <section className="py-20 bg-[hsl(350,30%,97%)]">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <div className="max-w-2xl">
            <p className="section-label mb-4">The Benefits</p>
            <h2
              className="font-serif text-[hsl(220,15%,22%)] text-2xl lg:text-3xl font-medium mb-8 tracking-wide"
              style={{ fontFamily: "'Playfair Display', Georgia, serif" }}
            >
              What you gain from knowing your colours
            </h2>
            <ul className="space-y-4 mb-10">
              {benefits.map((benefit) => (
                <li key={benefit} className="flex items-center gap-4 text-[hsl(220,15%,40%)] text-sm">
                  <span className="w-6 h-6 rounded-full bg-[hsl(185,42%,33%)] flex items-center justify-center flex-shrink-0">
                    <svg width="10" height="8" viewBox="0 0 10 8" fill="none">
                      <path d="M1 4l3 3 5-6" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                  </span>
                  {benefit}
                </li>
              ))}
            </ul>
            <div className="flex flex-wrap gap-4">
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
        </div>
      </section>
    </main>
  );
}
