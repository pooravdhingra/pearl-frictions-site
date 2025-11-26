import Image from "next/image";
import Link from "next/link";
import { Card } from "@/components/ui/card";
import { Breadcrumbs } from "@/components/breadcrumbs";

const products = [
  {
    name: "Ceramic Fiber",
    href: "/products/non-asbestos-fibers/ceramic-fiber",
    img: "/products/ceramic-fiber/1.jpg",
  },
  {
    name: "Rockwool Fiber",
    href: "/products/non-asbestos-fibers/rockwool-fiber",
    img: "/products/rockwool-fiber/1.jpg",
  },
  {
    name: "Composite Mineral Fiber",
    href: "/products/non-asbestos-fibers/composite-mineral-fiber",
    img: "/products/composite-mineral-fiber/1.jpg",
  },
  {
    name: "Glass Chopped Strands",
    href: "/products/non-asbestos-fibers/glass-chopped-strands",
    img: "/products/glass-chopped-strands/1.jpg",
  },
  {
    name: "Cellulose Fiber",
    href: "/products/non-asbestos-fibers/cellulose-fiber",
    img: "/products/cellulose-fiber/1.jpg",
  },
];

export default function NonAsbestosFibersCategory() {
  return (
    <div className="mx-auto max-w-7xl px-4 py-10">
      <Breadcrumbs
        items={[
          { label: "Home", href: "/" },
          { label: "Products", href: "/products" },
          { label: "Non-Asbestos Fibers" },
        ]}
      />

      <h1 className="mt-4 text-3xl font-semibold tracking-tight">Non-Asbestos Fibers</h1>
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
