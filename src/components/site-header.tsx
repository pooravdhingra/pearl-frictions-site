"use client";

import Link from "next/link";
import { useRouter } from "next/navigation";
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
  const router = useRouter();

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-white/80 backdrop-blur">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-3">
        {/* Logo / Brand */}
        <div className="flex items-center gap-3">
          <div className="h-8 w-8 rounded bg-black" aria-hidden /> {/* replace with your logo */}
          <Link href="/" className="font-semibold tracking-tight text-lg">
            Pearl Frictions
          </Link>
        </div>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-4">
          <Link href="/" className="text-sm hover:underline underline-offset-4">
            Home
          </Link>

          {/* About: click navigates; hover/focus still shows dropdown */}
          <NavigationMenu>
            <NavigationMenuList>
              <NavigationMenuItem>
                {/* DO NOT use asChild here to avoid Children.only errors */}
                <NavigationMenuTrigger
                  className="text-sm"
                  onClick={(e) => {
                    // Click goes to Company Profile
                    e.preventDefault();
                    router.push("/about/company-profile");
                  }}
                >
                  About Us
                </NavigationMenuTrigger>

                <NavigationMenuContent>
                  <div className="grid w-[280px] gap-2 p-4">
                    <NavigationMenuLink asChild>
                      <Link className="block rounded p-2 hover:bg-muted" href="/about/company-profile">
                        Company Profile
                      </Link>
                    </NavigationMenuLink>
                    <NavigationMenuLink asChild>
                      <Link className="block rounded p-2 hover:bg-muted" href="/about/product-profile">
                        Product Profile
                      </Link>
                    </NavigationMenuLink>
                    <NavigationMenuLink asChild>
                      <Link className="block rounded p-2 hover:bg-muted" href="/about/quality">
                        Quality
                      </Link>
                    </NavigationMenuLink>
                    <NavigationMenuLink asChild>
                      <Link
                        className="block rounded p-2 hover:bg-muted"
                        href="/about/infrastructure-and-facilities"
                      >
                        Infrastructure &amp; Facilities
                      </Link>
                    </NavigationMenuLink>
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

          {/* Phone & WhatsApp */}
          <a href={`tel:${COMPANY.phoneE164}`} className="hidden items-center gap-2 text-sm lg:flex">
            <PhoneCall className="h-4 w-4" />
            {COMPANY.phoneDisplay}
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

                {/* Default About link goes to Company Profile; show sub-links */}
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

                <a href={`tel:${COMPANY.phoneE164}`} className="mt-4 flex items-center gap-2">
                  <PhoneCall className="h-4 w-4" />
                  {COMPANY.phoneDisplay}
                </a>
                <a href={WHATSAPP_LINK} target="_blank" rel="noopener noreferrer" className="mt-2">
                  <Button className="w-full gap-2">
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
