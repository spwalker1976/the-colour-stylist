interface PageHeroProps {
  title: string;
  subtitle?: string;
  imageSrc?: string;
  imageAlt?: string;
  centered?: boolean;
  overlayOpacity?: string;
}

export default function PageHero({
  title,
  subtitle,
  imageSrc,
  imageAlt = "",
  centered = false,
  overlayOpacity = "0.35",
}: PageHeroProps) {
  if (imageSrc) {
    return (
      <div className="relative h-[52vh] min-h-[340px] max-h-[500px] overflow-hidden">
        <img
          src={imageSrc}
          alt={imageAlt}
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div
          className="absolute inset-0"
          style={{ backgroundColor: `rgba(34,40,52,${overlayOpacity})` }}
        />
        <div className={`relative z-10 flex flex-col ${centered ? "items-center text-center" : "items-start"} justify-end h-full max-w-7xl mx-auto px-6 lg:px-12 pb-14`}>
          {subtitle && (
            <p className="section-label text-white/70 mb-3">{subtitle}</p>
          )}
          <h1
            className="font-serif text-white text-4xl lg:text-5xl font-medium leading-tight tracking-wide"
          >
            {title}
          </h1>
        </div>
      </div>
    );
  }

  return (
    <div className={`py-16 lg:py-20 max-w-7xl mx-auto px-6 lg:px-12 ${centered ? "text-center" : ""}`}>
      {subtitle && (
        <p className="section-label text-[hsl(185,42%,33%)] mb-4">{subtitle}</p>
      )}
      <h1
        className="font-serif text-[hsl(220,15%,22%)] text-4xl lg:text-5xl font-medium leading-tight tracking-wide"
      >
        {title}
      </h1>
    </div>
  );
}
