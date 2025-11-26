import { ProductGallery } from "@/components/product-gallery";
import { Breadcrumbs } from "@/components/breadcrumbs";

const images = [
  "/products/nbr-powder/1.jpg",
  "/products/nbr-powder/2.jpg",
  "/products/nbr-powder/3.jpg",
];

const rows: [string, string][] = [
  ["Application / Uses", "Automotive"],
  ["Acrylonitrile Content", "38"],
  ["Grade", "XL 38.43, 34.82, 34.52"],
  ["Brand", "Lanxess, Arlanxeo, Zeon"],
  ["Packaging Type", "Cartons"],
  ["Viscosity", "50–80"],
  ["Material", "NBR Rubber Powder"],
  ["Color", "Off White"],
  ["Condition", "New"],
  ["Use", "Industrial"],
  ["Minimum Order Quantity", "100 kg"],
];

export default function NbrPowder() {
  return (
    <div className="mx-auto max-w-7xl px-4 py-10">
      <Breadcrumbs
        items={[
          { label: "Home", href: "/" },
          { label: "Products", href: "/products" },
          { label: "Rubber Products", href: "/products/rubber" },
          { label: "NBR Powder" },
        ]}
      />

      <div className="mt-4 grid gap-8 md:grid-cols-2">
        <ProductGallery images={images} />
        <div>
          <h1 className="text-3xl font-semibold tracking-tight">NBR Powder</h1>
          <p className="mt-3 text-sm text-muted-foreground">
            We are one of the leading importers and distributors of advanced friction raw
            materials. NBR rubber powder is offered for both asbestos-based and non-asbestos brake
            linings, brake rolls, clutch facings, disc pads and railway blocks.
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
