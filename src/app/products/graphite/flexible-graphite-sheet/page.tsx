import { ProductGallery } from "@/components/product-gallery";
import { Breadcrumbs } from "@/components/breadcrumbs";

const images = [
  "/products/flexible-graphite-sheet/1.jpg",
  "/products/flexible-graphite-sheet/2.jpg",
  "/products/flexible-graphite-sheet/3.jpg",
];

const rows: [string, string][] = [
  ["Shape", "In roll form"],
  ["Brand", "PEARL / Imported"],
  ["Finishing", "Black finish"],
  ["Material", "Graphite flakes"],
  ["Thickness", "0.3mm to 1mm"],
  ["Size", "1 metre"],
  ["Color", "Black"],
  ["Use", "Automotive & Industrial"],
  ["Minimum Order Quantity", "100 Kg"],
  ["Packaging Details", "Cartons with Thermocole inserts"],
];

export default function FlexibleGraphiteRolls() {
  return (
    <div className="mx-auto max-w-7xl px-4 py-10">
      <Breadcrumbs
        items={[
          { label: "Home", href: "/" },
          { label: "Products", href: "/products" },
          { label: "Graphite Products", href: "/products/graphite" },
          { label: "Flexible Graphite Rolls" },
        ]}
      />

      <div className="mt-4 grid gap-8 md:grid-cols-2">
        <ProductGallery images={images} />
        <div>
          <h1 className="text-3xl font-semibold tracking-tight">Flexible Graphite Rolls</h1>
          <p className="mt-3 text-sm text-muted-foreground">
            High-quality pure flexible graphite rolls with ~99% carbon content and density around
            1.0 gm/cc. Designed for demanding sealing and thermal applications across automotive and
            industrial use-cases, especially where continuous roll material is required.
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
