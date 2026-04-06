import { Link } from "wouter";
import ServiceCard from "@/components/ServiceCard";
import TestimonialCard from "@/components/TestimonialCard";
import ContactStrip from "@/components/ContactStrip";

const WHATSAPP_LINK = "https://wa.me/447974209963";

const testimonials = [
  {
    name: "Sarah R.",
    quote: "Clare made the whole experience feel relaxed and enjoyable. I left with a much clearer understanding of the colours that suit me and far more confidence in what I wear.",
  },
  {
    name: "Rachel P.",
    quote: "Such a thoughtful and professional session. The advice was practical, easy to apply and has genuinely changed the way I shop for clothes and makeup.",
  },
  {
    name: "Emma R.",
    quote: "I had such a lovely experience. Clare immediately put me at ease, and the results have made getting dressed so much simpler and more enjoyable.",
  },
];

const services = [
  {
    title: "Colour Analysis in Person",
    description: "A personalised in-person colour analysis using the 12 season system to identify the shades that naturally enhance your features.",
    href: "/services/colour-analysis-in-person",
  },
  {
    title: "Colour Analysis with Friends",
    description: "A relaxed and enjoyable session with friends or family, where you'll each discover the colours that make you glow.",
    href: "/services/colour-analysis-with-friends",
  },
  {
    title: "Wardrobe Declutter",
    description: "A practical styling session to edit, refine and create a wardrobe that works for your personal style.",
    href: "/services/wardrobe-declutter",
  },
];

export default function Home() {
  return (
    <main>
      {/* Hero Section */}
      <section className="min-h-[92vh] flex items-center bg-[hsl(350,30%,97%)]">
        <div className="max-w-7xl mx-auto px-6 lg:px-12 w-full py-20">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-14 lg:gap-20 items-center">
            {/* Left: Text */}
            <div>
              <p className="section-label mb-5">Professional Colour Analysis · Marlow</p>
              <h1 className="font-serif text-[hsl(220,15%,22%)] text-4xl sm:text-5xl lg:text-6xl font-medium leading-[1.12] tracking-wide mb-7">
                Discover the colours<br />
                that make<br />
                <em>you</em> glow
              </h1>
              <p className="text-[hsl(220,15%,40%)] text-base leading-relaxed mb-10 max-w-md">
                Professional colour analysis in Marlow. Colour clarity for effortless style.
              </p>
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
                  <svg width="13" height="13" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z"/>
                    <path d="M12 0C5.373 0 0 5.373 0 12c0 2.124.558 4.118 1.533 5.848L0 24l6.335-1.524A11.935 11.935 0 0012 24c6.627 0 12-5.373 12-12S18.627 0 12 0zm0 22c-1.875 0-3.635-.5-5.157-1.372l-.371-.22-3.824.92.955-3.727-.236-.38A9.94 9.94 0 012 12C2 6.477 6.477 2 12 2s10 4.477 10 10-4.477 10-10 10z"/>
                  </svg>
                  Contact via WhatsApp
                </a>
              </div>
            </div>
            {/* Right: Image */}
            <div className="relative order-first lg:order-last">
              <div className="relative overflow-hidden" style={{ paddingTop: "120%" }}>
                <img
                  src="/images/home-hero.jpg"
                  alt="Clare performing a colour analysis session"
                  className="absolute inset-0 w-full h-full object-cover"
                  style={{ objectPosition: "center top" }}
                />
              </div>
              <div
                className="absolute -bottom-4 -left-4 w-32 h-32 -z-10 hidden lg:block"
                style={{ backgroundColor: "hsl(350,35%,88%)" }}
              />
            </div>
          </div>
        </div>
      </section>

      {/* Services Overview */}
      <section className="relative py-24">
        <div className="absolute inset-0 bg-cover bg-center" style={{ backgroundImage: "url('/images/services-background.jpg')" }} />
        <div className="absolute inset-0 bg-[hsl(220,15%,22%)]/70" />
        <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-12">
          <div className="text-center mb-14">
            <h2 className="font-serif text-white text-3xl lg:text-4xl font-medium tracking-wide">
              Services
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {services.map((s) => (
              <ServiceCard key={s.href} {...s} />
            ))}
          </div>
          <div className="text-center mt-10">
            <Link href="/services" className="inline-flex items-center gap-2 text-white/70 hover:text-white text-xs tracking-[0.15em] uppercase font-medium transition-colors no-underline">
              View all services
              <svg width="16" height="10" viewBox="0 0 16 10" fill="none">
                <path d="M1 5h14M10 1l4 4-4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
              </svg>
            </Link>
          </div>
        </div>
      </section>

      {/* About Preview */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-14 lg:gap-20 items-center">
            <div className="relative">
              <div className="relative overflow-hidden" style={{ paddingTop: "125%" }}>
                <img
                  src="/images/about-clare.jpg"
                  alt="Clare, The Colour Stylist"
                  className="absolute inset-0 w-full h-full object-cover"
                  style={{ objectPosition: "center top" }}
                />
              </div>
              <div className="absolute -top-4 -right-4 w-32 h-32 -z-10 hidden lg:block" style={{ backgroundColor: "hsl(350,35%,90%)" }} />
            </div>
            <div>
              <p className="section-label mb-5">About Me</p>
              <h2 className="font-serif text-[hsl(220,15%,22%)] text-3xl lg:text-4xl font-medium mb-6 tracking-wide">
                Hi, I'm Clare
              </h2>
              <div className="space-y-4 text-[hsl(220,15%,40%)] text-base leading-relaxed mb-8">
                <p>A certified colour and image consultant based in Marlow. With 15 years' experience as a fashion buyer, I bring a practical, real-world approach to colour and style.</p>
                <p>I offer one-to-one and small group personalised colour analysis sessions, designed to help you discover the colours that make you glow and feel confident in what you wear.</p>
                <p>My approach is relaxed, considered and personal, creating a space where you can feel at ease while discovering what truly suits you.</p>
              </div>
              <Link href="/about" className="btn-teal no-underline">
                About Me
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* What is Colour Analysis Preview */}
      <section className="py-24 bg-[hsl(350,30%,97%)]">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-14 lg:gap-20 items-center">
            <div>
              <p className="section-label mb-5">The Process</p>
              <h2 className="font-serif text-[hsl(220,15%,22%)] text-3xl lg:text-4xl font-medium mb-6 tracking-wide">
                What is Colour Analysis?
              </h2>
              <div className="space-y-4 text-[hsl(220,15%,40%)] text-base leading-relaxed mb-8">
                <p>Colour analysis identifies the colours that naturally harmonise with your skin, hair and eye colour, helping you look brighter and healthier.</p>
                <p>Using professional drapes, I assess how different colours interact with your natural undertone to determine your most flattering palette.</p>
                <p>I work with the 12 season colour system, which refines the four core seasons into a more personalised palette tailored to you.</p>
              </div>
              <Link href="/what-is-colour-analysis" className="btn-teal no-underline">
                Learn More
              </Link>
            </div>
            <div className="relative order-first lg:order-last">
              <div className="relative overflow-hidden" style={{ paddingTop: "100%" }}>
                <img src="/images/what-is-colour-analysis.jpg" alt="Colour analysis session" className="absolute inset-0 w-full h-full object-cover" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-24 bg-[hsl(220,15%,22%)]">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <div className="text-center mb-14">
            <h2 className="font-serif text-white text-3xl lg:text-4xl font-medium tracking-wide">
              Testimonials
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-10">
            {testimonials.map((t) => (
              <TestimonialCard key={t.name} {...t} />
            ))}
          </div>
          <div className="text-center">
            <Link href="/testimonials" className="text-white/50 hover:text-white text-xs tracking-[0.15em] uppercase font-medium transition-colors no-underline">
              Read all testimonials →
            </Link>
          </div>
        </div>
      </section>

      <ContactStrip />
    </main>
  );
}
