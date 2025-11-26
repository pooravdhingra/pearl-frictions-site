import Image from "next/image";
import Link from "next/link";
import { Bestsellers } from "@/components/bestsellers";
import { Card } from "@/components/ui/card";
import { Breadcrumbs } from "@/components/breadcrumbs";

const categories = [
  {
    name: "Cork Products",
    href: "/products/cork",
    img: "/categories/cork.jpg",
  },
  {
    name: "Graphite Products",
    href: "/products/graphite",
    img: "/categories/graphite.jpg",
  },
  {
    name: "Asbestos Products",
    href: "/products/asbestos",
    img: "/categories/asbestos.jpg",
  },
  {
    name: "Non-Asbestos Fibers",
    href: "/products/non-asbestos-fibers",
    img: "/categories/non-asbestos-fibers.jpg",
  },
  {
    name: "Rubber Products",
    href: "/products/rubber",
    img: "/categories/rubber.jpg",
  },
];

export default function ProductsIndex() {
  return (
    <>
      <Bestsellers />

      <Breadcrumbs items={[{ label: "Home", href: "/" }, { label: "Products" }]} />

      <section className="mx-auto max-w-7xl px-4 py-14">
        <h2 className="text-2xl font-semibold tracking-tight">View by Category</h2>
        <div className="mt-6 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {categories.map((c) => (
            <Link key={c.href} href={c.href}>
              <Card className="overflow-hidden transition hover:shadow-lg">
                <div className="relative aspect-[4/3]">
                  <Image src={c.img} alt={c.name} fill className="object-cover" />
                </div>
                <div className="p-4">
                  <h3 className="text-lg font-medium">{c.name}</h3>
                </div>
              </Card>
            </Link>
          ))}
        </div>
      </section>
    </>
  );
}
