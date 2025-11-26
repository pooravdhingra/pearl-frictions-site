import Image from "next/image";
import Link from "next/link";
import { Card } from "@/components/ui/card";
import { Breadcrumbs } from "@/components/breadcrumbs";

const products = [
  {
    name: "Asbestos Rope",
    href: "/products/asbestos/asbestos-rope",
    img: "/products/asbestos-rope/1.jpg",
  },
  {
    name: "Chrysotile Asbestos Fiber",
    href: "/products/asbestos/chrysotile-asbestos-fiber",
    img: "/products/chrysotile-asbestos-fiber/1.jpg",
  },
  {
    name: "Asbestos Yarn",
    href: "/products/asbestos/asbestos-yarn",
    img: "/products/asbestos-yarn/1.jpg",
  },
  {
    name: "Asbestos Cloth",
    href: "/products/asbestos/asbestos-cloth",
    img: "/products/asbestos-cloth/1.jpg",
  },
  {
    name: "Asbestos Webbing Tape",
    href: "/products/asbestos/asbestos-webbing-tape",
    img: "/products/asbestos-webbing-tape/1.jpg",
  },
  {
    name: "Gasket Jointing Sheets (C.A.F & N.A.M.)",
    href: "/products/asbestos/gasket-jointing-sheets",
    img: "/products/gasket-jointing-sheets/1.jpg",
  },
];

export default function AsbestosCategory() {
  return (
    <div className="mx-auto max-w-7xl px-4 py-10">
      <Breadcrumbs
        items={[
          { label: "Home", href: "/" },
          { label: "Products", href: "/products" },
          { label: "Asbestos Products" },
        ]}
      />

      <h1 className="mt-4 text-3xl font-semibold tracking-tight">Asbestos Products</h1>
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
