import { ProductGallery } from "@/components/product-gallery";
import { Breadcrumbs } from "@/components/breadcrumbs";

const images = [
  "/products/flexible-graphite-tape/1.jpg",
  "/products/flexible-graphite-tape/2.jpg",
  "/products/flexible-graphite-tape/3.jpg",
];

const rows: [string, string][] = [
  ["Thickness", "0.5 mm"],
  ["Packaging Type", "In rolls"],
  ["Color", "Black"],
  ["Material", "Graphite"],
  ["Usage / Application", "Automotive gaskets, spiral wound gaskets"],
  ["Roll Length", "50 metres"],
  ["Width", "3.7mm, 5.5mm, 12mm, 19mm"],
  ["Minimum Order Quantity", "100 piece"],
];

export default function FlexibleGraphiteTape() {
  return (
    <div className="mx-auto max-w-7xl px-4 py-10">
      <Breadcrumbs
        items={[
          { label: "Home", href: "/" },
          { label: "Products", href: "/products" },
          { label: "Graphite Products", href: "/products/graphite" },
          { label: "Flexible Graphite Tape" },
        ]}
      />

      <div className="mt-4 grid gap-8 md:grid-cols-2">
        <ProductGallery images={images} />
        <div>
          <h1 className="text-3xl font-semibold tracking-tight">Flexible Graphite Tape</h1>
          <p className="mt-3 text-sm text-muted-foreground">
            We import superfine quality flexible graphite tape with approximately 99% carbon content
            and a density of 1.0 gm/cc. These tapes are used for manufacturing automotive and
            industrial spiral wound gaskets with minimal material wastage and excellent sealing
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
