import { ProductGallery } from "@/components/product-gallery";
import { Breadcrumbs } from "@/components/breadcrumbs";

const images = ["/products/cellulose-fiber/1.jpg"];

const rows: [string, string][] = [
  ["Material", "Wood pulp"],
  ["Pattern", "Raw"],
  ["Weight", "20 Kg / bag"],
  ["Color", "White"],
  ["Brand", "Creafill"],
  ["Minimum Order Quantity", "1000 Kg"],
];

export default function CelluloseFiber() {
  return (
    <div className="mx-auto max-w-7xl px-4 py-10">
      <Breadcrumbs
        items={[
          { label: "Home", href: "/" },
          { label: "Products", href: "/products" },
          { label: "Non-Asbestos Fibers", href: "/products/non-asbestos-fibers" },
          { label: "Cellulose Fiber" },
        ]}
      />

      <div className="mt-4 grid gap-8 md:grid-cols-2">
        <ProductGallery images={images} />
        <div>
          <h1 className="text-3xl font-semibold tracking-tight">Cellulose Fiber</h1>
          <p className="mt-3 text-sm text-muted-foreground">
            We are sole distributors of Creafill cellulose fibers (USA) in India for friction and
            industrial applications. These wood-pulp-based fibers are used in a range of friction
            formulations where controlled porosity and stability are required.
          </p>

          <h2 className="mt-6 text-lg font-medium">Product Details</h2>
          <table className="mt-2 w-full overflow-hidden rounded-lg border text-sm">
            <tbody>
              {rows.map(([k, v]) => (
                <tr key={k} className="border-b last:border-none">
                  <td className="w-1/3 bg-muted/50 px-3 py-2 font-medium">{k}</td>
                  <td className="px-3 py-2">{v}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
