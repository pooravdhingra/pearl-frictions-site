import Image from "next/image";
import Link from "next/link";
import { Card } from "@/components/ui/card";
import { Breadcrumbs } from "@/components/breadcrumbs";

const products = [
  {
    name: "Flexible Graphite Sheet (Rolls)",
    href: "/products/graphite/flexible-graphite-sheet",
    img: "/products/flexible-graphite-sheet/1.jpg",
  },
];

export default function GraphiteCategory() {
  return (
    <div className="mx-auto max-w-7xl px-4 py-10">
      <Breadcrumbs items={[{ label: "Home", href: "/" }, { label: "Products", href: "/products" }, { label: "Graphite" }]} />

      <h1 className="mt-4 text-3xl font-semibold tracking-tight">Graphite</h1>
      <div className="mt-6 grid gap-6 sm:grid-cols-2">
        {products.map((p) => (
          <Link key={p.href} href={p.href}>
            <Card className="overflow-hidden hover:shadow-lg transition">
              <div className="relative aspect-[4/3]">
                <Image src={p.img} alt={p.name} fill className="object-cover" />
              </div>
              <div className="p-4">
                <div className="font-medium">{p.name}</div>
                <div className="text-sm text-muted-foreground">View details →</div>
              </div>
            </Card>
          </Link>
        ))}
      </div>
    </div>
  );
}
