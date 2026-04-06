const WHATSAPP_LINK = "https://wa.me/447974209963";

export default function About() {
  return (
    <main>
      {/* Page Header */}
      <section className="py-20 bg-[hsl(350,30%,97%)] border-b border-[hsl(350,20%,88%)]">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <p className="section-label mb-4">About Me</p>
          <h1 className="font-serif text-[hsl(220,15%,22%)] text-4xl lg:text-5xl font-medium tracking-wide">
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
              <div className="absolute -bottom-5 -left-5 w-36 h-36 -z-10 hidden lg:block" style={{ backgroundColor: "hsl(350,35%,88%)" }} />
            </div>
            {/* Right: Text */}
            <div className="pt-2">
              <h2 className="font-serif text-[hsl(220,15%,22%)] text-3xl font-medium mb-6 tracking-wide">
                Hi, I'm Clare
              </h2>
              <div className="space-y-5 text-[hsl(220,15%,42%)] text-base leading-relaxed mb-10">
                <p>A certified colour and image consultant based in Marlow. With 15 years' experience as a fashion buyer, I bring a practical, real-world approach to colour and style.</p>
                <p>I offer one-to-one and small group personalised colour analysis sessions, designed to help you discover the colours that make you glow and feel confident in what you wear.</p>
                <p>I work with women at all stages of life, often at a point of change — whether that's midlife, a new chapter, or a desire to feel more like yourself again.</p>
                <p>My approach is relaxed, considered and personal, creating a space where you can feel at ease while discovering what truly suits you.</p>
              </div>

              {/* Quote */}
              <blockquote className="border-l-2 border-[hsl(185,42%,33%)] pl-5">
                <p className="text-[hsl(220,15%,35%)] text-base italic leading-relaxed">
                  "Discovering my colour season was a turning point for my confidence and personal style — and I want every client to experience that moment."
                </p>
              </blockquote>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
