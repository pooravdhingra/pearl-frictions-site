"use client";

import Link from "next/link";
import { COMPANY, WHATSAPP_LINK } from "@/lib/constants";
import { Button } from "@/components/ui/button";
import {
  NavigationMenu,
  NavigationMenuList,
  NavigationMenuItem,
  NavigationMenuTrigger,
  NavigationMenuContent,
  NavigationMenuLink,
} from "@/components/ui/navigation-menu";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { PhoneCall, Menu, MessageCircle } from "lucide-react";

export function SiteHeader() {

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-white/80 backdrop-blur">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-3">
        {/* Logo / Brand */}
        <div className="flex items-center gap-3">
          <div className="h-8 w-8 rounded bg-black" aria-hidden />{/* replace with logo */}
          <Link href="/" className="text-lg font-semibold tracking-tight">
            Pearl Frictions Inc.
          </Link>
        </div>

        {/* Desktop Nav */}
        <nav className="hidden items-center gap-4 md:flex">
          <Link href="/" className="text-sm hover:underline underline-offset-4">
            Home
          </Link>

          {/* About: clickable + hoverable dropdown */}
          <NavigationMenu>
            <NavigationMenuList>
              <NavigationMenuItem className="group relative">
                {/* Trigger opens dropdown on hover/focus */}
                <NavigationMenuTrigger className="text-sm group-hover:bg-muted/60">
                  About Us
                </NavigationMenuTrigger>

                {/* Overlay link makes whole trigger clickable to Company Profile */}
                <Link
                  href="/about/company-profile"
                  className="absolute left-0 top-0 h-[var(--radix-navigation-menu-trigger-height)] w-[var(--radix-navigation-menu-trigger-width)]"
                  aria-label="Go to Company Profile"
                />

                <NavigationMenuContent>
                  <div className="grid w-[280px] gap-2 p-4">
                    <Link href="/about/company-profile" legacyBehavior passHref>
                      <NavigationMenuLink className="block rounded p-2 hover:bg-muted">
                        Company Profile
                      </NavigationMenuLink>
                    </Link>
                    <Link href="/about/product-profile" legacyBehavior passHref>
                      <NavigationMenuLink className="block rounded p-2 hover:bg-muted">
                        Product Profile
                      </NavigationMenuLink>
                    </Link>
                    <Link href="/about/quality" legacyBehavior passHref>
                      <NavigationMenuLink className="block rounded p-2 hover:bg-muted">
                        Quality
                      </NavigationMenuLink>
                    </Link>
                    <Link
                      href="/about/infrastructure-and-facilities"
                      legacyBehavior
                      passHref
                    >
                      <NavigationMenuLink className="block rounded p-2 hover:bg-muted">
                        Infrastructure &amp; Facilities
                      </NavigationMenuLink>
                    </Link>
                  </div>
                </NavigationMenuContent>
              </NavigationMenuItem>
            </NavigationMenuList>
          </NavigationMenu>

          <Link href="/products" className="text-sm hover:underline underline-offset-4">
            Products
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

                <Link href="/products" className="py-1">
                  Products
                </Link>
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
