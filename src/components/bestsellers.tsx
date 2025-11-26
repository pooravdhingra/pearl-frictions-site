"use client";

import Image from "next/image";
import Link from "next/link";
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
];

export function Bestsellers({ items = defaultItems }: { items?: Item[] }) {
  return (
    <section className="bg-muted/30">
      <div className="mx-auto max-w-7xl px-4 py-14">
        <div className="flex items-end justify-between">
          <h2 className="text-2xl font-semibold tracking-tight">Bestselling Products</h2>
          <Link href="/products">
            <Button variant="outline">View All</Button>
          </Link>
        </div>

        <div className="mt-6 grid gap-6 sm:grid-cols-3">
          {items.map((p) => (
            <Link key={p.href} href={p.href} className="block">
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
      </div>
    </section>
  );
}
