export default function PrivacyPolicy() {
  return (
    <main>
      {/* Page Header */}
      <section className="py-20 bg-[hsl(350,30%,97%)] border-b border-[hsl(350,20%,88%)]">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <p className="section-label mb-4">Legal</p>
          <h1 className="font-serif text-[hsl(220,15%,22%)] text-4xl lg:text-5xl font-medium tracking-wide">
            Privacy Policy
          </h1>
          <p className="text-[hsl(220,15%,52%)] text-sm mt-4">Last updated: April 2025</p>
        </div>
      </section>

      {/* Content */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <div className="max-w-2xl space-y-12">

            <div>
              <h2 className="font-serif text-[hsl(220,15%,22%)] text-xl font-medium mb-4 tracking-wide">1. Who we are</h2>
              <p className="text-[hsl(220,15%,42%)] text-base leading-relaxed">
                The Colour Stylist Ltd is the data controller responsible for any personal data collected through this website. We are based in Marlow, Buckinghamshire, UK. If you have any questions about how we handle your data, please contact us at{" "}
                <a href="mailto:clare@thecolourstylist.com" className="text-[hsl(185,42%,33%)] hover:underline">
                  clare@thecolourstylist.com
                </a>.
              </p>
            </div>

            <div>
              <h2 className="font-serif text-[hsl(220,15%,22%)] text-xl font-medium mb-4 tracking-wide">2. What data we collect</h2>
              <p className="text-[hsl(220,15%,42%)] text-base leading-relaxed mb-3">
                We may collect the following personal data when you contact us or make an enquiry:
              </p>
              <ul className="space-y-2 text-[hsl(220,15%,42%)] text-base">
                {[
                  "Your name (if provided)",
                  "Email address",
                  "Phone number or WhatsApp contact",
                  "Any information you share as part of an enquiry or message",
                ].map((item) => (
                  <li key={item} className="flex items-start gap-3">
                    <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-[hsl(185,42%,33%)] flex-shrink-0" />
                    {item}
                  </li>
                ))}
              </ul>
              <p className="text-[hsl(220,15%,42%)] text-base leading-relaxed mt-3">
                We do not operate an ecommerce platform or require account registration.
              </p>
            </div>

            <div>
              <h2 className="font-serif text-[hsl(220,15%,22%)] text-xl font-medium mb-4 tracking-wide">3. How we use your data</h2>
              <p className="text-[hsl(220,15%,42%)] text-base leading-relaxed mb-3">We use your data only to:</p>
              <ul className="space-y-2 text-[hsl(220,15%,42%)] text-base">
                {[
                  "Respond to your enquiry",
                  "Provide and deliver our services",
                  "Improve your experience as a client",
                ].map((item) => (
                  <li key={item} className="flex items-start gap-3">
                    <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-[hsl(185,42%,33%)] flex-shrink-0" />
                    {item}
                  </li>
                ))}
              </ul>
              <p className="text-[hsl(220,15%,42%)] text-base leading-relaxed mt-3">
                We will not use your data for marketing purposes without your explicit consent.
              </p>
            </div>

            <div>
              <h2 className="font-serif text-[hsl(220,15%,22%)] text-xl font-medium mb-4 tracking-wide">4. Lawful basis (UK GDPR)</h2>
              <p className="text-[hsl(220,15%,42%)] text-base leading-relaxed">
                We process personal data on the basis of <strong>legitimate interest</strong> — specifically, to respond to enquiries and provide the services you have requested — and, where applicable, with your explicit <strong>consent</strong>.
              </p>
            </div>

            <div>
              <h2 className="font-serif text-[hsl(220,15%,22%)] text-xl font-medium mb-4 tracking-wide">5. Contact channels</h2>
              <p className="text-[hsl(220,15%,42%)] text-base leading-relaxed">
                Enquiries may be received via <strong>email</strong> (clare@thecolourstylist.com), <strong>WhatsApp</strong>, or <strong>Instagram</strong> direct message. Any personal information shared through these channels will be used solely to respond to your enquiry and provide our services. These platforms have their own privacy policies; we encourage you to review them.
              </p>
            </div>

            <div>
              <h2 className="font-serif text-[hsl(220,15%,22%)] text-xl font-medium mb-4 tracking-wide">6. Cookies and analytics</h2>
              <p className="text-[hsl(220,15%,42%)] text-base leading-relaxed">
                This website uses minimal or no tracking cookies. If basic analytics are in place, they are used only to understand how the site is used and do not collect personally identifiable information. We do not use intrusive tracking or advertising cookies.
              </p>
            </div>

            <div>
              <h2 className="font-serif text-[hsl(220,15%,22%)] text-xl font-medium mb-4 tracking-wide">7. Data retention</h2>
              <p className="text-[hsl(220,15%,42%)] text-base leading-relaxed">
                We retain your personal data only for as long as necessary to fulfil the purpose for which it was collected, or as required by law. Enquiry records and correspondence are held for a reasonable period and then securely deleted.
              </p>
            </div>

            <div>
              <h2 className="font-serif text-[hsl(220,15%,22%)] text-xl font-medium mb-4 tracking-wide">8. Data sharing</h2>
              <p className="text-[hsl(220,15%,42%)] text-base leading-relaxed">
                We do not sell, rent, or trade your personal data to third parties. Your data is only shared where necessary for the delivery of our services (for example, if a session is hosted at a third-party location). Any such sharing is kept to the minimum necessary.
              </p>
            </div>

            <div>
              <h2 className="font-serif text-[hsl(220,15%,22%)] text-xl font-medium mb-4 tracking-wide">9. International transfers</h2>
              <p className="text-[hsl(220,15%,42%)] text-base leading-relaxed">
                Our services are provided from the UK and we do not routinely transfer personal data outside the UK. Some third-party platforms (such as WhatsApp or Instagram) may process data in other countries. We encourage you to review the privacy policies of these platforms.
              </p>
            </div>

            <div>
              <h2 className="font-serif text-[hsl(220,15%,22%)] text-xl font-medium mb-4 tracking-wide">10. Your rights</h2>
              <p className="text-[hsl(220,15%,42%)] text-base leading-relaxed mb-3">
                Under UK GDPR, you have the following rights regarding your personal data:
              </p>
              <ul className="space-y-2 text-[hsl(220,15%,42%)] text-base">
                {[
                  "Right of access — you can request a copy of the data we hold about you",
                  "Right to rectification — you can ask us to correct inaccurate data",
                  "Right to erasure — you can ask us to delete your data",
                  "Right to restriction — you can ask us to limit how we use your data",
                  "Right to object — you can object to us processing your data",
                ].map((item) => (
                  <li key={item} className="flex items-start gap-3">
                    <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-[hsl(185,42%,33%)] flex-shrink-0" />
                    {item}
                  </li>
                ))}
              </ul>
              <p className="text-[hsl(220,15%,42%)] text-base leading-relaxed mt-3">
                To exercise any of these rights, please contact us at{" "}
                <a href="mailto:clare@thecolourstylist.com" className="text-[hsl(185,42%,33%)] hover:underline">
                  clare@thecolourstylist.com
                </a>.
              </p>
            </div>

            <div>
              <h2 className="font-serif text-[hsl(220,15%,22%)] text-xl font-medium mb-4 tracking-wide">11. ICO reference</h2>
              <p className="text-[hsl(220,15%,42%)] text-base leading-relaxed">
                You have the right to lodge a complaint with the Information Commissioner's Office (ICO) in the UK if you believe your data has been handled improperly. You can contact the ICO at{" "}
                <a href="https://ico.org.uk" target="_blank" rel="noopener noreferrer" className="text-[hsl(185,42%,33%)] hover:underline">
                  ico.org.uk
                </a>
                {" "}or by calling 0303 123 1113.
              </p>
            </div>

            <div>
              <h2 className="font-serif text-[hsl(220,15%,22%)] text-xl font-medium mb-4 tracking-wide">12. Contact</h2>
              <p className="text-[hsl(220,15%,42%)] text-base leading-relaxed">
                If you have any questions or concerns about how we use your personal data, please get in touch:{" "}
                <a href="mailto:clare@thecolourstylist.com" className="text-[hsl(185,42%,33%)] hover:underline">
                  clare@thecolourstylist.com
                </a>
              </p>
            </div>

            <div>
              <h2 className="font-serif text-[hsl(220,15%,22%)] text-xl font-medium mb-4 tracking-wide">13. Updates to this policy</h2>
              <p className="text-[hsl(220,15%,42%)] text-base leading-relaxed">
                We may update this privacy policy from time to time. The date at the top of the page will always reflect when it was last revised. We encourage you to check back periodically.
              </p>
            </div>

          </div>
        </div>
      </section>
    </main>
  );
}
