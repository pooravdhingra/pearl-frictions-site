import { ProductGallery } from "@/components/product-gallery";
import { Breadcrumbs } from "@/components/breadcrumbs";

const images = ["/products/ceramic-fiber/1.jpg"]; // single image as requested

const rows: [string, string][] = [
  ["Grade", "New"],
  ["Max Withstanding Temperature", "1200°C"],
  ["Packaging Type", "HDPE Bags"],
  ["Pattern", "Treated"],
  ["Brand", "Pearl"],
  ["Packaging Size", "25 Kgs"],
  ["Color", "White"],
  ["Material", "Ceramic"],
  ["Minimum Order Quantity", "25 Kg"],
];

export default function CeramicFiber() {
  return (
    <div className="mx-auto max-w-7xl px-4 py-10">
      <Breadcrumbs
        items={[
          { label: "Home", href: "/" },
          { label: "Products", href: "/products" },
          { label: "Non-Asbestos Fibers", href: "/products/non-asbestos-fibers" },
          { label: "Ceramic Fiber" },
        ]}
      />

      <div className="mt-4 grid gap-8 md:grid-cols-2">
        <ProductGallery images={images} />
        <div>
          <h1 className="text-3xl font-semibold tracking-tight">Ceramic Fiber</h1>
          <p className="mt-3 text-sm text-muted-foreground">
            Ceramic fiber, available in both long-cut and short-cut grades, serves many different
            applications. With ultra-low loss on ignition, it can be used in insulation, fire
            retardant fabrics, automotive brakes and clutches, gaskets and many other applications.
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
