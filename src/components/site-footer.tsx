import Link from "next/link";
import { COMPANY, WHATSAPP_LINK } from "@/lib/constants";

export function SiteFooter() {
  return (
    <footer className="border-t bg-white">
      <div className="mx-auto max-w-7xl px-4 py-10 grid gap-8 md:grid-cols-2">
        <div>
          <h3 className="font-semibold">Location</h3>
          <address className="mt-2 not-italic text-sm text-muted-foreground">
            {COMPANY.addressLines.map((l) => (
              <div key={l}>{l}</div>
            ))}
          </address>
        </div>
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
            Phone: <a className="underline underline-offset-4" href={`tel:${COMPANY.phoneE164}`}>{COMPANY.phoneDisplay}</a>
          </div>
          <div className="text-sm">
            WhatsApp:{" "}
            <a
              className="underline underline-offset-4"
              href={WHATSAPP_LINK}
              target="_blank"
              rel="noopener noreferrer"
            >
              Chat with us
            </a>
          </div>
        </div>
      </div>
      <div className="border-t">
        <div className="mx-auto max-w-7xl px-4 py-4 text-xs text-muted-foreground">
          © {new Date().getFullYear()} Pearl Frictions. All rights reserved.
        </div>
      </div>
    </footer>
  );
}
