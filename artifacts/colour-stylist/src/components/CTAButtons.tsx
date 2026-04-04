import { Link } from "wouter";

const WHATSAPP_LINK = "https://wa.me/447974209963";

interface CTAButtonsProps {
  primary?: "whatsapp" | "services" | "contact" | "about";
  secondary?: "contact" | "services" | "about";
  light?: boolean;
}

export default function CTAButtons({ primary = "whatsapp", secondary, light = false }: CTAButtonsProps) {
  const primaryLabel =
    primary === "whatsapp" ? "Contact me via WhatsApp" :
    primary === "services" ? "Explore Services" :
    primary === "contact" ? "Get in touch" :
    "About Me";

  const primaryHref =
    primary === "whatsapp" ? WHATSAPP_LINK :
    primary === "services" ? "/services" :
    primary === "contact" ? "/contact" :
    "/about";

  const primaryIsExternal = primary === "whatsapp";

  const secondaryLabel =
    secondary === "contact" ? "Get in touch" :
    secondary === "services" ? "Explore Services" :
    secondary === "about" ? "Learn more" : "";

  const secondaryHref =
    secondary === "contact" ? "/contact" :
    secondary === "services" ? "/services" :
    secondary === "about" ? "/about" : "/";

  const btnTealClass = light
    ? "inline-flex items-center gap-2 bg-white text-[hsl(185,42%,33%)] border border-white px-7 py-3 text-[0.8rem] tracking-[0.1em] uppercase font-medium transition-colors duration-200 hover:bg-white/90 no-underline"
    : "btn-teal no-underline";

  const btnOutlineClass = light
    ? "inline-flex items-center gap-2 bg-transparent text-white border border-white/60 px-7 py-3 text-[0.8rem] tracking-[0.1em] uppercase font-medium transition-colors duration-200 hover:border-white no-underline"
    : "btn-outline no-underline";

  return (
    <div className="flex flex-wrap gap-4 items-center">
      {primaryIsExternal ? (
        <a href={primaryHref} target="_blank" rel="noopener noreferrer" className={btnTealClass}>
          {primary === "whatsapp" && (
            <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor" className="flex-shrink-0">
              <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z"/>
              <path d="M12 0C5.373 0 0 5.373 0 12c0 2.124.558 4.118 1.533 5.848L0 24l6.335-1.524A11.935 11.935 0 0012 24c6.627 0 12-5.373 12-12S18.627 0 12 0zm0 22c-1.875 0-3.635-.5-5.157-1.372l-.371-.22-3.824.92.955-3.727-.236-.38A9.94 9.94 0 012 12C2 6.477 6.477 2 12 2s10 4.477 10 10-4.477 10-10 10z"/>
            </svg>
          )}
          {primaryLabel}
        </a>
      ) : (
        <Link href={primaryHref} className={btnTealClass}>
          {primaryLabel}
        </Link>
      )}
      {secondary && (
        <Link href={secondaryHref} className={btnOutlineClass}>
          {secondaryLabel}
        </Link>
      )}
    </div>
  );
}
