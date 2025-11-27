import { ProductGallery } from "@/components/product-gallery";
import { Breadcrumbs } from "@/components/breadcrumbs";

const images = ["/products/composite-mineral-fiber/1.jpg"];

const rows: [string, string][] = [
  ["Packaging Type", "Bag"],
  ["Color", "Grey, White"],
  ["Features", "Imported composite mineral fibre"],
  ["Packaging Size", "25 Kgs"],
  ["Brand", "Pearl"],
  ["Minimum Order Quantity", "100 kgs"],
];

export default function CompositeMineralFiber() {
  return (
    <div className="mx-auto max-w-7xl px-4 py-10">
      <Breadcrumbs
        items={[
          { label: "Home", href: "/" },
          { label: "Products", href: "/products" },
          { label: "Non-Asbestos Fibers", href: "/products/non-asbestos-fibers" },
          { label: "Composite Mineral Fiber" },
        ]}
      />

      <div className="mt-4 grid gap-8 md:grid-cols-2">
        <ProductGallery images={images} />
        <div>
          <h1 className="text-3xl font-semibold tracking-tight">Composite Mineral Fiber</h1>
          <p className="mt-3 text-sm text-muted-foreground">
            We import superfine composite mineral fiber for applications such as automotive brakes
            and clutches, insulation and fillers. The fiber is easily dispersible and offers very
            low shot content and loss on ignition, allowing uniform mixing and stable friction
            performance.
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
