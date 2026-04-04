interface TestimonialCardProps {
  name: string;
  quote: string;
  light?: boolean;
}

export default function TestimonialCard({ name, quote, light = false }: TestimonialCardProps) {
  return (
    <div
      className={`p-8 flex flex-col ${
        light
          ? "bg-white border border-[hsl(350,20%,88%)]"
          : "bg-white/8 border border-white/12"
      }`}
    >
      <div className="mb-5">
        <svg width="28" height="22" viewBox="0 0 28 22" fill="none">
          <path
            d="M6.5 0C2.91 0 0 2.91 0 6.5c0 3.59 2.91 6.5 6.5 6.5.18 0 .35-.01.52-.03C6.38 15.59 4.73 18.21 2.5 19.5L5.5 22C9.14 19.5 11 15.74 11 11.5V6.5C11 2.91 8.09 0 6.5 0zm16.5 0c-3.59 0-6.5 2.91-6.5 6.5 0 3.59 2.91 6.5 6.5 6.5.18 0 .35-.01.52-.03-.64 2.62-2.29 5.24-4.52 6.53L22 22C25.64 19.5 27.5 15.74 27.5 11.5V6.5C27.5 2.91 24.59 0 23 0z"
            fill={light ? "hsl(185, 42%, 33%)" : "rgba(255,255,255,0.2)"}
          />
        </svg>
      </div>
      <p
        className={`text-sm leading-relaxed flex-1 mb-6 italic ${
          light ? "text-[hsl(220,15%,40%)]" : "text-white/80"
        }`}
        style={{ fontFamily: "'Playfair Display', Georgia, serif" }}
      >
        {quote}
      </p>
      <div
        className={`text-xs tracking-[0.12em] uppercase font-sans font-medium ${
          light ? "text-[hsl(185,42%,33%)]" : "text-white/50"
        }`}
      >
        {name}
      </div>
    </div>
  );
}
