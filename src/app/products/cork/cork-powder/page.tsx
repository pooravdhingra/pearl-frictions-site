import { ProductGallery } from "@/components/product-gallery";
import { Breadcrumbs } from "@/components/breadcrumbs";

const images = [
  "/products/cork-powder/1.jpg",
  "/products/cork-powder/2.jpg",
  "/products/cork-powder/3.jpg",
];

const rows: [string, string][] = [
  ["Density", "55 Kg/cm³"],
  ["Material", "Cork wood"],
  ["Color", "Natural light brown"],
  ["Use", "Industrial"],
  ["Condition", "New"],
  ["Pattern", "Powder"],
  ["Minimum Order Quantity", "100 Kg"],
];

export default function CorkPowder() {
  return (
    <div className="mx-auto max-w-7xl px-4 py-10">
      <Breadcrumbs
        items={[
          { label: "Home", href: "/" },
          { label: "Products", href: "/products" },
          { label: "Cork Products", href: "/products/cork" },
          { label: "Cork Powder" },
        ]}
      />

      <div className="mt-4 grid gap-8 md:grid-cols-2">
        <ProductGallery images={images} />
        <div>
          <h1 className="text-3xl font-semibold tracking-tight">Cork Powder</h1>
          <p className="mt-3 text-sm text-muted-foreground">
            We produce superfine quality cork powder up to 325 mesh size. It is widely used in
            batteries and other rubber moulding products where controlled density and particle size
            are critical for performance.
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
