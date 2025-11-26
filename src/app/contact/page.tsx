import Link from "next/link";
import { COMPANY, WHATSAPP_LINK } from "@/lib/constants";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Mail, PhoneCall, MessageCircle, MapPin, CheckCircle2 } from "lucide-react";

function Bullets() {
  const points = [
    "Quick responses from our sales desk",
    "Guidance on selecting the right raw material",
    "Support for automotive, steel, insulation & allied industries",
    "Request a quote in minutes",
  ];
  return (
    <ul className="mt-3 space-y-2">
      {points.map((p, i) => (
        <li key={i} className="flex items-start gap-2 text-sm">
          <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-green-600" />
          <span>{p}</span>
        </li>
      ))}
    </ul>
  );
}

export default function ContactPage() {
  const mapQuery = encodeURIComponent(
    [
      // omit the director line for better geocoding
      COMPANY.addressLines[1],
      COMPANY.addressLines[2],
      COMPANY.addressLines[3],
    ].join(", ")
  );

  return (
    <div className="mx-auto max-w-7xl px-4 py-10">
      <header className="mb-8">
        <h1 className="text-3xl font-semibold tracking-tight">Contact Us</h1>
        <p className="mt-2 text-muted-foreground">
          We’re here to help with product recommendations, pricing, logistics and technical queries.
        </p>
        <Bullets />
      </header>

      <div className="grid gap-8 lg:grid-cols-[1.1fr,1fr]">
        {/* Left column: contact blocks */}
        <div className="space-y-6">
          {/* Location */}
          <Card className="p-6 hover:shadow-md transition">
            <div className="flex items-start gap-3">
              <MapPin className="mt-1 h-5 w-5" />
              <div>
                <h2 className="text-lg font-medium">Location</h2>
                <address className="mt-2 not-italic text-sm text-muted-foreground">
                  {COMPANY.addressLines.map((line) => (
                    <div key={line}>{line}</div>
                  ))}
                </address>
                <div className="mt-4">
                  <Link
                    className="text-sm underline underline-offset-4"
                    href={`https://www.google.com/maps/search/?api=1&query=${mapQuery}`}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Directions on Google Maps →
                  </Link>
                </div>
              </div>
            </div>
          </Card>

          {/* Contact summary */}
          <Card className="p-6 hover:shadow-md transition">
            <div className="flex items-start gap-3">
              <Mail className="mt-1 h-5 w-5" />
              <div>
                <h2 className="text-lg font-medium">Contact</h2>
                <div className="mt-2 text-sm space-y-1">
                  <div>
                    Email:{" "}
                    <a
                      className="underline underline-offset-4"
                      href={`mailto:${COMPANY.email}`}
                    >
                      {COMPANY.email}
                    </a>
                  </div>
                  <div>
                    Phone (Mobile):{" "}
                    <a
                      className="underline underline-offset-4"
                      href={`tel:+${COMPANY.phoneMobileE164}`}
                    >
                      {COMPANY.phoneMobileDisplay}
                    </a>
                  </div>
                  <div>
                    Phone (Landline):{" "}
                    <a
                      className="underline underline-offset-4"
                      href={`tel:+${COMPANY.phoneLandlineE164}`}
                    >
                      {COMPANY.phoneLandlineDisplay}
                    </a>
                  </div>
                  <div>
                    WhatsApp:{" "}
                    <a
                      className="underline underline-offset-4"
                      href={WHATSAPP_LINK}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      Chat with Us
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </Card>

          {/* Call / WhatsApp CTAs */}
          <Card className="p-6 hover:shadow-md transition">
            <div className="flex items-start gap-3">
              <PhoneCall className="mt-1 h-5 w-5" />
              <div>
                <h2 className="text-lg font-medium">Talk to Us</h2>
                <p className="mt-2 text-sm text-muted-foreground">
                  Connect directly with our team for availability, technical details, or shipment
                  timelines.
                </p>
                <div className="mt-4 flex flex-wrap gap-2">
                  <a href={`tel:+${COMPANY.phoneMobileE164}`}>
                    <Button size="sm" variant="outline" className="gap-2">
                      <PhoneCall className="h-4 w-4" />
                      Call (Mobile)
                    </Button>
                  </a>
                  <a href={WHATSAPP_LINK} target="_blank" rel="noopener noreferrer">
                    <Button size="sm" className="gap-2">
                      <MessageCircle className="h-4 w-4" />
                      WhatsApp Chat
                    </Button>
                  </a>
                </div>
              </div>
            </div>
          </Card>
        </div>

        {/* Right column: map */}
        <div className="overflow-hidden rounded-2xl ring-1 ring-black/10">
          <iframe
            title="Pearl Frictions on Google Maps"
            className="h-[360px] w-full md:h-full"
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            src={`https://www.google.com/maps?q=${mapQuery}&output=embed`}
          />
        </div>
      </div>

      {/* LocalBusiness structured data for better SEO */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "LocalBusiness",
            name: COMPANY.name,
            telephone: `+${COMPANY.phoneMobileE164}`,
            email: COMPANY.email,
            address: {
              "@type": "PostalAddress",
              streetAddress: "26/181-C, Farid Puri, West Patel Nagar",
              addressLocality: "New Delhi",
              postalCode: "110008",
              addressRegion: "Delhi",
              addressCountry: "IN",
            },
            url: "https://www.example.com/contact", // update with live domain later
            sameAs: [WHATSAPP_LINK],
          }),
        }}
      />
    </div>
  );
}
