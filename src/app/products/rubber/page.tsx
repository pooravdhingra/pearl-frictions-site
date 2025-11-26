import Image from "next/image";
import Link from "next/link";
import { Card } from "@/components/ui/card";
import { Breadcrumbs } from "@/components/breadcrumbs";

const products = [
  {
    name: "NBR Powder",
    href: "/products/rubber/nbr-powder",
    img: "/products/nbr-powder/1.jpg",
  },
  {
    name: "Synthetic Rubber Bales (NBR)",
    href: "/products/rubber/synthetic-rubber-bales",
    img: "/products/synthetic-rubber-bales/1.jpg",
  },
];

export default function RubberCategory() {
  return (
    <div className="mx-auto max-w-7xl px-4 py-10">
      <Breadcrumbs
        items={[
          { label: "Home", href: "/" },
          { label: "Products", href: "/products" },
          { label: "Rubber Products" },
        ]}
      />

      <h1 className="mt-4 text-3xl font-semibold tracking-tight">Rubber Products</h1>
      <div className="mt-6 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {products.map((p) => (
          <Link key={p.href} href={p.href}>
            <Card className="overflow-hidden transition hover:shadow-lg">
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
