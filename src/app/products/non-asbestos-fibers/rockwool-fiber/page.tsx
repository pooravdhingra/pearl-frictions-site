import { ProductGallery } from "@/components/product-gallery";
import { Breadcrumbs } from "@/components/breadcrumbs";

const images = ["/products/rockwool-fiber/1.jpg"];

const rows: [string, string][] = [
  ["Packaging Size", "25 Kg"],
  ["Packaging Type", "HDPE bag"],
  ["Material", "Rock wool mineral fibre"],
  ["Color", "Grey"],
  ["Country of Origin", "Made in India"],
  ["Minimum Order Quantity", "50 Kg"],
];

export default function RockwoolFiber() {
  return (
    <div className="mx-auto max-w-7xl px-4 py-10">
      <Breadcrumbs
        items={[
          { label: "Home", href: "/" },
          { label: "Products", href: "/products" },
          { label: "Non-Asbestos Fibers", href: "/products/non-asbestos-fibers" },
          { label: "Rockwool Fiber" },
        ]}
      />

      <div className="mt-4 grid gap-8 md:grid-cols-2">
        <ProductGallery images={images} />
        <div>
          <h1 className="text-3xl font-semibold tracking-tight">Rockwool Fiber</h1>
          <p className="mt-3 text-sm text-muted-foreground">
            Rockwool fiber is ideal not only for insulation but also for automotive brake pads and
            friction plates. With very low shot content and loss on ignition, the material is easily
            dispersible, providing very good mixing with other raw materials in friction and
            insulation formulations.
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
