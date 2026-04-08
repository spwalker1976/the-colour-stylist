import { Link } from "wouter";
import ContactStrip from "@/components/ContactStrip";

const WHATSAPP_LINK = "https://wa.me/447974209963";

const results = [
  "Individual colour season and sub season for each guest",
  "Most flattering WOW colours, plus shades to avoid",
  "Best neutral shades",
  "Personalised hair and makeup colour guidance",
  "Jewellery tones that complement each person's colouring",
  "A digital colour wallet for each guest's phone featuring shades from their palette",
];

const whyFriends = [
  "Perfect for birthdays, small gatherings or a stylish shared experience",
  "Enjoy those transformative moments together",
  "Discover what truly suits you and how it differs from your friends",
  "A relaxed, sociable and memorable experience",
];

export default function ColourAnalysisWithFriends() {
  return (
    <main>
      {/* Hero */}
      <div className="relative h-[52vh] min-h-[340px] max-h-[500px] overflow-hidden">
        <img
          src="/images/service-friends.jpg"
          alt="Colour analysis with friends session"
          className="absolute inset-0 w-full h-full object-cover"
          style={{ objectPosition: "center" }}
        />
        <div className="absolute inset-0 bg-[hsl(220,15%,22%)]/45" />
        <div className="relative z-10 flex flex-col justify-end h-full max-w-7xl mx-auto px-6 lg:px-12 pb-14">
          <p className="text-[10px] tracking-[0.22em] uppercase text-white/60 mb-3">Services</p>
          <h1
            className="font-serif text-white text-4xl lg:text-5xl font-medium leading-tight tracking-wide"
          >
            Colour Analysis with Friends
          </h1>
        </div>
      </div>

      {/* Intro */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <div className="max-w-2xl">
            <p className="text-[hsl(220,15%,35%)] text-lg leading-relaxed mb-5 italic">
              A relaxed, personalised colour analysis experience to enjoy with friends. Discover the colours that make you glow — together.
            </p>
            <p className="text-[hsl(220,15%,45%)] text-base leading-relaxed mb-6">
              Over the course of your session, I assess each person's undertone, contrast level and chroma to determine which of the twelve seasonal colour palettes enhances their natural colouring most beautifully, using professional drapes and seasonal flags.
            </p>
            <div className="flex items-center gap-3 text-sm text-[hsl(220,15%,45%)] mb-8">
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="text-[hsl(185,42%,33%)] flex-shrink-0">
                <circle cx="12" cy="12" r="10"/>
                <path d="M12 6v6l4 2"/>
              </svg>
              <span><strong className="text-[hsl(220,15%,30%)]">Price:</strong> £130 per person</span>
            </div>
            <div className="bg-[hsl(350,30%,97%)] border border-[hsl(350,20%,88%)] px-6 py-5 space-y-2">
              <p className="text-[hsl(220,15%,40%)] text-sm leading-relaxed">Perfect for birthdays, hen parties or a stylish shared experience.</p>
              <p className="text-[hsl(220,15%,40%)] text-sm leading-relaxed">Complimentary refreshments provided.</p>
              <p className="text-[hsl(220,15%,40%)] text-sm leading-relaxed">For multiple friends or larger groups, such as hen parties, please contact for discounted pricing and packages.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Results + Image */}
      <section className="py-20 bg-[hsl(350,30%,97%)]">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-14 items-start">
            <div>
              <p className="section-label mb-4">What each guest receives</p>
              <h2
                className="font-serif text-[hsl(220,15%,22%)] text-2xl lg:text-3xl font-medium mb-8 tracking-wide"
              >
                Your personalised results include:
              </h2>
              <ul className="space-y-3">
                {results.map((item) => (
                  <li key={item} className="flex items-start gap-3 text-[hsl(220,15%,40%)] text-sm leading-relaxed">
                    <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-[hsl(185,42%,33%)] flex-shrink-0" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
            <div className="relative overflow-hidden" style={{ paddingTop: "100%" }}>
              <img
                src="/images/service-friends.jpg"
                alt="Friends enjoying colour analysis"
                className="absolute inset-0 w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Why with Friends */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <div className="max-w-2xl">
            <p className="section-label mb-4">The Experience</p>
            <h2
              className="font-serif text-[hsl(220,15%,22%)] text-2xl lg:text-3xl font-medium mb-8 tracking-wide"
            >
              Why book with friends?
            </h2>
            <ul className="space-y-3 mb-10">
              {whyFriends.map((item) => (
                <li key={item} className="flex items-start gap-3 text-[hsl(220,15%,40%)] text-sm leading-relaxed">
                  <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-[hsl(185,42%,33%)] flex-shrink-0" />
                  {item}
                </li>
              ))}
            </ul>
            <p className="text-[hsl(220,15%,50%)] text-sm italic leading-relaxed border-l-2 border-[hsl(185,42%,33%)] pl-4">
              Group sessions are hosted in Marlow, with travel available by arrangement.
            </p>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-[hsl(350,30%,97%)] border-y border-[hsl(350,20%,88%)]">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <div className="flex flex-col sm:flex-row gap-4">
            <a
              href={WHATSAPP_LINK}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-teal no-underline flex items-center gap-2"
            >
              <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z"/>
                <path d="M12 0C5.373 0 0 5.373 0 12c0 2.124.558 4.118 1.533 5.848L0 24l6.335-1.524A11.935 11.935 0 0012 24c6.627 0 12-5.373 12-12S18.627 0 12 0zm0 22c-1.875 0-3.635-.5-5.157-1.372l-.371-.22-3.824.92.955-3.727-.236-.38A9.94 9.94 0 012 12C2 6.477 6.477 2 12 2s10 4.477 10 10-4.477 10-10 10z"/>
              </svg>
              Contact me via WhatsApp
            </a>
            <Link href="/contact" className="btn-outline no-underline">
              Get in touch
            </Link>
          </div>
        </div>
      </section>

      <ContactStrip heading="Make it a shared experience" subtext="Book a group colour analysis for you and your friends. Get in touch via WhatsApp to find out more." />
    </main>
  );
}
