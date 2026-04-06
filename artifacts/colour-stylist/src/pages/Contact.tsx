const WHATSAPP_LINK = "https://wa.me/447974209963";

export default function Contact() {
  return (
    <main>
      {/* Page Header */}
      <section className="py-20 bg-[hsl(350,30%,97%)] border-b border-[hsl(350,20%,88%)]">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <p className="section-label mb-4">Get in Touch</p>
          <h1
            className="font-serif text-[hsl(220,15%,22%)] text-4xl lg:text-5xl font-medium tracking-wide"
          >
            Contact
          </h1>
        </div>
      </section>

      {/* Contact Content */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-14 lg:gap-20">
            {/* Left: Contact Info */}
            <div>
              <p className="text-[hsl(220,15%,42%)] text-base leading-relaxed mb-10">
                For bookings and enquiries, please get in touch via WhatsApp or email.
              </p>

              {/* Contact Details */}
              <div className="space-y-6 mb-10">
                <div>
                  <p className="text-[10px] tracking-[0.18em] uppercase text-[hsl(185,42%,33%)] font-medium mb-2">WhatsApp / Phone</p>
                  <a
                    href={WHATSAPP_LINK}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-[hsl(220,15%,25%)] text-base hover:text-[hsl(185,42%,33%)] transition-colors no-underline font-medium"
                  >
                    +44 7974 209963
                  </a>
                </div>
                <div>
                  <p className="text-[10px] tracking-[0.18em] uppercase text-[hsl(185,42%,33%)] font-medium mb-2">Email</p>
                  <a
                    href="mailto:clare@thecolourstylist.com"
                    className="text-[hsl(220,15%,25%)] text-base hover:text-[hsl(185,42%,33%)] transition-colors no-underline font-medium"
                  >
                    clare@thecolourstylist.com
                  </a>
                </div>
                <div>
                  <p className="text-[10px] tracking-[0.18em] uppercase text-[hsl(185,42%,33%)] font-medium mb-2">Location</p>
                  <p className="text-[hsl(220,15%,42%)] text-base">Marlow, Buckinghamshire, UK</p>
                  <p className="text-[hsl(220,15%,55%)] text-sm mt-1">
                    Sessions held in Marlow, with some travel available by arrangement.
                  </p>
                </div>
              </div>

              {/* CTA Buttons */}
              <div className="flex flex-col sm:flex-row gap-4">
                <a
                  href={WHATSAPP_LINK}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-teal no-underline flex items-center justify-center gap-2"
                >
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z"/>
                    <path d="M12 0C5.373 0 0 5.373 0 12c0 2.124.558 4.118 1.533 5.848L0 24l6.335-1.524A11.935 11.935 0 0012 24c6.627 0 12-5.373 12-12S18.627 0 12 0zm0 22c-1.875 0-3.635-.5-5.157-1.372l-.371-.22-3.824.92.955-3.727-.236-.38A9.94 9.94 0 012 12C2 6.477 6.477 2 12 2s10 4.477 10 10-4.477 10-10 10z"/>
                  </svg>
                  Contact me via WhatsApp
                </a>
                <a
                  href="mailto:clare@thecolourstylist.com"
                  className="btn-outline no-underline flex items-center justify-center gap-2"
                >
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                    <path d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"/>
                  </svg>
                  Send an email
                </a>
              </div>
            </div>

            {/* Right: Map */}
            <div>
              <p className="text-[10px] tracking-[0.18em] uppercase text-[hsl(185,42%,33%)] font-medium mb-4">Location</p>
              <div className="overflow-hidden border border-[hsl(350,20%,88%)]" style={{ height: "420px" }}>
                <iframe
                  title="Marlow, Buckinghamshire, UK"
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d19881.98890455637!2d-0.7906726!3d51.5714673!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x48769b52fad5fd2d%3A0x8a24e4a3e3dafd4e!2sMarlow%2C%20UK!5e0!3m2!1sen!2suk!4v1680000000000!5m2!1sen!2suk"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                />
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
