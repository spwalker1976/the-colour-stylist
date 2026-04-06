import { Link } from "wouter";

interface ServiceCardProps {
  title: string;
  description: string;
  href: string;
  imageSrc?: string;
  large?: boolean;
}

export default function ServiceCard({ title, description, href, imageSrc, large = false }: ServiceCardProps) {
  if (large && imageSrc) {
    return (
      <Link href={href} className="group block no-underline overflow-hidden relative">
        <div className={`relative overflow-hidden ${large ? "h-80 md:h-96" : "h-64"}`}>
          <img
            src={imageSrc}
            alt={title}
            className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />
          <div className="absolute inset-0 flex flex-col justify-end p-8">
            <h3
              className="font-serif text-white text-2xl font-medium mb-2"
            >
              {title}
            </h3>
            <p className="text-white/75 text-sm leading-relaxed mb-5">{description}</p>
            <span className="text-xs tracking-[0.15em] uppercase text-white/80 group-hover:text-white transition-colors flex items-center gap-2">
              Learn more
              <svg width="16" height="10" viewBox="0 0 16 10" fill="none">
                <path d="M1 5h14M10 1l4 4-4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
              </svg>
            </span>
          </div>
        </div>
      </Link>
    );
  }

  return (
    <div className="group bg-white/90 backdrop-blur-sm border border-white/60 p-8 flex flex-col">
      <h3
        className="font-serif text-[hsl(220,15%,22%)] text-xl font-medium mb-3 tracking-wide"
      >
        {title}
      </h3>
      <p className="text-sm text-[hsl(220,15%,45%)] leading-relaxed flex-1 mb-6">{description}</p>
      <Link
        href={href}
        className="text-xs tracking-[0.15em] uppercase text-[hsl(185,42%,33%)] hover:text-[hsl(185,42%,24%)] transition-colors flex items-center gap-2 no-underline font-medium"
      >
        Learn more
        <svg width="16" height="10" viewBox="0 0 16 10" fill="none">
          <path d="M1 5h14M10 1l4 4-4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
        </svg>
      </Link>
    </div>
  );
}
