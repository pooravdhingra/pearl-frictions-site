import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { SiteHeader } from "@/components/site-header";
import { SiteFooter } from "@/components/site-footer";
import { WhatsAppFloat } from "@/components/whatsapp-float";
import { SpeedInsights } from "@vercel/speed-insights/next"

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Pearl Frictions | Cork, Graphite, Asbestos, Fiber, Rubber",
  description:
    "Established in 1962, Pearl Frictions imports and manufactures cork, graphite, asbestos, fiber and rubber products for friction, industrial and automotive applications.",
  metadataBase: new URL("https://www.example.com"), // update after domain is live
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={inter.className}>
        <SiteHeader />
        <main className="min-h-[60vh]">{children}</main>
        <SiteFooter />
        <WhatsAppFloat />
        <SpeedInsights />
      </body>
    </html>
  );
}
