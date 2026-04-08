import { Link } from "wouter";
import ContactStrip from "@/components/ContactStrip";

const WHATSAPP_LINK = "https://wa.me/447974209963";

const sessionItems = [
  "Review your wardrobe piece by piece, removing items that no longer serve you",
  "Identify what works for your colouring, shape and lifestyle",
  "Create outfit combinations from what you already own",
  "Highlight key gaps where needed",
  "Leave you with a more streamlined, cohesive and organised wardrobe",
];

export default function WardrobeDeclutter() {
  return (
    <main>
      {/* Hero */}
      <div className="relative h-[52vh] min-h-[340px] max-h-[500px] overflow-hidden">
        <img
          src="/images/service-wardrobe.jpg"
          alt="Wardrobe declutter session"
          className="absolute inset-0 w-full h-full object-cover"
          style={{ objectPosition: "center" }}
        />
        <div className="absolute inset-0 bg-[hsl(220,15%,22%)]/45" />
        <div className="relative z-10 flex flex-col justify-end h-full max-w-7xl mx-auto px-6 lg:px-12 pb-14">
          <p className="text-[10px] tracking-[0.22em] uppercase text-white/60 mb-3">Services</p>
          <h1
            className="font-serif text-white text-4xl lg:text-5xl font-medium leading-tight tracking-wide"
          >
            Wardrobe Declutter
          </h1>
        </div>
      </div>

      {/* Intro */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <div className="max-w-2xl">
            <p className="text-[hsl(220,15%,35%)] text-lg leading-relaxed mb-5 italic">
              The first step to creating a well-curated capsule wardrobe is a thoughtful declutter.
            </p>
            <p className="text-[hsl(220,15%,45%)] text-base leading-relaxed">
              This focused, practical session is designed to streamline your wardrobe and make getting dressed feel effortless.
            </p>
          </div>
        </div>
      </section>

      {/* Session content */}
      <section className="py-20 bg-[hsl(350,30%,97%)]">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-14 items-start">
            <div>
              <p className="section-label mb-4">The Session</p>
              <h2
                className="font-serif text-[hsl(220,15%,22%)] text-2xl lg:text-3xl font-medium mb-8 tracking-wide"
              >
                During your session, we will:
              </h2>
              <ul className="space-y-3 mb-10">
                {sessionItems.map((item) => (
                  <li key={item} className="flex items-start gap-3 text-[hsl(220,15%,40%)] text-sm leading-relaxed">
                    <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-[hsl(185,42%,33%)] flex-shrink-0" />
                    {item}
                  </li>
                ))}
              </ul>
              {/* Details */}
              <div className="border-t border-[hsl(350,20%,88%)] pt-6 space-y-3">
                <div className="flex items-center gap-3 text-sm text-[hsl(220,15%,45%)]">
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="text-[hsl(185,42%,33%)] flex-shrink-0">
                    <circle cx="12" cy="12" r="10"/>
                    <path d="M12 6v6l4 2"/>
                  </svg>
                  <span><strong className="text-[hsl(220,15%,30%)]">Price:</strong> £150 for 2 hours</span>
                </div>
                <div className="flex items-center gap-3 text-sm text-[hsl(220,15%,45%)]">
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="text-[hsl(185,42%,33%)] flex-shrink-0">
                    <circle cx="12" cy="12" r="10"/>
                    <path d="M12 6v6l4 2"/>
                  </svg>
                  <span><strong className="text-[hsl(220,15%,30%)]">Duration:</strong> 2–3 hours</span>
                </div>
                <div className="flex items-center gap-3 text-sm text-[hsl(220,15%,45%)]">
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="text-[hsl(185,42%,33%)] flex-shrink-0">
                    <path d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"/>
                    <path d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"/>
                  </svg>
                  <span><strong className="text-[hsl(220,15%,30%)]">Location:</strong> Marlow and surrounding areas, within a 30-minute radius</span>
                </div>
              </div>
            </div>
            <div className="relative overflow-hidden" style={{ paddingTop: "115%" }}>
              <img
                src="/images/service-wardrobe.jpg"
                alt="Wardrobe organisation"
                className="absolute inset-0 w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Closing Note */}
      <section className="py-14 bg-white">
        <div className="max-w-2xl mx-auto px-6 text-center">
          <div className="divider-thin mb-10" />
          <p className="text-[hsl(220,15%,50%)] text-sm leading-relaxed italic">
            This session focuses on editing and styling your existing wardrobe. For a full colour analysis, please see the colour analysis services. For best results, many clients choose to have a colour analysis before their wardrobe declutter.
          </p>
          <div className="divider-thin mt-10" />
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

      <ContactStrip heading="Ready for a wardrobe that works?" subtext="Get in touch to book your wardrobe declutter session in Marlow and the surrounding area." />
    </main>
  );
}
