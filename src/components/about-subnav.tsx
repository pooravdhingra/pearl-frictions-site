"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";

const links = [
  { href: "/about/company-profile", label: "Company Profile" },
  { href: "/about/product-profile", label: "Product Profile" },
  { href: "/about/quality", label: "Quality" },
  { href: "/about/infrastructure-and-facilities", label: "Infrastructure & Facilities" },
];

export function AboutSubnav() {
  const pathname = usePathname();
  return (
    <nav aria-label="About sub-navigation" className="not-prose">
      <ul className="grid gap-2">
        {links.map((l) => {
          const active = pathname === l.href;
          return (
            <li key={l.href}>
              <Link
                href={l.href}
                className={cn(
                  "block rounded-xl px-4 py-2 text-sm ring-1 ring-black/10 transition",
                  active ? "bg-black text-white" : "bg-white hover:bg-muted"
                )}
              >
                {l.label}
              </Link>
            </li>
          );
        })}
      </ul>
    </nav>
  );
}
