import ServiceCard from "@/components/ServiceCard";
import ContactStrip from "@/components/ContactStrip";

const services = [
  {
    title: "Colour Analysis in Person",
    description: "A personalised one-to-one colour analysis session using the 12 season system to identify the shades that naturally enhance your features. Discover your palette, your WOW colours and the guidance to shop with confidence.",
    href: "/services/colour-analysis-in-person",
    imageSrc: "/images/service-in-person.jpg",
  },
  {
    title: "Colour Analysis with Friends",
    description: "A relaxed and enjoyable session with friends or family, where you'll each discover the colours that make you glow. A beautiful, memorable experience to share.",
    href: "/services/colour-analysis-with-friends",
    imageSrc: "/images/service-friends.jpg",
  },
  {
    title: "Wardrobe Declutter",
    description: "A practical styling session to edit, refine and create a wardrobe that works for your life and personal style. Leave feeling lighter, clearer and more confident.",
    href: "/services/wardrobe-declutter",
    imageSrc: "/images/service-wardrobe.jpg",
  },
];

export default function Services() {
  return (
    <main>
      {/* Page Header */}
      <section className="py-20 bg-[hsl(350,30%,97%)] border-b border-[hsl(350,20%,88%)]">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <h1 className="font-serif text-[hsl(220,15%,22%)] text-4xl lg:text-5xl font-medium mb-5 tracking-wide">
            Services
          </h1>
          <p className="text-[hsl(220,15%,45%)] text-base max-w-xl leading-relaxed">
            Explore personalised colour and styling services designed to help you feel more confident in what you wear.
          </p>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {services.map((s) => (
              <ServiceCard key={s.href} {...s} large />
            ))}
          </div>
        </div>
      </section>

      {/* Soft note */}
      <section className="py-14 bg-[hsl(350,30%,97%)]">
        <div className="max-w-2xl mx-auto px-6 text-center">
          <div className="divider-thin mb-10" />
          <p className="text-[hsl(220,15%,45%)] text-sm leading-relaxed italic">
            All sessions take place in Marlow, Buckinghamshire. Travel is available by arrangement. For best results, many clients choose to have a colour analysis before a wardrobe declutter.
          </p>
          <div className="divider-thin mt-10" />
        </div>
      </section>

      <ContactStrip />
    </main>
  );
}
