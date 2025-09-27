import Image from "next/image";
import Link from "next/link";
import { Bestsellers } from "@/components/bestsellers";
import { Card } from "@/components/ui/card";
import { Breadcrumbs } from "@/components/breadcrumbs";

const categories = [
  { name: "Cork", href: "/products/cork", img: "/categories/cork.jpg" },
  { name: "Graphite", href: "/products/graphite", img: "/categories/graphite.jpg" },
];

export default function ProductsIndex() {
  return (
    <>
      <Breadcrumbs items={[{ label: "Home", href: "/" }, { label: "Products" }]} />
      <Bestsellers />

      <section className="mx-auto max-w-7xl px-4 py-14">
        <h2 className="text-2xl font-semibold tracking-tight">View by Category</h2>
        <div className="mt-6 grid gap-6 sm:grid-cols-2">
          {categories.map((c) => (
            <Link key={c.href} href={c.href}>
              <Card className="overflow-hidden hover:shadow-lg transition">
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
