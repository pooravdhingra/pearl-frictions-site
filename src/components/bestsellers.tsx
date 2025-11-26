"use client";

import Image from "next/image";
import Link from "next/link";
import { useRef } from "react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

type Item = { name: string; href: string; img: string };

const defaultItems: Item[] = [
  {
    name: "Flexible Graphite Rolls",
    href: "/products/graphite/flexible-graphite-sheet",
    img: "/products/flexible-graphite-sheet/1.jpg",
  },
  {
    name: "Cork Granules",
    href: "/products/cork/cork-granules",
    img: "/products/cork-granules/1.jpg",
  },
  {
    name: "Composite Mineral Fiber",
    href: "/products/non-asbestos-fibers/composite-mineral-fiber",
    img: "/products/composite-mineral-fiber/1.jpg",
  },
  {
    name: "Asbestos Fiber",
    href: "/products/asbestos/chrysotile-asbestos-fiber",
    img: "/products/chrysotile-asbestos-fiber/1.jpg",
  },
  {
    name: "Rubber Cork Sheets",
    href: "/products/cork/rubberised-cork-sheet",
    img: "/products/rubberised-cork-sheet/1.jpg",
  },
  {
    name: "NBR Powder",
    href: "/products/rubber/nbr-powder",
    img: "/products/nbr-powder/1.jpg",
  },
];

export function Bestsellers({ items = defaultItems }: { items?: Item[] }) {
  const scrollRef = useRef<HTMLDivElement>(null);

  const scroll = (direction: "left" | "right") => {
    const container = scrollRef.current;
    if (!container) return;

    const scrollAmount = container.clientWidth;
    container.scrollBy({
      left: direction === "left" ? -scrollAmount : scrollAmount,
      behavior: "smooth",
    });
  };

  return (
    <section className="bg-muted/30">
      <div className="mx-auto max-w-7xl px-4 py-14">
        <div className="flex items-end justify-between">
          <h2 className="text-2xl font-semibold tracking-tight">Bestselling Products</h2>
          <Link href="/products">
            <Button variant="outline">View All</Button>
          </Link>
        </div>

        <div className="relative mt-6">
          <div
            ref={scrollRef}
            className="flex gap-6 overflow-hidden"
            style={{ scrollSnapType: "x mandatory" }}
          >
            {items.map((p) => (
              <Link
                key={p.href}
                href={p.href}
                className="flex-none w-full sm:w-[calc((100%-3rem)/3)]"
                style={{ scrollSnapAlign: "start" }}
              >
                <Card className="overflow-hidden transition hover:shadow-lg">
                  <div className="relative aspect-[4/3]">
                    <Image src={p.img} alt={p.name} fill className="object-cover" />
                  </div>
                  <div className="p-4">
                    <h3 className="font-medium">{p.name}</h3>
                    <p className="mt-1 text-sm text-muted-foreground">Learn more →</p>
                  </div>
                </Card>
              </Link>
            ))}
          </div>

          <div className="pointer-events-none absolute inset-y-1/2 left-0 right-0 flex justify-between px-2">
            <Button
              size="icon"
              variant="secondary"
              className="pointer-events-auto rounded-full shadow"
              aria-label="Scroll left"
              onClick={() => scroll("left")}
            >
              ←
            </Button>
            <Button
              size="icon"
              variant="secondary"
              className="pointer-events-auto rounded-full shadow"
              aria-label="Scroll right"
              onClick={() => scroll("right")}
            >
              →
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
