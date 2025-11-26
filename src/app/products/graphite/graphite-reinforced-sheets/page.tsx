import { ProductGallery } from "@/components/product-gallery";
import { Breadcrumbs } from "@/components/breadcrumbs";

const images = [
  "/products/graphite-reinforced-sheets/1.jpg",
  "/products/graphite-reinforced-sheets/2.jpg",
  "/products/graphite-reinforced-sheets/3.jpg",
];

const rows: [string, string][] = [
  ["Usage / Application", "Industrial"],
  ["Color", "Black"],
  ["Material", "Graphite"],
  ["Size", "1000mm x 1000mm"],
  ["Shape", "Sheet"],
  ["Brand", "PEARL"],
  ["Features", "High-temperature gasket and sealing material"],
  ["Minimum Order Quantity", "100 piece"],
];

export default function GraphiteReinforcedSheets() {
  return (
    <div className="mx-auto max-w-7xl px-4 py-10">
      <Breadcrumbs
        items={[
          { label: "Home", href: "/" },
          { label: "Products", href: "/products" },
          { label: "Graphite Products", href: "/products/graphite" },
          { label: "Graphite Reinforced Sheets" },
        ]}
      />

      <div className="mt-4 grid gap-8 md:grid-cols-2">
        <ProductGallery images={images} />
        <div>
          <h1 className="text-3xl font-semibold tracking-tight">Graphite Reinforced Sheets</h1>
          <p className="mt-3 text-sm text-muted-foreground">
            We are one of the leading importers and suppliers of graphite reinforced gasket sheets.
            Expanded graphite sheets with 99% carbon content are rolled onto punched SS-304 plates
            to form high-performance sandwich material, ideal for high-temperature gaskets, seals
            and flanges.
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
