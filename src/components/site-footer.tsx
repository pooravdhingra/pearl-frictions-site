import { COMPANY, WHATSAPP_LINK } from "@/lib/constants";

export function SiteFooter() {
  const mapQuery = encodeURIComponent(
    [
      COMPANY.addressLines[1], // PEARL FRICTIONS INC
      COMPANY.addressLines[2],
      COMPANY.addressLines[3],
    ].join(", ")
  );

  return (
    <footer className="border-t bg-white">
      <div className="mx-auto max-w-7xl px-4 py-10 grid gap-8 md:grid-cols-2">
        {/* Location */}
        <div>
          <h3 className="font-semibold">Location</h3>
          <address className="mt-2 not-italic text-sm text-muted-foreground">
            {COMPANY.addressLines.map((l) => (
              <div key={l}>{l}</div>
            ))}
          </address>
          <div className="mt-3 text-sm">
            <a
              className="underline underline-offset-4"
              href={`https://www.google.com/maps/search/?api=1&query=${mapQuery}`}
              target="_blank"
              rel="noopener noreferrer"
            >
              Directions on Google Maps →
            </a>
          </div>
        </div>

        {/* Contact */}
        <div className="space-y-2">
          <h3 className="font-semibold">Contact</h3>
          <div className="text-sm">
            Email:{" "}
            <a
              className="underline underline-offset-4"
              href={`mailto:${COMPANY.email}`}
            >
              {COMPANY.email}
            </a>
          </div>
          <div className="text-sm">
            Phone (Mobile):{" "}
            <a
              className="underline underline-offset-4"
              href={`tel:+${COMPANY.phoneMobileE164}`}
            >
              {COMPANY.phoneMobileDisplay}
            </a>
          </div>
          <div className="text-sm">
            Phone (Landline):{" "}
            <a
              className="underline underline-offset-4"
              href={`tel:+${COMPANY.phoneLandlineE164}`}
            >
              {COMPANY.phoneLandlineDisplay}
            </a>
          </div>
          <div className="text-sm">
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
      <div className="border-t">
        <div className="mx-auto max-w-7xl px-4 py-4 text-xs text-muted-foreground">
          © {new Date().getFullYear()} {COMPANY.name}. All rights reserved.
        </div>
      </div>
    </footer>
  );
}
