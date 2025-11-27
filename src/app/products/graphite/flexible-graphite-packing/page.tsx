import { ProductGallery } from "@/components/product-gallery";
import { Breadcrumbs } from "@/components/breadcrumbs";

const images = [
  "/products/flexible-graphite-packing/1.jpg",
  "/products/flexible-graphite-packing/2.jpg",
  "/products/flexible-graphite-packing/3.jpg",
];

const rows: [string, string][] = [
  ["Size", "6mm to 50mm"],
  ["Color", "Black"],
  ["Material", "Graphite"],
  ["Packing", "5kg / coil"],
  ["Condition", "New"],
  ["Usage / Application", "Industrial use"],
  ["Minimum Order Quantity", "100 kgs"],
];

export default function FlexibleGraphitePacking() {
  return (
    <div className="mx-auto max-w-7xl px-4 py-10">
      <Breadcrumbs
        items={[
          { label: "Home", href: "/" },
          { label: "Products", href: "/products" },
          { label: "Graphite Products", href: "/products/graphite" },
          { label: "Flexible Graphite Packing" },
        ]}
      />

      <div className="mt-4 grid gap-8 md:grid-cols-2">
        <ProductGallery images={images} />
        <div>
          <h1 className="text-3xl font-semibold tracking-tight">Flexible Graphite Packing</h1>
          <p className="mt-3 text-sm text-muted-foreground">
            We are importers and stockists of expanded flexible graphite packing, available with
            glass fibre cores, stainless steel wire and Inconel wire, in high purity (99% carbon
            content). These packings are designed to withstand temperatures up to 1200°C for
            extended durations in demanding industrial environments.
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
