"use client";

import Image from "next/image";
import Link from "next/link";
import { COMPANY, WHATSAPP_LINK } from "@/lib/constants";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { PhoneCall, Menu, MessageCircle } from "lucide-react";

export function SiteHeader() {

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-white/80 backdrop-blur">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-3">
        {/* Logo / Brand */}
        <div className="flex items-center gap-3">
          <Link href="/" className="flex items-center gap-3">
            <Image
              src="/logo.svg"
              alt="Pearl Frictions logo"
              width={40}
              height={40}
              priority
            />
            <span className="text-lg font-semibold tracking-tight">Pearl Frictions Inc.</span>
          </Link>
        </div>

        {/* Desktop Nav */}
        <nav className="hidden items-center gap-4 md:flex">
          <Link href="/" className="text-sm hover:underline underline-offset-4">
            Home
          </Link>

          <Link href="/products" className="text-sm hover:underline underline-offset-4">
            Products
          </Link>

          <Link href="/about/company-profile" className="text-sm hover:underline underline-offset-4">
            About Us
          </Link>

          <Link href="/contact" className="text-sm hover:underline underline-offset-4">
            Contact Us
          </Link>

          {/* Phone & WhatsApp (desktop) */}
          <a
            href={`tel:+${COMPANY.phoneMobileE164}`}
            className="hidden items-center gap-2 text-sm lg:flex"
          >
            <PhoneCall className="h-4 w-4" />
            {COMPANY.phoneMobileDisplay}
          </a>
          <a href={WHATSAPP_LINK} target="_blank" rel="noopener noreferrer">
            <Button size="sm" className="gap-2">
              <MessageCircle className="h-4 w-4" />
              WhatsApp
            </Button>
          </a>
        </nav>

        {/* Mobile menu */}
        <div className="md:hidden">
          <Sheet>
            <SheetTrigger asChild>
              <Button size="icon" variant="outline" aria-label="Open menu">
                <Menu className="h-5 w-5" />
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="w-72">
              <div className="mt-6 flex flex-col gap-3">
                <Link href="/" className="py-1">
                  Home
                </Link>

                <Link href="/products" className="py-1">
                  Products
                </Link>

                {/* Default About link goes to Company Profile; include sublinks */}
                <Link href="/about/company-profile" className="py-1">
                  About Us
                </Link>
                <div className="ml-3 flex flex-col text-sm">
                  <Link href="/about/company-profile" className="py-1">
                    — Company Profile
                  </Link>
                  <Link href="/about/product-profile" className="py-1">
                    — Product Profile
                  </Link>
                  <Link href="/about/quality" className="py-1">
                    — Quality
                  </Link>
                  <Link href="/about/infrastructure-and-facilities" className="py-1">
                    — Infrastructure &amp; Facilities
                  </Link>
                </div>

                <Link href="/contact" className="py-1">
                  Contact Us
                </Link>

                <a
                  href={`tel:+${COMPANY.phoneMobileE164}`}
                  className="mt-4 flex items-center gap-2 text-sm"
                >
                  <PhoneCall className="h-4 w-4" />
                  {COMPANY.phoneMobileDisplay}
                </a>
                <a href={WHATSAPP_LINK} target="_blank" rel="noopener noreferrer">
                  <Button className="mt-2 w-full gap-2">
                    <MessageCircle className="h-4 w-4" />
                    WhatsApp
                  </Button>
                </a>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
}
