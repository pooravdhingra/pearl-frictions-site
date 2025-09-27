import Image from "next/image";
import Link from "next/link";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

type Item = { name: string; href: string; img: string };

const defaultItems: Item[] = [
  {
    name: "Antivibration Cork Sheet",
    href: "/products/cork/antivibration-cork-sheet",
    img: "/products/antivibration-cork-sheet/1.jpg",
  },
  {
    name: "Rubberised Cork Sheet",
    href: "/products/cork/rubberised-cork-sheet",
    img: "/products/rubberised-cork-sheet/1.jpg",
  },
  {
    name: "Flexible Graphite Sheet (Rolls)",
    href: "/products/graphite/flexible-graphite-sheet",
    img: "/products/flexible-graphite-sheet/1.jpg",
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

        <div className="mt-6 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {items.map((p) => (
            <Link key={p.href} href={p.href}>
              <Card className="overflow-hidden hover:shadow-lg transition">
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
