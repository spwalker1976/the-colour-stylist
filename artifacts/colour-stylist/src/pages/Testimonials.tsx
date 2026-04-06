import TestimonialCard from "@/components/TestimonialCard";
import ContactStrip from "@/components/ContactStrip";

const testimonials = [
  { name: "Sarah R.", quote: "Clare made the whole experience feel relaxed and enjoyable. I left with a much clearer understanding of the colours that suit me and far more confidence in what I wear." },
  { name: "Rachel P.", quote: "Such a thoughtful and professional session. The advice was practical, easy to apply and has genuinely changed the way I shop for clothes and makeup." },
  { name: "Emma R.", quote: "I had such a lovely experience. Clare immediately put me at ease, and the results have made getting dressed so much simpler and more enjoyable." },
  { name: "Lucy H.", quote: "The session was insightful, personal and incredibly helpful. I now understand which shades work for me and why." },
  { name: "Helen M.", quote: "Clare has a lovely, calm approach and made the whole process feel easy. I came away feeling more confident and much clearer on my style." },
  { name: "Kate W.", quote: "A brilliant experience from start to finish. The advice felt practical and realistic, and I've already noticed the difference when choosing what to wear." },
];

export default function Testimonials() {
  return (
    <main>
      {/* Page Header */}
      <section className="py-20 bg-[hsl(220,15%,22%)]">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <h1 className="font-serif text-white text-4xl lg:text-5xl font-medium tracking-wide">
            Testimonials
          </h1>
        </div>
      </section>

      {/* Testimonials Grid */}
      <section className="py-20 bg-[hsl(350,30%,97%)]">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {testimonials.map((t) => (
              <TestimonialCard key={t.name} {...t} light />
            ))}
          </div>
        </div>
      </section>

      <ContactStrip />
    </main>
  );
}
