import { ProductGallery } from "@/components/product-gallery";
import { Breadcrumbs } from "@/components/breadcrumbs";

const images = [
  "/products/glass-chopped-strands/1.jpg",
  "/products/glass-chopped-strands/2.jpg",
  "/products/glass-chopped-strands/3.jpg",
];

const rows: [string, string][] = [
  ["Length of Strands", "12 mm"],
  ["Usage / Application", "Filling / reinforcement material"],
  ["Color", "White"],
  ["Material", "E-glass"],
  ["Brand", "Pearl"],
  ["Surface", "Polished"],
  ["Size / Dimension", "3mm, 6mm, 12mm"],
];

export default function GlassChoppedStrands() {
  return (
    <div className="mx-auto max-w-7xl px-4 py-10">
      <Breadcrumbs
        items={[
          { label: "Home", href: "/" },
          { label: "Products", href: "/products" },
          { label: "Non-Asbestos Fibers", href: "/products/non-asbestos-fibers" },
          { label: "Glass Chopped Strands" },
        ]}
      />

      <div className="mt-4 grid gap-8 md:grid-cols-2">
        <ProductGallery images={images} />
        <div>
          <h1 className="text-3xl font-semibold tracking-tight">Glass Chopped Strands</h1>
          <p className="mt-3 text-sm text-muted-foreground">
            We import superfine, phenol-modified short-cut glass chopped strands, ideal for
            reinforcement in automotive brake shoes, disc pads and brake linings. They provide
            enhanced strength and stability to friction formulations.
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
