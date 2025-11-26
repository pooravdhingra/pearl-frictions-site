import Image from "next/image";
import Link from "next/link";
import { Card } from "@/components/ui/card";
import { Breadcrumbs } from "@/components/breadcrumbs";

const products = [
  {
    name: "Anti-Vibration Cork Sheets",
    href: "/products/cork/antivibration-cork-sheet",
    img: "/products/antivibration-cork-sheet/1.jpg",
  },
  {
    name: "Rubberised Cork Sheets",
    href: "/products/cork/rubberised-cork-sheet",
    img: "/products/rubberised-cork-sheet/1.jpg",
  },
  {
    name: "Cork Granules",
    href: "/products/cork/cork-granules",
    img: "/products/cork-granules/1.jpg",
  },
  {
    name: "Cork Powder",
    href: "/products/cork/cork-powder",
    img: "/products/cork-powder/1.jpg",
  },
  {
    name: "Wooden Cork Stopper",
    href: "/products/cork/wooden-cork-stopper",
    img: "/products/wooden-cork-stopper/1.jpg",
  },
  {
    name: "Decorative Cork Sheets & Tiles",
    href: "/products/cork/decorative-cork-sheets-tiles",
    img: "/products/decorative-cork-sheets-tiles/1.jpg",
  },
];

export default function CorkCategory() {
  return (
    <div className="mx-auto max-w-7xl px-4 py-10">
      <Breadcrumbs
        items={[
          { label: "Home", href: "/" },
          { label: "Products", href: "/products" },
          { label: "Cork Products" },
        ]}
      />

      <h1 className="mt-4 text-3xl font-semibold tracking-tight">Cork Products</h1>
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
